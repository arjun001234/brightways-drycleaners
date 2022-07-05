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
var import_react13 = require("@remix-run/react");
var import_react14 = __toESM(require("react"));

// app/styles/global.css
var global_default = "/build/_assets/global-JEIF55HP.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-55DNWN2R.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-55DNWN2R.css";

// app/styles/toast.css
var toast_default = "/build/_assets/toast-5P2K5C2H.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LVKKXLMZ.css";

// app/components/ui/layout.tsx
init_react();
var import_react11 = __toESM(require("react"));

// app/components/ui/footer.tsx
init_react();
var import_react3 = require("@remix-run/react");

// app/components/ui/logo.tsx
init_react();
var import_react2 = __toESM(require("react"));
var Logo = () => {
  return /* @__PURE__ */ import_react2.default.createElement("svg", {
    width: "180",
    height: "45",
    viewBox: "0 0 434 102",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M77.7232 15.3326C75.1232 16.7606 73.0232 17.1686 69.7232 16.7606C65.7232 16.2506 64.1232 16.7606 55.2232 21.4526C43.2232 27.8786 40.7232 30.0206 40.7232 33.8966C40.7232 38.2826 44.1232 37.6706 47.2232 32.6726C49.4232 29.2046 52.3232 26.5526 54.1232 26.5526C55.5232 26.5526 54.4232 31.4486 50.7232 41.4446C46.0232 54.0926 43.5232 63.0686 44.3232 64.4966C45.0232 65.6186 49.6232 65.1086 53.8232 63.4766C55.9232 62.6606 56.8232 61.0286 58.7232 54.9086C61.3232 46.3406 64.3232 42.8726 69.0232 42.8726C76.4232 42.8726 79.0232 49.0946 74.2232 54.9086C68.5232 61.8446 46.9232 70.4126 39.1232 68.8826C34.9232 68.1686 29.7232 63.1706 29.7232 60.1106C29.7232 57.2546 25.3232 57.5606 23.4232 60.6206C18.9232 67.4546 20.8232 72.8606 28.0232 73.9826C33.7232 74.9006 53.0232 72.8606 63.6232 70.3106C80.4232 66.3326 91.7232 58.1726 91.7232 50.2166C91.7232 46.0346 89.9232 43.7906 84.0232 40.2206C82.2232 39.2006 80.7232 38.0786 80.7232 37.7726C80.7232 37.4666 82.8232 36.1406 85.4232 34.7126C94.8232 29.6126 99.8232 18.6986 94.5232 14.9246C91.3232 12.5786 82.1232 12.8846 77.7232 15.3326ZM80.8232 20.4326C84.0232 22.2686 83.1232 26.0426 78.5232 30.7346C74.2232 34.9166 68.9232 37.9766 67.5232 37.1606C66.4232 36.4466 67.7232 28.4906 69.4232 25.7366C70.7232 23.4926 76.3232 19.4126 78.0232 19.4126C78.5232 19.4126 79.7232 19.9226 80.8232 20.4326Z",
    fill: "#DF4C18"
  }), /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M199.523 15.0265C197.523 17.3725 184.523 66.5365 185.323 68.6785C186.023 70.6165 190.823 71.8405 193.723 70.9225C196.423 70.0045 197.323 68.0665 199.723 57.5605C202.023 47.3605 204.523 42.7705 208.323 40.9345C213.623 38.4865 213.723 41.6485 208.823 55.3165C206.323 62.3545 206.223 65.1085 208.323 67.4545C210.223 69.5965 217.123 68.9845 220.623 66.2305C223.723 63.7825 225.423 63.7825 226.723 66.3325C227.623 67.9645 228.823 68.3725 233.523 68.3725C236.923 68.2705 240.023 67.6585 241.123 66.8425C243.723 64.9045 245.623 64.9045 247.823 66.9445C250.323 69.1885 257.023 68.9845 261.023 66.4345L264.223 64.4965L267.123 67.0465C273.323 72.4525 282.423 68.3725 293.123 55.4185C299.123 48.2785 301.623 46.2385 300.223 49.7065C299.823 50.7265 299.323 54.1945 299.023 57.4585C298.523 62.6605 298.723 63.6805 300.723 65.8225C303.423 68.7805 309.623 69.2905 315.423 67.1485C318.123 66.1285 319.223 66.1285 320.723 67.1485C323.823 69.0865 327.623 68.5765 332.523 65.7205L336.923 63.0685L338.823 65.2105C341.223 67.8625 347.423 68.0665 351.723 65.8225C355.223 63.9865 355.323 64.2925 353.023 72.4525C351.923 76.4305 350.823 78.7765 349.523 79.0825C346.923 80.0005 345.723 78.8785 345.723 75.4105V72.3505L339.523 72.6565C333.423 72.9625 333.223 73.0645 332.923 75.8185C332.623 77.9605 333.423 79.4905 336.023 82.1425C339.423 85.6105 339.823 85.7125 347.123 85.7125C360.123 85.7125 362.523 83.3665 368.023 65.3125C371.623 53.6845 371.723 53.5825 379.023 46.0345L386.523 38.5885L390.123 43.3825C392.123 46.1365 393.723 48.6865 393.723 49.0945C393.723 49.6045 391.323 50.0125 388.523 50.0125C381.223 50.0125 378.323 51.7465 377.923 56.0305C377.123 64.3945 384.223 69.2905 395.923 68.5765C397.623 68.4745 400.423 66.6385 403.323 63.8845C407.823 59.4985 407.923 59.1925 407.323 54.8065C406.723 50.7265 406.923 49.9105 410.223 45.9325C412.123 43.5865 413.723 41.2405 413.723 40.8325C413.723 38.5885 411.523 38.9965 408.323 41.9545C406.323 43.6885 404.123 44.9125 403.223 44.6065C401.423 43.7905 398.223 37.2625 397.323 32.4685C396.023 25.0225 389.223 24.7165 385.623 31.9585C382.423 38.2825 377.523 44.9125 376.023 44.9125C374.323 44.9125 374.323 44.7085 376.723 36.2425C377.823 32.3665 378.723 29.0005 378.723 28.7965C378.723 28.5925 375.723 28.5925 372.023 28.7965L365.323 29.1025L363.523 35.7325C359.323 51.0325 357.623 55.9285 355.823 57.6625C351.023 62.0485 350.423 55.5205 354.623 44.7085C360.723 29.3065 359.723 26.3485 349.723 29.5105C345.323 30.9385 344.223 31.6525 344.423 33.2845C344.523 34.3045 343.323 40.0165 341.623 45.9325C339.423 53.8885 337.923 57.2545 335.923 59.0905L333.223 61.6405L332.923 59.0905C332.723 57.6625 334.223 51.7465 336.223 45.7285C340.123 33.8965 340.523 30.1225 338.123 29.2045C335.723 28.2865 330.923 28.4905 330.223 29.6125C329.823 30.2245 326.723 30.3265 322.223 29.9185L314.823 29.3065L310.623 33.5905C306.123 38.1805 302.723 39.0985 302.723 35.7325C302.723 30.2245 293.523 27.4705 288.623 31.5505C286.523 33.2845 286.223 34.2025 286.423 40.2205C286.723 47.9725 283.623 56.6425 279.623 59.6005C275.623 62.4565 275.823 60.8245 282.423 32.8765C282.923 30.7345 282.623 30.6325 277.923 30.6325C275.023 30.6325 272.523 31.1425 271.823 31.9585C271.223 32.7745 269.523 38.3845 267.923 44.5045C264.523 57.6625 262.323 62.5585 259.923 62.0485C257.323 61.4365 258.123 55.3165 262.223 44.1985C267.123 30.8365 267.123 30.6325 259.823 30.6325C255.023 30.6325 253.723 30.9385 253.323 32.3665C247.623 52.4605 243.823 62.2525 241.723 62.2525C238.723 62.2525 239.823 53.3785 244.323 38.4865C246.723 31.0405 246.923 30.6325 249.723 30.6325C253.323 30.6325 253.923 27.8785 250.523 27.3685C248.423 27.0625 248.223 26.5525 248.523 21.1465C248.723 16.1485 248.523 15.3325 247.023 15.3325C243.623 15.3325 237.223 19.9225 235.523 23.4925C234.323 25.9405 232.823 27.2665 231.023 27.5725C227.623 28.1845 226.523 31.6525 229.623 31.6525C232.423 31.6525 232.423 35.7325 229.423 47.1565C226.923 56.5405 224.723 60.2125 221.523 60.2125C219.923 60.2125 219.723 59.7025 220.323 56.3365C220.723 54.2965 221.823 49.8085 222.823 46.4425C225.323 38.0785 225.323 34.2025 222.523 32.2645C219.423 30.0205 215.223 30.2245 210.623 32.8765C208.523 34.1005 206.523 34.9165 206.323 34.6105C206.123 34.4065 206.523 30.0205 207.323 25.0225C208.023 19.9225 208.723 15.2305 208.723 14.5165C208.723 12.5785 201.323 12.9865 199.523 15.0265ZM324.723 39.4045C324.723 49.7065 317.823 63.0685 313.023 62.0485C308.723 61.1305 312.623 45.1165 319.023 37.9765C322.323 34.4065 324.723 35.0185 324.723 39.4045ZM399.723 56.0305C400.223 57.1525 400.423 58.7845 400.123 59.7025C399.423 61.5385 394.623 64.2925 392.123 64.2925C389.623 64.2925 386.723 61.2325 386.723 58.5805C386.723 55.5205 389.123 54.1945 394.423 54.0925C397.623 54.0925 398.923 54.6025 399.723 56.0305Z",
    fill: "#DF4C18"
  }), /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M141.723 20.6365C139.323 24.6145 139.323 25.5325 141.023 27.9805C142.223 29.7145 142.823 29.7145 146.023 28.6945C150.223 27.2665 152.023 24.6145 151.523 20.6365C151.223 18.2905 150.723 17.8825 147.523 17.5765C144.223 17.2705 143.523 17.6785 141.723 20.6365Z",
    fill: "#DF4C18"
  }), /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M158.323 35.4265C152.923 41.0365 147.723 52.4605 147.023 59.9065C146.523 65.3125 146.723 66.3325 148.723 68.3725C150.723 70.4125 151.623 70.6165 157.823 70.1065L164.523 69.4945L162.623 75.2065C159.523 84.4885 157.423 85.9165 156.023 79.7965C155.223 76.4305 154.723 76.0225 151.823 75.7165C143.423 74.9005 141.223 78.7765 146.623 84.8965C149.223 87.8545 150.123 88.2625 156.523 88.5685C169.823 89.3845 176.223 83.6725 179.323 68.2705C180.123 64.0885 181.923 57.1525 183.323 52.7665C184.723 48.4825 186.223 42.3625 186.623 39.3025C187.523 32.3665 186.523 31.1425 180.523 32.0605C175.223 32.8765 172.523 32.8765 166.623 32.0605C162.323 31.5505 161.923 31.6525 158.323 35.4265ZM171.723 43.6885C171.723 48.9925 169.023 59.1925 166.823 62.2525C165.723 63.7825 164.023 64.8025 162.623 64.8025C160.423 64.8025 160.223 64.3945 160.323 60.2125C160.423 53.0725 162.623 46.8505 166.223 43.1785C170.523 38.7925 171.723 38.8945 171.723 43.6885Z",
    fill: "#DF4C18"
  }), /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M100.223 34.1005C98.6231 34.8145 96.1231 36.6505 94.7231 38.1805L92.3231 40.9345L96.6231 40.2205L101.023 39.5065L100.523 43.4845C100.223 45.6265 98.1231 51.6445 95.8231 56.7445C93.6231 61.9465 91.7231 67.5565 91.7231 69.2905C91.7231 72.3505 91.8231 72.4525 96.2231 72.4525C102.723 72.4525 104.823 69.8005 108.023 57.4585C110.023 49.9105 111.323 46.8505 113.323 45.1165C116.923 41.8525 119.323 42.5665 118.923 46.7485C118.823 48.5845 119.223 50.0125 119.723 50.0125C122.123 50.0125 126.423 46.8505 130.023 42.4645C132.423 39.5065 134.323 38.0785 135.223 38.3845C137.423 39.3025 137.123 41.6485 133.723 49.9105C129.923 59.4985 127.323 68.8825 128.023 70.9225C128.923 73.1665 134.923 72.8605 138.023 70.4125C139.323 69.2905 140.823 66.8425 141.123 65.0065C141.523 63.0685 142.823 58.6825 144.223 55.2145C147.423 46.8505 149.123 38.5885 148.323 35.3245C147.823 33.0805 147.123 32.6725 143.923 32.6725C141.923 32.7745 139.123 33.3865 137.723 34.2025C134.823 35.9365 130.723 36.2425 130.723 34.7125C130.723 32.8765 123.323 33.6925 118.923 35.9365L114.623 38.2825L112.923 35.9365C110.723 32.9785 104.423 32.0605 100.223 34.1005Z",
    fill: "#DF4C18"
  }), /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M374.67 81.2266C374.637 80.9164 374.497 80.675 374.251 80.5021C374.007 80.3293 373.69 80.2429 373.299 80.2429C373.024 80.2429 372.789 80.2843 372.592 80.3672C372.396 80.45 372.246 80.5625 372.141 80.7045C372.037 80.8466 371.984 81.0088 371.982 81.1911C371.982 81.3426 372.016 81.474 372.085 81.5852C372.156 81.6965 372.251 81.7912 372.372 81.8693C372.493 81.9451 372.627 82.009 372.773 82.0611C372.92 82.1132 373.068 82.157 373.217 82.1925L373.899 82.3629C374.174 82.4268 374.438 82.5133 374.691 82.6222C374.947 82.7311 375.175 82.8684 375.376 83.0341C375.58 83.1998 375.741 83.3999 375.859 83.6342C375.978 83.8686 376.037 84.1432 376.037 84.4581C376.037 84.8842 375.928 85.2595 375.71 85.5838C375.492 85.9058 375.178 86.1579 374.766 86.3402C374.356 86.5201 373.86 86.6101 373.278 86.6101C372.712 86.6101 372.221 86.5225 371.804 86.3473C371.39 86.1721 371.065 85.9164 370.831 85.5803C370.599 85.2441 370.473 84.8345 370.455 84.3516H371.751C371.77 84.6049 371.848 84.8156 371.985 84.9837C372.122 85.1518 372.301 85.2772 372.521 85.3601C372.744 85.4429 372.992 85.4844 373.267 85.4844C373.554 85.4844 373.804 85.4418 374.02 85.3565C374.238 85.2689 374.408 85.1482 374.531 84.9943C374.654 84.8381 374.717 84.6558 374.719 84.4474C374.717 84.258 374.661 84.1018 374.553 83.9787C374.444 83.8532 374.291 83.7491 374.094 83.6662C373.9 83.581 373.673 83.5052 373.413 83.4389L372.585 83.2259C371.986 83.072 371.513 82.8388 371.165 82.5263C370.819 82.2114 370.646 81.7936 370.646 81.2727C370.646 80.8442 370.762 80.469 370.994 80.147C371.229 79.825 371.547 79.5753 371.95 79.3977C372.352 79.2178 372.808 79.1278 373.317 79.1278C373.833 79.1278 374.285 79.2178 374.673 79.3977C375.064 79.5753 375.371 79.8227 375.593 80.1399C375.816 80.4548 375.93 80.817 375.938 81.2266H374.67ZM377.155 86.5V81.0455H378.44V86.5H377.155ZM377.801 80.2713C377.597 80.2713 377.422 80.2038 377.275 80.0689C377.129 79.9316 377.055 79.767 377.055 79.5753C377.055 79.3812 377.129 79.2166 377.275 79.0817C377.422 78.9444 377.597 78.8757 377.801 78.8757C378.007 78.8757 378.182 78.9444 378.327 79.0817C378.473 79.2166 378.547 79.3812 378.547 79.5753C378.547 79.767 378.473 79.9316 378.327 80.0689C378.182 80.2038 378.007 80.2713 377.801 80.2713ZM381.048 83.304V86.5H379.762V81.0455H380.991V81.9723H381.055C381.18 81.6669 381.38 81.4242 381.655 81.2443C381.932 81.0644 382.274 80.9744 382.681 80.9744C383.058 80.9744 383.385 81.0549 383.665 81.2159C383.946 81.3769 384.164 81.6101 384.318 81.9155C384.474 82.2209 384.551 82.5914 384.549 83.027V86.5H383.263V83.2259C383.263 82.8613 383.169 82.576 382.979 82.37C382.792 82.1641 382.533 82.0611 382.202 82.0611C381.977 82.0611 381.777 82.1108 381.602 82.2102C381.429 82.3073 381.293 82.4482 381.193 82.6328C381.096 82.8175 381.048 83.0412 381.048 83.304ZM388.235 86.6065C387.691 86.6065 387.223 86.487 386.832 86.2479C386.444 86.0088 386.145 85.6785 385.934 85.2571C385.726 84.8333 385.621 84.3456 385.621 83.794C385.621 83.2401 385.728 82.7512 385.941 82.3274C386.154 81.9013 386.455 81.5698 386.843 81.3331C387.234 81.094 387.695 80.9744 388.228 80.9744C388.671 80.9744 389.063 81.0561 389.403 81.2195C389.747 81.3804 390.02 81.6089 390.224 81.9048C390.427 82.1984 390.543 82.5417 390.572 82.9347H389.343C389.293 82.6719 389.175 82.4529 388.988 82.2777C388.803 82.1001 388.556 82.0114 388.246 82.0114C387.983 82.0114 387.752 82.0824 387.553 82.2244C387.354 82.3641 387.199 82.5653 387.088 82.8281C386.979 83.0909 386.925 83.4058 386.925 83.7727C386.925 84.1444 386.979 84.464 387.088 84.7315C387.197 84.9967 387.35 85.2015 387.546 85.3459C387.745 85.4879 387.978 85.5589 388.246 85.5589C388.435 85.5589 388.604 85.5234 388.754 85.4524C388.905 85.379 389.032 85.2737 389.134 85.1364C389.235 84.9991 389.305 84.8321 389.343 84.6357H390.572C390.541 85.0215 390.427 85.3636 390.231 85.6619C390.034 85.9579 389.767 86.1899 389.428 86.358C389.09 86.5237 388.692 86.6065 388.235 86.6065ZM394.042 86.6065C393.495 86.6065 393.023 86.4929 392.625 86.2656C392.23 86.036 391.926 85.7116 391.713 85.2926C391.499 84.8712 391.393 84.3752 391.393 83.8047C391.393 83.2436 391.499 82.7512 391.713 82.3274C391.928 81.9013 392.229 81.5698 392.615 81.3331C393 81.094 393.454 80.9744 393.975 80.9744C394.311 80.9744 394.628 81.0289 394.926 81.1378C395.227 81.2443 395.492 81.41 395.722 81.6349C395.954 81.8598 396.136 82.1463 396.269 82.4943C396.401 82.84 396.468 83.2519 396.468 83.7301V84.1243H391.997V83.2578H395.235C395.233 83.0116 395.18 82.7926 395.075 82.6009C394.971 82.4067 394.826 82.254 394.639 82.1428C394.454 82.0315 394.239 81.9759 393.992 81.9759C393.73 81.9759 393.499 82.0398 393.3 82.1676C393.101 82.2931 392.946 82.4588 392.835 82.6648C392.726 82.8684 392.67 83.0921 392.668 83.3359V84.0923C392.668 84.4096 392.726 84.6818 392.842 84.9091C392.958 85.134 393.12 85.3068 393.328 85.4276C393.537 85.5459 393.78 85.6051 394.06 85.6051C394.247 85.6051 394.416 85.5791 394.568 85.527C394.719 85.4725 394.851 85.3932 394.962 85.2891C395.073 85.1849 395.157 85.0559 395.214 84.902L396.414 85.0369C396.338 85.3542 396.194 85.6312 395.981 85.8679C395.77 86.1023 395.5 86.2846 395.171 86.4148C394.842 86.5426 394.466 86.6065 394.042 86.6065ZM402.979 79.2273V86.5H401.662V80.5092H401.619L399.918 81.5959V80.3885L401.726 79.2273H402.979ZM407.351 79.1278C407.699 79.1302 408.037 79.1918 408.366 79.3125C408.698 79.4309 408.996 79.625 409.261 79.8949C409.527 80.1624 409.737 80.5211 409.893 80.9709C410.05 81.4207 410.128 81.977 410.128 82.6399C410.13 83.2649 410.064 83.8236 409.929 84.3161C409.796 84.8061 409.606 85.2204 409.357 85.5589C409.109 85.8975 408.809 86.1555 408.459 86.3331C408.108 86.5107 407.714 86.5994 407.276 86.5994C406.817 86.5994 406.41 86.5095 406.055 86.3295C405.702 86.1496 405.417 85.9034 405.199 85.5909C404.981 85.2784 404.847 84.9209 404.798 84.5185H406.094C406.16 84.8073 406.295 85.0369 406.499 85.2074C406.705 85.3755 406.964 85.4595 407.276 85.4595C407.781 85.4595 408.169 85.2405 408.441 84.8026C408.713 84.3646 408.849 83.7562 408.849 82.9773H408.8C408.684 83.1856 408.533 83.3655 408.349 83.517C408.164 83.6662 407.955 83.781 407.72 83.8615C407.488 83.942 407.242 83.9822 406.982 83.9822C406.555 83.9822 406.172 83.8804 405.831 83.6768C405.492 83.4732 405.224 83.1939 405.025 82.8388C404.828 82.4837 404.729 82.0777 404.727 81.6207C404.727 81.1473 404.835 80.7223 405.053 80.3459C405.273 79.9671 405.58 79.6688 405.973 79.451C406.366 79.2308 406.825 79.1231 407.351 79.1278ZM407.354 80.1932C407.099 80.1932 406.868 80.2559 406.662 80.3814C406.458 80.5045 406.297 80.6726 406.179 80.8857C406.063 81.0964 406.005 81.3319 406.005 81.5923C406.007 81.8504 406.065 82.0848 406.179 82.2955C406.295 82.5062 406.452 82.6731 406.651 82.7962C406.853 82.9193 407.082 82.9808 407.34 82.9808C407.532 82.9808 407.711 82.9441 407.876 82.8707C408.042 82.7973 408.187 82.6955 408.31 82.5653C408.435 82.4328 408.532 82.2824 408.601 82.1143C408.672 81.9463 408.706 81.7687 408.704 81.5817C408.704 81.3331 408.645 81.1035 408.526 80.8928C408.41 80.6821 408.25 80.5128 408.047 80.3849C407.846 80.2571 407.615 80.1932 407.354 80.1932ZM413.974 86.5994C413.626 86.5971 413.286 86.5367 412.955 86.4183C412.623 86.2976 412.325 86.1023 412.06 85.8324C411.795 85.5601 411.584 85.1991 411.428 84.7493C411.271 84.2971 411.194 83.7372 411.197 83.0696C411.197 82.447 411.263 81.8918 411.396 81.4041C411.528 80.9164 411.719 80.5045 411.967 80.1683C412.216 79.8298 412.515 79.5717 412.866 79.3942C413.219 79.2166 413.613 79.1278 414.048 79.1278C414.505 79.1278 414.91 79.2178 415.263 79.3977C415.618 79.5777 415.904 79.8239 416.122 80.1364C416.34 80.4465 416.475 80.7969 416.527 81.1875H415.231C415.165 80.9081 415.028 80.6856 414.822 80.5199C414.619 80.3518 414.361 80.2678 414.048 80.2678C413.544 80.2678 413.156 80.4867 412.884 80.9247C412.614 81.3627 412.478 81.964 412.475 82.7287H412.525C412.641 82.5204 412.791 82.3416 412.976 82.1925C413.161 82.0433 413.369 81.9285 413.601 81.848C413.835 81.7652 414.083 81.7237 414.343 81.7237C414.769 81.7237 415.152 81.8255 415.49 82.0291C415.831 82.2327 416.101 82.5133 416.3 82.8707C416.499 83.2259 416.597 83.633 416.594 84.0923C416.597 84.5705 416.488 85.0002 416.268 85.3814C416.048 85.7602 415.741 86.0585 415.348 86.2763C414.955 86.4941 414.497 86.6018 413.974 86.5994ZM413.967 85.5341C414.225 85.5341 414.455 85.4714 414.659 85.3459C414.863 85.2204 415.024 85.0511 415.142 84.8381C415.26 84.625 415.318 84.3859 415.316 84.1207C415.318 83.8603 415.262 83.6248 415.146 83.4141C415.032 83.2034 414.875 83.0365 414.673 82.9134C414.472 82.7902 414.242 82.7287 413.984 82.7287C413.793 82.7287 413.614 82.7654 413.448 82.8388C413.282 82.9122 413.138 83.014 413.015 83.1442C412.892 83.272 412.795 83.4212 412.724 83.5916C412.655 83.7597 412.62 83.9396 412.617 84.1314C412.62 84.3847 412.679 84.6179 412.795 84.831C412.911 85.044 413.071 85.2145 413.274 85.3423C413.478 85.4702 413.709 85.5341 413.967 85.5341ZM417.663 85.1506V84.103L420.749 79.2273H421.623V80.7188H421.09L419.013 84.0107V84.0675H423.32V85.1506H417.663ZM421.133 86.5V84.831L421.147 84.3622V79.2273H422.39V86.5H421.133Z",
    className: "dark:fill-white fill-black"
  }), /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M423.9 20.91C423.9 25.0816 420.585 28.46 416.5 28.46C412.415 28.46 409.1 25.0816 409.1 20.91C409.1 16.7384 412.415 13.36 416.5 13.36C420.585 13.36 423.9 16.7384 423.9 20.91Z",
    strokeWidth: "0.2",
    className: "dark:stroke-white stroke-black"
  }), /* @__PURE__ */ import_react2.default.createElement("path", {
    d: "M414.705 23.3V17.4819H416.67C417.125 17.4819 417.498 17.5595 417.79 17.7148C418.081 17.8682 418.297 18.0794 418.438 18.3483C418.578 18.6173 418.648 18.9232 418.648 19.266C418.648 19.6088 418.578 19.9127 418.438 20.1779C418.297 20.443 418.082 20.6514 417.793 20.8029C417.503 20.9525 417.133 21.0273 416.682 21.0273H415.091V20.391H416.659C416.97 20.391 417.22 20.3455 417.409 20.2546C417.6 20.1637 417.739 20.0349 417.824 19.8682C417.911 19.6997 417.955 19.4989 417.955 19.266C417.955 19.033 417.911 18.8294 417.824 18.6552C417.737 18.4809 417.598 18.3465 417.406 18.2518C417.215 18.1552 416.962 18.1069 416.648 18.1069H415.409V23.3H414.705ZM417.443 20.6864L418.875 23.3H418.057L416.648 20.6864H417.443Z",
    className: "dark:fill-white fill-black"
  }));
};

