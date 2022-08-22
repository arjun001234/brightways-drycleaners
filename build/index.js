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
var __esm = (fn, res) => function() {
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
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0), __decorateClass = (decorators, target, key, kind) => {
  for (var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target, i = decorators.length - 1, decorator; i >= 0; i--)
    (decorator = decorators[i]) && (result = (kind ? decorator(target, key, result) : decorator(result)) || result);
  return kind && result && __defProp(target, key, result), result;
};

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
var import_react20 = require("@remix-run/react"), import_react21 = __toESM(require("react"));

// app/styles/global.css
var global_default = "/build/_assets/global-TGMDWK3S.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-55DNWN2R.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-55DNWN2R.css";

// app/styles/toast.css
var toast_default = "/build/_assets/toast-5P2K5C2H.css";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LSIHLH3M.css";

// app/components/ui/layout.tsx
init_react();
var import_react18 = __toESM(require("react"));

// app/components/ui/footer.tsx
init_react();
var import_react3 = require("@remix-run/react");

// app/components/ui/logo.tsx
init_react();
var import_react2 = __toESM(require("react")), Logo = () => /* @__PURE__ */ import_react2.default.createElement("svg", {
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

// app/components/ui/footer.tsx
var Footer = () => {
  let { footer } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full bg-inherit flex justify-center items-center mx-auto px-[20px] md:px-[100px] h-auto gap-10 py-[100px] border-t-2 border-gray-400"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "w-[100%] gap-10 grid grid-cols-1 md:grid-cols-4 "
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-start gap-3 font-[14px]  dark:text-white text-black font-text"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement("p", null, footer.desc)), footer.sections.map((section) => /* @__PURE__ */ React.createElement("section", {
    key: section._key,
    className: "flex flex-col items-start gap-3"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[18px] font-normal font-heading text-primary"
  }, section.name), section.links.map((link) => /* @__PURE__ */ React.createElement("a", {
    className: "text-[18px] font-text text-black dark:text-white",
    key: link._key,
    href: link.to
  }, link.name))))));
}, footer_default = Footer;

// app/components/ui/header.tsx
init_react();
var import_react8 = __toESM(require("react")), import_bs = require("react-icons/bs"), import_bs2 = require("react-icons/bs");

// app/components/context/appContext.tsx
init_react();
var import_react4 = require("@remix-run/react"), import_react5 = __toESM(require("react"));
var AppContext = import_react5.default.createContext({
  user: null,
  profile: null,
  isAuthenticated: !1,
  setProfile: (_) => {
  },
  isMobile: !1,
  openBooking: !1,
  openBookingModal: (value) => {
  }
}), AppContextProvider = ({ children }) => {
  let { isAuthenticated: isAuthenticated2, user, profile } = (0, import_react4.useLoaderData)(), [userProfile, setUserProfile] = import_react5.default.useState(profile || null), [isMobile, setIsMobile] = import_react5.default.useState(!1), [bookingModal, setBookingModal] = import_react5.default.useState(!1), setProfile = (p) => {
    setUserProfile(p);
  }, setOpenBooking = (value) => {
    setBookingModal(value);
  };
  return import_react5.default.useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(!0) : setIsMobile(!1);
  }, []), import_react5.default.useEffect(() => {
    let handleMobile = () => {
      window.innerWidth < 768 ? setIsMobile(!0) : setIsMobile(!1);
    };
    return window.addEventListener("resize", handleMobile), () => window.removeEventListener("resize", handleMobile);
  }, []), /* @__PURE__ */ import_react5.default.createElement(AppContext.Provider, {
    value: { isAuthenticated: isAuthenticated2, user: user || null, profile: userProfile, setProfile, isMobile, openBooking: bookingModal, openBookingModal: setOpenBooking }
  }, children);
}, appContext_default = AppContextProvider;

// app/components/ui/header.tsx
var import_react9 = require("@remix-run/react"), import_ai = require("react-icons/ai");

// app/components/context/themeContext.tsx
init_react();
var import_react6 = __toESM(require("react"));
var ThemeContext = import_react6.default.createContext({
  theme: "DARK" /* DARK */,
  setAppTheme: (theme) => {
  }
}), ThemeContextProvider = ({ children }) => {
  let [theme, settheme] = import_react6.default.useState("DARK" /* DARK */), setAppTheme = (theme2) => {
    console.log(theme2), theme2 === "DARK" /* DARK */ ? (document.documentElement.classList.add("dark"), localStorage.theme = "dark", settheme("DARK" /* DARK */)) : (document.documentElement.classList.remove("dark"), localStorage.theme = "light", settheme("LIGHT" /* LIGHT */));
  };
  return import_react6.default.useEffect(() => {
    localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches ? (document.documentElement.classList.add("dark"), settheme("DARK" /* DARK */)) : (document.documentElement.classList.remove("dark"), settheme("LIGHT" /* LIGHT */));
  }, []), /* @__PURE__ */ import_react6.default.createElement(ThemeContext.Provider, {
    value: { theme, setAppTheme }
  }, children);
}, themeContext_default = ThemeContextProvider;

// app/components/buttons/schedule.button.tsx
init_react();
var import_react7 = __toESM(require("react"));

// app/utils/styles.ts
init_react();
var largeBasicButton = "h-[60px] w-full lg:w-auto flex justify-center items-center px-[30px] rounded-md lg:rounded-[30px] border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-primary hover:scale-110 transition-all duration-300", basicButton = "min-h-[40px] h-auto w-full lg:w-auto flex justify-center items-center px-[30px] rounded-md lg:rounded-[30px] border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-primary hover:scale-110 transition-all duration-300";
var lessRoundedBasicLargeButton = "h-[60px] w-full lg:w-auto flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white text-black hover:border-primary hover:scale-105 transition-all duration-300";
var lessRoundedBasicLargeButtonFullWithBg = "h-[60px] w-full bg-primary flex justify-center items-center px-[30px] rounded-md font-text font-medium text-[18px] text-white hover:scale-105 transition-all duration-300", borderGrowAnim = "after:z-[-1] after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 hover:after:opacity-100 hover:after:scale-105 after:scale-100 after:opacity-0 after:border-[3px] after:border-primary after:rounded-md after:transition-all after:duration-300";
var lessRoundedBasicInputWithBorder = "h-[60px] w-full flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white  text-black transition-all duration-300 outline-none dark:bg-gray-800 bg-gray-50 px-3  placeholder:font-text placeholder:font-semibold placeholder:text-gray-400 text-[16px] focus:border-primary", lessRoundedBasicSelectInputWithBorder = "h-[60px] w-full flex justify-center items-center px-[30px] rounded-md border-2 border-gray-400 font-text font-medium text-[18px] dark:text-white  text-black transition-all duration-300 outline-none dark:bg-gray-800 bg-gray-50 px-3  placeholder:font-text placeholder:font-semibold placeholder:text-gray-400 text-[16px] focus:border-primary";

// app/components/buttons/schedule.button.tsx
var ScheduleButton = ({ content = "Schedule a Pickup", mobileVisibity = !0, classes = basicButton }) => {
  let { openBookingModal } = import_react7.default.useContext(AppContext);
  return /* @__PURE__ */ import_react7.default.createElement("div", {
    onClick: () => openBookingModal(!0),
    className: `${classes} ${mobileVisibity ? "" : "lg:flex hidden"} `
  }, content);
}, schedule_button_default = ScheduleButton;

// app/components/ui/header.tsx
var Header = () => {
  let location2 = (0, import_react9.useLocation)(), { setAppTheme, theme } = import_react8.default.useContext(ThemeContext), [open, setOpen] = import_react8.default.useState(!1), [visible, setVisible] = import_react8.default.useState(!1), [onTop, setOnTop] = import_react8.default.useState(!0), { header } = (0, import_react9.useLoaderData)(), isCurrentPage = (path) => path === location2.pathname;
  return import_react8.default.useEffect(() => {
    let lastYScroll = window.pageYOffset, handleScroll = () => {
      let currYScroll = window.pageYOffset;
      if (currYScroll > 100) {
        let direction = currYScroll > lastYScroll ? "down" : "up";
        setVisible(direction === "down"), onTop && setOnTop(!1), lastYScroll = direction === "down" ? currYScroll - 5 : currYScroll + 5;
      } else
        setOnTop(!0);
    };
    return window.addEventListener("scroll", handleScroll), () => window.removeEventListener("scroll", handleScroll);
  }, []), /* @__PURE__ */ import_react8.default.createElement("header", {
    className: `${visible ? "-translate-y-full" : "translate-y-0"} bg-white dark:bg-gray-900 fixed top-0 left-0 right-0 h-[100px] grid grid-cols-4 z-40 overflow-visible transition-transform duration-300 lg:overflow-hidden px-[20px] lg:px-[50px]`
  }, /* @__PURE__ */ import_react8.default.createElement("section", {
    className: "col-start-1 col-span-1 flex justify-start items-center"
  }, /* @__PURE__ */ import_react8.default.createElement(import_react9.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react8.default.createElement(Logo, null))), /* @__PURE__ */ import_react8.default.createElement("section", {
    className: "col-start-2 col-span-3  flex flex-row justify-between items-center"
  }, /* @__PURE__ */ import_react8.default.createElement("ul", {
    className: `${open ? "scale-100 opacity-100 " : " scale-0 opacity-0 lg:scale-100 lg:opacity-100"} fixed top-0 left-0 right-0 h-[100vh] flex flex-col items-center justify-center transition-all duration-500 lg:static lg:flex-row lg:w-auto lg:h-auto lg:overflow-hidden lg:gap-3 lg:px-5 dark:bg-gray-900 bg-white z-30 lg:bg-inherit lg:dark:bg-inherit`
  }, /* @__PURE__ */ import_react8.default.createElement(import_ai.AiOutlineClose, {
    className: "lg:hidden dark:fill-white fill-black absolute right-[20px] top-[20px] h-[40px] w-[40px]",
    onClick: () => setOpen(!1)
  }), header.nav.map((link) => /* @__PURE__ */ import_react8.default.createElement("li", {
    className: " group py-4 w-[80%] font-text font-[18px] font-bold flex flex-col gap-1 justify-center items-center rounded-md transition-all duration-300 dark:text-white text-black lg:text-gray-400  lg:p-2 lg:w-auto lg:overflow-visible lg:font-medium",
    key: link._key
  }, /* @__PURE__ */ import_react8.default.createElement(import_react9.Link, {
    to: link.to,
    onClick: () => setOpen(!1)
  }, link.name), /* @__PURE__ */ import_react8.default.createElement("span", {
    className: `${isCurrentPage(link.to) ? "w-full" : "w-0"}  group-hover:w-full hidden lg:flex h-[4px] transition-all bg-primary duration-100`
  })))), /* @__PURE__ */ import_react8.default.createElement("section", {
    className: "gap-4 overflow-visible z-20 flex-1 flex justify-end items-center"
  }, /* @__PURE__ */ import_react8.default.createElement("div", {
    className: "relative h-[40px] w-[40px] rounded-[50px] border-gray-400  border-2  font-text font-medium flex justify-center items-center"
  }, /* @__PURE__ */ import_react8.default.createElement(import_bs2.BsLightbulb, {
    className: `dark:fill-white fill-black scale-110 left-[11px] ${theme === "DARK" /* DARK */ ? "opacity-100 absolute" : "opacity-0 hidden"}`,
    onClick: () => setAppTheme("LIGHT" /* LIGHT */)
  }), /* @__PURE__ */ import_react8.default.createElement(import_bs2.BsLightbulbFill, {
    className: `dark:fill-white fill-black scale-110 left-[11px] ${theme === "LIGHT" /* LIGHT */ ? "opacity-100 absolute" : "opacity-0 hidden"}`,
    onClick: () => setAppTheme("DARK" /* DARK */)
  })), /* @__PURE__ */ import_react8.default.createElement(schedule_button_default, {
    mobileVisibity: !1
  }))), /* @__PURE__ */ import_react8.default.createElement("section", {
    className: "flex justify-center items-center lg:hidden ml-3 z-20"
  }, /* @__PURE__ */ import_react8.default.createElement(import_bs.BsList, {
    style: { height: "40px", width: "40px" },
    className: "dark:fill-white fill-black",
    onClick: () => setOpen(!0)
  })));
}, header_default = Header;

// app/components/ui/layout.tsx
var import_react_toastify2 = require("react-toastify"), import_framer_motion = require("framer-motion"), import_react19 = require("@remix-run/react");

// app/components/ui/pageLoader.tsx
init_react();
var import_react10 = require("@remix-run/react"), PageLoader = () => {
  var _a;
  let transition = (0, import_react10.useTransition)();
  return /* @__PURE__ */ React.createElement("div", {
    className: `fixed bottom-5 ${transition.state === "loading" ? "right-5" : "right-[100%]"} flex flex-row gap-5 p-5 rounded-md dark:bg-gray-800 bg-slate-100 z-50 h-auto w-auto justify-center items-center`
  }, /* @__PURE__ */ React.createElement("div", {
    className: " inline-block w-[50px] h-[50px] after:contents-[''] after:block after:h-[40px] after:w-[40px] after:m-[5px] after:rounded-[50%] after:border-2 after:border-t-primary after:animate-spin overflow-visible"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "font-text font-medium text-[16px] dark:text-white text-black"
  }, (_a = transition.location) == null ? void 0 : _a.pathname));
}, pageLoader_default = PageLoader;

// app/components/booking/container.tsx
init_react();
var import_react16 = require("@remix-run/react"), import_react17 = __toESM(require("react")), import_react_toastify = require("react-toastify");

// app/components/containers/backdropContainer.tsx
init_react();
var import_react11 = require("@remix-run/react"), import_react12 = __toESM(require("react")), import_cg = require("react-icons/cg"), BackdropContainer = ({ children, to, handleClose, heading }) => {
  let nav = (0, import_react11.useNavigate)();
  return /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "fixed bg-[rgba(0,0,0,0.5)] top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto py-0 lg:py-[100px] h-screen no-scrollbar animate-fade-in-bck "
  }, /* @__PURE__ */ import_react12.default.createElement("section", {
    className: "w-full h-full lg:h-auto lg:w-[500px] mx-auto p-5 px-5 lg:px-10 bg-white dark:bg-slate-900 flex items-center justify-between"
  }, /* @__PURE__ */ import_react12.default.createElement("h1", {
    className: "font-heading font-bold text-[24px] text-black dark:text-white"
  }, heading), to && /* @__PURE__ */ import_react12.default.createElement(import_cg.CgClose, {
    className: "h-[30px] w-[30px] text-black dark:text-white",
    onClick: () => nav(-1)
  }), handleClose && /* @__PURE__ */ import_react12.default.createElement(import_cg.CgClose, {
    onClick: handleClose.bind(null),
    className: "h-[30px] w-[30px] text-black dark:text-white"
  })), /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "w-full h-full lg:h-auto lg:w-[500px] mx-auto p-5 pt-0 lg:pt-0 lg:p-10 bg-white dark:bg-slate-900"
  }, children));
}, backdropContainer_default = BackdropContainer;

