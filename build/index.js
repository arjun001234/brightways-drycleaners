var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// empty-module:~/supabase/supabase.client
var require_supabase = __commonJS({
  "empty-module:~/supabase/supabase.client"(exports, module2) {
    init_react();
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:D:\projects\brightways\remix\app\root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_react15 = require("@remix-run/react");
var import_react16 = __toESM(require("react"));

// app/styles/global.css
var global_default = "/build/_assets/global-SUC2ZDHC.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-55DNWN2R.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-55DNWN2R.css";

// app/styles/toast.css
var toast_default = "/build/_assets/toast-5P2K5C2H.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-EMSYPX42.css";

// app/components/ui/layout.tsx
init_react();
var import_react10 = __toESM(require("react"));

// app/components/ui/footer.tsx
init_react();
var import_react2 = require("@remix-run/react");
var Footer = () => {
  const { footer } = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full bg-inherit flex justify-center items-center mx-auto px-[20px] md:px-[100px] h-auto gap-10 py-[100px] border-t-2 border-gray-400"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "w-[100%] gap-10 grid grid-cols-1 md:grid-cols-4 "
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-start gap-3 font-[14px]  dark:text-white text-black font-text"
  }, /* @__PURE__ */ React.createElement("img", {
    src: footer.logo.imageUrl
  }), /* @__PURE__ */ React.createElement("p", null, footer.desc)), footer.sections.map((section) => {
    return /* @__PURE__ */ React.createElement("section", {
      key: section._key,
      className: "flex flex-col items-start font-semibold gap-3 font-[14px] dark:text-white text-black  font-text"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "text-[12px] font-normal font-heading"
    }, section.name), section.links.map((link) => {
      return /* @__PURE__ */ React.createElement("a", {
        key: link._key,
        href: link.to
      }, link.name);
    }));
  })));
};
var footer_default = Footer;

// app/components/ui/header.tsx
init_react();
var import_react6 = __toESM(require("react"));
var import_bs = require("react-icons/bs");
var import_bs2 = require("react-icons/bs");

// app/components/context/appContext.tsx
init_react();
var import_react3 = require("@remix-run/react");
var import_react4 = __toESM(require("react"));
var AppContext = import_react4.default.createContext({
  user: null,
  profile: null,
  isAuthenticated: false
});
var AppContextProvider = ({ children }) => {
  const { isAuthenticated: isAuthenticated2, user, profile } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ import_react4.default.createElement(AppContext.Provider, {
    value: { isAuthenticated: isAuthenticated2, user: user ? user : null, profile: profile ? profile : null }
  }, children);
};
var appContext_default = AppContextProvider;

// app/utils/styles.ts
init_react();
var largeBasicButton = "h-[60px] w-full md:w-auto flex justify-center items-center px-[30px] rounded-md md:rounded-[30px] border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-blue hover:scale-110 transition-all duration-300";
var basicButton = "h-[40px] w-full md:w-auto flex justify-center items-center px-[30px] rounded-md md:rounded-[30px] border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-blue hover:scale-110 transition-all duration-300";
var lessRoundedBasicLargeButton = "h-[60px] w-auto flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-blue hover:scale-110 transition-all duration-300";
var borderGrowAnim = "after:z-[-1] after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 hover:after:opacity-100 hover:after:scale-105 after:scale-100 after:opacity-0 after:border-[3px] after:border-blue after:rounded-md after:transition-all after:duration-300";
var lessRoundedBasicInput = "h-[60px] w-full flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white  text-black transition-all duration-300 outline-none border-none dark:bg-gray-800 bg-gray-50 px-3  placeholder:font-text placeholder:font-semibold placeholder:text-gray-400 text-[16px]";
var lessRoundedBasicInputWithBorder = "h-[60px] w-full flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white  text-black transition-all duration-300 outline-none dark:bg-gray-800 bg-gray-50 px-3  placeholder:font-text placeholder:font-semibold placeholder:text-gray-400 text-[16px]";

// app/components/ui/header.tsx
var import_react7 = require("@remix-run/react");
var import_ai = require("react-icons/ai");

// app/components/context/themeContext.tsx
init_react();
var import_react5 = __toESM(require("react"));
var ThemeContext = import_react5.default.createContext({
  theme: "DARK" /* DARK */,
  setAppTheme: (theme) => {
  }
});
var ThemeContextProvider = ({ children }) => {
  const [theme, settheme] = import_react5.default.useState("DARK" /* DARK */);
  const setAppTheme = (theme2) => {
    console.log(theme2);
    if (theme2 === "DARK" /* DARK */) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      settheme("DARK" /* DARK */);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      settheme("LIGHT" /* LIGHT */);
    }
  };
  import_react5.default.useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      settheme("DARK" /* DARK */);
    } else {
      document.documentElement.classList.remove("dark");
      settheme("LIGHT" /* LIGHT */);
    }
  }, []);
  return /* @__PURE__ */ import_react5.default.createElement(ThemeContext.Provider, {
    value: { theme, setAppTheme }
  }, children);
};
var themeContext_default = ThemeContextProvider;

// app/components/ui/header.tsx
var Header = () => {
  const location2 = (0, import_react7.useLocation)();
  const { user, isAuthenticated: isAuthenticated2 } = import_react6.default.useContext(AppContext);
  const { setAppTheme, theme } = import_react6.default.useContext(ThemeContext);
  const { header } = (0, import_react7.useLoaderData)();
  const [open, setOpen] = import_react6.default.useState(false);
  const [visible, setVisible] = import_react6.default.useState(false);
  const [onTop, setOnTop] = import_react6.default.useState(true);
  const { logo, nav } = header;
  const isCurrentPage = (path) => {
    if (path === location2.pathname) {
      return true;
    }
    return false;
  };
  import_react6.default.useEffect(() => {
    let lastYScroll = window.pageYOffset;
    const handleScroll = () => {
      const currYScroll = window.pageYOffset;
      if (currYScroll > 100) {
        const direction = currYScroll > lastYScroll ? "down" : "up";
        direction === "down" ? setVisible(true) : setVisible(false);
        onTop ? setOnTop(false) : null;
        lastYScroll = direction === "down" ? currYScroll - 5 : currYScroll + 5;
      } else {
        setOnTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ import_react6.default.createElement("header", {
    className: `${visible ? "-translate-y-full" : "translate-y-0"} fixed top-0 left-0 right-0 h-[100px] flex flex-row items-center justify-between z-40 overflow-visible transition-transform duration-300 md:overflow-hidden px-[20px] md:px-[50px] dark:bg-gray-900 bg-white`
  }, /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "flex-1 md:flex-none"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "h-5 w-auto bg-cover",
    src: logo.imageUrl,
    alt: logo.alt
  })), /* @__PURE__ */ import_react6.default.createElement("ul", {
    className: `${open ? "scale-100 opacity-100 " : " scale-0 opacity-0 md:scale-100 md:opacity-100"} fixed top-0 left-0 right-0 h-[100vh] flex flex-col items-center justify-center transition-all duration-500 md:static md:flex-row md:bg-[transparent] md:w-auto md:h-auto md:overflow-hidden md:gap-3 md:px-5 dark:bg-gray-900 bg-white z-30`
  }, /* @__PURE__ */ import_react6.default.createElement(import_ai.AiOutlineClose, {
    className: "md:hidden dark:fill-white fill-black absolute right-[20px] top-[20px] h-[40px] w-[40px]",
    onClick: () => setOpen(false)
  }), nav.map((link) => {
    return /* @__PURE__ */ import_react6.default.createElement("li", {
      className: ` group py-4 w-[80%] font-text font-[18px] font-bold flex flex-col gap-1 justify-center items-center rounded-md transition-all duration-300 dark:text-white text-black md:text-gray-400  md:p-2 md:w-auto md:overflow-visible md:font-medium`,
      key: link._key
    }, /* @__PURE__ */ import_react6.default.createElement(import_react7.Link, {
      to: link.to,
      onClick: () => setOpen(false)
    }, link.name), /* @__PURE__ */ import_react6.default.createElement("span", {
      className: `${isCurrentPage(link.to) ? "w-full" : "w-0"}  group-hover:w-full hidden md:flex h-[4px] transition-all bg-blue duration-100`
    }));
  }), /* @__PURE__ */ import_react6.default.createElement("li", {
    className: ` py-4 w-[80%] md:hidden font-text font-[18px] font-bold flex flex-col gap-1 justify-center items-center rounded-md transition-all duration-300 dark:text-white text-black md:text-gray-400 md:p-2 md:w-auto md:overflow-visible md:font-medium`
  }, /* @__PURE__ */ import_react6.default.createElement(import_react7.Link, {
    to: "/login",
    onClick: () => setOpen(false)
  }, "Login"))), /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "flex items-center gap-4 overflow-visible z-20"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: `relative h-[40px] w-[40px] rounded-[50px] border-gray-400  border-2  font-text font-medium flex justify-center items-center`
  }, /* @__PURE__ */ import_react6.default.createElement(import_bs2.BsLightbulb, {
    className: `dark:fill-white fill-black scale-110 left-[11px] ${theme === "DARK" /* DARK */ ? "opacity-100 absolute" : "opacity-0 hidden"}`,
    onClick: () => setAppTheme("LIGHT" /* LIGHT */)
  }), /* @__PURE__ */ import_react6.default.createElement(import_bs2.BsLightbulbFill, {
    className: `dark:fill-white fill-black scale-110 left-[11px] ${theme === "LIGHT" /* LIGHT */ ? "opacity-100 absolute" : "opacity-0 hidden"}`,
    onClick: () => setAppTheme("DARK" /* DARK */)
  })), isAuthenticated2 && user ? /* @__PURE__ */ import_react6.default.createElement("div", {
    className: `${basicButton} hidden md:flex`
  }, /* @__PURE__ */ import_react6.default.createElement(import_react7.Link, {
    to: "/profile"
  }, "Profile")) : /* @__PURE__ */ import_react6.default.createElement("div", {
    className: `${basicButton} hidden md:flex`
  }, /* @__PURE__ */ import_react6.default.createElement(import_react7.Link, {
    to: "/auth"
  }, "Login"))), /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "flex justify-center items-center md:hidden ml-3 z-20"
  }, /* @__PURE__ */ import_react6.default.createElement(import_bs.BsList, {
    style: { height: "40px", width: "40px" },
    className: "dark:fill-white fill-black",
    onClick: () => setOpen(true)
  })));
};
var header_default = Header;