// app/components/ui/footer.tsx
var Footer = () => {
  const { footer } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full bg-inherit flex justify-center items-center mx-auto px-[20px] md:px-[100px] h-auto gap-10 py-[100px] border-t-2 border-gray-400"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "w-[100%] gap-10 grid grid-cols-1 md:grid-cols-4 "
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-start gap-3 font-[14px]  dark:text-white text-black font-text"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement("p", null, footer.desc)), footer.sections.map((section) => {
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
var import_react7 = __toESM(require("react"));
var import_bs = require("react-icons/bs");
var import_bs2 = require("react-icons/bs");

// app/components/context/appContext.tsx
init_react();
var import_react4 = require("@remix-run/react");
var import_react5 = __toESM(require("react"));
var AppContext = import_react5.default.createContext({
  user: null,
  profile: null,
  isAuthenticated: false,
  setProfile: (_) => {
  }
});
var AppContextProvider = ({ children }) => {
  const { isAuthenticated: isAuthenticated2, user, profile } = (0, import_react4.useLoaderData)();
  const [userProfile, setUserProfile] = import_react5.default.useState(profile ? profile : null);
  const setProfile = (p) => {
    setUserProfile(p);
  };
  return /* @__PURE__ */ import_react5.default.createElement(AppContext.Provider, {
    value: { isAuthenticated: isAuthenticated2, user: user ? user : null, profile: userProfile, setProfile }
  }, children);
};
var appContext_default = AppContextProvider;

// app/utils/styles.ts
init_react();
var largeBasicButton = "h-[60px] w-full lg:w-auto flex justify-center items-center px-[30px] rounded-md lg:rounded-[30px] border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-blue hover:scale-110 transition-all duration-300";
var basicButton = "min-h-[40px] h-auto w-full lg:w-auto flex justify-center items-center px-[30px] rounded-md lg:rounded-[30px] border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-blue hover:scale-110 transition-all duration-300";
var lessRoundedBasicLargeButton = "h-[60px] w-full lg:w-auto flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-blue hover:scale-105 transition-all duration-300";
var borderGrowAnim = "after:z-[-1] after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 hover:after:opacity-100 hover:after:scale-105 after:scale-100 after:opacity-0 after:border-[3px] after:border-blue after:rounded-md after:transition-all after:duration-300";
var lessRoundedBasicInput = "h-[60px] w-full flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white  text-black transition-all duration-300 outline-none border-none dark:bg-gray-800 bg-gray-50 px-3  placeholder:font-text placeholder:font-semibold placeholder:text-gray-400 text-[16px]";
var lessRoundedBasicInputWithBorder = "h-[60px] w-full flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white  text-black transition-all duration-300 outline-none dark:bg-gray-800 bg-gray-50 px-3  placeholder:font-text placeholder:font-semibold placeholder:text-gray-400 text-[16px] focus:border-blue";

// app/components/ui/header.tsx
var import_react8 = require("@remix-run/react");
var import_ai = require("react-icons/ai");

// app/components/context/themeContext.tsx
init_react();
var import_react6 = __toESM(require("react"));
var ThemeContext = import_react6.default.createContext({
  theme: "DARK" /* DARK */,
  setAppTheme: (theme) => {
  }
});
var ThemeContextProvider = ({ children }) => {
  const [theme, settheme] = import_react6.default.useState("DARK" /* DARK */);
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
  import_react6.default.useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      settheme("DARK" /* DARK */);
    } else {
      document.documentElement.classList.remove("dark");
      settheme("LIGHT" /* LIGHT */);
    }
  }, []);
  return /* @__PURE__ */ import_react6.default.createElement(ThemeContext.Provider, {
    value: { theme, setAppTheme }
  }, children);
};
var themeContext_default = ThemeContextProvider;