// app/components/containers/notificationContainer.tsx
init_react();
var import_react13 = __toESM(require("react")), import_md = require("react-icons/md"), import_gi = require("react-icons/gi"), import_cg2 = require("react-icons/cg"), Notification = ({ type, message }) => {
  let containerRef = import_react13.default.useRef(null);
  return import_react13.default.useEffect(() => {
    containerRef.current && containerRef.current.scrollIntoView();
  }, [type, message, containerRef]), message ? /* @__PURE__ */ import_react13.default.createElement("section", {
    ref: containerRef,
    className: "w-full h-auto flex justify-center items-center my-5"
  }, /* @__PURE__ */ import_react13.default.createElement("div", {
    className: `w-fit max-w-md min-w-fit h-auto px-5 py-4 flex items-center justify-between border-4 rounded-md ${type === "ERROR" ? "border-error-red" : type === "SUCCESS" ? "border-success-green" : "border-blue"} gap-5`
  }, type == "ERROR" && /* @__PURE__ */ import_react13.default.createElement(import_md.MdErrorOutline, {
    className: "h-10 w-10 text-error-red"
  }), type === "SUCCESS" && /* @__PURE__ */ import_react13.default.createElement(import_gi.GiConfirmed, {
    className: "h-10 w-10 text-success-green"
  }), type === "INFO" && /* @__PURE__ */ import_react13.default.createElement(import_cg2.CgInfo, {
    className: "h-10 w-10 text-blue"
  }), /* @__PURE__ */ import_react13.default.createElement("p", {
    className: "font-text font-medium text-[18px] text-dark dark:text-white"
  }, message))) : null;
}, notificationContainer_default = Notification;

// app/components/ui/input.tsx
init_react();
var import_react14 = __toESM(require("react")), import_vsc = require("react-icons/vsc"), Input = import_react14.default.forwardRef(({ label, type, placeholder, name, error, handleChange, defaultValue = "", disabled = !1, style, info }, ref) => /* @__PURE__ */ import_react14.default.createElement("div", {
  className: "w-full flex flex-col gap-2"
}, /* @__PURE__ */ import_react14.default.createElement("section", {
  className: "flex gap-2 justify-start items-center"
}, /* @__PURE__ */ import_react14.default.createElement("label", {
  className: "font-text text-[16px] font-medium dark:text-white text-black",
  htmlFor: name
}, label), info && /* @__PURE__ */ import_react14.default.createElement("span", {
  title: info,
  className: "flex justify-center items-center"
}, /* @__PURE__ */ import_react14.default.createElement(import_vsc.VscInfo, {
  className: "h-5 w-5"
}))), /* @__PURE__ */ import_react14.default.createElement("input", {
  ref,
  className: style,
  onChange: handleChange.bind(null),
  type,
  placeholder,
  name,
  defaultValue,
  disabled
}), error && /* @__PURE__ */ import_react14.default.createElement("p", {
  className: " text-[#FF0000]"
}, error))), input_default = Input;

// app/components/ui/selectInput.tsx
init_react();
var import_react15 = __toESM(require("react")), import_vsc2 = require("react-icons/vsc"), SelectInput = import_react15.default.forwardRef(({ label, name, error, handleChange, disabled = !1, style, info, options }, ref) => /* @__PURE__ */ import_react15.default.createElement("div", {
  className: "w-full flex flex-col gap-2"
}, /* @__PURE__ */ import_react15.default.createElement("section", {
  className: "flex gap-2 justify-start items-center"
}, /* @__PURE__ */ import_react15.default.createElement("label", {
  className: "font-text text-[16px] font-medium dark:text-white text-black",
  htmlFor: name
}, label), info && /* @__PURE__ */ import_react15.default.createElement("span", {
  title: info,
  className: "flex justify-center items-center"
}, /* @__PURE__ */ import_react15.default.createElement(import_vsc2.VscInfo, {
  className: "h-5 w-5"
}))), /* @__PURE__ */ import_react15.default.createElement("select", {
  ref,
  name,
  className: `${style}`,
  disabled,
  onChange: handleChange.bind(null)
}, options.map((ops) => /* @__PURE__ */ import_react15.default.createElement("option", {
  value: ops
}, ops))), error && /* @__PURE__ */ import_react15.default.createElement("p", {
  className: " text-[#FF0000]"
}, error))), selectInput_default = SelectInput;

// app/components/booking/container.tsx
var import_react_google_recaptcha = __toESM(require("react-google-recaptcha")), Container = () => {
  let fetcher = (0, import_react16.useFetcher)(), { openBookingModal } = import_react17.default.useContext(AppContext), { theme } = import_react17.default.useContext(ThemeContext), [error, setError] = import_react17.default.useState(null), [formErrors, setFormErrors] = import_react17.default.useState({}), captchaRef = import_react17.default.useRef();
  import_react17.default.useEffect(() => {
    fetcher.data && (fetcher.data.error && setError(fetcher.data.error), fetcher.data.validationErrors && setFormErrors(fetcher.data.validationErrors), fetcher.data.success && typeof fetcher.data.success == "string" && (openBookingModal(!1), (0, import_react_toastify.toast)("Pickup scheduled successfully", {
      type: "success",
      position: "bottom-center",
      theme: theme === "DARK" /* DARK */ ? "dark" : "light"
    }), (0, import_react_toastify.toast)("We will contact you shortly", {
      type: "info",
      position: "bottom-center",
      theme: theme === "DARK" /* DARK */ ? "dark" : "light"
    })));
  }, [fetcher]);
  let handleNameChange = (e) => {
    let value = e.target.value;
    value.length == 0 ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: "name required" })) : value.length <= 3 ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: "name too short" })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: void 0 }));
  }, handleEmailChange = (e) => {
    let email = e.target.value;
    email ? email.length < 5 ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "email too small" })) : /\S+@\S+\.\S+/.test(email) ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: void 0 })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "invalid email" })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { email: "email required" }));
  }, handleContactNumberChange = (e) => {
    let contactNumber = e.target.value;
    contactNumber ? /\+?\d[\d -]{8,12}\d/.test(contactNumber) ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { contactNumber: void 0 })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), {
      contactNumber: "invalid contact number"
    })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), {
      contactNumber: "contact number required"
    }));
  }, handleAddressChange = (e) => {
    let address = e.target.value;
    address ? address.length < 10 ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { address: "address too short" })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { address: void 0 })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { address: "address required" }));
  }, handlePickUpDateChange = (e) => {
    let date = e.target.value, selectedDate = new Date(date), now = new Date();
    date ? selectedDate < now ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), {
      pickUpDate: "past date cannot be selected"
    })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { pickUpDate: void 0 })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { pickUpDate: "date required" }));
  }, handleTimeSlotChange = (e) => {
    let timeSlot = e.target.value;
    setFormErrors(timeSlot ? (prev) => __spreadProps(__spreadValues({}, prev), { timeSlot: void 0 }) : (prev) => __spreadProps(__spreadValues({}, prev), { timeSlot: "timeslot required" }));
  };
  return /* @__PURE__ */ import_react17.default.createElement(backdropContainer_default, {
    heading: "Schedule PickUp",
    handleClose: () => openBookingModal(!1)
  }, /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(notificationContainer_default, {
    type: "ERROR",
    message: error || void 0
  }), /* @__PURE__ */ import_react17.default.createElement(fetcher.Form, {
    method: "post",
    action: "/booking",
    className: "w-full h-full  gap-5 flex flex-col overflow-visible"
  }, /* @__PURE__ */ import_react17.default.createElement(input_default, {
    type: "text",
    label: "Full Name",
    name: "name",
    placeholder: "e.g. Arjun Kanojia",
    error: formErrors.name,
    handleChange: handleNameChange,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react17.default.createElement(input_default, {
    type: "text",
    label: "Email",
    name: "email",
    placeholder: "e.g. arjunkanojia@gmail.com",
    error: formErrors.email,
    handleChange: handleEmailChange,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react17.default.createElement(input_default, {
    type: "text",
    label: "Contact Number",
    name: "contactNumber",
    placeholder: "e.g. 9810136709",
    error: formErrors.contactNumber,
    handleChange: handleContactNumberChange,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react17.default.createElement(input_default, {
    type: "text",
    label: "Address",
    name: "address",
    placeholder: "e.g. Shop no. 47, Sector 21A, Faridabad, Haryana 121001",
    error: formErrors.address,
    handleChange: handleAddressChange,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react17.default.createElement(input_default, {
    type: "date",
    label: "PickUp Date",
    name: "pickUpDate",
    placeholder: "",
    error: formErrors.pickUpDate,
    handleChange: handlePickUpDateChange,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react17.default.createElement(selectInput_default, {
    label: "Time Slot",
    name: "timeSlot",
    error: formErrors.timeSlot,
    handleChange: handleTimeSlotChange,
    style: lessRoundedBasicSelectInputWithBorder,
    options: ["10am - 12pm", "12pm - 2pm", "2pm - 4pm", "4pm - 6pm"]
  }), /* @__PURE__ */ import_react17.default.createElement("section", null, /* @__PURE__ */ import_react17.default.createElement(import_react_google_recaptcha.default, {
    sitekey: window.env.RECAPTCHA_SITE_KEY,
    ref: captchaRef
  }), formErrors.gRecaptchaResponse && /* @__PURE__ */ import_react17.default.createElement("p", {
    className: "text-[#FF0000]"
  }, "Verification Failed")), /* @__PURE__ */ import_react17.default.createElement("button", {
    disabled: fetcher.state === "submitting",
    className: `${lessRoundedBasicLargeButtonFullWithBg}`
  }, fetcher.state === "submitting" ? "Booking..." : "Confirm Booking"))));
}, container_default = Container;

// app/components/ui/layout.tsx
var Layout = ({ children }) => {
  let location2 = (0, import_react19.useLocation)(), { openBooking } = import_react18.default.useContext(AppContext);
  return /* @__PURE__ */ import_react18.default.createElement("div", {
    className: "flex flex-col min-h-[calc(100vh - 64px)] h-auto min-w-screen scroll-smooth"
  }, /* @__PURE__ */ import_react18.default.createElement(header_default, {
    pathname: location2.pathname
  }), /* @__PURE__ */ import_react18.default.createElement(import_framer_motion.AnimatePresence, {
    exitBeforeEnter: !0
  }, /* @__PURE__ */ import_react18.default.createElement(import_framer_motion.motion.main, null, children)), openBooking && /* @__PURE__ */ import_react18.default.createElement(container_default, null), /* @__PURE__ */ import_react18.default.createElement(pageLoader_default, null), /* @__PURE__ */ import_react18.default.createElement(footer_default, null), /* @__PURE__ */ import_react18.default.createElement(import_react_toastify2.ToastContainer, null));
}, layout_default = Layout;

// app/root.tsx
var import_bi = require("react-icons/bi");

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

// app/root.tsx
var loader = async ({ request }) => {
  let header = await getHeader();
  if (!header)
    throw new Response("Something went wrong", { status: 500 });
  let footer = await getFooter();
  if (!footer)
    throw new Response("Something went wrong", { status: 500 });
  return {
    header,
    footer,
    isAuthenticated: !1,
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
      SERVER_URL: process.env.SERVER_URL,
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
      GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY
    }
  };
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
], meta = () => ({ title: "Brightways" }), Document = ({ children, env }) => /* @__PURE__ */ import_react21.default.createElement("html", {
  lang: "en"
}, /* @__PURE__ */ import_react21.default.createElement("head", null, /* @__PURE__ */ import_react21.default.createElement("meta", {
  charSet: "utf-8"
}), /* @__PURE__ */ import_react21.default.createElement("meta", {
  name: "viewport",
  content: "width=device-width,initial-scale=1"
}), /* @__PURE__ */ import_react21.default.createElement(import_react20.Meta, null), /* @__PURE__ */ import_react21.default.createElement(import_react20.Links, null)), /* @__PURE__ */ import_react21.default.createElement("body", {
  className: "bg-white dark:bg-gray-900"
}, /* @__PURE__ */ import_react21.default.createElement(themeContext_default, null, children), /* @__PURE__ */ import_react21.default.createElement(import_react20.ScrollRestoration, null), env && /* @__PURE__ */ import_react21.default.createElement("script", {
  dangerouslySetInnerHTML: {
    __html: `window.env = ${JSON.stringify(env)}`
  }
}), /* @__PURE__ */ import_react21.default.createElement(import_react20.Scripts, null), /* @__PURE__ */ import_react21.default.createElement(import_react20.LiveReload, null)));
function App() {
  let { env } = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ import_react21.default.createElement(Document, {
    env
  }, /* @__PURE__ */ import_react21.default.createElement(appContext_default, null, /* @__PURE__ */ import_react21.default.createElement(layout_default, null, /* @__PURE__ */ import_react21.default.createElement(import_react20.Outlet, null))));
}
var CatchBoundary = () => {
  let error = (0, import_react20.useCatch)();
  return /* @__PURE__ */ import_react21.default.createElement(Document, null, /* @__PURE__ */ import_react21.default.createElement("div", {
    className: " absolute right-0 lg:right-[calc(50%-200px)] top-[calc(50%-200px)] md:border-2 md:border-gray-400 p-10 flex flex-col gap-5 col-start-1 col-span-full lg:col-start-4 lg:col-end-10 h-[400px] w-full lg:w-[400px]"
  }, /* @__PURE__ */ import_react21.default.createElement("h1", {
    className: " font-heading font-bold text-[50px] lg:text-[100px] dark:text-white text-black text-center overflow-visible"
  }, error.status), /* @__PURE__ */ import_react21.default.createElement("p", {
    className: " font-text font-medium text-center text-[18px] dark:text-white text-black"
  }, error.data), /* @__PURE__ */ import_react21.default.createElement("button", {
    className: `${lessRoundedBasicLargeButton} overflow-visible`
  }, /* @__PURE__ */ import_react21.default.createElement(import_react20.Link, {
    to: "/"
  }, "Back Home"))));
}, ErrorBoundary = ({ error }) => (console.log(error), /* @__PURE__ */ import_react21.default.createElement(Document, null, /* @__PURE__ */ import_react21.default.createElement("section", {
  className: "min-h-screen min-w-full flex bg-blue justify-center items-center"
}, /* @__PURE__ */ import_react21.default.createElement("div", {
  className: "p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center"
}, /* @__PURE__ */ import_react21.default.createElement(import_bi.BiError, {
  className: "fill-error-red h-[100px] w-[100px]"
}), /* @__PURE__ */ import_react21.default.createElement("h1", {
  className: "text-red font-heading font-extrabold text-[48px]"
}, "Sorry"), /* @__PURE__ */ import_react21.default.createElement("p", {
  className: "font-text text-[18px] mb-3"
}, "Something went wrong!"), /* @__PURE__ */ import_react21.default.createElement("button", {
  className: "p-3 rounded-md bg-blue text-white font-text text-[18px]",
  onClick: () => location.reload()
}, "Try Again")))));

// app/routes/wbh/email.booking.tsx
var email_booking_exports = {};
__export(email_booking_exports, {
  action: () => action
});
init_react();
var import_node = require("@remix-run/node"), action = () => (0, import_node.json)({
  message: "Booking ajgvsjsj"
});

// app/routes/privacyPolicy.tsx
var privacyPolicy_exports = {};
__export(privacyPolicy_exports, {
  default: () => privacyPolicy_default
});
init_react();
var import_react26 = __toESM(require("react"));

// app/components/wrappers/infoWrapper.tsx
init_react();
var import_react24 = require("@remix-run/react"), import_react25 = __toESM(require("react"));

// app/utils/helpers/IsHomePage.ts
init_react();
var isHomePage = (path) => path === "/";

// app/components/containers/grid.tsx
init_react();
var import_react22 = __toESM(require("react")), import_framer_motion2 = require("framer-motion"), Grid = ({ children }) => /* @__PURE__ */ import_react22.default.createElement(import_framer_motion2.motion.div, {
  className: "grid grid-cols-4 gap-x-4 md:grid-col-8 lg:grid-cols-12 lg:gap-x-6 overflow-visible h-auto w-full"
}, children), grid_default = Grid;

// app/components/ui/info.tsx
init_react();
var import_react23 = __toESM(require("react")), Info = ({ heading, subHeading, color = "black", darkColor = "white", barColor = "primary" }) => /* @__PURE__ */ import_react23.default.createElement("section", {
  className: "flex flex-col items-center"
}, /* @__PURE__ */ import_react23.default.createElement("h1", {
  className: `font-heading text-[32px] text-${color} dark:text-${darkColor} text-center font-bold`
}, heading), /* @__PURE__ */ import_react23.default.createElement("div", {
  className: `bg-${barColor} h-[6px] w-10 rounded-sm`
}), subHeading && /* @__PURE__ */ import_react23.default.createElement("p", {
  className: "mt-5 font-text text-[16px] text-gray-400 text-center"
}, subHeading)), info_default = Info;

// app/components/wrappers/infoWrapper.tsx
var InfoWrapper = ({ children, heading, subHeading, id, isGrid = !0 }) => {
  let location2 = (0, import_react24.useLocation)();
  return /* @__PURE__ */ import_react25.default.createElement("div", {
    id,
    className: ` relative flex bg-inherit flex-col items-center gap-[50px] lg:gap-[70px] px-[10vw] lg:min-h-screen h-auto w-full justify-center ${isHomePage(location2.pathname) ? "lg:py-[50px]" : "py-[100px] lg:pb-[100px] lg:pt-[150px]"}`
  }, heading && /* @__PURE__ */ import_react25.default.createElement(info_default, {
    heading,
    subHeading
  }), isGrid && /* @__PURE__ */ import_react25.default.createElement(grid_default, null, children), !isGrid && children);
}, infoWrapper_default = InfoWrapper;

// app/routes/privacyPolicy.tsx
var PrivacyPolicy = () => /* @__PURE__ */ import_react26.default.createElement(infoWrapper_default, {
  id: "privacy-policy"
}, /* @__PURE__ */ import_react26.default.createElement("div", {
  className: "col-start-1 col-span-full overflow-x-visible"
}, /* @__PURE__ */ import_react26.default.createElement("h1", {
  className: "text-primary font-heading text-[24px] font-bold"
}, "Privacy Policy for Brightways drycleaners"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-3 text-[16px] font-medium"
}, "At Brightways drycleaners, accessible from", /* @__PURE__ */ import_react26.default.createElement("b", {
  className: "text-blue"
}, " https://www.brightwaysdrycleaners.com/"), ", one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Brightways drycleaners and how we use it."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Brightways drycleaners. This policy is not applicable to any information collected offline or via channels other than this website."), /* @__PURE__ */ import_react26.default.createElement("h2", {
  className: "text-black dark:text-white font-text mt-4 text-[18px] font-semibold"
}, "Consent"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "By using our website, you hereby consent to our Privacy Policy and agree to its terms."), /* @__PURE__ */ import_react26.default.createElement("h2", {
  className: "text-black dark:text-white font-text mt-4 text-[18px] font-semibold"
}, "Information we collect"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number."), /* @__PURE__ */ import_react26.default.createElement("h2", {
  className: "text-black dark:text-white font-text mt-4 text-[18px] font-semibold"
}, "How we use your information"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "We use the information we collect in various ways, including to:"), /* @__PURE__ */ import_react26.default.createElement("ul", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium flex flex-col gap-1 overflow-x-visible list-decimal"
}, /* @__PURE__ */ import_react26.default.createElement("li", null, "Provide, operate, and maintain our website"), /* @__PURE__ */ import_react26.default.createElement("li", null, "Improve, personalize, and expand our website"), /* @__PURE__ */ import_react26.default.createElement("li", null, "Understand and analyze how you use our website"), /* @__PURE__ */ import_react26.default.createElement("li", null, "Develop new products, services, features, and functionality"), /* @__PURE__ */ import_react26.default.createElement("li", null, "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes"), /* @__PURE__ */ import_react26.default.createElement("li", null, "Send you emails"), /* @__PURE__ */ import_react26.default.createElement("li", null, "Find and prevent fraud")), /* @__PURE__ */ import_react26.default.createElement("h2", {
  className: "text-black dark:text-white font-text mt-4 text-[18px] font-semibold"
}, "Log Files"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Brightways drycleaners follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."), /* @__PURE__ */ import_react26.default.createElement("h2", {
  className: "text-black dark:text-white font-text mt-4 text-[18px] font-semibold"
}, "Google DoubleClick DART Cookie"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL \u2013", " ", /* @__PURE__ */ import_react26.default.createElement("a", {
  href: "https://policies.google.com/technologies/ads"
}, "https://policies.google.com/technologies/ads")), /* @__PURE__ */ import_react26.default.createElement("h2", {
  className: "text-black dark:text-white font-text mt-4 text-[18px] font-semibold"
}, "Advertising Partners Privacy Policies"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "You may consult this list to find the Privacy Policy for each of the advertising partners of Brightways drycleaners."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Brightways drycleaners, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Note that Brightways drycleaners has no access to or control over these cookies that are used by third-party advertisers."), /* @__PURE__ */ import_react26.default.createElement("h2", {
  className: "text-black dark:text-white font-text mt-4 text-[18px] font-semibold"
}, "Third Party Privacy Policies"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Brightways drycleaners's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.", " "), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."), /* @__PURE__ */ import_react26.default.createElement("h2", {
  className: "text-black dark:text-white font-text mt-4 text-[18px] font-semibold"
}, "CCPA Privacy Rights (Do Not Sell My Personal Information)"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Under the CCPA, among other rights, California consumers have the right to:"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Request that a business delete any personal data about the consumer that a business has collected."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Request that a business that sells a consumer's personal data, not sell the consumer's personal data."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."), /* @__PURE__ */ import_react26.default.createElement("h2", {
  className: "text-black dark:text-white font-text mt-4 text-[18px] font-semibold"
}, "GDPR Data Protection Rights"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "The right to access \u2013 You have the right to request copies of your personal data. We may charge you a small fee for this service."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "The right to rectification \u2013 You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "The right to erasure \u2013 You have the right to request that we erase your personal data, under certain conditions."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "The right to restrict processing \u2013 You have the right to request that we restrict the processing of your personal data, under certain conditions."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "The right to object to processing \u2013 You have the right to object to our processing of your personal data, under certain conditions."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "The right to data portability \u2013 You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."), /* @__PURE__ */ import_react26.default.createElement("h2", {
  className: "text-black dark:text-white font-text mt-4 text-[18px] font-semibold"
}, "Children's Information"), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."), /* @__PURE__ */ import_react26.default.createElement("p", {
  className: "text-gray-400 font-text mt-2 text-[16px] font-medium"
}, "Brightways drycleaners does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."))), privacyPolicy_default = PrivacyPolicy;

