import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData
} from "@remix-run/react";
import React from "react";
import { ErrorBoundaryComponent, LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";
import globalStylesUrl from "./styles/global.css";
import globalMediumStylesUrl from "./styles/global-medium.css";
import globalLargeStylesUrl from "./styles/global-large.css";
import toastStyleSheetUrl from "./styles/toast.css";
import tailWindStyles from "./tailwind.css";
import Layout from "./components/ui/layout";
import AppContextProvider from "./components/context/appContext";
import { LayoutPageData } from "./types/types";
import { BiError } from "react-icons/bi";
import ThemeContextProvider from "./components/context/themeContext";
import { lessRoundedBasicLargeButton } from "./utils/styles";
import { getHeader } from "./sanity/query/header.server";
import { getFooter } from "./sanity/query/footer.server";
import { getSession } from "./supabase/session";
import { isAuthenticated, supabaseAdmin } from "./supabase/supabase.server";
import { definitions } from "./supabase";
import { CatchBoundaryComponent } from "@remix-run/react/dist/routeModules";

export const loader: LoaderFunction = async ({request}) => {

  const header = await getHeader()

  if (!header) {
    throw new Response("Something went wrong",{status: 500});
  }
  const footer = await getFooter();
  if (!footer) {
    throw new Response("Something went wrong",{status: 500});
  }

  const response = {
    header,
    footer,
    isAuthenticated: false,
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      SERVER_URL: process.env.SERVER_URL,
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
      GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY
    }
  } as LayoutPageData

  // const session = await getSession(request.headers.get('Cookie'))

  // if(session.has("access_token")){
  //   const [user,error] = await isAuthenticated(request,true);
  //   if(user){
  //      response.isAuthenticated = true
  //      response.user = user
  //   }
  //   if(error){
  //     console.log(error)
  //   }
  //   const profileResponse= await supabaseAdmin.from<definitions['profiles']>("profiles").select("*").eq("id",user?.id).single()
  //   if(profileResponse.data){
  //     response.profile = profileResponse.data
  //   }
  //   if(profileResponse.error){
  //     console.log(profileResponse.error)
  //   }
  // }

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
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Outfit&family=Poppins&family=Inter&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Outfit&family=Poppins&family=Inter&display=swap",
    },
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
    {
      rel: "stylesheet",
      href: toastStyleSheetUrl,
    },
    {
      rel: "stylesheet",
      href: tailWindStyles,
    },
    {
      rel: "stylesheet",
      href: globalMediumStylesUrl,
      media: "print, (min-width: 640px)",
    },
    {
      rel: "stylesheet",
      href: globalLargeStylesUrl,
      media: "screen and (min-width: 1024px)",
    },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Brightways" };
};

type DocumentProps = {
  env?: typeof window.env
}

const Document: React.FC<DocumentProps> = ({ children,env }) => {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-white dark:bg-gray-900">
        <ThemeContextProvider>
        {children}
        </ThemeContextProvider>
        <ScrollRestoration />
        {env &&
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`
          }}
        />}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function App() {

  const {env} = useLoaderData<LayoutPageData>();

  return (
    <Document env={env}>
      <AppContextProvider>
        <Layout>
            <Outlet />
        </Layout>
      </AppContextProvider>
    </Document>
  );
}

export const CatchBoundary : CatchBoundaryComponent = () => {

  const error = useCatch()

  return (
    <Document>
          <div className=" absolute right-0 lg:right-[calc(50%-200px)] top-[calc(50%-200px)] md:border-2 md:border-gray-400 p-10 flex flex-col gap-5 col-start-1 col-span-full lg:col-start-4 lg:col-end-10 h-[400px] w-full lg:w-[400px]">
            <h1 className=" font-heading font-bold text-[50px] lg:text-[100px] dark:text-white text-black text-center overflow-visible">{error.status}</h1>
            <p className=" font-text font-medium text-center text-[18px] dark:text-white text-black">{error.data}</p>
            <button className={`${lessRoundedBasicLargeButton} overflow-visible`}><Link to="/" >Back Home</Link></button>
          </div>
    </Document>
  )
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error } : {error: unknown}) => {

  console.log(error)

  return (
    <Document>
      <section className="min-h-screen min-w-full flex bg-blue justify-center items-center">
      <div className="p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center">
      <BiError className="fill-error-red h-[100px] w-[100px]" />
      <h1 className="text-red font-heading font-extrabold text-[48px]">Sorry</h1>
      <p className="font-text text-[18px] mb-3">Something went wrong!</p>
      <button className="p-3 rounded-md bg-blue text-white font-text text-[18px]" onClick={() => location.reload()}>Try Again</button>
      </div>
      </section>
    </Document>
  );
};