// app/components/ui/header.tsx
var Header = () => {
  const location2 = (0, import_react8.useLocation)();
  const { user, isAuthenticated: isAuthenticated2 } = import_react7.default.useContext(AppContext);
  const { setAppTheme, theme } = import_react7.default.useContext(ThemeContext);
  const { header } = (0, import_react8.useLoaderData)();
  const [open, setOpen] = import_react7.default.useState(false);
  const [visible, setVisible] = import_react7.default.useState(false);
  const [onTop, setOnTop] = import_react7.default.useState(true);
  const { logo, nav } = header;
  const isCurrentPage = (path) => {
    if (path === location2.pathname) {
      return true;
    }
    return false;
  };
  import_react7.default.useEffect(() => {
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
  return /* @__PURE__ */ import_react7.default.createElement("header", {
    className: `${visible ? "-translate-y-full" : "translate-y-0"} fixed top-0 left-0 right-0 h-[100px] flex flex-row items-center justify-between z-40 overflow-visible transition-transform duration-300 lg:overflow-hidden px-[20px] lg:px-[50px] dark:bg-gray-900 bg-white`
  }, /* @__PURE__ */ import_react7.default.createElement("section", {
    className: "flex-1 lg:flex-none"
  }, /* @__PURE__ */ import_react7.default.createElement(Logo, null)), /* @__PURE__ */ import_react7.default.createElement("ul", {
    className: `${open ? "scale-100 opacity-100 " : " scale-0 opacity-0 lg:scale-100 lg:opacity-100"} fixed top-0 left-0 right-0 h-[100vh] flex flex-col items-center justify-center transition-all duration-500 lg:static lg:flex-row lg:w-auto lg:h-auto lg:overflow-hidden lg:gap-3 lg:px-5 dark:bg-gray-900 bg-white z-30 lg:bg-inherit`
  }, /* @__PURE__ */ import_react7.default.createElement(import_ai.AiOutlineClose, {
    className: "lg:hidden dark:fill-white fill-black absolute right-[20px] top-[20px] h-[40px] w-[40px]",
    onClick: () => setOpen(false)
  }), nav.map((link) => {
    return /* @__PURE__ */ import_react7.default.createElement("li", {
      className: ` group py-4 w-[80%] font-text font-[18px] font-bold flex flex-col gap-1 justify-center items-center rounded-md transition-all duration-300 dark:text-white text-black lg:text-gray-400  lg:p-2 lg:w-auto lg:overflow-visible lg:font-medium`,
      key: link._key
    }, /* @__PURE__ */ import_react7.default.createElement(import_react8.Link, {
      to: link.to,
      onClick: () => setOpen(false)
    }, link.name), /* @__PURE__ */ import_react7.default.createElement("span", {
      className: `${isCurrentPage(link.to) ? "w-full" : "w-0"}  group-hover:w-full hidden lg:flex h-[4px] transition-all bg-blue duration-100`
    }));
  }), isAuthenticated2 && user ? /* @__PURE__ */ import_react7.default.createElement("li", {
    className: ` py-4 w-[80%] lg:hidden font-text font-[18px] font-bold flex flex-col gap-1 justify-center items-center rounded-md transition-all duration-300 dark:text-white text-black lg:text-gray-400 lg:p-2 lg:w-auto lg:overflow-visible lg:font-medium`
  }, /* @__PURE__ */ import_react7.default.createElement(import_react8.Link, {
    to: "/dashboard/profile",
    onClick: () => setOpen(false)
  }, "Profile")) : /* @__PURE__ */ import_react7.default.createElement("li", {
    className: ` py-4 w-[80%] lg:hidden font-text font-[18px] font-bold flex flex-col gap-1 justify-center items-center rounded-md transition-all duration-300 dark:text-white text-black lg:text-gray-400 lg:p-2 lg:w-auto lg:overflow-visible lg:font-medium`
  }, /* @__PURE__ */ import_react7.default.createElement(import_react8.Link, {
    to: "/auth",
    onClick: () => setOpen(false)
  }, "Login"))), /* @__PURE__ */ import_react7.default.createElement("section", {
    className: "flex items-center gap-4 overflow-visible z-20"
  }, /* @__PURE__ */ import_react7.default.createElement("div", {
    className: `relative h-[40px] w-[40px] rounded-[50px] border-gray-400  border-2  font-text font-medium flex justify-center items-center`
  }, /* @__PURE__ */ import_react7.default.createElement(import_bs2.BsLightbulb, {
    className: `dark:fill-white fill-black scale-110 left-[11px] ${theme === "DARK" /* DARK */ ? "opacity-100 absolute" : "opacity-0 hidden"}`,
    onClick: () => setAppTheme("LIGHT" /* LIGHT */)
  }), /* @__PURE__ */ import_react7.default.createElement(import_bs2.BsLightbulbFill, {
    className: `dark:fill-white fill-black scale-110 left-[11px] ${theme === "LIGHT" /* LIGHT */ ? "opacity-100 absolute" : "opacity-0 hidden"}`,
    onClick: () => setAppTheme("DARK" /* DARK */)
  })), isAuthenticated2 && user ? /* @__PURE__ */ import_react7.default.createElement("div", {
    className: `${basicButton} hidden lg:flex`
  }, /* @__PURE__ */ import_react7.default.createElement(import_react8.Link, {
    to: "/dashboard/profile"
  }, "Profile")) : /* @__PURE__ */ import_react7.default.createElement("div", {
    className: `${basicButton} hidden lg:flex`
  }, /* @__PURE__ */ import_react7.default.createElement(import_react8.Link, {
    to: "/auth"
  }, "Login"))), /* @__PURE__ */ import_react7.default.createElement("section", {
    className: "flex justify-center items-center lg:hidden ml-3 z-20"
  }, /* @__PURE__ */ import_react7.default.createElement(import_bs.BsList, {
    style: { height: "40px", width: "40px" },
    className: "dark:fill-white fill-black",
    onClick: () => setOpen(true)
  })));
};
var header_default = Header;

// app/components/ui/layout.tsx
var import_react_toastify = require("react-toastify");
var import_framer_motion = require("framer-motion");
var import_react12 = require("@remix-run/react");

// app/components/ui/pageLoader.tsx
init_react();
var import_react9 = require("@remix-run/react");
var import_react10 = __toESM(require("react"));
var PageLoader = () => {
  var _a;
  const transition = (0, import_react9.useTransition)();
  return /* @__PURE__ */ import_react10.default.createElement("div", {
    className: `fixed bottom-5 ${transition.state === "loading" ? "right-5" : "right-[100%]"} flex flex-row gap-5 p-5 rounded-md dark:bg-gray-800 bg-slate-100 z-50 h-auto w-auto justify-center items-center`
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: " inline-block w-[50px] h-[50px] after:contents-[''] after:block after:h-[40px] after:w-[40px] after:m-[5px] after:rounded-[50%] after:border-2 after:border-t-blue after:animate-spin overflow-visible"
  }), /* @__PURE__ */ import_react10.default.createElement("p", {
    className: "font-text font-medium text-[16px] dark:text-white text-black"
  }, (_a = transition.location) == null ? void 0 : _a.pathname));
};
var pageLoader_default = PageLoader;

// app/components/ui/layout.tsx
var Layout = ({ children }) => {
  const location2 = (0, import_react12.useLocation)();
  return /* @__PURE__ */ import_react11.default.createElement("div", {
    className: `flex flex-col min-h-[calc(100vh - 64px)] h-auto min-w-screen scroll-smooth`
  }, /* @__PURE__ */ import_react11.default.createElement(header_default, {
    pathname: location2.pathname
  }), /* @__PURE__ */ import_react11.default.createElement(import_framer_motion.AnimatePresence, {
    exitBeforeEnter: true
  }, /* @__PURE__ */ import_react11.default.createElement(import_framer_motion.motion.main, null, children)), /* @__PURE__ */ import_react11.default.createElement(pageLoader_default, null), /* @__PURE__ */ import_react11.default.createElement(footer_default, null), /* @__PURE__ */ import_react11.default.createElement(import_react_toastify.ToastContainer, null));
};
var layout_default = Layout;

// route:D:\projects\brightways\remix\app\root.tsx
var import_bi = require("react-icons/bi");

// app/sanity/query/header.server.ts
init_react();

// app/sanity/sanity.server.ts
init_react();
var import_axios = __toESM(require("axios"));
var sanityQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.SANITY_DATASET}?query=`;
var sanityPostQueryUrl = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.SANITY_DATASET}`;
var sanityQueryClient = import_axios.default.create({
  baseURL: sanityQueryUrl
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
if (!process.env.SERVER_URL)
  throw new Error("SERVICE_URL is required");
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
    return [null, { message: "not found", status: 404 }];
  if (validateAndReturnUser) {
    const { user, error } = await getUserByToken(token);
    if (error) {
      return [null, error];
    }
    return [user, error];
  }
  return [null, null];
};

// route:D:\projects\brightways\remix\app\root.tsx
var loader = async ({ request }) => {
  const header = await getHeader();
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
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      SERVER_URL: process.env.SERVER_URL
    }
  };
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("access_token")) {
    const [user, error] = await isAuthenticated(request, true);
    if (user) {
      response.isAuthenticated = true;
      response.user = user;
    }
    if (error) {
      console.log(error);
    }
    const profileResponse = await supabaseAdmin.from("profiles").select("*").eq("id", user == null ? void 0 : user.id).single();
    if (profileResponse.data) {
      response.profile = profileResponse.data;
    }
    if (profileResponse.error) {
      console.log(profileResponse.error);
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
  ];
};
var meta = () => {
  return { title: "Brightways" };
};
var Document = ({ children, env }) => {
  return /* @__PURE__ */ import_react14.default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ import_react14.default.createElement("head", null, /* @__PURE__ */ import_react14.default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ import_react14.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.Meta, null), /* @__PURE__ */ import_react14.default.createElement(import_react13.Links, null)), /* @__PURE__ */ import_react14.default.createElement("body", {
    className: "bg-white dark:bg-gray-900"
  }, /* @__PURE__ */ import_react14.default.createElement(themeContext_default, null, children), /* @__PURE__ */ import_react14.default.createElement(import_react13.ScrollRestoration, null), env && /* @__PURE__ */ import_react14.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `window.env = ${JSON.stringify(env)}`
    }
  }), /* @__PURE__ */ import_react14.default.createElement(import_react13.Scripts, null), /* @__PURE__ */ import_react14.default.createElement(import_react13.LiveReload, null)));
};
function App() {
  const { env } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ import_react14.default.createElement(Document, {
    env
  }, /* @__PURE__ */ import_react14.default.createElement(appContext_default, null, /* @__PURE__ */ import_react14.default.createElement(layout_default, null, /* @__PURE__ */ import_react14.default.createElement(import_react13.Outlet, null))));
}
var CatchBoundary = () => {
  const error = (0, import_react13.useCatch)();
  return /* @__PURE__ */ import_react14.default.createElement(Document, null, /* @__PURE__ */ import_react14.default.createElement("div", {
    className: " absolute right-0 lg:right-[calc(50%-200px)] top-[calc(50%-200px)] md:border-2 md:border-gray-400 p-10 flex flex-col gap-5 col-start-1 col-span-full lg:col-start-4 lg:col-end-10 h-[400px] w-full lg:w-[400px]"
  }, /* @__PURE__ */ import_react14.default.createElement("h1", {
    className: " font-heading font-bold text-[50px] lg:text-[100px] dark:text-white text-black text-center overflow-visible"
  }, error.status), /* @__PURE__ */ import_react14.default.createElement("p", {
    className: " font-text font-medium text-center text-[18px] dark:text-white text-black"
  }, error.data), /* @__PURE__ */ import_react14.default.createElement("button", {
    className: `${lessRoundedBasicLargeButton} overflow-visible`
  }, /* @__PURE__ */ import_react14.default.createElement(import_react13.Link, {
    to: "/"
  }, "Back Home"))));
};
var ErrorBoundary = ({ error }) => {
  console.log(error);
  return /* @__PURE__ */ import_react14.default.createElement(Document, null, /* @__PURE__ */ import_react14.default.createElement("section", {
    className: "min-h-screen min-w-full flex bg-blue justify-center items-center"
  }, /* @__PURE__ */ import_react14.default.createElement("div", {
    className: "p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center"
  }, /* @__PURE__ */ import_react14.default.createElement(import_bi.BiError, {
    className: "fill-error-red h-[100px] w-[100px]"
  }), /* @__PURE__ */ import_react14.default.createElement("h1", {
    className: "text-red font-heading font-extrabold text-[48px]"
  }, "Sorry"), /* @__PURE__ */ import_react14.default.createElement("p", {
    className: "font-text text-[18px] mb-3"
  }, "Something went wrong!"), /* @__PURE__ */ import_react14.default.createElement("button", {
    className: "p-3 rounded-md bg-blue text-white font-text text-[18px]",
    onClick: () => location.reload()
  }, "Try Again"))));
};

