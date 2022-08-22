var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
}, __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React, init_react = __esm({
  "node_modules/@remix-run/dev/dist/compiler/shims/react.ts"() {
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
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
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
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
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
var import_react16 = require("@remix-run/react"), import_react17 = __toESM(require("react"));

// app/styles/global.css
var global_default = "/build/_assets/global-JEIF55HP.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-55DNWN2R.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-55DNWN2R.css";

// app/styles/toast.css
var toast_default = "/build/_assets/toast-5P2K5C2H.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-NKLLMXSD.css";

// app/components/ui/layout.tsx
init_react();
var import_react10 = __toESM(require("react"));

// app/components/ui/footer.tsx
init_react();
var import_react2 = require("@remix-run/react"), Footer = () => {
  let { footer } = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full bg-inherit flex justify-center items-center mx-auto px-[20px] md:px-[100px] h-auto gap-10 py-[100px] border-t-2 border-gray-400"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "w-[100%] gap-10 grid grid-cols-1 md:grid-cols-4 "
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-start gap-3 font-[14px]  dark:text-white text-black font-text"
  }, /* @__PURE__ */ React.createElement("img", {
    src: footer.logo.imageUrl
  }), /* @__PURE__ */ React.createElement("p", null, footer.desc)), footer.sections.map((section) => /* @__PURE__ */ React.createElement("section", {
    key: section._key,
    className: "flex flex-col items-start font-semibold gap-3 font-[14px] dark:text-white text-black  font-text"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[12px] font-normal font-heading"
  }, section.name), section.links.map((link) => /* @__PURE__ */ React.createElement("a", {
    key: link._key,
    href: link.to
  }, link.name))))));
}, footer_default = Footer;

// app/components/ui/header.tsx
init_react();
var import_react6 = __toESM(require("react")), import_bs = require("react-icons/bs"), import_bs2 = require("react-icons/bs");

// app/components/context/appContext.tsx
init_react();
var import_react3 = require("@remix-run/react"), import_react4 = __toESM(require("react"));
var AppContext = import_react4.default.createContext({
  user: null,
  profile: null,
  isAuthenticated: !1,
  setProfile: (_) => {
  }
}), AppContextProvider = ({ children }) => {
  let { isAuthenticated: isAuthenticated2, user, profile } = (0, import_react3.useLoaderData)(), [userProfile, setUserProfile] = import_react4.default.useState(profile || null), setProfile = (p) => {
    setUserProfile(p);
  };
  return /* @__PURE__ */ import_react4.default.createElement(AppContext.Provider, {
    value: { isAuthenticated: isAuthenticated2, user: user || null, profile: userProfile, setProfile }
  }, children);
}, appContext_default = AppContextProvider;

// app/utils/styles.ts
init_react();
var largeBasicButton = "h-[60px] w-full md:w-auto flex justify-center items-center px-[30px] rounded-md md:rounded-[30px] border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-blue hover:scale-110 transition-all duration-300", basicButton = "h-[40px] w-full md:w-auto flex justify-center items-center px-[30px] rounded-md md:rounded-[30px] border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-blue hover:scale-110 transition-all duration-300";
var lessRoundedBasicLargeButton = "h-[60px] w-full md:w-auto flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-blue hover:scale-105 transition-all duration-300", lessRoundedBasicLargeButtonFull = "h-[60px] w-full flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-blue hover:scale-105 transition-all duration-300", borderGrowAnim = "after:z-[-1] after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 hover:after:opacity-100 hover:after:scale-105 after:scale-100 after:opacity-0 after:border-[3px] after:border-blue after:rounded-md after:transition-all after:duration-300", lessRoundedBasicInput = "h-[60px] w-full flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white  text-black transition-all duration-300 outline-none border-none dark:bg-gray-800 bg-gray-50 px-3  placeholder:font-text placeholder:font-semibold placeholder:text-gray-400 text-[16px]", lessRoundedBasicInputWithBorder = "h-[60px] w-full flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white  text-black transition-all duration-300 outline-none dark:bg-gray-800 bg-gray-50 px-3  placeholder:font-text placeholder:font-semibold placeholder:text-gray-400 text-[16px]";

// app/components/ui/header.tsx
var import_react7 = require("@remix-run/react"), import_ai = require("react-icons/ai");

// app/components/context/themeContext.tsx
init_react();
var import_react5 = __toESM(require("react"));
var ThemeContext = import_react5.default.createContext({
  theme: "DARK" /* DARK */,
  setAppTheme: (theme) => {
  }
}), ThemeContextProvider = ({ children }) => {
  let [theme, settheme] = import_react5.default.useState("DARK" /* DARK */), setAppTheme = (theme2) => {
    console.log(theme2), theme2 === "DARK" /* DARK */ ? (document.documentElement.classList.add("dark"), localStorage.theme = "dark", settheme("DARK" /* DARK */)) : (document.documentElement.classList.remove("dark"), localStorage.theme = "light", settheme("LIGHT" /* LIGHT */));
  };
  return import_react5.default.useEffect(() => {
    localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? (document.documentElement.classList.add("dark"), settheme("DARK" /* DARK */)) : (document.documentElement.classList.remove("dark"), settheme("LIGHT" /* LIGHT */));
  }, []), /* @__PURE__ */ import_react5.default.createElement(ThemeContext.Provider, {
    value: { theme, setAppTheme }
  }, children);
}, themeContext_default = ThemeContextProvider;

// app/components/ui/header.tsx
var Header = () => {
  let location2 = (0, import_react7.useLocation)(), { user, isAuthenticated: isAuthenticated2 } = import_react6.default.useContext(AppContext), { setAppTheme, theme } = import_react6.default.useContext(ThemeContext), { header } = (0, import_react7.useLoaderData)(), [open, setOpen] = import_react6.default.useState(!1), [visible, setVisible] = import_react6.default.useState(!1), [onTop, setOnTop] = import_react6.default.useState(!0), { logo, nav } = header, isCurrentPage = (path) => path === location2.pathname;
  return import_react6.default.useEffect(() => {
    let lastYScroll = window.pageYOffset, handleScroll = () => {
      let currYScroll = window.pageYOffset;
      if (currYScroll > 100) {
        let direction = currYScroll > lastYScroll ? "down" : "up";
        setVisible(direction === "down"), onTop && setOnTop(!1), lastYScroll = direction === "down" ? currYScroll - 5 : currYScroll + 5;
      } else
        setOnTop(!0);
    };
    return window.addEventListener("scroll", handleScroll), () => window.removeEventListener("scroll", handleScroll);
  }, []), /* @__PURE__ */ import_react6.default.createElement("header", {
    className: `${visible ? "-translate-y-full" : "translate-y-0"} fixed top-0 left-0 right-0 h-[100px] flex flex-row items-center justify-between z-40 overflow-visible transition-transform duration-300 md:overflow-hidden px-[20px] md:px-[50px] dark:bg-gray-900 bg-white`
  }, /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "flex-1 md:flex-none"
  }, /* @__PURE__ */ import_react6.default.createElement("img", {
    className: "h-10 w-auto bg-cover",
    src: logo.imageUrl,
    alt: logo.alt
  })), /* @__PURE__ */ import_react6.default.createElement("ul", {
    className: `${open ? "scale-100 opacity-100 " : " scale-0 opacity-0 md:scale-100 md:opacity-100"} fixed top-0 left-0 right-0 h-[100vh] flex flex-col items-center justify-center transition-all duration-500 md:static md:flex-row md:bg-[transparent] md:w-auto md:h-auto md:overflow-hidden md:gap-3 md:px-5 dark:bg-gray-900 bg-white z-30`
  }, /* @__PURE__ */ import_react6.default.createElement(import_ai.AiOutlineClose, {
    className: "md:hidden dark:fill-white fill-black absolute right-[20px] top-[20px] h-[40px] w-[40px]",
    onClick: () => setOpen(!1)
  }), nav.map((link) => /* @__PURE__ */ import_react6.default.createElement("li", {
    className: " group py-4 w-[80%] font-text font-[18px] font-bold flex flex-col gap-1 justify-center items-center rounded-md transition-all duration-300 dark:text-white text-black md:text-gray-400  md:p-2 md:w-auto md:overflow-visible md:font-medium",
    key: link._key
  }, /* @__PURE__ */ import_react6.default.createElement(import_react7.Link, {
    to: link.to,
    onClick: () => setOpen(!1)
  }, link.name), /* @__PURE__ */ import_react6.default.createElement("span", {
    className: `${isCurrentPage(link.to) ? "w-full" : "w-0"}  group-hover:w-full hidden md:flex h-[4px] transition-all bg-blue duration-100`
  }))), /* @__PURE__ */ import_react6.default.createElement("li", {
    className: " py-4 w-[80%] md:hidden font-text font-[18px] font-bold flex flex-col gap-1 justify-center items-center rounded-md transition-all duration-300 dark:text-white text-black md:text-gray-400 md:p-2 md:w-auto md:overflow-visible md:font-medium"
  }, /* @__PURE__ */ import_react6.default.createElement(import_react7.Link, {
    to: "/login",
    onClick: () => setOpen(!1)
  }, "Login"))), /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "flex items-center gap-4 overflow-visible z-20"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "relative h-[40px] w-[40px] rounded-[50px] border-gray-400  border-2  font-text font-medium flex justify-center items-center"
  }, /* @__PURE__ */ import_react6.default.createElement(import_bs2.BsLightbulb, {
    className: `dark:fill-white fill-black scale-110 left-[11px] ${theme === "DARK" /* DARK */ ? "opacity-100 absolute" : "opacity-0 hidden"}`,
    onClick: () => setAppTheme("LIGHT" /* LIGHT */)
  }), /* @__PURE__ */ import_react6.default.createElement(import_bs2.BsLightbulbFill, {
    className: `dark:fill-white fill-black scale-110 left-[11px] ${theme === "LIGHT" /* LIGHT */ ? "opacity-100 absolute" : "opacity-0 hidden"}`,
    onClick: () => setAppTheme("DARK" /* DARK */)
  })), isAuthenticated2 && user ? /* @__PURE__ */ import_react6.default.createElement("div", {
    className: `${basicButton} hidden md:flex`
  }, /* @__PURE__ */ import_react6.default.createElement(import_react7.Link, {
    to: "/dashboard/profile"
  }, "Profile")) : /* @__PURE__ */ import_react6.default.createElement("div", {
    className: `${basicButton} hidden md:flex`
  }, /* @__PURE__ */ import_react6.default.createElement(import_react7.Link, {
    to: "/auth"
  }, "Login"))), /* @__PURE__ */ import_react6.default.createElement("section", {
    className: "flex justify-center items-center md:hidden ml-3 z-20"
  }, /* @__PURE__ */ import_react6.default.createElement(import_bs.BsList, {
    style: { height: "40px", width: "40px" },
    className: "dark:fill-white fill-black",
    onClick: () => setOpen(!0)
  })));
}, header_default = Header;

// app/components/ui/layout.tsx
var import_react_toastify = require("react-toastify"), import_framer_motion = require("framer-motion"), import_react11 = require("@remix-run/react");

// app/components/ui/pageLoader.tsx
init_react();
var import_react8 = require("@remix-run/react"), import_react9 = __toESM(require("react")), PageLoader = () => {
  var _a;
  let transition = (0, import_react8.useTransition)();
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    className: `fixed bottom-5 ${transition.state === "loading" ? "right-5" : "right-[100%]"} flex flex-row gap-5 p-5 rounded-md dark:bg-gray-800 bg-slate-100 z-50 h-auto w-auto justify-center items-center`
  }, /* @__PURE__ */ import_react9.default.createElement("div", {
    className: " inline-block w-[50px] h-[50px] after:contents-[''] after:block after:h-[40px] after:w-[40px] after:m-[5px] after:rounded-[50%] after:border-2 after:border-t-blue after:animate-spin overflow-visible"
  }), /* @__PURE__ */ import_react9.default.createElement("p", {
    className: "font-text font-medium text-[16px] dark:text-white text-black"
  }, (_a = transition.location) == null ? void 0 : _a.pathname));
}, pageLoader_default = PageLoader;