// app/routes/stores/index.tsx
var stores_exports = {};
__export(stores_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => stores_default,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_react30 = __toESM(require("react")), import_bi3 = require("react-icons/bi");

// app/components/stores/container.tsx
init_react();
var import_react29 = require("@remix-run/react");

// app/components/map/map.tsx
init_react();

// public/icons/logo.png
var logo_default = "/build/_assets/logo-GRLVVETM.png";

// app/components/map/map.tsx
var import_react27 = __toESM(require("react")), import_api = require("@react-google-maps/api");
function Map() {
  let offices = [
    {
      id: "1",
      field_address: {
        locality: "NIT 1",
        postal_code: "121001",
        address_line1: "1J, 16, Aryasamaj Rd, Block J, New Industrial Twp 1, New Industrial Twp, Faridabad, Haryana",
        address_line2: "",
        latitude: 28.387108274505763,
        longitude: 77.30340686719823
      }
    },
    {
      id: "2",
      field_address: {
        locality: "Sector 21",
        postal_code: "121001",
        address_line1: "Shop no. 47,Sec 21A Market, Sector 21A, Faridabad, Haryana",
        address_line2: "",
        latitude: 28.422634416423737,
        longitude: 77.29688708219304
      }
    }
  ], mapRef = import_react27.default.useRef(null), [selectedOffice, setSelectedOffice] = import_react27.default.useState(null), { isLoaded } = (0, import_api.useJsApiLoader)({
    id: "google-map-script",
    googleMapsApiKey: window.env.GOOGLE_MAP_API_KEY
  }), onLoad = import_react27.default.useCallback((mapInstance) => {
    let bounds = new google.maps.LatLngBounds();
    offices.forEach((office) => {
      bounds.extend(new google.maps.LatLng(office.field_address.latitude, office.field_address.longitude));
    }), mapRef.current = mapInstance, mapInstance.fitBounds(bounds);
  }, [offices]), onClickMarker = (officeId) => {
    setSelectedOffice(offices.find((office) => office.id === officeId));
  };
  return /* @__PURE__ */ import_react27.default.createElement("div", {
    className: "h-[400px] w-full"
  }, isLoaded && /* @__PURE__ */ import_react27.default.createElement(import_react27.default.Fragment, null, /* @__PURE__ */ import_react27.default.createElement(import_api.GoogleMap, {
    mapContainerClassName: "h-full w-full rounded-lg border-primary",
    onLoad
  }, offices.map((office) => /* @__PURE__ */ import_react27.default.createElement(import_api.Marker, {
    key: office.id,
    onClick: () => onClickMarker(office.id),
    icon: logo_default,
    position: {
      lat: office.field_address.latitude,
      lng: office.field_address.longitude
    }
  })), selectedOffice && /* @__PURE__ */ import_react27.default.createElement(import_api.InfoWindow, {
    position: {
      lat: selectedOffice.field_address.latitude,
      lng: selectedOffice.field_address.longitude
    },
    onCloseClick: () => setSelectedOffice(null)
  }, /* @__PURE__ */ import_react27.default.createElement("p", null, selectedOffice.field_address.address_line1, " ", selectedOffice.field_address.address_line2, " -", " ", selectedOffice.field_address.postal_code, " ", selectedOffice.field_address.locality)))));
}

// app/components/stores/store.tsx
init_react();
var import_react28 = __toESM(require("react")), import_fa = require("react-icons/fa"), import_bi2 = require("react-icons/bi"), import_fi = require("react-icons/fi");
var Store = ({ store }) => /* @__PURE__ */ import_react28.default.createElement("div", {
  className: "relative flex flex-col h-auto dark:bg-gray-800 bg-gray-50 border-[3px] p-5 gap-2 rounded-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-visible odd:animate-bounce-in-left even:animate-bounce-in-right"
}, /* @__PURE__ */ import_react28.default.createElement("h1", {
  className: "font-heading font-semibold text-black dark:text-white text-[24px] mb-5"
}, store.name), /* @__PURE__ */ import_react28.default.createElement("section", {
  className: "flex items-center text-black dark:text-white gap-2 font-text text-[14px]"
}, /* @__PURE__ */ import_react28.default.createElement(import_fa.FaRegAddressBook, null), /* @__PURE__ */ import_react28.default.createElement("p", null, store.address)), /* @__PURE__ */ import_react28.default.createElement("section", {
  className: "flex items-center text-black dark:text-white gap-2 font-text text-[14px]"
}, /* @__PURE__ */ import_react28.default.createElement(import_fa.FaRegCalendarAlt, null), /* @__PURE__ */ import_react28.default.createElement("p", null, store.openOn)), /* @__PURE__ */ import_react28.default.createElement("section", {
  className: "flex items-center text-black dark:text-white gap-2 font-text text-[14px]"
}, /* @__PURE__ */ import_react28.default.createElement(import_bi2.BiTime, null), /* @__PURE__ */ import_react28.default.createElement("p", null, store.timings)), /* @__PURE__ */ import_react28.default.createElement("section", {
  className: "flex items-center text-black dark:text-white gap-2 font-text text-[14px]"
}, /* @__PURE__ */ import_react28.default.createElement(import_fi.FiPhoneCall, null), /* @__PURE__ */ import_react28.default.createElement("p", null, store.contactNumber)), /* @__PURE__ */ import_react28.default.createElement("section", {
  className: "flex flex-col md:flex-row items-center gap-5 font-text text-[14px] mt-5 overflow-visible"
}, /* @__PURE__ */ import_react28.default.createElement("button", {
  className: `${basicButton}`
}, /* @__PURE__ */ import_react28.default.createElement("a", {
  href: store.direction,
  target: "_blank"
}, "Get Direction")), /* @__PURE__ */ import_react28.default.createElement("button", {
  className: `${basicButton}`
}, /* @__PURE__ */ import_react28.default.createElement("a", {
  href: `tel:+91${store.contactNumber}`
}, "Call")))), store_default = Store;

// app/components/stores/container.tsx
var Container2 = () => {
  let { stores } = (0, import_react29.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center gap-5 items-center col-start-1 col-span-full"
  }, /* @__PURE__ */ React.createElement(Map, null), /* @__PURE__ */ React.createElement("section", {
    className: "w-[80%] grid grid-cols-1 lg:grid-cols-2 gap-10 py-5"
  }, stores.map((store, index) => /* @__PURE__ */ React.createElement(store_default, {
    key: store._id,
    store,
    delay: (index + 1) * 100
  }))));
}, container_default2 = Container2;

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
}, meta2 = () => ({ title: "Stores" }), Index = () => /* @__PURE__ */ import_react30.default.createElement(infoWrapper_default, {
  id: "stores"
}, /* @__PURE__ */ import_react30.default.createElement(container_default2, null)), ErrorBoundary2 = ({ error }) => (console.log(error), /* @__PURE__ */ import_react30.default.createElement("section", {
  className: "min-h-screen min-w-full flex bg-blue justify-center items-center"
}, /* @__PURE__ */ import_react30.default.createElement("div", {
  className: "p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center"
}, /* @__PURE__ */ import_react30.default.createElement(import_bi3.BiError, {
  className: "fill-error-red h-[100px] w-[100px]"
}), /* @__PURE__ */ import_react30.default.createElement("h1", {
  className: "text-red font-heading font-extrabold text-[48px]"
}, "Sorry"), /* @__PURE__ */ import_react30.default.createElement("p", {
  className: "font-text text-[18px] mb-3"
}, "Something went wrong!"), /* @__PURE__ */ import_react30.default.createElement("button", {
  className: "p-3 rounded-md bg-blue text-white font-text text-[18px]",
  onClick: () => location.reload()
}, "Try Again")))), stores_default = Index;

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => dashboard_default,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_node3 = require("@remix-run/node"), import_react34 = require("@remix-run/react");

// app/components/wrappers/dashboardWrapper.tsx
init_react();
var import_react33 = __toESM(require("react"));