// route:D:\projects\brightways\remix\app\routes\stores\index.tsx
var stores_exports = {};
__export(stores_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => stores_default,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_react21 = __toESM(require("react"));
var import_bi3 = require("react-icons/bi");

// app/components/stores/container.tsx
init_react();
var import_react16 = require("@remix-run/react");

// app/components/stores/store.tsx
init_react();
var import_react15 = __toESM(require("react"));
var import_fa = require("react-icons/fa");
var import_bi2 = require("react-icons/bi");
var import_fi = require("react-icons/fi");
var Store = ({ store, delay }) => {
  return /* @__PURE__ */ import_react15.default.createElement("div", {
    className: `flex flex-col dark:bg-gray-800 bg-gray-50 p-5 gap-2 rounded-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-visible odd:animate-bounce-in-left even:animate-bounce-in-right`
  }, /* @__PURE__ */ import_react15.default.createElement("h1", {
    className: "font-heading font-semibold dark:text-white text-black text-[24px] mb-5"
  }, store.name), /* @__PURE__ */ import_react15.default.createElement("section", {
    className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react15.default.createElement(import_fa.FaRegAddressBook, null), /* @__PURE__ */ import_react15.default.createElement("p", null, store.address)), /* @__PURE__ */ import_react15.default.createElement("section", {
    className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react15.default.createElement(import_fa.FaRegCalendarAlt, null), /* @__PURE__ */ import_react15.default.createElement("p", null, store.openOn)), /* @__PURE__ */ import_react15.default.createElement("section", {
    className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react15.default.createElement(import_bi2.BiTime, null), /* @__PURE__ */ import_react15.default.createElement("p", null, store.timings)), /* @__PURE__ */ import_react15.default.createElement("section", {
    className: "flex items-center dark:text-white text-black gap-2 font-text text-[14px]"
  }, /* @__PURE__ */ import_react15.default.createElement(import_fi.FiPhoneCall, null), /* @__PURE__ */ import_react15.default.createElement("p", null, store.contactNumber)), /* @__PURE__ */ import_react15.default.createElement("section", {
    className: "flex flex-col md:flex-row items-center gap-5 font-text text-[14px] mt-5 overflow-visible"
  }, /* @__PURE__ */ import_react15.default.createElement("button", {
    className: `${basicButton}`
  }, /* @__PURE__ */ import_react15.default.createElement("a", {
    href: store.direction,
    target: "_blank"
  }, "Get Direction")), /* @__PURE__ */ import_react15.default.createElement("button", {
    className: `${basicButton}`
  }, /* @__PURE__ */ import_react15.default.createElement("a", {
    href: `tel:+91${store.contactNumber}`
  }, "Call"))));
};
var store_default = Store;

// app/components/stores/container.tsx
var Container = () => {
  const { stores } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center gap-5 items-center col-start-1 col-span-full"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "w-[80%] grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 gap-10 py-5"
  }, stores.map((store, index) => {
    return /* @__PURE__ */ React.createElement(store_default, {
      key: store._id,
      store,
      delay: (index + 1) * 100
    });
  })));
};
var container_default = Container;

// app/components/wrappers/infoWrapper.tsx
init_react();
var import_react19 = require("@remix-run/react");
var import_react20 = __toESM(require("react"));

// app/utils/helpers/IsHomePage.ts
init_react();
var isHomePage = (path) => {
  if (path === "/") {
    return true;
  }
  return false;
};

// app/components/containers/grid.tsx
init_react();
var import_react17 = __toESM(require("react"));
var import_framer_motion2 = require("framer-motion");
var Grid = ({ children }) => {
  return /* @__PURE__ */ import_react17.default.createElement(import_framer_motion2.motion.div, {
    className: `grid grid-cols-4 gap-x-4 md:grid-col-8 lg:grid-cols-12 lg:gap-x-6 overflow-visible min-h-[500px] h-auto w-full`
  }, children);
};
var grid_default = Grid;

// app/components/ui/info.tsx
init_react();
var import_react18 = __toESM(require("react"));
var Info = ({ heading, subHeading }) => {
  return /* @__PURE__ */ import_react18.default.createElement("section", {
    className: "flex flex-col items-center"
  }, /* @__PURE__ */ import_react18.default.createElement("h1", {
    className: "font-heading text-[32px] text-black dark:text-white text-center font-bold"
  }, heading), /* @__PURE__ */ import_react18.default.createElement("div", {
    className: " bg-blue h-[6px] w-10 rounded-sm"
  }), /* @__PURE__ */ import_react18.default.createElement("p", {
    className: "mt-4 font-text text-[16px] text-gray-400 text-center"
  }, subHeading));
};
var info_default = Info;

// app/components/wrappers/infoWrapper.tsx
var InfoWrapper = ({ children, heading, subHeading, id }) => {
  const location2 = (0, import_react19.useLocation)();
  return /* @__PURE__ */ import_react20.default.createElement("div", {
    id,
    className: ` relative flex bg-inherit flex-col items-center gap-[50px] lg:gap-[70px] px-[10vw] lg:min-h-screen h-auto w-full justify-center ${isHomePage(location2.pathname) ? "lg:py-[50px]" : "py-[100px] lg:pb-[100px] lg:pt-[150px]"}`
  }, heading && subHeading && /* @__PURE__ */ import_react20.default.createElement(info_default, {
    heading,
    subHeading
  }), /* @__PURE__ */ import_react20.default.createElement(grid_default, null, children));
};
var infoWrapper_default = InfoWrapper;

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
var meta2 = () => {
  return { title: "Stores" };
};
var Index = () => {
  return /* @__PURE__ */ import_react21.default.createElement(infoWrapper_default, {
    id: "stores"
  }, /* @__PURE__ */ import_react21.default.createElement(container_default, null));
};
var ErrorBoundary2 = ({ error }) => {
  console.log(error);
  return /* @__PURE__ */ import_react21.default.createElement("section", {
    className: "min-h-screen min-w-full flex bg-blue justify-center items-center"
  }, /* @__PURE__ */ import_react21.default.createElement("div", {
    className: "p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center"
  }, /* @__PURE__ */ import_react21.default.createElement(import_bi3.BiError, {
    className: "fill-error-red h-[100px] w-[100px]"
  }), /* @__PURE__ */ import_react21.default.createElement("h1", {
    className: "text-red font-heading font-extrabold text-[48px]"
  }, "Sorry"), /* @__PURE__ */ import_react21.default.createElement("p", {
    className: "font-text text-[18px] mb-3"
  }, "Something went wrong!"), /* @__PURE__ */ import_react21.default.createElement("button", {
    className: "p-3 rounded-md bg-blue text-white font-text text-[18px]",
    onClick: () => location.reload()
  }, "Try Again")));
};
var stores_default = Index;

// route:D:\projects\brightways\remix\app\routes\dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_node2 = require("@remix-run/node");
var import_react25 = require("@remix-run/react");

// app/components/wrappers/dashboardWrapper.tsx
init_react();
var import_react24 = __toESM(require("react"));

// app/components/profile/sidebar.tsx
init_react();
var import_react22 = require("@remix-run/react");
var import_react23 = __toESM(require("react"));
var import_io = require("react-icons/io");
var capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var ProfileSidebar = () => {
  const matches = (0, import_react22.useMatches)();
  const [open, setOpen] = import_react23.default.useState(false);
  return /* @__PURE__ */ import_react23.default.createElement("div", {
    className: `w-full md:w-[200px] px-[20px] md:px-[50px] absolute md:static dark:bg-gray-900 bg-white`
  }, /* @__PURE__ */ import_react23.default.createElement("section", {
    className: "md:hidden flex justify-between items-center w-full h-[50px]",
    onClick: () => setOpen((prev) => !prev)
  }, /* @__PURE__ */ import_react23.default.createElement("p", {
    className: " font-text font-medium text-[18px] dark:text-white text-black"
  }, capitalizeFirstLetter(matches[2].id.split("/")[2])), !open ? /* @__PURE__ */ import_react23.default.createElement(import_io.IoMdArrowDropdown, {
    className: "w-10 h-10 dark:fill-white fill-black"
  }) : /* @__PURE__ */ import_react23.default.createElement(import_io.IoMdArrowDropup, {
    className: "w-7 h-7 dark:fill-white fill-black"
  })), /* @__PURE__ */ import_react23.default.createElement("ul", {
    className: `w-full md:h-full flex flex-col items-start bg-inherit ${open ? "h-full" : "h-0"}`
  }, /* @__PURE__ */ import_react23.default.createElement("li", {
    onClick: () => setOpen(false),
    className: `h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length - 1].id.includes("/profile") ? "text-blue" : "dark:text-white text-black"}`
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.Link, {
    to: "/dashboard/profile"
  }, "Profile")), /* @__PURE__ */ import_react23.default.createElement("li", {
    onClick: () => setOpen(false),
    className: `h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length - 1].id.includes("/bookings") ? "text-blue" : "dark:text-white text-black"}`
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.Link, {
    to: "/dashboard/bookings"
  }, "Bookings")), /* @__PURE__ */ import_react23.default.createElement("li", {
    onClick: () => setOpen(false),
    className: `h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length - 1].id.includes("/review") ? "text-blue" : "dark:text-white text-black"}`
  }, /* @__PURE__ */ import_react23.default.createElement(import_react22.Link, {
    to: "/dashboard/review"
  }, "Review"))));
};
var sidebar_default = ProfileSidebar;

// app/components/wrappers/dashboardWrapper.tsx
var DashBoardWrapper = ({ children }) => {
  return /* @__PURE__ */ import_react24.default.createElement("div", {
    className: "flex h-screen w-full bg-inherit pt-[100px] relative"
  }, /* @__PURE__ */ import_react24.default.createElement(sidebar_default, null), /* @__PURE__ */ import_react24.default.createElement("section", {
    className: "p-[20px] pt-[100px] md:pt-10 md:p-10 flex-1 flex-col dark:bg-gray-800 bg-gray-100 overflow-scroll no-scrollbar"
  }, children));
};
var dashboardWrapper_default = DashBoardWrapper;

// route:D:\projects\brightways\remix\app\routes\dashboard.tsx
var loader3 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session) {
    return (0, import_node2.redirect)("/auth");
  }
  const token = session.get("access_token");
  if (!token) {
    return (0, import_node2.redirect)("/auth");
  }
  const { error } = await supabaseAdmin.auth.api.getUser(token);
  if ((error == null ? void 0 : error.status) === 404) {
    return (0, import_node2.redirect)("/auth", {
      headers: {
        "Set-Cookie": await destroySession(session)
      }
    });
  }
  return null;
};
var meta3 = () => {
  return { title: "Dashboard" };
};
var Dashboard = () => {
  return /* @__PURE__ */ React.createElement(dashboardWrapper_default, null, /* @__PURE__ */ React.createElement(import_react25.Outlet, null));
};
var dashboard_default = Dashboard;

// route:D:\projects\brightways\remix\app\routes\dashboard\bookings.tsx
var bookings_exports = {};
__export(bookings_exports, {
  default: () => bookings_default
});
init_react();
var import_react26 = __toESM(require("react"));
var Bookings = () => {
  return /* @__PURE__ */ import_react26.default.createElement("div", {
    className: "h-full w-full flex justify-center items-center"
  }, /* @__PURE__ */ import_react26.default.createElement("h1", {
    className: "font-heading font-medium dark:text-white text-black text-[24px]"
  }, "Coming Soon"));
};
var bookings_default = Bookings;

// route:D:\projects\brightways\remix\app\routes\dashboard\profile.tsx
var profile_exports = {};
__export(profile_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action,
  default: () => profile_default
});
init_react();
var import_node3 = require("@remix-run/node");
var import_react28 = require("@remix-run/react");
var import_react29 = __toESM(require("react"));
var import_fa2 = require("react-icons/fa");

// app/components/ui/input.tsx
init_react();
var import_react27 = __toESM(require("react"));
var Input = import_react27.default.forwardRef(({ label, type, placeholder, name, error, handleChange, defaultValue = "", disabled = false, style }, ref) => /* @__PURE__ */ import_react27.default.createElement("div", {
  className: `w-full flex flex-col gap-2`
}, /* @__PURE__ */ import_react27.default.createElement("label", {
  className: "font-text font-normal text-[16px] dark:text-white text-black",
  htmlFor: name
}, label), /* @__PURE__ */ import_react27.default.createElement("input", {
  ref,
  className: style,
  onChange: handleChange.bind(null),
  type,
  placeholder,
  name,
  defaultValue,
  disabled
}), error && /* @__PURE__ */ import_react27.default.createElement("p", {
  className: " text-[#FF0000]"
}, error)));
var input_default = Input;

// app/utils/helpers/createProfile.ts
init_react();
var createProfile = (formData) => {
  const name = formData.get("name");
  const contactNumber = formData.get("contactNumber");
  if (!name) {
    return [null, {
      name: "name is required"
    }];
  }
  if (!contactNumber) {
    return [null, {
      name: "contact number is required"
    }];
  }
  if (name.length < 4) {
    return [null, {
      name: "name is too short"
    }];
  }
  if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(contactNumber)) {
    return [null, {
      name: "invalid contact number"
    }];
  }
  return [{
    name,
    contactNumber
  }, null];
};