// app/components/ui/layout.tsx
var Layout = ({ children }) => {
  let location2 = (0, import_react11.useLocation)();
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "flex flex-col min-h-[calc(100vh - 64px)] h-auto min-w-screen scroll-smooth"
  }, /* @__PURE__ */ import_react10.default.createElement(header_default, {
    pathname: location2.pathname
  }), /* @__PURE__ */ import_react10.default.createElement(import_framer_motion.AnimatePresence, {
    exitBeforeEnter: !0
  }, /* @__PURE__ */ import_react10.default.createElement(import_framer_motion.motion.main, null, children)), /* @__PURE__ */ import_react10.default.createElement(pageLoader_default, null), /* @__PURE__ */ import_react10.default.createElement(footer_default, null), /* @__PURE__ */ import_react10.default.createElement(import_react_toastify.ToastContainer, null));
}, layout_default = Layout;

// app/root.tsx
var import_bi = require("react-icons/bi");

// app/components/wrappers/infoWrapper.tsx
init_react();
var import_react14 = require("@remix-run/react"), import_react15 = __toESM(require("react"));

// app/utils/helpers/IsHomePage.ts
init_react();
var isHomePage = (path) => path === "/";

// app/components/containers/grid.tsx
init_react();
var import_react12 = __toESM(require("react")), import_framer_motion2 = require("framer-motion"), Grid = ({ children }) => /* @__PURE__ */ import_react12.default.createElement(import_framer_motion2.motion.div, {
  className: "grid grid-cols-4 gap-x-4 md:grid-col-8 lg:grid-cols-12 lg:gap-x-6 overflow-visible min-h-[500px] h-auto w-full"
}, children), grid_default = Grid;

// app/components/ui/info.tsx
init_react();
var import_react13 = __toESM(require("react")), Info = ({ heading, subHeading }) => /* @__PURE__ */ import_react13.default.createElement("section", {
  className: "flex w-[80%] flex-col items-center"
}, /* @__PURE__ */ import_react13.default.createElement("h1", {
  className: "font-heading text-[32px] text-black dark:text-white text-center font-bold"
}, heading), /* @__PURE__ */ import_react13.default.createElement("div", {
  className: " bg-blue h-[6px] w-10 rounded-sm"
}), /* @__PURE__ */ import_react13.default.createElement("p", {
  className: "mt-4 font-text text-[16px] text-gray-400 text-center"
}, subHeading)), info_default = Info;

// app/components/wrappers/infoWrapper.tsx
var InfoWrapper = ({ children, heading, subHeading, id }) => {
  let location2 = (0, import_react14.useLocation)();
  return /* @__PURE__ */ import_react15.default.createElement("div", {
    id,
    className: `flex bg-inherit flex-col items-center gap-[50px] md:gap-[70px] px-[10vw] md:min-h-screen h-auto w-full justify-center overflow-visible ${isHomePage(location2.pathname) ? "lg:py-[50px]" : "py-[100px] md:pb-[100px] md:pt-[150px]"}`
  }, heading && subHeading && /* @__PURE__ */ import_react15.default.createElement(info_default, {
    heading,
    subHeading
  }), /* @__PURE__ */ import_react15.default.createElement(grid_default, null, children));
}, infoWrapper_default = InfoWrapper;

// app/sanity/query/header.server.ts
init_react();

// app/sanity/sanity.server.ts
init_react();
var import_axios = __toESM(require("axios")), sanityQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.SANITY_DATASET}?query=`, sanityPostQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.SANITY_DATASET}`, sanityQueryClient = import_axios.default.create({
  baseURL: sanityQueryUrl
});

// app/sanity/query/image.server.ts
init_react();
var getImageQuery = (imageKey) => `*[_type == "picture" && _id == ^.${imageKey}._ref]{
        "alt": image.alt,
        "caption": image.caption,
        "imageUrl": image.asset->url,
    }[0]`;

// app/sanity/query/header.server.ts
var getHeaderQuery = () => `*[_type == 'header']{
        _id,
        "nav": nav[]{
            _key,
            name,
            to
        },
        "logo": ${getImageQuery("logo")}
      }[0]`, getHeader = async () => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getHeaderQuery()
    });
    if (res.status === 200)
      return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// app/sanity/query/footer.server.ts
init_react();
var getFooterQuery = () => `*[_type == 'footer']{
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
      }[0]`, getFooter = async () => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getFooterQuery()
    });
    if (res.status === 200)
      return res.data.result;
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
    httpOnly: !0,
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
if (!process.env.SERVER_URL)
  throw new Error("SERVICE_URL is required");
var supabaseAdmin = (0, import_supabase_js.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE), getToken = async (request) => {
  let cookieHeader = request.headers.get("Cookie");
  return (await getSession(cookieHeader)).get("access_token");
}, getUserByToken = async (token) => {
  supabaseAdmin.auth.setAuth(token);
  let { user, error } = await supabaseAdmin.auth.api.getUser(token);
  return { user, error };
}, isAuthenticated = async (request, validateAndReturnUser = !1) => {
  let token = await getToken(request);
  if (!token && !validateAndReturnUser)
    return [null, { message: "not found", status: 404 }];
  if (validateAndReturnUser) {
    let { user, error } = await getUserByToken(token);
    return error ? [null, error] : [user, error];
  }
  return [null, null];
};

// app/root.tsx
var loader = async ({ request }) => {
  let header = await getHeader();
  if (!header)
    throw new Response("Something went wrong", { status: 500 });
  let footer = await getFooter();
  if (!footer)
    throw new Response("Something went wrong", { status: 500 });
  let response = {
    header,
    footer,
    isAuthenticated: !1,
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      SERVER_URL: process.env.SERVER_URL
    }
  };
  if ((await getSession(request.headers.get("Cookie"))).has("access_token")) {
    let [user, error] = await isAuthenticated(request, !0);
    user && (response.isAuthenticated = !0, response.user = user), error && console.log(error);
    let profileResponse = await supabaseAdmin.from("profiles").select("*").eq("id", user == null ? void 0 : user.id).single();
    profileResponse.data && (response.profile = profileResponse.data), profileResponse.error && console.log(profileResponse.error);
  }
  return response;
}, links = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  },
  {
    rel: "preload",
    as: "style",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Outfit&family=Poppins&family=Inter&display=swap"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Outfit&family=Poppins&family=Inter&display=swap"
  },
  {
    rel: "stylesheet",
    href: global_default
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
    href: global_medium_default,
    media: "print, (min-width: 640px)"
  },
  {
    rel: "stylesheet",
    href: global_large_default,
    media: "screen and (min-width: 1024px)"
  }
], meta = () => ({ title: "Brightways" }), Document = ({ children, env }) => /* @__PURE__ */ import_react17.default.createElement("html", {
  lang: "en"
}, /* @__PURE__ */ import_react17.default.createElement("head", null, /* @__PURE__ */ import_react17.default.createElement("meta", {
  charSet: "utf-8"
}), /* @__PURE__ */ import_react17.default.createElement("meta", {
  name: "viewport",
  content: "width=device-width,initial-scale=1"
}), /* @__PURE__ */ import_react17.default.createElement(import_react16.Meta, null), /* @__PURE__ */ import_react17.default.createElement(import_react16.Links, null)), /* @__PURE__ */ import_react17.default.createElement("body", {
  className: "bg-white dark:bg-gray-900"
}, /* @__PURE__ */ import_react17.default.createElement(themeContext_default, null, children), /* @__PURE__ */ import_react17.default.createElement(import_react16.ScrollRestoration, null), env && /* @__PURE__ */ import_react17.default.createElement("script", {
  dangerouslySetInnerHTML: {
    __html: `window.env = ${JSON.stringify(env)}`
  }
}), /* @__PURE__ */ import_react17.default.createElement(import_react16.Scripts, null), /* @__PURE__ */ import_react17.default.createElement(import_react16.LiveReload, null)));
function App() {
  let { env } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ import_react17.default.createElement(Document, {
    env
  }, /* @__PURE__ */ import_react17.default.createElement(appContext_default, null, /* @__PURE__ */ import_react17.default.createElement(layout_default, null, /* @__PURE__ */ import_react17.default.createElement(import_react16.Outlet, null))));
}
var CatchBoundary = () => {
  let error = (0, import_react16.useCatch)();
  return /* @__PURE__ */ import_react17.default.createElement(Document, null, /* @__PURE__ */ import_react17.default.createElement(infoWrapper_default, {
    id: "error"
  }, /* @__PURE__ */ import_react17.default.createElement("div", {
    className: "md:border-2 md:border-gray-400 p-10 flex flex-col gap-5"
  }, /* @__PURE__ */ import_react17.default.createElement("h1", {
    className: " font-heading font-bold text-[100px] dark:text-white text-black "
  }, error.status), /* @__PURE__ */ import_react17.default.createElement("p", {
    className: " font-text font-medium text-center text-[18px] dark:text-white text-black"
  }, error.data), /* @__PURE__ */ import_react17.default.createElement("button", {
    style: { width: "100%" },
    className: `${lessRoundedBasicLargeButton}`,
    onClick: () => location.reload()
  }, "Try Again"))));
}, ErrorBoundary = ({ error }) => (console.log(error), /* @__PURE__ */ import_react17.default.createElement(Document, null, /* @__PURE__ */ import_react17.default.createElement("section", {
  className: "min-h-screen min-w-full flex bg-blue justify-center items-center"
}, /* @__PURE__ */ import_react17.default.createElement("div", {
  className: "p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center"
}, /* @__PURE__ */ import_react17.default.createElement(import_bi.BiError, {
  className: "fill-error-red h-[100px] w-[100px]"
}), /* @__PURE__ */ import_react17.default.createElement("h1", {
  className: "text-red font-heading font-extrabold text-[48px]"
}, "Sorry"), /* @__PURE__ */ import_react17.default.createElement("p", {
  className: "font-text text-[18px] mb-3"
}, "Something went wrong!"), /* @__PURE__ */ import_react17.default.createElement("button", {
  className: "p-3 rounded-md bg-blue text-white font-text text-[18px]",
  onClick: () => location.reload()
}, "Try Again")))));

// app/routes/stores/index.tsx
var stores_exports = {};
__export(stores_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => stores_default,
  loader: () => loader2
});
init_react();
var import_react20 = __toESM(require("react")), import_bi3 = require("react-icons/bi");

// app/components/stores/container.tsx
init_react();
var import_react19 = require("@remix-run/react");