// app/components/profile/sidebar.tsx
init_react();
var import_react31 = require("@remix-run/react"), import_react32 = __toESM(require("react")), import_io = require("react-icons/io"), capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1), ProfileSidebar = () => {
  let matches = (0, import_react31.useMatches)(), [open, setOpen] = import_react32.default.useState(!1);
  return /* @__PURE__ */ import_react32.default.createElement("div", {
    className: "w-full md:w-[200px] px-[20px] md:px-[50px] absolute md:static dark:bg-gray-900 bg-white"
  }, /* @__PURE__ */ import_react32.default.createElement("section", {
    className: "md:hidden flex justify-between items-center w-full h-[50px]",
    onClick: () => setOpen((prev) => !prev)
  }, /* @__PURE__ */ import_react32.default.createElement("p", {
    className: " font-text font-medium text-[18px] dark:text-white text-black"
  }, capitalizeFirstLetter(matches[2].id.split("/")[2])), open ? /* @__PURE__ */ import_react32.default.createElement(import_io.IoMdArrowDropup, {
    className: "w-7 h-7 dark:fill-white fill-black"
  }) : /* @__PURE__ */ import_react32.default.createElement(import_io.IoMdArrowDropdown, {
    className: "w-10 h-10 dark:fill-white fill-black"
  })), /* @__PURE__ */ import_react32.default.createElement("ul", {
    className: `w-full md:h-full flex flex-col items-start bg-inherit ${open ? "h-full" : "h-0"}`
  }, /* @__PURE__ */ import_react32.default.createElement("li", {
    onClick: () => setOpen(!1),
    className: `h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length - 1].id.includes("/profile") ? "text-blue" : "dark:text-white text-black"}`
  }, /* @__PURE__ */ import_react32.default.createElement(import_react31.Link, {
    to: "/dashboard/profile"
  }, "Profile")), /* @__PURE__ */ import_react32.default.createElement("li", {
    onClick: () => setOpen(!1),
    className: `h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length - 1].id.includes("/bookings") ? "text-blue" : "dark:text-white text-black"}`
  }, /* @__PURE__ */ import_react32.default.createElement(import_react31.Link, {
    to: "/dashboard/bookings"
  }, "Bookings")), /* @__PURE__ */ import_react32.default.createElement("li", {
    onClick: () => setOpen(!1),
    className: `h-[60px] flex justify-center items-center bg-inherit  font-text font-medium text-[18px] ${matches[matches.length - 1].id.includes("/review") ? "text-blue" : "dark:text-white text-black"}`
  }, /* @__PURE__ */ import_react32.default.createElement(import_react31.Link, {
    to: "/dashboard/review"
  }, "Review"))));
}, sidebar_default = ProfileSidebar;

// app/components/wrappers/dashboardWrapper.tsx
var DashBoardWrapper = ({ children }) => /* @__PURE__ */ import_react33.default.createElement("div", {
  className: "flex h-screen w-full bg-inherit pt-[100px] relative"
}, /* @__PURE__ */ import_react33.default.createElement(sidebar_default, null), /* @__PURE__ */ import_react33.default.createElement("section", {
  className: "p-[20px] pt-[100px] md:pt-10 md:p-10 flex-1 flex-col dark:bg-gray-800 bg-gray-100 overflow-scroll no-scrollbar"
}, children)), dashboardWrapper_default = DashBoardWrapper;

// app/supabase/session.ts
init_react();
var import_node2 = require("@remix-run/node");
if (!process.env.SESSION_SECRET)
  throw new Error("SESSION_SECRET not provided");
var { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)({
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

// app/routes/dashboard.tsx
var loader3 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie"));
  if (!session)
    return (0, import_node3.redirect)("/auth");
  let token = session.get("access_token");
  if (!token)
    return (0, import_node3.redirect)("/auth");
  let { error } = await supabaseAdmin.auth.api.getUser(token);
  return (error == null ? void 0 : error.status) === 404 ? (0, import_node3.redirect)("/auth", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  }) : null;
}, meta3 = () => ({ title: "Dashboard" }), Dashboard = () => /* @__PURE__ */ React.createElement(dashboardWrapper_default, null, /* @__PURE__ */ React.createElement(import_react34.Outlet, null)), dashboard_default = Dashboard;

// app/routes/dashboard/bookings.tsx
var bookings_exports = {};
__export(bookings_exports, {
  default: () => bookings_default
});
init_react();
var import_react35 = __toESM(require("react")), Bookings = () => /* @__PURE__ */ import_react35.default.createElement("div", {
  className: "h-full w-full flex justify-center items-center"
}, /* @__PURE__ */ import_react35.default.createElement("h1", {
  className: "font-heading font-medium dark:text-white text-black text-[24px]"
}, "Coming Soon")), bookings_default = Bookings;

// app/routes/dashboard/profile.tsx
var profile_exports = {};
__export(profile_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action2,
  default: () => profile_default
});
init_react();
var import_node4 = require("@remix-run/node"), import_react36 = require("@remix-run/react"), import_react37 = __toESM(require("react"));
var import_fa2 = require("react-icons/fa");

// app/utils/helpers/createProfile.ts
init_react();
var createProfile = (formData) => {
  let name = formData.get("name"), contactNumber = formData.get("contactNumber");
  return name ? contactNumber ? name.length < 4 ? [null, {
    name: "name is too short"
  }] : /\+?\d[\d -]{8,12}\d/.test(contactNumber) ? [{
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
var action2 = async ({ request }) => {
  let formData = await request.formData(), event = formData.get("event"), session = await getSession(request.headers.get("Cookie")), token = session.get("access_token");
  if (event === "SIGN_OUT" && token) {
    let { error } = await supabaseAdmin.auth.api.signOut(token);
    if (error)
      console.log(error);
    else
      return session.flash("error", {
        message: "Logout out successfully"
      }), (0, import_node4.redirect)("/auth", {
        headers: {
          "Set-Cookie": await destroySession(session)
        }
      });
  }
  if (event === "UPDATE_USER") {
    let [profile, error] = createProfile(formData);
    if (error)
      return (0, import_node4.json)({
        validationError: error
      });
    let profileResponse = await supabaseAdmin.from("profiles").update({ name: profile == null ? void 0 : profile.name, contactNumber: profile == null ? void 0 : profile.contactNumber });
    return profileResponse.error ? (console.log(profileResponse.error), (0, import_node4.json)({
      error: profileResponse.error.message
    })) : (0, import_node4.json)({
      success: profileResponse.data
    });
  }
  return null;
}, ProfilePage = () => {
  let navigate = (0, import_react36.useNavigate)(), data = (0, import_react36.useActionData)(), tranistion = (0, import_react36.useTransition)(), { user, isAuthenticated: isAuthenticated2, setProfile, profile } = import_react37.default.useContext(AppContext), [validationError, setValidationError] = import_react37.default.useState((data == null ? void 0 : data.validationErrors) ? data.validationErrors : {}), nameRef = import_react37.default.useRef(null), contactNumber = import_react37.default.useRef(null);
  if (import_react37.default.useEffect(() => {
    (data == null ? void 0 : data.success) && setProfile(data.success);
  }, []), !isAuthenticated2 || !user)
    return navigate("/login"), null;
  let handleNameChange = (e) => {
    e.target.value.length < 4 ? setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { name: "name is too short" })) : setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { name: void 0 }));
  }, handleContactNumberChange = (e) => {
    let value = e.target.value;
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value) ? setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { contactNumber: void 0 })) : setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { contactNumber: "inavlid contact number" }));
  }, handleDiscard = () => {
    setValidationError({}), nameRef.current && (nameRef.current.value = ""), contactNumber.current && (contactNumber.current.value = "");
  };
  return /* @__PURE__ */ import_react37.default.createElement("div", {
    className: "flex flex-col gap-20 overflow-visible"
  }, /* @__PURE__ */ import_react37.default.createElement("section", {
    className: "flex flex-col gap-10 overflow-visible"
  }, /* @__PURE__ */ import_react37.default.createElement("div", {
    className: "flex justify-start items-center gap-3"
  }, /* @__PURE__ */ import_react37.default.createElement(import_fa2.FaRegUser, {
    className: "dark:fill-white fill-black h-10 w-10"
  }), /* @__PURE__ */ import_react37.default.createElement("h1", {
    className: " font-heading font-medium dark:text-white text-black text-[24px]"
  }, "Details")), /* @__PURE__ */ import_react37.default.createElement(import_react36.Form, {
    method: "post",
    className: "flex flex-col gap-5 items-start overflow-visible"
  }, /* @__PURE__ */ import_react37.default.createElement(input_default, {
    type: "text",
    name: "name",
    ref: nameRef,
    label: "Name",
    placeholder: "Your Name",
    error: validationError.name,
    handleChange: handleNameChange,
    defaultValue: profile == null ? void 0 : profile.name,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react37.default.createElement(input_default, {
    defaultValue: user.email,
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "Your Email",
    handleChange: () => {
    },
    error: void 0,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react37.default.createElement(input_default, {
    defaultValue: (profile == null ? void 0 : profile.contactNumber) ? profile.contactNumber : "",
    type: "text",
    name: "contactNumber",
    ref: contactNumber,
    label: "Contact Number",
    placeholder: "Your contact number",
    handleChange: handleContactNumberChange,
    error: validationError.contactNumber,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react37.default.createElement("input", {
    className: "hidden",
    name: "event",
    defaultValue: "UPDATE_USER"
  }), /* @__PURE__ */ import_react37.default.createElement("section", {
    className: "my-3 flex flex-row items-center justify-start gap-5 overflow-visible"
  }, /* @__PURE__ */ import_react37.default.createElement("button", {
    disabled: tranistion.state === "submitting" && Object.keys(validationError).length > 0,
    className: `${lessRoundedBasicLargeButton}`
  }, "Save"), /* @__PURE__ */ import_react37.default.createElement("button", {
    type: "button",
    onClick: handleDiscard.bind(null),
    className: `${lessRoundedBasicLargeButton}`
  }, "Discard")))), /* @__PURE__ */ import_react37.default.createElement("section", {
    className: "flex flex-col md:flex-row justify-center items-center gap-5 mt-[50px] w-full overflow-visible"
  }, /* @__PURE__ */ import_react37.default.createElement(import_react36.Form, {
    method: "post",
    className: "w-full md:w-auto overflow-visible"
  }, /* @__PURE__ */ import_react37.default.createElement("input", {
    className: "hidden",
    name: "event",
    defaultValue: "SIGN_OUT"
  }), /* @__PURE__ */ import_react37.default.createElement("button", {
    className: `${lessRoundedBasicLargeButton}`,
    type: "submit"
  }, "Logout")), /* @__PURE__ */ import_react37.default.createElement(import_react36.Form, {
    method: "post",
    action: "/profile?index",
    className: "w-full md:w-auto overflow-visible"
  }, /* @__PURE__ */ import_react37.default.createElement("input", {
    className: "hidden",
    name: "event",
    defaultValue: "DELETE_USER"
  }), /* @__PURE__ */ import_react37.default.createElement("button", {
    className: `${lessRoundedBasicLargeButton}`,
    type: "submit"
  }, "Delete Account"))));
}, ErrorBoundary3 = ({ error }) => /* @__PURE__ */ import_react37.default.createElement("div", null, /* @__PURE__ */ import_react37.default.createElement("h1", null, "Something went wrong")), profile_default = ProfilePage;

// app/routes/dashboard/review.tsx
var review_exports = {};
__export(review_exports, {
  action: () => action3,
  default: () => review_default,
  loader: () => loader4
});
init_react();
var import_node5 = require("@remix-run/node"), import_react38 = require("@remix-run/react"), import_react39 = __toESM(require("react")), import_bs3 = require("react-icons/bs"), import_react_toastify3 = require("react-toastify");

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
var action3 = async ({ request }) => {
  let formData = await request.formData(), [review, actionData] = createReview(formData);
  if (actionData)
    return (0, import_node5.json)({
      validationactionData: actionData
    });
  if (review) {
    let [user, error] = await isAuthenticated(request, !0);
    if (error)
      return console.log(error), (0, import_node5.json)({
        error: error.message
      });
    if (user) {
      let reviewResponse = await supabaseAdmin.from("reviews").insert({ profile_id: user == null ? void 0 : user.id, review: review.review, rating: review.rating });
      return reviewResponse.error ? (console.log(reviewResponse, error), (0, import_node5.json)({
        error: reviewResponse.error.message
      })) : (0, import_node5.json)({
        success: reviewResponse.data
      });
    }
  }
  return (0, import_node5.json)({
    error: "something went wrong"
  });
}, loader4 = async ({ request }) => {
  let [user, error] = await isAuthenticated(request, !0);
  if (error)
    return console.log(error), (0, import_node5.json)({
      error: error.message
    });
  let reviewsResponse = await supabaseAdmin.from("reviews").select("*").eq("profile_id", user == null ? void 0 : user.id);
  return reviewsResponse.error ? (console.log(reviewsResponse.error), (0, import_node5.json)({
    error: reviewsResponse.error.message
  })) : (0, import_node5.json)({
    reviews: reviewsResponse.data
  });
}, Review = () => {
  let transition = (0, import_react38.useTransition)(), data = (0, import_react38.useLoaderData)(), actionData = (0, import_react38.useActionData)(), [validationError, setValidationError] = import_react39.default.useState((actionData == null ? void 0 : actionData.validationErrors) ? actionData.validationErrors : {}), reviewRef = import_react39.default.useRef(null), ratingRef = import_react39.default.useRef(null), handleReviewChange = (e) => {
    let value = e.target.value;
    value.length === 0 ? setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { review: "review required" })) : value.length < 5 && setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { review: "review too short" }));
  }, handleRatingChange = (e) => {
    let value = e.target.value;
    value.length > 1 ? setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { rating: "invalid input" })) : /[+]?([0-4]*\.[0-9]+|[0-5])/.test(value) || setValidationError((prev) => __spreadProps(__spreadValues({}, prev), { rating: "value should be between 0 - 5" }));
  }, handleDiscard = () => {
    setValidationError({}), ratingRef.current && (ratingRef.current.value = ""), reviewRef.current && (reviewRef.current.value = "");
  };
  return import_react39.default.useEffect(() => {
    (actionData == null ? void 0 : actionData.success) && import_react_toastify3.toast.success("Reviewed Successfully", {
      position: "top-right"
    });
  }, [actionData]), /* @__PURE__ */ import_react39.default.createElement("div", {
    className: "flex flex-col gap-20 overflow-visible"
  }, /* @__PURE__ */ import_react39.default.createElement("section", {
    className: "flex flex-col gap-10 overflow-visible"
  }, /* @__PURE__ */ import_react39.default.createElement("div", {
    className: "flex justify-start items-center gap-3"
  }, /* @__PURE__ */ import_react39.default.createElement(import_bs3.BsPen, {
    className: "dark:fill-white fill-black h-10 w-10"
  }), /* @__PURE__ */ import_react39.default.createElement("h1", {
    className: " font-heading font-medium dark:text-white text-black text-[24px]"
  }, "Write Review")), data.reviews && data.reviews.length < 2 && /* @__PURE__ */ import_react39.default.createElement("form", {
    method: "post",
    className: "flex flex-col gap-5 items-start overflow-visible"
  }, /* @__PURE__ */ import_react39.default.createElement(input_default, {
    type: "text",
    name: "review",
    ref: reviewRef,
    placeholder: "Your Review",
    label: "Review",
    handleChange: handleReviewChange,
    error: validationError.review,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react39.default.createElement(input_default, {
    type: "text",
    name: "rating",
    ref: ratingRef,
    placeholder: "Rating 0 to 5",
    label: "Rating",
    handleChange: handleRatingChange,
    error: validationError.rating,
    style: lessRoundedBasicInputWithBorder
  }), /* @__PURE__ */ import_react39.default.createElement("section", {
    className: "my-3 flex flex-row items-center justify-start gap-5 overflow-visible"
  }, /* @__PURE__ */ import_react39.default.createElement("button", {
    disabled: transition.state === "submitting" || validationError.review ? !0 : !!validationError.rating,
    type: "submit",
    className: `${lessRoundedBasicLargeButton}`
  }, transition.state === "submitting" ? "Posting..." : "Post"), /* @__PURE__ */ import_react39.default.createElement("button", {
    type: "button",
    onClick: handleDiscard.bind(null),
    className: `${lessRoundedBasicLargeButton}`
  }, "Discard")))), /* @__PURE__ */ import_react39.default.createElement("section", null));
}, review_default = Review;

// app/routes/services.tsx
var services_exports = {};
__export(services_exports, {
  default: () => services_default,
  loader: () => loader5,
  meta: () => meta4
});
init_react();
var import_node6 = require("@remix-run/node"), import_react43 = __toESM(require("react"));

// app/components/services/detailedServices.tsx
init_react();
var import_react42 = require("@remix-run/react");

// app/components/services/detailedService.tsx
init_react();
var import_react40 = require("@remix-run/react"), import_react41 = __toESM(require("react"));
var DeatailedService = ({ service }) => /* @__PURE__ */ import_react41.default.createElement("div", {
  id: service.name,
  className: "flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse items-center gap-5  lg:gap-20 overflow-visible odd:animate-bounce-in-right even:animate-bounce-in-left"
}, /* @__PURE__ */ import_react41.default.createElement("section", {
  className: "flex-1 flex flex-col gap-3 overflow-visible"
}, /* @__PURE__ */ import_react41.default.createElement("h1", {
  className: "font-heading font-bold text-[24px] dark:text-white text-black overflow-visible"
}, service.name), /* @__PURE__ */ import_react41.default.createElement("p", {
  className: "font-text font-medium text-gray-400 text-[18px] overflow-visible"
}, service.detailedDesc), /* @__PURE__ */ import_react41.default.createElement("div", {
  className: "flex flex-row gap-5 py-2 overflow-visible"
}, /* @__PURE__ */ import_react41.default.createElement("button", {
  className: basicButton
}, /* @__PURE__ */ import_react41.default.createElement(import_react40.Link, {
  to: `/pricing/${service.name}`
}, "View Pricing")), /* @__PURE__ */ import_react41.default.createElement(schedule_button_default, {
  content: "Book Now"
}))), /* @__PURE__ */ import_react41.default.createElement("section", {
  className: "flex-1 flex flex-row h-auto w-[256px] max-w-[256px] w-[256px]"
}, /* @__PURE__ */ import_react41.default.createElement("img", {
  className: "h-full w-full z-10 rounded-lg",
  src: service.image.imageUrl,
  alt: service.image.alt
}))), detailedService_default = DeatailedService;

// app/components/services/detailedServices.tsx
var DetailedServices = () => {
  let { services } = (0, import_react42.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 w-full h-auto gap-10 lg:gap-40 overflow-visible col-start-1 col-span-full"
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
    throw new import_node6.Response("not found", {
      status: 404
    });
  return {
    services
  };
}, meta4 = () => ({ title: "Services" }), ServicesPage = () => /* @__PURE__ */ import_react43.default.createElement(infoWrapper_default, {
  id: "services"
}, /* @__PURE__ */ import_react43.default.createElement(detailedServices_default, null)), services_default = ServicesPage;

// app/routes/booking.tsx
var booking_exports = {};
__export(booking_exports, {
  action: () => action4
});
init_react();
var import_node7 = require("@remix-run/node");

// app/models/booking.model.ts
init_react();
var import_class_validator = require("class-validator");
var IsValidFormValueConstraint = class {
  validate(value, validationArguments) {
    return !!value;
  }
};
IsValidFormValueConstraint = __decorateClass([
  (0, import_class_validator.ValidatorConstraint)()
], IsValidFormValueConstraint);
var IsValidPickUpDateConstraint = class {
  validate(pickUpDate, args) {
    let selectedDate = new Date(pickUpDate), now = new Date();
    return !(selectedDate < now);
  }
};
IsValidPickUpDateConstraint = __decorateClass([
  (0, import_class_validator.ValidatorConstraint)()
], IsValidPickUpDateConstraint);
function IsValidPickUpDate(validationOptions) {
  return function(object, propertyName) {
    (0, import_class_validator.registerDecorator)({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidPickUpDateConstraint
    });
  };
}
function IsValidFormValue(validationOptions) {
  return function(object, propertyName) {
    (0, import_class_validator.registerDecorator)({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidFormValueConstraint
    });
  };
}
var BookingDto = class {
  constructor() {
    this.name = "";
    this.email = "";
    this.contactNumber = "";
    this.address = "";
    this.pickUpDate = "";
    this.timeSlot = "";
    this.gRecaptchaResponse = "";
  }
};
__decorateClass([
  (0, import_class_validator.Length)(3, 20),
  (0, import_class_validator.IsDefined)(),
  IsValidFormValue({ message: "Name Required" })
], BookingDto.prototype, "name", 2), __decorateClass([
  (0, import_class_validator.IsEmail)(),
  (0, import_class_validator.IsDefined)(),
  IsValidFormValue({ message: "Email Required" })
], BookingDto.prototype, "email", 2), __decorateClass([
  (0, import_class_validator.IsDefined)(),
  (0, import_class_validator.IsMobilePhone)(),
  IsValidFormValue({ message: "Contact Number Required" })
], BookingDto.prototype, "contactNumber", 2), __decorateClass([
  (0, import_class_validator.Length)(10),
  (0, import_class_validator.IsDefined)(),
  IsValidFormValue({ message: "Address Required" })
], BookingDto.prototype, "address", 2), __decorateClass([
  (0, import_class_validator.IsDefined)(),
  IsValidPickUpDate(),
  IsValidFormValue({ message: "Pickup Date Required" })
], BookingDto.prototype, "pickUpDate", 2), __decorateClass([
  (0, import_class_validator.IsDefined)(),
  IsValidFormValue({ message: "Time Slot Required" })
], BookingDto.prototype, "timeSlot", 2), __decorateClass([
  (0, import_class_validator.IsDefined)(),
  IsValidFormValue({ message: "Token Required" })
], BookingDto.prototype, "gRecaptchaResponse", 2);
var Booking = class {
  static getInstance() {
    return this.instance ? this.instance : (this.instance = new Booking(), this.instance);
  }
  async ValidateInput(input) {
    let data = new BookingDto();
    for (let pair of input.entries()) {
      let key = this.keyToCamelCase(pair[0]);
      key in data && (data[key] = pair[1]);
    }
    let validationErrors = await (0, import_class_validator.validate)(data);
    return validationErrors.length !== 0 ? [this.mapErrors(validationErrors), null] : [null, data];
  }
  keyToCamelCase(key) {
    for (var i = 0; i < key.length; i++)
      /-|_/.test(key.charAt(i)) && (key = key.slice(0, i + 1) + key.charAt(i + 1).toUpperCase() + key.slice(i + 2));
    return key = key.replace(/-|_/g, ""), key;
  }
  keyToSnakeCase(key) {
    for (var i = 0; i < key.length; i++)
      /[A-Z]/.test(key.charAt(i)) && (key = key.slice(0, i) + "_" + key.charAt(i).toLowerCase() + key.slice(i + 1));
    return key;
  }
  mapErrors(validationErrors) {
    let errors = {};
    return validationErrors.forEach((err) => {
      errors[err.property] = err.constraints ? Object.values(err.constraints)[0] : void 0;
    }), errors;
  }
  async saveToDB(input) {
    let { error } = await supabaseAdmin.from("bookings").insert({
      name: input.name,
      email: input.email,
      address: input.address,
      contact_number: input.contactNumber,
      pick_up_date: input.pickUpDate,
      time_slot: input.timeSlot
    });
    if (error)
      throw console.log(error), new Error("Failed to Book");
  }
}, booking_model_default = Booking.getInstance();

// app/routes/booking.tsx
var action4 = async ({ request }) => {
  let formData = await request.formData(), [errors, input] = await booking_model_default.ValidateInput(formData);
  if (errors)
    return (0, import_node7.json)({
      validationErrors: errors
    });
  if ((await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body: JSON.stringify({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: input == null ? void 0 : input.gRecaptchaResponse
    })
  })).status != 200)
    return (0, import_node7.json)({
      validationErrors: {
        gRecaptchaResponse: "Verification Failed"
      }
    });
  if (input)
    try {
      return await booking_model_default.saveToDB(input), (0, import_node7.json)({
        success: "Booking Successful"
      });
    } catch {
      return (0, import_node7.json)({
        error: "Failed to book"
      });
    }
  return (0, import_node7.json)({
    error: "Something went wrong"
  });
};

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action5,
  default: () => contact_default2,
  loader: () => loader6,
  meta: () => meta5
});
init_react();