// route:D:\projects\brightways\remix\app\routes\dashboard\profile.tsx
var action = async ({ request }) => {
  const formData = await request.formData();
  const event = formData.get("event");
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("access_token");
  if (event === "SIGN_OUT") {
    if (token) {
      const { error } = await supabaseAdmin.auth.api.signOut(token);
      if (error) {
        console.log(error);
      } else {
        session.flash("error", {
          message: "Logout out successfully"
        });
        return (0, import_node3.redirect)("/auth", {
          headers: {
            "Set-Cookie": await destroySession(session)
          }
        });
      }
    }
  }
  if (event === "UPDATE_USER") {
    const [profile, error] = createProfile(formData);
    if (error) {
      return (0, import_node3.json)({
        validationError: error
      });
    }
    const profileResponse = await supabaseAdmin.from("profiles").update({ name: profile == null ? void 0 : profile.name, contactNumber: profile == null ? void 0 : profile.contactNumber });
    if (profileResponse.error) {
      console.log(profileResponse.error);
      return (0, import_node3.json)({
        error: profileResponse.error.message
      });
    }
    return (0, import_node3.json)({
      success: profileResponse.data
    });
  }
  if (event === "DELETE_USER") {
  }
  return null;
};
var ProfilePage = () => {
  const navigate = (0, import_react28.useNavigate)();
  const data = (0, import_react28.useActionData)();
  const tranistion = (0, import_react28.useTransition)();
  const { user, isAuthenticated: isAuthenticated2, setProfile, profile } = import_react29.default.useContext(AppContext);
  const [validationError, setValidationError] = import_react29.default.useState((data == null ? void 0 : data.validationErrors) ? data.validationErrors : {});
  const nameRef = import_react29.default.useRef(null);
  const contactNumber = import_react29.default.useRef(null);
  import_react29.default.useEffect(() => {
    if (data == null ? void 0 : data.success) {
      setProfile(data.success);
    }
  }, []);
  if (!isAuthenticated2 || !user) {
    navigate("/login");
    return null;
  }
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.length < 4) {
      setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { name: "name is too short" }));
    } else {
      setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { name: void 0 }));
    }
  };
  const handleContactNumberChange = (e) => {
    const value = e.target.value;
    if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value)) {
      setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { contactNumber: "inavlid contact number" }));
    } else {
      setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { contactNumber: void 0 }));
    }
  };
  const handleDiscard = () => {
    setValidationError({});
    if (nameRef.current) {
      nameRef.current.value = "";
    }
    if (contactNumber.current) {
      contactNumber.current.value = "";
    }
  };
  return /* @__PURE__ */ import_react29.default.createElement("div", {
    className: "flex flex-col gap-20 overflow-visible"
  }, /* @__PURE__ */ import_react29.default.createElement("section", {
    className: "flex flex-col gap-10 overflow-visible"
  }, /* @__PURE__ */ import_react29.default.createElement("div", {
    className: "flex justify-start items-center gap-3"
  }, /* @__PURE__ */ import_react29.default.createElement(import_fa2.FaRegUser, {
    className: "dark:fill-white fill-black h-10 w-10"
  }), /* @__PURE__ */ import_react29.default.createElement("h1", {
    className: " font-heading font-medium dark:text-white text-black text-[24px]"
  }, "Details")), /* @__PURE__ */ import_react29.default.createElement(import_react28.Form, {
    method: "post",
    className: "flex flex-col gap-5 items-start overflow-visible"
  }, /* @__PURE__ */ import_react29.default.createElement(input_default, {
    type: "text",
    name: "name",
    ref: nameRef,
    label: "Name",
    placeholder: "Your Name",
    error: validationError.name,
    handleChange: handleNameChange,
    defaultValue: profile == null ? void 0 : profile.name,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react29.default.createElement(input_default, {
    defaultValue: user.email,
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "Your Email",
    handleChange: () => {
    },
    error: void 0,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react29.default.createElement(input_default, {
    defaultValue: (profile == null ? void 0 : profile.contactNumber) ? profile.contactNumber : "",
    type: "text",
    name: "contactNumber",
    ref: contactNumber,
    label: "Contact Number",
    placeholder: "Your contact number",
    handleChange: handleContactNumberChange,
    error: validationError.contactNumber,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react29.default.createElement("input", {
    className: "hidden",
    name: "event",
    defaultValue: "UPDATE_USER"
  }), /* @__PURE__ */ import_react29.default.createElement("section", {
    className: "my-3 flex flex-row items-center justify-start gap-5 overflow-visible"
  }, /* @__PURE__ */ import_react29.default.createElement("button", {
    disabled: tranistion.state === "submitting" && Object.keys(validationError).length > 0,
    className: `${lessRoundedBasicLargeButton}`
  }, "Save"), /* @__PURE__ */ import_react29.default.createElement("button", {
    type: "button",
    onClick: handleDiscard.bind(null),
    className: `${lessRoundedBasicLargeButton}`
  }, "Discard")))), /* @__PURE__ */ import_react29.default.createElement("section", {
    className: "flex flex-col md:flex-row justify-center items-center gap-5 mt-[50px] w-full overflow-visible"
  }, /* @__PURE__ */ import_react29.default.createElement(import_react28.Form, {
    method: "post",
    className: "w-full md:w-auto overflow-visible"
  }, /* @__PURE__ */ import_react29.default.createElement("input", {
    className: "hidden",
    name: "event",
    defaultValue: "SIGN_OUT"
  }), /* @__PURE__ */ import_react29.default.createElement("button", {
    className: `${lessRoundedBasicLargeButton}`,
    type: "submit"
  }, "Logout")), /* @__PURE__ */ import_react29.default.createElement(import_react28.Form, {
    method: "post",
    action: "/profile?index",
    className: "w-full md:w-auto overflow-visible"
  }, /* @__PURE__ */ import_react29.default.createElement("input", {
    className: "hidden",
    name: "event",
    defaultValue: "DELETE_USER"
  }), /* @__PURE__ */ import_react29.default.createElement("button", {
    className: `${lessRoundedBasicLargeButton}`,
    type: "submit"
  }, "Delete Account"))));
};
var ErrorBoundary3 = ({ error }) => {
  return /* @__PURE__ */ import_react29.default.createElement("div", null, /* @__PURE__ */ import_react29.default.createElement("h1", null, "Something went wrong"));
};
var profile_default = ProfilePage;

// route:D:\projects\brightways\remix\app\routes\dashboard\review.tsx
var review_exports = {};
__export(review_exports, {
  action: () => action2,
  default: () => review_default,
  loader: () => loader4
});
init_react();
var import_node4 = require("@remix-run/node");
var import_react30 = require("@remix-run/react");
var import_react31 = __toESM(require("react"));
var import_bs3 = require("react-icons/bs");
var import_react_toastify2 = require("react-toastify");

// app/utils/helpers/createReview.ts
init_react();
var createReview = (formData) => {
  const review = formData.get("review");
  const rating = formData.get("rating");
  if (!review) {
    return [null, { review: "review is required" }];
  }
  if (!rating) {
    return [null, { rating: "rating is required" }];
  }
  if (review.length < 5) {
    return [null, { review: "review too small" }];
  }
  if (!/[+]?([0-4]*\.[0-9]+|[0-5])/.test(rating)) {
    return [null, { rating: "invalid rating" }];
  }
  return [{
    review,
    rating: parseFloat(rating)
  }, null];
};

// route:D:\projects\brightways\remix\app\routes\dashboard\review.tsx
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const [review, actionData] = createReview(formData);
  if (actionData) {
    return (0, import_node4.json)({
      validationactionData: actionData
    });
  }
  if (review) {
    const [user, error] = await isAuthenticated(request, true);
    if (error) {
      console.log(error);
      return (0, import_node4.json)({
        error: error.message
      });
    }
    if (user) {
      const reviewResponse = await supabaseAdmin.from("reviews").insert({ profile_id: user == null ? void 0 : user.id, review: review.review, rating: review.rating });
      if (reviewResponse.error) {
        console.log(reviewResponse, error);
        return (0, import_node4.json)({
          error: reviewResponse.error.message
        });
      }
      return (0, import_node4.json)({
        success: reviewResponse.data
      });
    }
  }
  return (0, import_node4.json)({
    error: "something went wrong"
  });
};
var loader4 = async ({ request }) => {
  const [user, error] = await isAuthenticated(request, true);
  if (error) {
    console.log(error);
    return (0, import_node4.json)({
      error: error.message
    });
  }
  const reviewsResponse = await supabaseAdmin.from("reviews").select("*").eq("profile_id", user == null ? void 0 : user.id);
  if (reviewsResponse.error) {
    console.log(reviewsResponse.error);
    return (0, import_node4.json)({
      error: reviewsResponse.error.message
    });
  }
  return (0, import_node4.json)({
    reviews: reviewsResponse.data
  });
};
var Review = () => {
  const transition = (0, import_react30.useTransition)();
  const data = (0, import_react30.useLoaderData)();
  const actionData = (0, import_react30.useActionData)();
  const [validationError, setValidationError] = import_react31.default.useState((actionData == null ? void 0 : actionData.validationErrors) ? actionData.validationErrors : {});
  const reviewRef = import_react31.default.useRef(null);
  const ratingRef = import_react31.default.useRef(null);
  const handleReviewChange = (e) => {
    const value = e.target.value;
    if (value.length === 0) {
      setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { review: "review required" }));
    } else if (value.length < 5) {
      setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { review: "review too short" }));
    }
  };
  const handleRatingChange = (e) => {
    const value = e.target.value;
    if (value.length > 1) {
      setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { rating: "invalid input" }));
    } else if (!/[+]?([0-4]*\.[0-9]+|[0-5])/.test(value)) {
      setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { rating: "value should be between 0 - 5" }));
    }
  };
  const handleDiscard = () => {
    setValidationError({});
    if (ratingRef.current) {
      ratingRef.current.value = "";
    }
    if (reviewRef.current) {
      reviewRef.current.value = "";
    }
  };
  import_react31.default.useEffect(() => {
    if (actionData == null ? void 0 : actionData.success) {
      import_react_toastify2.toast.success("Reviewed Successfully", {
        position: "top-right"
      });
    }
  }, [actionData]);
  return /* @__PURE__ */ import_react31.default.createElement("div", {
    className: "flex flex-col gap-20 overflow-visible"
  }, /* @__PURE__ */ import_react31.default.createElement("section", {
    className: "flex flex-col gap-10 overflow-visible"
  }, /* @__PURE__ */ import_react31.default.createElement("div", {
    className: "flex justify-start items-center gap-3"
  }, /* @__PURE__ */ import_react31.default.createElement(import_bs3.BsPen, {
    className: "dark:fill-white fill-black h-10 w-10"
  }), /* @__PURE__ */ import_react31.default.createElement("h1", {
    className: " font-heading font-medium dark:text-white text-black text-[24px]"
  }, "Write Review")), data.reviews && data.reviews.length < 2 && /* @__PURE__ */ import_react31.default.createElement("form", {
    method: "post",
    className: "flex flex-col gap-5 items-start overflow-visible"
  }, /* @__PURE__ */ import_react31.default.createElement(input_default, {
    type: "text",
    name: "review",
    ref: reviewRef,
    placeholder: "Your Review",
    label: "Review",
    handleChange: handleReviewChange,
    error: validationError.review,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react31.default.createElement(input_default, {
    type: "text",
    name: "rating",
    ref: ratingRef,
    placeholder: "Rating 0 to 5",
    label: "Rating",
    handleChange: handleRatingChange,
    error: validationError.rating,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react31.default.createElement("section", {
    className: "my-3 flex flex-row items-center justify-start gap-5 overflow-visible"
  }, /* @__PURE__ */ import_react31.default.createElement("button", {
    disabled: transition.state === "submitting" || validationError.review ? true : validationError.rating ? true : false,
    type: "submit",
    className: `${lessRoundedBasicLargeButton}`
  }, transition.state === "submitting" ? "Posting..." : "Post"), /* @__PURE__ */ import_react31.default.createElement("button", {
    type: "button",
    onClick: handleDiscard.bind(null),
    className: `${lessRoundedBasicLargeButton}`
  }, "Discard")))), /* @__PURE__ */ import_react31.default.createElement("section", null));
};
var review_default = Review;

// route:D:\projects\brightways\remix\app\routes\services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => services_default,
  loader: () => loader5,
  meta: () => meta4
});
init_react();
var import_node5 = require("@remix-run/node");
var import_react34 = __toESM(require("react"));

// app/components/services/detailedServices.tsx
init_react();
var import_react33 = require("@remix-run/react");

// app/components/services/detailedService.tsx
init_react();
var import_react32 = __toESM(require("react"));
var DeatailedService = ({ service }) => {
  return /* @__PURE__ */ import_react32.default.createElement("div", {
    className: `flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse items-center gap-20 overflow-visible odd:animate-bounce-in-right even:animate-bounce-in-left`
  }, /* @__PURE__ */ import_react32.default.createElement("section", {
    className: "flex-1 flex flex-col gap-3 overflow-visible"
  }, /* @__PURE__ */ import_react32.default.createElement("h1", {
    className: "font-heading font-bold text-[24px] dark:text-white text-black overflow-visible"
  }, service.name), /* @__PURE__ */ import_react32.default.createElement("p", {
    className: "font-text font-medium text-gray-400 text-[18px] overflow-visible"
  }, service.detailedDesc)), /* @__PURE__ */ import_react32.default.createElement("section", {
    className: "flex-1 flex flex-row"
  }));
};
var detailedService_default = DeatailedService;

// app/components/services/detailedServices.tsx
var DetailedServices = () => {
  const { services } = (0, import_react33.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: `grid grid-cols-1 w-full h-auto gap-40 overflow-y-visible col-start-1 col-span-full`
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
var loader5 = async () => {
  const services = await getServices();
  if (!services) {
    throw new import_node5.Response("not found", {
      status: 404
    });
  }
  return {
    services
  };
};
var meta4 = () => {
  return { title: "Services" };
};
var ServicesPage = () => {
  return /* @__PURE__ */ import_react34.default.createElement(infoWrapper_default, {
    id: "services"
  }, /* @__PURE__ */ import_react34.default.createElement(detailedServices_default, null));
};
var services_default = ServicesPage;

// route:D:\projects\brightways\remix\app\routes\contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action3,
  default: () => contact_default2,
  meta: () => meta5
});
init_react();

// app/components/contact/contact.tsx
init_react();
var import_react35 = require("@remix-run/react");
var import_react36 = __toESM(require("react"));
var import_react_toastify3 = require("react-toastify");
var Contact = () => {
  const transition = (0, import_react35.useTransition)();
  const data = (0, import_react35.useActionData)();
  const [formErrors, setFormErrors] = import_react36.default.useState((data == null ? void 0 : data.validationErrors) ? data.validationErrors : {});
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
  import_react36.default.useEffect(() => {
    if (data == null ? void 0 : data.error) {
      import_react_toastify3.toast.error(data.error);
    }
  }, [data]);
  import_react36.default.useEffect(() => {
    if (data == null ? void 0 : data.success) {
      import_react_toastify3.toast.success("Message Sent!");
    }
  }, [data]);
  return /* @__PURE__ */ import_react36.default.createElement("div", {
    className: "w-full flex flex-col lg:flex-row justify-center align-middle overflow-visible col-start-1 col-span-full"
  }, /* @__PURE__ */ import_react36.default.createElement("section", {
    className: "hidden lg:flex justify-center items-center lg:flex-1 animate-bounce-in-left"
  }, /* @__PURE__ */ import_react36.default.createElement("h1", null, "Image Here")), /* @__PURE__ */ import_react36.default.createElement(import_react35.Form, {
    method: "post",
    action: "/contact",
    className: "lg:flex-1 flex flex-col gap-5 overflow-visible animate-bounce-in-right"
  }, /* @__PURE__ */ import_react36.default.createElement("div", {
    className: "flex flex-col "
  }, /* @__PURE__ */ import_react36.default.createElement("h1", {
    className: "font-heading font-semibold text-[42px] dark:text-white text-black"
  }, "Contact Us"), /* @__PURE__ */ import_react36.default.createElement("p", {
    className: "font-text font-normal text-[16px] dark:text-white text-black"
  }, "Explore the future with us.", /* @__PURE__ */ import_react36.default.createElement("br", null), "Feel free to get in touch.")), /* @__PURE__ */ import_react36.default.createElement(input_default, {
    name: "name",
    label: "Name",
    placeholder: "Enter your name here.",
    type: "text",
    style: lessRoundedBasicInput,
    error: formErrors.name,
    handleChange: handleNameChange
  }), /* @__PURE__ */ import_react36.default.createElement(input_default, {
    name: "contactNumber",
    label: "Contact Number",
    placeholder: "Enter your number here.",
    type: "text",
    style: lessRoundedBasicInput,
    error: formErrors.contactNumber,
    handleChange: handleEmailChange
  }), /* @__PURE__ */ import_react36.default.createElement(input_default, {
    name: "message",
    label: "Message",
    placeholder: "Enter your message here.",
    type: "text",
    style: lessRoundedBasicInput,
    error: formErrors.message,
    handleChange: handleMessageChange
  }), /* @__PURE__ */ import_react36.default.createElement("button", {
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
    } else if (false) {
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
var import_node6 = require("@remix-run/node");
var action3 = async ({ request }) => {
  const formData = await request.formData();
  console.log(formData);
  let [errors, contact] = createContact(formData);
  if (errors) {
    return (0, import_node6.json)({
      validationErrors: errors
    });
  }
  if (contact) {
    try {
      const { error } = await supabaseAdmin.from("contacts").insert([{ name: contact.name, contactNumber: contact.contactNumber, message: contact.message }]);
      if (error) {
        console.log(error);
        return (0, import_node6.json)({
          error: "Failed to send message"
        });
      }
    } catch (error) {
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
};
var meta5 = () => {
  return {
    title: "Contact",
    description: "Contact page of Brightways Drycleaners",
    keywords: "Brightways,Drycleaners"
  };
};
var ContactPage = () => {
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    id: "contact"
  }, /* @__PURE__ */ React.createElement(contact_default, null));
};
var contact_default2 = ContactPage;

// route:D:\projects\brightways\remix\app\routes\pricing.tsx
var pricing_exports = {};
__export(pricing_exports, {
  default: () => pricing_default,
  loader: () => loader6,
  meta: () => meta6
});
init_react();
var import_react41 = __toESM(require("react"));

// app/components/services/container.tsx
init_react();
var import_react39 = __toESM(require("react"));

// app/components/services/service.tsx
init_react();
var import_react37 = __toESM(require("react"));

// public/images/dry-cleaning.png
var dry_cleaning_default = "/build/_assets/dry-cleaning-E25CI4UP.png";

// app/components/services/service.tsx
var import_react38 = require("@remix-run/react");
var Service = ({ service, delay }) => {
  const location2 = (0, import_react38.useLocation)();
  return /* @__PURE__ */ import_react37.default.createElement(import_react38.Link, {
    to: `/pricing/${service.name}`,
    className: `${isHomePage(location2.pathname) ? "lg:h-64 h-40 w-full lg:w-64 flex-col justify-center items-center" : `h-24 w-full flex-row`} dark:bg-gray-800 bg-slate-100 p-3 gap-2 rounded-md flex flex-row items-cente hover:scale-110 relative z-10 overflow-visible ${borderGrowAnim} animate-fade-in-fwd animation-delay-${delay}`
  }, /* @__PURE__ */ import_react37.default.createElement("section", {
    className: "flex justify-center opacity-100 items-center overflow-hidden h-[50px] w-[50px]"
  }, /* @__PURE__ */ import_react37.default.createElement("img", {
    className: " h-full w-full",
    src: dry_cleaning_default
  })), /* @__PURE__ */ import_react37.default.createElement("section", {
    className: "dark:text-white text-black flex flex-col gap-[3px] opacity-100"
  }, /* @__PURE__ */ import_react37.default.createElement("p", null, service.name)));
};
var service_default = Service;

// app/components/services/container.tsx
var Container2 = ({ services, open }) => {
  return /* @__PURE__ */ import_react39.default.createElement("section", {
    className: `absolute min-h-screen overflow-y-scroll h-auto left-0 ${open ? "top-[100px]" : "top-[-100%]"} w-full flex justify-center py-[50px] lg:py-0 lg:static lg:overflow-visible lg:col-start-1 lg:col-span-4 lg:w-auto lg:h-auto dark:bg-slate-900 bg-white transition-all duration-500 ease-linear z-20`
  }, /* @__PURE__ */ import_react39.default.createElement("div", {
    className: "flex flex-col gap-5 overflow-visible w-[80%] lg:w-full"
  }, services.map((service, index) => {
    return /* @__PURE__ */ import_react39.default.createElement(service_default, {
      key: service._id,
      delay: (index + 1) * 100,
      service
    });
  })));
};
var container_default2 = Container2;

// app/components/context/cartContext.tsx
init_react();
var import_react40 = __toESM(require("react"));
var CartContext = import_react40.default.createContext(null);
var CartProvider = ({ children }) => {
  const [items, setItems] = import_react40.default.useState([]);
  const [totalCost, setTotalCost] = import_react40.default.useState(0);
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
  import_react40.default.useEffect(() => {
    getTotalCost();
  }, [items]);
  const getTotalItems = () => {
    return items.reduce((prev, curr) => {
      return prev + curr.quantity;
    }, 0);
  };
  return /* @__PURE__ */ import_react40.default.createElement(CartContext.Provider, {
    value: { cart: { estimatedCost: totalCost, items }, add, remove, getTotalItems }
  }, children);
};
var cartContext_default = CartProvider;

// route:D:\projects\brightways\remix\app\routes\pricing.tsx
var import_react42 = require("@remix-run/react");
var import_md = require("react-icons/md");
var loader6 = async () => {
  const services = await getServices();
  if (!services) {
    throw new Error("Couldn't fetch business");
  }
  return {
    services
  };
};
var meta6 = () => {
  return { title: "Pricing" };
};
var PricingPage = () => {
  const { services } = (0, import_react42.useLoaderData)();
  const [open, setOpen] = import_react41.default.useState(false);
  import_react41.default.useEffect(() => {
    setOpen(false);
  }, []);
  return /* @__PURE__ */ import_react41.default.createElement(cartContext_default, null, /* @__PURE__ */ import_react41.default.createElement(infoWrapper_default, {
    id: "pricing"
  }, /* @__PURE__ */ import_react41.default.createElement("div", {
    className: "fixed right-5 bottom-5 rounded-[50%] h-[50px] w-[50px] flex justify-center items-center bg-slate-100 dark:bg-slate-800 z-50 lg:hidden",
    onClick: () => setOpen((prev) => !prev)
  }, open ? /* @__PURE__ */ import_react41.default.createElement(import_md.MdOutlineKeyboardArrowUp, {
    className: " scale-110 dark:fill-white fill-black"
  }) : /* @__PURE__ */ import_react41.default.createElement(import_md.MdOutlineKeyboardArrowDown, {
    className: " scale-110 dark:fill-white fill-black"
  })), /* @__PURE__ */ import_react41.default.createElement(container_default2, {
    services,
    open
  }), /* @__PURE__ */ import_react41.default.createElement(import_react42.Outlet, {
    context: { services }
  })));
};
var pricing_default = PricingPage;

// route:D:\projects\brightways\remix\app\routes\pricing\$service.tsx
var service_exports = {};
__export(service_exports, {
  default: () => service_default3,
  loader: () => loader7
});
init_react();

// app/components/pricing/service.tsx
init_react();
var import_react45 = require("@remix-run/react");
var import_react46 = __toESM(require("react"));

// app/components/pricing/category.tsx
init_react();
var import_react44 = __toESM(require("react"));

// app/components/pricing/item.tsx
init_react();
var import_react43 = __toESM(require("react"));
var Item = ({ item, operation = "ADD" /* ADD */, classes = "" }) => {
  const { add, remove } = import_react43.default.useContext(CartContext);
  return /* @__PURE__ */ import_react43.default.createElement("div", {
    className: `flex flex-row items-center gap-3 ` + classes
  }, /* @__PURE__ */ import_react43.default.createElement("p", {
    className: "flex-1 font-text text-[16px] dark:text-white text-black"
  }, item.name), /* @__PURE__ */ import_react43.default.createElement("p", {
    className: "font-text text-[16px] dark:text-white text-black"
  }, item.minPrice, " - ", item.maxPrice));
};
var item_default = Item;

// app/components/pricing/category.tsx
var Category = ({ category }) => {
  return /* @__PURE__ */ import_react44.default.createElement("div", {
    className: "flex flex-col gap-3"
  }, /* @__PURE__ */ import_react44.default.createElement("span", {
    className: "font-text text-[18px] text-gray-400 text-left font-semibold"
  }, category.name), /* @__PURE__ */ import_react44.default.createElement("section", {
    className: "flex flex-col gap-2"
  }, category.items.map((item) => {
    return /* @__PURE__ */ import_react44.default.createElement(item_default, {
      key: item._id,
      item,
      operation: "ADD" /* ADD */
    });
  })));
};
var category_default = Category;

// app/components/pricing/service.tsx
var Service2 = ({ service }) => {
  const { categories } = (0, import_react45.useLoaderData)();
  if (!service) {
    return /* @__PURE__ */ import_react46.default.createElement("div", null, "Not Found");
  }
  return /* @__PURE__ */ import_react46.default.createElement("div", {
    className: "flex flex-col flex-1 w-auto h-auto gap-2 col-start-1 col-span-full lg:col-start-5 lg:col-span-7"
  }, /* @__PURE__ */ import_react46.default.createElement("h2", {
    className: "font-heading text-[32px] dark:text-white text-black font-semibold"
  }, service.name), /* @__PURE__ */ import_react46.default.createElement("p", {
    className: "font-text text-[16px] dark:text-white text-black"
  }, service.detailedDesc), /* @__PURE__ */ import_react46.default.createElement("section", {
    className: "flex flex-col gap-8 mt-5"
  }, categories.map((category) => {
    return /* @__PURE__ */ import_react46.default.createElement(category_default, {
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
var import_react47 = require("@remix-run/react");
var loader7 = async ({ params }) => {
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
  const params = (0, import_react47.useParams)();
  const { services } = (0, import_react47.useOutletContext)();
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
var import_react48 = __toESM(require("react"));
var Index2 = () => {
  return /* @__PURE__ */ import_react48.default.createElement("div", {
    className: "flex-1 flex justify-center items-center col-start-1 col-span-full lg:col-start-5 lg:col-span-7 mt-[50px] lg:mt-0 h-[300px]"
  }, /* @__PURE__ */ import_react48.default.createElement("p", {
    className: " font-heading font-semibold text-[24px] dark:text-white text-black"
  }, "Select service to view prices"));
};
var pricing_default2 = Index2;

// route:D:\projects\brightways\remix\app\routes\process.tsx
var process_exports = {};
__export(process_exports, {
  default: () => process_default,
  loader: () => loader8
});
init_react();
var import_react51 = require("@remix-run/react");

// app/components/process/step.tsx
init_react();
var import_react49 = __toESM(require("react"));
var import_framer_motion3 = require("framer-motion");

// app/utils/animations/basicAnim.ts
init_react();
var FadeOutScaleUpAnim = {
  visible: (d) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      delay: d || 0.2
    }
  }),
  hidden: {
    scale: 0,
    opacity: 0
  }
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
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "tween",
      ease: "linear"
    }
  },
  hidden: {
    opacity: 0
  }
};

// app/components/process/step.tsx
var import_react50 = require("@remix-run/react");
var Step = ({ step, delay }) => {
  const location2 = (0, import_react50.useLocation)();
  return /* @__PURE__ */ import_react49.default.createElement(import_framer_motion3.motion.section, {
    variants: FadeOutScaleUpAnim,
    initial: "hidden",
    whileInView: "visible",
    custom: delay,
    viewport: { once: true },
    className: ` flex flex-1 flex-col gap-3 items-center overflow-visible`
  }, /* @__PURE__ */ import_react49.default.createElement("div", {
    className: " h-24 w-24 rounded-[50%] bg-slate-100 flex justify-center items-center"
  }, /* @__PURE__ */ import_react49.default.createElement("img", {
    className: "h-10 w-10",
    alt: step.heading,
    src: step.image.imageUrl
  })), /* @__PURE__ */ import_react49.default.createElement("h1", {
    className: "font-heading text-black dark:text-white text-[20px] font-bold place text-center"
  }, step.heading), !isHomePage(location2.pathname) && /* @__PURE__ */ import_react49.default.createElement("p", {
    className: "font-text text-[16px] font-normal text-gray-400"
  }, step.desc));
};
var step_default = Step;

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
          "steps": steps[]{
            _key,
            desc,
            heading,
            number,
            "image": ${getImageQuery("image")}
          },
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

// route:D:\projects\brightways\remix\app\routes\process.tsx
var loader8 = async () => {
  const process2 = await getProcess();
  if (!process2) {
    throw new Error("Couldn't fetch process");
  }
  return {
    process: process2
  };
};
var ProcessPage = () => {
  const { process: process2 } = (0, import_react51.useLoaderData)();
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    id: "process"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-start-1 col-span-full flex flex-col gap-10"
  }, process2.steps.map((step) => {
    return /* @__PURE__ */ React.createElement(step_default, {
      key: step._key,
      step,
      delay: 0.2
    });
  })));
};
var process_default = ProcessPage;

// route:D:\projects\brightways\remix\app\routes\reviews.tsx
var reviews_exports = {};
__export(reviews_exports, {
  default: () => reviews_default,
  loader: () => loader9
});
init_react();
var import_node7 = require("@remix-run/node");
var import_react54 = require("@remix-run/react");

// app/components/Testimonials/testimonial.tsx
init_react();
var import_react52 = __toESM(require("react"));
var import_framer_motion4 = require("framer-motion");
var import_react53 = require("@remix-run/react");
var Testimonial = ({ testimonial, delay }) => {
  const location2 = (0, import_react53.useLocation)();
  return /* @__PURE__ */ import_react52.default.createElement(import_framer_motion4.motion.div, {
    variants: FadeOutScaleUpAnim,
    initial: "hidden",
    whileInView: "visible",
    custom: delay,
    viewport: { once: true },
    className: `${!isHomePage(location2.pathname) ? "w-full min-w-full min-h-auto h-auto p-6 items-start gap-5" : "min-w-[250px] w-[250px] min-h-[250px] h-[250px] items-center p-4 gap-0"} hover:shadow-lg hover:translate-y-3 transition duration-500 delay-100 dark:bg-gray-800 bg-gray-100 rounded-lg flex flex-col justify-center`
  }, /* @__PURE__ */ import_react52.default.createElement("p", {
    className: `${!isHomePage(location2.pathname) ? "min-h-auto h-auto" : "min-h-[100px] h-[100px] mb-3"} text-[14px] dark:text-white text-black font-text font-semibold`
  }, '"', testimonial.review, '"'), /* @__PURE__ */ import_react52.default.createElement("p", {
    className: "text-[16px] text-gray-400 font-text font-extrabold"
  }, testimonial.name));
};
var testimonial_default = Testimonial;

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

// route:D:\projects\brightways\remix\app\routes\reviews.tsx
var loader9 = async () => {
  return (0, import_node7.json)({
    reviews: testimonialData
  });
};
var Reviews = () => {
  const { reviews } = (0, import_react54.useLoaderData)();
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    id: "reviews"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-start-1 col-span-full flex flex-col gap-10"
  }, reviews.map((review) => {
    return /* @__PURE__ */ React.createElement(testimonial_default, {
      testimonial: review,
      key: review.id,
      delay: 0.2
    });
  })));
};
var reviews_default = Reviews;

// route:D:\projects\brightways\remix\app\routes\about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  loader: () => loader10,
  meta: () => meta7
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
var import_react55 = require("@remix-run/react");
var loader10 = async () => {
  const business = await getBusiness();
  if (!business) {
    throw new Error("Couldn't fetch business");
  }
  return {
    business
  };
};
var meta7 = () => {
  return { title: "About" };
};
var AbouPage = () => {
  const { business } = (0, import_react55.useLoaderData)();
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    id: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-start-1 col-span-full"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col-reverse lg:flex-row "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "lg:flex-1"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[18px] font-text text-gray-400"
  }, business.detailedDesc)), /* @__PURE__ */ React.createElement("div", {
    className: "lg:flex-1"
  })), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", null), /* @__PURE__ */ React.createElement("div", null))));
};
var about_default = AbouPage;