// app/components/stores/store.tsx
init_react();
var import_react18 = __toESM(require("react")), import_fa = require("react-icons/fa"), import_bi2 = require("react-icons/bi"), import_fi = require("react-icons/fi");
var Store = ({ store, delay }) => /* @__PURE__ */ import_react18.default.createElement("div", {
  className: "flex flex-col dark:bg-gray-800 bg-gray-50 p-5 gap-2 rounded-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-visible odd:animate-bounce-in-left even:animate-bounce-in-right"
}, /* @__PURE__ */ import_react18.default.createElement("h1", {
  className: "font-heading font-semibold dark:text-white text-black text-[24px] mb-5"
}, store.name), /* @__PURE__ */ import_react18.default.createElement("section", {
  className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
}, /* @__PURE__ */ import_react18.default.createElement(import_fa.FaRegAddressBook, null), /* @__PURE__ */ import_react18.default.createElement("p", null, store.address)), /* @__PURE__ */ import_react18.default.createElement("section", {
  className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
}, /* @__PURE__ */ import_react18.default.createElement(import_fa.FaRegCalendarAlt, null), /* @__PURE__ */ import_react18.default.createElement("p", null, store.openOn)), /* @__PURE__ */ import_react18.default.createElement("section", {
  className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
}, /* @__PURE__ */ import_react18.default.createElement(import_bi2.BiTime, null), /* @__PURE__ */ import_react18.default.createElement("p", null, store.timings)), /* @__PURE__ */ import_react18.default.createElement("section", {
  className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
}, /* @__PURE__ */ import_react18.default.createElement(import_fi.FiPhoneCall, null), /* @__PURE__ */ import_react18.default.createElement("p", null, store.contactNumber)), /* @__PURE__ */ import_react18.default.createElement("section", {
  className: "flex flex-col md:flex-row items-center gap-5 font-text text-[14px] mt-5 overflow-visible"
}, /* @__PURE__ */ import_react18.default.createElement("button", {
  className: `${basicButton}`
}, /* @__PURE__ */ import_react18.default.createElement("a", {
  href: store.direction,
  target: "_blank"
}, "Get Direction")), /* @__PURE__ */ import_react18.default.createElement("button", {
  className: `${basicButton}`
}, /* @__PURE__ */ import_react18.default.createElement("a", {
  href: `tel:+91${store.contactNumber}`
}, "Call")))), store_default = Store;

// app/components/stores/container.tsx
var Container = () => {
  let { stores } = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center gap-5 items-center col-start-1 col-span-full"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "w-[80%] grid grid-rows-3 md:grid-rows-2 md:grid-cols-2 gap-10 py-5"
  }, stores.map((store, index) => /* @__PURE__ */ React.createElement(store_default, {
    key: store._id,
    store,
    delay: (index + 1) * 100
  }))));
}, container_default = Container;

// app/sanity/query/stores.server.ts
init_react();
var getStoresQuery = () => `*[_type == 'store']{
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
      }`, getStores = async () => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getStoresQuery()
    });
    if (res.status === 200)
      return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// app/routes/stores/index.tsx
var loader2 = async () => {
  let stores = await getStores();
  if (!stores)
    throw new Error("Couldn't fetch stores");
  return {
    stores
  };
}, Index = () => /* @__PURE__ */ import_react20.default.createElement(infoWrapper_default, {
  id: "stores"
}, /* @__PURE__ */ import_react20.default.createElement(container_default, null)), ErrorBoundary2 = ({ error }) => (console.log(error), /* @__PURE__ */ import_react20.default.createElement("section", {
  className: "min-h-screen min-w-full flex bg-blue justify-center items-center"
}, /* @__PURE__ */ import_react20.default.createElement("div", {
  className: "p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center"
}, /* @__PURE__ */ import_react20.default.createElement(import_bi3.BiError, {
  className: "fill-error-red h-[100px] w-[100px]"
}), /* @__PURE__ */ import_react20.default.createElement("h1", {
  className: "text-red font-heading font-extrabold text-[48px]"
}, "Sorry"), /* @__PURE__ */ import_react20.default.createElement("p", {
  className: "font-text text-[18px] mb-3"
}, "Something went wrong!"), /* @__PURE__ */ import_react20.default.createElement("button", {
  className: "p-3 rounded-md bg-blue text-white font-text text-[18px]",
  onClick: () => location.reload()
}, "Try Again")))), stores_default = Index;

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader3
});
init_react();
var import_node2 = require("@remix-run/node"), import_react24 = require("@remix-run/react");

// app/components/wrappers/dashboardWrapper.tsx
init_react();
var import_react23 = __toESM(require("react"));

// app/components/profile/sidebar.tsx
init_react();
var import_react21 = require("@remix-run/react"), import_react22 = __toESM(require("react")), import_io = require("react-icons/io"), ProfileSidebar = () => {
  let matches = (0, import_react21.useMatches)(), [open, setOpen] = import_react22.default.useState(!1);
  return /* @__PURE__ */ import_react22.default.createElement("div", {
    className: "w-full md:w-[200px] px-[20px] md:px-[50px] absolute md:static dark:bg-gray-900 bg-white"
  }, /* @__PURE__ */ import_react22.default.createElement("section", {
    className: "md:hidden flex justify-between items-center w-full h-[50px]",
    onClick: () => setOpen((prev) => !prev)
  }, /* @__PURE__ */ import_react22.default.createElement("p", {
    className: " font-text font-medium text-[18px] dark:text-white text-black"
  }, "Menu"), open ? /* @__PURE__ */ import_react22.default.createElement(import_io.IoMdArrowDropup, {
    className: "w-7 h-7 dark:fill-white fill-black"
  }) : /* @__PURE__ */ import_react22.default.createElement(import_io.IoMdArrowDropdown, {
    className: "w-10 h-10 dark:fill-white fill-black"
  })), /* @__PURE__ */ import_react22.default.createElement("ul", {
    className: `w-full md:h-full flex flex-col items-start bg-inherit ${open ? "h-full" : "h-0"}`
  }, /* @__PURE__ */ import_react22.default.createElement("li", {
    onClick: () => setOpen(!1),
    className: `h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length - 1].id.includes("/profile") ? "text-blue" : "dark:text-white text-black"}`
  }, /* @__PURE__ */ import_react22.default.createElement(import_react21.Link, {
    to: "/dashboard/profile"
  }, "Profile")), /* @__PURE__ */ import_react22.default.createElement("li", {
    onClick: () => setOpen(!1),
    className: `h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length - 1].id.includes("/bookings") ? "text-blue" : "dark:text-white text-black"}`
  }, /* @__PURE__ */ import_react22.default.createElement(import_react21.Link, {
    to: "/dashboard/bookings"
  }, "Bookings")), /* @__PURE__ */ import_react22.default.createElement("li", {
    onClick: () => setOpen(!1),
    className: `h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length - 1].id.includes("/review") ? "text-blue" : "dark:text-white text-black"}`
  }, /* @__PURE__ */ import_react22.default.createElement(import_react21.Link, {
    to: "/dashboard/review"
  }, "Review"))));
}, sidebar_default = ProfileSidebar;

// app/components/wrappers/dashboardWrapper.tsx
var DashBoardWrapper = ({ children }) => /* @__PURE__ */ import_react23.default.createElement("div", {
  className: "flex h-screen w-full bg-inherit pt-[100px] relative"
}, /* @__PURE__ */ import_react23.default.createElement(sidebar_default, null), /* @__PURE__ */ import_react23.default.createElement("section", {
  className: "p-[20px] pt-[100px] md:pt-10 md:p-10 flex-1 flex-col dark:bg-gray-800 bg-gray-100 overflow-scroll no-scrollbar"
}, children)), dashboardWrapper_default = DashBoardWrapper;

// app/routes/dashboard.tsx
var loader3 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  if (!session)
    return (0, import_node2.redirect)("/auth");
  let token = session.get("access_token");
  if (!token)
    return (0, import_node2.redirect)("/auth");
  let { error } = await supabaseAdmin.auth.api.getUser(token);
  return (error == null ? void 0 : error.status) === 404 ? (0, import_node2.redirect)("/auth", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  }) : null;
}, Dashboard = () => /* @__PURE__ */ React.createElement(dashboardWrapper_default, null, /* @__PURE__ */ React.createElement(import_react24.Outlet, null)), dashboard_default = Dashboard;

// app/routes/dashboard/bookings.tsx
var bookings_exports = {};
__export(bookings_exports, {
  default: () => bookings_default
});
init_react();
var import_react25 = __toESM(require("react")), Bookings = () => /* @__PURE__ */ import_react25.default.createElement("div", null, "Bookings"), bookings_default = Bookings;

// app/routes/dashboard/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action,
  default: () => profile_default
});
init_react();
var import_node3 = require("@remix-run/node"), import_react27 = require("@remix-run/react"), import_react28 = __toESM(require("react"));
var import_md = require("react-icons/md"), import_ai2 = require("react-icons/ai"), import_fa2 = require("react-icons/fa");

// app/components/ui/input.tsx
init_react();
var import_react26 = __toESM(require("react")), Input = ({ label, type, placeholder, name, error, handleChange, defaultValue = "", disabled = !1, style }) => /* @__PURE__ */ import_react26.default.createElement("div", {
  className: "w-full flex flex-col gap-2"
}, /* @__PURE__ */ import_react26.default.createElement("label", {
  className: "font-text font-normal text-[16px] dark:text-white text-black",
  htmlFor: name
}, label), /* @__PURE__ */ import_react26.default.createElement("input", {
  className: style,
  onChange: handleChange.bind(null),
  type,
  placeholder,
  name,
  defaultValue,
  disabled
}), error && /* @__PURE__ */ import_react26.default.createElement("p", {
  className: " text-[#FF0000]"
}, error)), input_default = Input;

// app/utils/helpers/createProfile.ts
init_react();
var createProfile = (formData) => {
  let name = formData.get("name"), contactNumber = formData.get("contactNumber");
  return name ? contactNumber ? name.length < 4 ? [null, {
    name: "name is too short"
  }] : /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(contactNumber) ? [{
    name,
    contactNumber
  }, null] : [null, {
    name: "invalid contact number"
  }] : [null, {
    name: "contact number is required"
  }] : [null, {
    name: "name is required"
  }];
};