// app/components/ui/layout.tsx
var import_react_toastify = require("react-toastify");
var import_framer_motion = require("framer-motion");
var import_react11 = require("@remix-run/react");

// app/components/ui/pageLoader.tsx
init_react();
var import_react8 = require("@remix-run/react");
var import_react9 = __toESM(require("react"));
var PageLoader = () => {
  var _a;
  const transition = (0, import_react8.useTransition)();
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: `fixed bottom-5 ${transition.state === "loading" ? "right-5" : "right-[100%]"} flex flex-row gap-5 p-5 rounded-md dark:bg-gray-800 bg-slate-100 z-50 h-auto w-auto justify-center items-center`
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: " inline-block w-[50px] h-[50px] after:contents-[''] after:block after:h-[40px] after:w-[40px] after:m-[5px] after:rounded-[50%] after:border-2 after:border-t-blue after:animate-spin overflow-visible"
  }), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "font-text font-medium text-[16px] dark:text-white text-black"
  }, (_a = transition.location) == null ? void 0 : _a.pathname));
};
var pageLoader_default = PageLoader;

// app/components/ui/layout.tsx
var Layout = ({ children }) => {
  const location2 = (0, import_react11.useLocation)();
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    className: `flex flex-col min-h-[calc(100vh - 64px)] h-auto min-w-screen`
  }, /* @__PURE__ */ import_react10.default.createElement(header_default, {
    pathname: location2.pathname
  }), /* @__PURE__ */ import_react10.default.createElement(import_framer_motion.AnimatePresence, {
    exitBeforeEnter: true
  }, /* @__PURE__ */ import_react10.default.createElement(import_framer_motion.motion.main, null, children)), /* @__PURE__ */ import_react10.default.createElement(pageLoader_default, null), /* @__PURE__ */ import_react10.default.createElement(footer_default, null), /* @__PURE__ */ import_react10.default.createElement(import_react_toastify.ToastContainer, null));
};
var layout_default = Layout;

// route:D:\projects\brightways\remix\app\root.tsx
var import_bi = require("react-icons/bi");

// app/components/wrappers/infoWrapper.tsx
init_react();
var import_react13 = require("@remix-run/react");
var import_react14 = __toESM(require("react"));

// app/utils/helpers/IsHomePage.ts
init_react();
var isHomePage = (path) => {
  if (path === "/") {
    return true;
  }
  return false;
};

// app/components/ui/info.tsx
init_react();
var import_react12 = __toESM(require("react"));
var Info = ({ heading, subHeading }) => {
  return /* @__PURE__ */ import_react12.default.createElement("section", {
    className: "flex w-[80%] flex-col items-center"
  }, /* @__PURE__ */ import_react12.default.createElement("h1", {
    className: "font-heading text-[32px] text-black dark:text-white text-center font-bold"
  }, heading), /* @__PURE__ */ import_react12.default.createElement("div", {
    className: " bg-blue h-[6px] w-10 rounded-sm"
  }), /* @__PURE__ */ import_react12.default.createElement("p", {
    className: "mt-4 font-text text-[16px] text-gray-400 text-center"
  }, subHeading));
};
var info_default = Info;

// app/components/wrappers/infoWrapper.tsx
var InfoWrapper = ({ children, heading, subHeading }) => {
  const location2 = (0, import_react13.useLocation)();
  return /* @__PURE__ */ import_react14.default.createElement("div", {
    className: `flex bg-inherit flex-col items-center gap-[50px] md:gap-[70px] px-[20px] md:px-[100px] md:min-h-screen h-auto w-full justify-center ${isHomePage(location2.pathname) ? "" : "py-[100px] md:pb-[100px] md:pt-[150px]"}`
  }, heading && subHeading && /* @__PURE__ */ import_react14.default.createElement(info_default, {
    heading,
    subHeading
  }), children);
};
var infoWrapper_default = InfoWrapper;

// app/sanity/query/header.server.ts
init_react();

// app/sanity/sanity.server.ts
init_react();
var import_axios = __toESM(require("axios"));
var sanityQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.SANITY_DATASET}?query=`;
var sanityPostQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.SANITY_DATASET}`;
var sanityMutationUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`;
var sanityQueryClient = import_axios.default.create({
  baseURL: sanityQueryUrl
});
var sanityMutationClient = import_axios.default.create({
  baseURL: sanityQueryUrl,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`
  }
});

// app/sanity/query/image.server.ts
init_react();
var getImageQuery = (imageKey) => {
  return `*[_type == "picture" && _id == ^.${imageKey}._ref]{
        "alt": image.alt,
        "caption": image.caption,
        "imageUrl": image.asset->url,
    }[0]`;
};

// app/sanity/query/header.server.ts
var getHeaderQuery = () => {
  return `*[_type == 'header']{
        _id,
        "nav": nav[]{
            _key,
            name,
            to
        },
        "logo": ${getImageQuery("logo")}
      }[0]`;
};
var getHeader = async () => {
  try {
    const res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getHeaderQuery()
    });
    if (res.status === 200) {
      return res.data.result;
    }
  } catch (error) {
    console.log(error);
  }
};

// app/sanity/query/footer.server.ts
init_react();
var getFooterQuery = () => {
  return `*[_type == 'footer']{
        _id,
        desc,
        "logo": ${getImageQuery("logo")},
        "sections": sections[]{
          _key,
          name,
          "links": links[]{
            _key,
            name,
            to
          }
        }
      }[0]`;
};
var getFooter = async () => {
  try {
    const res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getFooterQuery()
    });
    if (res.status === 200) {
      return res.data.result;
    }
  } catch (error) {
    console.log(error);
  }
};

// app/supabase/session.ts
init_react();
var import_node = require("@remix-run/node");
if (!process.env.SESSION_SECRET)
  throw new Error("SESSION_SECRET not provided");
var { getSession, commitSession, destroySession } = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "supabase-session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET]
  }
});

// app/supabase/supabase.server.ts
init_react();
var import_supabase_js = require("@supabase/supabase-js");
if (!process.env.SUPABASE_URL)
  throw new Error("SUPABASE_URL is required");
if (!process.env.SUPABASE_SERVICE_ROLE)
  throw new Error("PUBLIC_SUPABASE_SERVICE_ROLE is required");
var supabaseAdmin = (0, import_supabase_js.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE);
var getToken = async (request) => {
  const cookieHeader = request.headers.get("Cookie");
  return (await getSession(cookieHeader)).get("access_token");
};
var getUserByToken = async (token) => {
  supabaseAdmin.auth.setAuth(token);
  const { user, error } = await supabaseAdmin.auth.api.getUser(token);
  return { user, error };
};
var isAuthenticated = async (request, validateAndReturnUser = false) => {
  const token = await getToken(request);
  if (!token && !validateAndReturnUser)
    return null;
  if (validateAndReturnUser) {
    const { user, error } = await getUserByToken(token);
    if (error) {
      console.log(error);
      return null;
    }
    return user;
  }
  return null;
};