// route:D:\projects\brightways\remix\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => Index3,
  loader: () => loader11
});
init_react();
var import_bi5 = require("react-icons/bi");

// app/components/home/featuresList.tsx
init_react();
var import_react59 = require("@remix-run/react");

// app/components/containers/container.tsx
init_react();
var import_react56 = __toESM(require("react"));
var Container3 = ({ children }) => {
  return /* @__PURE__ */ import_react56.default.createElement("div", {
    className: "relative h-auto px-[10vw] w-full"
  }, children);
};
var container_default3 = Container3;

// app/components/features/feature.tsx
init_react();
var import_react57 = __toESM(require("react"));
var import_framer_motion5 = require("framer-motion");
var import_react58 = require("@remix-run/react");
var Feature = ({ feature, index }) => {
  return /* @__PURE__ */ import_react57.default.createElement(import_framer_motion5.motion.div, {
    variants: horizontalAnim,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    custom: [index % 2 === 0 ? "-100%" : "100%", "0%"],
    className: `flex flex-col-reverse gap-10 lg:flex-row lg:even:flex-row-reverse items-center lg:gap-20 overflow-visible col-start-1 col-span-full mb-[50px] lg:mb-[100px]`
  }, /* @__PURE__ */ import_react57.default.createElement("section", {
    className: `flex flex-1 flex-col items-start justify-center gap-3 overflow-visible`
  }, /* @__PURE__ */ import_react57.default.createElement("p", {
    className: "text-blue text-[14px] font-bold h-auto overflow-visible"
  }, feature.title), /* @__PURE__ */ import_react57.default.createElement("h1", {
    className: "text-[32px] text-black dark:text-white font-heading leading-[44px] font-semibold  h-auto overflow-visible"
  }, feature.heading), /* @__PURE__ */ import_react57.default.createElement("p", {
    className: "text-[16px] text-gray-400 font-text font-normal leading-6"
  }, feature.desc), feature.highlights && /* @__PURE__ */ import_react57.default.createElement("ul", {
    className: "text-[16px] text-gray-400 font-text font-normal list-disc flex flex-col items-start gap-1 overflow-visible"
  }, feature.highlights.map((highlight, index2) => {
    return /* @__PURE__ */ import_react57.default.createElement("li", {
      className: "overflow-visible",
      key: index2
    }, highlight);
  })), feature.callToActions && /* @__PURE__ */ import_react57.default.createElement("section", {
    className: "flex flex-row gap-5 items-center justify-start overflow-visible w-full"
  }, feature.callToActions.map((callToAction) => {
    return /* @__PURE__ */ import_react57.default.createElement("button", {
      key: callToAction._key,
      className: `${largeBasicButton} mt-3`
    }, /* @__PURE__ */ import_react57.default.createElement(import_react58.Link, {
      to: callToAction.to
    }, callToAction.name));
  }))), /* @__PURE__ */ import_react57.default.createElement("section", {
    className: "flex flex-1 justify-center items-center"
  }, /* @__PURE__ */ import_react57.default.createElement("img", {
    src: feature.image.imageUrl,
    alt: feature.image.alt,
    className: "h-auto w-[350px]"
  })));
};
var feature_default = Feature;