// app/routes/dashboard/profile.tsx
var action = async ({ request }) => {
  let formData = await request.formData(), event = formData.get("event"), session = await getSession(request.headers.get("Cookie")), token = session.get("access_token");
  if (event === "SIGN_OUT" && token) {
    let { error } = await supabaseAdmin.auth.api.signOut(token);
    if (error)
      console.log(error);
    else
      return session.flash("error", {
        message: "Logout out successfully"
      }), (0, import_node3.redirect)("/auth", {
        headers: {
          "Set-Cookie": await destroySession(session)
        }
      });
  }
  if (event === "UPDATE_USER") {
    let [profile, error] = createProfile(formData);
    if (error)
      return (0, import_node3.json)({
        validationError: error
      });
    let profileResponse = await supabaseAdmin.from("profiles").update({ name: profile == null ? void 0 : profile.name, contactNumber: profile == null ? void 0 : profile.contactNumber });
    return profileResponse.error ? (console.log(profileResponse.error), (0, import_node3.json)({
      error: profileResponse.error.message
    })) : (0, import_node3.json)({
      success: profileResponse.data
    });
  }
  return null;
}, ProfilePage = () => {
  let navigate = (0, import_react27.useNavigate)(), data = (0, import_react27.useActionData)(), tranistion = (0, import_react27.useTransition)(), { user, isAuthenticated: isAuthenticated2, setProfile, profile } = import_react28.default.useContext(AppContext), [validationError, setValidationError] = import_react28.default.useState((data == null ? void 0 : data.validationErrors) ? data.validationErrors : {});
  if (import_react28.default.useEffect(() => {
    (data == null ? void 0 : data.success) && setProfile(data.success);
  }, []), !isAuthenticated2 || !user)
    return navigate("/login"), null;
  let handleNameChange = (e) => {
    e.target.value.length < 4 ? setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { name: "name is too short" })) : setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { name: void 0 }));
  }, handleContactNumberChange = (e) => {
    let value = e.target.value;
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value) ? setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { contactNumber: void 0 })) : setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { contactNumber: "inavlid contact number" }));
  };
  return /* @__PURE__ */ import_react28.default.createElement("div", {
    className: "flex flex-col gap-20 overflow-visible"
  }, /* @__PURE__ */ import_react28.default.createElement("section", {
    className: "flex flex-col gap-10 overflow-visible"
  }, /* @__PURE__ */ import_react28.default.createElement("div", {
    className: "flex justify-start items-center gap-3"
  }, /* @__PURE__ */ import_react28.default.createElement(import_fa2.FaRegUser, {
    className: "dark:fill-white fill-black h-10 w-10"
  }), /* @__PURE__ */ import_react28.default.createElement("h1", {
    className: " font-heading font-medium dark:text-white text-black text-[24px]"
  }, "Details")), /* @__PURE__ */ import_react28.default.createElement(import_react27.Form, {
    method: "post",
    className: "flex flex-col gap-5 items-start overflow-visible"
  }, /* @__PURE__ */ import_react28.default.createElement(input_default, {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "Your Name",
    error: validationError.name,
    handleChange: handleNameChange,
    defaultValue: profile == null ? void 0 : profile.name,
    style: lessRoundedBasicInput
  }), /* @__PURE__ */ import_react28.default.createElement(input_default, {
    defaultValue: user.email,
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "Your Email",
    handleChange: () => {
    },
    error: void 0,
    style: lessRoundedBasicInput
  }), /* @__PURE__ */ import_react28.default.createElement(input_default, {
    defaultValue: (profile == null ? void 0 : profile.contactNumber) ? profile.contactNumber : "",
    type: "text",
    name: "contactNumber",
    label: "Contact Number",
    placeholder: "Your contact number",
    handleChange: handleContactNumberChange,
    error: validationError.contactNumber,
    style: lessRoundedBasicInput
  }), /* @__PURE__ */ import_react28.default.createElement("input", {
    className: "hidden",
    name: "event",
    defaultValue: "UPDATE_USER"
  }), /* @__PURE__ */ import_react28.default.createElement("button", {
    disabled: tranistion.state === "submitting" && Object.keys(validationError).length > 0,
    className: `${lessRoundedBasicLargeButtonFull}`
  }, "Save"))), /* @__PURE__ */ import_react28.default.createElement("section", {
    className: "flex flex-col gap-10 overflow-visible"
  }, /* @__PURE__ */ import_react28.default.createElement("div", {
    className: "flex justify-start items-center gap-3"
  }, /* @__PURE__ */ import_react28.default.createElement(import_ai2.AiOutlineHome, {
    className: "dark:fill-white fill-black h-10 w-10"
  }), /* @__PURE__ */ import_react28.default.createElement("h1", {
    className: " font-heading font-medium dark:text-white text-black text-[24px]"
  }, "Address")), /* @__PURE__ */ import_react28.default.createElement(import_react27.Outlet, null), /* @__PURE__ */ import_react28.default.createElement("button", {
    className: `${lessRoundedBasicLargeButton} flex justify-center items-center`
  }, /* @__PURE__ */ import_react28.default.createElement(import_react27.Link, {
    to: "/dashboard/profile/newAddress"
  }, "New Address"), /* @__PURE__ */ import_react28.default.createElement(import_md.MdAdd, {
    className: "dark:fill-white fill-black ml-3 h-5 w-5"
  }))), /* @__PURE__ */ import_react28.default.createElement("section", {
    className: "flex flex-col md:flex-row justify-center items-center gap-5 mt-[50px] w-full overflow-visible"
  }, /* @__PURE__ */ import_react28.default.createElement(import_react27.Form, {
    method: "post",
    className: "w-full md:w-auto overflow-visible"
  }, /* @__PURE__ */ import_react28.default.createElement("input", {
    className: "hidden",
    name: "event",
    defaultValue: "SIGN_OUT"
  }), /* @__PURE__ */ import_react28.default.createElement("button", {
    className: `${lessRoundedBasicLargeButton}`,
    type: "submit"
  }, "Logout")), /* @__PURE__ */ import_react28.default.createElement(import_react27.Form, {
    method: "post",
    action: "/profile?index",
    className: "w-full md:w-auto overflow-visible"
  }, /* @__PURE__ */ import_react28.default.createElement("input", {
    className: "hidden",
    name: "event",
    defaultValue: "DELETE_USER"
  }), /* @__PURE__ */ import_react28.default.createElement("button", {
    className: `${lessRoundedBasicLargeButton}`,
    type: "submit"
  }, "Delete Account"))));
}, ErrorBoundary3 = ({ error }) => /* @__PURE__ */ import_react28.default.createElement("div", null, /* @__PURE__ */ import_react28.default.createElement("h1", null, "Something went wrong")), profile_default = ProfilePage;

// app/routes/dashboard/profile/newAddress.tsx
var newAddress_exports = {};
__export(newAddress_exports, {
  default: () => newAddress_default
});
init_react();

// app/components/containers/form.tsx
init_react();
var import_react29 = require("@remix-run/react"), import_react30 = __toESM(require("react"));
var FormComponent = ({ method, action: action6, inputs, buttons }) => /* @__PURE__ */ import_react30.default.createElement(import_react29.Form, {
  method,
  action: action6
}, inputs.map((i) => /* @__PURE__ */ import_react30.default.createElement(input_default, __spreadValues({
  key: i.name
}, i))), buttons.map((_a) => {
  var _b = _a, { disabled = !1 } = _b, b = __objRest(_b, ["disabled"]);
  return b.handleClick ? /* @__PURE__ */ import_react30.default.createElement("button", {
    key: b.id,
    type: "button",
    className: b.style,
    disabled,
    onClick: b.handleClick
  }, b.content) : /* @__PURE__ */ import_react30.default.createElement("button", {
    key: b.id,
    type: b.type,
    className: b.style,
    disabled
  }, b.content);
})), form_default = FormComponent;

// app/routes/dashboard/profile/newAddress.tsx
var NewAddress = () => /* @__PURE__ */ React.createElement(form_default, {
  method: "post",
  action: "/dashboard/profile/newAddress",
  buttons: [
    {
      id: 1,
      type: "submit",
      content: "Add",
      disabled: !1,
      style: lessRoundedBasicLargeButton
    }
  ],
  inputs: [{
    type: "text",
    label: "Address",
    name: "address",
    placeholder: "Enter your address here",
    error: void 0,
    handleChange: (e) => {
    },
    style: lessRoundedBasicInput
  }]
}), newAddress_default = NewAddress;

// app/routes/dashboard/review.tsx
var review_exports = {};
__export(review_exports, {
  action: () => action2,
  default: () => review_default,
  loader: () => loader4
});
init_react();
var import_node4 = require("@remix-run/node"), import_react31 = require("@remix-run/react"), import_react32 = __toESM(require("react")), import_bs3 = require("react-icons/bs"), import_react_toastify2 = require("react-toastify");

// app/utils/helpers/createReview.ts
init_react();
var createReview = (formData) => {
  let review = formData.get("review"), rating = formData.get("rating");
  return review ? rating ? review.length < 5 ? [null, { review: "review too small" }] : /[+]?([0-4]*\.[0-9]+|[0-5])/.test(rating) ? [{
    review,
    rating: parseFloat(rating)
  }, null] : [null, { rating: "invalid rating" }] : [null, { rating: "rating is required" }] : [null, { review: "review is required" }];
};

// app/routes/dashboard/review.tsx
var action2 = async ({ request }) => {
  let formData = await request.formData(), [review, actionData] = createReview(formData);
  if (actionData)
    return (0, import_node4.json)({
      validationactionData: actionData
    });
  if (review) {
    let [user, error] = await isAuthenticated(request, !0);
    if (error)
      return console.log(error), (0, import_node4.json)({
        error: error.message
      });
    if (user) {
      let reviewResponse = await supabaseAdmin.from("reviews").insert({ profile_id: user == null ? void 0 : user.id, review: review.review, rating: review.rating });
      return reviewResponse.error ? (console.log(reviewResponse, error), (0, import_node4.json)({
        error: reviewResponse.error.message
      })) : (0, import_node4.json)({
        success: reviewResponse.data
      });
    }
  }
  return (0, import_node4.json)({
    error: "something went wrong"
  });
}, loader4 = async ({ request }) => {
  let [user, error] = await isAuthenticated(request, !0);
  if (error)
    return console.log(error), (0, import_node4.json)({
      error: error.message
    });
  let reviewsResponse = await supabaseAdmin.from("reviews").select("*").eq("profile_id", user == null ? void 0 : user.id);
  return reviewsResponse.error ? (console.log(reviewsResponse.error), (0, import_node4.json)({
    error: reviewsResponse.error.message
  })) : (0, import_node4.json)({
    reviews: reviewsResponse.data
  });
}, Review = () => {
  let transition = (0, import_react31.useTransition)(), data = (0, import_react31.useLoaderData)(), actionData = (0, import_react31.useActionData)(), [validationError, setValidationError] = import_react32.default.useState((actionData == null ? void 0 : actionData.validationErrors) ? actionData.validationErrors : {}), handleReviewChange = (e) => {
    let value = e.target.value;
    value.length === 0 ? setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { review: "review required" })) : value.length < 5 && setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { review: "review too short" }));
  }, handleRatingChange = (e) => {
    let value = e.target.value;
    value.length > 1 ? setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { rating: "invalid input" })) : /[+]?([0-4]*\.[0-9]+|[0-5])/.test(value) || setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { rating: "value should be between 0 - 5" }));
  };
  return import_react32.default.useEffect(() => {
    (actionData == null ? void 0 : actionData.success) && import_react_toastify2.toast.success("Reviewed Successfully", {
      position: "top-right"
    });
  }, [actionData]), /* @__PURE__ */ import_react32.default.createElement("div", {
    className: "flex flex-col gap-20 overflow-visible"
  }, /* @__PURE__ */ import_react32.default.createElement("section", {
    className: "flex flex-col gap-10 overflow-visible"
  }, /* @__PURE__ */ import_react32.default.createElement("div", {
    className: "flex justify-start items-center gap-3"
  }, /* @__PURE__ */ import_react32.default.createElement(import_bs3.BsPen, {
    className: "dark:fill-white fill-black h-10 w-10"
  }), /* @__PURE__ */ import_react32.default.createElement("h1", {
    className: " font-heading font-medium dark:text-white text-black text-[24px]"
  }, "Write Review")), data.reviews && data.reviews.length < 2 && /* @__PURE__ */ import_react32.default.createElement("form", {
    method: "post",
    className: "flex flex-col gap-5 items-start overflow-visible"
  }, /* @__PURE__ */ import_react32.default.createElement(input_default, {
    type: "text",
    name: "review",
    placeholder: "Your Review",
    label: "Review",
    handleChange: handleReviewChange,
    error: validationError.review,
    style: lessRoundedBasicInput
  }), /* @__PURE__ */ import_react32.default.createElement(input_default, {
    type: "text",
    name: "rating",
    placeholder: "Rating 0 to 5",
    label: "Rating",
    handleChange: handleRatingChange,
    error: validationError.rating,
    style: lessRoundedBasicInput
  }), /* @__PURE__ */ import_react32.default.createElement("button", {
    disabled: transition.state === "submitting" || validationError.review ? !0 : !!validationError.rating,
    type: "submit",
    className: `${lessRoundedBasicLargeButtonFull}`
  }, transition.state === "submitting" ? "Posting..." : "Post"))), /* @__PURE__ */ import_react32.default.createElement("section", null));
}, review_default = Review;

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => services_default,
  loader: () => loader5
});
init_react();
var import_node5 = require("@remix-run/node"), import_react35 = __toESM(require("react"));