// route:D:\projects\brightways\remix\app\root.tsx
var loader = async ({ request }) => {
  const header = await getHeader();
  console.log("fetching header");
  if (!header) {
    throw new Response("Something went wrong", { status: 500 });
  }
  const footer = await getFooter();
  if (!footer) {
    throw new Response("Something went wrong", { status: 500 });
  }
  const response = {
    header,
    footer,
    isAuthenticated: false,
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
    }
  };
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("access_token")) {
    const user = await isAuthenticated(request, true);
    if (user) {
      response.isAuthenticated = true;
      response.user = user;
    }
  }
  return response;
};
var links = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Outfit&family=Poppins&family=Inter&display=swap"
    },
    {
      rel: "stylesheet",
      href: toast_default
    },
    {
      rel: "stylesheet",
      href: tailwind_default
    },
    {
      rel: "stylesheet",
      href: global_default
    },
    {
      rel: "stylesheet",
      href: global_medium_default,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: global_large_default,
      media: "screen and (min-width: 1024px)"
    }
  ];
};
var meta = () => {
  return { title: "Brightways" };
};
var Document = ({ children, env }) => {
  return /* @__PURE__ */ import_react16.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react16.default.createElement("head", null, /* @__PURE__ */ import_react16.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react16.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ import_react16.default.createElement(import_react15.Meta, null), /* @__PURE__ */ import_react16.default.createElement(import_react15.Links, null)), /* @__PURE__ */ import_react16.default.createElement("body", {
    className: "bg-white dark:bg-gray-900"
  }, /* @__PURE__ */ import_react16.default.createElement(themeContext_default, null, children), /* @__PURE__ */ import_react16.default.createElement(import_react15.ScrollRestoration, null), env && /* @__PURE__ */ import_react16.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.env = ${JSON.stringify(env)}`
    }
  }), /* @__PURE__ */ import_react16.default.createElement(import_react15.Scripts, null), /* @__PURE__ */ import_react16.default.createElement(import_react15.LiveReload, null)));
};
function App() {
  const { env } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ import_react16.default.createElement(Document, {
    env
  }, /* @__PURE__ */ import_react16.default.createElement(appContext_default, null, /* @__PURE__ */ import_react16.default.createElement(layout_default, null, /* @__PURE__ */ import_react16.default.createElement(import_react15.Outlet, null))));
}
var CatchBoundary = () => {
  const error = (0, import_react15.useCatch)();
  return /* @__PURE__ */ import_react16.default.createElement(Document, null, /* @__PURE__ */ import_react16.default.createElement(infoWrapper_default, null, /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "md:border-2 md:border-gray-400 p-10 flex flex-col gap-5"
  }, /* @__PURE__ */ import_react16.default.createElement("h1", {
    className: " font-heading font-bold text-[100px] dark:text-white text-black "
  }, error.status), /* @__PURE__ */ import_react16.default.createElement("p", {
    className: " font-text font-medium text-center text-[18px] dark:text-white text-black"
  }, error.data), /* @__PURE__ */ import_react16.default.createElement("button", {
    style: { width: "100%" },
    className: `${lessRoundedBasicLargeButton}`,
    onClick: () => location.reload()
  }, "Try Again"))));
};
var ErrorBoundary = ({ error }) => {
  console.log(error);
  return /* @__PURE__ */ import_react16.default.createElement(Document, null, /* @__PURE__ */ import_react16.default.createElement("section", {
    className: "min-h-screen min-w-full flex bg-blue justify-center items-center"
  }, /* @__PURE__ */ import_react16.default.createElement("div", {
    className: "p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center"
  }, /* @__PURE__ */ import_react16.default.createElement(import_bi.BiError, {
    className: "fill-error-red h-[100px] w-[100px]"
  }), /* @__PURE__ */ import_react16.default.createElement("h1", {
    className: "text-red font-heading font-extrabold text-[48px]"
  }, "Sorry"), /* @__PURE__ */ import_react16.default.createElement("p", {
    className: "font-text text-[18px] mb-3"
  }, "Something went wrong!"), /* @__PURE__ */ import_react16.default.createElement("button", {
    className: "p-3 rounded-md bg-blue text-white font-text text-[18px]",
    onClick: () => location.reload()
  }, "Try Again"))));
};

// route:D:\projects\brightways\remix\app\routes\stores\index.tsx
var stores_exports = {};
__export(stores_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => stores_default,
  loader: () => loader2
});
init_react();
var import_react19 = __toESM(require("react"));
var import_bi3 = require("react-icons/bi");

// app/components/stores/container.tsx
init_react();
var import_react18 = require("@remix-run/react");

// app/components/stores/store.tsx
init_react();
var import_react17 = __toESM(require("react"));
var import_fa = require("react-icons/fa");
var import_bi2 = require("react-icons/bi");
var import_fi = require("react-icons/fi");
var Store = ({ store }) => {
  return /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "flex flex-col dark:bg-gray-800 bg-gray-50 p-5 gap-2 rounded-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
  }, /* @__PURE__ */ import_react17.default.createElement("h1", {
    className: "font-heading font-semibold dark:text-white text-black text-[24px] mb-5"
  }, store.name), /* @__PURE__ */ import_react17.default.createElement("section", {
    className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react17.default.createElement(import_fa.FaRegAddressBook, null), /* @__PURE__ */ import_react17.default.createElement("p", null, store.address)), /* @__PURE__ */ import_react17.default.createElement("section", {
    className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react17.default.createElement(import_fa.FaRegCalendarAlt, null), /* @__PURE__ */ import_react17.default.createElement("p", null, store.openOn)), /* @__PURE__ */ import_react17.default.createElement("section", {
    className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react17.default.createElement(import_bi2.BiTime, null), /* @__PURE__ */ import_react17.default.createElement("p", null, store.timings)), /* @__PURE__ */ import_react17.default.createElement("section", {
    className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react17.default.createElement(import_fi.FiPhoneCall, null), /* @__PURE__ */ import_react17.default.createElement("p", null, store.contactNumber)), /* @__PURE__ */ import_react17.default.createElement("section", {
    className: "flex flex-col md:flex-row items-center gap-5 font-text text-[14px] mt-5 overflow-visible"
  }, /* @__PURE__ */ import_react17.default.createElement("button", {
    className: `${basicButton}`
  }, /* @__PURE__ */ import_react17.default.createElement("a", {
    href: store.direction,
    target: "_blank"
  }, "Get Direction")), /* @__PURE__ */ import_react17.default.createElement("button", {
    className: `${basicButton}`
  }, /* @__PURE__ */ import_react17.default.createElement("a", {
    href: `tel:+91${store.contactNumber}`
  }, "Call"))));
};
var store_default = Store;

// app/components/stores/container.tsx
var Container = () => {
  const { stores } = (0, import_react18.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center gap-5 items-center w-screen"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "w-[80%] grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-10 py-5"
  }, stores.map((store) => {
    return /* @__PURE__ */ React.createElement(store_default, {
      key: store._id,
      store
    });
  })));
};
var container_default = Container;

// app/sanity/query/stores.server.ts
init_react();
var getStoresQuery = () => {
  return `*[_type == 'store']{
        _id,
        _rev,
        _type,
        _createdAt,
        _updatedAt,
        address,
        contactNumber,
        direction,
        name,
        openOn,
        timings
      }`;
};
var getStores = async () => {
  try {
    const res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getStoresQuery()
    });
    if (res.status === 200) {
      return res.data.result;
    }
  } catch (error) {
    console.log(error);
  }
};

// route:D:\projects\brightways\remix\app\routes\stores\index.tsx
var loader2 = async () => {
  const stores = await getStores();
  if (!stores) {
    throw new Error("Couldn't fetch stores");
  }
  return {
    stores
  };
};
var Index = () => {
  return /* @__PURE__ */ import_react19.default.createElement(infoWrapper_default, null, /* @__PURE__ */ import_react19.default.createElement(container_default, null));
};
var ErrorBoundary2 = ({ error }) => {
  console.log(error);
  return /* @__PURE__ */ import_react19.default.createElement("section", {
    className: "min-h-screen min-w-full flex bg-blue justify-center items-center"
  }, /* @__PURE__ */ import_react19.default.createElement("div", {
    className: "p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center"
  }, /* @__PURE__ */ import_react19.default.createElement(import_bi3.BiError, {
    className: "fill-error-red h-[100px] w-[100px]"
  }), /* @__PURE__ */ import_react19.default.createElement("h1", {
    className: "text-red font-heading font-extrabold text-[48px]"
  }, "Sorry"), /* @__PURE__ */ import_react19.default.createElement("p", {
    className: "font-text text-[18px] mb-3"
  }, "Something went wrong!"), /* @__PURE__ */ import_react19.default.createElement("button", {
    className: "p-3 rounded-md bg-blue text-white font-text text-[18px]",
    onClick: () => location.reload()
  }, "Try Again")));
};
var stores_default = Index;

// route:D:\projects\brightways\remix\app\routes\services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => services_default,
  loader: () => loader3
});
init_react();
var import_node2 = require("@remix-run/node");
var import_react22 = __toESM(require("react"));

// app/components/services/detailedServices.tsx
init_react();
var import_react21 = require("@remix-run/react");

// app/components/services/detailedService.tsx
init_react();
var import_react20 = __toESM(require("react"));
var DeatailedService = ({ service }) => {
  return /* @__PURE__ */ import_react20.default.createElement("div", {
    className: `flex flex-col-reverse md:flex-row md:even:flex-row-reverse items-center gap-20 overflow-visible`
  }, /* @__PURE__ */ import_react20.default.createElement("section", {
    className: "flex-1 flex flex-col gap-3"
  }, /* @__PURE__ */ import_react20.default.createElement("h1", {
    className: "font-heading font-bold text-[24px] dark:text-white text-black"
  }, service.name), /* @__PURE__ */ import_react20.default.createElement("p", {
    className: "font-text font-medium text-gray-400 text-[18px]"
  }, service.detailedDesc)), /* @__PURE__ */ import_react20.default.createElement("section", {
    className: "flex-1 flex flex-row"
  }));
};
var detailedService_default = DeatailedService;

// app/components/services/detailedServices.tsx
var DetailedServices = () => {
  const { services } = (0, import_react21.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: `grid grid-cols-1 w-full h-auto gap-40 overflow-y-visible`
  }, services.map((service) => {
    return /* @__PURE__ */ React.createElement(detailedService_default, {
      key: service._id,
      service
    });
  }));
};
var detailedServices_default = DetailedServices;

// app/sanity/query/services.server.ts
init_react();
var getServiceQuery = () => {
  return `*[_type == 'service']{
        _id,
        name,
        shortDesc,
        detailedDesc,
        "image": ${getImageQuery("image")}
      }`;
};
var getServices = async () => {
  try {
    const res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getServiceQuery()
    });
    if (res.status === 200) {
      return res.data.result;
    } else {
      throw new Error("Couldn't fetch services");
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

// route:D:\projects\brightways\remix\app\routes\services.tsx
var loader3 = async () => {
  const services = await getServices();
  if (!services) {
    throw new import_node2.Response("not found", {
      status: 404
    });
  }
  return {
    services
  };
};
var ServicesPage = () => {
  return /* @__PURE__ */ import_react22.default.createElement(infoWrapper_default, null, /* @__PURE__ */ import_react22.default.createElement(detailedServices_default, null));
};
var services_default = ServicesPage;

// route:D:\projects\brightways\remix\app\routes\contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action,
  default: () => contact_default2,
  meta: () => meta2
});
init_react();

// app/components/contact/contact.tsx
init_react();
var import_react24 = require("@remix-run/react");
var import_react25 = __toESM(require("react"));
var import_react_toastify2 = require("react-toastify");

// app/components/ui/input.tsx
init_react();
var import_react23 = __toESM(require("react"));
var Input = ({ label, type, placeholder, name, error, handleChange }) => {
  return /* @__PURE__ */ import_react23.default.createElement("div", {
    className: `w-full flex flex-col gap-2`
  }, /* @__PURE__ */ import_react23.default.createElement("label", {
    className: "font-text font-normal text-[16px] dark:text-white text-black",
    htmlFor: name
  }, label), /* @__PURE__ */ import_react23.default.createElement("input", {
    className: `${lessRoundedBasicInput}`,
    onChange: handleChange.bind(null),
    type,
    placeholder,
    name
  }), error && /* @__PURE__ */ import_react23.default.createElement("p", {
    className: " text-[#FF0000]"
  }, error));
};
var input_default = Input;

// app/components/contact/contact.tsx
var Contact = () => {
  const transition = (0, import_react24.useTransition)();
  const data = (0, import_react24.useActionData)();
  const [formErrors, setFormErrors] = import_react25.default.useState((data == null ? void 0 : data.validationErrors) ? data.validationErrors : {});
  const handleNameChange = (e) => {
    const name = e.target.value;
    if (!name) {
      setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: "name is not provided" }));
    } else if (name.length < 4) {
      setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: "name too small" }));
    } else {
      setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: void 0 }));
    }
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!email) {
      setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "email is not provided" }));
    } else if (email.length < 5) {
      setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "email too small" }));
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "invalid email" }));
    } else {
      setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: void 0 }));
    }
  };
  const handleMessageChange = (e) => {
    const message = e.target.value;
    if (!message) {
      setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { message: "message is not provided" }));
    } else if (message.length < 10) {
      setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { message: "message too small" }));
    } else {
      setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { message: void 0 }));
    }
  };
  import_react25.default.useEffect(() => {
    if (data == null ? void 0 : data.serverError) {
      import_react_toastify2.toast.error(data.serverError);
    }
  }, [data]);
  import_react25.default.useEffect(() => {
    if (data == null ? void 0 : data.contact) {
      import_react_toastify2.toast.success("Message Sent!");
    }
  }, [data]);
  return /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "w-full flex flex-col md:flex-row justify-center align-middle overflow-visible"
  }, /* @__PURE__ */ import_react25.default.createElement("section", {
    className: "hidden md:flex justify-center items-center md:flex-1"
  }, /* @__PURE__ */ import_react25.default.createElement("h1", null, "Image Here")), /* @__PURE__ */ import_react25.default.createElement("form", {
    method: "post",
    action: "/contact",
    className: "md:flex-1 flex flex-col gap-5 overflow-visible"
  }, /* @__PURE__ */ import_react25.default.createElement("div", {
    className: "flex flex-col "
  }, /* @__PURE__ */ import_react25.default.createElement("h1", {
    className: "font-heading font-semibold text-[42px] dark:text-white text-black"
  }, "Contact Us"), /* @__PURE__ */ import_react25.default.createElement("p", {
    className: "font-text font-normal text-[16px] dark:text-white text-black"
  }, "Explore the future with us.", /* @__PURE__ */ import_react25.default.createElement("br", null), "Feel free to get in touch.")), /* @__PURE__ */ import_react25.default.createElement(input_default, {
    name: "name",
    label: "Name",
    placeholder: "Enter your name here.",
    type: "text",
    error: formErrors.name,
    handleChange: handleNameChange
  }), /* @__PURE__ */ import_react25.default.createElement(input_default, {
    name: "contactNumber",
    label: "Contact Number",
    placeholder: "Enter your number here.",
    type: "text",
    error: formErrors.contactNumber,
    handleChange: handleEmailChange
  }), /* @__PURE__ */ import_react25.default.createElement(input_default, {
    name: "message",
    label: "Message",
    placeholder: "Enter your message here.",
    type: "text",
    error: formErrors.message,
    handleChange: handleMessageChange
  }), /* @__PURE__ */ import_react25.default.createElement("button", {
    disabled: transition.state === "submitting",
    className: `${lessRoundedBasicLargeButton} mt-5`,
    type: "submit"
  }, transition.state === "submitting" ? "Sending..." : "Send Message")));
};
var contact_default = Contact;

// app/utils/helpers/createContact.ts
init_react();
var createContact = (formData) => {
  const name = formData.get("name");
  const contactNumber = formData.get("contactNumber");
  const message = formData.get("message");
  const errors = {};
  if (!name) {
    errors.name = "name is not provided";
    return [errors, null];
  } else {
    if (name.length < 4) {
      errors.name = "name too small";
      return [errors, null];
    }
  }
  if (!contactNumber) {
    errors.contactNumber = "contactNumber is not provided";
    return [errors, null];
  } else {
    if (contactNumber.length < 4) {
      errors.contactNumber = "contactNumber too small";
      return [errors, null];
    } else if (!/\S+@\S+\.\S+/.test(contactNumber)) {
      errors.contactNumber = "contactNumber too small";
      return [errors, null];
    }
  }
  if (!message) {
    errors.message = "message is not provided";
    return [errors, null];
  } else {
    if (message.length < 10) {
      errors.message = "message too small";
      return [errors, null];
    }
  }
  return [null, {
    name,
    contactNumber,
    message
  }];
};

// route:D:\projects\brightways\remix\app\routes\contact.tsx
var import_node3 = require("@remix-run/node");

// app/prisma/client.ts
init_react();
var import_client = require("@prisma/client");
var client = global.prisma || new import_client.PrismaClient({
  log: ["query"]
});
if (true)
  global.prisma = client;

// route:D:\projects\brightways\remix\app\routes\contact.tsx
var action = async ({ request }) => {
  const formData = await request.formData();
  let [errors, contact] = createContact(formData);
  if (errors) {
    return (0, import_node3.json)({
      validationErrors: errors
    });
  }
  if (contact) {
    try {
      contact = await client.contact.create({ data: contact });
    } catch (error) {
      return (0, import_node3.json)({
        error: "Failed to send message"
      });
    }
  }
  return (0, import_node3.json)({
    contact: contact_default
  });
};
var meta2 = () => {
  return {
    title: "Contact",
    description: "Contact page of Brightways Drycleaners",
    keywords: "Brightways,Drycleaners"
  };
};
var ContactPage = () => {
  return /* @__PURE__ */ React.createElement(infoWrapper_default, null, /* @__PURE__ */ React.createElement(contact_default, null));
};
var contact_default2 = ContactPage;

// route:D:\projects\brightways\remix\app\routes\pricing.tsx
var pricing_exports = {};
__export(pricing_exports, {
  default: () => pricing_default,
  loader: () => loader4
});
init_react();
var import_react30 = __toESM(require("react"));

// app/components/services/container.tsx
init_react();
var import_react28 = __toESM(require("react"));

// app/components/services/service.tsx
init_react();
var import_react26 = __toESM(require("react"));

// public/images/dry-cleaning.png
var dry_cleaning_default = "/build/_assets/dry-cleaning-E25CI4UP.png";

// app/components/services/service.tsx
var import_react27 = require("@remix-run/react");
var Service = ({ service }) => {
  const location2 = (0, import_react27.useLocation)();
  return /* @__PURE__ */ import_react26.default.createElement(import_react27.Link, {
    to: `/pricing/${service.name}`,
    className: `md:w-80 ${isHomePage(location2.pathname) ? "h-64 w-64 flex-col justify-center items-center" : "h-24 w-full flex-row"} dark:bg-gray-800 bg-gray-50 p-3 gap-2 rounded-md flex flex-row items-cente hover:scale-110 relative z-10 overflow-visible ${borderGrowAnim}`
  }, /* @__PURE__ */ import_react26.default.createElement("section", {
    className: "flex justify-center opacity-100 items-center overflow-hidden h-[50px] w-[50px]"
  }, /* @__PURE__ */ import_react26.default.createElement("img", {
    className: " h-full w-full",
    src: dry_cleaning_default
  })), /* @__PURE__ */ import_react26.default.createElement("section", {
    className: "dark:text-white text-black flex flex-col gap-[3px] opacity-100"
  }, /* @__PURE__ */ import_react26.default.createElement("p", null, service.name)));
};
var service_default = Service;

// app/components/services/container.tsx
var Container2 = ({ services }) => {
  return /* @__PURE__ */ import_react28.default.createElement("section", {
    className: "flex flex-col gap-5 overflow-visible"
  }, services.map((service, index) => {
    return /* @__PURE__ */ import_react28.default.createElement(service_default, {
      key: service._id,
      index,
      service
    });
  }));
};
var container_default2 = Container2;

// app/components/context/cartContext.tsx
init_react();
var import_react29 = __toESM(require("react"));
var CartContext = import_react29.default.createContext(null);
var CartProvider = ({ children }) => {
  const [items, setItems] = import_react29.default.useState([]);
  const [totalCost, setTotalCost] = import_react29.default.useState(0);
  const getTotalCost = () => {
    const cost = items.reduce((prev, curr) => {
      return prev + curr.quantity * curr.item.price;
    }, 0);
    setTotalCost(cost);
  };
  const add = (item) => {
    const index = items.findIndex((prev) => item.id === prev.item.id);
    setItems((prev) => {
      if (index === -1) {
        const currentItem = { quantity: 1, item };
        return [...prev, currentItem];
      } else {
        prev[index].quantity++;
        return [...prev];
      }
    });
  };
  const remove = (id) => {
    const index = items.findIndex((prev) => id === prev.item.id);
    if (index !== -1) {
      setItems((prev) => {
        if (prev[index].quantity > 1) {
          prev[index].quantity--;
          return [...prev];
        } else {
          return prev.filter((item) => item.item.id !== id);
        }
      });
    }
  };
  import_react29.default.useEffect(() => {
    getTotalCost();
  }, [items]);
  const getTotalItems = () => {
    return items.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);
  };
  return /* @__PURE__ */ import_react29.default.createElement(CartContext.Provider, {
    value: { cart: { estimatedCost: totalCost, items }, add, remove, getTotalItems }
  }, children);
};
var cartContext_default = CartProvider;

// route:D:\projects\brightways\remix\app\routes\pricing.tsx
var import_react31 = require("@remix-run/react");
var loader4 = async () => {
  const services = await getServices();
  if (!services) {
    throw new Error("Couldn't fetch business");
  }
  return {
    services
  };
};
var PricingPage = () => {
  const { services } = (0, import_react31.useLoaderData)();
  const [open, setOpen] = import_react30.default.useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return /* @__PURE__ */ import_react30.default.createElement(cartContext_default, null, /* @__PURE__ */ import_react30.default.createElement(infoWrapper_default, null, /* @__PURE__ */ import_react30.default.createElement("div", {
    className: "flex w-full flex-col md:flex-row gap-10 overflow-visible"
  }, /* @__PURE__ */ import_react30.default.createElement(container_default2, {
    services
  }), /* @__PURE__ */ import_react30.default.createElement(import_react31.Outlet, {
    context: { services }
  }))));
};
var pricing_default = PricingPage;

// route:D:\projects\brightways\remix\app\routes\pricing\$service.tsx
var service_exports = {};
__export(service_exports, {
  default: () => service_default3,
  loader: () => loader5
});
init_react();

// app/components/pricing/service.tsx
init_react();
var import_react34 = require("@remix-run/react");
var import_react35 = __toESM(require("react"));

// app/components/pricing/category.tsx
init_react();
var import_react33 = __toESM(require("react"));

// app/components/pricing/item.tsx
init_react();
var import_react32 = __toESM(require("react"));
var Item = ({ item, operation = "ADD" /* ADD */, classes = "" }) => {
  const { add, remove } = import_react32.default.useContext(CartContext);
  return /* @__PURE__ */ import_react32.default.createElement("div", {
    className: `flex flex-row items-center gap-3 ` + classes
  }, /* @__PURE__ */ import_react32.default.createElement("p", {
    className: "flex-1 font-text text-[16px] dark:text-white text-black"
  }, item.name), /* @__PURE__ */ import_react32.default.createElement("p", {
    className: "font-text text-[16px] dark:text-white text-black"
  }, item.minPrice, " - ", item.maxPrice));
};
var item_default = Item;

// app/components/pricing/category.tsx
var Category = ({ category }) => {
  return /* @__PURE__ */ import_react33.default.createElement("div", {
    className: "flex flex-col gap-3"
  }, /* @__PURE__ */ import_react33.default.createElement("span", {
    className: "font-text text-[18px] text-gray-400 text-left font-semibold"
  }, category.name), /* @__PURE__ */ import_react33.default.createElement("section", {
    className: "flex flex-col gap-2"
  }, category.items.map((item) => {
    return /* @__PURE__ */ import_react33.default.createElement(item_default, {
      key: item._id,
      item,
      operation: "ADD" /* ADD */
    });
  })));
};
var category_default = Category;

// app/components/pricing/service.tsx
var Service2 = ({ service }) => {
  const { categories } = (0, import_react34.useLoaderData)();
  if (!service) {
    return /* @__PURE__ */ import_react35.default.createElement("div", null, "Not Found");
  }
  return /* @__PURE__ */ import_react35.default.createElement("div", {
    className: "flex flex-col flex-1 w-auto h-auto gap-2"
  }, /* @__PURE__ */ import_react35.default.createElement("h2", {
    className: "font-heading text-[32px] dark:text-white text-black font-semibold"
  }, service.name), /* @__PURE__ */ import_react35.default.createElement("p", {
    className: "font-text text-[16px] dark:text-white text-black"
  }, service.detailedDesc), /* @__PURE__ */ import_react35.default.createElement("section", {
    className: "flex flex-col gap-8 mt-5"
  }, categories.map((category) => {
    return /* @__PURE__ */ import_react35.default.createElement(category_default, {
      key: category._id,
      category
    });
  })));
};
var service_default2 = Service2;

// app/sanity/query/items.server.ts
init_react();
var itemQuery = (serviceName) => {
  return `*[_type == 'item' && *[_type=='service' && _id == ^.service._ref]{...}[0].name == "${serviceName}"]{
        ...,
        "service": service->,
        "category": category->
    }`;
};
var getItems = async (serviceName) => {
  try {
    const res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: itemQuery(serviceName)
    });
    if (res.status === 200) {
      return res.data.result;
    }
  } catch (error) {
    console.log(error);
  }
};

// route:D:\projects\brightways\remix\app\routes\pricing\$service.tsx
var import_react36 = require("@remix-run/react");
var loader5 = async ({ params }) => {
  const name = params.service;
  const items = await getItems(name);
  if (!items) {
    throw new Error("Not Found");
  }
  let categories = [];
  items.map((item) => {
    const index = categories.findIndex((category) => {
      var _a;
      return category.name === ((_a = item.category) == null ? void 0 : _a.name);
    });
    if (index !== -1) {
      categories[index].items.push(item);
    } else {
      const newCategory = __spreadProps(__spreadValues({}, item.category), { items: [item] });
      categories.push(newCategory);
    }
  });
  return {
    categories
  };
};
var SingleService = () => {
  const params = (0, import_react36.useParams)();
  const { services } = (0, import_react36.useOutletContext)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(service_default2, {
    service: services.find((s) => s.name === params.service)
  }));
};
var service_default3 = SingleService;

// route:D:\projects\brightways\remix\app\routes\pricing\index.tsx
var pricing_exports2 = {};
__export(pricing_exports2, {
  default: () => pricing_default2
});
init_react();
var import_react37 = __toESM(require("react"));
var Index2 = () => {
  return /* @__PURE__ */ import_react37.default.createElement("div", {
    className: "flex-1 flex justify-center items-center"
  }, /* @__PURE__ */ import_react37.default.createElement("p", null, "No Service Selected"));
};
var pricing_default2 = Index2;

// route:D:\projects\brightways\remix\app\routes\profile.tsx
var profile_exports = {};
__export(profile_exports, {
  default: () => profile_default
});
init_react();
var import_react39 = require("@remix-run/react");

// app/components/profile/sidebar.tsx
init_react();
var import_react38 = require("@remix-run/react");
var ProfileSidebar = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 border-r-2 border-gray-400 "
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "w-full h-full flex flex-col"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "h-[60px] flex justify-center items-center bg-inherit dark:text-white text-black font-text font-medium text-[18px]"
  }, /* @__PURE__ */ React.createElement(import_react38.Link, {
    to: "/profile"
  }, "Profile")), /* @__PURE__ */ React.createElement("li", {
    className: "h-[60px] flex justify-center items-center bg-inherit dark:text-white text-black font-text font-medium text-[18px]"
  }, /* @__PURE__ */ React.createElement(import_react38.Link, {
    to: "/profile/bookings"
  }, "Bookings")), /* @__PURE__ */ React.createElement("li", {
    className: "h-[60px] flex justify-center items-center bg-inherit dark:text-white text-black font-text font-medium text-[18px]"
  }, /* @__PURE__ */ React.createElement(import_react38.Link, {
    to: "/profile/reviews"
  }, "Reviews")), /* @__PURE__ */ React.createElement("li", {
    className: "h-[60px] flex justify-center items-center bg-inherit dark:text-white text-black font-text font-medium text-[18px]"
  }, /* @__PURE__ */ React.createElement(import_react38.Link, {
    to: "/profile/feedbacks"
  }, "Feedback"))));
};
var sidebar_default = ProfileSidebar;

// route:D:\projects\brightways\remix\app\routes\profile.tsx
var ProfilePage = () => {
  return /* @__PURE__ */ React.createElement(infoWrapper_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "grid min-h-full h-auto w-full dark:bg-gray-800 bg-slate-100 border-2 boder-gray-400"
  }, /* @__PURE__ */ React.createElement(sidebar_default, null), /* @__PURE__ */ React.createElement(import_react39.Outlet, null)));
};
var profile_default = ProfilePage;

// route:D:\projects\brightways\remix\app\routes\profile\index.tsx
var profile_exports2 = {};
__export(profile_exports2, {
  action: () => action2,
  default: () => profile_default2
});
init_react();
var import_node4 = require("@remix-run/node");
var import_react40 = require("@remix-run/react");
var action2 = async ({ request }) => {
  if (request.method === "POST") {
    const formData = await request.formData();
    const event = formData.get("event");
    if (event === "SIGN_OUT") {
      const sesssion = await getSession(request.headers.get("Cookie"));
      const token = sesssion.get("access_token");
      if (token) {
        const { error } = await supabaseAdmin.auth.api.signOut(token);
        if (error) {
          console.log(error);
        } else {
          return (0, import_node4.redirect)("/auth", {
            headers: {
              "Set-Cookie": await destroySession(sesssion)
            }
          });
        }
      }
    }
    return null;
  } else {
    return null;
  }
};
var ProfilePage2 = () => {
  return /* @__PURE__ */ React.createElement("section", {
    className: "md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2"
  }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(import_react40.Form, {
    method: "post",
    action: "/profile?index"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "hidden",
    name: "event",
    defaultValue: "SIGN_OUT"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout"))));
};
var profile_default2 = ProfilePage2;

// route:D:\projects\brightways\remix\app\routes\about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  loader: () => loader6
});
init_react();

// app/sanity/query/business.server.ts
init_react();
var getBusinessQuery = () => {
  return `*[_type == 'business']{
        _createdAt,
        _id,
        _rev,
        _type,
        _updatedAt,
        companyName,
        detailedDesc,
        shortDesc,
        tagline,
        "logo": ${getImageQuery("logo")},
        "coverImage": ${getImageQuery("coverImage")}
        }[0]`;
};
var getBusiness = async () => {
  try {
    const res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getBusinessQuery()
    });
    if (res.status === 200) {
      return res.data.result;
    } else {
      throw new Error("Couldn't fetch busniness");
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

// route:D:\projects\brightways\remix\app\routes\about.tsx
var import_react41 = require("@remix-run/react");
var loader6 = async () => {
  const business = await getBusiness();
  if (!business) {
    throw new Error("Couldn't fetch business");
  }
  return {
    business
  };
};
var AbouPage = () => {
  const { business } = (0, import_react41.useLoaderData)();
  return /* @__PURE__ */ React.createElement(infoWrapper_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col-reverse md:flex-row "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex-1"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[18px] font-text text-gray-400"
  }, business.detailedDesc)), /* @__PURE__ */ React.createElement("div", {
    className: "md:flex-1"
  })), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null))));
};
var about_default = AbouPage;

// route:D:\projects\brightways\remix\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => Index3,
  loader: () => loader7
});
init_react();
var import_bi5 = require("react-icons/bi");

// app/components/home/featuresList.tsx
init_react();
var import_react43 = require("@remix-run/react");
var import_react44 = __toESM(require("react"));

// app/components/features/feature.tsx
init_react();
var import_react42 = __toESM(require("react"));
var import_framer_motion2 = require("framer-motion");

// app/utils/animations/basicAnim.ts
init_react();
var scaleAnim = {
  visible: () => ({
    scale: 1,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "linear"
    }
  }),
  hidden: () => ({
    scale: 0,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "linear"
    }
  })
};
var horizontalAnim = {
  visible: (x) => ({
    translateX: x,
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "linear"
    }
  }),
  hidden: (x) => ({
    translateX: x,
    transition: {
      duration: 1,
      type: "tween",
      ease: "linear"
    }
  })
};
var fade = {
  visible: () => ({
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "linear",
      staggerChildren: 0.5,
      delayChildren: 0.5
    }
  }),
  hidden: () => ({
    opacity: 0
  })
};

// app/components/features/feature.tsx
var Feature = ({ feature, index }) => {
  return /* @__PURE__ */ import_react42.default.createElement(import_framer_motion2.motion.div, {
    variants: horizontalAnim,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    custom: [index % 2 === 0 ? "-100%" : "100%", "0%"],
    className: `flex flex-col-reverse gap-10 md:flex-row md:even:flex-row-reverse items-center md:gap-20 overflow-visible`
  }, /* @__PURE__ */ import_react42.default.createElement("section", {
    className: `flex flex-1 flex-col items-start justify-center gap-3 overflow-visible`
  }, /* @__PURE__ */ import_react42.default.createElement("p", {
    className: "text-blue text-[14px] font-bold h-auto"
  }, feature.title), /* @__PURE__ */ import_react42.default.createElement("h1", {
    className: "text-[32px] text-black dark:text-white font-heading leading-[44px] font-semibold  h-auto"
  }, feature.heading), /* @__PURE__ */ import_react42.default.createElement("p", {
    className: "text-[16px] text-gray-400 font-text font-normal leading-6"
  }, feature.desc), /* @__PURE__ */ import_react42.default.createElement("button", {
    className: `${largeBasicButton} mt-3`
  }, "Contact Us")), /* @__PURE__ */ import_react42.default.createElement("section", {
    className: "flex flex-1 justify-center items-center"
  }, /* @__PURE__ */ import_react42.default.createElement("img", {
    src: feature.image.imageUrl,
    alt: feature.image.alt,
    className: "h-[200px] w-[200px]"
  })));
};
var feature_default = Feature;

// app/components/home/featuresList.tsx
var FeaturesList = () => {
  const { features } = (0, import_react43.useLoaderData)();
  const parentRef = import_react44.default.useRef(null);
  return /* @__PURE__ */ import_react44.default.createElement("div", {
    ref: parentRef,
    className: "grid grid-cols-1 w-full px-[20px] md:px-[100px] h-auto gap-20 md:gap-40 md:my-20 overflow-y-visible"
  }, features.map((feature, index) => {
    return /* @__PURE__ */ import_react44.default.createElement(feature_default, {
      key: feature._id,
      feature,
      index
    });
  }));
};
var featuresList_default = FeaturesList;

// app/components/home/landingPage.tsx
init_react();
var import_react45 = __toESM(require("react"));
var import_framer_motion3 = require("framer-motion");
var import_react46 = require("@remix-run/react");
var LandingPage = () => {
  const { business } = (0, import_react46.useLoaderData)();
  return /* @__PURE__ */ import_react45.default.createElement("div", {
    className: "dark:bg-gray-900 mt-[100px] md:mt-[0px] relative grid px-[20px] md:px-[100px] w-[100%] min-h-[100vh] h-auto overflow-visible"
  }, /* @__PURE__ */ import_react45.default.createElement("section", {
    className: "flex flex-col gap-5 w-full justify-center  items-start overflow-x-visible col-start-1 col-end-2 row-start-2 row-end-4 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2"
  }, /* @__PURE__ */ import_react45.default.createElement("p", {
    className: "text-[42px] dark:text-white text-black font-semibold font-heading mx-auto overflow-hidden"
  }, business.tagline), /* @__PURE__ */ import_react45.default.createElement("p", {
    className: "text-xl text-gray-400 font-text"
  }, business.shortDesc), /* @__PURE__ */ import_react45.default.createElement("div", {
    className: "flex flex-col md:flex-row gap-5 my-4 overflow-visible w-full md:w-auto"
  }, /* @__PURE__ */ import_react45.default.createElement(import_framer_motion3.motion.button, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, ease: "linear" },
    className: `${largeBasicButton}`
  }, "Book now"), /* @__PURE__ */ import_react45.default.createElement(import_framer_motion3.motion.button, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, ease: "linear" },
    className: `${largeBasicButton}`
  }, "See how it's work"))), /* @__PURE__ */ import_react45.default.createElement("section", {
    className: "w-full overflow-hidden col-start-1 col-end-2 row-start-1 row-end-2 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2"
  }));
};
var landingPage_default = LandingPage;

// app/components/home/process.tsx
init_react();
var import_react48 = require("@remix-run/react");
var import_framer_motion5 = require("framer-motion");
var import_react49 = __toESM(require("react"));

// app/components/process/step.tsx
init_react();
var import_react47 = __toESM(require("react"));
var import_framer_motion4 = require("framer-motion");
var Step = ({ step }) => {
  return /* @__PURE__ */ import_react47.default.createElement(import_framer_motion4.motion.section, {
    variants: scaleAnim,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    className: `flex flex-1 gap-3 flex-col items-center justify-center`
  }, /* @__PURE__ */ import_react47.default.createElement("div", {
    className: " h-24 w-24 rounded-[50%] bg-blue flex justify-center items-center"
  }, /* @__PURE__ */ import_react47.default.createElement("img", null)), /* @__PURE__ */ import_react47.default.createElement("h1", {
    className: "font-heading text-black dark:text-white text-[20px] font-bold"
  }, step.heading));
};
var step_default = Step;

// app/components/home/process.tsx
var Process = () => {
  const { process: process2 } = (0, import_react48.useLoaderData)();
  return /* @__PURE__ */ import_react49.default.createElement(infoWrapper_default, {
    heading: "How it's works",
    subHeading: "hdhhdshbsdjbasj"
  }, /* @__PURE__ */ import_react49.default.createElement(import_framer_motion5.motion.div, {
    variants: fade,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { staggerChildren: 0.5 },
    className: `flex flex-col sm:flex-row gap-10 w-full relative md:py-[50px]`
  }, process2.steps.map((step) => {
    return /* @__PURE__ */ import_react49.default.createElement(step_default, {
      step,
      key: step._key
    });
  })), /* @__PURE__ */ import_react49.default.createElement("button", {
    className: `${largeBasicButton}`
  }, "Learn More"));
};
var process_default = Process;

// app/components/home/testimonialsList.tsx
init_react();
var import_react51 = require("@remix-run/react");

// app/components/Testimonials/testimonial.tsx
init_react();
var import_react50 = __toESM(require("react"));
var Testimonial = ({ testimonial }) => {
  return /* @__PURE__ */ import_react50.default.createElement("div", {
    className: `hover:shadow-lg hover:translate-y-3 transition duration-500 delay-100 min-w-[250px] w-[250px] min-h-[250px] h-[250px] dark:bg-gray-800 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4`
  }, /* @__PURE__ */ import_react50.default.createElement("p", {
    className: "text-[14px] dark:text-white text-black font-text font-semibold mb-3 min-h-[100px] h-[100px]"
  }, '"', testimonial.review, '"'), /* @__PURE__ */ import_react50.default.createElement("p", {
    className: "text-[16px] text-gray-400 font-text font-extrabold"
  }, testimonial.name));
};
var testimonial_default = Testimonial;

// app/components/home/testimonialsList.tsx
var TestimonialsList = () => {
  const { testimonials } = (0, import_react51.useLoaderData)();
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    subHeading: testimonials.sub_heading,
    heading: testimonials.heading
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col md:flex-row w-full items-center justify-center md:py-[50px] h-auto gap-10"
  }, testimonials.data.map((testimonial) => {
    return /* @__PURE__ */ React.createElement(testimonial_default, {
      key: Math.random() * 100,
      testimonial
    });
  })), /* @__PURE__ */ React.createElement("button", {
    className: `${largeBasicButton} mb-[50px]`
  }, "More Reviews"));
};
var testimonialsList_default = TestimonialsList;

// app/components/ui/sidebar.tsx
init_react();
var import_react52 = __toESM(require("react"));
var import_bi4 = require("react-icons/bi");
var import_bs3 = require("react-icons/bs");

// public/icons/gmail.png
var gmail_default = "/build/_assets/gmail-F2VKWGQN.png";

// public/icons/whatsapp.png
var whatsapp_default = "/build/_assets/whatsapp-QSRGVV7S.png";

// app/components/ui/sidebar.tsx
var import_ai2 = require("react-icons/ai");
var SideBar = () => {
  const [showList, setShowList] = import_react52.default.useState(false);
  return /* @__PURE__ */ import_react52.default.createElement("div", {
    className: "group fixed right-[30px] bottom-[30px] gap-2 z-50 flex flex-col h-auto w-auto"
  }, /* @__PURE__ */ import_react52.default.createElement("section", {
    onClick: () => setShowList((prev) => !prev),
    className: `bg-white  h-16 w-16 flex justify-center items-center rounded-[50%] hover:scale-110 ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-400`
  }, /* @__PURE__ */ import_react52.default.createElement(import_ai2.AiOutlineArrowUp, {
    className: "h-8 w-8 text-blue",
    onClick: () => window.scroll({ top: 0, left: 0, behavior: "smooth" })
  })), /* @__PURE__ */ import_react52.default.createElement("section", {
    className: `bg-white h-16 w-16 flex justify-center items-center rounded-[50%] ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-300`
  }, /* @__PURE__ */ import_react52.default.createElement("a", {
    target: "_blank",
    href: `mailto:brightwaysdryclean@gmail.com`,
    className: ""
  }, /* @__PURE__ */ import_react52.default.createElement("img", {
    className: "h-8 w-8",
    src: gmail_default
  }))), /* @__PURE__ */ import_react52.default.createElement("section", {
    className: `bg-white h-16 w-16 flex justify-center items-center rounded-[50%] ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-200`
  }, /* @__PURE__ */ import_react52.default.createElement("a", {
    target: "_blank",
    href: `https://api.whatsapp.com/send?phone=919810136709&text=hi%20i%20would%20like%20to%20chat%20with%20you."`,
    className: ""
  }, /* @__PURE__ */ import_react52.default.createElement("img", {
    className: "h-8 w-8",
    src: whatsapp_default
  }))), /* @__PURE__ */ import_react52.default.createElement("section", {
    className: `bg-white h-16 w-16 flex justify-center items-center rounded-[50%] ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-100`
  }, /* @__PURE__ */ import_react52.default.createElement("a", {
    target: "_blank",
    href: `tel:+919810136709`,
    className: ""
  }, /* @__PURE__ */ import_react52.default.createElement(import_bs3.BsFillTelephoneFill, {
    className: "h-8 w-8 text-blue"
  }))), /* @__PURE__ */ import_react52.default.createElement("section", {
    onClick: () => setShowList((prev) => !prev),
    className: "bg-white h-16 w-16 flex justify-center items-center rounded-[50%]"
  }, /* @__PURE__ */ import_react52.default.createElement(import_bi4.BiSupport, {
    className: "h-8 w-8"
  })));
};
var sidebar_default2 = SideBar;