// app/components/contact/contact.tsx
init_react();
var import_react44 = require("@remix-run/react"), import_react45 = __toESM(require("react")), import_react_toastify4 = require("react-toastify");
var Contact = () => {
  let transition = (0, import_react44.useTransition)(), data = (0, import_react44.useActionData)(), { image } = (0, import_react44.useLoaderData)(), [formErrors, setFormErrors] = import_react45.default.useState((data == null ? void 0 : data.validationErrors) ? data.validationErrors : {}), handleNameChange = (e) => {
    let name = e.target.value;
    name ? name.length < 4 ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: "name too small" })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: void 0 })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { name: "name is not provided" }));
  }, handleContactNumberChange = (e) => {
    let contactNumber = e.target.value;
    contactNumber ? /\+?\d[\d -]{8,12}\d/.test(contactNumber) ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { contactNumber: void 0 })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { contactNumber: "invalid contact number" })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { contactNumber: "contact number required" }));
  }, handleMessageChange = (e) => {
    let message = e.target.value;
    message ? message.length < 10 ? setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { message: "message too small" })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { message: void 0 })) : setFormErrors((prev) => __spreadProps(__spreadValues({}, prev), { message: "message is not provided" }));
  };
  return import_react45.default.useEffect(() => {
    (data == null ? void 0 : data.error) && import_react_toastify4.toast.error(data.error);
  }, [data]), import_react45.default.useEffect(() => {
    (data == null ? void 0 : data.success) && import_react_toastify4.toast.success("Message Sent!");
  }, [data]), /* @__PURE__ */ import_react45.default.createElement("div", {
    className: "w-full flex flex-col lg:flex-row justify-center align-middle overflow-visible col-start-1 col-span-full gap-5 lg:gap-10"
  }, /* @__PURE__ */ import_react45.default.createElement("section", {
    className: "flex justify-center items-center lg:flex-1 animate-bounce-in-left"
  }, /* @__PURE__ */ import_react45.default.createElement("img", {
    className: "h-full w-full rounded-xl",
    src: image.imageUrl,
    alt: image.caption
  })), /* @__PURE__ */ import_react45.default.createElement(import_react44.Form, {
    method: "post",
    action: "/contact",
    className: "lg:flex-1 flex flex-col gap-5 overflow-visible animate-bounce-in-right"
  }, /* @__PURE__ */ import_react45.default.createElement("div", {
    className: "flex flex-col "
  }, /* @__PURE__ */ import_react45.default.createElement("h1", {
    className: "font-heading font-semibold text-[42px] dark:text-white text-black"
  }, "Contact Us")), /* @__PURE__ */ import_react45.default.createElement(input_default, {
    name: "name",
    label: "Name",
    placeholder: "Enter your name here.",
    type: "text",
    style: lessRoundedBasicInputWithBorder,
    error: formErrors.name,
    handleChange: handleNameChange
  }), /* @__PURE__ */ import_react45.default.createElement(input_default, {
    name: "contactNumber",
    label: "Contact Number",
    placeholder: "Enter your number here.",
    type: "text",
    style: lessRoundedBasicInputWithBorder,
    error: formErrors.contactNumber,
    handleChange: handleContactNumberChange
  }), /* @__PURE__ */ import_react45.default.createElement(input_default, {
    name: "message",
    label: "Message",
    placeholder: "Enter your message here.",
    type: "text",
    style: lessRoundedBasicInputWithBorder,
    error: formErrors.message,
    handleChange: handleMessageChange
  }), /* @__PURE__ */ import_react45.default.createElement("button", {
    disabled: transition.state === "submitting",
    className: `${lessRoundedBasicLargeButton} mt-5`,
    type: "submit"
  }, transition.state === "submitting" ? "Sending..." : "Send Message")));
}, contact_default = Contact;

// app/routes/contact.tsx
var import_node8 = require("@remix-run/node");

// app/sanity/query/getImageByName.server.ts
init_react();
var getImageByNameQuery = (name) => `*[_type == "picture" && image.caption == "${name}"]{
        "alt": image.alt,
        "caption": image.caption,
        "imageUrl": image.asset->url,
    }[0]`, getImageByName = async (name) => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getImageByNameQuery(name)
    });
    if (res.status === 200)
      return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// app/models/contact.model.ts
init_react();
var import_class_validator2 = require("class-validator");
var ContactDto = class {
  constructor() {
    this.name = "";
    this.contactNumber = "";
    this.message = "";
  }
};
__decorateClass([
  (0, import_class_validator2.Length)(3, 20),
  (0, import_class_validator2.IsDefined)(),
  IsValidFormValue({ message: "Name Required" })
], ContactDto.prototype, "name", 2), __decorateClass([
  (0, import_class_validator2.IsDefined)(),
  (0, import_class_validator2.IsMobilePhone)(),
  IsValidFormValue({ message: "Contact Number Required" })
], ContactDto.prototype, "contactNumber", 2), __decorateClass([
  (0, import_class_validator2.Length)(5, 200),
  (0, import_class_validator2.IsDefined)(),
  IsValidFormValue({ message: "Message Required" })
], ContactDto.prototype, "message", 2);
var Contact2 = class {
  static getInstance() {
    return this.instance ? this.instance : (this.instance = new Contact2(), this.instance);
  }
  async ValidateInput(input) {
    let data = new ContactDto();
    for (let pair of input.entries()) {
      let key = this.makeKey(pair[0]);
      key in data && (data[key] = pair[1]);
    }
    let validationErrors = await (0, import_class_validator2.validate)(data);
    return validationErrors.length !== 0 ? [this.mapErrors(validationErrors), null] : [null, data];
  }
  makeKey(key) {
    for (var i = 0; i < key.length; i++)
      /-|_/.test(key.charAt(i)) && (key = key.slice(0, i + 1) + key.charAt(i + 1).toUpperCase() + key.slice(i + 2));
    return key = key.replace(/-|_/g, ""), key;
  }
  mapErrors(validationErrors) {
    let errors = {};
    return validationErrors.forEach((err) => {
      errors[err.property] = err.constraints ? Object.values(err.constraints)[0] : void 0;
    }), errors;
  }
  async saveToDB(input) {
    let { error } = await supabaseAdmin.from("contacts").insert({
      name: input.name,
      contactNumber: input.contactNumber,
      message: input.message
    });
    if (error)
      throw console.log(error), new Error("Failed to Book");
  }
}, contact_model_default = Contact2.getInstance();

// app/routes/contact.tsx
var action5 = async ({ request }) => {
  let formData = await request.formData(), [errors, input] = await contact_model_default.ValidateInput(formData);
  if (errors)
    return (0, import_node8.json)({
      validationErrors: errors
    });
  if (input)
    try {
      return await contact_model_default.saveToDB(input), (0, import_node8.json)({
        success: "Message Success"
      });
    } catch {
      return (0, import_node8.json)({
        error: "Failed to book"
      });
    }
  return (0, import_node8.json)({
    error: "Something went wrong"
  });
}, loader6 = async () => {
  let image = await getImageByName("contact");
  if (!image)
    throw new Error("Something went wrong!");
  return (0, import_node8.json)({
    image
  });
}, meta5 = () => ({
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
  loader: () => loader7,
  meta: () => meta6
});
init_react();
var import_react50 = __toESM(require("react"));