// app/components/services/detailedServices.tsx
init_react();
var import_react34 = require("@remix-run/react");

// app/components/services/detailedService.tsx
init_react();
var import_react33 = __toESM(require("react")), DeatailedService = ({ service }) => /* @__PURE__ */ import_react33.default.createElement("div", {
  className: "flex flex-col-reverse md:flex-row md:even:flex-row-reverse items-center gap-20 overflow-visible odd:animate-bounce-in-right even:animate-bounce-in-left"
}, /* @__PURE__ */ import_react33.default.createElement("section", {
  className: "flex-1 flex flex-col gap-3 overflow-visible"
}, /* @__PURE__ */ import_react33.default.createElement("h1", {
  className: "font-heading font-bold text-[24px] dark:text-white text-black overflow-visible"
}, service.name), /* @__PURE__ */ import_react33.default.createElement("p", {
  className: "font-text font-medium text-gray-400 text-[18px] overflow-visible"
}, service.detailedDesc)), /* @__PURE__ */ import_react33.default.createElement("section", {
  className: "flex-1 flex flex-row"
})), detailedService_default = DeatailedService;

// app/components/services/detailedServices.tsx
var DetailedServices = () => {
  let { services } = (0, import_react34.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 w-full h-auto gap-40 overflow-y-visible col-start-1 col-span-full"
  }, services.map((service) => /* @__PURE__ */ React.createElement(detailedService_default, {
    key: service._id,
    service
  })));
}, detailedServices_default = DetailedServices;

// app/sanity/query/services.server.ts
init_react();
var getServiceQuery = () => `*[_type == 'service']{
        _id,
        name,
        shortDesc,
        detailedDesc,
        "image": ${getImageQuery("image")}
      }`, getServices = async () => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getServiceQuery()
    });
    if (res.status === 200)
      return res.data.result;
    throw new Error("Couldn't fetch services");
  } catch (error) {
    throw console.log(error), new Error(error.message);
  }
};

// app/routes/services.tsx
var loader5 = async () => {
  let services = await getServices();
  if (!services)
    throw new import_node5.Response("not found", {
      status: 404
    });
  return {
    services
  };
}, ServicesPage = () => /* @__PURE__ */ import_react35.default.createElement(infoWrapper_default, {
  id: "services"
}, /* @__PURE__ */ import_react35.default.createElement(detailedServices_default, null)), services_default = ServicesPage;

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action3,
  default: () => contact_default2,
  meta: () => meta2
});
init_react();

// app/components/contact/contact.tsx
init_react();
var import_react36 = require("@remix-run/react"), import_react37 = __toESM(require("react")), import_react_toastify3 = require("react-toastify");
var Contact = () => {
  let transition = (0, import_react36.useTransition)(), data = (0, import_react36.useActionData)(), [formErrors, setFormErrors] = import_react37.default.useState((data == null ? void 0 : data.validationErrors) ? data.validationErrors : {}), handleNameChange = (e) => {
    let name = e.target.value;
    name ? name.length < 4 ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: "name too small" })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: void 0 })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: "name is not provided" }));
  }, handleEmailChange = (e) => {
    let email = e.target.value;
    email ? email.length < 5 ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "email too small" })) : /\S+@\S+\.\S+/.test(email) ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: void 0 })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "invalid email" })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "email is not provided" }));
  }, handleMessageChange = (e) => {
    let message = e.target.value;
    message ? message.length < 10 ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { message: "message too small" })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { message: void 0 })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { message: "message is not provided" }));
  };
  return import_react37.default.useEffect(() => {
    (data == null ? void 0 : data.error) && import_react_toastify3.toast.error(data.error);
  }, [data]), import_react37.default.useEffect(() => {
    (data == null ? void 0 : data.success) && import_react_toastify3.toast.success("Message Sent!");
  }, [data]), /* @__PURE__ */ import_react37.default.createElement("div", {
    className: "w-full flex flex-col md:flex-row justify-center align-middle overflow-visible col-start-1 col-span-full"
  }, /* @__PURE__ */ import_react37.default.createElement("section", {
    className: "hidden md:flex justify-center items-center md:flex-1 animate-bounce-in-left"
  }, /* @__PURE__ */ import_react37.default.createElement("h1", null, "Image Here")), /* @__PURE__ */ import_react37.default.createElement(import_react36.Form, {
    method: "post",
    action: "/contact",
    className: "md:flex-1 flex flex-col gap-5 overflow-visible animate-bounce-in-right"
  }, /* @__PURE__ */ import_react37.default.createElement("div", {
    className: "flex flex-col "
  }, /* @__PURE__ */ import_react37.default.createElement("h1", {
    className: "font-heading font-semibold text-[42px] dark:text-white text-black"
  }, "Contact Us"), /* @__PURE__ */ import_react37.default.createElement("p", {
    className: "font-text font-normal text-[16px] dark:text-white text-black"
  }, "Explore the future with us.", /* @__PURE__ */ import_react37.default.createElement("br", null), "Feel free to get in touch.")), /* @__PURE__ */ import_react37.default.createElement(input_default, {
    name: "name",
    label: "Name",
    placeholder: "Enter your name here.",
    type: "text",
    style: lessRoundedBasicInput,
    error: formErrors.name,
    handleChange: handleNameChange
  }), /* @__PURE__ */ import_react37.default.createElement(input_default, {
    name: "contactNumber",
    label: "Contact Number",
    placeholder: "Enter your number here.",
    type: "text",
    style: lessRoundedBasicInput,
    error: formErrors.contactNumber,
    handleChange: handleEmailChange
  }), /* @__PURE__ */ import_react37.default.createElement(input_default, {
    name: "message",
    label: "Message",
    placeholder: "Enter your message here.",
    type: "text",
    style: lessRoundedBasicInput,
    error: formErrors.message,
    handleChange: handleMessageChange
  }), /* @__PURE__ */ import_react37.default.createElement("button", {
    disabled: transition.state === "submitting",
    className: `${lessRoundedBasicLargeButton} mt-5`,
    type: "submit"
  }, transition.state === "submitting" ? "Sending..." : "Send Message")));
}, contact_default = Contact;

// app/utils/helpers/createContact.ts
init_react();
var createContact = (formData) => {
  let name = formData.get("name"), contactNumber = formData.get("contactNumber"), message = formData.get("message"), errors = {};
  if (name) {
    if (name.length < 4)
      return errors.name = "name too small", [errors, null];
  } else
    return errors.name = "name is not provided", [errors, null];
  if (contactNumber) {
    if (contactNumber.length < 4)
      return errors.contactNumber = "contactNumber too small", [errors, null];
  } else
    return errors.contactNumber = "contactNumber is not provided", [errors, null];
  if (message) {
    if (message.length < 10)
      return errors.message = "message too small", [errors, null];
  } else
    return errors.message = "message is not provided", [errors, null];
  return [null, {
    name,
    contactNumber,
    message
  }];
};

// app/routes/contact.tsx
var import_node6 = require("@remix-run/node");
var action3 = async ({ request }) => {
  let formData = await request.formData();
  console.log(formData);
  let [errors, contact] = createContact(formData);
  if (errors)
    return (0, import_node6.json)({
      validationErrors: errors
    });
  if (contact) {
    try {
      let { error } = await supabaseAdmin.from("contacts").insert([{ name: contact.name, contactNumber: contact.contactNumber, message: contact.message }]);
      if (error)
        return console.log(error), (0, import_node6.json)({
          error: "Failed to send message"
        });
    } catch {
      return (0, import_node6.json)({
        error: "Failed to send message"
      });
    }
    return (0, import_node6.json)({
      success: "Message Sent"
    });
  }
  return (0, import_node6.json)({
    error: "Something went wrong"
  });
}, meta2 = () => ({
  title: "Contact",
  description: "Contact page of Brightways Drycleaners",
  keywords: "Brightways,Drycleaners"
}), ContactPage = () => /* @__PURE__ */ React.createElement(infoWrapper_default, {
  id: "contact"
}, /* @__PURE__ */ React.createElement(contact_default, null)), contact_default2 = ContactPage;

// app/routes/pricing.tsx
var pricing_exports = {};
__export(pricing_exports, {
  default: () => pricing_default,
  loader: () => loader6
});
init_react();
var import_react42 = __toESM(require("react"));

// app/components/services/container.tsx
init_react();
var import_react40 = __toESM(require("react"));

// app/components/services/service.tsx
init_react();
var import_react38 = __toESM(require("react"));

// public/images/dry-cleaning.png
var dry_cleaning_default = "/build/_assets/dry-cleaning-E25CI4UP.png";

// app/components/services/service.tsx
var import_react39 = require("@remix-run/react"), Service = ({ service, delay }) => {
  let location2 = (0, import_react39.useLocation)();
  return /* @__PURE__ */ import_react38.default.createElement(import_react39.Link, {
    to: `/pricing/${service.name}`,
    className: `md:w-80 ${isHomePage(location2.pathname) ? "h-64 w-64 flex-col justify-center items-center" : "h-24 w-full flex-row"} dark:bg-gray-800 bg-slate-100 p-3 gap-2 rounded-md flex flex-row items-cente hover:scale-110 relative z-10 overflow-visible ${borderGrowAnim} animate-fade-in-fwd animation-delay-${delay}`
  }, /* @__PURE__ */ import_react38.default.createElement("section", {
    className: "flex justify-center opacity-100 items-center overflow-hidden h-[50px] w-[50px]"
  }, /* @__PURE__ */ import_react38.default.createElement("img", {
    className: " h-full w-full",
    src: dry_cleaning_default
  })), /* @__PURE__ */ import_react38.default.createElement("section", {
    className: "dark:text-white text-black flex flex-col gap-[3px] opacity-100"
  }, /* @__PURE__ */ import_react38.default.createElement("p", null, service.name)));
}, service_default = Service;

// app/components/services/container.tsx
var import_framer_motion3 = require("framer-motion"), Container2 = ({ services }) => /* @__PURE__ */ import_react40.default.createElement(import_framer_motion3.motion.section, {
  transition: { staggerChildren: 0.5 },
  className: "flex flex-col gap-5 overflow-visible  col-start-1 col-span-full lg:col-span-4"
}, services.map((service, index) => /* @__PURE__ */ import_react40.default.createElement(service_default, {
  key: service._id,
  delay: (index + 1) * 100,
  service
}))), container_default2 = Container2;

// app/components/context/cartContext.tsx
init_react();
var import_react41 = __toESM(require("react")), CartContext = import_react41.default.createContext(null), CartProvider = ({ children }) => {
  let [items, setItems] = import_react41.default.useState([]), [totalCost, setTotalCost] = import_react41.default.useState(0), getTotalCost = () => {
    let cost = items.reduce((prev, curr) => prev + curr.quantity * curr.item.price, 0);
    setTotalCost(cost);
  }, add = (item) => {
    let index = items.findIndex((prev) => item.id === prev.item.id);
    setItems((prev) => {
      if (index === -1) {
        let currentItem = { quantity: 1, item };
        return [...prev, currentItem];
      } else
        return prev[index].quantity++, [...prev];
    });
  }, remove = (id) => {
    let index = items.findIndex((prev) => id === prev.item.id);
    index !== -1 && setItems((prev) => prev[index].quantity > 1 ? (prev[index].quantity--, [...prev]) : prev.filter((item) => item.item.id !== id));
  };
  import_react41.default.useEffect(() => {
    getTotalCost();
  }, [items]);
  let getTotalItems = () => items.reduce((prev, curr) => prev + curr.quantity, 0);
  return /* @__PURE__ */ import_react41.default.createElement(CartContext.Provider, {
    value: { cart: { estimatedCost: totalCost, items }, add, remove, getTotalItems }
  }, children);
}, cartContext_default = CartProvider;