// app/data/data.tsx
init_react();
var testimonialData = [{
  id: 1,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
}, {
  id: 2,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
}, {
  id: 3,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
}, {
  id: 4,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
}, {
  id: 5,
  name: "Arjun",
  review: "This product is so cool and create so much value bla bla bla bla",
  rating: 5,
  source: "Google"
}];

// app/sanity/query/features.server.ts
init_react();
var getFeaturesQuery = () => {
  return `*[_type == "feature"]{
        _createdAt,
        _id,
        _rev,
        _type,
        _updatedAt,
        desc,
        heading,
        title,
        to,
        "image": ${getImageQuery("image")}
      }`;
};
var getFeatures = async () => {
  try {
    const res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getFeaturesQuery()
    });
    if (res.status === 200) {
      return res.data.result;
    } else {
      throw new Error("Couldn't fetch features");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// app/sanity/query/process.server.ts
init_react();
var getProcessQuery = () => {
  return `*[_type == "process"]{
        _createdAt,
          _id,
          _rev,
          _type,
          _updatedAt,
          desc,
          title,
          steps,
          "image": ${getImageQuery("image")}
      }[0]`;
};
var getProcess = async () => {
  try {
    const res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getProcessQuery()
    });
    if (res.status === 200) {
      return res.data.result;
    } else {
      throw new Error("Couldn't fetch process");
    }
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

// app/components/home/servicesList.tsx
init_react();
var import_react53 = __toESM(require("react"));
var import_framer_motion6 = require("framer-motion");
var import_react54 = require("@remix-run/react");
var ServicesList = () => {
  const { services } = (0, import_react54.useLoaderData)();
  return /* @__PURE__ */ import_react53.default.createElement(infoWrapper_default, {
    heading: "Our Services",
    subHeading: "hdhhdshbsdjbasj"
  }, /* @__PURE__ */ import_react53.default.createElement(import_framer_motion6.motion.section, {
    transition: { staggerChildren: 0.5 },
    className: "flex flex-row gap-10 md:pb-[50px] flex-wrap justify-center items-center w-full overflow-visible "
  }, services.map((service, index) => {
    return /* @__PURE__ */ import_react53.default.createElement(service_default, {
      key: service._id,
      service,
      index
    });
  })), /* @__PURE__ */ import_react53.default.createElement("button", {
    className: `${largeBasicButton}`
  }, "See More Services"));
};
var servicesList_default = ServicesList;

// route:D:\projects\brightways\remix\app\routes\index.tsx
async function loader7() {
  const business = await getBusiness();
  if (!business) {
    throw new Error("Couldn't fetch business");
  }
  const features = await getFeatures();
  if (!features) {
    throw new Error("Couldn't fetch features");
  }
  const process2 = await getProcess();
  if (!process2) {
    throw new Error("Couldn't fetch process");
  }
  const services = await getServices();
  if (!services) {
    throw new Error("Coundn't fetch services");
  }
  const data = {
    testimonials: {
      heading: "Testimonials",
      sub_heading: "People love what we do and we want to let your know",
      data: testimonialData.slice(0, 3)
    },
    services: services.slice(0, 3),
    process: process2,
    features,
    business
  };
  return data;
}
function Index3() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-auto relative w-screen overflow-x-hidden flex flex-col items-center scroll-smooth bg-inherit gap-[100px] md:gap-0"
  }, /* @__PURE__ */ React.createElement(landingPage_default, null), /* @__PURE__ */ React.createElement(featuresList_default, null), /* @__PURE__ */ React.createElement(servicesList_default, null), /* @__PURE__ */ React.createElement(process_default, null), /* @__PURE__ */ React.createElement(testimonialsList_default, null), /* @__PURE__ */ React.createElement(sidebar_default2, null));
}
var ErrorBoundary3 = ({ error }) => {
  return /* @__PURE__ */ React.createElement("section", {
    className: "min-h-screen min-w-full flex bg-blue justify-center items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center"
  }, /* @__PURE__ */ React.createElement(import_bi5.BiError, {
    className: "fill-error-red h-[100px] w-[100px]"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "text-red font-heading font-extrabold text-[48px]"
  }, "Sorry"), /* @__PURE__ */ React.createElement("p", {
    className: "font-text text-[18px] mb-3"
  }, "Something went wrong!"), /* @__PURE__ */ React.createElement("button", {
    className: "p-3 rounded-md bg-blue text-white font-text text-[18px]",
    onClick: () => location.reload()
  }, "Try Again")));
};