// app/components/home/featuresList.tsx
var FeaturesList = () => {
  const { features } = (0, import_react59.useLoaderData)();
  return /* @__PURE__ */ React.createElement(container_default3, null, /* @__PURE__ */ React.createElement(grid_default, null, features.map((feature, index) => {
    return /* @__PURE__ */ React.createElement(feature_default, {
      key: feature._id,
      feature,
      index
    });
  })));
};
var featuresList_default = FeaturesList;

// app/components/home/landingPage.tsx
init_react();
var import_react60 = __toESM(require("react"));
var import_react61 = require("@remix-run/react");
var LandingPage = () => {
  const { business } = (0, import_react61.useLoaderData)();
  return /* @__PURE__ */ import_react60.default.createElement(container_default3, null, /* @__PURE__ */ import_react60.default.createElement(grid_default, null, /* @__PURE__ */ import_react60.default.createElement("section", {
    className: "col-start-1 col-span-full lg:col-start-1 lg:col-span-6"
  }, /* @__PURE__ */ import_react60.default.createElement("p", {
    className: "text-[42px] dark:text-white text-black font-semibold font-heading mx-auto overflow-hidden"
  }, business.tagline), /* @__PURE__ */ import_react60.default.createElement("p", {
    className: "text-xl text-gray-400 font-text mt-3 mb-5 lg:my-0"
  }, business.shortDesc), /* @__PURE__ */ import_react60.default.createElement("div", {
    className: "flex flex-col lg:flex-row gap-5 my-4 overflow-visible w-full lg:w-auto"
  }, /* @__PURE__ */ import_react60.default.createElement("button", {
    className: `${largeBasicButton} animate-bounce-in-right delay-100`
  }, "Book now"), /* @__PURE__ */ import_react60.default.createElement("button", {
    className: `${largeBasicButton} animate-bounce-in-right delay-200`
  }, /* @__PURE__ */ import_react60.default.createElement("a", {
    href: "#process"
  }, "See how it's work")))), /* @__PURE__ */ import_react60.default.createElement("section", {
    className: "row-start-1 col-start-1 col-span-full lg:col-start-7 lg:col-span-5"
  }, /* @__PURE__ */ import_react60.default.createElement("img", {
    alt: "brightways-landing-page-pic",
    className: "h-[300px] w-[300px]"
  }))));
};
var landingPage_default = LandingPage;
{
}

// app/components/home/process.tsx
init_react();
var import_react62 = require("@remix-run/react");
var import_react63 = __toESM(require("react"));
var Process = () => {
  const { process: process2 } = (0, import_react62.useLoaderData)();
  return /* @__PURE__ */ import_react63.default.createElement(infoWrapper_default, {
    heading: "How it's works",
    subHeading: "hdhhdshbsdjbasj",
    id: "process"
  }, /* @__PURE__ */ import_react63.default.createElement("div", {
    className: `flex flex-col lg:flex-row h-auto lg:h-[300px] gap-10 w-full relative lg:pt-[50px] col-start-1 col-span-full`
  }, process2.steps.map((step, index) => {
    return /* @__PURE__ */ import_react63.default.createElement(step_default, {
      step,
      key: step._key,
      delay: (index + 2) / 10
    });
  })), /* @__PURE__ */ import_react63.default.createElement("section", {
    className: "col-start-1 col-span-full overflow-visible h-auto flex justify-center items-start py-[50px] lg:py-0"
  }, /* @__PURE__ */ import_react63.default.createElement("button", {
    className: `${largeBasicButton}`
  }, /* @__PURE__ */ import_react63.default.createElement(import_react62.Link, {
    to: "/process"
  }, "Learn More"))));
};
var process_default2 = Process;

// app/components/home/testimonialsList.tsx
init_react();
var import_react64 = require("@remix-run/react");
var TestimonialsList = () => {
  const { testimonials } = (0, import_react64.useLoaderData)();
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    subHeading: testimonials.sub_heading,
    heading: testimonials.heading,
    id: "reviews"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex overflow-x-scroll justify-start flex-row w-full items-center lg:justify-center lg:py-[50px] h-auto gap-10 col-start-1 col-span-full no-scrollbar"
  }, testimonials.data.map((testimonial, index) => {
    return /* @__PURE__ */ React.createElement(testimonial_default, {
      key: Math.random() * 100,
      testimonial,
      delay: (index + 2) / 10
    });
  })), /* @__PURE__ */ React.createElement("section", {
    className: "col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px] lg:py-0"
  }, /* @__PURE__ */ React.createElement("button", {
    className: `${largeBasicButton} mb-[50px]`
  }, /* @__PURE__ */ React.createElement(import_react64.Link, {
    to: "/reviews"
  }, "More Reviews"))));
};
var testimonialsList_default = TestimonialsList;

// app/components/ui/sidebar.tsx
init_react();
var import_react65 = __toESM(require("react"));
var import_bi4 = require("react-icons/bi");
var import_bs4 = require("react-icons/bs");

// public/icons/gmail.png
var gmail_default = "/build/_assets/gmail-F2VKWGQN.png";

// public/icons/whatsapp.png
var whatsapp_default = "/build/_assets/whatsapp-QSRGVV7S.png";

// app/components/ui/sidebar.tsx
var import_ai2 = require("react-icons/ai");
var import_md2 = require("react-icons/md");
var SideBar = () => {
  const [showList, setShowList] = import_react65.default.useState(false);
  return /* @__PURE__ */ import_react65.default.createElement("div", {
    className: "group fixed right-[30px] bottom-[30px] gap-2 z-50 flex flex-col h-auto w-auto"
  }, /* @__PURE__ */ import_react65.default.createElement("section", {
    onClick: () => setShowList((prev) => !prev),
    className: `bg-slate-100 dark:bg-gray-800  h-16 w-16 flex justify-center items-center rounded-[50%] hover:scale-110 ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-400`
  }, /* @__PURE__ */ import_react65.default.createElement(import_ai2.AiOutlineArrowUp, {
    className: "h-8 w-8 text-blue",
    onClick: () => window.scroll({ top: 0, left: 0, behavior: "smooth" })
  })), /* @__PURE__ */ import_react65.default.createElement("section", {
    className: `bg-slate-100 dark:bg-gray-800 h-16 w-16 flex justify-center items-center rounded-[50%] ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-300`
  }, /* @__PURE__ */ import_react65.default.createElement("a", {
    target: "_blank",
    href: `mailto:brightwaysdryclean@gmail.com`,
    className: ""
  }, /* @__PURE__ */ import_react65.default.createElement("img", {
    className: "h-8 w-8",
    src: gmail_default
  }))), /* @__PURE__ */ import_react65.default.createElement("section", {
    className: `bg-slate-100 dark:bg-gray-800 h-16 w-16 flex justify-center items-center rounded-[50%] ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-200`
  }, /* @__PURE__ */ import_react65.default.createElement("a", {
    target: "_blank",
    href: `https://api.whatsapp.com/send?phone=919810136709&text=hi%20i%20would%20like%20to%20chat%20with%20you."`,
    className: ""
  }, /* @__PURE__ */ import_react65.default.createElement("img", {
    className: "h-8 w-8",
    src: whatsapp_default
  }))), /* @__PURE__ */ import_react65.default.createElement("section", {
    className: `bg-slate-100 dark:bg-gray-800 h-16 w-16 flex justify-center items-center rounded-[50%] ${showList ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all duration-500 delay-100`
  }, /* @__PURE__ */ import_react65.default.createElement("a", {
    target: "_blank",
    href: `tel:+919810136709`,
    className: ""
  }, /* @__PURE__ */ import_react65.default.createElement(import_bs4.BsFillTelephoneFill, {
    className: "h-8 w-8 text-blue"
  }))), /* @__PURE__ */ import_react65.default.createElement("section", {
    onClick: () => setShowList((prev) => !prev),
    className: "bg-slate-100 dark:bg-gray-800 h-16 w-16 flex justify-center items-center rounded-[50%]"
  }, showList ? /* @__PURE__ */ import_react65.default.createElement(import_md2.MdClose, {
    className: "h-8 w-8"
  }) : /* @__PURE__ */ import_react65.default.createElement(import_bi4.BiSupport, {
    className: "h-8 w-8"
  })));
};
var sidebar_default2 = SideBar;