// app/routes/pricing.tsx
var import_react43 = require("@remix-run/react"), loader6 = async () => {
  let services = await getServices();
  if (!services)
    throw new Error("Couldn't fetch business");
  return {
    services
  };
}, PricingPage = () => {
  let { services } = (0, import_react43.useLoaderData)();
  return /* @__PURE__ */ import_react42.default.createElement(cartContext_default, null, /* @__PURE__ */ import_react42.default.createElement(infoWrapper_default, {
    id: "pricing"
  }, /* @__PURE__ */ import_react42.default.createElement(container_default2, {
    services
  }), /* @__PURE__ */ import_react42.default.createElement(import_react43.Outlet, {
    context: { services }
  })));
}, pricing_default = PricingPage;

// app/routes/pricing/$service.tsx
var service_exports = {};
__export(service_exports, {
  default: () => service_default3,
  loader: () => loader7
});
init_react();

// app/components/pricing/service.tsx
init_react();
var import_react46 = require("@remix-run/react"), import_react47 = __toESM(require("react"));

// app/components/pricing/category.tsx
init_react();
var import_react45 = __toESM(require("react"));

// app/components/pricing/item.tsx
init_react();
var import_react44 = __toESM(require("react"));
var Item = ({ item, operation = "ADD" /* ADD */, classes = "" }) => {
  let { add, remove } = import_react44.default.useContext(CartContext);
  return /* @__PURE__ */ import_react44.default.createElement("div", {
    className: "flex flex-row items-center gap-3 " + classes
  }, /* @__PURE__ */ import_react44.default.createElement("p", {
    className: "flex-1 font-text text-[16px] dark:text-white text-black"
  }, item.name), /* @__PURE__ */ import_react44.default.createElement("p", {
    className: "font-text text-[16px] dark:text-white text-black"
  }, item.minPrice, " - ", item.maxPrice));
}, item_default = Item;

// app/components/pricing/category.tsx
var Category = ({ category }) => /* @__PURE__ */ import_react45.default.createElement("div", {
  className: "flex flex-col gap-3"
}, /* @__PURE__ */ import_react45.default.createElement("span", {
  className: "font-text text-[18px] text-gray-400 text-left font-semibold"
}, category.name), /* @__PURE__ */ import_react45.default.createElement("section", {
  className: "flex flex-col gap-2"
}, category.items.map((item) => /* @__PURE__ */ import_react45.default.createElement(item_default, {
  key: item._id,
  item,
  operation: "ADD" /* ADD */
})))), category_default = Category;

// app/components/pricing/service.tsx
var Service2 = ({ service }) => {
  let { categories } = (0, import_react46.useLoaderData)();
  return service ? /* @__PURE__ */ import_react47.default.createElement("div", {
    className: "flex flex-col flex-1 w-auto h-auto gap-2 col-start-1 col-span-full lg:col-start-5 lg:col-span-7"
  }, /* @__PURE__ */ import_react47.default.createElement("h2", {
    className: "font-heading text-[32px] dark:text-white text-black font-semibold"
  }, service.name), /* @__PURE__ */ import_react47.default.createElement("p", {
    className: "font-text text-[16px] dark:text-white text-black"
  }, service.detailedDesc), /* @__PURE__ */ import_react47.default.createElement("section", {
    className: "flex flex-col gap-8 mt-5"
  }, categories.map((category) => /* @__PURE__ */ import_react47.default.createElement(category_default, {
    key: category._id,
    category
  })))) : /* @__PURE__ */ import_react47.default.createElement("div", null, "Not Found");
}, service_default2 = Service2;

// app/sanity/query/items.server.ts
init_react();
var itemQuery = (serviceName) => `*[_type == 'item' && *[_type=='service' && _id == ^.service._ref]{...}[0].name == "${serviceName}"]{
        ...,
        "service": service->,
        "category": category->
    }`, getItems = async (serviceName) => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: itemQuery(serviceName)
    });
    if (res.status === 200)
      return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// app/routes/pricing/$service.tsx
var import_react48 = require("@remix-run/react"), loader7 = async ({ params }) => {
  let name = params.service, items = await getItems(name);
  if (!items)
    throw new Error("Not Found");
  let categories = [];
  return items.map((item) => {
    let index = categories.findIndex((category) => {
      var _a;
      return category.name === ((_a = item.category) == null ? void 0 : _a.name);
    });
    if (index !== -1)
      categories[index].items.push(item);
    else {
      let newCategory = __spreadProps(__spreadValues({}, item.category), { items: [item] });
      categories.push(newCategory);
    }
  }), {
    categories
  };
}, SingleService = () => {
  let params = (0, import_react48.useParams)(), { services } = (0, import_react48.useOutletContext)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(service_default2, {
    service: services.find((s) => s.name === params.service)
  }));
}, service_default3 = SingleService;

// app/routes/pricing/index.tsx
var pricing_exports2 = {};
__export(pricing_exports2, {
  default: () => pricing_default2
});
init_react();
var import_react49 = __toESM(require("react")), Index2 = () => /* @__PURE__ */ import_react49.default.createElement("div", {
  className: "flex-1 flex justify-center items-center col-start-5 col-span-7"
}, /* @__PURE__ */ import_react49.default.createElement("p", {
  className: " font-heading font-semibold text-[24px] dark:text-white text-black"
}, "Select service to view prices")), pricing_default2 = Index2;

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  loader: () => loader8
});
init_react();

// app/sanity/query/business.server.ts
init_react();
var getBusinessQuery = () => `*[_type == 'business']{
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
        }[0]`, getBusiness = async () => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getBusinessQuery()
    });
    if (res.status === 200)
      return res.data.result;
    throw new Error("Couldn't fetch busniness");
  } catch (error) {
    throw console.log(error), new Error(error.message);
  }
};

// app/routes/about.tsx
var import_react50 = require("@remix-run/react"), loader8 = async () => {
  let business = await getBusiness();
  if (!business)
    throw new Error("Couldn't fetch business");
  return {
    business
  };
}, AbouPage = () => {
  let { business } = (0, import_react50.useLoaderData)();
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    id: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-start-1 col-span-full"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col-reverse md:flex-row "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex-1"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[18px] font-text text-gray-400"
  }, business.detailedDesc)), /* @__PURE__ */ React.createElement("div", {
    className: "md:flex-1"
  })), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null))));
}, about_default = AbouPage;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => Index3,
  loader: () => loader9
});
init_react();
var import_bi5 = require("react-icons/bi");

// app/components/home/featuresList.tsx
init_react();
var import_react54 = require("@remix-run/react"), import_react55 = __toESM(require("react"));

// app/components/containers/container.tsx
init_react();
var import_react51 = __toESM(require("react")), Container3 = ({ children }) => /* @__PURE__ */ import_react51.default.createElement("div", {
  className: "relative h-auto px-[10vw] w-full"
}, children), container_default3 = Container3;

// app/components/features/feature.tsx
init_react();
var import_react52 = __toESM(require("react")), import_framer_motion4 = require("framer-motion");

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
}, horizontalAnim = {
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
}, fade = {
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
var import_react53 = require("@remix-run/react"), Feature = ({ feature, index }) => /* @__PURE__ */ import_react52.default.createElement(import_framer_motion4.motion.div, {
  variants: horizontalAnim,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: !0 },
  custom: [index % 2 === 0 ? "-100%" : "100%", "0%"],
  className: "flex flex-col-reverse gap-10 md:flex-row md:even:flex-row-reverse items-center md:gap-20 overflow-visible col-start-1 col-span-full mb-[50px] lg:mb-[100px]"
}, /* @__PURE__ */ import_react52.default.createElement("section", {
  className: "flex flex-1 flex-col items-start justify-center gap-3 overflow-visible"
}, /* @__PURE__ */ import_react52.default.createElement("p", {
  className: "text-blue text-[14px] font-bold h-auto overflow-visible"
}, feature.title), /* @__PURE__ */ import_react52.default.createElement("h1", {
  className: "text-[32px] text-black dark:text-white font-heading leading-[44px] font-semibold  h-auto overflow-visible"
}, feature.heading), /* @__PURE__ */ import_react52.default.createElement("p", {
  className: "text-[16px] text-gray-400 font-text font-normal leading-6"
}, feature.desc), feature.highlights && /* @__PURE__ */ import_react52.default.createElement("ul", {
  className: "text-[16px] text-gray-400 font-text font-normal list-disc"
}, feature.highlights.map((highlight, index2) => /* @__PURE__ */ import_react52.default.createElement("li", {
  className: "",
  key: index2
}, highlight))), feature.callToActions && /* @__PURE__ */ import_react52.default.createElement("section", {
  className: "flex flex-row gap-5 items-center justify-start overflow-visible w-full"
}, feature.callToActions.map((callToAction) => /* @__PURE__ */ import_react52.default.createElement("button", {
  key: callToAction._key,
  className: `${largeBasicButton} mt-3`
}, /* @__PURE__ */ import_react52.default.createElement(import_react53.Link, {
  to: callToAction.to
}, callToAction.name))))), /* @__PURE__ */ import_react52.default.createElement("section", {
  className: "flex flex-1 justify-center items-center"
}, /* @__PURE__ */ import_react52.default.createElement("img", {
  src: feature.image.imageUrl,
  alt: feature.image.alt,
  className: "h-auto w-[350px]"
}))), feature_default = Feature;

// app/components/home/featuresList.tsx
var FeaturesList = () => {
  let { features } = (0, import_react54.useLoaderData)();
  return /* @__PURE__ */ import_react55.default.createElement(container_default3, null, /* @__PURE__ */ import_react55.default.createElement(grid_default, null, features.map((feature, index) => /* @__PURE__ */ import_react55.default.createElement(feature_default, {
    key: feature._id,
    feature,
    index
  }))));
}, featuresList_default = FeaturesList;

// app/components/home/landingPage.tsx
init_react();
var import_react56 = __toESM(require("react"));
var import_react57 = require("@remix-run/react");
var LandingPage = () => {
  let { business } = (0, import_react57.useLoaderData)();
  return /* @__PURE__ */ import_react56.default.createElement(container_default3, null, /* @__PURE__ */ import_react56.default.createElement(grid_default, null, /* @__PURE__ */ import_react56.default.createElement("section", {
    className: "col-start-1 col-span-full lg:col-start-1 lg:col-span-6"
  }, /* @__PURE__ */ import_react56.default.createElement("p", {
    className: "text-[42px] dark:text-white text-black font-semibold font-heading mx-auto overflow-hidden"
  }, business.tagline), /* @__PURE__ */ import_react56.default.createElement("p", {
    className: "text-xl text-gray-400 font-text"
  }, business.shortDesc), /* @__PURE__ */ import_react56.default.createElement("div", {
    className: "flex flex-col md:flex-row gap-5 my-4 overflow-visible w-full md:w-auto"
  }, /* @__PURE__ */ import_react56.default.createElement("button", {
    className: `${largeBasicButton} animate-bounce-in-right delay-100`
  }, "Book now"), /* @__PURE__ */ import_react56.default.createElement("button", {
    className: `${largeBasicButton} animate-bounce-in-right delay-200`
  }, /* @__PURE__ */ import_react56.default.createElement("a", {
    href: "#process"
  }, "See how it's work")))), /* @__PURE__ */ import_react56.default.createElement("section", {
    className: "row-start-1 col-start-1 col-span-full lg:col-start-7 lg:col-span-5"
  }, /* @__PURE__ */ import_react56.default.createElement("img", {
    alt: "brightways-landing-page-pic",
    className: "h-[300px] w-[300px]"
  }))));
}, landingPage_default = LandingPage;

