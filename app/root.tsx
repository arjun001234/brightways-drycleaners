import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import React from "react";
import {
  ErrorBoundaryComponent,
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import globalStylesUrl from "./styles/global.css";
import toastStyleSheetUrl from "./styles/toast.css";
import tailWindStyles from "./tailwind.css";
import AppContextProvider from "./components/context/appContext";
import { LayoutPageData } from "./types/types";
import ThemeContextProvider from "./components/context/themeContext";
import { getHeader } from "./sanity/query/header.server";
import { getFooter } from "./sanity/query/footer.server";
import { CatchBoundaryComponent } from "@remix-run/react/dist/routeModules";
import ComingSoon from "./components/ui/comingSoon";
import Layout from "./components/ui/layout";
import ServerError from "./components/errors/serverError";
import logger from "./logging/logger";
import crypto from 'crypto';

export const loader: LoaderFunction = async ({ request }) => {
  // throw new Response("Under Maintenance",{
  //   status: 500
  // })

  const header = await getHeader();

  if (!header) {
    throw new Response("Something went wrong", { status: 500 });
  }
  const footer = await getFooter();
  if (!footer) {
    throw new Response("Something went wrong", { status: 500 });
  }

  const response : LayoutPageData = {
    header,
    footer,
    isAuthenticated: false,
    nonce: crypto.randomBytes(16).toString("hex"),
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      SERVER_URL: process.env.SERVER_URL,
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
      GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    },
  } as LayoutPageData;

  return response;
};

export const links: LinksFunction = () => {

  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "preload",
      as: "style",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Outfit&family=Poppins&family=Inter&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Outfit&family=Poppins&family=Inter&display=swap",
    },
    {
      rel: "stylesheet",
      href: globalStylesUrl
    },
    {
      rel: "stylesheet",
      href: toastStyleSheetUrl
    },
    {
      rel: "stylesheet",
      href: tailWindStyles
    }
  ];
};

type DocumentProps = {
  env?: typeof window.env
  nonce?: string
};

const Document: React.FC<DocumentProps> = ({ children, env, nonce}) => {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" content={`default-src 'self'  api.sanity.io;
        style-src 'self' 'unsafe-hashes' fonts.googleapis.com 'sha256-lhyBwc40leacQ9n74ktreS/EGE1VNvHUKqW16hIOKvk=' 'sha256-b+83wK2HeZ9RpHdSrLD3Q7Czye/tctcoV2OrhN9EjgE=' https://fonts.googleapis.com 'sha256-mmA4m52ZWPKWAzDvKQbF7Qhx9VHCZ2pcEdC0f9Xn/Po=' 'sha256-59z2Ykt7odDkwf2/Ef0ZgCSGegjdzB0AWB4812PzQnA=' 'sha256-/VVOq+Ws/EiUxf2CU6tsqsHdOWqBgHSgwBPqCTjYD3U=' 'sha256-lqO9GtizDrXbeRXIR3ynpmU+gCyvU40G2GmqvrAGxBk=' 'sha256-k8VVyuObKUPygF5AIY0Saj1vg5MaPPa/250lyF74yPQ=' 'sha256-jPTo51UfMyQY49ExaRBNooDCP2NMF8PgeSYuKJSVZpA=' 'sha256-NsEzkM762veirpWZeMiqlWTPdCYrm1uJHLzzwfYnDLM='  'sha256-PNsPul0zQFUiYu9XLVKzTdD5Cz5ghp1MT4H5/zAeI3Q=';
        img-src * 'self' https://*.googleapis.com https://*.gstatic.com *.google.com  *.googleusercontent.com data:;
        script-src 'self' 'nonce-${nonce}' www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ maps.googleapis.com static.cloudflareinsights.com https://*.googleapis.com https://*.gstatic.com *.google.com https://*.ggpht.com *.googleusercontent.com;
        font-src 'self' https://fonts.gstatic.com;
        frame-src *.google.com;
        connect-src 'self' https://*.googleapis.com *.google.com https://*.gstatic.com  data: blob:;`} />
        <meta name="keywords" content="dry cleaner near me,brightways dry cleaners faridabad,brightways dry cleaners,best dry cleaners in faridabad,dry cleaners in nit faridabad,dryclean shop near me,drycleaner in sector 21c faridabad,drycleaner in sector 21c faridabad,curtain dry cleaning near me,dryclean shop near me,sofa dry cleaning,drycleaners,drycleaning,dry cleaning services near me" />
        <Meta />
        <Links />
      </head> 
      <body className="bg-white dark:bg-gray-900">
        <ThemeContextProvider>{children}</ThemeContextProvider>
        {nonce && <ScrollRestoration nonce={nonce} />}
        {env && (
          <script
            nonce={nonce}
            dangerouslySetInnerHTML={{
              __html: `window.env = ${JSON.stringify(env)}`,
            }}
          />
        )}
        {nonce && <Scripts nonce={nonce} />}
        {nonce && <LiveReload nonce={nonce} />}
      </body>
    </html>
  );
};

export default function App() {
  const { env,nonce } = useLoaderData<LayoutPageData>();

  return (
    <Document env={env} nonce={nonce}>
      <AppContextProvider>
        <Layout>
          <Outlet />
        </Layout>
      </AppContextProvider>
    </Document>
  );
}

export const CatchBoundary: CatchBoundaryComponent = () => {

  const error = useCatch();

  logger.error(error, "Server error in root component");

  if (error.status === 503) {
    return (
      <Document>
        <ComingSoon />
      </Document>
    );
  }

  return (
    <Document>
      <ServerError status={error.status} message={error.data} />
    </Document>
  );
};

export const ErrorBoundary: ErrorBoundaryComponent = ({
  error,
}: {
  error: unknown;
}) => {

  logger.error(error, "Unexpected error in root component");

  return (
    <Document>
      <ServerError status={500} message={"Something went wrong!"}  />
    </Document>
  );
};