// app/components/services/container.tsx
init_react();
var import_react48 = __toESM(require("react"));

// app/components/services/service.tsx
init_react();
var import_react46 = __toESM(require("react"));
var import_react47 = require("@remix-run/react"), Service = ({ service, delay }) => {
  let location2 = (0, import_react47.useLocation)();
  return /* @__PURE__ */ import_react46.default.createElement(import_react47.Link, {
    to: isHomePage(location2.pathname) ? `/services#${service.name}` : `/pricing/${service.name}`,
    className: `relative ${isHomePage(location2.pathname) ? "lg:h-64 lg:min-w-[256px] lg:w-64 min-w-full h-64 w-auto flex-col justify-center items-center rounded-md" : "lg:h-64 lg:min-w-[256px] min-w-full h-40 w-full lg:w-64 flex-col justify-center items-center rounded-md"} dark:bg-gray-800 bg-slate-100 p-3 gap-2 flex flex-row items-cente hover:scale-110 relative z-10 overflow-visible ${borderGrowAnim} animate-fade-in-fwd animation-delay-${delay}`
  }, /* @__PURE__ */ import_react46.default.createElement("section", {
    className: "absolute top-0 left-0 right-0 bottom-0 flex justify-center opacity-100 items-center overflow-hidden rounded-md"
  }, /* @__PURE__ */ import_react46.default.createElement("img", {
    className: "h-full w-full z-10",
    src: service.image.imageUrl
  }), /* @__PURE__ */ import_react46.default.createElement("span", {
    className: "absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-20"
  })), /* @__PURE__ */ import_react46.default.createElement("section", {
    className: "dark:text-white text-black w-full justify-center items-center flex flex-col gap-[3px] opacity-100 z-30"
  }, /* @__PURE__ */ import_react46.default.createElement("p", {
    className: `font-heading font-semibold text-white text-center  ${isHomePage(location2.pathname) ? "text-[24px]" : "text-[20px]"}`
  }, service.name)));
}, service_default = Service;

// app/components/services/container.tsx
var Container3 = ({ services }) => /* @__PURE__ */ import_react48.default.createElement("div", {
  className: "flex flex-row justify-center gap-5 overflow-visible w-[100%] lg:w-[80%] flex-wrap col-start-1 col-span-full row-start-1 justify-self-center"
}, services.map((service, index) => /* @__PURE__ */ import_react48.default.createElement(service_default, {
  key: service._id,
  delay: (index + 1) * 100,
  service
}))), container_default3 = Container3;

// app/components/context/cartContext.tsx
init_react();
var import_react49 = __toESM(require("react")), CartContext = import_react49.default.createContext(null), CartProvider = ({ children }) => {
  let [items, setItems] = import_react49.default.useState([]), [totalCost, setTotalCost] = import_react49.default.useState(0), getTotalCost = () => {
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
  import_react49.default.useEffect(() => {
    getTotalCost();
  }, [items]);
  let getTotalItems = () => items.reduce((prev, curr) => prev + curr.quantity, 0);
  return /* @__PURE__ */ import_react49.default.createElement(CartContext.Provider, {
    value: { cart: { estimatedCost: totalCost, items }, add, remove, getTotalItems }
  }, children);
}, cartContext_default = CartProvider;

// app/routes/pricing.tsx
var import_react51 = require("@remix-run/react"), import_md2 = require("react-icons/md"), loader7 = async () => {
  let services = await getServices();
  if (!services)
    throw new Error("Couldn't fetch business");
  return {
    services
  };
}, meta6 = () => ({ title: "Pricing" }), PricingPage = () => {
  let { services } = (0, import_react51.useLoaderData)();
  return /* @__PURE__ */ import_react50.default.createElement(cartContext_default, null, /* @__PURE__ */ import_react50.default.createElement(infoWrapper_default, {
    id: "pricing"
  }, /* @__PURE__ */ import_react50.default.createElement("div", {
    className: "fixed right-5 bottom-5 rounded-[50%] h-[50px] w-[50px] flex justify-center items-center bg-slate-100 dark:bg-slate-800 z-50 lg:hidden",
    onClick: (() => {
      window.scrollTo(0, 0);
    }).bind(null)
  }, /* @__PURE__ */ import_react50.default.createElement(import_md2.MdOutlineKeyboardArrowUp, {
    className: " scale-110 dark:fill-white fill-black"
  })), /* @__PURE__ */ import_react50.default.createElement(container_default3, {
    services
  })), /* @__PURE__ */ import_react50.default.createElement(import_react51.Outlet, {
    context: { services }
  }));
}, pricing_default = PricingPage;

// app/routes/pricing/$service.tsx
var service_exports = {};
__export(service_exports, {
  default: () => service_default3,
  loader: () => loader8
});
init_react();

// app/components/pricing/service.tsx
init_react();
var import_react54 = require("@remix-run/react"), import_react55 = __toESM(require("react"));

// app/components/pricing/category.tsx
init_react();
var import_react53 = __toESM(require("react")), import_io2 = require("react-icons/io");

// app/components/pricing/item.tsx
init_react();
var import_react52 = __toESM(require("react"));
var showPricing = (min, max) => min == max ? `${min}` : `${min} - ${max}`, Item = ({ item, operation = "ADD" /* ADD */, classes = "" }) => {
  let { add, remove } = import_react52.default.useContext(CartContext);
  return /* @__PURE__ */ import_react52.default.createElement("div", {
    className: "flex flex-row items-center gap-3 animate-fade-in-fwd" + classes
  }, /* @__PURE__ */ import_react52.default.createElement("p", {
    className: "flex-1 font-text text-[16px] dark:text-white text-black"
  }, item.name), /* @__PURE__ */ import_react52.default.createElement("p", {
    className: "font-text text-[16px] dark:text-white text-black"
  }, showPricing(item.minPrice, item.maxPrice)));
}, item_default = Item;

// app/components/pricing/category.tsx
var Category = ({ category }) => {
  let [open, setOpen] = import_react53.default.useState(!1);
  return /* @__PURE__ */ import_react53.default.createElement("div", {
    className: "flex flex-col gap-3"
  }, /* @__PURE__ */ import_react53.default.createElement("section", {
    className: "flex justify-between p-5 bg-slate-100 dark:bg-gray-800",
    onClick: () => setOpen((prev) => !prev)
  }, /* @__PURE__ */ import_react53.default.createElement("p", {
    className: "font-text text-[18px] text-gray-400 text-left font-semibold"
  }, category.name), open ? /* @__PURE__ */ import_react53.default.createElement(import_io2.IoMdArrowDropup, {
    className: "h-[30px] w-[30px] fill-gray-400"
  }) : /* @__PURE__ */ import_react53.default.createElement(import_io2.IoMdArrowDropdown, {
    className: "h-[30px] w-[30px] fill-gray-400"
  })), open && /* @__PURE__ */ import_react53.default.createElement("section", {
    className: "flex flex-col gap-2"
  }, category.items.map((item) => /* @__PURE__ */ import_react53.default.createElement(item_default, {
    key: item._id,
    item,
    operation: "ADD" /* ADD */
  }))));
}, category_default = Category;

// app/components/pricing/service.tsx
var Service2 = ({ service }) => {
  let { categories } = (0, import_react54.useLoaderData)(), containerRef = import_react55.default.useRef(null);
  return import_react55.default.useEffect(() => {
    containerRef.current && containerRef.current.scrollIntoView();
  }, [containerRef]), service ? /* @__PURE__ */ import_react55.default.createElement("div", {
    ref: containerRef,
    className: "flex flex-col w-full lg:w-[500px] justify-center lg:justify-start min-h-[calc(100vh - 50px)]  lg:min-h-[auto] lg:h-auto gap-2 bg-white dark:bg-slate-900 p-10 mx-auto"
  }, categories.length === 0 ? /* @__PURE__ */ import_react55.default.createElement("p", {
    className: "font-text font-[24px] w-full text-center text-black dark:text-white"
  }, "Price currently unavailable") : /* @__PURE__ */ import_react55.default.createElement("section", {
    className: "flex flex-col gap-8 mt-5"
  }, categories.map((category) => /* @__PURE__ */ import_react55.default.createElement(category_default, {
    key: category._id,
    category
  }))), /* @__PURE__ */ import_react55.default.createElement("section", {
    className: "flex flex-col gap-2 mt-5"
  }, /* @__PURE__ */ import_react55.default.createElement("p", {
    className: "font-heading text-[18px] dark:text-white text-black"
  }, "Note"), /* @__PURE__ */ import_react55.default.createElement("p", {
    className: "font-heading text-[16px] text-gray-400"
  }, "Final price of the article will be decided at the time of billing"))) : /* @__PURE__ */ import_react55.default.createElement("div", null, "Not Found");
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
var import_react56 = require("@remix-run/react"), import_react57 = __toESM(require("react"));
var loader8 = async ({ params }) => {
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
  let params = (0, import_react56.useParams)(), { services } = (0, import_react56.useOutletContext)();
  return console.log(services, params), /* @__PURE__ */ import_react57.default.createElement(backdropContainer_default, {
    to: "/pricing",
    heading: params.service
  }, /* @__PURE__ */ import_react57.default.createElement(service_default2, {
    service: services.find((s) => s.name === params.service)
  }));
}, service_default3 = SingleService;

// app/routes/process.tsx
var process_exports = {};
__export(process_exports, {
  default: () => process_default,
  loader: () => loader9
});
init_react();
var import_react60 = require("@remix-run/react");

// app/components/process/step.tsx
init_react();
var import_react58 = __toESM(require("react")), import_framer_motion3 = require("framer-motion");

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
var import_react59 = require("@remix-run/react"), Step = ({ step, delay }) => {
  let location2 = (0, import_react59.useLocation)();
  return /* @__PURE__ */ import_react58.default.createElement(import_framer_motion3.motion.section, {
    variants: FadeOutScaleUpAnim,
    initial: "hidden",
    whileInView: "visible",
    custom: delay,
    viewport: { once: !0 },
    className: "flex flex-col flex-1 gap-5 h-auto items-center overflow-visible"
  }, /* @__PURE__ */ import_react58.default.createElement("div", {
    className: "h-24 w-24 rounded-[50%] bg-white flex justify-center items-center"
  }, /* @__PURE__ */ import_react58.default.createElement("img", {
    className: "h-10 w-10",
    alt: step.heading,
    src: step.image.imageUrl
  })), /* @__PURE__ */ import_react58.default.createElement("div", {
    className: "flex flex-col gap-2 h-auto w-[80%]"
  }, /* @__PURE__ */ import_react58.default.createElement("h1", {
    className: "font-heading text-white text-[20px] font-bold"
  }, step.heading), /* @__PURE__ */ import_react58.default.createElement("p", {
    className: "font-text text-[16px] font-normal text-white"
  }, step.desc)));
}, step_default = Step;

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

// app/routes/process.tsx
var loader9 = async () => {
  let process2 = await getProcess();
  if (!process2)
    throw new Error("Couldn't fetch process");
  return {
    process: process2
  };
}, ProcessPage = () => {
  let { process: process2 } = (0, import_react60.useLoaderData)();
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    id: "process"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-start-1 col-span-full flex flex-col gap-10"
  }, process2.steps.map((step) => /* @__PURE__ */ React.createElement(step_default, {
    key: step._key,
    step,
    delay: 0.2
  }))));
}, process_default = ProcessPage;

// app/routes/reviews.tsx
var reviews_exports = {};
__export(reviews_exports, {
  default: () => reviews_default,
  loader: () => loader10
});
init_react();
var import_node9 = require("@remix-run/node"), import_react63 = require("@remix-run/react");

// app/components/testimonials/testimonial.tsx
init_react();
var import_react61 = __toESM(require("react"));
var import_framer_motion4 = require("framer-motion");
var import_react62 = require("@remix-run/react"), Testimonial = ({ testimonial, delay }) => {
  let location2 = (0, import_react62.useLocation)();
  return /* @__PURE__ */ import_react61.default.createElement(import_framer_motion4.motion.div, {
    variants: FadeOutScaleUpAnim,
    initial: "hidden",
    whileInView: "visible",
    custom: delay,
    viewport: { once: !0 },
    className: `${isHomePage(location2.pathname) ? "min-w-[250px] w-[250px] min-h-[250px] h-[250px] items-center p-4 gap-0" : "w-full min-w-full min-h-auto h-auto p-6 items-start gap-5"} hover:shadow-lg hover:translate-y-3 transition duration-500 delay-100 dark:bg-gray-800 bg-gray-100 rounded-lg flex flex-col justify-center`
  }, /* @__PURE__ */ import_react61.default.createElement("p", {
    className: `${isHomePage(location2.pathname) ? "min-h-[100px] h-[100px] mb-3" : "min-h-auto h-auto"} text-[14px] dark:text-white text-black font-text font-semibold`
  }, '"', testimonial.review, '"'), /* @__PURE__ */ import_react61.default.createElement("p", {
    className: "text-[16px] text-gray-400 font-text font-extrabold"
  }, testimonial.name));
}, testimonial_default = Testimonial;

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

// app/routes/reviews.tsx
var loader10 = async () => (0, import_node9.json)({
  reviews: testimonialData
}), Reviews = () => {
  let { reviews } = (0, import_react63.useLoaderData)();
  return /* @__PURE__ */ React.createElement(infoWrapper_default, {
    id: "reviews"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-start-1 col-span-full flex flex-col gap-10"
  }, reviews.map((review) => /* @__PURE__ */ React.createElement(testimonial_default, {
    testimonial: review,
    key: review.id,
    delay: 0.2
  }))));
}, reviews_default = Reviews;

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  loader: () => loader11,
  meta: () => meta7
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
        founder,
        "whyUs": whyUs[]{
            _key,
            content,
            "icon": ${getImageQuery("icon")}
        },
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
var import_react64 = require("@remix-run/react");
var loader11 = async () => {
  let business = await getBusiness();
  if (!business)
    throw new Error("Couldn't fetch business");
  return {
    business
  };
}, meta7 = () => ({ title: "About" }), AbouPage = () => {
  let { business } = (0, import_react64.useLoaderData)();
  return console.log(business), /* @__PURE__ */ React.createElement(infoWrapper_default, {
    id: "about"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-start-1 col-span-full"
  }, /* @__PURE__ */ React.createElement(grid_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "col-start-1 col-span-full lg:col-span-7"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[18px] font-text text-gray-400"
  }, business.detailedDesc)), /* @__PURE__ */ React.createElement("div", {
    className: "col-start-1 row-start-1 col-span-full lg:col-span-5 lg:col-start-7"
  })), /* @__PURE__ */ React.createElement(grid_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "row-start-1 col-start-1 col-span-full flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-[36px] font-heading font-bold text-black dark:text-white"
  }, "Founder's Note")), /* @__PURE__ */ React.createElement("div", {
    className: "col-start-1 col-span-full flex flex-col"
  }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("img", null)), /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col gap-5 items-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[18px] font-text text-gray-400"
  }, /* @__PURE__ */ React.createElement("b", {
    className: "text-[24px] text-black dark:text-white pr-2"
  }, '"'), " ", business.founder.message, " ", /* @__PURE__ */ React.createElement("b", {
    className: "text-[24px] text-black dark:text-white pl-2"
  }, '"')), /* @__PURE__ */ React.createElement("p", {
    className: "text-[24px] font-heading text-blue"
  }, business.founder.name))))));
}, about_default = AbouPage;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => Index2,
  loader: () => loader12
});
init_react();
var import_bi4 = require("react-icons/bi");