// app/components/home/process.tsx
init_react();
var import_react59 = require("@remix-run/react"), import_framer_motion6 = require("framer-motion"), import_react60 = __toESM(require("react"));

// app/components/process/step.tsx
init_react();
var import_react58 = __toESM(require("react")), import_framer_motion5 = require("framer-motion");
var Step = ({ step }) => /* @__PURE__ */ import_react58.default.createElement(import_framer_motion5.motion.section, {
  variants: scaleAnim,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: !0 },
  className: "flex flex-1 flex-col justify-between h-[200px] items-center "
}, /* @__PURE__ */ import_react58.default.createElement("div", {
  className: " h-24 w-24 rounded-[50%] bg-slate-100 flex justify-center items-center"
}, /* @__PURE__ */ import_react58.default.createElement("img", {
  className: "h-10 w-10",
  alt: step.heading,
  src: step.image.imageUrl
})), /* @__PURE__ */ import_react58.default.createElement("h1", {
  className: "font-heading text-black dark:text-white text-[20px] font-bold place text-center"
}, step.heading)), step_default = Step;

// app/components/home/process.tsx
var Process = () => {
  let { process: process2 } = (0, import_react59.useLoaderData)();
  return /* @__PURE__ */ import_react60.default.createElement(infoWrapper_default, {
    heading: "How it's works",
    subHeading: "hdhhdshbsdjbasj",
    id: "process"
  }, /* @__PURE__ */ import_react60.default.createElement(import_framer_motion6.motion.div, {
    variants: fade,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: !0 },
    transition: { staggerChildren: 0.5 },
    className: "flex flex-col sm:flex-row h-auto gap-10 w-full relative md:py-[50px] col-start-1 col-span-full"
  }, process2.steps.map((step) => /* @__PURE__ */ import_react60.default.createElement(step_default, {
    step,
    key: step._key
  }))), /* @__PURE__ */ import_react60.default.createElement("section", {
    className: "col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px] lg:py-0"
  }, /* @__PURE__ */ import_react60.default.createElement("button", {
    className: `${largeBasicButton}`
  }, "Learn More")));
}, process_default = Process;

// app/components/home/testimonialsList.tsx
init_react();
var import_react62 = require("@remix-run/react");

// app/components/Testimonials/testimonial.tsx
init_react();
var import_react61 = __toESM(require("react")), Testimonial = ({ testimonial }) => /* @__PURE__ */ import_react61.default.createElement("div", {
  className: "hover:shadow-lg hover:translate-y-3 transition duration-500 delay-100 min-w-[250px] w-[250px] min-h-[250px] h-[250px] dark:bg-gray-800 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4"
}, /* @__PURE__ */ import_react61.default.createElement("p", {
  className: "text-[14px] dark:text-white text-black font-text font-semibold mb-3 min-h-[100px] h-[100px]"
}, '"', testimonial.review, '"'), /* @__PURE__ */ import_react61.default.createElement("p", {
  className: "text-[16px] text-gray-400 font-text font-extrabold"
}, testimonial.name)), testimonial_default = Testimonial;

// app/components/home/testimonialsList.tsx
var TestimonialsList = () => {
  let { testimonials } = (0, import_react62.useLoaderData)();
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    subHeading: testimonials.sub_heading,
    heading: testimonials.heading,
    id: "reviews"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col md:flex-row w-full items-center justify-center md:py-[50px] h-auto gap-10 col-start-1 col-span-full"
  }, testimonials.data.map((testimonial) => /* @__PURE__ */ React.createElement(testimonial_default, {
    key: Math.random() * 100,
    testimonial
  }))), /* @__PURE__ */ React.createElement("section", {
    className: "col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px] lg:py-0"
  }, /* @__PURE__ */ React.createElement("button", {
    className: `${largeBasicButton} mb-[50px]`
  }, "More Reviews")));
}, testimonialsList_default = TestimonialsList;

// app/components/ui/sidebar.tsx
init_react();
var import_react63 = __toESM(require("react")), import_bi4 = require("react-icons/bi"), import_bs4 = require("react-icons/bs");

// public/icons/gmail.png
var gmail_default = "/build/_assets/gmail-F2VKWGQN.png";

// public/icons/whatsapp.png
var whatsapp_default = "/build/_assets/whatsapp-QSRGVV7S.png";

// app/components/ui/sidebar.tsx
var import_ai3 = require("react-icons/ai"), SideBar = () => {
  let [showList, setShowList] = import_react63.default.useState(!1);
  return /* @__PURE__ */ import_react63.default.createElement("div", {
    className: "group fixed right-[30px] bottom-[30px] gap-2 z-50 flex flex-col h-auto w-auto"
  }, /* @__PURE__ */ import_react63.default.createElement("section", {
    onClick: () => setShowList((prev) => !prev),
    className: `bg-white  h-16 w-16 flex justify-center items-center rounded-[50%] hover:scale-110 ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-400`
  }, /* @__PURE__ */ import_react63.default.createElement(import_ai3.AiOutlineArrowUp, {
    className: "h-8 w-8 text-blue",
    onClick: () => window.scroll({ top: 0, left: 0, behavior: "smooth" })
  })), /* @__PURE__ */ import_react63.default.createElement("section", {
    className: `bg-white h-16 w-16 flex justify-center items-center rounded-[50%] ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-300`
  }, /* @__PURE__ */ import_react63.default.createElement("a", {
    target: "_blank",
    href: "mailto:brightwaysdryclean@gmail.com",
    className: ""
  }, /* @__PURE__ */ import_react63.default.createElement("img", {
    className: "h-8 w-8",
    src: gmail_default
  }))), /* @__PURE__ */ import_react63.default.createElement("section", {
    className: `bg-white h-16 w-16 flex justify-center items-center rounded-[50%] ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-200`
  }, /* @__PURE__ */ import_react63.default.createElement("a", {
    target: "_blank",
    href: 'https://api.whatsapp.com/send?phone=919810136709&text=hi%20i%20would%20like%20to%20chat%20with%20you."',
    className: ""
  }, /* @__PURE__ */ import_react63.default.createElement("img", {
    className: "h-8 w-8",
    src: whatsapp_default
  }))), /* @__PURE__ */ import_react63.default.createElement("section", {
    className: `bg-white h-16 w-16 flex justify-center items-center rounded-[50%] ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-100`
  }, /* @__PURE__ */ import_react63.default.createElement("a", {
    target: "_blank",
    href: "tel:+919810136709",
    className: ""
  }, /* @__PURE__ */ import_react63.default.createElement(import_bs4.BsFillTelephoneFill, {
    className: "h-8 w-8 text-blue"
  }))), /* @__PURE__ */ import_react63.default.createElement("section", {
    onClick: () => setShowList((prev) => !prev),
    className: "bg-white h-16 w-16 flex justify-center items-center rounded-[50%]"
  }, /* @__PURE__ */ import_react63.default.createElement(import_bi4.BiSupport, {
    className: "h-8 w-8"
  })));
}, sidebar_default2 = SideBar;

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
var getFeaturesQuery = () => `*[_type == "feature"]{
        _id,
        number,
        desc,
        heading,
        title,
        to,
        "highlights": highlights[],
        "callToActions": callToActions[]{
            _key,
            name,
            to
        },
        "image": ${getImageQuery("image")}
      } | order(number asc)`, getFeatures = async () => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getFeaturesQuery()
    });
    if (res.status === 200)
      return res.data.result;
    throw new Error("Couldn't fetch features");
  } catch (error) {
    throw new Error(error.message);
  }
};

// app/sanity/query/process.server.ts
init_react();
var getProcessQuery = () => `*[_type == "process"]{
        _createdAt,
          _id,
          _rev,
          _type,
          _updatedAt,
          desc,
          title,
          "steps": steps[]{
            _key,
            desc,
            heading,
            number,
            "image": ${getImageQuery("image")}
          },
      }[0]`, getProcess = async () => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getProcessQuery()
    });
    if (res.status === 200)
      return res.data.result;
    throw new Error("Couldn't fetch process");
  } catch (error) {
    throw console.log(error), new Error(error.message);
  }
};

// app/components/home/servicesList.tsx
init_react();
var import_react64 = __toESM(require("react"));
var import_framer_motion7 = require("framer-motion");
var import_react65 = require("@remix-run/react"), ServicesList = () => {
  let { services } = (0, import_react65.useLoaderData)();
  return /* @__PURE__ */ import_react64.default.createElement(infoWrapper_default, {
    heading: "Our Services",
    subHeading: "hdhhdshbsdjbasj",
    id: "services"
  }, /* @__PURE__ */ import_react64.default.createElement(import_framer_motion7.motion.section, {
    transition: { staggerChildren: 0.5 },
    className: "flex flex-row gap-10 md:pb-[50px] flex-wrap justify-center items-center overflow-visible col-start-1 col-span-full"
  }, services.map((service, index) => /* @__PURE__ */ import_react64.default.createElement(service_default, {
    key: service._id,
    service,
    delay: (index + 1) * 100
  }))), /* @__PURE__ */ import_react64.default.createElement("section", {
    className: "col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px] lg:py-0"
  }, /* @__PURE__ */ import_react64.default.createElement("button", {
    className: `${largeBasicButton}  col-start-1 col-span-full`
  }, "See More Services")));
}, servicesList_default = ServicesList;

// app/routes/index.tsx
async function loader9() {
  let business = await getBusiness();
  if (!business)
    throw new Error("Couldn't fetch business");
  let features = await getFeatures();
  if (!features)
    throw new Error("Couldn't fetch features");
  let process2 = await getProcess();
  if (!process2)
    throw new Error("Couldn't fetch process");
  let services = await getServices();
  if (!services)
    throw new Error("Coundn't fetch services");
  return {
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
}
function Index3() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-auto relative w-screen overflow-x-hidden flex flex-col items-center scroll-smooth bg-inherit gap-[50px] lg:gap-[100px] md:gap-0 mt-[150px] lg:mt-[200px]"
  }, /* @__PURE__ */ React.createElement(landingPage_default, null), /* @__PURE__ */ React.createElement(featuresList_default, null), /* @__PURE__ */ React.createElement(servicesList_default, null), /* @__PURE__ */ React.createElement(process_default, null), /* @__PURE__ */ React.createElement(testimonialsList_default, null), /* @__PURE__ */ React.createElement(sidebar_default2, null));
}
var ErrorBoundary4 = ({ error }) => /* @__PURE__ */ React.createElement("section", {
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

// app/routes/auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default
});
init_react();
var import_react66 = require("@remix-run/react"), import_framer_motion8 = require("framer-motion");
var Auth = () => /* @__PURE__ */ React.createElement(infoWrapper_default, {
  id: "auth"
}, /* @__PURE__ */ React.createElement("main", {
  className: "md:bg-inherit md:dark:bg-gray-800 md:bg-gray-100 md:p-10  h-auto overflow-visible col-start-1 col-span-full lg:col-start-4 lg:col-end-10"
}, /* @__PURE__ */ React.createElement(import_framer_motion8.AnimatePresence, null, /* @__PURE__ */ React.createElement(import_react66.Outlet, null)))), auth_default = Auth;