// app/sanity/query/features.server.ts
init_react();
var getFeaturesQuery = () => {
  return `*[_type == "feature"]{
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
      } | order(number asc)`;
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

// app/components/home/servicesList.tsx
init_react();
var import_react66 = __toESM(require("react"));
var import_react67 = require("@remix-run/react");
var ServicesList = () => {
  const { services } = (0, import_react67.useLoaderData)();
  return /* @__PURE__ */ import_react66.default.createElement(infoWrapper_default, {
    heading: "Our Services",
    subHeading: "hdhhdshbsdjbasj",
    id: "services"
  }, /* @__PURE__ */ import_react66.default.createElement("section", {
    className: "flex flex-row gap-10 lg:pb-[50px] flex-wrap justify-center items-center overflow-visible col-start-1 col-span-full"
  }, services.map((service, index) => {
    return /* @__PURE__ */ import_react66.default.createElement(service_default, {
      key: service._id,
      service,
      delay: (index + 1 + 2) * 100
    });
  })), /* @__PURE__ */ import_react66.default.createElement("section", {
    className: "col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px] lg:py-0"
  }, /* @__PURE__ */ import_react66.default.createElement("button", {
    className: `${largeBasicButton}  col-start-1 col-span-full`
  }, /* @__PURE__ */ import_react66.default.createElement(import_react67.Link, {
    to: "/services"
  }, "See more services"))));
};
var servicesList_default = ServicesList;

// route:D:\projects\brightways\remix\app\routes\index.tsx
async function loader11() {
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
    className: "h-auto relative w-screen overflow-x-hidden flex flex-col items-center scroll-smooth bg-inherit gap-[50px] lg:gap-0 mt-[150px] lg:mt-[200px]"
  }, /* @__PURE__ */ React.createElement(landingPage_default, null), /* @__PURE__ */ React.createElement(featuresList_default, null), /* @__PURE__ */ React.createElement(servicesList_default, null), /* @__PURE__ */ React.createElement(process_default2, null), /* @__PURE__ */ React.createElement(testimonialsList_default, null), /* @__PURE__ */ React.createElement(sidebar_default2, null));
}
var ErrorBoundary4 = ({ error }) => {
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
  default: () => auth_default,
  meta: () => meta8
});
init_react();
var import_react68 = require("@remix-run/react");
var import_framer_motion6 = require("framer-motion");
var meta8 = () => {
  return { title: "Auth" };
};
var Auth = () => {
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    id: "auth"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "md:bg-inherit md:dark:bg-gray-800 md:bg-gray-100 md:p-10 h-fit overflow-visible col-start-1 col-span-full lg:col-start-4 lg:col-end-10"
  }, /* @__PURE__ */ React.createElement(import_framer_motion6.AnimatePresence, null, /* @__PURE__ */ React.createElement(import_react68.Outlet, null))));
};
var auth_default = Auth;

// route:D:\projects\brightways\remix\app\routes\auth\callback.tsx
var callback_exports = {};
__export(callback_exports, {
  action: () => action4,
  default: () => callback_default,
  loader: () => loader12
});
init_react();
var import_node8 = require("@remix-run/node");
var import_react69 = require("@remix-run/react");
var import_react70 = __toESM(require("react"));
var import_supabase6 = __toESM(require_supabase());
var action4 = async ({ request }) => {
  const formData = await request.formData();
  const session = await getSession(request.headers.get("Cookie"));
  let error = JSON.parse(formData.get("error"));
  if (error) {
    console.log(error);
    session.flash("error", {
      message: "Something went wrong"
    });
    return (0, import_node8.redirect)("/auth", {
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
    return (0, import_node8.redirect)("/auth", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  if (event === "SIGNED_IN") {
    session.set("access_token", supaSession == null ? void 0 : supaSession.access_token);
    console.log("inside signedin switch case");
    return (0, import_node8.redirect)("/", {
      headers: {
        "Set-Cookie": await commitSession(session, { expires: new Date(supaSession.expires_at), maxAge: supaSession.expires_in })
      }
    });
  }
  return null;
};
var loader12 = async ({ request }) => {
  const urlSearchParams = new URLSearchParams(request.url.split("?")[1]);
  const params = Object.fromEntries(urlSearchParams.entries());
  const session = await getSession(request.headers.get("Cookie"));
  if (params["error"]) {
    session.flash("error", {
      message: params["error"]
    });
    return (0, import_node8.redirect)("/auth", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  }
  return null;
};
var Callback = () => {
  const submit = (0, import_react69.useSubmit)();
  const transition = (0, import_react69.useTransition)();
  import_react70.default.useEffect(() => {
    const { data, error } = import_supabase6.supabaseClient.auth.onAuthStateChange((event, session) => {
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
  return /* @__PURE__ */ import_react70.default.createElement("div", {
    className: "w-full flex justify-center items-center overflow-visible"
  }, transition.state === "loading" && /* @__PURE__ */ import_react70.default.createElement("div", {
    className: " inline-block w-[50px] h-[50px] after:contents-[''] after:block after:h-[40px] after:w-[40px] after:m-[5px] after:rounded-[50%] after:border-2 after:border-t-blue after:animate-spin overflow-visible"
  }));
};
var callback_default = Callback;

// route:D:\projects\brightways\remix\app\routes\auth\index.tsx
var auth_exports2 = {};
__export(auth_exports2, {
  LoginMethod: () => LoginMethod,
  action: () => action5,
  default: () => auth_default2,
  loader: () => loader13
});
init_react();
var import_framer_motion7 = require("framer-motion");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_supabase8 = __toESM(require_supabase());
var import_node9 = require("@remix-run/node");
var import_react71 = require("@remix-run/react");
var LoginMethod = /* @__PURE__ */ ((LoginMethod2) => {
  LoginMethod2["GOOGLE"] = "GOOGLE";
  LoginMethod2["FACEBOOK"] = "FACEBOOK";
  LoginMethod2["EMAIL"] = "EMAIL";
  return LoginMethod2;
})(LoginMethod || {});
var loader13 = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const response = {};
  if (session.has("error")) {
    response.error = session.get("error");
  }
  return (0, import_node9.json)(response, {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};
var action5 = async ({ request }) => {
  if (request.method === "POST") {
    const form = await request.formData();
    const method = form.get("method");
    (0, import_tiny_invariant.default)(method, "method missing");
    if (method === "EMAIL" /* EMAIL */) {
      const email = form.get("email");
      (0, import_tiny_invariant.default)(typeof email === "string", "inavlid input");
      if (email.length === 0) {
        return (0, import_node9.json)({
          error: {
            message: "email required"
          }
        });
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        return (0, import_node9.json)({
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
        return (0, import_node9.json)({
          error: {
            message: error.message
          }
        });
      }
      return (0, import_node9.json)({
        success: {
          message: "Check your email"
        }
      });
    }
  }
  return null;
};
var Login = () => {
  const transition = (0, import_react71.useTransition)();
  const notification = (0, import_react71.useActionData)();
  const { error } = (0, import_react71.useLoaderData)();
  const handleGoogleLogin = () => {
    import_supabase8.supabaseClient.auth.signIn({
      provider: "google"
    }, {
      redirectTo: `${window.env.SERVER_URL}/auth/callback`
    });
  };
  const handleFacebookLogin = async () => {
    import_supabase8.supabaseClient.auth.signIn({
      provider: "facebook"
    }, {
      redirectTo: `${window.env.SERVER_URL}/auth/callback`
    });
  };
  return /* @__PURE__ */ React.createElement(import_framer_motion7.motion.section, {
    variants: fade,
    initial: "hidden",
    animate: "visible",
    className: "flex flex-col gap-10 bg-inherit overflow-visible "
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
  }, "Login"), /* @__PURE__ */ React.createElement(import_react71.Form, {
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
  }, "Login")));
};
var auth_default2 = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "87533448", "entry": { "module": "/build/entry.client-DDVWCELN.js", "imports": ["/build/_shared/chunk-MNLR4OGR.js", "/build/_shared/chunk-XV23MX66.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-HA4N3XPA.js", "imports": ["/build/_shared/chunk-DRQKQCUS.js", "/build/_shared/chunk-6YOBSU5K.js", "/build/_shared/chunk-OEFHZLDF.js", "/build/_shared/chunk-CZUHRWWS.js", "/build/_shared/chunk-5QXCMY7U.js", "/build/_shared/chunk-AUEZTORJ.js", "/build/_shared/chunk-FCHWPAX5.js", "/build/_shared/chunk-4W53IXAO.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-5UQD6HQO.js", "imports": ["/build/_shared/chunk-6TW2643V.js", "/build/_shared/chunk-YLCQDP7H.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth": { "id": "routes/auth", "parentId": "root", "path": "auth", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth-4MUODD35.js", "imports": ["/build/_shared/chunk-YLCQDP7H.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/callback": { "id": "routes/auth/callback", "parentId": "routes/auth", "path": "callback", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/callback-NQBFQ5UI.js", "imports": ["/build/_shared/chunk-ZBM7MCAA.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/index": { "id": "routes/auth/index", "parentId": "routes/auth", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/auth/index-OHB4UKJ2.js", "imports": ["/build/_shared/chunk-ZBM7MCAA.js", "/build/_shared/chunk-XZNYROYL.js", "/build/_shared/chunk-AUEZTORJ.js", "/build/_shared/chunk-AJU2FLGQ.js", "/build/_shared/chunk-4W53IXAO.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-YFOFIMZ2.js", "imports": ["/build/_shared/chunk-ZCMDBRZJ.js", "/build/_shared/chunk-AJU2FLGQ.js", "/build/_shared/chunk-YLCQDP7H.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard": { "id": "routes/dashboard", "parentId": "root", "path": "dashboard", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard-XYODMTJI.js", "imports": ["/build/_shared/chunk-AJU2FLGQ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/bookings": { "id": "routes/dashboard/bookings", "parentId": "routes/dashboard", "path": "bookings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard/bookings-I7L55CBQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/dashboard/profile": { "id": "routes/dashboard/profile", "parentId": "routes/dashboard", "path": "profile", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard/profile-WTXWJDRE.js", "imports": ["/build/_shared/chunk-OEFHZLDF.js", "/build/_shared/chunk-DX6LXIYQ.js", "/build/_shared/chunk-ZCMDBRZJ.js", "/build/_shared/chunk-AUEZTORJ.js", "/build/_shared/chunk-FCHWPAX5.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/dashboard/review": { "id": "routes/dashboard/review", "parentId": "routes/dashboard", "path": "review", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/dashboard/review-6C454YDH.js", "imports": ["/build/_shared/chunk-CZUHRWWS.js", "/build/_shared/chunk-5QXCMY7U.js", "/build/_shared/chunk-ZCMDBRZJ.js", "/build/_shared/chunk-AUEZTORJ.js", "/build/_shared/chunk-FCHWPAX5.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-CKBYTNDJ.js", "imports": ["/build/_shared/chunk-S3VP7PEW.js", "/build/_shared/chunk-XKFTFY4V.js", "/build/_shared/chunk-4D243TCN.js", "/build/_shared/chunk-XZNYROYL.js", "/build/_shared/chunk-6TW2643V.js", "/build/_shared/chunk-6AZQIGZS.js", "/build/_shared/chunk-YLCQDP7H.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/pricing": { "id": "routes/pricing", "parentId": "root", "path": "pricing", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pricing-HRC3SM2V.js", "imports": ["/build/_shared/chunk-3AO5V6RL.js", "/build/_shared/chunk-S3VP7PEW.js", "/build/_shared/chunk-6AZQIGZS.js", "/build/_shared/chunk-YLCQDP7H.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pricing/$service": { "id": "routes/pricing/$service", "parentId": "routes/pricing", "path": ":service", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/pricing/$service-5Y3FKS5L.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/pricing/index": { "id": "routes/pricing/index", "parentId": "routes/pricing", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/pricing/index-X325CHIW.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/process": { "id": "routes/process", "parentId": "root", "path": "process", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/process-XHIFTUPR.js", "imports": ["/build/_shared/chunk-XKFTFY4V.js", "/build/_shared/chunk-XZNYROYL.js", "/build/_shared/chunk-YLCQDP7H.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/reviews": { "id": "routes/reviews", "parentId": "root", "path": "reviews", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/reviews-Q6CB4DDJ.js", "imports": ["/build/_shared/chunk-4D243TCN.js", "/build/_shared/chunk-XZNYROYL.js", "/build/_shared/chunk-YLCQDP7H.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/services": { "id": "routes/services", "parentId": "root", "path": "services", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/services-M2L24WT6.js", "imports": ["/build/_shared/chunk-6AZQIGZS.js", "/build/_shared/chunk-YLCQDP7H.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/stores/index": { "id": "routes/stores/index", "parentId": "root", "path": "stores", "index": true, "caseSensitive": void 0, "module": "/build/routes/stores/index-WXY4PXQT.js", "imports": ["/build/_shared/chunk-DX6LXIYQ.js", "/build/_shared/chunk-YLCQDP7H.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-87533448.js" };

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
    index: true,
    caseSensitive: void 0,
    module: pricing_exports2
  },
  "routes/process": {
    id: "routes/process",
    parentId: "root",
    path: "process",
    index: void 0,
    caseSensitive: void 0,
    module: process_exports
  },
  "routes/reviews": {
    id: "routes/reviews",
    parentId: "root",
    path: "reviews",
    index: void 0,
    caseSensitive: void 0,
    module: reviews_exports
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