// app/components/home/landingPage.tsx
init_react();
var import_react65 = __toESM(require("react"));
var import_react66 = require("@remix-run/react");
var LandingPage = () => {
  let { business } = (0, import_react66.useLoaderData)();
  return /* @__PURE__ */ import_react65.default.createElement("div", {
    className: "min-h-[100vh] h-auto pt-[120px] lg:pt-0 lg:h-[100vh] w-full relative flex justify-start items-center px-[10vw]"
  }, /* @__PURE__ */ import_react65.default.createElement("section", {
    className: "flex flex-col z-20 w-full lg:w-[50%]"
  }, /* @__PURE__ */ import_react65.default.createElement("p", {
    className: "text-[42px] text-white font-semibold font-heading mx-auto overflow-hidden"
  }, business.tagline), /* @__PURE__ */ import_react65.default.createElement("div", {
    className: "flex flex-col lg:flex-row gap-5 my-4 overflow-visible w-full lg:w-auto"
  }, /* @__PURE__ */ import_react65.default.createElement(schedule_button_default, {
    classes: `${largeBasicButton} text-white border-primary bg-primary`
  }), /* @__PURE__ */ import_react65.default.createElement("button", {
    className: `${largeBasicButton} animate-bounce-in-right delay-200  border-white text-primary bg-white`
  }, /* @__PURE__ */ import_react65.default.createElement("a", {
    target: "_blank",
    href: "tel:+919810136709",
    className: ""
  }, "Call Us")))), /* @__PURE__ */ import_react65.default.createElement("section", {
    className: "absolute top-0 left-0 right-0 bottom-0 z-10"
  }, /* @__PURE__ */ import_react65.default.createElement("img", {
    alt: "brightways-landing-page-pic",
    src: business.coverImage.imageUrl,
    className: "w-full h-full"
  })));
}, landingPage_default = LandingPage;

// app/components/home/process.tsx
init_react();
var import_react68 = require("@remix-run/react"), import_react69 = __toESM(require("react"));

// app/components/wrappers/sectionWrapper.tsx
init_react();
var import_react67 = __toESM(require("react"));
var SectionWrapper = ({ children, heading, subHeading, id, isGrid = !0, bgColor = "inherit", color, darkColor, barColor }) => /* @__PURE__ */ import_react67.default.createElement("div", {
  id,
  className: `relative flex bg-${bgColor} flex-col items-center gap-[50px] lg:gap-[70px] px-[10vw] h-auto w-full justify-center py-[40px]`
}, heading && /* @__PURE__ */ import_react67.default.createElement(info_default, {
  heading,
  subHeading,
  color,
  barColor,
  darkColor
}), isGrid && /* @__PURE__ */ import_react67.default.createElement(grid_default, null, children), !isGrid && children), sectionWrapper_default = SectionWrapper;

// app/components/home/process.tsx
var Process = () => {
  let { process: process2 } = (0, import_react68.useLoaderData)(), { isMobile } = import_react69.default.useContext(AppContext);
  return /* @__PURE__ */ import_react69.default.createElement(sectionWrapper_default, {
    id: "process",
    heading: "How it works",
    bgColor: "primary",
    color: "white",
    darkColor: "white",
    barColor: "white"
  }, /* @__PURE__ */ import_react69.default.createElement("section", {
    className: "flex flex-col lg:flex-row h-fit col-start-1 col-span-full"
  }, process2.steps.map((step, index) => /* @__PURE__ */ import_react69.default.createElement(step_default, {
    step,
    key: step._key,
    delay: isMobile ? 0 : (index + 2) / 10
  }))));
}, process_default2 = Process;

// app/components/home/reviewsList.tsx
init_react();
var import_react70 = require("@remix-run/react"), TestimonialsList = () => {
  let { reviews } = (0, import_react70.useLoaderData)();
  return console.log(reviews), /* @__PURE__ */ React.createElement(React.Fragment, null);
}, reviewsList_default = TestimonialsList;

// app/components/ui/sidebar.tsx
init_react();
var import_react71 = __toESM(require("react")), import_bs4 = require("react-icons/bs");

// public/icons/whatsapp.png
var whatsapp_default = "/build/_assets/whatsapp-QSRGVV7S.png";

// app/components/ui/sidebar.tsx
var SideBar = () => /* @__PURE__ */ import_react71.default.createElement("div", {
  className: "group fixed right-[30px] bottom-[30px] gap-2 z-50 flex flex-col h-auto w-auto"
}, /* @__PURE__ */ import_react71.default.createElement("section", {
  className: "bg-slate-100 dark:bg-gray-800 h-16 w-16 flex justify-center items-center rounded-[50%] transition-all duration-500 delay-200"
}, /* @__PURE__ */ import_react71.default.createElement("a", {
  target: "_blank",
  href: 'https://api.whatsapp.com/send?phone=919810136709&text=hi%20i%20would%20like%20to%20chat%20with%20you."',
  className: ""
}, /* @__PURE__ */ import_react71.default.createElement("img", {
  className: "h-8 w-8",
  src: whatsapp_default
}))), /* @__PURE__ */ import_react71.default.createElement("section", {
  className: "bg-slate-100 dark:bg-gray-800 h-16 w-16 flex justify-center items-center rounded-[50%] transition-all duration-500 delay-100"
}, /* @__PURE__ */ import_react71.default.createElement("a", {
  target: "_blank",
  href: "tel:+919810136709",
  className: ""
}, /* @__PURE__ */ import_react71.default.createElement(import_bs4.BsFillTelephoneFill, {
  className: "h-8 w-8 text-blue"
})))), sidebar_default2 = SideBar;

// app/components/home/servicesList.tsx
init_react();
var import_react73 = __toESM(require("react"));
var import_react74 = require("@remix-run/react");

// app/components/containers/xScrollable.tsx
init_react();
var import_react72 = __toESM(require("react")), import_md3 = require("react-icons/md"), getIntervals = (childs) => {
  let xGap = childs.length > 1 ? childs[1].getBoundingClientRect().left - (childs[0].getBoundingClientRect().left + childs[0].getBoundingClientRect().width) : 0, intervalGap = childs[0].getBoundingClientRect().width + xGap, intervals = [0];
  for (let i = 1; i < childs.length; i++)
    intervals[i] = intervals[i - 1] + intervalGap;
  return intervals;
}, scrollRight = (parent, intervals) => {
  let xScrolled = parent.scrollLeft, intervalIndex = -1;
  for (let i = 1; i < intervals.length; i++)
    if (xScrolled >= intervals[i - 1] - 1 && xScrolled <= intervals[i] - 1) {
      intervalIndex = i;
      break;
    }
  parent.scrollTo({ behavior: "smooth", left: xScrolled + (intervals[intervalIndex] - xScrolled) });
}, scrollLeft = (parent, intervals) => {
  let xScrolled = parent.scrollLeft, intervalIndex = -1;
  for (let i = 1; i < intervals.length; i++)
    if (xScrolled >= intervals[i - 1] + 1 && xScrolled <= intervals[i] + 1) {
      intervalIndex = i - 1;
      break;
    }
  parent.scrollTo({ behavior: "smooth", left: xScrolled - (xScrolled - intervals[intervalIndex]) });
}, autoScroll = (parent, intervals) => {
  scrollRight(parent, intervals);
}, XScrollableComponent = ({ children }) => {
  let containerRef = import_react72.default.useRef(null), [intervals, setIntervals] = import_react72.default.useState(null), handleLeftScroll = () => {
    containerRef.current && intervals && scrollLeft(containerRef.current, intervals);
  }, handleRightScroll = () => {
    containerRef.current && intervals && scrollRight(containerRef.current, intervals);
  }, handleResize = () => {
    console.log("resizeing"), containerRef.current && setIntervals(getIntervals(containerRef.current.childNodes));
  };
  return import_react72.default.useEffect(() => (window.addEventListener("resize", handleResize), () => window.removeEventListener("resize", handleResize)), []), import_react72.default.useEffect(() => {
    containerRef.current && setIntervals(getIntervals(containerRef.current.childNodes));
  }, [containerRef]), import_react72.default.useEffect(() => {
    let interval = setInterval(() => {
      containerRef.current && intervals && autoScroll(containerRef.current, intervals);
    }, 3e3);
    return () => clearInterval(interval);
  }, [containerRef, intervals]), /* @__PURE__ */ import_react72.default.createElement("div", {
    className: "h-auto col-start-1 col-span-full overflow-x-auto flex flex-row gap-2 lg:gap-10 items-center no-scrollbar"
  }, /* @__PURE__ */ import_react72.default.createElement("section", {
    className: "h-auto w-24 lg:w-28 flex justify-center items-center"
  }, /* @__PURE__ */ import_react72.default.createElement(import_md3.MdArrowBackIosNew, {
    className: "h-10 w-10 lg:h-[100px] lg:w-[100px] fill-gray-400",
    onClick: handleLeftScroll.bind(null)
  })), /* @__PURE__ */ import_react72.default.createElement("section", {
    ref: containerRef,
    className: "h-auto overflow-x-auto overflow-y-hidden flex flex-row gap-5 lg:gap-10 no-scrollbar"
  }, children), /* @__PURE__ */ import_react72.default.createElement("section", {
    className: "h-auto w-24 lg:w-28 flex justify-center items-center"
  }, /* @__PURE__ */ import_react72.default.createElement(import_md3.MdArrowForwardIos, {
    className: "h-10 w-10 lg:h-[100px] lg:w-[100px] fill-gray-400",
    onClick: handleRightScroll.bind(null)
  })));
}, xScrollable_default = XScrollableComponent;

// app/components/home/servicesList.tsx
var ServicesList = () => {
  let { services } = (0, import_react74.useLoaderData)(), { isMobile } = import_react73.default.useContext(AppContext);
  return /* @__PURE__ */ import_react73.default.createElement(sectionWrapper_default, {
    id: "services",
    heading: "Our Services"
  }, /* @__PURE__ */ import_react73.default.createElement(xScrollable_default, null, services.map((service, index) => /* @__PURE__ */ import_react73.default.createElement(service_default, {
    key: service._id,
    service,
    delay: isMobile ? 0 : (index + 2) / 10
  }))), /* @__PURE__ */ import_react73.default.createElement("section", {
    className: "col-start-1 col-span-full overflow-visible h-auto flex justify-center items-center py-[50px]"
  }, /* @__PURE__ */ import_react73.default.createElement("button", {
    className: `${largeBasicButton}  col-start-1 col-span-full`
  }, /* @__PURE__ */ import_react73.default.createElement(import_react74.Link, {
    to: "/services"
  }, "Know More"))));
}, servicesList_default = ServicesList;

// app/components/metrics/metrics.tsx
init_react();
var import_react77 = require("@remix-run/react");

// app/components/metrics/metric.tsx
init_react();
var import_react76 = __toESM(require("react")), import_react_countup = require("react-countup");

// app/hooks/useInView.tsx
init_react();
var import_react75 = __toESM(require("react")), useInView = (options, once = !0) => {
  let ref = import_react75.default.useRef(null), [inView, setInView] = import_react75.default.useState(!1), callback = async (entries) => {
    let [entry2] = entries;
    setInView((prev) => prev && once ? !0 : entry2.isIntersecting);
  };
  return import_react75.default.useEffect(() => {
    let observer = new IntersectionObserver(callback, options);
    return ref.current && observer.observe(ref.current), () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, [ref]), { inView, ref };
}, useInView_default = useInView;

// app/components/metrics/metric.tsx
var Metric = ({ data }) => {
  let { ref, inView } = useInView_default({ threshold: 0.2 }), { start } = (0, import_react_countup.useCountUp)({
    ref,
    start: 0,
    end: data.value,
    duration: 1
  });
  return import_react76.default.useEffect(() => {
    inView && start();
  }, [inView]), /* @__PURE__ */ import_react76.default.createElement("div", {
    className: "justify-self-center  self-center flex flex-col gap-5 items-center"
  }, /* @__PURE__ */ import_react76.default.createElement("section", {
    className: "rounded-[50%] w-[200px] h-[200px] border-[3px] border-primary flex justify-center gap-1 items-center"
  }, /* @__PURE__ */ import_react76.default.createElement("span", {
    ref,
    className: " text-[48px] font-bold text-black dark:text-white font-heading "
  }), /* @__PURE__ */ import_react76.default.createElement("span", {
    className: " text-[48px] font-bold text-black dark:text-white font-heading "
  }, data.suffix)), /* @__PURE__ */ import_react76.default.createElement("p", {
    className: "text-center font-heading font-bold text-[24px] text-black dark:text-white"
  }, data.name));
}, metric_default = Metric;

// app/components/metrics/metrics.tsx
var Metrics = () => {
  let { metrics } = (0, import_react77.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    className: "grid grid-cols-1 lg:grid-cols-3 lg:gap-10 w-full px-[10vw] gap-y-5"
  }, metrics.map((m) => /* @__PURE__ */ React.createElement(metric_default, {
    key: m.id,
    data: m
  })));
}, metrics_default = Metrics;

// app/components/home/aboutSection.tsx
init_react();
var import_react78 = require("@remix-run/react");
var AboutSection = () => {
  let { business } = (0, import_react78.useLoaderData)();
  return /* @__PURE__ */ React.createElement(sectionWrapper_default, {
    id: "about",
    heading: "About Us",
    isGrid: !1
  }, /* @__PURE__ */ React.createElement("section", {
    className: "h-auto w-full flex flex-col gap-5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-text text-[24px] font-medium text-gray-400"
  }, business.detailedDesc)));
}, aboutSection_default = AboutSection;

// app/components/home/whyUsSection.tsx
init_react();
var import_react79 = require("@remix-run/react");
var WhyUsSection = () => {
  let { business } = (0, import_react79.useLoaderData)();
  return /* @__PURE__ */ React.createElement(sectionWrapper_default, {
    id: "whyUs",
    heading: "Why Us",
    isGrid: !1
  }, /* @__PURE__ */ React.createElement("section", {
    className: "h-auto w-full flex flex-col gap-5 lg:gap-0 lg:flex-row  justify-between items-start"
  }, business.whyUs.map((wu) => /* @__PURE__ */ React.createElement("div", {
    key: wu._key,
    className: "flex flex-col justify-between gap-5 items-center h-auto flex-1 w-full lg:w-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-24 w-24 rounded-[50%] bg-inherit flex justify-center items-center border-2 border-primary dark:border-none dark:bg-slate-100"
  }, /* @__PURE__ */ React.createElement("img", {
    src: wu.icon.imageUrl,
    className: "h-10 w-10"
  })), /* @__PURE__ */ React.createElement("section", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "dark:text-white text-black font-heading font-medium text-[24px] text-center"
  }, wu.content))))));
}, whyUsSection_default = WhyUsSection;

// app/sanity/query/metric.server.ts
init_react();
var getMetricsQuery = () => `*[_type == 'metric']{
        id,
        name,
        suffix,
        value
      } | order(id asc)`, getMetrics = async () => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getMetricsQuery()
    });
    if (res.status === 200)
      return res.data.result;
  } catch (error) {
    console.log(error);
  }
};