// app/routes/auth/callback.tsx
var callback_exports = {};
__export(callback_exports, {
  action: () => action4,
  default: () => callback_default,
  loader: () => loader10
});
init_react();
var import_node7 = require("@remix-run/node"), import_react67 = require("@remix-run/react"), import_react68 = __toESM(require("react"));
var import_supabase6 = __toESM(require_supabase()), action4 = async ({ request }) => {
  let formData = await request.formData(), session = await getSession(request.headers.get("Cookie")), error = JSON.parse(formData.get("error"));
  if (error)
    return console.log(error), session.flash("error", {
      message: "Something went wrong"
    }), (0, import_node7.redirect)("/auth", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  let supaSession = JSON.parse(formData.get("session")), event = JSON.parse(formData.get("event"));
  return event === null || supaSession === null ? (session.flash("error", {
    message: "Something went wrong"
  }), (0, import_node7.redirect)("/auth", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })) : event === "SIGNED_IN" ? (session.set("access_token", supaSession == null ? void 0 : supaSession.access_token), console.log("inside signedin switch case"), (0, import_node7.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session, { expires: new Date(supaSession.expires_at), maxAge: supaSession.expires_in })
    }
  })) : null;
}, loader10 = async ({ request }) => {
  let urlSearchParams = new URLSearchParams(request.url.split("?")[1]), params = Object.fromEntries(urlSearchParams.entries()), session = await getSession(request.headers.get("Cookie"));
  return params.error ? (session.flash("error", {
    message: params.error
  }), (0, import_node7.redirect)("/auth", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })) : null;
}, Callback = () => {
  let submit = (0, import_react67.useSubmit)(), transition = (0, import_react67.useTransition)();
  return import_react68.default.useEffect(() => {
    let { data, error } = import_supabase6.supabaseClient.auth.onAuthStateChange((event, session) => {
      let formData = new FormData();
      formData.set("session", JSON.stringify(session)), formData.set("event", JSON.stringify(event)), submit(formData, {
        method: "post"
      });
    });
    if (error) {
      let formData = new FormData();
      formData.set("error", JSON.stringify(error)), submit(formData, {
        method: "post"
      });
    }
    return () => {
      data == null || data.unsubscribe();
    };
  }, []), /* @__PURE__ */ import_react68.default.createElement("div", {
    className: "w-full flex justify-center items-center overflow-visible"
  }, transition.state === "loading" && /* @__PURE__ */ import_react68.default.createElement("div", {
    className: " inline-block w-[50px] h-[50px] after:contents-[''] after:block after:h-[40px] after:w-[40px] after:m-[5px] after:rounded-[50%] after:border-2 after:border-t-blue after:animate-spin overflow-visible"
  }));
}, callback_default = Callback;

// app/routes/auth/index.tsx
var auth_exports2 = {};
__export(auth_exports2, {
  LoginMethod: () => LoginMethod,
  action: () => action5,
  default: () => auth_default2,
  loader: () => loader11
});
init_react();

// public/icons/google.png
var google_default = "/build/_assets/google-DNT3BFC7.png";

// public/icons/facebook.png
var facebook_default = "/build/_assets/facebook-MZKXK7VM.png";

// app/routes/auth/index.tsx
var import_framer_motion9 = require("framer-motion");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_supabase8 = __toESM(require_supabase());
var import_node8 = require("@remix-run/node"), import_react69 = require("@remix-run/react"), LoginMethod = /* @__PURE__ */ ((LoginMethod2) => (LoginMethod2.GOOGLE = "GOOGLE", LoginMethod2.FACEBOOK = "FACEBOOK", LoginMethod2.EMAIL = "EMAIL", LoginMethod2))(LoginMethod || {}), loader11 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie")), response = {};
  return session.has("error") && (response.error = session.get("error")), (0, import_node8.json)(response, {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}, action5 = async ({ request }) => {
  if (request.method === "POST") {
    let form = await request.formData(), method = form.get("method");
    if ((0, import_tiny_invariant.default)(method, "method missing"), method === "EMAIL" /* EMAIL */) {
      let email = form.get("email");
      if ((0, import_tiny_invariant.default)(typeof email == "string", "inavlid input"), email.length === 0)
        return (0, import_node8.json)({
          error: {
            message: "email required"
          }
        });
      if (!/\S+@\S+\.\S+/.test(email))
        return (0, import_node8.json)({
          error: {
            message: "invalid email"
          }
        });
      let { error } = await supabaseAdmin.auth.signIn({
        email
      }, {
        redirectTo: `${process.env.SERVER_URL}/auth/callback`
      });
      return error ? (0, import_node8.json)({
        error: {
          message: error.message
        }
      }) : (0, import_node8.json)({
        success: {
          message: "Check your email"
        }
      });
    }
  }
  return null;
}, Login = () => {
  let transition = (0, import_react69.useTransition)(), notification = (0, import_react69.useActionData)(), { error } = (0, import_react69.useLoaderData)(), handleGoogleLogin = () => {
    import_supabase8.supabaseClient.auth.signIn({
      provider: "google"
    }, {
      redirectTo: `${window.env.SERVER_URL}/auth/callback`
    });
  }, handleFacebookLogin = async () => {
    import_supabase8.supabaseClient.auth.signIn({
      provider: "facebook"
    }, {
      redirectTo: `${window.env.SERVER_URL}/auth/callback`
    });
  };
  return /* @__PURE__ */ React.createElement(import_framer_motion9.motion.section, {
    variants: fade,
    initial: "hidden",
    animate: "visible",
    className: "flex flex-col gap-10 bg-inherit overflow-visible "
  }, (notification == null ? void 0 : notification.error) || (notification == null ? void 0 : notification.success) ? /* @__PURE__ */ React.createElement("section", {
    className: `flex justify-center items-center h-[50px] w-full border-2 ${notification.error ? "border-[#B00020]" : notification.success ? "border-blue" : ""}`
  }, /* @__PURE__ */ React.createElement("p", {
    className: `text-[16px] font-text font-semibold ${error || notification.error ? "text-[#B00020]" : notification.success ? "text-blue" : ""}`
  }, notification.success ? notification.success.message : notification.error ? notification.error.message : null)) : null, error ? /* @__PURE__ */ React.createElement("section", {
    className: "flex justify-center items-center h-[50px] w-full border-2 border-[#B00020]"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[16px] font-text font-semibold text-[#B00020]"
  }, error.message)) : null, /* @__PURE__ */ React.createElement("h1", {
    className: "font-heading text-[32px] text-center font-bold dark:text-white text-black"
  }, "Login"), /* @__PURE__ */ React.createElement(import_react69.Form, {
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
}, auth_default2 = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { version: "8866b4b7", entry: { module: "/build/entry.client-A74KQYZ2.js", imports: ["/build/_shared/chunk-G5YSW6PH.js", "/build/_shared/chunk-BNRLY3XL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-YEOAUVZ7.js", imports: ["/build/_shared/chunk-SGCEFJU5.js", "/build/_shared/chunk-ANXV7IG3.js", "/build/_shared/chunk-Q6ZWUQ7N.js", "/build/_shared/chunk-B4U3OFHR.js", "/build/_shared/chunk-VTZKE7FF.js", "/build/_shared/chunk-7PKGDFEP.js", "/build/_shared/chunk-KXTPXUUY.js", "/build/_shared/chunk-47ENB2WX.js", "/build/_shared/chunk-A7W5256J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-LPZTN6ZP.js", imports: ["/build/_shared/chunk-AH6SQ7FL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth": { id: "routes/auth", parentId: "root", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/auth-6WNMPUYA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/callback": { id: "routes/auth/callback", parentId: "routes/auth", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/callback-RSABRKM5.js", imports: ["/build/_shared/chunk-G5PUCEJV.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/index": { id: "routes/auth/index", parentId: "routes/auth", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/auth/index-DXK4UFYH.js", imports: ["/build/_shared/chunk-G5PUCEJV.js", "/build/_shared/chunk-U4KVHE6D.js", "/build/_shared/chunk-Q6ZWUQ7N.js", "/build/_shared/chunk-TUM2WL5Y.js", "/build/_shared/chunk-A7W5256J.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-2SCTHZLW.js", imports: ["/build/_shared/chunk-TUM2WL5Y.js", "/build/_shared/chunk-TYCBG23M.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-QYBL5FI7.js", imports: ["/build/_shared/chunk-TUM2WL5Y.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/bookings": { id: "routes/dashboard/bookings", parentId: "routes/dashboard", path: "bookings", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/bookings-N2BFHA42.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/profile": { id: "routes/dashboard/profile", parentId: "routes/dashboard", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/profile-YCNZ2HI5.js", imports: ["/build/_shared/chunk-B4U3OFHR.js", "/build/_shared/chunk-VTZKE7FF.js", "/build/_shared/chunk-IWVQ5Y2J.js", "/build/_shared/chunk-47ENB2WX.js", "/build/_shared/chunk-TYCBG23M.js", "/build/_shared/chunk-A7W5256J.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/dashboard/profile/newAddress": { id: "routes/dashboard/profile/newAddress", parentId: "routes/dashboard/profile", path: "newAddress", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/profile/newAddress-SYM2VKLF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/review": { id: "routes/dashboard/review", parentId: "routes/dashboard", path: "review", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/review-4CFIQMJY.js", imports: ["/build/_shared/chunk-7PKGDFEP.js", "/build/_shared/chunk-KXTPXUUY.js", "/build/_shared/chunk-47ENB2WX.js", "/build/_shared/chunk-TYCBG23M.js", "/build/_shared/chunk-A7W5256J.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-OESNEBI4.js", imports: ["/build/_shared/chunk-U4KVHE6D.js", "/build/_shared/chunk-ELJPENH3.js", "/build/_shared/chunk-QL62ASLK.js", "/build/_shared/chunk-AH6SQ7FL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/pricing": { id: "routes/pricing", parentId: "root", path: "pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/pricing-LQ3EGGTJ.js", imports: ["/build/_shared/chunk-V73UWLEX.js", "/build/_shared/chunk-ELJPENH3.js", "/build/_shared/chunk-QL62ASLK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pricing/$service": { id: "routes/pricing/$service", parentId: "routes/pricing", path: ":service", index: void 0, caseSensitive: void 0, module: "/build/routes/pricing/$service-D23L3H77.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pricing/index": { id: "routes/pricing/index", parentId: "routes/pricing", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/pricing/index-PC5ABWMI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-SYLWDTMU.js", imports: ["/build/_shared/chunk-QL62ASLK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stores/index": { id: "routes/stores/index", parentId: "root", path: "stores", index: !0, caseSensitive: void 0, module: "/build/routes/stores/index-2Y6TIFHN.js", imports: ["/build/_shared/chunk-IWVQ5Y2J.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, url: "/build/manifest-8866B4B7.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
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
    index: !0,
    caseSensitive: void 0,
    module: stores_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/bookings": {
    id: "routes/dashboard/bookings",
    parentId: "routes/dashboard",
    path: "bookings",
    index: void 0,
    caseSensitive: void 0,
    module: bookings_exports
  },
  "routes/dashboard/profile": {
    id: "routes/dashboard/profile",
    parentId: "routes/dashboard",
    path: "profile",
    index: void 0,
    caseSensitive: void 0,
    module: profile_exports
  },
  "routes/dashboard/profile/newAddress": {
    id: "routes/dashboard/profile/newAddress",
    parentId: "routes/dashboard/profile",
    path: "newAddress",
    index: void 0,
    caseSensitive: void 0,
    module: newAddress_exports
  },
  "routes/dashboard/review": {
    id: "routes/dashboard/review",
    parentId: "routes/dashboard",
    path: "review",
    index: void 0,
    caseSensitive: void 0,
    module: review_exports
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
    index: !0,
    caseSensitive: void 0,
    module: pricing_exports2
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
    index: !0,
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
    index: !0,
    caseSensitive: void 0,
    module: auth_exports2
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