// route:D:\projects\brightways\remix\app\routes\auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default
});
init_react();
var import_react55 = require("@remix-run/react");
var import_framer_motion7 = require("framer-motion");
var Auth = () => {
  return /* @__PURE__ */ React.createElement(infoWrapper_default, null, /* @__PURE__ */ React.createElement("main", {
    className: "md:bg-inherit md:dark:bg-gray-800 md:bg-gray-100 md:p-10 w-full md:w-[400px] h-auto overflow-visible"
  }, /* @__PURE__ */ React.createElement(import_framer_motion7.AnimatePresence, null, /* @__PURE__ */ React.createElement(import_react55.Outlet, null))));
};
var auth_default = Auth;

// route:D:\projects\brightways\remix\app\routes\auth\callback.tsx
var callback_exports = {};
__export(callback_exports, {
  action: () => action3,
  default: () => callback_default
});
init_react();
var import_node5 = require("@remix-run/node");
var import_react56 = require("@remix-run/react");
var import_react57 = __toESM(require("react"));
var import_supabase3 = __toESM(require_supabase());
var action3 = async ({ request }) => {
  const formData = await request.formData();
  const session = await getSession(request.headers.get("Cookie"));
  let error = JSON.parse(formData.get("error"));
  if (error) {
    console.log(error);
    session.flash("error", {
      message: "Something went wrong"
    });
    return (0, import_node5.redirect)("/auth", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  let supaSession = JSON.parse(formData.get("session"));
  let event = JSON.parse(formData.get("event"));
  if (event === null || supaSession === null) {
    session.flash("error", {
      message: "Something went wrong"
    });
    return (0, import_node5.redirect)("/auth", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  if (event === "SIGNED_IN") {
    session.set("access_token", supaSession == null ? void 0 : supaSession.access_token);
    console.log("inside signedin switch case");
    return (0, import_node5.redirect)("/", {
      headers: {
        "Set-Cookie": await commitSession(session, { expires: new Date(supaSession.expires_at), maxAge: supaSession.expires_in })
      }
    });
  }
  return null;
};
var Callback = () => {
  const submit = (0, import_react56.useSubmit)();
  const transition = (0, import_react56.useTransition)();
  import_react57.default.useEffect(() => {
    const { data, error } = import_supabase3.supabaseClient.auth.onAuthStateChange((event, session) => {
      const formData = new FormData();
      formData.set("session", JSON.stringify(session));
      formData.set("event", JSON.stringify(event));
      submit(formData, {
        method: "post"
      });
    });
    if (error) {
      const formData = new FormData();
      formData.set("error", JSON.stringify(error));
      submit(formData, {
        method: "post"
      });
    }
    return () => {
      data == null ? void 0 : data.unsubscribe();
    };
  }, []);
  return /* @__PURE__ */ import_react57.default.createElement("div", {
    className: "w-full flex justify-center items-center"
  }, transition.state === "loading" && /* @__PURE__ */ import_react57.default.createElement("div", {
    className: " inline-block w-[50px] h-[50px] after:contents-[''] after:block after:h-[40px] after:w-[40px] after:m-[5px] after:rounded-[50%] after:border-2 after:border-t-blue after:animate-spin overflow-visible"
  }));
};
var callback_default = Callback;

// route:D:\projects\brightways\remix\app\routes\auth\index.tsx
var auth_exports2 = {};
__export(auth_exports2, {
  LoginMethod: () => LoginMethod,
  action: () => action4,
  default: () => auth_default2,
  loader: () => loader8
});
init_react();

// public/icons/google.png
var google_default = "/build/_assets/google-DNT3BFC7.png";

// public/icons/facebook.png
var facebook_default = "/build/_assets/facebook-MZKXK7VM.png";

// route:D:\projects\brightways\remix\app\routes\auth\index.tsx
var import_framer_motion8 = require("framer-motion");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_supabase5 = __toESM(require_supabase());
var import_node6 = require("@remix-run/node");
var import_react58 = require("@remix-run/react");
var LoginMethod = /* @__PURE__ */ ((LoginMethod2) => {
  LoginMethod2["GOOGLE"] = "GOOGLE";
  LoginMethod2["FACEBOOK"] = "FACEBOOK";
  LoginMethod2["EMAIL"] = "EMAIL";
  return LoginMethod2;
})(LoginMethod || {});
var loader8 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const response = {};
  if (session.has("error")) {
    response.error = session.get("error");
  }
  return (0, import_node6.json)(response, {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
var action4 = async ({ request }) => {
  if (request.method === "POST") {
    const form = await request.formData();
    const method = form.get("method");
    (0, import_tiny_invariant.default)(method, "method missing");
    if (method === "EMAIL" /* EMAIL */) {
      const email = form.get("email");
      (0, import_tiny_invariant.default)(typeof email === "string", "inavlid input");
      if (email.length === 0) {
        return (0, import_node6.json)({
          error: {
            message: "email required"
          }
        });
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        return (0, import_node6.json)({
          error: {
            message: "invalid email"
          }
        });
      }
      const { error } = await supabaseAdmin.auth.signIn({
        email
      }, {
        redirectTo: `${process.env.SERVER_URL}/auth/callback`
      });
      if (error) {
        return (0, import_node6.json)({
          error: {
            message: error.message
          }
        });
      }
      return (0, import_node6.json)({
        success: {
          message: "Check your email"
        }
      });
    }
  }
  return null;
};
var Login = () => {
  const transition = (0, import_react58.useTransition)();
  const notification = (0, import_react58.useActionData)();
  const { error } = (0, import_react58.useLoaderData)();
  const handleGoogleLogin = () => {
    import_supabase5.supabaseClient.auth.signIn({
      provider: "google"
    }, {
      redirectTo: `http://localhost:3000/auth/callback`
    });
  };
  const handleFacebookLogin = async () => {
    import_supabase5.supabaseClient.auth.signIn({
      provider: "facebook"
    }, {
      redirectTo: `http://localhost:3000/auth/callback`
    });
  };
  return /* @__PURE__ */ React.createElement(import_framer_motion8.motion.section, {
    variants: fade,
    initial: "hidden",
    animate: "visible",
    className: "flex flex-col gap-10 bg-inherit overflow-visible"
  }, (notification == null ? void 0 : notification.error) || (notification == null ? void 0 : notification.success) ? /* @__PURE__ */ React.createElement("section", {
    className: `flex justify-center items-center h-[50px] w-full border-2 ${notification.error ? "border-[#B00020]" : notification.success ? "border-blue" : ""}`
  }, /* @__PURE__ */ React.createElement("p", {
    className: `text-[16px] font-text font-semibold ${error || notification.error ? "text-[#B00020]" : notification.success ? "text-blue" : ""}`
  }, notification.success ? notification.success.message : notification.error ? notification.error.message : null)) : null, error ? /* @__PURE__ */ React.createElement("section", {
    className: `flex justify-center items-center h-[50px] w-full border-2 border-[#B00020]`
  }, /* @__PURE__ */ React.createElement("p", {
    className: `text-[16px] font-text font-semibold text-[#B00020]`
  }, error.message)) : null, /* @__PURE__ */ React.createElement("h1", {
    className: "font-heading text-[32px] text-center font-bold dark:text-white text-black"
  }, "Login"), /* @__PURE__ */ React.createElement(import_react58.Form, {
    method: "post",
    action: "/auth?index",
    className: "flex flex-col gap-5 overflow-visible"
  }, /* @__PURE__ */ React.createElement("input", {
    className: `${lessRoundedBasicInputWithBorder}`,
    type: "email",
    placeholder: "Your email",
    name: "email"
  }), /* @__PURE__ */ React.createElement("input", {
    className: "hidden",
    name: "method",
    defaultValue: "EMAIL" /* EMAIL */
  }), /* @__PURE__ */ React.createElement("button", {
    className: `${lessRoundedBasicLargeButton}`,
    type: "submit",
    disabled: transition.state === "submitting"
  }, "Login")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-center items-center gap-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: " bg-gray-400 h-[2px] flex-1"
  }), /* @__PURE__ */ React.createElement("p", {
    className: " text-[18px] font-text dark:text-white text-black"
  }, "or"), /* @__PURE__ */ React.createElement("span", {
    className: " bg-gray-400 h-[2px] flex-1"
  })), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-row justify-center gap-5 items-center overflow-visible"
  }, /* @__PURE__ */ React.createElement("button", {
    disabled: transition.state === "submitting",
    className: `${lessRoundedBasicLargeButton}`,
    onClick: handleGoogleLogin.bind(null)
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-10 w-10",
    src: google_default
  })), /* @__PURE__ */ React.createElement("button", {
    disabled: transition.state === "submitting",
    className: `${lessRoundedBasicLargeButton}`,
    onClick: handleFacebookLogin.bind(void 0)
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-10 w-10",
    src: facebook_default
  }))));
};
var auth_default2 = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "c698ae2d", "entry": { "module": "/build/entry.client-72Z4IJC7.js", "imports": ["/build/_shared/chunk-ZPIVKSLF.js", "/build/_shared/chunk-XV23MX66.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-EMU4XLEO.js", "imports": ["/build/_shared/chunk-SBUZPH3O.js", "/build/_shared/chunk-4W53IXAO.js", "/build/_shared/chunk-EXGRFLUK.js", "/build/_shared/chunk-CZUHRWWS.js", "/build/_shared/chunk-B3K4FTN4.js", "/build/_shared/chunk-N3UILTLO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-4S3XOKWW.js", "imports": ["/build/_shared/chunk-6TW2643V.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth": { "id": "routes/auth", "parentId": "root", "path": "auth", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth-FOKGE5FZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/callback": { "id": "routes/auth/callback", "parentId": "routes/auth", "path": "callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/callback-FR3HYRAD.js", "imports": ["/build/_shared/chunk-YCZQDSIZ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/index": { "id": "routes/auth/index", "parentId": "routes/auth", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/auth/index-T6WOSZYD.js", "imports": ["/build/_shared/chunk-AJU2FLGQ.js", "/build/_shared/chunk-CUB2A36P.js", "/build/_shared/chunk-YCZQDSIZ.js", "/build/_shared/chunk-4W53IXAO.js", "/build/_shared/chunk-B3K4FTN4.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-3DFIGRSL.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-AGEU6MPT.js", "imports": ["/build/_shared/chunk-6TW2643V.js", "/build/_shared/chunk-CUB2A36P.js", "/build/_shared/chunk-CNGUMGPP.js", "/build/_shared/chunk-6AZQIGZS.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/pricing": { "id": "routes/pricing", "parentId": "root", "path": "pricing", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pricing-YFUTRA73.js", "imports": ["/build/_shared/chunk-CNGUMGPP.js", "/build/_shared/chunk-6AZQIGZS.js", "/build/_shared/chunk-3AO5V6RL.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pricing/$service": { "id": "routes/pricing/$service", "parentId": "routes/pricing", "path": ":service", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pricing/$service-LWH3NODH.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pricing/index": { "id": "routes/pricing/index", "parentId": "routes/pricing", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/pricing/index-MCCYWDAI.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile": { "id": "routes/profile", "parentId": "root", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/profile-MCD2WLJ2.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/profile/index": { "id": "routes/profile/index", "parentId": "routes/profile", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/profile/index-V6W34JED.js", "imports": ["/build/_shared/chunk-AJU2FLGQ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services": { "id": "routes/services", "parentId": "root", "path": "services", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services-B5NSTIUA.js", "imports": ["/build/_shared/chunk-6AZQIGZS.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/stores/index": { "id": "routes/stores/index", "parentId": "root", "path": "stores", "index": true, "caseSensitive": void 0, "module": "/build/routes/stores/index-HKC476OF.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-C698AE2D.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/stores/index": {
    id: "routes/stores/index",
    parentId: "root",
    path: "stores",
    index: true,
    caseSensitive: void 0,
    module: stores_exports
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "services",
    index: void 0,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/pricing": {
    id: "routes/pricing",
    parentId: "root",
    path: "pricing",
    index: void 0,
    caseSensitive: void 0,
    module: pricing_exports
  },
  "routes/pricing/$service": {
    id: "routes/pricing/$service",
    parentId: "routes/pricing",
    path: ":service",
    index: void 0,
    caseSensitive: void 0,
    module: service_exports
  },
  "routes/pricing/index": {
    id: "routes/pricing/index",
    parentId: "routes/pricing",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: pricing_exports2
  },
  "routes/profile": {
    id: "routes/profile",
    parentId: "root",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/profile/index": {
    id: "routes/profile/index",
    parentId: "routes/profile",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: profile_exports2
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/auth": {
    id: "routes/auth",
    parentId: "root",
    path: "auth",
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/auth/callback": {
    id: "routes/auth/callback",
    parentId: "routes/auth",
    path: "callback",
    index: void 0,
    caseSensitive: void 0,
    module: callback_exports
  },
  "routes/auth/index": {
    id: "routes/auth/index",
    parentId: "routes/auth",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: auth_exports2
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