// app/sanity/query/review.server.ts
init_react();
var getReviewQuery = () => `*[_type == 'review']{
        id,
        content,
        heading,
        location,
        name,
        rating, 
        "image": ${getImageQuery("image")}
      }[] | order(id asc)`, getReviews = async () => {
  try {
    let res = await sanityQueryClient.post(sanityPostQueryUrl, {
      query: getReviewQuery()
    });
    if (res.status === 200)
      return res.data.result;
    throw new Error("Couldn't fetch reviews");
  } catch (error) {
    throw console.log(error), new Error(error.message);
  }
};

// app/routes/index.tsx
async function loader12() {
  let business = await getBusiness();
  if (!business)
    throw new Error("Couldn't fetch business");
  let process2 = await getProcess();
  if (!process2)
    throw new Error("Couldn't fetch process");
  let services = await getServices();
  if (!services)
    throw new Error("Coundn't fetch services");
  let metrics = await getMetrics();
  if (!metrics)
    throw new Error("Coundn't fetch metrics");
  let reviews = await getReviews();
  if (!reviews)
    throw new Error("Coundn't fetch reviews");
  return {
    reviews,
    services,
    process: process2,
    business,
    metrics
  };
}
function Index2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-auto relative w-screen overflow-visible flex flex-col items-center scroll-smooth bg-inherit gap-[50px]"
  }, /* @__PURE__ */ React.createElement(landingPage_default, null), /* @__PURE__ */ React.createElement(metrics_default, null), /* @__PURE__ */ React.createElement(aboutSection_default, null), /* @__PURE__ */ React.createElement(whyUsSection_default, null), /* @__PURE__ */ React.createElement(servicesList_default, null), /* @__PURE__ */ React.createElement(process_default2, null), /* @__PURE__ */ React.createElement(reviewsList_default, null), /* @__PURE__ */ React.createElement(sidebar_default2, null));
}
var ErrorBoundary4 = ({ error }) => (console.log(error), /* @__PURE__ */ React.createElement("section", {
  className: "min-h-screen min-w-full flex bg-blue justify-center items-center"
}, /* @__PURE__ */ React.createElement("div", {
  className: "p-10 h-[400px] overflow-y-hidden rounded-lg bg-white flex flex-col justify-center gap-3 items-center"
}, /* @__PURE__ */ React.createElement(import_bi4.BiError, {
  className: "fill-error-red h-[100px] w-[100px]"
}), /* @__PURE__ */ React.createElement("h1", {
  className: "text-red font-heading font-extrabold text-[48px]"
}, "Sorry"), /* @__PURE__ */ React.createElement("p", {
  className: "font-text text-[18px] mb-3"
}, "Something went wrong!"), /* @__PURE__ */ React.createElement("button", {
  className: "p-3 rounded-md bg-blue text-white font-text text-[18px]",
  onClick: () => location.reload()
}, "Try Again"))));

// app/routes/auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => auth_default,
  meta: () => meta8
});
init_react();
var import_react80 = require("@remix-run/react"), import_framer_motion5 = require("framer-motion");
var meta8 = () => ({ title: "Auth" }), Auth = () => /* @__PURE__ */ React.createElement(infoWrapper_default, {
  id: "auth"
}, /* @__PURE__ */ React.createElement("main", {
  className: "md:bg-inherit md:dark:bg-gray-800 md:bg-gray-100 md:p-10 h-fit overflow-visible col-start-1 col-span-full lg:col-start-4 lg:col-end-10"
}, /* @__PURE__ */ React.createElement(import_framer_motion5.AnimatePresence, null, /* @__PURE__ */ React.createElement(import_react80.Outlet, null)))), auth_default = Auth;

// app/routes/auth/callback.tsx
var callback_exports = {};
__export(callback_exports, {
  action: () => action6,
  default: () => callback_default,
  loader: () => loader13
});
init_react();
var import_node10 = require("@remix-run/node"), import_react81 = require("@remix-run/react"), import_react82 = __toESM(require("react"));
var import_supabase6 = __toESM(require_supabase()), action6 = async ({ request }) => {
  let formData = await request.formData(), session = await getSession(request.headers.get("Cookie")), error = JSON.parse(formData.get("error"));
  if (error)
    return console.log(error), session.flash("error", {
      message: "Something went wrong"
    }), (0, import_node10.redirect)("/auth", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  let supaSession = JSON.parse(formData.get("session")), event = JSON.parse(formData.get("event"));
  return event === null || supaSession === null ? (session.flash("error", {
    message: "Something went wrong"
  }), (0, import_node10.redirect)("/auth", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })) : event === "SIGNED_IN" ? (session.set("access_token", supaSession == null ? void 0 : supaSession.access_token), console.log("inside signedin switch case"), (0, import_node10.redirect)("/", {
    headers: {
      "Set-Cookie": await commitSession(session, { expires: new Date(supaSession.expires_at), maxAge: supaSession.expires_in })
    }
  })) : null;
}, loader13 = async ({ request }) => {
  let urlSearchParams = new URLSearchParams(request.url.split("?")[1]), params = Object.fromEntries(urlSearchParams.entries()), session = await getSession(request.headers.get("Cookie"));
  return params.error ? (session.flash("error", {
    message: params.error
  }), (0, import_node10.redirect)("/auth", {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  })) : null;
}, Callback = () => {
  let submit = (0, import_react81.useSubmit)(), transition = (0, import_react81.useTransition)();
  return import_react82.default.useEffect(() => {
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
  }, []), /* @__PURE__ */ import_react82.default.createElement("div", {
    className: "w-full flex justify-center items-center overflow-visible"
  }, transition.state === "loading" && /* @__PURE__ */ import_react82.default.createElement("div", {
    className: " inline-block w-[50px] h-[50px] after:contents-[''] after:block after:h-[40px] after:w-[40px] after:m-[5px] after:rounded-[50%] after:border-2 after:border-t-blue after:animate-spin overflow-visible"
  }));
}, callback_default = Callback;

// app/routes/auth/index.tsx
var auth_exports2 = {};
__export(auth_exports2, {
  LoginMethod: () => LoginMethod,
  action: () => action7,
  default: () => auth_default2,
  loader: () => loader14
});
init_react();
var import_framer_motion6 = require("framer-motion");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_supabase8 = __toESM(require_supabase());
var import_node11 = require("@remix-run/node"), import_react83 = require("@remix-run/react"), LoginMethod = /* @__PURE__ */ ((LoginMethod2) => (LoginMethod2.GOOGLE = "GOOGLE", LoginMethod2.FACEBOOK = "FACEBOOK", LoginMethod2.EMAIL = "EMAIL", LoginMethod2))(LoginMethod || {}), loader14 = async ({ request }) => {
  let session = await getSession(request.headers.get("Cookie")), response = {};
  return session.has("error") && (response.error = session.get("error")), (0, import_node11.json)(response, {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}, action7 = async ({ request }) => {
  if (request.method === "POST") {
    let form = await request.formData(), method = form.get("method");
    if ((0, import_tiny_invariant.default)(method, "method missing"), method === "EMAIL" /* EMAIL */) {
      let email = form.get("email");
      if ((0, import_tiny_invariant.default)(typeof email == "string", "inavlid input"), email.length === 0)
        return (0, import_node11.json)({
          error: {
            message: "email required"
          }
        });
      if (!/\S+@\S+\.\S+/.test(email))
        return (0, import_node11.json)({
          error: {
            message: "invalid email"
          }
        });
      let { error } = await supabaseAdmin.auth.signIn({
        email
      }, {
        redirectTo: `${process.env.SERVER_URL}/auth/callback`
      });
      return error ? (0, import_node11.json)({
        error: {
          message: error.message
        }
      }) : (0, import_node11.json)({
        success: {
          message: "Check your email"
        }
      });
    }
  }
  return null;
}, Login = () => {
  let transition = (0, import_react83.useTransition)(), notification = (0, import_react83.useActionData)(), { error } = (0, import_react83.useLoaderData)(), handleGoogleLogin = () => {
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
  return /* @__PURE__ */ React.createElement(import_framer_motion6.motion.section, {
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
  }, "Login"), /* @__PURE__ */ React.createElement(import_react83.Form, {
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
}, auth_default2 = Login;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { version: "61836204", entry: { module: "/build/entry.client-BCV4JUXM.js", imports: ["/build/_shared/chunk-NUTN2VOP.js", "/build/_shared/chunk-GELFRZA7.js", "/build/_shared/chunk-BQCUINC5.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-P2YXWNON.js", imports: ["/build/_shared/chunk-W6QAEEWB.js", "/build/_shared/chunk-KQWCACRR.js", "/build/_shared/chunk-XALT7QIV.js", "/build/_shared/chunk-HWGOFSIQ.js", "/build/_shared/chunk-AILI7FLN.js", "/build/_shared/chunk-6AM35FS7.js", "/build/_shared/chunk-FT3LDXGA.js", "/build/_shared/chunk-PDP2UIRT.js", "/build/_shared/chunk-JSCARZR7.js", "/build/_shared/chunk-YIZGIZCQ.js", "/build/_shared/chunk-3B54G4E7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-3YC4AKM7.js", imports: ["/build/_shared/chunk-WFCZZTI6.js", "/build/_shared/chunk-GZDNXRV4.js", "/build/_shared/chunk-ETM4ZPXF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth": { id: "routes/auth", parentId: "root", path: "auth", index: void 0, caseSensitive: void 0, module: "/build/routes/auth-DAGUE24H.js", imports: ["/build/_shared/chunk-GZDNXRV4.js", "/build/_shared/chunk-ETM4ZPXF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/callback": { id: "routes/auth/callback", parentId: "routes/auth", path: "callback", index: void 0, caseSensitive: void 0, module: "/build/routes/auth/callback-OWWPO5K3.js", imports: ["/build/_shared/chunk-QLI2S6UI.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/auth/index": { id: "routes/auth/index", parentId: "routes/auth", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/auth/index-UZRQXV53.js", imports: ["/build/_shared/chunk-QLI2S6UI.js", "/build/_shared/chunk-STS73DGA.js", "/build/_shared/chunk-FT3LDXGA.js", "/build/_shared/chunk-YIZGIZCQ.js", "/build/_shared/chunk-2BIEIJJY.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/booking": { id: "routes/booking", parentId: "root", path: "booking", index: void 0, caseSensitive: void 0, module: "/build/routes/booking-Z4BBW67T.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-4CH7BWZ7.js", imports: ["/build/_shared/chunk-GZDNXRV4.js", "/build/_shared/chunk-ETM4ZPXF.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-KSNOEWZV.js", imports: ["/build/_shared/chunk-I7BPMKSD.js", "/build/_shared/chunk-2BIEIJJY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/bookings": { id: "routes/dashboard/bookings", parentId: "routes/dashboard", path: "bookings", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/bookings-WESN7FR6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/profile": { id: "routes/dashboard/profile", parentId: "routes/dashboard", path: "profile", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/profile-4USJQIT6.js", imports: ["/build/_shared/chunk-PDP2UIRT.js", "/build/_shared/chunk-JSCARZR7.js", "/build/_shared/chunk-MTM33XFP.js", "/build/_shared/chunk-YIZGIZCQ.js", "/build/_shared/chunk-3B54G4E7.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/dashboard/review": { id: "routes/dashboard/review", parentId: "routes/dashboard", path: "review", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/review-RUX33RY5.js", imports: ["/build/_shared/chunk-W6QAEEWB.js", "/build/_shared/chunk-XALT7QIV.js", "/build/_shared/chunk-JSCARZR7.js", "/build/_shared/chunk-YIZGIZCQ.js", "/build/_shared/chunk-3B54G4E7.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-JXYPN7KZ.js", imports: ["/build/_shared/chunk-WFCZZTI6.js", "/build/_shared/chunk-RECSGHSG.js", "/build/_shared/chunk-BGE7HCIQ.js", "/build/_shared/chunk-QWHAT36A.js", "/build/_shared/chunk-STS73DGA.js", "/build/_shared/chunk-ETM4ZPXF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/pricing": { id: "routes/pricing", parentId: "root", path: "pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/pricing-POEBAZMU.js", imports: ["/build/_shared/chunk-RECSGHSG.js", "/build/_shared/chunk-BGE7HCIQ.js", "/build/_shared/chunk-KM3AXEQ2.js", "/build/_shared/chunk-GZDNXRV4.js", "/build/_shared/chunk-ETM4ZPXF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pricing/$service": { id: "routes/pricing/$service", parentId: "routes/pricing", path: ":service", index: void 0, caseSensitive: void 0, module: "/build/routes/pricing/$service-RA5UOPM5.js", imports: ["/build/_shared/chunk-AILI7FLN.js", "/build/_shared/chunk-I7BPMKSD.js", "/build/_shared/chunk-3B54G4E7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privacyPolicy": { id: "routes/privacyPolicy", parentId: "root", path: "privacyPolicy", index: void 0, caseSensitive: void 0, module: "/build/routes/privacyPolicy-UP7KNEGJ.js", imports: ["/build/_shared/chunk-GZDNXRV4.js", "/build/_shared/chunk-ETM4ZPXF.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/process": { id: "routes/process", parentId: "root", path: "process", index: void 0, caseSensitive: void 0, module: "/build/routes/process-YJOKXTWS.js", imports: ["/build/_shared/chunk-QWHAT36A.js", "/build/_shared/chunk-STS73DGA.js", "/build/_shared/chunk-GZDNXRV4.js", "/build/_shared/chunk-ETM4ZPXF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reviews": { id: "routes/reviews", parentId: "root", path: "reviews", index: void 0, caseSensitive: void 0, module: "/build/routes/reviews-WIDR47OT.js", imports: ["/build/_shared/chunk-STS73DGA.js", "/build/_shared/chunk-GZDNXRV4.js", "/build/_shared/chunk-ETM4ZPXF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/services": { id: "routes/services", parentId: "root", path: "services", index: void 0, caseSensitive: void 0, module: "/build/routes/services-P5FIGJK5.js", imports: ["/build/_shared/chunk-BGE7HCIQ.js", "/build/_shared/chunk-GZDNXRV4.js", "/build/_shared/chunk-ETM4ZPXF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/stores/index": { id: "routes/stores/index", parentId: "root", path: "stores", index: !0, caseSensitive: void 0, module: "/build/routes/stores/index-XMCTOWK2.js", imports: ["/build/_shared/chunk-GZDNXRV4.js", "/build/_shared/chunk-ETM4ZPXF.js", "/build/_shared/chunk-MTM33XFP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/wbh/email.booking": { id: "routes/wbh/email.booking", parentId: "root", path: "wbh/email/booking", index: void 0, caseSensitive: void 0, module: "/build/routes/wbh/email.booking-QS7BZ3UH.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-61836204.js" };

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
  "routes/wbh/email.booking": {
    id: "routes/wbh/email.booking",
    parentId: "root",
    path: "wbh/email/booking",
    index: void 0,
    caseSensitive: void 0,
    module: email_booking_exports
  },
  "routes/privacyPolicy": {
    id: "routes/privacyPolicy",
    parentId: "root",
    path: "privacyPolicy",
    index: void 0,
    caseSensitive: void 0,
    module: privacyPolicy_exports
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
  "routes/booking": {
    id: "routes/booking",
    parentId: "root",
    path: "booking",
    index: void 0,
    caseSensitive: void 0,
    module: booking_exports
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
