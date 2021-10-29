/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error2) {
    e = { error: error2 };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const CONSTANTS = {
  NODE_CLIENT: false,
  NODE_ADMIN: false,
  SDK_VERSION: "${JSCORE_VERSION}"
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const assert = function(assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
const assertionError = function(message) {
  return new Error("Firebase Database (" + CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function(str) {
  const out = [];
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
      c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
};
const byteArrayToString = function(bytes) {
  const out = [];
  let pos = 0, c = 0;
  while (pos < bytes.length) {
    const c1 = bytes[pos++];
    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      const c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      const c2 = bytes[pos++];
      const c3 = bytes[pos++];
      const c4 = bytes[pos++];
      const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
      out[c++] = String.fromCharCode(55296 + (u >> 10));
      out[c++] = String.fromCharCode(56320 + (u & 1023));
    } else {
      const c2 = bytes[pos++];
      const c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
    }
  }
  return out.join("");
};
const base64 = {
  byteToCharMap_: null,
  charToByteMap_: null,
  byteToCharMapWebSafe_: null,
  charToByteMapWebSafe_: null,
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  HAS_NATIVE_SUPPORT: typeof atob === "function",
  encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    this.init_();
    const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    const output = [];
    for (let i = 0; i < input.length; i += 3) {
      const byte1 = input[i];
      const haveByte2 = i + 1 < input.length;
      const byte2 = haveByte2 ? input[i + 1] : 0;
      const haveByte3 = i + 2 < input.length;
      const byte3 = haveByte3 ? input[i + 2] : 0;
      const outByte1 = byte1 >> 2;
      const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
      let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
      let outByte4 = byte3 & 63;
      if (!haveByte3) {
        outByte4 = 64;
        if (!haveByte2) {
          outByte3 = 64;
        }
      }
      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }
    return output.join("");
  },
  encodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }
    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },
  decodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }
    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },
  decodeStringToByteArray(input, webSafe) {
    this.init_();
    const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    const output = [];
    for (let i = 0; i < input.length; ) {
      const byte1 = charToByteMap[input.charAt(i++)];
      const haveByte2 = i < input.length;
      const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      const haveByte3 = i < input.length;
      const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      const haveByte4 = i < input.length;
      const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw Error();
      }
      const outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);
      if (byte3 !== 64) {
        const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
        output.push(outByte2);
        if (byte4 !== 64) {
          const outByte3 = byte3 << 6 & 192 | byte4;
          output.push(outByte3);
        }
      }
    }
    return output;
  },
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {};
      for (let i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
const base64Encode = function(str) {
  const utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
const base64Decode = function(str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function deepCopy(value) {
  return deepExtend(void 0, value);
}
function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }
  switch (source.constructor) {
    case Date:
      const dateValue = source;
      return new Date(dateValue.getTime());
    case Object:
      if (target === void 0) {
        target = {};
      }
      break;
    case Array:
      target = [];
      break;
    default:
      return source;
  }
  for (const prop in source) {
    if (!source.hasOwnProperty(prop) || !isValidKey$1(prop)) {
      continue;
    }
    target[prop] = deepExtend(target[prop], source[prop]);
  }
  return target;
}
function isValidKey$1(key) {
  return key !== "__proto__";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
  constructor() {
    this.reject = () => {
    };
    this.resolve = () => {
    };
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  wrapCallback(callback) {
    return (error2, value) => {
      if (error2) {
        this.reject(error2);
      } else {
        this.resolve(value);
      }
      if (typeof callback === "function") {
        this.promise.catch(() => {
        });
        if (callback.length === 1) {
          callback(error2);
        } else {
          callback(error2, value);
        }
      }
    };
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getUA() {
  if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
    return navigator["userAgent"];
  } else {
    return "";
  }
}
function isMobileCordova() {
  return typeof window !== "undefined" && !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
function isBrowserExtension() {
  const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isReactNative() {
  return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
function isIE() {
  const ua = getUA();
  return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
}
function isNodeSdk() {
  return CONSTANTS.NODE_ADMIN === true;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_NAME = "FirebaseError";
class FirebaseError extends Error {
  constructor(code, message, customData) {
    super(message);
    this.code = code;
    this.customData = customData;
    this.name = ERROR_NAME;
    Object.setPrototypeOf(this, FirebaseError.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
  }
}
class ErrorFactory {
  constructor(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  create(code, ...data) {
    const customData = data[0] || {};
    const fullCode = `${this.service}/${code}`;
    const template = this.errors[code];
    const message = template ? replaceTemplate(template, customData) : "Error";
    const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
    const error2 = new FirebaseError(fullCode, fullMessage, customData);
    return error2;
  }
}
function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_, key) => {
    const value = data[key];
    return value != null ? String(value) : `<${key}?>`;
  });
}
const PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jsonEval(str) {
  return JSON.parse(str);
}
function stringify(data) {
  return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const decode = function(token) {
  let header = {}, claims = {}, data = {}, signature = "";
  try {
    const parts = token.split(".");
    header = jsonEval(base64Decode(parts[0]) || "");
    claims = jsonEval(base64Decode(parts[1]) || "");
    signature = parts[2];
    data = claims["d"] || {};
    delete claims["d"];
  } catch (e) {
  }
  return {
    header,
    claims,
    data,
    signature
  };
};
const isValidFormat = function(token) {
  const decoded = decode(token), claims = decoded.claims;
  return !!claims && typeof claims === "object" && claims.hasOwnProperty("iat");
};
const isAdmin = function(token) {
  const claims = decode(token).claims;
  return typeof claims === "object" && claims["admin"] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return void 0;
  }
}
function isEmpty(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}
function map(obj, fn, contextObj) {
  const res = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }
  return res;
}
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  for (const k of aKeys) {
    if (!bKeys.includes(k)) {
      return false;
    }
    const aProp = a[k];
    const bProp = b[k];
    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k of bKeys) {
    if (!aKeys.includes(k)) {
      return false;
    }
  }
  return true;
}
function isObject(thing) {
  return thing !== null && typeof thing === "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function querystring(querystringParams) {
  const params = [];
  for (const [key, value] of Object.entries(querystringParams)) {
    if (Array.isArray(value)) {
      value.forEach((arrayVal) => {
        params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    }
  }
  return params.length ? "&" + params.join("&") : "";
}
function querystringDecode(querystring2) {
  const obj = {};
  const tokens = querystring2.replace(/^\?/, "").split("&");
  tokens.forEach((token) => {
    if (token) {
      const [key, value] = token.split("=");
      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });
  return obj;
}
function extractQuerystring(url) {
  const queryStart = url.indexOf("?");
  if (!queryStart) {
    return "";
  }
  const fragmentStart = url.indexOf("#", queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sha1 {
  constructor() {
    this.chain_ = [];
    this.buf_ = [];
    this.W_ = [];
    this.pad_ = [];
    this.inbuf_ = 0;
    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;
    for (let i = 1; i < this.blockSize; ++i) {
      this.pad_[i] = 0;
    }
    this.reset();
  }
  reset() {
    this.chain_[0] = 1732584193;
    this.chain_[1] = 4023233417;
    this.chain_[2] = 2562383102;
    this.chain_[3] = 271733878;
    this.chain_[4] = 3285377520;
    this.inbuf_ = 0;
    this.total_ = 0;
  }
  compress_(buf, offset) {
    if (!offset) {
      offset = 0;
    }
    const W = this.W_;
    if (typeof buf === "string") {
      for (let i = 0; i < 16; i++) {
        W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
        offset += 4;
      }
    } else {
      for (let i = 0; i < 16; i++) {
        W[i] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
        offset += 4;
      }
    }
    for (let i = 16; i < 80; i++) {
      const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
      W[i] = (t << 1 | t >>> 31) & 4294967295;
    }
    let a = this.chain_[0];
    let b = this.chain_[1];
    let c = this.chain_[2];
    let d = this.chain_[3];
    let e = this.chain_[4];
    let f, k;
    for (let i = 0; i < 80; i++) {
      if (i < 40) {
        if (i < 20) {
          f = d ^ b & (c ^ d);
          k = 1518500249;
        } else {
          f = b ^ c ^ d;
          k = 1859775393;
        }
      } else {
        if (i < 60) {
          f = b & c | d & (b | c);
          k = 2400959708;
        } else {
          f = b ^ c ^ d;
          k = 3395469782;
        }
      }
      const t = (a << 5 | a >>> 27) + f + e + k + W[i] & 4294967295;
      e = d;
      d = c;
      c = (b << 30 | b >>> 2) & 4294967295;
      b = a;
      a = t;
    }
    this.chain_[0] = this.chain_[0] + a & 4294967295;
    this.chain_[1] = this.chain_[1] + b & 4294967295;
    this.chain_[2] = this.chain_[2] + c & 4294967295;
    this.chain_[3] = this.chain_[3] + d & 4294967295;
    this.chain_[4] = this.chain_[4] + e & 4294967295;
  }
  update(bytes, length) {
    if (bytes == null) {
      return;
    }
    if (length === void 0) {
      length = bytes.length;
    }
    const lengthMinusBlock = length - this.blockSize;
    let n = 0;
    const buf = this.buf_;
    let inbuf = this.inbuf_;
    while (n < length) {
      if (inbuf === 0) {
        while (n <= lengthMinusBlock) {
          this.compress_(bytes, n);
          n += this.blockSize;
        }
      }
      if (typeof bytes === "string") {
        while (n < length) {
          buf[inbuf] = bytes.charCodeAt(n);
          ++inbuf;
          ++n;
          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0;
            break;
          }
        }
      } else {
        while (n < length) {
          buf[inbuf] = bytes[n];
          ++inbuf;
          ++n;
          if (inbuf === this.blockSize) {
            this.compress_(buf);
            inbuf = 0;
            break;
          }
        }
      }
    }
    this.inbuf_ = inbuf;
    this.total_ += length;
  }
  digest() {
    const digest = [];
    let totalBits = this.total_ * 8;
    if (this.inbuf_ < 56) {
      this.update(this.pad_, 56 - this.inbuf_);
    } else {
      this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    }
    for (let i = this.blockSize - 1; i >= 56; i--) {
      this.buf_[i] = totalBits & 255;
      totalBits /= 256;
    }
    this.compress_(this.buf_);
    let n = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 24; j >= 0; j -= 8) {
        digest[n] = this.chain_[i] >> j & 255;
        ++n;
      }
    }
    return digest;
  }
}
function createSubscribe(executor, onNoObservers) {
  const proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
class ObserverProxy {
  constructor(executor, onNoObservers) {
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    this.task.then(() => {
      executor(this);
    }).catch((e) => {
      this.error(e);
    });
  }
  next(value) {
    this.forEachObserver((observer) => {
      observer.next(value);
    });
  }
  error(error2) {
    this.forEachObserver((observer) => {
      observer.error(error2);
    });
    this.close(error2);
  }
  complete() {
    this.forEachObserver((observer) => {
      observer.complete();
    });
    this.close();
  }
  subscribe(nextOrObserver, error2, complete) {
    let observer;
    if (nextOrObserver === void 0 && error2 === void 0 && complete === void 0) {
      throw new Error("Missing Observer.");
    }
    if (implementsAnyMethods(nextOrObserver, [
      "next",
      "error",
      "complete"
    ])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error: error2,
        complete
      };
    }
    if (observer.next === void 0) {
      observer.next = noop;
    }
    if (observer.error === void 0) {
      observer.error = noop;
    }
    if (observer.complete === void 0) {
      observer.complete = noop;
    }
    const unsub = this.unsubscribeOne.bind(this, this.observers.length);
    if (this.finalized) {
      this.task.then(() => {
        try {
          if (this.finalError) {
            observer.error(this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {
        }
        return;
      });
    }
    this.observers.push(observer);
    return unsub;
  }
  unsubscribeOne(i) {
    if (this.observers === void 0 || this.observers[i] === void 0) {
      return;
    }
    delete this.observers[i];
    this.observerCount -= 1;
    if (this.observerCount === 0 && this.onNoObservers !== void 0) {
      this.onNoObservers(this);
    }
  }
  forEachObserver(fn) {
    if (this.finalized) {
      return;
    }
    for (let i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn);
    }
  }
  sendOne(i, fn) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[i] !== void 0) {
        try {
          fn(this.observers[i]);
        } catch (e) {
          if (typeof console !== "undefined" && console.error) {
            console.error(e);
          }
        }
      }
    });
  }
  close(err) {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (err !== void 0) {
      this.finalError = err;
    }
    this.task.then(() => {
      this.observers = void 0;
      this.onNoObservers = void 0;
    });
  }
}
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (const method of methods) {
    if (method in obj && typeof obj[method] === "function") {
      return true;
    }
  }
  return false;
}
function noop() {
}
function errorPrefix(fnName, argName) {
  return `${fnName} failed: ${argName} argument `;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray = function(str) {
  const out = [];
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c >= 55296 && c <= 56319) {
      const high = c - 55296;
      i++;
      assert(i < str.length, "Surrogate pair missing trail surrogate.");
      const low = str.charCodeAt(i) - 56320;
      c = 65536 + (high << 10) + low;
    }
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }
  return out;
};
const stringLength = function(str) {
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c < 128) {
      p++;
    } else if (c < 2048) {
      p += 2;
    } else if (c >= 55296 && c <= 56319) {
      p += 4;
      i++;
    } else {
      p += 3;
    }
  }
  return p;
};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}
var Component = function() {
  function Component2(name2, instanceFactory, type) {
    this.name = name2;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  Component2.prototype.setInstantiationMode = function(mode) {
    this.instantiationMode = mode;
    return this;
  };
  Component2.prototype.setMultipleInstances = function(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  };
  Component2.prototype.setServiceProps = function(props) {
    this.serviceProps = props;
    return this;
  };
  Component2.prototype.setInstanceCreatedCallback = function(callback) {
    this.onInstanceCreated = callback;
    return this;
  };
  return Component2;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME$1 = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Provider = function() {
  function Provider2(name2, container) {
    this.name = name2;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
    this.instancesOptions = new Map();
    this.onInitCallbacks = new Map();
  }
  Provider2.prototype.get = function(identifier) {
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      var deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {
        }
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  };
  Provider2.prototype.getImmediate = function(options) {
    var _a;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
    var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      if (optional) {
        return null;
      } else {
        throw Error("Service " + this.name + " is not available");
      }
    }
  };
  Provider2.prototype.getComponent = function() {
    return this.component;
  };
  Provider2.prototype.setComponent = function(component) {
    var e_1, _a;
    if (component.name !== this.name) {
      throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
    }
    if (this.component) {
      throw Error("Component for " + this.name + " has already been provided");
    }
    this.component = component;
    if (!this.shouldAutoInitialize()) {
      return;
    }
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME$1 });
      } catch (e) {
      }
    }
    try {
      for (var _b = __values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
        var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try {
          var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          instanceDeferred.resolve(instance);
        } catch (e) {
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_1)
          throw e_1.error;
      }
    }
  };
  Provider2.prototype.clearInstance = function(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    this.instancesDeferred.delete(identifier);
    this.instancesOptions.delete(identifier);
    this.instances.delete(identifier);
  };
  Provider2.prototype.delete = function() {
    return __awaiter(this, void 0, void 0, function() {
      var services;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            services = Array.from(this.instances.values());
            return [4, Promise.all(__spreadArray(__spreadArray([], __read(services.filter(function(service) {
              return "INTERNAL" in service;
            }).map(function(service) {
              return service.INTERNAL.delete();
            }))), __read(services.filter(function(service) {
              return "_delete" in service;
            }).map(function(service) {
              return service._delete();
            }))))];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  Provider2.prototype.isComponentSet = function() {
    return this.component != null;
  };
  Provider2.prototype.isInitialized = function(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    return this.instances.has(identifier);
  };
  Provider2.prototype.getOptions = function(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    return this.instancesOptions.get(identifier) || {};
  };
  Provider2.prototype.initialize = function(opts) {
    var e_2, _a;
    if (opts === void 0) {
      opts = {};
    }
    var _b = opts.options, options = _b === void 0 ? {} : _b;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
    }
    if (!this.isComponentSet()) {
      throw Error("Component " + this.name + " has not been registered yet");
    }
    var instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options
    });
    try {
      for (var _c = __values(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var _e = __read(_d.value, 2), instanceIdentifier = _e[0], instanceDeferred = _e[1];
        var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        if (normalizedIdentifier === normalizedDeferredIdentifier) {
          instanceDeferred.resolve(instance);
        }
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (_d && !_d.done && (_a = _c.return))
          _a.call(_c);
      } finally {
        if (e_2)
          throw e_2.error;
      }
    }
    return instance;
  };
  Provider2.prototype.onInit = function(callback, identifier) {
    var _a;
    var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    var existingInstance = this.instances.get(normalizedIdentifier);
    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }
    return function() {
      existingCallbacks.delete(callback);
    };
  };
  Provider2.prototype.invokeOnInitCallbacks = function(instance, identifier) {
    var e_3, _a;
    var callbacks = this.onInitCallbacks.get(identifier);
    if (!callbacks) {
      return;
    }
    try {
      for (var callbacks_1 = __values(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
        var callback = callbacks_1_1.value;
        try {
          callback(instance, identifier);
        } catch (_b) {
        }
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return))
          _a.call(callbacks_1);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
  };
  Provider2.prototype.getOrInitializeService = function(_a) {
    var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
    var instance = this.instances.get(instanceIdentifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options
      });
      this.instances.set(instanceIdentifier, instance);
      this.instancesOptions.set(instanceIdentifier, options);
      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_c) {
        }
      }
    }
    return instance || null;
  };
  Provider2.prototype.normalizeInstanceIdentifier = function(identifier) {
    if (identifier === void 0) {
      identifier = DEFAULT_ENTRY_NAME$1;
    }
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
    } else {
      return identifier;
    }
  };
  Provider2.prototype.shouldAutoInitialize = function() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  };
  return Provider2;
}();
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME$1 ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ComponentContainer = function() {
  function ComponentContainer2(name2) {
    this.name = name2;
    this.providers = new Map();
  }
  ComponentContainer2.prototype.addComponent = function(component) {
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error("Component " + component.name + " has already been registered with " + this.name);
    }
    provider.setComponent(component);
  };
  ComponentContainer2.prototype.addOrOverwriteComponent = function(component) {
    var provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  };
  ComponentContainer2.prototype.getProvider = function(name2) {
    if (this.providers.has(name2)) {
      return this.providers.get(name2);
    }
    var provider = new Provider(name2, this);
    this.providers.set(name2, provider);
    return provider;
  };
  ComponentContainer2.prototype.getProviders = function() {
    return Array.from(this.providers.values());
  };
  return ComponentContainer2;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
const defaultLogLevel = LogLevel.INFO;
const ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
const defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = new Date().toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
class Logger {
  constructor(name2) {
    this.name = name2;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
  constructor(container) {
    this.container = container;
  }
  getPlatformInfoString() {
    const providers = this.container.getProviders();
    return providers.map((provider) => {
      if (isVersionServiceProvider(provider)) {
        const service = provider.getImmediate();
        return `${service.library}/${service.version}`;
      } else {
        return null;
      }
    }).filter((logString) => logString).join(" ");
  }
}
function isVersionServiceProvider(provider) {
  const component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
const name$o = "@firebase/app";
const version$1$1 = "0.7.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger$1 = new Logger("@firebase/app");
const name$n = "@firebase/app-compat";
const name$m = "@firebase/analytics-compat";
const name$l = "@firebase/analytics";
const name$k = "@firebase/app-check-compat";
const name$j = "@firebase/app-check";
const name$i = "@firebase/auth";
const name$h = "@firebase/auth-compat";
const name$g = "@firebase/database";
const name$f = "@firebase/database-compat";
const name$e = "@firebase/functions";
const name$d = "@firebase/functions-compat";
const name$c = "@firebase/installations";
const name$b = "@firebase/installations-compat";
const name$a = "@firebase/messaging";
const name$9 = "@firebase/messaging-compat";
const name$8 = "@firebase/performance";
const name$7 = "@firebase/performance-compat";
const name$6 = "@firebase/remote-config";
const name$5 = "@firebase/remote-config-compat";
const name$4 = "@firebase/storage";
const name$3 = "@firebase/storage-compat";
const name$2$1 = "@firebase/firestore";
const name$1$1 = "@firebase/firestore-compat";
const name$p = "firebase";
const version$3 = "9.1.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME = "[DEFAULT]";
const PLATFORM_LOG_STRING = {
  [name$o]: "fire-core",
  [name$n]: "fire-core-compat",
  [name$l]: "fire-analytics",
  [name$m]: "fire-analytics-compat",
  [name$j]: "fire-app-check",
  [name$k]: "fire-app-check-compat",
  [name$i]: "fire-auth",
  [name$h]: "fire-auth-compat",
  [name$g]: "fire-rtdb",
  [name$f]: "fire-rtdb-compat",
  [name$e]: "fire-fn",
  [name$d]: "fire-fn-compat",
  [name$c]: "fire-iid",
  [name$b]: "fire-iid-compat",
  [name$a]: "fire-fcm",
  [name$9]: "fire-fcm-compat",
  [name$8]: "fire-perf",
  [name$7]: "fire-perf-compat",
  [name$6]: "fire-rc",
  [name$5]: "fire-rc-compat",
  [name$4]: "fire-gcs",
  [name$3]: "fire-gcs-compat",
  [name$2$1]: "fire-fst",
  [name$1$1]: "fire-fst-compat",
  "fire-js": "fire-js",
  [name$p]: "fire-js-all"
};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _apps = new Map();
const _components = new Map();
function _addComponent(app2, component) {
  try {
    app2.container.addComponent(component);
  } catch (e) {
    logger$1.debug(`Component ${component.name} failed to register with FirebaseApp ${app2.name}`, e);
  }
}
function _registerComponent(component) {
  const componentName = component.name;
  if (_components.has(componentName)) {
    logger$1.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component);
  for (const app2 of _apps.values()) {
    _addComponent(app2, component);
  }
  return true;
}
function _getProvider(app2, name2) {
  return app2.container.getProvider(name2);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
  ["no-app"]: "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
  ["bad-app-name"]: "Illegal App name: '{$appName}",
  ["duplicate-app"]: "Firebase App named '{$appName}' already exists with different options or config",
  ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
  ["invalid-app-argument"]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  ["invalid-log-argument"]: "First argument to `onLog` must be null or a function."
};
const ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
  constructor(options, config, container) {
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new Component("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = val;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(val) {
    this._isDeleted = val;
  }
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
    }
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SDK_VERSION$1 = version$3;
function initializeApp(options, rawConfig = {}) {
  if (typeof rawConfig !== "object") {
    const name3 = rawConfig;
    rawConfig = { name: name3 };
  }
  const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
  const name2 = config.name;
  if (typeof name2 !== "string" || !name2) {
    throw ERROR_FACTORY.create("bad-app-name", {
      appName: String(name2)
    });
  }
  const existingApp = _apps.get(name2);
  if (existingApp) {
    if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app", { appName: name2 });
    }
  }
  const container = new ComponentContainer(name2);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name2, newApp);
  return newApp;
}
function getApp(name2 = DEFAULT_ENTRY_NAME) {
  const app2 = _apps.get(name2);
  if (!app2) {
    throw ERROR_FACTORY.create("no-app", { appName: name2 });
  }
  return app2;
}
function registerVersion(libraryKeyOrName, version2, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version2.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [
      `Unable to register library "${library}" with version "${version2}":`
    ];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version2}" contains illegal characters (whitespace or "/")`);
    }
    logger$1.warn(warning.join(" "));
    return;
  }
  _registerComponent(new Component(`${library}-version`, () => ({ library, version: version2 }), "VERSION"));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
  _registerComponent(new Component("platform-logger", (container) => new PlatformLoggerServiceImpl(container), "PRIVATE"));
  registerVersion(name$o, version$1$1, variant);
  registerVersion(name$o, version$1$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents("");
var name$2 = "firebase";
var version$2 = "9.1.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerVersion(name$2, version$2, "app");
const name$1 = "@firebase/database";
const version$1 = "0.12.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let SDK_VERSION = "";
function setSDKVersion(version2) {
  SDK_VERSION = version2;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class DOMStorageWrapper {
  constructor(domStorage_) {
    this.domStorage_ = domStorage_;
    this.prefix_ = "firebase:";
  }
  set(key, value) {
    if (value == null) {
      this.domStorage_.removeItem(this.prefixedName_(key));
    } else {
      this.domStorage_.setItem(this.prefixedName_(key), stringify(value));
    }
  }
  get(key) {
    const storedVal = this.domStorage_.getItem(this.prefixedName_(key));
    if (storedVal == null) {
      return null;
    } else {
      return jsonEval(storedVal);
    }
  }
  remove(key) {
    this.domStorage_.removeItem(this.prefixedName_(key));
  }
  prefixedName_(name2) {
    return this.prefix_ + name2;
  }
  toString() {
    return this.domStorage_.toString();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MemoryStorage {
  constructor() {
    this.cache_ = {};
    this.isInMemoryStorage = true;
  }
  set(key, value) {
    if (value == null) {
      delete this.cache_[key];
    } else {
      this.cache_[key] = value;
    }
  }
  get(key) {
    if (contains(this.cache_, key)) {
      return this.cache_[key];
    }
    return null;
  }
  remove(key) {
    delete this.cache_[key];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const createStoragefor = function(domStorageName) {
  try {
    if (typeof window !== "undefined" && typeof window[domStorageName] !== "undefined") {
      const domStorage = window[domStorageName];
      domStorage.setItem("firebase:sentinel", "cache");
      domStorage.removeItem("firebase:sentinel");
      return new DOMStorageWrapper(domStorage);
    }
  } catch (e) {
  }
  return new MemoryStorage();
};
const PersistentStorage = createStoragefor("localStorage");
const SessionStorage = createStoragefor("sessionStorage");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logClient$1 = new Logger("@firebase/database");
const LUIDGenerator = function() {
  let id = 1;
  return function() {
    return id++;
  };
}();
const sha1 = function(str) {
  const utf8Bytes = stringToByteArray(str);
  const sha12 = new Sha1();
  sha12.update(utf8Bytes);
  const sha1Bytes = sha12.digest();
  return base64.encodeByteArray(sha1Bytes);
};
const buildLogMessage_ = function(...varArgs) {
  let message = "";
  for (let i = 0; i < varArgs.length; i++) {
    const arg = varArgs[i];
    if (Array.isArray(arg) || arg && typeof arg === "object" && typeof arg.length === "number") {
      message += buildLogMessage_.apply(null, arg);
    } else if (typeof arg === "object") {
      message += stringify(arg);
    } else {
      message += arg;
    }
    message += " ";
  }
  return message;
};
let logger = null;
let firstLog_ = true;
const enableLogging$1 = function(logger_, persistent) {
  assert(!persistent || logger_ === true || logger_ === false, "Can't turn on custom loggers persistently.");
  if (logger_ === true) {
    logClient$1.logLevel = LogLevel.VERBOSE;
    logger = logClient$1.log.bind(logClient$1);
    if (persistent) {
      SessionStorage.set("logging_enabled", true);
    }
  } else if (typeof logger_ === "function") {
    logger = logger_;
  } else {
    logger = null;
    SessionStorage.remove("logging_enabled");
  }
};
const log = function(...varArgs) {
  if (firstLog_ === true) {
    firstLog_ = false;
    if (logger === null && SessionStorage.get("logging_enabled") === true) {
      enableLogging$1(true);
    }
  }
  if (logger) {
    const message = buildLogMessage_.apply(null, varArgs);
    logger(message);
  }
};
const logWrapper = function(prefix) {
  return function(...varArgs) {
    log(prefix, ...varArgs);
  };
};
const error = function(...varArgs) {
  const message = "FIREBASE INTERNAL ERROR: " + buildLogMessage_(...varArgs);
  logClient$1.error(message);
};
const fatal = function(...varArgs) {
  const message = `FIREBASE FATAL ERROR: ${buildLogMessage_(...varArgs)}`;
  logClient$1.error(message);
  throw new Error(message);
};
const warn = function(...varArgs) {
  const message = "FIREBASE WARNING: " + buildLogMessage_(...varArgs);
  logClient$1.warn(message);
};
const warnIfPageIsSecure = function() {
  if (typeof window !== "undefined" && window.location && window.location.protocol && window.location.protocol.indexOf("https:") !== -1) {
    warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
  }
};
const isInvalidJSONNumber = function(data) {
  return typeof data === "number" && (data !== data || data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY);
};
const executeWhenDOMReady = function(fn) {
  if (document.readyState === "complete") {
    fn();
  } else {
    let called = false;
    const wrappedFn = function() {
      if (!document.body) {
        setTimeout(wrappedFn, Math.floor(10));
        return;
      }
      if (!called) {
        called = true;
        fn();
      }
    };
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", wrappedFn, false);
      window.addEventListener("load", wrappedFn, false);
    } else if (document.attachEvent) {
      document.attachEvent("onreadystatechange", () => {
        if (document.readyState === "complete") {
          wrappedFn();
        }
      });
      window.attachEvent("onload", wrappedFn);
    }
  }
};
const MIN_NAME = "[MIN_NAME]";
const MAX_NAME = "[MAX_NAME]";
const nameCompare = function(a, b) {
  if (a === b) {
    return 0;
  } else if (a === MIN_NAME || b === MAX_NAME) {
    return -1;
  } else if (b === MIN_NAME || a === MAX_NAME) {
    return 1;
  } else {
    const aAsInt = tryParseInt(a), bAsInt = tryParseInt(b);
    if (aAsInt !== null) {
      if (bAsInt !== null) {
        return aAsInt - bAsInt === 0 ? a.length - b.length : aAsInt - bAsInt;
      } else {
        return -1;
      }
    } else if (bAsInt !== null) {
      return 1;
    } else {
      return a < b ? -1 : 1;
    }
  }
};
const stringCompare = function(a, b) {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
};
const requireKey = function(key, obj) {
  if (obj && key in obj) {
    return obj[key];
  } else {
    throw new Error("Missing required key (" + key + ") in object: " + stringify(obj));
  }
};
const ObjectToUniqueKey = function(obj) {
  if (typeof obj !== "object" || obj === null) {
    return stringify(obj);
  }
  const keys = [];
  for (const k in obj) {
    keys.push(k);
  }
  keys.sort();
  let key = "{";
  for (let i = 0; i < keys.length; i++) {
    if (i !== 0) {
      key += ",";
    }
    key += stringify(keys[i]);
    key += ":";
    key += ObjectToUniqueKey(obj[keys[i]]);
  }
  key += "}";
  return key;
};
const splitStringBySize = function(str, segsize) {
  const len = str.length;
  if (len <= segsize) {
    return [str];
  }
  const dataSegs = [];
  for (let c = 0; c < len; c += segsize) {
    if (c + segsize > len) {
      dataSegs.push(str.substring(c, len));
    } else {
      dataSegs.push(str.substring(c, c + segsize));
    }
  }
  return dataSegs;
};
function each(obj, fn) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn(key, obj[key]);
    }
  }
}
const doubleToIEEE754String = function(v) {
  assert(!isInvalidJSONNumber(v), "Invalid JSON number");
  const ebits = 11, fbits = 52;
  const bias = (1 << ebits - 1) - 1;
  let s, e, f, ln, i;
  if (v === 0) {
    e = 0;
    f = 0;
    s = 1 / v === -Infinity ? 1 : 0;
  } else {
    s = v < 0;
    v = Math.abs(v);
    if (v >= Math.pow(2, 1 - bias)) {
      ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
      e = ln + bias;
      f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
    } else {
      e = 0;
      f = Math.round(v / Math.pow(2, 1 - bias - fbits));
    }
  }
  const bits = [];
  for (i = fbits; i; i -= 1) {
    bits.push(f % 2 ? 1 : 0);
    f = Math.floor(f / 2);
  }
  for (i = ebits; i; i -= 1) {
    bits.push(e % 2 ? 1 : 0);
    e = Math.floor(e / 2);
  }
  bits.push(s ? 1 : 0);
  bits.reverse();
  const str = bits.join("");
  let hexByteString = "";
  for (i = 0; i < 64; i += 8) {
    let hexByte = parseInt(str.substr(i, 8), 2).toString(16);
    if (hexByte.length === 1) {
      hexByte = "0" + hexByte;
    }
    hexByteString = hexByteString + hexByte;
  }
  return hexByteString.toLowerCase();
};
const isChromeExtensionContentScript = function() {
  return !!(typeof window === "object" && window["chrome"] && window["chrome"]["extension"] && !/^chrome/.test(window.location.href));
};
const isWindowsStoreApp = function() {
  return typeof Windows === "object" && typeof Windows.UI === "object";
};
function errorForServerCode(code, query) {
  let reason = "Unknown Error";
  if (code === "too_big") {
    reason = "The data requested exceeds the maximum size that can be accessed with a single request.";
  } else if (code === "permission_denied") {
    reason = "Client doesn't have permission to access the desired data.";
  } else if (code === "unavailable") {
    reason = "The service is unavailable";
  }
  const error2 = new Error(code + " at " + query._path.toString() + ": " + reason);
  error2.code = code.toUpperCase();
  return error2;
}
const INTEGER_REGEXP_ = new RegExp("^-?(0*)\\d{1,10}$");
const INTEGER_32_MIN = -2147483648;
const INTEGER_32_MAX = 2147483647;
const tryParseInt = function(str) {
  if (INTEGER_REGEXP_.test(str)) {
    const intVal = Number(str);
    if (intVal >= INTEGER_32_MIN && intVal <= INTEGER_32_MAX) {
      return intVal;
    }
  }
  return null;
};
const exceptionGuard = function(fn) {
  try {
    fn();
  } catch (e) {
    setTimeout(() => {
      const stack = e.stack || "";
      warn("Exception was thrown by user callback.", stack);
      throw e;
    }, Math.floor(0));
  }
};
const beingCrawled = function() {
  const userAgent = typeof window === "object" && window["navigator"] && window["navigator"]["userAgent"] || "";
  return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0;
};
const setTimeoutNonBlocking = function(fn, time) {
  const timeout = setTimeout(fn, time);
  if (typeof timeout === "object" && timeout["unref"]) {
    timeout["unref"]();
  }
  return timeout;
};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AppCheckTokenProvider {
  constructor(appName_, appCheckProvider) {
    this.appName_ = appName_;
    this.appCheckProvider = appCheckProvider;
    this.appCheck = appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.getImmediate({ optional: true });
    if (!this.appCheck) {
      appCheckProvider === null || appCheckProvider === void 0 ? void 0 : appCheckProvider.get().then((appCheck) => this.appCheck = appCheck);
    }
  }
  getToken(forceRefresh) {
    if (!this.appCheck) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.appCheck) {
            this.getToken(forceRefresh).then(resolve, reject);
          } else {
            resolve(null);
          }
        }, 0);
      });
    }
    return this.appCheck.getToken(forceRefresh);
  }
  addTokenChangeListener(listener) {
    var _a;
    (_a = this.appCheckProvider) === null || _a === void 0 ? void 0 : _a.get().then((appCheck) => appCheck.addTokenListener(listener));
  }
  notifyForInvalidToken() {
    warn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAuthTokenProvider {
  constructor(appName_, firebaseOptions_, authProvider_) {
    this.appName_ = appName_;
    this.firebaseOptions_ = firebaseOptions_;
    this.authProvider_ = authProvider_;
    this.auth_ = null;
    this.auth_ = authProvider_.getImmediate({ optional: true });
    if (!this.auth_) {
      authProvider_.onInit((auth2) => this.auth_ = auth2);
    }
  }
  getToken(forceRefresh) {
    if (!this.auth_) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.auth_) {
            this.getToken(forceRefresh).then(resolve, reject);
          } else {
            resolve(null);
          }
        }, 0);
      });
    }
    return this.auth_.getToken(forceRefresh).catch((error2) => {
      if (error2 && error2.code === "auth/token-not-initialized") {
        log("Got auth/token-not-initialized error.  Treating as null token.");
        return null;
      } else {
        return Promise.reject(error2);
      }
    });
  }
  addTokenChangeListener(listener) {
    if (this.auth_) {
      this.auth_.addAuthTokenListener(listener);
    } else {
      this.authProvider_.get().then((auth2) => auth2.addAuthTokenListener(listener));
    }
  }
  removeTokenChangeListener(listener) {
    this.authProvider_.get().then((auth2) => auth2.removeAuthTokenListener(listener));
  }
  notifyForInvalidToken() {
    let errorMessage = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
    if ("credential" in this.firebaseOptions_) {
      errorMessage += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.';
    } else if ("serviceAccount" in this.firebaseOptions_) {
      errorMessage += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.';
    } else {
      errorMessage += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.';
    }
    warn(errorMessage);
  }
}
class EmulatorTokenProvider {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }
  getToken(forceRefresh) {
    return Promise.resolve({
      accessToken: this.accessToken
    });
  }
  addTokenChangeListener(listener) {
    listener(this.accessToken);
  }
  removeTokenChangeListener(listener) {
  }
  notifyForInvalidToken() {
  }
}
EmulatorTokenProvider.OWNER = "owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PROTOCOL_VERSION = "5";
const VERSION_PARAM = "v";
const TRANSPORT_SESSION_PARAM = "s";
const REFERER_PARAM = "r";
const FORGE_REF = "f";
const FORGE_DOMAIN_RE = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
const LAST_SESSION_PARAM = "ls";
const APPLICATION_ID_PARAM = "p";
const APP_CHECK_TOKEN_PARAM = "ac";
const WEBSOCKET = "websocket";
const LONG_POLLING = "long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class RepoInfo {
  constructor(host, secure, namespace, webSocketOnly, nodeAdmin = false, persistenceKey = "", includeNamespaceInQueryParams = false) {
    this.secure = secure;
    this.namespace = namespace;
    this.webSocketOnly = webSocketOnly;
    this.nodeAdmin = nodeAdmin;
    this.persistenceKey = persistenceKey;
    this.includeNamespaceInQueryParams = includeNamespaceInQueryParams;
    this._host = host.toLowerCase();
    this._domain = this._host.substr(this._host.indexOf(".") + 1);
    this.internalHost = PersistentStorage.get("host:" + host) || this._host;
  }
  isCacheableHost() {
    return this.internalHost.substr(0, 2) === "s-";
  }
  isCustomHost() {
    return this._domain !== "firebaseio.com" && this._domain !== "firebaseio-demo.com";
  }
  get host() {
    return this._host;
  }
  set host(newHost) {
    if (newHost !== this.internalHost) {
      this.internalHost = newHost;
      if (this.isCacheableHost()) {
        PersistentStorage.set("host:" + this._host, this.internalHost);
      }
    }
  }
  toString() {
    let str = this.toURLString();
    if (this.persistenceKey) {
      str += "<" + this.persistenceKey + ">";
    }
    return str;
  }
  toURLString() {
    const protocol = this.secure ? "https://" : "http://";
    const query = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
    return `${protocol}${this.host}/${query}`;
  }
}
function repoInfoNeedsQueryParam(repoInfo) {
  return repoInfo.host !== repoInfo.internalHost || repoInfo.isCustomHost() || repoInfo.includeNamespaceInQueryParams;
}
function repoInfoConnectionURL(repoInfo, type, params) {
  assert(typeof type === "string", "typeof type must == string");
  assert(typeof params === "object", "typeof params must == object");
  let connURL;
  if (type === WEBSOCKET) {
    connURL = (repoInfo.secure ? "wss://" : "ws://") + repoInfo.internalHost + "/.ws?";
  } else if (type === LONG_POLLING) {
    connURL = (repoInfo.secure ? "https://" : "http://") + repoInfo.internalHost + "/.lp?";
  } else {
    throw new Error("Unknown connection type: " + type);
  }
  if (repoInfoNeedsQueryParam(repoInfo)) {
    params["ns"] = repoInfo.namespace;
  }
  const pairs = [];
  each(params, (key, value) => {
    pairs.push(key + "=" + value);
  });
  return connURL + pairs.join("&");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class StatsCollection {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(name2, amount = 1) {
    if (!contains(this.counters_, name2)) {
      this.counters_[name2] = 0;
    }
    this.counters_[name2] += amount;
  }
  get() {
    return deepCopy(this.counters_);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const collections = {};
const reporters = {};
function statsManagerGetCollection(repoInfo) {
  const hashString = repoInfo.toString();
  if (!collections[hashString]) {
    collections[hashString] = new StatsCollection();
  }
  return collections[hashString];
}
function statsManagerGetOrCreateReporter(repoInfo, creatorFunction) {
  const hashString = repoInfo.toString();
  if (!reporters[hashString]) {
    reporters[hashString] = creatorFunction();
  }
  return reporters[hashString];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PacketReceiver {
  constructor(onMessage_) {
    this.onMessage_ = onMessage_;
    this.pendingResponses = [];
    this.currentResponseNum = 0;
    this.closeAfterResponse = -1;
    this.onClose = null;
  }
  closeAfter(responseNum, callback) {
    this.closeAfterResponse = responseNum;
    this.onClose = callback;
    if (this.closeAfterResponse < this.currentResponseNum) {
      this.onClose();
      this.onClose = null;
    }
  }
  handleResponse(requestNum, data) {
    this.pendingResponses[requestNum] = data;
    while (this.pendingResponses[this.currentResponseNum]) {
      const toProcess = this.pendingResponses[this.currentResponseNum];
      delete this.pendingResponses[this.currentResponseNum];
      for (let i = 0; i < toProcess.length; ++i) {
        if (toProcess[i]) {
          exceptionGuard(() => {
            this.onMessage_(toProcess[i]);
          });
        }
      }
      if (this.currentResponseNum === this.closeAfterResponse) {
        if (this.onClose) {
          this.onClose();
          this.onClose = null;
        }
        break;
      }
      this.currentResponseNum++;
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const FIREBASE_LONGPOLL_START_PARAM = "start";
const FIREBASE_LONGPOLL_CLOSE_COMMAND = "close";
const FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand";
const FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB";
const FIREBASE_LONGPOLL_ID_PARAM = "id";
const FIREBASE_LONGPOLL_PW_PARAM = "pw";
const FIREBASE_LONGPOLL_SERIAL_PARAM = "ser";
const FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb";
const FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg";
const FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts";
const FIREBASE_LONGPOLL_DATA_PARAM = "d";
const FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";
const MAX_URL_DATA_SIZE = 1870;
const SEG_HEADER_SIZE = 30;
const MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
const KEEPALIVE_REQUEST_INTERVAL = 25e3;
const LP_CONNECT_TIMEOUT = 3e4;
class BrowserPollConnection {
  constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId) {
    this.connId = connId;
    this.repoInfo = repoInfo;
    this.applicationId = applicationId;
    this.appCheckToken = appCheckToken;
    this.authToken = authToken;
    this.transportSessionId = transportSessionId;
    this.lastSessionId = lastSessionId;
    this.bytesSent = 0;
    this.bytesReceived = 0;
    this.everConnected_ = false;
    this.log_ = logWrapper(connId);
    this.stats_ = statsManagerGetCollection(repoInfo);
    this.urlFn = (params) => {
      if (this.appCheckToken) {
        params[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
      }
      return repoInfoConnectionURL(repoInfo, LONG_POLLING, params);
    };
  }
  open(onMessage, onDisconnect) {
    this.curSegmentNum = 0;
    this.onDisconnect_ = onDisconnect;
    this.myPacketOrderer = new PacketReceiver(onMessage);
    this.isClosed_ = false;
    this.connectTimeoutTimer_ = setTimeout(() => {
      this.log_("Timed out trying to connect.");
      this.onClosed_();
      this.connectTimeoutTimer_ = null;
    }, Math.floor(LP_CONNECT_TIMEOUT));
    executeWhenDOMReady(() => {
      if (this.isClosed_) {
        return;
      }
      this.scriptTagHolder = new FirebaseIFrameScriptHolder((...args) => {
        const [command, arg1, arg2, arg3, arg4] = args;
        this.incrementIncomingBytes_(args);
        if (!this.scriptTagHolder) {
          return;
        }
        if (this.connectTimeoutTimer_) {
          clearTimeout(this.connectTimeoutTimer_);
          this.connectTimeoutTimer_ = null;
        }
        this.everConnected_ = true;
        if (command === FIREBASE_LONGPOLL_START_PARAM) {
          this.id = arg1;
          this.password = arg2;
        } else if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
          if (arg1) {
            this.scriptTagHolder.sendNewPolls = false;
            this.myPacketOrderer.closeAfter(arg1, () => {
              this.onClosed_();
            });
          } else {
            this.onClosed_();
          }
        } else {
          throw new Error("Unrecognized command received: " + command);
        }
      }, (...args) => {
        const [pN, data] = args;
        this.incrementIncomingBytes_(args);
        this.myPacketOrderer.handleResponse(pN, data);
      }, () => {
        this.onClosed_();
      }, this.urlFn);
      const urlParams = {};
      urlParams[FIREBASE_LONGPOLL_START_PARAM] = "t";
      urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 1e8);
      if (this.scriptTagHolder.uniqueCallbackIdentifier) {
        urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = this.scriptTagHolder.uniqueCallbackIdentifier;
      }
      urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
      if (this.transportSessionId) {
        urlParams[TRANSPORT_SESSION_PARAM] = this.transportSessionId;
      }
      if (this.lastSessionId) {
        urlParams[LAST_SESSION_PARAM] = this.lastSessionId;
      }
      if (this.applicationId) {
        urlParams[APPLICATION_ID_PARAM] = this.applicationId;
      }
      if (this.appCheckToken) {
        urlParams[APP_CHECK_TOKEN_PARAM] = this.appCheckToken;
      }
      if (typeof location !== "undefined" && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) {
        urlParams[REFERER_PARAM] = FORGE_REF;
      }
      const connectURL = this.urlFn(urlParams);
      this.log_("Connecting via long-poll to " + connectURL);
      this.scriptTagHolder.addTag(connectURL, () => {
      });
    });
  }
  start() {
    this.scriptTagHolder.startLongPoll(this.id, this.password);
    this.addDisconnectPingFrame(this.id, this.password);
  }
  static forceAllow() {
    BrowserPollConnection.forceAllow_ = true;
  }
  static forceDisallow() {
    BrowserPollConnection.forceDisallow_ = true;
  }
  static isAvailable() {
    if (BrowserPollConnection.forceAllow_) {
      return true;
    } else {
      return !BrowserPollConnection.forceDisallow_ && typeof document !== "undefined" && document.createElement != null && !isChromeExtensionContentScript() && !isWindowsStoreApp();
    }
  }
  markConnectionHealthy() {
  }
  shutdown_() {
    this.isClosed_ = true;
    if (this.scriptTagHolder) {
      this.scriptTagHolder.close();
      this.scriptTagHolder = null;
    }
    if (this.myDisconnFrame) {
      document.body.removeChild(this.myDisconnFrame);
      this.myDisconnFrame = null;
    }
    if (this.connectTimeoutTimer_) {
      clearTimeout(this.connectTimeoutTimer_);
      this.connectTimeoutTimer_ = null;
    }
  }
  onClosed_() {
    if (!this.isClosed_) {
      this.log_("Longpoll is closing itself");
      this.shutdown_();
      if (this.onDisconnect_) {
        this.onDisconnect_(this.everConnected_);
        this.onDisconnect_ = null;
      }
    }
  }
  close() {
    if (!this.isClosed_) {
      this.log_("Longpoll is being closed.");
      this.shutdown_();
    }
  }
  send(data) {
    const dataStr = stringify(data);
    this.bytesSent += dataStr.length;
    this.stats_.incrementCounter("bytes_sent", dataStr.length);
    const base64data = base64Encode(dataStr);
    const dataSegs = splitStringBySize(base64data, MAX_PAYLOAD_SIZE);
    for (let i = 0; i < dataSegs.length; i++) {
      this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
      this.curSegmentNum++;
    }
  }
  addDisconnectPingFrame(id, pw) {
    this.myDisconnFrame = document.createElement("iframe");
    const urlParams = {};
    urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = "t";
    urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
    urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
    this.myDisconnFrame.src = this.urlFn(urlParams);
    this.myDisconnFrame.style.display = "none";
    document.body.appendChild(this.myDisconnFrame);
  }
  incrementIncomingBytes_(args) {
    const bytesReceived = stringify(args).length;
    this.bytesReceived += bytesReceived;
    this.stats_.incrementCounter("bytes_received", bytesReceived);
  }
}
class FirebaseIFrameScriptHolder {
  constructor(commandCB, onMessageCB, onDisconnect, urlFn) {
    this.onDisconnect = onDisconnect;
    this.urlFn = urlFn;
    this.outstandingRequests = new Set();
    this.pendingSegs = [];
    this.currentSerial = Math.floor(Math.random() * 1e8);
    this.sendNewPolls = true;
    {
      this.uniqueCallbackIdentifier = LUIDGenerator();
      window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
      window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
      this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_();
      let script = "";
      if (this.myIFrame.src && this.myIFrame.src.substr(0, "javascript:".length) === "javascript:") {
        const currentDomain = document.domain;
        script = '<script>document.domain="' + currentDomain + '";<\/script>';
      }
      const iframeContents = "<html><body>" + script + "</body></html>";
      try {
        this.myIFrame.doc.open();
        this.myIFrame.doc.write(iframeContents);
        this.myIFrame.doc.close();
      } catch (e) {
        log("frame writing exception");
        if (e.stack) {
          log(e.stack);
        }
        log(e);
      }
    }
  }
  static createIFrame_() {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    if (document.body) {
      document.body.appendChild(iframe);
      try {
        const a = iframe.contentWindow.document;
        if (!a) {
          log("No IE domain setting required");
        }
      } catch (e) {
        const domain = document.domain;
        iframe.src = "javascript:void((function(){document.open();document.domain='" + domain + "';document.close();})())";
      }
    } else {
      throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
    }
    if (iframe.contentDocument) {
      iframe.doc = iframe.contentDocument;
    } else if (iframe.contentWindow) {
      iframe.doc = iframe.contentWindow.document;
    } else if (iframe.document) {
      iframe.doc = iframe.document;
    }
    return iframe;
  }
  close() {
    this.alive = false;
    if (this.myIFrame) {
      this.myIFrame.doc.body.innerHTML = "";
      setTimeout(() => {
        if (this.myIFrame !== null) {
          document.body.removeChild(this.myIFrame);
          this.myIFrame = null;
        }
      }, Math.floor(0));
    }
    const onDisconnect = this.onDisconnect;
    if (onDisconnect) {
      this.onDisconnect = null;
      onDisconnect();
    }
  }
  startLongPoll(id, pw) {
    this.myID = id;
    this.myPW = pw;
    this.alive = true;
    while (this.newRequest_()) {
    }
  }
  newRequest_() {
    if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
      this.currentSerial++;
      const urlParams = {};
      urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
      urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
      urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
      let theURL = this.urlFn(urlParams);
      let curDataString = "";
      let i = 0;
      while (this.pendingSegs.length > 0) {
        const nextSeg = this.pendingSegs[0];
        if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <= MAX_URL_DATA_SIZE) {
          const theSeg = this.pendingSegs.shift();
          curDataString = curDataString + "&" + FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + "=" + theSeg.seg + "&" + FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + "=" + theSeg.ts + "&" + FIREBASE_LONGPOLL_DATA_PARAM + i + "=" + theSeg.d;
          i++;
        } else {
          break;
        }
      }
      theURL = theURL + curDataString;
      this.addLongPollTag_(theURL, this.currentSerial);
      return true;
    } else {
      return false;
    }
  }
  enqueueSegment(segnum, totalsegs, data) {
    this.pendingSegs.push({ seg: segnum, ts: totalsegs, d: data });
    if (this.alive) {
      this.newRequest_();
    }
  }
  addLongPollTag_(url, serial) {
    this.outstandingRequests.add(serial);
    const doNewRequest = () => {
      this.outstandingRequests.delete(serial);
      this.newRequest_();
    };
    const keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
    const readyStateCB = () => {
      clearTimeout(keepaliveTimeout);
      doNewRequest();
    };
    this.addTag(url, readyStateCB);
  }
  addTag(url, loadCB) {
    {
      setTimeout(() => {
        try {
          if (!this.sendNewPolls) {
            return;
          }
          const newScript = this.myIFrame.doc.createElement("script");
          newScript.type = "text/javascript";
          newScript.async = true;
          newScript.src = url;
          newScript.onload = newScript.onreadystatechange = function() {
            const rstate = newScript.readyState;
            if (!rstate || rstate === "loaded" || rstate === "complete") {
              newScript.onload = newScript.onreadystatechange = null;
              if (newScript.parentNode) {
                newScript.parentNode.removeChild(newScript);
              }
              loadCB();
            }
          };
          newScript.onerror = () => {
            log("Long-poll script failed to load: " + url);
            this.sendNewPolls = false;
            this.close();
          };
          this.myIFrame.doc.body.appendChild(newScript);
        } catch (e) {
        }
      }, Math.floor(1));
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const WEBSOCKET_MAX_FRAME_SIZE = 16384;
const WEBSOCKET_KEEPALIVE_INTERVAL = 45e3;
let WebSocketImpl = null;
if (typeof MozWebSocket !== "undefined") {
  WebSocketImpl = MozWebSocket;
} else if (typeof WebSocket !== "undefined") {
  WebSocketImpl = WebSocket;
}
class WebSocketConnection {
  constructor(connId, repoInfo, applicationId, appCheckToken, authToken, transportSessionId, lastSessionId) {
    this.connId = connId;
    this.applicationId = applicationId;
    this.appCheckToken = appCheckToken;
    this.authToken = authToken;
    this.keepaliveTimer = null;
    this.frames = null;
    this.totalFrames = 0;
    this.bytesSent = 0;
    this.bytesReceived = 0;
    this.log_ = logWrapper(this.connId);
    this.stats_ = statsManagerGetCollection(repoInfo);
    this.connURL = WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken);
    this.nodeAdmin = repoInfo.nodeAdmin;
  }
  static connectionURL_(repoInfo, transportSessionId, lastSessionId, appCheckToken) {
    const urlParams = {};
    urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
    if (typeof location !== "undefined" && location.hostname && FORGE_DOMAIN_RE.test(location.hostname)) {
      urlParams[REFERER_PARAM] = FORGE_REF;
    }
    if (transportSessionId) {
      urlParams[TRANSPORT_SESSION_PARAM] = transportSessionId;
    }
    if (lastSessionId) {
      urlParams[LAST_SESSION_PARAM] = lastSessionId;
    }
    if (appCheckToken) {
      urlParams[APP_CHECK_TOKEN_PARAM] = appCheckToken;
    }
    return repoInfoConnectionURL(repoInfo, WEBSOCKET, urlParams);
  }
  open(onMessage, onDisconnect) {
    this.onDisconnect = onDisconnect;
    this.onMessage = onMessage;
    this.log_("Websocket connecting to " + this.connURL);
    this.everConnected_ = false;
    PersistentStorage.set("previous_websocket_failure", true);
    try {
      if (isNodeSdk())
        ;
      else {
        const options = {
          headers: {
            "X-Firebase-GMPID": this.applicationId || "",
            "X-Firebase-AppCheck": this.appCheckToken || ""
          }
        };
        this.mySock = new WebSocketImpl(this.connURL, [], options);
      }
    } catch (e) {
      this.log_("Error instantiating WebSocket.");
      const error2 = e.message || e.data;
      if (error2) {
        this.log_(error2);
      }
      this.onClosed_();
      return;
    }
    this.mySock.onopen = () => {
      this.log_("Websocket connected.");
      this.everConnected_ = true;
    };
    this.mySock.onclose = () => {
      this.log_("Websocket connection was disconnected.");
      this.mySock = null;
      this.onClosed_();
    };
    this.mySock.onmessage = (m) => {
      this.handleIncomingFrame(m);
    };
    this.mySock.onerror = (e) => {
      this.log_("WebSocket error.  Closing connection.");
      const error2 = e.message || e.data;
      if (error2) {
        this.log_(error2);
      }
      this.onClosed_();
    };
  }
  start() {
  }
  static forceDisallow() {
    WebSocketConnection.forceDisallow_ = true;
  }
  static isAvailable() {
    let isOldAndroid = false;
    if (typeof navigator !== "undefined" && navigator.userAgent) {
      const oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
      const oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
      if (oldAndroidMatch && oldAndroidMatch.length > 1) {
        if (parseFloat(oldAndroidMatch[1]) < 4.4) {
          isOldAndroid = true;
        }
      }
    }
    return !isOldAndroid && WebSocketImpl !== null && !WebSocketConnection.forceDisallow_;
  }
  static previouslyFailed() {
    return PersistentStorage.isInMemoryStorage || PersistentStorage.get("previous_websocket_failure") === true;
  }
  markConnectionHealthy() {
    PersistentStorage.remove("previous_websocket_failure");
  }
  appendFrame_(data) {
    this.frames.push(data);
    if (this.frames.length === this.totalFrames) {
      const fullMess = this.frames.join("");
      this.frames = null;
      const jsonMess = jsonEval(fullMess);
      this.onMessage(jsonMess);
    }
  }
  handleNewFrameCount_(frameCount) {
    this.totalFrames = frameCount;
    this.frames = [];
  }
  extractFrameCount_(data) {
    assert(this.frames === null, "We already have a frame buffer");
    if (data.length <= 6) {
      const frameCount = Number(data);
      if (!isNaN(frameCount)) {
        this.handleNewFrameCount_(frameCount);
        return null;
      }
    }
    this.handleNewFrameCount_(1);
    return data;
  }
  handleIncomingFrame(mess) {
    if (this.mySock === null) {
      return;
    }
    const data = mess["data"];
    this.bytesReceived += data.length;
    this.stats_.incrementCounter("bytes_received", data.length);
    this.resetKeepAlive();
    if (this.frames !== null) {
      this.appendFrame_(data);
    } else {
      const remainingData = this.extractFrameCount_(data);
      if (remainingData !== null) {
        this.appendFrame_(remainingData);
      }
    }
  }
  send(data) {
    this.resetKeepAlive();
    const dataStr = stringify(data);
    this.bytesSent += dataStr.length;
    this.stats_.incrementCounter("bytes_sent", dataStr.length);
    const dataSegs = splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE);
    if (dataSegs.length > 1) {
      this.sendString_(String(dataSegs.length));
    }
    for (let i = 0; i < dataSegs.length; i++) {
      this.sendString_(dataSegs[i]);
    }
  }
  shutdown_() {
    this.isClosed_ = true;
    if (this.keepaliveTimer) {
      clearInterval(this.keepaliveTimer);
      this.keepaliveTimer = null;
    }
    if (this.mySock) {
      this.mySock.close();
      this.mySock = null;
    }
  }
  onClosed_() {
    if (!this.isClosed_) {
      this.log_("WebSocket is closing itself");
      this.shutdown_();
      if (this.onDisconnect) {
        this.onDisconnect(this.everConnected_);
        this.onDisconnect = null;
      }
    }
  }
  close() {
    if (!this.isClosed_) {
      this.log_("WebSocket is being closed");
      this.shutdown_();
    }
  }
  resetKeepAlive() {
    clearInterval(this.keepaliveTimer);
    this.keepaliveTimer = setInterval(() => {
      if (this.mySock) {
        this.sendString_("0");
      }
      this.resetKeepAlive();
    }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
  }
  sendString_(str) {
    try {
      this.mySock.send(str);
    } catch (e) {
      this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection.");
      setTimeout(this.onClosed_.bind(this), 0);
    }
  }
}
WebSocketConnection.responsesRequiredToBeHealthy = 2;
WebSocketConnection.healthyTimeout = 3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class TransportManager {
  constructor(repoInfo) {
    this.initTransports_(repoInfo);
  }
  static get ALL_TRANSPORTS() {
    return [BrowserPollConnection, WebSocketConnection];
  }
  initTransports_(repoInfo) {
    const isWebSocketsAvailable = WebSocketConnection && WebSocketConnection["isAvailable"]();
    let isSkipPollConnection = isWebSocketsAvailable && !WebSocketConnection.previouslyFailed();
    if (repoInfo.webSocketOnly) {
      if (!isWebSocketsAvailable) {
        warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
      }
      isSkipPollConnection = true;
    }
    if (isSkipPollConnection) {
      this.transports_ = [WebSocketConnection];
    } else {
      const transports = this.transports_ = [];
      for (const transport of TransportManager.ALL_TRANSPORTS) {
        if (transport && transport["isAvailable"]()) {
          transports.push(transport);
        }
      }
    }
  }
  initialTransport() {
    if (this.transports_.length > 0) {
      return this.transports_[0];
    } else {
      throw new Error("No transports available");
    }
  }
  upgradeTransport() {
    if (this.transports_.length > 1) {
      return this.transports_[1];
    } else {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const UPGRADE_TIMEOUT = 6e4;
const DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5e3;
const BYTES_SENT_HEALTHY_OVERRIDE = 10 * 1024;
const BYTES_RECEIVED_HEALTHY_OVERRIDE = 100 * 1024;
const MESSAGE_TYPE = "t";
const MESSAGE_DATA = "d";
const CONTROL_SHUTDOWN = "s";
const CONTROL_RESET = "r";
const CONTROL_ERROR = "e";
const CONTROL_PONG = "o";
const SWITCH_ACK = "a";
const END_TRANSMISSION = "n";
const PING = "p";
const SERVER_HELLO = "h";
class Connection {
  constructor(id, repoInfo_, applicationId_, appCheckToken_, authToken_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId) {
    this.id = id;
    this.repoInfo_ = repoInfo_;
    this.applicationId_ = applicationId_;
    this.appCheckToken_ = appCheckToken_;
    this.authToken_ = authToken_;
    this.onMessage_ = onMessage_;
    this.onReady_ = onReady_;
    this.onDisconnect_ = onDisconnect_;
    this.onKill_ = onKill_;
    this.lastSessionId = lastSessionId;
    this.connectionCount = 0;
    this.pendingDataMessages = [];
    this.state_ = 0;
    this.log_ = logWrapper("c:" + this.id + ":");
    this.transportManager_ = new TransportManager(repoInfo_);
    this.log_("Connection created");
    this.start_();
  }
  start_() {
    const conn = this.transportManager_.initialTransport();
    this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId);
    this.primaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
    const onMessageReceived = this.connReceiver_(this.conn_);
    const onConnectionLost = this.disconnReceiver_(this.conn_);
    this.tx_ = this.conn_;
    this.rx_ = this.conn_;
    this.secondaryConn_ = null;
    this.isHealthy_ = false;
    setTimeout(() => {
      this.conn_ && this.conn_.open(onMessageReceived, onConnectionLost);
    }, Math.floor(0));
    const healthyTimeoutMS = conn["healthyTimeout"] || 0;
    if (healthyTimeoutMS > 0) {
      this.healthyTimeout_ = setTimeoutNonBlocking(() => {
        this.healthyTimeout_ = null;
        if (!this.isHealthy_) {
          if (this.conn_ && this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
            this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy.");
            this.isHealthy_ = true;
            this.conn_.markConnectionHealthy();
          } else if (this.conn_ && this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) {
            this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.");
          } else {
            this.log_("Closing unhealthy connection after timeout.");
            this.close();
          }
        }
      }, Math.floor(healthyTimeoutMS));
    }
  }
  nextTransportId_() {
    return "c:" + this.id + ":" + this.connectionCount++;
  }
  disconnReceiver_(conn) {
    return (everConnected) => {
      if (conn === this.conn_) {
        this.onConnectionLost_(everConnected);
      } else if (conn === this.secondaryConn_) {
        this.log_("Secondary connection lost.");
        this.onSecondaryConnectionLost_();
      } else {
        this.log_("closing an old connection");
      }
    };
  }
  connReceiver_(conn) {
    return (message) => {
      if (this.state_ !== 2) {
        if (conn === this.rx_) {
          this.onPrimaryMessageReceived_(message);
        } else if (conn === this.secondaryConn_) {
          this.onSecondaryMessageReceived_(message);
        } else {
          this.log_("message on old connection");
        }
      }
    };
  }
  sendRequest(dataMsg) {
    const msg = { t: "d", d: dataMsg };
    this.sendData_(msg);
  }
  tryCleanupConnection() {
    if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
      this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId);
      this.conn_ = this.secondaryConn_;
      this.secondaryConn_ = null;
    }
  }
  onSecondaryControl_(controlData) {
    if (MESSAGE_TYPE in controlData) {
      const cmd = controlData[MESSAGE_TYPE];
      if (cmd === SWITCH_ACK) {
        this.upgradeIfSecondaryHealthy_();
      } else if (cmd === CONTROL_RESET) {
        this.log_("Got a reset on secondary, closing it");
        this.secondaryConn_.close();
        if (this.tx_ === this.secondaryConn_ || this.rx_ === this.secondaryConn_) {
          this.close();
        }
      } else if (cmd === CONTROL_PONG) {
        this.log_("got pong on secondary.");
        this.secondaryResponsesRequired_--;
        this.upgradeIfSecondaryHealthy_();
      }
    }
  }
  onSecondaryMessageReceived_(parsedData) {
    const layer = requireKey("t", parsedData);
    const data = requireKey("d", parsedData);
    if (layer === "c") {
      this.onSecondaryControl_(data);
    } else if (layer === "d") {
      this.pendingDataMessages.push(data);
    } else {
      throw new Error("Unknown protocol layer: " + layer);
    }
  }
  upgradeIfSecondaryHealthy_() {
    if (this.secondaryResponsesRequired_ <= 0) {
      this.log_("Secondary connection is healthy.");
      this.isHealthy_ = true;
      this.secondaryConn_.markConnectionHealthy();
      this.proceedWithUpgrade_();
    } else {
      this.log_("sending ping on secondary.");
      this.secondaryConn_.send({ t: "c", d: { t: PING, d: {} } });
    }
  }
  proceedWithUpgrade_() {
    this.secondaryConn_.start();
    this.log_("sending client ack on secondary");
    this.secondaryConn_.send({ t: "c", d: { t: SWITCH_ACK, d: {} } });
    this.log_("Ending transmission on primary");
    this.conn_.send({ t: "c", d: { t: END_TRANSMISSION, d: {} } });
    this.tx_ = this.secondaryConn_;
    this.tryCleanupConnection();
  }
  onPrimaryMessageReceived_(parsedData) {
    const layer = requireKey("t", parsedData);
    const data = requireKey("d", parsedData);
    if (layer === "c") {
      this.onControl_(data);
    } else if (layer === "d") {
      this.onDataMessage_(data);
    }
  }
  onDataMessage_(message) {
    this.onPrimaryResponse_();
    this.onMessage_(message);
  }
  onPrimaryResponse_() {
    if (!this.isHealthy_) {
      this.primaryResponsesRequired_--;
      if (this.primaryResponsesRequired_ <= 0) {
        this.log_("Primary connection is healthy.");
        this.isHealthy_ = true;
        this.conn_.markConnectionHealthy();
      }
    }
  }
  onControl_(controlData) {
    const cmd = requireKey(MESSAGE_TYPE, controlData);
    if (MESSAGE_DATA in controlData) {
      const payload = controlData[MESSAGE_DATA];
      if (cmd === SERVER_HELLO) {
        this.onHandshake_(payload);
      } else if (cmd === END_TRANSMISSION) {
        this.log_("recvd end transmission on primary");
        this.rx_ = this.secondaryConn_;
        for (let i = 0; i < this.pendingDataMessages.length; ++i) {
          this.onDataMessage_(this.pendingDataMessages[i]);
        }
        this.pendingDataMessages = [];
        this.tryCleanupConnection();
      } else if (cmd === CONTROL_SHUTDOWN) {
        this.onConnectionShutdown_(payload);
      } else if (cmd === CONTROL_RESET) {
        this.onReset_(payload);
      } else if (cmd === CONTROL_ERROR) {
        error("Server Error: " + payload);
      } else if (cmd === CONTROL_PONG) {
        this.log_("got pong on primary.");
        this.onPrimaryResponse_();
        this.sendPingOnPrimaryIfNecessary_();
      } else {
        error("Unknown control packet command: " + cmd);
      }
    }
  }
  onHandshake_(handshake) {
    const timestamp = handshake.ts;
    const version2 = handshake.v;
    const host = handshake.h;
    this.sessionId = handshake.s;
    this.repoInfo_.host = host;
    if (this.state_ === 0) {
      this.conn_.start();
      this.onConnectionEstablished_(this.conn_, timestamp);
      if (PROTOCOL_VERSION !== version2) {
        warn("Protocol version mismatch detected");
      }
      this.tryStartUpgrade_();
    }
  }
  tryStartUpgrade_() {
    const conn = this.transportManager_.upgradeTransport();
    if (conn) {
      this.startUpgrade_(conn);
    }
  }
  startUpgrade_(conn) {
    this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId);
    this.secondaryResponsesRequired_ = conn["responsesRequiredToBeHealthy"] || 0;
    const onMessage = this.connReceiver_(this.secondaryConn_);
    const onDisconnect = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(onMessage, onDisconnect);
    setTimeoutNonBlocking(() => {
      if (this.secondaryConn_) {
        this.log_("Timed out trying to upgrade.");
        this.secondaryConn_.close();
      }
    }, Math.floor(UPGRADE_TIMEOUT));
  }
  onReset_(host) {
    this.log_("Reset packet received.  New host: " + host);
    this.repoInfo_.host = host;
    if (this.state_ === 1) {
      this.close();
    } else {
      this.closeConnections_();
      this.start_();
    }
  }
  onConnectionEstablished_(conn, timestamp) {
    this.log_("Realtime connection established.");
    this.conn_ = conn;
    this.state_ = 1;
    if (this.onReady_) {
      this.onReady_(timestamp, this.sessionId);
      this.onReady_ = null;
    }
    if (this.primaryResponsesRequired_ === 0) {
      this.log_("Primary connection is healthy.");
      this.isHealthy_ = true;
    } else {
      setTimeoutNonBlocking(() => {
        this.sendPingOnPrimaryIfNecessary_();
      }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
    }
  }
  sendPingOnPrimaryIfNecessary_() {
    if (!this.isHealthy_ && this.state_ === 1) {
      this.log_("sending ping on primary.");
      this.sendData_({ t: "c", d: { t: PING, d: {} } });
    }
  }
  onSecondaryConnectionLost_() {
    const conn = this.secondaryConn_;
    this.secondaryConn_ = null;
    if (this.tx_ === conn || this.rx_ === conn) {
      this.close();
    }
  }
  onConnectionLost_(everConnected) {
    this.conn_ = null;
    if (!everConnected && this.state_ === 0) {
      this.log_("Realtime connection failed.");
      if (this.repoInfo_.isCacheableHost()) {
        PersistentStorage.remove("host:" + this.repoInfo_.host);
        this.repoInfo_.internalHost = this.repoInfo_.host;
      }
    } else if (this.state_ === 1) {
      this.log_("Realtime connection lost.");
    }
    this.close();
  }
  onConnectionShutdown_(reason) {
    this.log_("Connection shutdown command received. Shutting down...");
    if (this.onKill_) {
      this.onKill_(reason);
      this.onKill_ = null;
    }
    this.onDisconnect_ = null;
    this.close();
  }
  sendData_(data) {
    if (this.state_ !== 1) {
      throw "Connection is not connected";
    } else {
      this.tx_.send(data);
    }
  }
  close() {
    if (this.state_ !== 2) {
      this.log_("Closing realtime connection.");
      this.state_ = 2;
      this.closeConnections_();
      if (this.onDisconnect_) {
        this.onDisconnect_();
        this.onDisconnect_ = null;
      }
    }
  }
  closeConnections_() {
    this.log_("Shutting down all connections");
    if (this.conn_) {
      this.conn_.close();
      this.conn_ = null;
    }
    if (this.secondaryConn_) {
      this.secondaryConn_.close();
      this.secondaryConn_ = null;
    }
    if (this.healthyTimeout_) {
      clearTimeout(this.healthyTimeout_);
      this.healthyTimeout_ = null;
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ServerActions {
  put(pathString, data, onComplete, hash) {
  }
  merge(pathString, data, onComplete, hash) {
  }
  refreshAuthToken(token) {
  }
  refreshAppCheckToken(token) {
  }
  onDisconnectPut(pathString, data, onComplete) {
  }
  onDisconnectMerge(pathString, data, onComplete) {
  }
  onDisconnectCancel(pathString, onComplete) {
  }
  reportStats(stats) {
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EventEmitter {
  constructor(allowedEvents_) {
    this.allowedEvents_ = allowedEvents_;
    this.listeners_ = {};
    assert(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, "Requires a non-empty array");
  }
  trigger(eventType, ...varArgs) {
    if (Array.isArray(this.listeners_[eventType])) {
      const listeners = [...this.listeners_[eventType]];
      for (let i = 0; i < listeners.length; i++) {
        listeners[i].callback.apply(listeners[i].context, varArgs);
      }
    }
  }
  on(eventType, callback, context) {
    this.validateEventType_(eventType);
    this.listeners_[eventType] = this.listeners_[eventType] || [];
    this.listeners_[eventType].push({ callback, context });
    const eventData = this.getInitialEvent(eventType);
    if (eventData) {
      callback.apply(context, eventData);
    }
  }
  off(eventType, callback, context) {
    this.validateEventType_(eventType);
    const listeners = this.listeners_[eventType] || [];
    for (let i = 0; i < listeners.length; i++) {
      if (listeners[i].callback === callback && (!context || context === listeners[i].context)) {
        listeners.splice(i, 1);
        return;
      }
    }
  }
  validateEventType_(eventType) {
    assert(this.allowedEvents_.find((et) => {
      return et === eventType;
    }), "Unknown event: " + eventType);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class OnlineMonitor extends EventEmitter {
  constructor() {
    super(["online"]);
    this.online_ = true;
    if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined" && !isMobileCordova()) {
      window.addEventListener("online", () => {
        if (!this.online_) {
          this.online_ = true;
          this.trigger("online", true);
        }
      }, false);
      window.addEventListener("offline", () => {
        if (this.online_) {
          this.online_ = false;
          this.trigger("online", false);
        }
      }, false);
    }
  }
  static getInstance() {
    return new OnlineMonitor();
  }
  getInitialEvent(eventType) {
    assert(eventType === "online", "Unknown event type: " + eventType);
    return [this.online_];
  }
  currentlyOnline() {
    return this.online_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MAX_PATH_DEPTH = 32;
const MAX_PATH_LENGTH_BYTES = 768;
class Path {
  constructor(pathOrString, pieceNum) {
    if (pieceNum === void 0) {
      this.pieces_ = pathOrString.split("/");
      let copyTo = 0;
      for (let i = 0; i < this.pieces_.length; i++) {
        if (this.pieces_[i].length > 0) {
          this.pieces_[copyTo] = this.pieces_[i];
          copyTo++;
        }
      }
      this.pieces_.length = copyTo;
      this.pieceNum_ = 0;
    } else {
      this.pieces_ = pathOrString;
      this.pieceNum_ = pieceNum;
    }
  }
  toString() {
    let pathString = "";
    for (let i = this.pieceNum_; i < this.pieces_.length; i++) {
      if (this.pieces_[i] !== "") {
        pathString += "/" + this.pieces_[i];
      }
    }
    return pathString || "/";
  }
}
function newEmptyPath() {
  return new Path("");
}
function pathGetFront(path) {
  if (path.pieceNum_ >= path.pieces_.length) {
    return null;
  }
  return path.pieces_[path.pieceNum_];
}
function pathGetLength(path) {
  return path.pieces_.length - path.pieceNum_;
}
function pathPopFront(path) {
  let pieceNum = path.pieceNum_;
  if (pieceNum < path.pieces_.length) {
    pieceNum++;
  }
  return new Path(path.pieces_, pieceNum);
}
function pathGetBack(path) {
  if (path.pieceNum_ < path.pieces_.length) {
    return path.pieces_[path.pieces_.length - 1];
  }
  return null;
}
function pathToUrlEncodedString(path) {
  let pathString = "";
  for (let i = path.pieceNum_; i < path.pieces_.length; i++) {
    if (path.pieces_[i] !== "") {
      pathString += "/" + encodeURIComponent(String(path.pieces_[i]));
    }
  }
  return pathString || "/";
}
function pathSlice(path, begin = 0) {
  return path.pieces_.slice(path.pieceNum_ + begin);
}
function pathParent(path) {
  if (path.pieceNum_ >= path.pieces_.length) {
    return null;
  }
  const pieces = [];
  for (let i = path.pieceNum_; i < path.pieces_.length - 1; i++) {
    pieces.push(path.pieces_[i]);
  }
  return new Path(pieces, 0);
}
function pathChild(path, childPathObj) {
  const pieces = [];
  for (let i = path.pieceNum_; i < path.pieces_.length; i++) {
    pieces.push(path.pieces_[i]);
  }
  if (childPathObj instanceof Path) {
    for (let i = childPathObj.pieceNum_; i < childPathObj.pieces_.length; i++) {
      pieces.push(childPathObj.pieces_[i]);
    }
  } else {
    const childPieces = childPathObj.split("/");
    for (let i = 0; i < childPieces.length; i++) {
      if (childPieces[i].length > 0) {
        pieces.push(childPieces[i]);
      }
    }
  }
  return new Path(pieces, 0);
}
function pathIsEmpty(path) {
  return path.pieceNum_ >= path.pieces_.length;
}
function newRelativePath(outerPath, innerPath) {
  const outer = pathGetFront(outerPath), inner = pathGetFront(innerPath);
  if (outer === null) {
    return innerPath;
  } else if (outer === inner) {
    return newRelativePath(pathPopFront(outerPath), pathPopFront(innerPath));
  } else {
    throw new Error("INTERNAL ERROR: innerPath (" + innerPath + ") is not within outerPath (" + outerPath + ")");
  }
}
function pathCompare(left, right) {
  const leftKeys = pathSlice(left, 0);
  const rightKeys = pathSlice(right, 0);
  for (let i = 0; i < leftKeys.length && i < rightKeys.length; i++) {
    const cmp = nameCompare(leftKeys[i], rightKeys[i]);
    if (cmp !== 0) {
      return cmp;
    }
  }
  if (leftKeys.length === rightKeys.length) {
    return 0;
  }
  return leftKeys.length < rightKeys.length ? -1 : 1;
}
function pathEquals(path, other) {
  if (pathGetLength(path) !== pathGetLength(other)) {
    return false;
  }
  for (let i = path.pieceNum_, j = other.pieceNum_; i <= path.pieces_.length; i++, j++) {
    if (path.pieces_[i] !== other.pieces_[j]) {
      return false;
    }
  }
  return true;
}
function pathContains(path, other) {
  let i = path.pieceNum_;
  let j = other.pieceNum_;
  if (pathGetLength(path) > pathGetLength(other)) {
    return false;
  }
  while (i < path.pieces_.length) {
    if (path.pieces_[i] !== other.pieces_[j]) {
      return false;
    }
    ++i;
    ++j;
  }
  return true;
}
class ValidationPath {
  constructor(path, errorPrefix_) {
    this.errorPrefix_ = errorPrefix_;
    this.parts_ = pathSlice(path, 0);
    this.byteLength_ = Math.max(1, this.parts_.length);
    for (let i = 0; i < this.parts_.length; i++) {
      this.byteLength_ += stringLength(this.parts_[i]);
    }
    validationPathCheckValid(this);
  }
}
function validationPathPush(validationPath, child2) {
  if (validationPath.parts_.length > 0) {
    validationPath.byteLength_ += 1;
  }
  validationPath.parts_.push(child2);
  validationPath.byteLength_ += stringLength(child2);
  validationPathCheckValid(validationPath);
}
function validationPathPop(validationPath) {
  const last = validationPath.parts_.pop();
  validationPath.byteLength_ -= stringLength(last);
  if (validationPath.parts_.length > 0) {
    validationPath.byteLength_ -= 1;
  }
}
function validationPathCheckValid(validationPath) {
  if (validationPath.byteLength_ > MAX_PATH_LENGTH_BYTES) {
    throw new Error(validationPath.errorPrefix_ + "has a key path longer than " + MAX_PATH_LENGTH_BYTES + " bytes (" + validationPath.byteLength_ + ").");
  }
  if (validationPath.parts_.length > MAX_PATH_DEPTH) {
    throw new Error(validationPath.errorPrefix_ + "path specified exceeds the maximum depth that can be written (" + MAX_PATH_DEPTH + ") or object contains a cycle " + validationPathToErrorString(validationPath));
  }
}
function validationPathToErrorString(validationPath) {
  if (validationPath.parts_.length === 0) {
    return "";
  }
  return "in property '" + validationPath.parts_.join(".") + "'";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class VisibilityMonitor extends EventEmitter {
  constructor() {
    super(["visible"]);
    let hidden;
    let visibilityChange;
    if (typeof document !== "undefined" && typeof document.addEventListener !== "undefined") {
      if (typeof document["hidden"] !== "undefined") {
        visibilityChange = "visibilitychange";
        hidden = "hidden";
      } else if (typeof document["mozHidden"] !== "undefined") {
        visibilityChange = "mozvisibilitychange";
        hidden = "mozHidden";
      } else if (typeof document["msHidden"] !== "undefined") {
        visibilityChange = "msvisibilitychange";
        hidden = "msHidden";
      } else if (typeof document["webkitHidden"] !== "undefined") {
        visibilityChange = "webkitvisibilitychange";
        hidden = "webkitHidden";
      }
    }
    this.visible_ = true;
    if (visibilityChange) {
      document.addEventListener(visibilityChange, () => {
        const visible = !document[hidden];
        if (visible !== this.visible_) {
          this.visible_ = visible;
          this.trigger("visible", visible);
        }
      }, false);
    }
  }
  static getInstance() {
    return new VisibilityMonitor();
  }
  getInitialEvent(eventType) {
    assert(eventType === "visible", "Unknown event type: " + eventType);
    return [this.visible_];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const RECONNECT_MIN_DELAY = 1e3;
const RECONNECT_MAX_DELAY_DEFAULT = 60 * 5 * 1e3;
const GET_CONNECT_TIMEOUT = 3 * 1e3;
const RECONNECT_MAX_DELAY_FOR_ADMINS = 30 * 1e3;
const RECONNECT_DELAY_MULTIPLIER = 1.3;
const RECONNECT_DELAY_RESET_TIMEOUT = 3e4;
const SERVER_KILL_INTERRUPT_REASON = "server_kill";
const INVALID_TOKEN_THRESHOLD = 3;
class PersistentConnection extends ServerActions {
  constructor(repoInfo_, applicationId_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, appCheckTokenProvider_, authOverride_) {
    super();
    this.repoInfo_ = repoInfo_;
    this.applicationId_ = applicationId_;
    this.onDataUpdate_ = onDataUpdate_;
    this.onConnectStatus_ = onConnectStatus_;
    this.onServerInfoUpdate_ = onServerInfoUpdate_;
    this.authTokenProvider_ = authTokenProvider_;
    this.appCheckTokenProvider_ = appCheckTokenProvider_;
    this.authOverride_ = authOverride_;
    this.id = PersistentConnection.nextPersistentConnectionId_++;
    this.log_ = logWrapper("p:" + this.id + ":");
    this.interruptReasons_ = {};
    this.listens = new Map();
    this.outstandingPuts_ = [];
    this.outstandingGets_ = [];
    this.outstandingPutCount_ = 0;
    this.outstandingGetCount_ = 0;
    this.onDisconnectRequestQueue_ = [];
    this.connected_ = false;
    this.reconnectDelay_ = RECONNECT_MIN_DELAY;
    this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
    this.securityDebugCallback_ = null;
    this.lastSessionId = null;
    this.establishConnectionTimer_ = null;
    this.visible_ = false;
    this.requestCBHash_ = {};
    this.requestNumber_ = 0;
    this.realtime_ = null;
    this.authToken_ = null;
    this.appCheckToken_ = null;
    this.forceTokenRefresh_ = false;
    this.invalidAuthTokenCount_ = 0;
    this.invalidAppCheckTokenCount_ = 0;
    this.firstConnection_ = true;
    this.lastConnectionAttemptTime_ = null;
    this.lastConnectionEstablishedTime_ = null;
    if (authOverride_ && !isNodeSdk()) {
      throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
    }
    VisibilityMonitor.getInstance().on("visible", this.onVisible_, this);
    if (repoInfo_.host.indexOf("fblocal") === -1) {
      OnlineMonitor.getInstance().on("online", this.onOnline_, this);
    }
  }
  sendRequest(action, body, onResponse) {
    const curReqNum = ++this.requestNumber_;
    const msg = { r: curReqNum, a: action, b: body };
    this.log_(stringify(msg));
    assert(this.connected_, "sendRequest call when we're not connected not allowed.");
    this.realtime_.sendRequest(msg);
    if (onResponse) {
      this.requestCBHash_[curReqNum] = onResponse;
    }
  }
  get(query) {
    this.initConnection_();
    const deferred = new Deferred();
    const request = {
      p: query._path.toString(),
      q: query._queryObject
    };
    const outstandingGet = {
      action: "g",
      request,
      onComplete: (message) => {
        const payload = message["d"];
        if (message["s"] === "ok") {
          this.onDataUpdate_(request["p"], payload, false, null);
          deferred.resolve(payload);
        } else {
          deferred.reject(payload);
        }
      }
    };
    this.outstandingGets_.push(outstandingGet);
    this.outstandingGetCount_++;
    const index = this.outstandingGets_.length - 1;
    if (!this.connected_) {
      setTimeout(() => {
        const get2 = this.outstandingGets_[index];
        if (get2 === void 0 || outstandingGet !== get2) {
          return;
        }
        delete this.outstandingGets_[index];
        this.outstandingGetCount_--;
        if (this.outstandingGetCount_ === 0) {
          this.outstandingGets_ = [];
        }
        this.log_("get " + index + " timed out on connection");
        deferred.reject(new Error("Client is offline."));
      }, GET_CONNECT_TIMEOUT);
    }
    if (this.connected_) {
      this.sendGet_(index);
    }
    return deferred.promise;
  }
  listen(query, currentHashFn, tag, onComplete) {
    this.initConnection_();
    const queryId = query._queryIdentifier;
    const pathString = query._path.toString();
    this.log_("Listen called for " + pathString + " " + queryId);
    if (!this.listens.has(pathString)) {
      this.listens.set(pathString, new Map());
    }
    assert(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), "listen() called for non-default but complete query");
    assert(!this.listens.get(pathString).has(queryId), "listen() called twice for same path/queryId.");
    const listenSpec = {
      onComplete,
      hashFn: currentHashFn,
      query,
      tag
    };
    this.listens.get(pathString).set(queryId, listenSpec);
    if (this.connected_) {
      this.sendListen_(listenSpec);
    }
  }
  sendGet_(index) {
    const get2 = this.outstandingGets_[index];
    this.sendRequest("g", get2.request, (message) => {
      delete this.outstandingGets_[index];
      this.outstandingGetCount_--;
      if (this.outstandingGetCount_ === 0) {
        this.outstandingGets_ = [];
      }
      if (get2.onComplete) {
        get2.onComplete(message);
      }
    });
  }
  sendListen_(listenSpec) {
    const query = listenSpec.query;
    const pathString = query._path.toString();
    const queryId = query._queryIdentifier;
    this.log_("Listen on " + pathString + " for " + queryId);
    const req = { p: pathString };
    const action = "q";
    if (listenSpec.tag) {
      req["q"] = query._queryObject;
      req["t"] = listenSpec.tag;
    }
    req["h"] = listenSpec.hashFn();
    this.sendRequest(action, req, (message) => {
      const payload = message["d"];
      const status = message["s"];
      PersistentConnection.warnOnListenWarnings_(payload, query);
      const currentListenSpec = this.listens.get(pathString) && this.listens.get(pathString).get(queryId);
      if (currentListenSpec === listenSpec) {
        this.log_("listen response", message);
        if (status !== "ok") {
          this.removeListen_(pathString, queryId);
        }
        if (listenSpec.onComplete) {
          listenSpec.onComplete(status, payload);
        }
      }
    });
  }
  static warnOnListenWarnings_(payload, query) {
    if (payload && typeof payload === "object" && contains(payload, "w")) {
      const warnings = safeGet(payload, "w");
      if (Array.isArray(warnings) && ~warnings.indexOf("no_index")) {
        const indexSpec = '".indexOn": "' + query._queryParams.getIndex().toString() + '"';
        const indexPath = query._path.toString();
        warn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${indexSpec} at ${indexPath} to your security rules for better performance.`);
      }
    }
  }
  refreshAuthToken(token) {
    this.authToken_ = token;
    this.log_("Auth token refreshed");
    if (this.authToken_) {
      this.tryAuth();
    } else {
      if (this.connected_) {
        this.sendRequest("unauth", {}, () => {
        });
      }
    }
    this.reduceReconnectDelayIfAdminCredential_(token);
  }
  reduceReconnectDelayIfAdminCredential_(credential) {
    const isFirebaseSecret = credential && credential.length === 40;
    if (isFirebaseSecret || isAdmin(credential)) {
      this.log_("Admin auth credential detected.  Reducing max reconnect time.");
      this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
    }
  }
  refreshAppCheckToken(token) {
    this.appCheckToken_ = token;
    this.log_("App check token refreshed");
    if (this.appCheckToken_) {
      this.tryAppCheck();
    } else {
      if (this.connected_) {
        this.sendRequest("unappeck", {}, () => {
        });
      }
    }
  }
  tryAuth() {
    if (this.connected_ && this.authToken_) {
      const token = this.authToken_;
      const authMethod = isValidFormat(token) ? "auth" : "gauth";
      const requestData = { cred: token };
      if (this.authOverride_ === null) {
        requestData["noauth"] = true;
      } else if (typeof this.authOverride_ === "object") {
        requestData["authvar"] = this.authOverride_;
      }
      this.sendRequest(authMethod, requestData, (res) => {
        const status = res["s"];
        const data = res["d"] || "error";
        if (this.authToken_ === token) {
          if (status === "ok") {
            this.invalidAuthTokenCount_ = 0;
          } else {
            this.onAuthRevoked_(status, data);
          }
        }
      });
    }
  }
  tryAppCheck() {
    if (this.connected_ && this.appCheckToken_) {
      this.sendRequest("appcheck", { "token": this.appCheckToken_ }, (res) => {
        const status = res["s"];
        const data = res["d"] || "error";
        if (status === "ok") {
          this.invalidAppCheckTokenCount_ = 0;
        } else {
          this.onAppCheckRevoked_(status, data);
        }
      });
    }
  }
  unlisten(query, tag) {
    const pathString = query._path.toString();
    const queryId = query._queryIdentifier;
    this.log_("Unlisten called for " + pathString + " " + queryId);
    assert(query._queryParams.isDefault() || !query._queryParams.loadsAllData(), "unlisten() called for non-default but complete query");
    const listen = this.removeListen_(pathString, queryId);
    if (listen && this.connected_) {
      this.sendUnlisten_(pathString, queryId, query._queryObject, tag);
    }
  }
  sendUnlisten_(pathString, queryId, queryObj, tag) {
    this.log_("Unlisten on " + pathString + " for " + queryId);
    const req = { p: pathString };
    const action = "n";
    if (tag) {
      req["q"] = queryObj;
      req["t"] = tag;
    }
    this.sendRequest(action, req);
  }
  onDisconnectPut(pathString, data, onComplete) {
    this.initConnection_();
    if (this.connected_) {
      this.sendOnDisconnect_("o", pathString, data, onComplete);
    } else {
      this.onDisconnectRequestQueue_.push({
        pathString,
        action: "o",
        data,
        onComplete
      });
    }
  }
  onDisconnectMerge(pathString, data, onComplete) {
    this.initConnection_();
    if (this.connected_) {
      this.sendOnDisconnect_("om", pathString, data, onComplete);
    } else {
      this.onDisconnectRequestQueue_.push({
        pathString,
        action: "om",
        data,
        onComplete
      });
    }
  }
  onDisconnectCancel(pathString, onComplete) {
    this.initConnection_();
    if (this.connected_) {
      this.sendOnDisconnect_("oc", pathString, null, onComplete);
    } else {
      this.onDisconnectRequestQueue_.push({
        pathString,
        action: "oc",
        data: null,
        onComplete
      });
    }
  }
  sendOnDisconnect_(action, pathString, data, onComplete) {
    const request = { p: pathString, d: data };
    this.log_("onDisconnect " + action, request);
    this.sendRequest(action, request, (response) => {
      if (onComplete) {
        setTimeout(() => {
          onComplete(response["s"], response["d"]);
        }, Math.floor(0));
      }
    });
  }
  put(pathString, data, onComplete, hash) {
    this.putInternal("p", pathString, data, onComplete, hash);
  }
  merge(pathString, data, onComplete, hash) {
    this.putInternal("m", pathString, data, onComplete, hash);
  }
  putInternal(action, pathString, data, onComplete, hash) {
    this.initConnection_();
    const request = {
      p: pathString,
      d: data
    };
    if (hash !== void 0) {
      request["h"] = hash;
    }
    this.outstandingPuts_.push({
      action,
      request,
      onComplete
    });
    this.outstandingPutCount_++;
    const index = this.outstandingPuts_.length - 1;
    if (this.connected_) {
      this.sendPut_(index);
    } else {
      this.log_("Buffering put: " + pathString);
    }
  }
  sendPut_(index) {
    const action = this.outstandingPuts_[index].action;
    const request = this.outstandingPuts_[index].request;
    const onComplete = this.outstandingPuts_[index].onComplete;
    this.outstandingPuts_[index].queued = this.connected_;
    this.sendRequest(action, request, (message) => {
      this.log_(action + " response", message);
      delete this.outstandingPuts_[index];
      this.outstandingPutCount_--;
      if (this.outstandingPutCount_ === 0) {
        this.outstandingPuts_ = [];
      }
      if (onComplete) {
        onComplete(message["s"], message["d"]);
      }
    });
  }
  reportStats(stats) {
    if (this.connected_) {
      const request = { c: stats };
      this.log_("reportStats", request);
      this.sendRequest("s", request, (result) => {
        const status = result["s"];
        if (status !== "ok") {
          const errorReason = result["d"];
          this.log_("reportStats", "Error sending stats: " + errorReason);
        }
      });
    }
  }
  onDataMessage_(message) {
    if ("r" in message) {
      this.log_("from server: " + stringify(message));
      const reqNum = message["r"];
      const onResponse = this.requestCBHash_[reqNum];
      if (onResponse) {
        delete this.requestCBHash_[reqNum];
        onResponse(message["b"]);
      }
    } else if ("error" in message) {
      throw "A server-side error has occurred: " + message["error"];
    } else if ("a" in message) {
      this.onDataPush_(message["a"], message["b"]);
    }
  }
  onDataPush_(action, body) {
    this.log_("handleServerMessage", action, body);
    if (action === "d") {
      this.onDataUpdate_(body["p"], body["d"], false, body["t"]);
    } else if (action === "m") {
      this.onDataUpdate_(body["p"], body["d"], true, body["t"]);
    } else if (action === "c") {
      this.onListenRevoked_(body["p"], body["q"]);
    } else if (action === "ac") {
      this.onAuthRevoked_(body["s"], body["d"]);
    } else if (action === "apc") {
      this.onAppCheckRevoked_(body["s"], body["d"]);
    } else if (action === "sd") {
      this.onSecurityDebugPacket_(body);
    } else {
      error("Unrecognized action received from server: " + stringify(action) + "\nAre you using the latest client?");
    }
  }
  onReady_(timestamp, sessionId) {
    this.log_("connection ready");
    this.connected_ = true;
    this.lastConnectionEstablishedTime_ = new Date().getTime();
    this.handleTimestamp_(timestamp);
    this.lastSessionId = sessionId;
    if (this.firstConnection_) {
      this.sendConnectStats_();
    }
    this.restoreState_();
    this.firstConnection_ = false;
    this.onConnectStatus_(true);
  }
  scheduleConnect_(timeout) {
    assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
    if (this.establishConnectionTimer_) {
      clearTimeout(this.establishConnectionTimer_);
    }
    this.establishConnectionTimer_ = setTimeout(() => {
      this.establishConnectionTimer_ = null;
      this.establishConnection_();
    }, Math.floor(timeout));
  }
  initConnection_() {
    if (!this.realtime_ && this.firstConnection_) {
      this.scheduleConnect_(0);
    }
  }
  onVisible_(visible) {
    if (visible && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_) {
      this.log_("Window became visible.  Reducing delay.");
      this.reconnectDelay_ = RECONNECT_MIN_DELAY;
      if (!this.realtime_) {
        this.scheduleConnect_(0);
      }
    }
    this.visible_ = visible;
  }
  onOnline_(online) {
    if (online) {
      this.log_("Browser went online.");
      this.reconnectDelay_ = RECONNECT_MIN_DELAY;
      if (!this.realtime_) {
        this.scheduleConnect_(0);
      }
    } else {
      this.log_("Browser went offline.  Killing connection.");
      if (this.realtime_) {
        this.realtime_.close();
      }
    }
  }
  onRealtimeDisconnect_() {
    this.log_("data client disconnected");
    this.connected_ = false;
    this.realtime_ = null;
    this.cancelSentTransactions_();
    this.requestCBHash_ = {};
    if (this.shouldReconnect_()) {
      if (!this.visible_) {
        this.log_("Window isn't visible.  Delaying reconnect.");
        this.reconnectDelay_ = this.maxReconnectDelay_;
        this.lastConnectionAttemptTime_ = new Date().getTime();
      } else if (this.lastConnectionEstablishedTime_) {
        const timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;
        if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT) {
          this.reconnectDelay_ = RECONNECT_MIN_DELAY;
        }
        this.lastConnectionEstablishedTime_ = null;
      }
      const timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
      let reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
      reconnectDelay = Math.random() * reconnectDelay;
      this.log_("Trying to reconnect in " + reconnectDelay + "ms");
      this.scheduleConnect_(reconnectDelay);
      this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
    }
    this.onConnectStatus_(false);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt");
      this.lastConnectionAttemptTime_ = new Date().getTime();
      this.lastConnectionEstablishedTime_ = null;
      const onDataMessage = this.onDataMessage_.bind(this);
      const onReady = this.onReady_.bind(this);
      const onDisconnect = this.onRealtimeDisconnect_.bind(this);
      const connId = this.id + ":" + PersistentConnection.nextConnectionId_++;
      const lastSessionId = this.lastSessionId;
      let canceled = false;
      let connection = null;
      const closeFn = function() {
        if (connection) {
          connection.close();
        } else {
          canceled = true;
          onDisconnect();
        }
      };
      const sendRequestFn = function(msg) {
        assert(connection, "sendRequest call when we're not connected not allowed.");
        connection.sendRequest(msg);
      };
      this.realtime_ = {
        close: closeFn,
        sendRequest: sendRequestFn
      };
      const forceRefresh = this.forceTokenRefresh_;
      this.forceTokenRefresh_ = false;
      try {
        const [authToken, appCheckToken] = await Promise.all([
          this.authTokenProvider_.getToken(forceRefresh),
          this.appCheckTokenProvider_.getToken(forceRefresh)
        ]);
        if (!canceled) {
          log("getToken() completed. Creating connection.");
          this.authToken_ = authToken && authToken.accessToken;
          this.appCheckToken_ = appCheckToken && appCheckToken.token;
          connection = new Connection(connId, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, onDataMessage, onReady, onDisconnect, (reason) => {
            warn(reason + " (" + this.repoInfo_.toString() + ")");
            this.interrupt(SERVER_KILL_INTERRUPT_REASON);
          }, lastSessionId);
        } else {
          log("getToken() completed but was canceled");
        }
      } catch (error2) {
        this.log_("Failed to get token: " + error2);
        if (!canceled) {
          if (this.repoInfo_.nodeAdmin) {
            warn(error2);
          }
          closeFn();
        }
      }
    }
  }
  interrupt(reason) {
    log("Interrupting connection for reason: " + reason);
    this.interruptReasons_[reason] = true;
    if (this.realtime_) {
      this.realtime_.close();
    } else {
      if (this.establishConnectionTimer_) {
        clearTimeout(this.establishConnectionTimer_);
        this.establishConnectionTimer_ = null;
      }
      if (this.connected_) {
        this.onRealtimeDisconnect_();
      }
    }
  }
  resume(reason) {
    log("Resuming connection for reason: " + reason);
    delete this.interruptReasons_[reason];
    if (isEmpty(this.interruptReasons_)) {
      this.reconnectDelay_ = RECONNECT_MIN_DELAY;
      if (!this.realtime_) {
        this.scheduleConnect_(0);
      }
    }
  }
  handleTimestamp_(timestamp) {
    const delta = timestamp - new Date().getTime();
    this.onServerInfoUpdate_({ serverTimeOffset: delta });
  }
  cancelSentTransactions_() {
    for (let i = 0; i < this.outstandingPuts_.length; i++) {
      const put = this.outstandingPuts_[i];
      if (put && "h" in put.request && put.queued) {
        if (put.onComplete) {
          put.onComplete("disconnect");
        }
        delete this.outstandingPuts_[i];
        this.outstandingPutCount_--;
      }
    }
    if (this.outstandingPutCount_ === 0) {
      this.outstandingPuts_ = [];
    }
  }
  onListenRevoked_(pathString, query) {
    let queryId;
    if (!query) {
      queryId = "default";
    } else {
      queryId = query.map((q) => ObjectToUniqueKey(q)).join("$");
    }
    const listen = this.removeListen_(pathString, queryId);
    if (listen && listen.onComplete) {
      listen.onComplete("permission_denied");
    }
  }
  removeListen_(pathString, queryId) {
    const normalizedPathString = new Path(pathString).toString();
    let listen;
    if (this.listens.has(normalizedPathString)) {
      const map2 = this.listens.get(normalizedPathString);
      listen = map2.get(queryId);
      map2.delete(queryId);
      if (map2.size === 0) {
        this.listens.delete(normalizedPathString);
      }
    } else {
      listen = void 0;
    }
    return listen;
  }
  onAuthRevoked_(statusCode, explanation) {
    log("Auth token revoked: " + statusCode + "/" + explanation);
    this.authToken_ = null;
    this.forceTokenRefresh_ = true;
    this.realtime_.close();
    if (statusCode === "invalid_token" || statusCode === "permission_denied") {
      this.invalidAuthTokenCount_++;
      if (this.invalidAuthTokenCount_ >= INVALID_TOKEN_THRESHOLD) {
        this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
        this.authTokenProvider_.notifyForInvalidToken();
      }
    }
  }
  onAppCheckRevoked_(statusCode, explanation) {
    log("App check token revoked: " + statusCode + "/" + explanation);
    this.appCheckToken_ = null;
    this.forceTokenRefresh_ = true;
    if (statusCode === "invalid_token" || statusCode === "permission_denied") {
      this.invalidAppCheckTokenCount_++;
      if (this.invalidAppCheckTokenCount_ >= INVALID_TOKEN_THRESHOLD) {
        this.appCheckTokenProvider_.notifyForInvalidToken();
      }
    }
  }
  onSecurityDebugPacket_(body) {
    if (this.securityDebugCallback_) {
      this.securityDebugCallback_(body);
    } else {
      if ("msg" in body) {
        console.log("FIREBASE: " + body["msg"].replace("\n", "\nFIREBASE: "));
      }
    }
  }
  restoreState_() {
    this.tryAuth();
    this.tryAppCheck();
    for (const queries of this.listens.values()) {
      for (const listenSpec of queries.values()) {
        this.sendListen_(listenSpec);
      }
    }
    for (let i = 0; i < this.outstandingPuts_.length; i++) {
      if (this.outstandingPuts_[i]) {
        this.sendPut_(i);
      }
    }
    while (this.onDisconnectRequestQueue_.length) {
      const request = this.onDisconnectRequestQueue_.shift();
      this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
    }
    for (let i = 0; i < this.outstandingGets_.length; i++) {
      if (this.outstandingGets_[i]) {
        this.sendGet_(i);
      }
    }
  }
  sendConnectStats_() {
    const stats = {};
    let clientName = "js";
    stats["sdk." + clientName + "." + SDK_VERSION.replace(/\./g, "-")] = 1;
    if (isMobileCordova()) {
      stats["framework.cordova"] = 1;
    } else if (isReactNative()) {
      stats["framework.reactnative"] = 1;
    }
    this.reportStats(stats);
  }
  shouldReconnect_() {
    const online = OnlineMonitor.getInstance().currentlyOnline();
    return isEmpty(this.interruptReasons_) && online;
  }
}
PersistentConnection.nextPersistentConnectionId_ = 0;
PersistentConnection.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class NamedNode {
  constructor(name2, node) {
    this.name = name2;
    this.node = node;
  }
  static Wrap(name2, node) {
    return new NamedNode(name2, node);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Index {
  getCompare() {
    return this.compare.bind(this);
  }
  indexedValueChanged(oldNode, newNode) {
    const oldWrapped = new NamedNode(MIN_NAME, oldNode);
    const newWrapped = new NamedNode(MIN_NAME, newNode);
    return this.compare(oldWrapped, newWrapped) !== 0;
  }
  minPost() {
    return NamedNode.MIN;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let __EMPTY_NODE;
class KeyIndex extends Index {
  static get __EMPTY_NODE() {
    return __EMPTY_NODE;
  }
  static set __EMPTY_NODE(val) {
    __EMPTY_NODE = val;
  }
  compare(a, b) {
    return nameCompare(a.name, b.name);
  }
  isDefinedOn(node) {
    throw assertionError("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(oldNode, newNode) {
    return false;
  }
  minPost() {
    return NamedNode.MIN;
  }
  maxPost() {
    return new NamedNode(MAX_NAME, __EMPTY_NODE);
  }
  makePost(indexValue, name2) {
    assert(typeof indexValue === "string", "KeyIndex indexValue must always be a string.");
    return new NamedNode(indexValue, __EMPTY_NODE);
  }
  toString() {
    return ".key";
  }
}
const KEY_INDEX = new KeyIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class SortedMapIterator {
  constructor(node, startKey, comparator, isReverse_, resultGenerator_ = null) {
    this.isReverse_ = isReverse_;
    this.resultGenerator_ = resultGenerator_;
    this.nodeStack_ = [];
    let cmp = 1;
    while (!node.isEmpty()) {
      node = node;
      cmp = startKey ? comparator(node.key, startKey) : 1;
      if (isReverse_) {
        cmp *= -1;
      }
      if (cmp < 0) {
        if (this.isReverse_) {
          node = node.left;
        } else {
          node = node.right;
        }
      } else if (cmp === 0) {
        this.nodeStack_.push(node);
        break;
      } else {
        this.nodeStack_.push(node);
        if (this.isReverse_) {
          node = node.right;
        } else {
          node = node.left;
        }
      }
    }
  }
  getNext() {
    if (this.nodeStack_.length === 0) {
      return null;
    }
    let node = this.nodeStack_.pop();
    let result;
    if (this.resultGenerator_) {
      result = this.resultGenerator_(node.key, node.value);
    } else {
      result = { key: node.key, value: node.value };
    }
    if (this.isReverse_) {
      node = node.left;
      while (!node.isEmpty()) {
        this.nodeStack_.push(node);
        node = node.right;
      }
    } else {
      node = node.right;
      while (!node.isEmpty()) {
        this.nodeStack_.push(node);
        node = node.left;
      }
    }
    return result;
  }
  hasNext() {
    return this.nodeStack_.length > 0;
  }
  peek() {
    if (this.nodeStack_.length === 0) {
      return null;
    }
    const node = this.nodeStack_[this.nodeStack_.length - 1];
    if (this.resultGenerator_) {
      return this.resultGenerator_(node.key, node.value);
    } else {
      return { key: node.key, value: node.value };
    }
  }
}
class LLRBNode {
  constructor(key, value, color, left, right) {
    this.key = key;
    this.value = value;
    this.color = color != null ? color : LLRBNode.RED;
    this.left = left != null ? left : SortedMap.EMPTY_NODE;
    this.right = right != null ? right : SortedMap.EMPTY_NODE;
  }
  copy(key, value, color, left, right) {
    return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
  }
  count() {
    return this.left.count() + 1 + this.right.count();
  }
  isEmpty() {
    return false;
  }
  inorderTraversal(action) {
    return this.left.inorderTraversal(action) || !!action(this.key, this.value) || this.right.inorderTraversal(action);
  }
  reverseTraversal(action) {
    return this.right.reverseTraversal(action) || action(this.key, this.value) || this.left.reverseTraversal(action);
  }
  min_() {
    if (this.left.isEmpty()) {
      return this;
    } else {
      return this.left.min_();
    }
  }
  minKey() {
    return this.min_().key;
  }
  maxKey() {
    if (this.right.isEmpty()) {
      return this.key;
    } else {
      return this.right.maxKey();
    }
  }
  insert(key, value, comparator) {
    let n = this;
    const cmp = comparator(key, n.key);
    if (cmp < 0) {
      n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
    } else if (cmp === 0) {
      n = n.copy(null, value, null, null, null);
    } else {
      n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
    }
    return n.fixUp_();
  }
  removeMin_() {
    if (this.left.isEmpty()) {
      return SortedMap.EMPTY_NODE;
    }
    let n = this;
    if (!n.left.isRed_() && !n.left.left.isRed_()) {
      n = n.moveRedLeft_();
    }
    n = n.copy(null, null, null, n.left.removeMin_(), null);
    return n.fixUp_();
  }
  remove(key, comparator) {
    let n, smallest;
    n = this;
    if (comparator(key, n.key) < 0) {
      if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) {
        n = n.moveRedLeft_();
      }
      n = n.copy(null, null, null, n.left.remove(key, comparator), null);
    } else {
      if (n.left.isRed_()) {
        n = n.rotateRight_();
      }
      if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) {
        n = n.moveRedRight_();
      }
      if (comparator(key, n.key) === 0) {
        if (n.right.isEmpty()) {
          return SortedMap.EMPTY_NODE;
        } else {
          smallest = n.right.min_();
          n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
        }
      }
      n = n.copy(null, null, null, null, n.right.remove(key, comparator));
    }
    return n.fixUp_();
  }
  isRed_() {
    return this.color;
  }
  fixUp_() {
    let n = this;
    if (n.right.isRed_() && !n.left.isRed_()) {
      n = n.rotateLeft_();
    }
    if (n.left.isRed_() && n.left.left.isRed_()) {
      n = n.rotateRight_();
    }
    if (n.left.isRed_() && n.right.isRed_()) {
      n = n.colorFlip_();
    }
    return n;
  }
  moveRedLeft_() {
    let n = this.colorFlip_();
    if (n.right.left.isRed_()) {
      n = n.copy(null, null, null, null, n.right.rotateRight_());
      n = n.rotateLeft_();
      n = n.colorFlip_();
    }
    return n;
  }
  moveRedRight_() {
    let n = this.colorFlip_();
    if (n.left.left.isRed_()) {
      n = n.rotateRight_();
      n = n.colorFlip_();
    }
    return n;
  }
  rotateLeft_() {
    const nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, nl, null);
  }
  rotateRight_() {
    const nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, nr);
  }
  colorFlip_() {
    const left = this.left.copy(null, null, !this.left.color, null, null);
    const right = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, left, right);
  }
  checkMaxDepth_() {
    const blackDepth = this.check_();
    return Math.pow(2, blackDepth) <= this.count() + 1;
  }
  check_() {
    if (this.isRed_() && this.left.isRed_()) {
      throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
    }
    if (this.right.isRed_()) {
      throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
    }
    const blackDepth = this.left.check_();
    if (blackDepth !== this.right.check_()) {
      throw new Error("Black depths differ");
    } else {
      return blackDepth + (this.isRed_() ? 0 : 1);
    }
  }
}
LLRBNode.RED = true;
LLRBNode.BLACK = false;
class LLRBEmptyNode {
  copy(key, value, color, left, right) {
    return this;
  }
  insert(key, value, comparator) {
    return new LLRBNode(key, value, null);
  }
  remove(key, comparator) {
    return this;
  }
  count() {
    return 0;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(action) {
    return false;
  }
  reverseTraversal(action) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  check_() {
    return 0;
  }
  isRed_() {
    return false;
  }
}
class SortedMap {
  constructor(comparator_, root_ = SortedMap.EMPTY_NODE) {
    this.comparator_ = comparator_;
    this.root_ = root_;
  }
  insert(key, value) {
    return new SortedMap(this.comparator_, this.root_.insert(key, value, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
  }
  remove(key) {
    return new SortedMap(this.comparator_, this.root_.remove(key, this.comparator_).copy(null, null, LLRBNode.BLACK, null, null));
  }
  get(key) {
    let cmp;
    let node = this.root_;
    while (!node.isEmpty()) {
      cmp = this.comparator_(key, node.key);
      if (cmp === 0) {
        return node.value;
      } else if (cmp < 0) {
        node = node.left;
      } else if (cmp > 0) {
        node = node.right;
      }
    }
    return null;
  }
  getPredecessorKey(key) {
    let cmp, node = this.root_, rightParent = null;
    while (!node.isEmpty()) {
      cmp = this.comparator_(key, node.key);
      if (cmp === 0) {
        if (!node.left.isEmpty()) {
          node = node.left;
          while (!node.right.isEmpty()) {
            node = node.right;
          }
          return node.key;
        } else if (rightParent) {
          return rightParent.key;
        } else {
          return null;
        }
      } else if (cmp < 0) {
        node = node.left;
      } else if (cmp > 0) {
        rightParent = node;
        node = node.right;
      }
    }
    throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?");
  }
  isEmpty() {
    return this.root_.isEmpty();
  }
  count() {
    return this.root_.count();
  }
  minKey() {
    return this.root_.minKey();
  }
  maxKey() {
    return this.root_.maxKey();
  }
  inorderTraversal(action) {
    return this.root_.inorderTraversal(action);
  }
  reverseTraversal(action) {
    return this.root_.reverseTraversal(action);
  }
  getIterator(resultGenerator) {
    return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
  }
  getIteratorFrom(key, resultGenerator) {
    return new SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
  }
  getReverseIteratorFrom(key, resultGenerator) {
    return new SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
  }
  getReverseIterator(resultGenerator) {
    return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
  }
}
SortedMap.EMPTY_NODE = new LLRBEmptyNode();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function NAME_ONLY_COMPARATOR(left, right) {
  return nameCompare(left.name, right.name);
}
function NAME_COMPARATOR(left, right) {
  return nameCompare(left, right);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let MAX_NODE$2;
function setMaxNode$1(val) {
  MAX_NODE$2 = val;
}
const priorityHashText = function(priority) {
  if (typeof priority === "number") {
    return "number:" + doubleToIEEE754String(priority);
  } else {
    return "string:" + priority;
  }
};
const validatePriorityNode = function(priorityNode) {
  if (priorityNode.isLeafNode()) {
    const val = priorityNode.val();
    assert(typeof val === "string" || typeof val === "number" || typeof val === "object" && contains(val, ".sv"), "Priority must be a string or number.");
  } else {
    assert(priorityNode === MAX_NODE$2 || priorityNode.isEmpty(), "priority of unexpected type.");
  }
  assert(priorityNode === MAX_NODE$2 || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let __childrenNodeConstructor;
class LeafNode {
  constructor(value_, priorityNode_ = LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
    this.value_ = value_;
    this.priorityNode_ = priorityNode_;
    this.lazyHash_ = null;
    assert(this.value_ !== void 0 && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
    validatePriorityNode(this.priorityNode_);
  }
  static set __childrenNodeConstructor(val) {
    __childrenNodeConstructor = val;
  }
  static get __childrenNodeConstructor() {
    return __childrenNodeConstructor;
  }
  isLeafNode() {
    return true;
  }
  getPriority() {
    return this.priorityNode_;
  }
  updatePriority(newPriorityNode) {
    return new LeafNode(this.value_, newPriorityNode);
  }
  getImmediateChild(childName) {
    if (childName === ".priority") {
      return this.priorityNode_;
    } else {
      return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
  }
  getChild(path) {
    if (pathIsEmpty(path)) {
      return this;
    } else if (pathGetFront(path) === ".priority") {
      return this.priorityNode_;
    } else {
      return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
    }
  }
  hasChild() {
    return false;
  }
  getPredecessorChildName(childName, childNode) {
    return null;
  }
  updateImmediateChild(childName, newChildNode) {
    if (childName === ".priority") {
      return this.updatePriority(newChildNode);
    } else if (newChildNode.isEmpty() && childName !== ".priority") {
      return this;
    } else {
      return LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
    }
  }
  updateChild(path, newChildNode) {
    const front = pathGetFront(path);
    if (front === null) {
      return newChildNode;
    } else if (newChildNode.isEmpty() && front !== ".priority") {
      return this;
    } else {
      assert(front !== ".priority" || pathGetLength(path) === 1, ".priority must be the last token in a path");
      return this.updateImmediateChild(front, LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(path), newChildNode));
    }
  }
  isEmpty() {
    return false;
  }
  numChildren() {
    return 0;
  }
  forEachChild(index, action) {
    return false;
  }
  val(exportFormat) {
    if (exportFormat && !this.getPriority().isEmpty()) {
      return {
        ".value": this.getValue(),
        ".priority": this.getPriority().val()
      };
    } else {
      return this.getValue();
    }
  }
  hash() {
    if (this.lazyHash_ === null) {
      let toHash = "";
      if (!this.priorityNode_.isEmpty()) {
        toHash += "priority:" + priorityHashText(this.priorityNode_.val()) + ":";
      }
      const type = typeof this.value_;
      toHash += type + ":";
      if (type === "number") {
        toHash += doubleToIEEE754String(this.value_);
      } else {
        toHash += this.value_;
      }
      this.lazyHash_ = sha1(toHash);
    }
    return this.lazyHash_;
  }
  getValue() {
    return this.value_;
  }
  compareTo(other) {
    if (other === LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
      return 1;
    } else if (other instanceof LeafNode.__childrenNodeConstructor) {
      return -1;
    } else {
      assert(other.isLeafNode(), "Unknown node type");
      return this.compareToLeafNode_(other);
    }
  }
  compareToLeafNode_(otherLeaf) {
    const otherLeafType = typeof otherLeaf.value_;
    const thisLeafType = typeof this.value_;
    const otherIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
    const thisIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
    assert(otherIndex >= 0, "Unknown leaf type: " + otherLeafType);
    assert(thisIndex >= 0, "Unknown leaf type: " + thisLeafType);
    if (otherIndex === thisIndex) {
      if (thisLeafType === "object") {
        return 0;
      } else {
        if (this.value_ < otherLeaf.value_) {
          return -1;
        } else if (this.value_ === otherLeaf.value_) {
          return 0;
        } else {
          return 1;
        }
      }
    } else {
      return thisIndex - otherIndex;
    }
  }
  withIndex() {
    return this;
  }
  isIndexed() {
    return true;
  }
  equals(other) {
    if (other === this) {
      return true;
    } else if (other.isLeafNode()) {
      const otherLeaf = other;
      return this.value_ === otherLeaf.value_ && this.priorityNode_.equals(otherLeaf.priorityNode_);
    } else {
      return false;
    }
  }
}
LeafNode.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let nodeFromJSON$1;
let MAX_NODE$1;
function setNodeFromJSON(val) {
  nodeFromJSON$1 = val;
}
function setMaxNode(val) {
  MAX_NODE$1 = val;
}
class PriorityIndex extends Index {
  compare(a, b) {
    const aPriority = a.node.getPriority();
    const bPriority = b.node.getPriority();
    const indexCmp = aPriority.compareTo(bPriority);
    if (indexCmp === 0) {
      return nameCompare(a.name, b.name);
    } else {
      return indexCmp;
    }
  }
  isDefinedOn(node) {
    return !node.getPriority().isEmpty();
  }
  indexedValueChanged(oldNode, newNode) {
    return !oldNode.getPriority().equals(newNode.getPriority());
  }
  minPost() {
    return NamedNode.MIN;
  }
  maxPost() {
    return new NamedNode(MAX_NAME, new LeafNode("[PRIORITY-POST]", MAX_NODE$1));
  }
  makePost(indexValue, name2) {
    const priorityNode = nodeFromJSON$1(indexValue);
    return new NamedNode(name2, new LeafNode("[PRIORITY-POST]", priorityNode));
  }
  toString() {
    return ".priority";
  }
}
const PRIORITY_INDEX = new PriorityIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const LOG_2 = Math.log(2);
class Base12Num {
  constructor(length) {
    const logBase2 = (num) => parseInt(Math.log(num) / LOG_2, 10);
    const bitMask = (bits) => parseInt(Array(bits + 1).join("1"), 2);
    this.count = logBase2(length + 1);
    this.current_ = this.count - 1;
    const mask = bitMask(this.count);
    this.bits_ = length + 1 & mask;
  }
  nextBitIsOne() {
    const result = !(this.bits_ & 1 << this.current_);
    this.current_--;
    return result;
  }
}
const buildChildSet = function(childList, cmp, keyFn, mapSortFn) {
  childList.sort(cmp);
  const buildBalancedTree = function(low, high) {
    const length = high - low;
    let namedNode;
    let key;
    if (length === 0) {
      return null;
    } else if (length === 1) {
      namedNode = childList[low];
      key = keyFn ? keyFn(namedNode) : namedNode;
      return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, null, null);
    } else {
      const middle = parseInt(length / 2, 10) + low;
      const left = buildBalancedTree(low, middle);
      const right = buildBalancedTree(middle + 1, high);
      namedNode = childList[middle];
      key = keyFn ? keyFn(namedNode) : namedNode;
      return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, left, right);
    }
  };
  const buildFrom12Array = function(base122) {
    let node = null;
    let root2 = null;
    let index = childList.length;
    const buildPennant = function(chunkSize, color) {
      const low = index - chunkSize;
      const high = index;
      index -= chunkSize;
      const childTree = buildBalancedTree(low + 1, high);
      const namedNode = childList[low];
      const key = keyFn ? keyFn(namedNode) : namedNode;
      attachPennant(new LLRBNode(key, namedNode.node, color, null, childTree));
    };
    const attachPennant = function(pennant) {
      if (node) {
        node.left = pennant;
        node = pennant;
      } else {
        root2 = pennant;
        node = pennant;
      }
    };
    for (let i = 0; i < base122.count; ++i) {
      const isOne = base122.nextBitIsOne();
      const chunkSize = Math.pow(2, base122.count - (i + 1));
      if (isOne) {
        buildPennant(chunkSize, LLRBNode.BLACK);
      } else {
        buildPennant(chunkSize, LLRBNode.BLACK);
        buildPennant(chunkSize, LLRBNode.RED);
      }
    }
    return root2;
  };
  const base12 = new Base12Num(childList.length);
  const root = buildFrom12Array(base12);
  return new SortedMap(mapSortFn || cmp, root);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let _defaultIndexMap;
const fallbackObject = {};
class IndexMap {
  constructor(indexes_, indexSet_) {
    this.indexes_ = indexes_;
    this.indexSet_ = indexSet_;
  }
  static get Default() {
    assert(fallbackObject && PRIORITY_INDEX, "ChildrenNode.ts has not been loaded");
    _defaultIndexMap = _defaultIndexMap || new IndexMap({ ".priority": fallbackObject }, { ".priority": PRIORITY_INDEX });
    return _defaultIndexMap;
  }
  get(indexKey) {
    const sortedMap = safeGet(this.indexes_, indexKey);
    if (!sortedMap) {
      throw new Error("No index defined for " + indexKey);
    }
    if (sortedMap instanceof SortedMap) {
      return sortedMap;
    } else {
      return null;
    }
  }
  hasIndex(indexDefinition) {
    return contains(this.indexSet_, indexDefinition.toString());
  }
  addIndex(indexDefinition, existingChildren) {
    assert(indexDefinition !== KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
    const childList = [];
    let sawIndexedValue = false;
    const iter = existingChildren.getIterator(NamedNode.Wrap);
    let next = iter.getNext();
    while (next) {
      sawIndexedValue = sawIndexedValue || indexDefinition.isDefinedOn(next.node);
      childList.push(next);
      next = iter.getNext();
    }
    let newIndex;
    if (sawIndexedValue) {
      newIndex = buildChildSet(childList, indexDefinition.getCompare());
    } else {
      newIndex = fallbackObject;
    }
    const indexName = indexDefinition.toString();
    const newIndexSet = Object.assign({}, this.indexSet_);
    newIndexSet[indexName] = indexDefinition;
    const newIndexes = Object.assign({}, this.indexes_);
    newIndexes[indexName] = newIndex;
    return new IndexMap(newIndexes, newIndexSet);
  }
  addToIndexes(namedNode, existingChildren) {
    const newIndexes = map(this.indexes_, (indexedChildren, indexName) => {
      const index = safeGet(this.indexSet_, indexName);
      assert(index, "Missing index implementation for " + indexName);
      if (indexedChildren === fallbackObject) {
        if (index.isDefinedOn(namedNode.node)) {
          const childList = [];
          const iter = existingChildren.getIterator(NamedNode.Wrap);
          let next = iter.getNext();
          while (next) {
            if (next.name !== namedNode.name) {
              childList.push(next);
            }
            next = iter.getNext();
          }
          childList.push(namedNode);
          return buildChildSet(childList, index.getCompare());
        } else {
          return fallbackObject;
        }
      } else {
        const existingSnap = existingChildren.get(namedNode.name);
        let newChildren = indexedChildren;
        if (existingSnap) {
          newChildren = newChildren.remove(new NamedNode(namedNode.name, existingSnap));
        }
        return newChildren.insert(namedNode, namedNode.node);
      }
    });
    return new IndexMap(newIndexes, this.indexSet_);
  }
  removeFromIndexes(namedNode, existingChildren) {
    const newIndexes = map(this.indexes_, (indexedChildren) => {
      if (indexedChildren === fallbackObject) {
        return indexedChildren;
      } else {
        const existingSnap = existingChildren.get(namedNode.name);
        if (existingSnap) {
          return indexedChildren.remove(new NamedNode(namedNode.name, existingSnap));
        } else {
          return indexedChildren;
        }
      }
    });
    return new IndexMap(newIndexes, this.indexSet_);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let EMPTY_NODE;
class ChildrenNode {
  constructor(children_, priorityNode_, indexMap_) {
    this.children_ = children_;
    this.priorityNode_ = priorityNode_;
    this.indexMap_ = indexMap_;
    this.lazyHash_ = null;
    if (this.priorityNode_) {
      validatePriorityNode(this.priorityNode_);
    }
    if (this.children_.isEmpty()) {
      assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority");
    }
  }
  static get EMPTY_NODE() {
    return EMPTY_NODE || (EMPTY_NODE = new ChildrenNode(new SortedMap(NAME_COMPARATOR), null, IndexMap.Default));
  }
  isLeafNode() {
    return false;
  }
  getPriority() {
    return this.priorityNode_ || EMPTY_NODE;
  }
  updatePriority(newPriorityNode) {
    if (this.children_.isEmpty()) {
      return this;
    } else {
      return new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
    }
  }
  getImmediateChild(childName) {
    if (childName === ".priority") {
      return this.getPriority();
    } else {
      const child2 = this.children_.get(childName);
      return child2 === null ? EMPTY_NODE : child2;
    }
  }
  getChild(path) {
    const front = pathGetFront(path);
    if (front === null) {
      return this;
    }
    return this.getImmediateChild(front).getChild(pathPopFront(path));
  }
  hasChild(childName) {
    return this.children_.get(childName) !== null;
  }
  updateImmediateChild(childName, newChildNode) {
    assert(newChildNode, "We should always be passing snapshot nodes");
    if (childName === ".priority") {
      return this.updatePriority(newChildNode);
    } else {
      const namedNode = new NamedNode(childName, newChildNode);
      let newChildren, newIndexMap;
      if (newChildNode.isEmpty()) {
        newChildren = this.children_.remove(childName);
        newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
      } else {
        newChildren = this.children_.insert(childName, newChildNode);
        newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
      }
      const newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
      return new ChildrenNode(newChildren, newPriority, newIndexMap);
    }
  }
  updateChild(path, newChildNode) {
    const front = pathGetFront(path);
    if (front === null) {
      return newChildNode;
    } else {
      assert(pathGetFront(path) !== ".priority" || pathGetLength(path) === 1, ".priority must be the last token in a path");
      const newImmediateChild = this.getImmediateChild(front).updateChild(pathPopFront(path), newChildNode);
      return this.updateImmediateChild(front, newImmediateChild);
    }
  }
  isEmpty() {
    return this.children_.isEmpty();
  }
  numChildren() {
    return this.children_.count();
  }
  val(exportFormat) {
    if (this.isEmpty()) {
      return null;
    }
    const obj = {};
    let numKeys = 0, maxKey = 0, allIntegerKeys = true;
    this.forEachChild(PRIORITY_INDEX, (key, childNode) => {
      obj[key] = childNode.val(exportFormat);
      numKeys++;
      if (allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key)) {
        maxKey = Math.max(maxKey, Number(key));
      } else {
        allIntegerKeys = false;
      }
    });
    if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
      const array = [];
      for (const key in obj) {
        array[key] = obj[key];
      }
      return array;
    } else {
      if (exportFormat && !this.getPriority().isEmpty()) {
        obj[".priority"] = this.getPriority().val();
      }
      return obj;
    }
  }
  hash() {
    if (this.lazyHash_ === null) {
      let toHash = "";
      if (!this.getPriority().isEmpty()) {
        toHash += "priority:" + priorityHashText(this.getPriority().val()) + ":";
      }
      this.forEachChild(PRIORITY_INDEX, (key, childNode) => {
        const childHash = childNode.hash();
        if (childHash !== "") {
          toHash += ":" + key + ":" + childHash;
        }
      });
      this.lazyHash_ = toHash === "" ? "" : sha1(toHash);
    }
    return this.lazyHash_;
  }
  getPredecessorChildName(childName, childNode, index) {
    const idx = this.resolveIndex_(index);
    if (idx) {
      const predecessor = idx.getPredecessorKey(new NamedNode(childName, childNode));
      return predecessor ? predecessor.name : null;
    } else {
      return this.children_.getPredecessorKey(childName);
    }
  }
  getFirstChildName(indexDefinition) {
    const idx = this.resolveIndex_(indexDefinition);
    if (idx) {
      const minKey = idx.minKey();
      return minKey && minKey.name;
    } else {
      return this.children_.minKey();
    }
  }
  getFirstChild(indexDefinition) {
    const minKey = this.getFirstChildName(indexDefinition);
    if (minKey) {
      return new NamedNode(minKey, this.children_.get(minKey));
    } else {
      return null;
    }
  }
  getLastChildName(indexDefinition) {
    const idx = this.resolveIndex_(indexDefinition);
    if (idx) {
      const maxKey = idx.maxKey();
      return maxKey && maxKey.name;
    } else {
      return this.children_.maxKey();
    }
  }
  getLastChild(indexDefinition) {
    const maxKey = this.getLastChildName(indexDefinition);
    if (maxKey) {
      return new NamedNode(maxKey, this.children_.get(maxKey));
    } else {
      return null;
    }
  }
  forEachChild(index, action) {
    const idx = this.resolveIndex_(index);
    if (idx) {
      return idx.inorderTraversal((wrappedNode) => {
        return action(wrappedNode.name, wrappedNode.node);
      });
    } else {
      return this.children_.inorderTraversal(action);
    }
  }
  getIterator(indexDefinition) {
    return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
  }
  getIteratorFrom(startPost, indexDefinition) {
    const idx = this.resolveIndex_(indexDefinition);
    if (idx) {
      return idx.getIteratorFrom(startPost, (key) => key);
    } else {
      const iterator = this.children_.getIteratorFrom(startPost.name, NamedNode.Wrap);
      let next = iterator.peek();
      while (next != null && indexDefinition.compare(next, startPost) < 0) {
        iterator.getNext();
        next = iterator.peek();
      }
      return iterator;
    }
  }
  getReverseIterator(indexDefinition) {
    return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
  }
  getReverseIteratorFrom(endPost, indexDefinition) {
    const idx = this.resolveIndex_(indexDefinition);
    if (idx) {
      return idx.getReverseIteratorFrom(endPost, (key) => {
        return key;
      });
    } else {
      const iterator = this.children_.getReverseIteratorFrom(endPost.name, NamedNode.Wrap);
      let next = iterator.peek();
      while (next != null && indexDefinition.compare(next, endPost) > 0) {
        iterator.getNext();
        next = iterator.peek();
      }
      return iterator;
    }
  }
  compareTo(other) {
    if (this.isEmpty()) {
      if (other.isEmpty()) {
        return 0;
      } else {
        return -1;
      }
    } else if (other.isLeafNode() || other.isEmpty()) {
      return 1;
    } else if (other === MAX_NODE) {
      return -1;
    } else {
      return 0;
    }
  }
  withIndex(indexDefinition) {
    if (indexDefinition === KEY_INDEX || this.indexMap_.hasIndex(indexDefinition)) {
      return this;
    } else {
      const newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
      return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
    }
  }
  isIndexed(index) {
    return index === KEY_INDEX || this.indexMap_.hasIndex(index);
  }
  equals(other) {
    if (other === this) {
      return true;
    } else if (other.isLeafNode()) {
      return false;
    } else {
      const otherChildrenNode = other;
      if (!this.getPriority().equals(otherChildrenNode.getPriority())) {
        return false;
      } else if (this.children_.count() === otherChildrenNode.children_.count()) {
        const thisIter = this.getIterator(PRIORITY_INDEX);
        const otherIter = otherChildrenNode.getIterator(PRIORITY_INDEX);
        let thisCurrent = thisIter.getNext();
        let otherCurrent = otherIter.getNext();
        while (thisCurrent && otherCurrent) {
          if (thisCurrent.name !== otherCurrent.name || !thisCurrent.node.equals(otherCurrent.node)) {
            return false;
          }
          thisCurrent = thisIter.getNext();
          otherCurrent = otherIter.getNext();
        }
        return thisCurrent === null && otherCurrent === null;
      } else {
        return false;
      }
    }
  }
  resolveIndex_(indexDefinition) {
    if (indexDefinition === KEY_INDEX) {
      return null;
    } else {
      return this.indexMap_.get(indexDefinition.toString());
    }
  }
}
ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class MaxNode extends ChildrenNode {
  constructor() {
    super(new SortedMap(NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap.Default);
  }
  compareTo(other) {
    if (other === this) {
      return 0;
    } else {
      return 1;
    }
  }
  equals(other) {
    return other === this;
  }
  getPriority() {
    return this;
  }
  getImmediateChild(childName) {
    return ChildrenNode.EMPTY_NODE;
  }
  isEmpty() {
    return false;
  }
}
const MAX_NODE = new MaxNode();
Object.defineProperties(NamedNode, {
  MIN: {
    value: new NamedNode(MIN_NAME, ChildrenNode.EMPTY_NODE)
  },
  MAX: {
    value: new NamedNode(MAX_NAME, MAX_NODE)
  }
});
KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
LeafNode.__childrenNodeConstructor = ChildrenNode;
setMaxNode$1(MAX_NODE);
setMaxNode(MAX_NODE);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const USE_HINZE = true;
function nodeFromJSON(json, priority = null) {
  if (json === null) {
    return ChildrenNode.EMPTY_NODE;
  }
  if (typeof json === "object" && ".priority" in json) {
    priority = json[".priority"];
  }
  assert(priority === null || typeof priority === "string" || typeof priority === "number" || typeof priority === "object" && ".sv" in priority, "Invalid priority type found: " + typeof priority);
  if (typeof json === "object" && ".value" in json && json[".value"] !== null) {
    json = json[".value"];
  }
  if (typeof json !== "object" || ".sv" in json) {
    const jsonLeaf = json;
    return new LeafNode(jsonLeaf, nodeFromJSON(priority));
  }
  if (!(json instanceof Array) && USE_HINZE) {
    const children = [];
    let childrenHavePriority = false;
    const hinzeJsonObj = json;
    each(hinzeJsonObj, (key, child2) => {
      if (key.substring(0, 1) !== ".") {
        const childNode = nodeFromJSON(child2);
        if (!childNode.isEmpty()) {
          childrenHavePriority = childrenHavePriority || !childNode.getPriority().isEmpty();
          children.push(new NamedNode(key, childNode));
        }
      }
    });
    if (children.length === 0) {
      return ChildrenNode.EMPTY_NODE;
    }
    const childSet = buildChildSet(children, NAME_ONLY_COMPARATOR, (namedNode) => namedNode.name, NAME_COMPARATOR);
    if (childrenHavePriority) {
      const sortedChildSet = buildChildSet(children, PRIORITY_INDEX.getCompare());
      return new ChildrenNode(childSet, nodeFromJSON(priority), new IndexMap({ ".priority": sortedChildSet }, { ".priority": PRIORITY_INDEX }));
    } else {
      return new ChildrenNode(childSet, nodeFromJSON(priority), IndexMap.Default);
    }
  } else {
    let node = ChildrenNode.EMPTY_NODE;
    each(json, (key, childData) => {
      if (contains(json, key)) {
        if (key.substring(0, 1) !== ".") {
          const childNode = nodeFromJSON(childData);
          if (childNode.isLeafNode() || !childNode.isEmpty()) {
            node = node.updateImmediateChild(key, childNode);
          }
        }
      }
    });
    return node.updatePriority(nodeFromJSON(priority));
  }
}
setNodeFromJSON(nodeFromJSON);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PathIndex extends Index {
  constructor(indexPath_) {
    super();
    this.indexPath_ = indexPath_;
    assert(!pathIsEmpty(indexPath_) && pathGetFront(indexPath_) !== ".priority", "Can't create PathIndex with empty path or .priority key");
  }
  extractChild(snap) {
    return snap.getChild(this.indexPath_);
  }
  isDefinedOn(node) {
    return !node.getChild(this.indexPath_).isEmpty();
  }
  compare(a, b) {
    const aChild = this.extractChild(a.node);
    const bChild = this.extractChild(b.node);
    const indexCmp = aChild.compareTo(bChild);
    if (indexCmp === 0) {
      return nameCompare(a.name, b.name);
    } else {
      return indexCmp;
    }
  }
  makePost(indexValue, name2) {
    const valueNode = nodeFromJSON(indexValue);
    const node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
    return new NamedNode(name2, node);
  }
  maxPost() {
    const node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, MAX_NODE);
    return new NamedNode(MAX_NAME, node);
  }
  toString() {
    return pathSlice(this.indexPath_, 0).join("/");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ValueIndex extends Index {
  compare(a, b) {
    const indexCmp = a.node.compareTo(b.node);
    if (indexCmp === 0) {
      return nameCompare(a.name, b.name);
    } else {
      return indexCmp;
    }
  }
  isDefinedOn(node) {
    return true;
  }
  indexedValueChanged(oldNode, newNode) {
    return !oldNode.equals(newNode);
  }
  minPost() {
    return NamedNode.MIN;
  }
  maxPost() {
    return NamedNode.MAX;
  }
  makePost(indexValue, name2) {
    const valueNode = nodeFromJSON(indexValue);
    return new NamedNode(name2, valueNode);
  }
  toString() {
    return ".value";
  }
}
const VALUE_INDEX = new ValueIndex();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
const nextPushId = function() {
  let lastPushTime = 0;
  const lastRandChars = [];
  return function(now) {
    const duplicateTime = now === lastPushTime;
    lastPushTime = now;
    let i;
    const timeStampChars = new Array(8);
    for (i = 7; i >= 0; i--) {
      timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
      now = Math.floor(now / 64);
    }
    assert(now === 0, "Cannot push at time == 0");
    let id = timeStampChars.join("");
    if (!duplicateTime) {
      for (i = 0; i < 12; i++) {
        lastRandChars[i] = Math.floor(Math.random() * 64);
      }
    } else {
      for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
        lastRandChars[i] = 0;
      }
      lastRandChars[i]++;
    }
    for (i = 0; i < 12; i++) {
      id += PUSH_CHARS.charAt(lastRandChars[i]);
    }
    assert(id.length === 20, "nextPushId: Length should be 20.");
    return id;
  };
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function changeValue(snapshotNode) {
  return { type: "value", snapshotNode };
}
function changeChildAdded(childName, snapshotNode) {
  return { type: "child_added", snapshotNode, childName };
}
function changeChildRemoved(childName, snapshotNode) {
  return { type: "child_removed", snapshotNode, childName };
}
function changeChildChanged(childName, snapshotNode, oldSnap) {
  return {
    type: "child_changed",
    snapshotNode,
    childName,
    oldSnap
  };
}
function changeChildMoved(childName, snapshotNode) {
  return { type: "child_moved", snapshotNode, childName };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class IndexedFilter {
  constructor(index_) {
    this.index_ = index_;
  }
  updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
    assert(snap.isIndexed(this.index_), "A node must be indexed if only a child is updated");
    const oldChild = snap.getImmediateChild(key);
    if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))) {
      if (oldChild.isEmpty() === newChild.isEmpty()) {
        return snap;
      }
    }
    if (optChangeAccumulator != null) {
      if (newChild.isEmpty()) {
        if (snap.hasChild(key)) {
          optChangeAccumulator.trackChildChange(changeChildRemoved(key, oldChild));
        } else {
          assert(snap.isLeafNode(), "A child remove without an old child only makes sense on a leaf node");
        }
      } else if (oldChild.isEmpty()) {
        optChangeAccumulator.trackChildChange(changeChildAdded(key, newChild));
      } else {
        optChangeAccumulator.trackChildChange(changeChildChanged(key, newChild, oldChild));
      }
    }
    if (snap.isLeafNode() && newChild.isEmpty()) {
      return snap;
    } else {
      return snap.updateImmediateChild(key, newChild).withIndex(this.index_);
    }
  }
  updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
    if (optChangeAccumulator != null) {
      if (!oldSnap.isLeafNode()) {
        oldSnap.forEachChild(PRIORITY_INDEX, (key, childNode) => {
          if (!newSnap.hasChild(key)) {
            optChangeAccumulator.trackChildChange(changeChildRemoved(key, childNode));
          }
        });
      }
      if (!newSnap.isLeafNode()) {
        newSnap.forEachChild(PRIORITY_INDEX, (key, childNode) => {
          if (oldSnap.hasChild(key)) {
            const oldChild = oldSnap.getImmediateChild(key);
            if (!oldChild.equals(childNode)) {
              optChangeAccumulator.trackChildChange(changeChildChanged(key, childNode, oldChild));
            }
          } else {
            optChangeAccumulator.trackChildChange(changeChildAdded(key, childNode));
          }
        });
      }
    }
    return newSnap.withIndex(this.index_);
  }
  updatePriority(oldSnap, newPriority) {
    if (oldSnap.isEmpty()) {
      return ChildrenNode.EMPTY_NODE;
    } else {
      return oldSnap.updatePriority(newPriority);
    }
  }
  filtersNodes() {
    return false;
  }
  getIndexedFilter() {
    return this;
  }
  getIndex() {
    return this.index_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class RangedFilter {
  constructor(params) {
    this.indexedFilter_ = new IndexedFilter(params.getIndex());
    this.index_ = params.getIndex();
    this.startPost_ = RangedFilter.getStartPost_(params);
    this.endPost_ = RangedFilter.getEndPost_(params);
  }
  getStartPost() {
    return this.startPost_;
  }
  getEndPost() {
    return this.endPost_;
  }
  matches(node) {
    return this.index_.compare(this.getStartPost(), node) <= 0 && this.index_.compare(node, this.getEndPost()) <= 0;
  }
  updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
    if (!this.matches(new NamedNode(key, newChild))) {
      newChild = ChildrenNode.EMPTY_NODE;
    }
    return this.indexedFilter_.updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
  }
  updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
    if (newSnap.isLeafNode()) {
      newSnap = ChildrenNode.EMPTY_NODE;
    }
    let filtered = newSnap.withIndex(this.index_);
    filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
    const self2 = this;
    newSnap.forEachChild(PRIORITY_INDEX, (key, childNode) => {
      if (!self2.matches(new NamedNode(key, childNode))) {
        filtered = filtered.updateImmediateChild(key, ChildrenNode.EMPTY_NODE);
      }
    });
    return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
  }
  updatePriority(oldSnap, newPriority) {
    return oldSnap;
  }
  filtersNodes() {
    return true;
  }
  getIndexedFilter() {
    return this.indexedFilter_;
  }
  getIndex() {
    return this.index_;
  }
  static getStartPost_(params) {
    if (params.hasStart()) {
      const startName = params.getIndexStartName();
      return params.getIndex().makePost(params.getIndexStartValue(), startName);
    } else {
      return params.getIndex().minPost();
    }
  }
  static getEndPost_(params) {
    if (params.hasEnd()) {
      const endName = params.getIndexEndName();
      return params.getIndex().makePost(params.getIndexEndValue(), endName);
    } else {
      return params.getIndex().maxPost();
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class LimitedFilter {
  constructor(params) {
    this.rangedFilter_ = new RangedFilter(params);
    this.index_ = params.getIndex();
    this.limit_ = params.getLimit();
    this.reverse_ = !params.isViewFromLeft();
  }
  updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator) {
    if (!this.rangedFilter_.matches(new NamedNode(key, newChild))) {
      newChild = ChildrenNode.EMPTY_NODE;
    }
    if (snap.getImmediateChild(key).equals(newChild)) {
      return snap;
    } else if (snap.numChildren() < this.limit_) {
      return this.rangedFilter_.getIndexedFilter().updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
    } else {
      return this.fullLimitUpdateChild_(snap, key, newChild, source, optChangeAccumulator);
    }
  }
  updateFullNode(oldSnap, newSnap, optChangeAccumulator) {
    let filtered;
    if (newSnap.isLeafNode() || newSnap.isEmpty()) {
      filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
    } else {
      if (this.limit_ * 2 < newSnap.numChildren() && newSnap.isIndexed(this.index_)) {
        filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
        let iterator;
        if (this.reverse_) {
          iterator = newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_);
        } else {
          iterator = newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
        }
        let count = 0;
        while (iterator.hasNext() && count < this.limit_) {
          const next = iterator.getNext();
          let inRange;
          if (this.reverse_) {
            inRange = this.index_.compare(this.rangedFilter_.getStartPost(), next) <= 0;
          } else {
            inRange = this.index_.compare(next, this.rangedFilter_.getEndPost()) <= 0;
          }
          if (inRange) {
            filtered = filtered.updateImmediateChild(next.name, next.node);
            count++;
          } else {
            break;
          }
        }
      } else {
        filtered = newSnap.withIndex(this.index_);
        filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
        let startPost;
        let endPost;
        let cmp;
        let iterator;
        if (this.reverse_) {
          iterator = filtered.getReverseIterator(this.index_);
          startPost = this.rangedFilter_.getEndPost();
          endPost = this.rangedFilter_.getStartPost();
          const indexCompare = this.index_.getCompare();
          cmp = (a, b) => indexCompare(b, a);
        } else {
          iterator = filtered.getIterator(this.index_);
          startPost = this.rangedFilter_.getStartPost();
          endPost = this.rangedFilter_.getEndPost();
          cmp = this.index_.getCompare();
        }
        let count = 0;
        let foundStartPost = false;
        while (iterator.hasNext()) {
          const next = iterator.getNext();
          if (!foundStartPost && cmp(startPost, next) <= 0) {
            foundStartPost = true;
          }
          const inRange = foundStartPost && count < this.limit_ && cmp(next, endPost) <= 0;
          if (inRange) {
            count++;
          } else {
            filtered = filtered.updateImmediateChild(next.name, ChildrenNode.EMPTY_NODE);
          }
        }
      }
    }
    return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap, filtered, optChangeAccumulator);
  }
  updatePriority(oldSnap, newPriority) {
    return oldSnap;
  }
  filtersNodes() {
    return true;
  }
  getIndexedFilter() {
    return this.rangedFilter_.getIndexedFilter();
  }
  getIndex() {
    return this.index_;
  }
  fullLimitUpdateChild_(snap, childKey, childSnap, source, changeAccumulator) {
    let cmp;
    if (this.reverse_) {
      const indexCmp = this.index_.getCompare();
      cmp = (a, b) => indexCmp(b, a);
    } else {
      cmp = this.index_.getCompare();
    }
    const oldEventCache = snap;
    assert(oldEventCache.numChildren() === this.limit_, "");
    const newChildNamedNode = new NamedNode(childKey, childSnap);
    const windowBoundary = this.reverse_ ? oldEventCache.getFirstChild(this.index_) : oldEventCache.getLastChild(this.index_);
    const inRange = this.rangedFilter_.matches(newChildNamedNode);
    if (oldEventCache.hasChild(childKey)) {
      const oldChildSnap = oldEventCache.getImmediateChild(childKey);
      let nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);
      while (nextChild != null && (nextChild.name === childKey || oldEventCache.hasChild(nextChild.name))) {
        nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
      }
      const compareNext = nextChild == null ? 1 : cmp(nextChild, newChildNamedNode);
      const remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;
      if (remainsInWindow) {
        if (changeAccumulator != null) {
          changeAccumulator.trackChildChange(changeChildChanged(childKey, childSnap, oldChildSnap));
        }
        return oldEventCache.updateImmediateChild(childKey, childSnap);
      } else {
        if (changeAccumulator != null) {
          changeAccumulator.trackChildChange(changeChildRemoved(childKey, oldChildSnap));
        }
        const newEventCache = oldEventCache.updateImmediateChild(childKey, ChildrenNode.EMPTY_NODE);
        const nextChildInRange = nextChild != null && this.rangedFilter_.matches(nextChild);
        if (nextChildInRange) {
          if (changeAccumulator != null) {
            changeAccumulator.trackChildChange(changeChildAdded(nextChild.name, nextChild.node));
          }
          return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
        } else {
          return newEventCache;
        }
      }
    } else if (childSnap.isEmpty()) {
      return snap;
    } else if (inRange) {
      if (cmp(windowBoundary, newChildNamedNode) >= 0) {
        if (changeAccumulator != null) {
          changeAccumulator.trackChildChange(changeChildRemoved(windowBoundary.name, windowBoundary.node));
          changeAccumulator.trackChildChange(changeChildAdded(childKey, childSnap));
        }
        return oldEventCache.updateImmediateChild(childKey, childSnap).updateImmediateChild(windowBoundary.name, ChildrenNode.EMPTY_NODE);
      } else {
        return snap;
      }
    } else {
      return snap;
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class QueryParams {
  constructor() {
    this.limitSet_ = false;
    this.startSet_ = false;
    this.startNameSet_ = false;
    this.startAfterSet_ = false;
    this.endSet_ = false;
    this.endNameSet_ = false;
    this.endBeforeSet_ = false;
    this.limit_ = 0;
    this.viewFrom_ = "";
    this.indexStartValue_ = null;
    this.indexStartName_ = "";
    this.indexEndValue_ = null;
    this.indexEndName_ = "";
    this.index_ = PRIORITY_INDEX;
  }
  hasStart() {
    return this.startSet_;
  }
  hasStartAfter() {
    return this.startAfterSet_;
  }
  hasEndBefore() {
    return this.endBeforeSet_;
  }
  isViewFromLeft() {
    if (this.viewFrom_ === "") {
      return this.startSet_;
    } else {
      return this.viewFrom_ === "l";
    }
  }
  getIndexStartValue() {
    assert(this.startSet_, "Only valid if start has been set");
    return this.indexStartValue_;
  }
  getIndexStartName() {
    assert(this.startSet_, "Only valid if start has been set");
    if (this.startNameSet_) {
      return this.indexStartName_;
    } else {
      return MIN_NAME;
    }
  }
  hasEnd() {
    return this.endSet_;
  }
  getIndexEndValue() {
    assert(this.endSet_, "Only valid if end has been set");
    return this.indexEndValue_;
  }
  getIndexEndName() {
    assert(this.endSet_, "Only valid if end has been set");
    if (this.endNameSet_) {
      return this.indexEndName_;
    } else {
      return MAX_NAME;
    }
  }
  hasLimit() {
    return this.limitSet_;
  }
  hasAnchoredLimit() {
    return this.limitSet_ && this.viewFrom_ !== "";
  }
  getLimit() {
    assert(this.limitSet_, "Only valid if limit has been set");
    return this.limit_;
  }
  getIndex() {
    return this.index_;
  }
  loadsAllData() {
    return !(this.startSet_ || this.endSet_ || this.limitSet_);
  }
  isDefault() {
    return this.loadsAllData() && this.index_ === PRIORITY_INDEX;
  }
  copy() {
    const copy = new QueryParams();
    copy.limitSet_ = this.limitSet_;
    copy.limit_ = this.limit_;
    copy.startSet_ = this.startSet_;
    copy.indexStartValue_ = this.indexStartValue_;
    copy.startNameSet_ = this.startNameSet_;
    copy.indexStartName_ = this.indexStartName_;
    copy.endSet_ = this.endSet_;
    copy.indexEndValue_ = this.indexEndValue_;
    copy.endNameSet_ = this.endNameSet_;
    copy.indexEndName_ = this.indexEndName_;
    copy.index_ = this.index_;
    copy.viewFrom_ = this.viewFrom_;
    return copy;
  }
}
function queryParamsGetNodeFilter(queryParams) {
  if (queryParams.loadsAllData()) {
    return new IndexedFilter(queryParams.getIndex());
  } else if (queryParams.hasLimit()) {
    return new LimitedFilter(queryParams);
  } else {
    return new RangedFilter(queryParams);
  }
}
function queryParamsToRestQueryStringParameters(queryParams) {
  const qs = {};
  if (queryParams.isDefault()) {
    return qs;
  }
  let orderBy;
  if (queryParams.index_ === PRIORITY_INDEX) {
    orderBy = "$priority";
  } else if (queryParams.index_ === VALUE_INDEX) {
    orderBy = "$value";
  } else if (queryParams.index_ === KEY_INDEX) {
    orderBy = "$key";
  } else {
    assert(queryParams.index_ instanceof PathIndex, "Unrecognized index type!");
    orderBy = queryParams.index_.toString();
  }
  qs["orderBy"] = stringify(orderBy);
  if (queryParams.startSet_) {
    qs["startAt"] = stringify(queryParams.indexStartValue_);
    if (queryParams.startNameSet_) {
      qs["startAt"] += "," + stringify(queryParams.indexStartName_);
    }
  }
  if (queryParams.endSet_) {
    qs["endAt"] = stringify(queryParams.indexEndValue_);
    if (queryParams.endNameSet_) {
      qs["endAt"] += "," + stringify(queryParams.indexEndName_);
    }
  }
  if (queryParams.limitSet_) {
    if (queryParams.isViewFromLeft()) {
      qs["limitToFirst"] = queryParams.limit_;
    } else {
      qs["limitToLast"] = queryParams.limit_;
    }
  }
  return qs;
}
function queryParamsGetQueryObject(queryParams) {
  const obj = {};
  if (queryParams.startSet_) {
    obj["sp"] = queryParams.indexStartValue_;
    if (queryParams.startNameSet_) {
      obj["sn"] = queryParams.indexStartName_;
    }
  }
  if (queryParams.endSet_) {
    obj["ep"] = queryParams.indexEndValue_;
    if (queryParams.endNameSet_) {
      obj["en"] = queryParams.indexEndName_;
    }
  }
  if (queryParams.limitSet_) {
    obj["l"] = queryParams.limit_;
    let viewFrom = queryParams.viewFrom_;
    if (viewFrom === "") {
      if (queryParams.isViewFromLeft()) {
        viewFrom = "l";
      } else {
        viewFrom = "r";
      }
    }
    obj["vf"] = viewFrom;
  }
  if (queryParams.index_ !== PRIORITY_INDEX) {
    obj["i"] = queryParams.index_.toString();
  }
  return obj;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ReadonlyRestClient extends ServerActions {
  constructor(repoInfo_, onDataUpdate_, authTokenProvider_, appCheckTokenProvider_) {
    super();
    this.repoInfo_ = repoInfo_;
    this.onDataUpdate_ = onDataUpdate_;
    this.authTokenProvider_ = authTokenProvider_;
    this.appCheckTokenProvider_ = appCheckTokenProvider_;
    this.log_ = logWrapper("p:rest:");
    this.listens_ = {};
  }
  reportStats(stats) {
    throw new Error("Method not implemented.");
  }
  static getListenId_(query, tag) {
    if (tag !== void 0) {
      return "tag$" + tag;
    } else {
      assert(query._queryParams.isDefault(), "should have a tag if it's not a default query.");
      return query._path.toString();
    }
  }
  listen(query, currentHashFn, tag, onComplete) {
    const pathString = query._path.toString();
    this.log_("Listen called for " + pathString + " " + query._queryIdentifier);
    const listenId = ReadonlyRestClient.getListenId_(query, tag);
    const thisListen = {};
    this.listens_[listenId] = thisListen;
    const queryStringParameters = queryParamsToRestQueryStringParameters(query._queryParams);
    this.restRequest_(pathString + ".json", queryStringParameters, (error2, result) => {
      let data = result;
      if (error2 === 404) {
        data = null;
        error2 = null;
      }
      if (error2 === null) {
        this.onDataUpdate_(pathString, data, false, tag);
      }
      if (safeGet(this.listens_, listenId) === thisListen) {
        let status;
        if (!error2) {
          status = "ok";
        } else if (error2 === 401) {
          status = "permission_denied";
        } else {
          status = "rest_error:" + error2;
        }
        onComplete(status, null);
      }
    });
  }
  unlisten(query, tag) {
    const listenId = ReadonlyRestClient.getListenId_(query, tag);
    delete this.listens_[listenId];
  }
  get(query) {
    const queryStringParameters = queryParamsToRestQueryStringParameters(query._queryParams);
    const pathString = query._path.toString();
    const deferred = new Deferred();
    this.restRequest_(pathString + ".json", queryStringParameters, (error2, result) => {
      let data = result;
      if (error2 === 404) {
        data = null;
        error2 = null;
      }
      if (error2 === null) {
        this.onDataUpdate_(pathString, data, false, null);
        deferred.resolve(data);
      } else {
        deferred.reject(new Error(data));
      }
    });
    return deferred.promise;
  }
  refreshAuthToken(token) {
  }
  restRequest_(pathString, queryStringParameters = {}, callback) {
    queryStringParameters["format"] = "export";
    return Promise.all([
      this.authTokenProvider_.getToken(false),
      this.appCheckTokenProvider_.getToken(false)
    ]).then(([authToken, appCheckToken]) => {
      if (authToken && authToken.accessToken) {
        queryStringParameters["auth"] = authToken.accessToken;
      }
      if (appCheckToken && appCheckToken.token) {
        queryStringParameters["ac"] = appCheckToken.token;
      }
      const url = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + pathString + "?ns=" + this.repoInfo_.namespace + querystring(queryStringParameters);
      this.log_("Sending REST request for " + url);
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (callback && xhr.readyState === 4) {
          this.log_("REST Response for " + url + " received. status:", xhr.status, "response:", xhr.responseText);
          let res = null;
          if (xhr.status >= 200 && xhr.status < 300) {
            try {
              res = jsonEval(xhr.responseText);
            } catch (e) {
              warn("Failed to parse JSON response for " + url + ": " + xhr.responseText);
            }
            callback(null, res);
          } else {
            if (xhr.status !== 401 && xhr.status !== 404) {
              warn("Got unsuccessful REST response for " + url + " Status: " + xhr.status);
            }
            callback(xhr.status);
          }
          callback = null;
        }
      };
      xhr.open("GET", url, true);
      xhr.send();
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class SnapshotHolder {
  constructor() {
    this.rootNode_ = ChildrenNode.EMPTY_NODE;
  }
  getNode(path) {
    return this.rootNode_.getChild(path);
  }
  updateSnapshot(path, newSnapshotNode) {
    this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function newSparseSnapshotTree() {
  return {
    value: null,
    children: new Map()
  };
}
function sparseSnapshotTreeRemember(sparseSnapshotTree, path, data) {
  if (pathIsEmpty(path)) {
    sparseSnapshotTree.value = data;
    sparseSnapshotTree.children.clear();
  } else if (sparseSnapshotTree.value !== null) {
    sparseSnapshotTree.value = sparseSnapshotTree.value.updateChild(path, data);
  } else {
    const childKey = pathGetFront(path);
    if (!sparseSnapshotTree.children.has(childKey)) {
      sparseSnapshotTree.children.set(childKey, newSparseSnapshotTree());
    }
    const child2 = sparseSnapshotTree.children.get(childKey);
    path = pathPopFront(path);
    sparseSnapshotTreeRemember(child2, path, data);
  }
}
function sparseSnapshotTreeForEachTree(sparseSnapshotTree, prefixPath, func2) {
  if (sparseSnapshotTree.value !== null) {
    func2(prefixPath, sparseSnapshotTree.value);
  } else {
    sparseSnapshotTreeForEachChild(sparseSnapshotTree, (key, tree) => {
      const path = new Path(prefixPath.toString() + "/" + key);
      sparseSnapshotTreeForEachTree(tree, path, func2);
    });
  }
}
function sparseSnapshotTreeForEachChild(sparseSnapshotTree, func2) {
  sparseSnapshotTree.children.forEach((tree, key) => {
    func2(key, tree);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class StatsListener {
  constructor(collection_) {
    this.collection_ = collection_;
    this.last_ = null;
  }
  get() {
    const newStats = this.collection_.get();
    const delta = Object.assign({}, newStats);
    if (this.last_) {
      each(this.last_, (stat, value) => {
        delta[stat] = delta[stat] - value;
      });
    }
    this.last_ = newStats;
    return delta;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const FIRST_STATS_MIN_TIME = 10 * 1e3;
const FIRST_STATS_MAX_TIME = 30 * 1e3;
const REPORT_STATS_INTERVAL = 5 * 60 * 1e3;
class StatsReporter {
  constructor(collection, server_) {
    this.server_ = server_;
    this.statsToReport_ = {};
    this.statsListener_ = new StatsListener(collection);
    const timeout = FIRST_STATS_MIN_TIME + (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
    setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
  }
  reportStats_() {
    const stats = this.statsListener_.get();
    const reportedStats = {};
    let haveStatsToReport = false;
    each(stats, (stat, value) => {
      if (value > 0 && contains(this.statsToReport_, stat)) {
        reportedStats[stat] = value;
        haveStatsToReport = true;
      }
    });
    if (haveStatsToReport) {
      this.server_.reportStats(reportedStats);
    }
    setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var OperationType;
(function(OperationType2) {
  OperationType2[OperationType2["OVERWRITE"] = 0] = "OVERWRITE";
  OperationType2[OperationType2["MERGE"] = 1] = "MERGE";
  OperationType2[OperationType2["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
  OperationType2[OperationType2["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
})(OperationType || (OperationType = {}));
function newOperationSourceUser() {
  return {
    fromUser: true,
    fromServer: false,
    queryId: null,
    tagged: false
  };
}
function newOperationSourceServer() {
  return {
    fromUser: false,
    fromServer: true,
    queryId: null,
    tagged: false
  };
}
function newOperationSourceServerTaggedQuery(queryId) {
  return {
    fromUser: false,
    fromServer: true,
    queryId,
    tagged: true
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AckUserWrite {
  constructor(path, affectedTree, revert) {
    this.path = path;
    this.affectedTree = affectedTree;
    this.revert = revert;
    this.type = OperationType.ACK_USER_WRITE;
    this.source = newOperationSourceUser();
  }
  operationForChild(childName) {
    if (!pathIsEmpty(this.path)) {
      assert(pathGetFront(this.path) === childName, "operationForChild called for unrelated child.");
      return new AckUserWrite(pathPopFront(this.path), this.affectedTree, this.revert);
    } else if (this.affectedTree.value != null) {
      assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths.");
      return this;
    } else {
      const childTree = this.affectedTree.subtree(new Path(childName));
      return new AckUserWrite(newEmptyPath(), childTree, this.revert);
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ListenComplete {
  constructor(source, path) {
    this.source = source;
    this.path = path;
    this.type = OperationType.LISTEN_COMPLETE;
  }
  operationForChild(childName) {
    if (pathIsEmpty(this.path)) {
      return new ListenComplete(this.source, newEmptyPath());
    } else {
      return new ListenComplete(this.source, pathPopFront(this.path));
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Overwrite {
  constructor(source, path, snap) {
    this.source = source;
    this.path = path;
    this.snap = snap;
    this.type = OperationType.OVERWRITE;
  }
  operationForChild(childName) {
    if (pathIsEmpty(this.path)) {
      return new Overwrite(this.source, newEmptyPath(), this.snap.getImmediateChild(childName));
    } else {
      return new Overwrite(this.source, pathPopFront(this.path), this.snap);
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Merge {
  constructor(source, path, children) {
    this.source = source;
    this.path = path;
    this.children = children;
    this.type = OperationType.MERGE;
  }
  operationForChild(childName) {
    if (pathIsEmpty(this.path)) {
      const childTree = this.children.subtree(new Path(childName));
      if (childTree.isEmpty()) {
        return null;
      } else if (childTree.value) {
        return new Overwrite(this.source, newEmptyPath(), childTree.value);
      } else {
        return new Merge(this.source, newEmptyPath(), childTree);
      }
    } else {
      assert(pathGetFront(this.path) === childName, "Can't get a merge for a child not on the path of the operation");
      return new Merge(this.source, pathPopFront(this.path), this.children);
    }
  }
  toString() {
    return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class CacheNode {
  constructor(node_, fullyInitialized_, filtered_) {
    this.node_ = node_;
    this.fullyInitialized_ = fullyInitialized_;
    this.filtered_ = filtered_;
  }
  isFullyInitialized() {
    return this.fullyInitialized_;
  }
  isFiltered() {
    return this.filtered_;
  }
  isCompleteForPath(path) {
    if (pathIsEmpty(path)) {
      return this.isFullyInitialized() && !this.filtered_;
    }
    const childKey = pathGetFront(path);
    return this.isCompleteForChild(childKey);
  }
  isCompleteForChild(key) {
    return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(key);
  }
  getNode() {
    return this.node_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EventGenerator {
  constructor(query_) {
    this.query_ = query_;
    this.index_ = this.query_._queryParams.getIndex();
  }
}
function eventGeneratorGenerateEventsForChanges(eventGenerator, changes, eventCache, eventRegistrations) {
  const events = [];
  const moves = [];
  changes.forEach((change) => {
    if (change.type === "child_changed" && eventGenerator.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) {
      moves.push(changeChildMoved(change.childName, change.snapshotNode));
    }
  });
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_removed", changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_added", changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_moved", moves, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "child_changed", changes, eventRegistrations, eventCache);
  eventGeneratorGenerateEventsForType(eventGenerator, events, "value", changes, eventRegistrations, eventCache);
  return events;
}
function eventGeneratorGenerateEventsForType(eventGenerator, events, eventType, changes, registrations, eventCache) {
  const filteredChanges = changes.filter((change) => change.type === eventType);
  filteredChanges.sort((a, b) => eventGeneratorCompareChanges(eventGenerator, a, b));
  filteredChanges.forEach((change) => {
    const materializedChange = eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache);
    registrations.forEach((registration) => {
      if (registration.respondsTo(change.type)) {
        events.push(registration.createEvent(materializedChange, eventGenerator.query_));
      }
    });
  });
}
function eventGeneratorMaterializeSingleChange(eventGenerator, change, eventCache) {
  if (change.type === "value" || change.type === "child_removed") {
    return change;
  } else {
    change.prevName = eventCache.getPredecessorChildName(change.childName, change.snapshotNode, eventGenerator.index_);
    return change;
  }
}
function eventGeneratorCompareChanges(eventGenerator, a, b) {
  if (a.childName == null || b.childName == null) {
    throw assertionError("Should only compare child_ events.");
  }
  const aWrapped = new NamedNode(a.childName, a.snapshotNode);
  const bWrapped = new NamedNode(b.childName, b.snapshotNode);
  return eventGenerator.index_.compare(aWrapped, bWrapped);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function newViewCache(eventCache, serverCache) {
  return { eventCache, serverCache };
}
function viewCacheUpdateEventSnap(viewCache, eventSnap, complete, filtered) {
  return newViewCache(new CacheNode(eventSnap, complete, filtered), viewCache.serverCache);
}
function viewCacheUpdateServerSnap(viewCache, serverSnap, complete, filtered) {
  return newViewCache(viewCache.eventCache, new CacheNode(serverSnap, complete, filtered));
}
function viewCacheGetCompleteEventSnap(viewCache) {
  return viewCache.eventCache.isFullyInitialized() ? viewCache.eventCache.getNode() : null;
}
function viewCacheGetCompleteServerSnap(viewCache) {
  return viewCache.serverCache.isFullyInitialized() ? viewCache.serverCache.getNode() : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let emptyChildrenSingleton;
const EmptyChildren = () => {
  if (!emptyChildrenSingleton) {
    emptyChildrenSingleton = new SortedMap(stringCompare);
  }
  return emptyChildrenSingleton;
};
class ImmutableTree {
  constructor(value, children = EmptyChildren()) {
    this.value = value;
    this.children = children;
  }
  static fromObject(obj) {
    let tree = new ImmutableTree(null);
    each(obj, (childPath, childSnap) => {
      tree = tree.set(new Path(childPath), childSnap);
    });
    return tree;
  }
  isEmpty() {
    return this.value === null && this.children.isEmpty();
  }
  findRootMostMatchingPathAndValue(relativePath, predicate) {
    if (this.value != null && predicate(this.value)) {
      return { path: newEmptyPath(), value: this.value };
    } else {
      if (pathIsEmpty(relativePath)) {
        return null;
      } else {
        const front = pathGetFront(relativePath);
        const child2 = this.children.get(front);
        if (child2 !== null) {
          const childExistingPathAndValue = child2.findRootMostMatchingPathAndValue(pathPopFront(relativePath), predicate);
          if (childExistingPathAndValue != null) {
            const fullPath = pathChild(new Path(front), childExistingPathAndValue.path);
            return { path: fullPath, value: childExistingPathAndValue.value };
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
    }
  }
  findRootMostValueAndPath(relativePath) {
    return this.findRootMostMatchingPathAndValue(relativePath, () => true);
  }
  subtree(relativePath) {
    if (pathIsEmpty(relativePath)) {
      return this;
    } else {
      const front = pathGetFront(relativePath);
      const childTree = this.children.get(front);
      if (childTree !== null) {
        return childTree.subtree(pathPopFront(relativePath));
      } else {
        return new ImmutableTree(null);
      }
    }
  }
  set(relativePath, toSet) {
    if (pathIsEmpty(relativePath)) {
      return new ImmutableTree(toSet, this.children);
    } else {
      const front = pathGetFront(relativePath);
      const child2 = this.children.get(front) || new ImmutableTree(null);
      const newChild = child2.set(pathPopFront(relativePath), toSet);
      const newChildren = this.children.insert(front, newChild);
      return new ImmutableTree(this.value, newChildren);
    }
  }
  remove(relativePath) {
    if (pathIsEmpty(relativePath)) {
      if (this.children.isEmpty()) {
        return new ImmutableTree(null);
      } else {
        return new ImmutableTree(null, this.children);
      }
    } else {
      const front = pathGetFront(relativePath);
      const child2 = this.children.get(front);
      if (child2) {
        const newChild = child2.remove(pathPopFront(relativePath));
        let newChildren;
        if (newChild.isEmpty()) {
          newChildren = this.children.remove(front);
        } else {
          newChildren = this.children.insert(front, newChild);
        }
        if (this.value === null && newChildren.isEmpty()) {
          return new ImmutableTree(null);
        } else {
          return new ImmutableTree(this.value, newChildren);
        }
      } else {
        return this;
      }
    }
  }
  get(relativePath) {
    if (pathIsEmpty(relativePath)) {
      return this.value;
    } else {
      const front = pathGetFront(relativePath);
      const child2 = this.children.get(front);
      if (child2) {
        return child2.get(pathPopFront(relativePath));
      } else {
        return null;
      }
    }
  }
  setTree(relativePath, newTree) {
    if (pathIsEmpty(relativePath)) {
      return newTree;
    } else {
      const front = pathGetFront(relativePath);
      const child2 = this.children.get(front) || new ImmutableTree(null);
      const newChild = child2.setTree(pathPopFront(relativePath), newTree);
      let newChildren;
      if (newChild.isEmpty()) {
        newChildren = this.children.remove(front);
      } else {
        newChildren = this.children.insert(front, newChild);
      }
      return new ImmutableTree(this.value, newChildren);
    }
  }
  fold(fn) {
    return this.fold_(newEmptyPath(), fn);
  }
  fold_(pathSoFar, fn) {
    const accum = {};
    this.children.inorderTraversal((childKey, childTree) => {
      accum[childKey] = childTree.fold_(pathChild(pathSoFar, childKey), fn);
    });
    return fn(pathSoFar, this.value, accum);
  }
  findOnPath(path, f) {
    return this.findOnPath_(path, newEmptyPath(), f);
  }
  findOnPath_(pathToFollow, pathSoFar, f) {
    const result = this.value ? f(pathSoFar, this.value) : false;
    if (result) {
      return result;
    } else {
      if (pathIsEmpty(pathToFollow)) {
        return null;
      } else {
        const front = pathGetFront(pathToFollow);
        const nextChild = this.children.get(front);
        if (nextChild) {
          return nextChild.findOnPath_(pathPopFront(pathToFollow), pathChild(pathSoFar, front), f);
        } else {
          return null;
        }
      }
    }
  }
  foreachOnPath(path, f) {
    return this.foreachOnPath_(path, newEmptyPath(), f);
  }
  foreachOnPath_(pathToFollow, currentRelativePath, f) {
    if (pathIsEmpty(pathToFollow)) {
      return this;
    } else {
      if (this.value) {
        f(currentRelativePath, this.value);
      }
      const front = pathGetFront(pathToFollow);
      const nextChild = this.children.get(front);
      if (nextChild) {
        return nextChild.foreachOnPath_(pathPopFront(pathToFollow), pathChild(currentRelativePath, front), f);
      } else {
        return new ImmutableTree(null);
      }
    }
  }
  foreach(f) {
    this.foreach_(newEmptyPath(), f);
  }
  foreach_(currentRelativePath, f) {
    this.children.inorderTraversal((childName, childTree) => {
      childTree.foreach_(pathChild(currentRelativePath, childName), f);
    });
    if (this.value) {
      f(currentRelativePath, this.value);
    }
  }
  foreachChild(f) {
    this.children.inorderTraversal((childName, childTree) => {
      if (childTree.value) {
        f(childName, childTree.value);
      }
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class CompoundWrite {
  constructor(writeTree_) {
    this.writeTree_ = writeTree_;
  }
  static empty() {
    return new CompoundWrite(new ImmutableTree(null));
  }
}
function compoundWriteAddWrite(compoundWrite, path, node) {
  if (pathIsEmpty(path)) {
    return new CompoundWrite(new ImmutableTree(node));
  } else {
    const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
    if (rootmost != null) {
      const rootMostPath = rootmost.path;
      let value = rootmost.value;
      const relativePath = newRelativePath(rootMostPath, path);
      value = value.updateChild(relativePath, node);
      return new CompoundWrite(compoundWrite.writeTree_.set(rootMostPath, value));
    } else {
      const subtree = new ImmutableTree(node);
      const newWriteTree2 = compoundWrite.writeTree_.setTree(path, subtree);
      return new CompoundWrite(newWriteTree2);
    }
  }
}
function compoundWriteAddWrites(compoundWrite, path, updates) {
  let newWrite = compoundWrite;
  each(updates, (childKey, node) => {
    newWrite = compoundWriteAddWrite(newWrite, pathChild(path, childKey), node);
  });
  return newWrite;
}
function compoundWriteRemoveWrite(compoundWrite, path) {
  if (pathIsEmpty(path)) {
    return CompoundWrite.empty();
  } else {
    const newWriteTree2 = compoundWrite.writeTree_.setTree(path, new ImmutableTree(null));
    return new CompoundWrite(newWriteTree2);
  }
}
function compoundWriteHasCompleteWrite(compoundWrite, path) {
  return compoundWriteGetCompleteNode(compoundWrite, path) != null;
}
function compoundWriteGetCompleteNode(compoundWrite, path) {
  const rootmost = compoundWrite.writeTree_.findRootMostValueAndPath(path);
  if (rootmost != null) {
    return compoundWrite.writeTree_.get(rootmost.path).getChild(newRelativePath(rootmost.path, path));
  } else {
    return null;
  }
}
function compoundWriteGetCompleteChildren(compoundWrite) {
  const children = [];
  const node = compoundWrite.writeTree_.value;
  if (node != null) {
    if (!node.isLeafNode()) {
      node.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
        children.push(new NamedNode(childName, childNode));
      });
    }
  } else {
    compoundWrite.writeTree_.children.inorderTraversal((childName, childTree) => {
      if (childTree.value != null) {
        children.push(new NamedNode(childName, childTree.value));
      }
    });
  }
  return children;
}
function compoundWriteChildCompoundWrite(compoundWrite, path) {
  if (pathIsEmpty(path)) {
    return compoundWrite;
  } else {
    const shadowingNode = compoundWriteGetCompleteNode(compoundWrite, path);
    if (shadowingNode != null) {
      return new CompoundWrite(new ImmutableTree(shadowingNode));
    } else {
      return new CompoundWrite(compoundWrite.writeTree_.subtree(path));
    }
  }
}
function compoundWriteIsEmpty(compoundWrite) {
  return compoundWrite.writeTree_.isEmpty();
}
function compoundWriteApply(compoundWrite, node) {
  return applySubtreeWrite(newEmptyPath(), compoundWrite.writeTree_, node);
}
function applySubtreeWrite(relativePath, writeTree, node) {
  if (writeTree.value != null) {
    return node.updateChild(relativePath, writeTree.value);
  } else {
    let priorityWrite = null;
    writeTree.children.inorderTraversal((childKey, childTree) => {
      if (childKey === ".priority") {
        assert(childTree.value !== null, "Priority writes must always be leaf nodes");
        priorityWrite = childTree.value;
      } else {
        node = applySubtreeWrite(pathChild(relativePath, childKey), childTree, node);
      }
    });
    if (!node.getChild(relativePath).isEmpty() && priorityWrite !== null) {
      node = node.updateChild(pathChild(relativePath, ".priority"), priorityWrite);
    }
    return node;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function writeTreeChildWrites(writeTree, path) {
  return newWriteTreeRef(path, writeTree);
}
function writeTreeAddOverwrite(writeTree, path, snap, writeId, visible) {
  assert(writeId > writeTree.lastWriteId, "Stacking an older write on top of newer ones");
  if (visible === void 0) {
    visible = true;
  }
  writeTree.allWrites.push({
    path,
    snap,
    writeId,
    visible
  });
  if (visible) {
    writeTree.visibleWrites = compoundWriteAddWrite(writeTree.visibleWrites, path, snap);
  }
  writeTree.lastWriteId = writeId;
}
function writeTreeAddMerge(writeTree, path, changedChildren, writeId) {
  assert(writeId > writeTree.lastWriteId, "Stacking an older merge on top of newer ones");
  writeTree.allWrites.push({
    path,
    children: changedChildren,
    writeId,
    visible: true
  });
  writeTree.visibleWrites = compoundWriteAddWrites(writeTree.visibleWrites, path, changedChildren);
  writeTree.lastWriteId = writeId;
}
function writeTreeGetWrite(writeTree, writeId) {
  for (let i = 0; i < writeTree.allWrites.length; i++) {
    const record = writeTree.allWrites[i];
    if (record.writeId === writeId) {
      return record;
    }
  }
  return null;
}
function writeTreeRemoveWrite(writeTree, writeId) {
  const idx = writeTree.allWrites.findIndex((s) => {
    return s.writeId === writeId;
  });
  assert(idx >= 0, "removeWrite called with nonexistent writeId.");
  const writeToRemove = writeTree.allWrites[idx];
  writeTree.allWrites.splice(idx, 1);
  let removedWriteWasVisible = writeToRemove.visible;
  let removedWriteOverlapsWithOtherWrites = false;
  let i = writeTree.allWrites.length - 1;
  while (removedWriteWasVisible && i >= 0) {
    const currentWrite = writeTree.allWrites[i];
    if (currentWrite.visible) {
      if (i >= idx && writeTreeRecordContainsPath_(currentWrite, writeToRemove.path)) {
        removedWriteWasVisible = false;
      } else if (pathContains(writeToRemove.path, currentWrite.path)) {
        removedWriteOverlapsWithOtherWrites = true;
      }
    }
    i--;
  }
  if (!removedWriteWasVisible) {
    return false;
  } else if (removedWriteOverlapsWithOtherWrites) {
    writeTreeResetTree_(writeTree);
    return true;
  } else {
    if (writeToRemove.snap) {
      writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, writeToRemove.path);
    } else {
      const children = writeToRemove.children;
      each(children, (childName) => {
        writeTree.visibleWrites = compoundWriteRemoveWrite(writeTree.visibleWrites, pathChild(writeToRemove.path, childName));
      });
    }
    return true;
  }
}
function writeTreeRecordContainsPath_(writeRecord, path) {
  if (writeRecord.snap) {
    return pathContains(writeRecord.path, path);
  } else {
    for (const childName in writeRecord.children) {
      if (writeRecord.children.hasOwnProperty(childName) && pathContains(pathChild(writeRecord.path, childName), path)) {
        return true;
      }
    }
    return false;
  }
}
function writeTreeResetTree_(writeTree) {
  writeTree.visibleWrites = writeTreeLayerTree_(writeTree.allWrites, writeTreeDefaultFilter_, newEmptyPath());
  if (writeTree.allWrites.length > 0) {
    writeTree.lastWriteId = writeTree.allWrites[writeTree.allWrites.length - 1].writeId;
  } else {
    writeTree.lastWriteId = -1;
  }
}
function writeTreeDefaultFilter_(write) {
  return write.visible;
}
function writeTreeLayerTree_(writes, filter, treeRoot) {
  let compoundWrite = CompoundWrite.empty();
  for (let i = 0; i < writes.length; ++i) {
    const write = writes[i];
    if (filter(write)) {
      const writePath = write.path;
      let relativePath;
      if (write.snap) {
        if (pathContains(treeRoot, writePath)) {
          relativePath = newRelativePath(treeRoot, writePath);
          compoundWrite = compoundWriteAddWrite(compoundWrite, relativePath, write.snap);
        } else if (pathContains(writePath, treeRoot)) {
          relativePath = newRelativePath(writePath, treeRoot);
          compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), write.snap.getChild(relativePath));
        } else
          ;
      } else if (write.children) {
        if (pathContains(treeRoot, writePath)) {
          relativePath = newRelativePath(treeRoot, writePath);
          compoundWrite = compoundWriteAddWrites(compoundWrite, relativePath, write.children);
        } else if (pathContains(writePath, treeRoot)) {
          relativePath = newRelativePath(writePath, treeRoot);
          if (pathIsEmpty(relativePath)) {
            compoundWrite = compoundWriteAddWrites(compoundWrite, newEmptyPath(), write.children);
          } else {
            const child2 = safeGet(write.children, pathGetFront(relativePath));
            if (child2) {
              const deepNode = child2.getChild(pathPopFront(relativePath));
              compoundWrite = compoundWriteAddWrite(compoundWrite, newEmptyPath(), deepNode);
            }
          }
        } else
          ;
      } else {
        throw assertionError("WriteRecord should have .snap or .children");
      }
    }
  }
  return compoundWrite;
}
function writeTreeCalcCompleteEventCache(writeTree, treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
  if (!writeIdsToExclude && !includeHiddenWrites) {
    const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
    if (shadowingNode != null) {
      return shadowingNode;
    } else {
      const subMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
      if (compoundWriteIsEmpty(subMerge)) {
        return completeServerCache;
      } else if (completeServerCache == null && !compoundWriteHasCompleteWrite(subMerge, newEmptyPath())) {
        return null;
      } else {
        const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
        return compoundWriteApply(subMerge, layeredCache);
      }
    }
  } else {
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    if (!includeHiddenWrites && compoundWriteIsEmpty(merge)) {
      return completeServerCache;
    } else {
      if (!includeHiddenWrites && completeServerCache == null && !compoundWriteHasCompleteWrite(merge, newEmptyPath())) {
        return null;
      } else {
        const filter = function(write) {
          return (write.visible || includeHiddenWrites) && (!writeIdsToExclude || !~writeIdsToExclude.indexOf(write.writeId)) && (pathContains(write.path, treePath) || pathContains(treePath, write.path));
        };
        const mergeAtPath = writeTreeLayerTree_(writeTree.allWrites, filter, treePath);
        const layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
        return compoundWriteApply(mergeAtPath, layeredCache);
      }
    }
  }
}
function writeTreeCalcCompleteEventChildren(writeTree, treePath, completeServerChildren) {
  let completeChildren = ChildrenNode.EMPTY_NODE;
  const topLevelSet = compoundWriteGetCompleteNode(writeTree.visibleWrites, treePath);
  if (topLevelSet) {
    if (!topLevelSet.isLeafNode()) {
      topLevelSet.forEachChild(PRIORITY_INDEX, (childName, childSnap) => {
        completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
      });
    }
    return completeChildren;
  } else if (completeServerChildren) {
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    completeServerChildren.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
      const node = compoundWriteApply(compoundWriteChildCompoundWrite(merge, new Path(childName)), childNode);
      completeChildren = completeChildren.updateImmediateChild(childName, node);
    });
    compoundWriteGetCompleteChildren(merge).forEach((namedNode) => {
      completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
    });
    return completeChildren;
  } else {
    const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
    compoundWriteGetCompleteChildren(merge).forEach((namedNode) => {
      completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
    });
    return completeChildren;
  }
}
function writeTreeCalcEventCacheAfterServerOverwrite(writeTree, treePath, childPath, existingEventSnap, existingServerSnap) {
  assert(existingEventSnap || existingServerSnap, "Either existingEventSnap or existingServerSnap must exist");
  const path = pathChild(treePath, childPath);
  if (compoundWriteHasCompleteWrite(writeTree.visibleWrites, path)) {
    return null;
  } else {
    const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
    if (compoundWriteIsEmpty(childMerge)) {
      return existingServerSnap.getChild(childPath);
    } else {
      return compoundWriteApply(childMerge, existingServerSnap.getChild(childPath));
    }
  }
}
function writeTreeCalcCompleteChild(writeTree, treePath, childKey, existingServerSnap) {
  const path = pathChild(treePath, childKey);
  const shadowingNode = compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
  if (shadowingNode != null) {
    return shadowingNode;
  } else {
    if (existingServerSnap.isCompleteForChild(childKey)) {
      const childMerge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, path);
      return compoundWriteApply(childMerge, existingServerSnap.getNode().getImmediateChild(childKey));
    } else {
      return null;
    }
  }
}
function writeTreeShadowingWrite(writeTree, path) {
  return compoundWriteGetCompleteNode(writeTree.visibleWrites, path);
}
function writeTreeCalcIndexedSlice(writeTree, treePath, completeServerData, startPost, count, reverse, index) {
  let toIterate;
  const merge = compoundWriteChildCompoundWrite(writeTree.visibleWrites, treePath);
  const shadowingNode = compoundWriteGetCompleteNode(merge, newEmptyPath());
  if (shadowingNode != null) {
    toIterate = shadowingNode;
  } else if (completeServerData != null) {
    toIterate = compoundWriteApply(merge, completeServerData);
  } else {
    return [];
  }
  toIterate = toIterate.withIndex(index);
  if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
    const nodes = [];
    const cmp = index.getCompare();
    const iter = reverse ? toIterate.getReverseIteratorFrom(startPost, index) : toIterate.getIteratorFrom(startPost, index);
    let next = iter.getNext();
    while (next && nodes.length < count) {
      if (cmp(next, startPost) !== 0) {
        nodes.push(next);
      }
      next = iter.getNext();
    }
    return nodes;
  } else {
    return [];
  }
}
function newWriteTree() {
  return {
    visibleWrites: CompoundWrite.empty(),
    allWrites: [],
    lastWriteId: -1
  };
}
function writeTreeRefCalcCompleteEventCache(writeTreeRef, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
  return writeTreeCalcCompleteEventCache(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites);
}
function writeTreeRefCalcCompleteEventChildren(writeTreeRef, completeServerChildren) {
  return writeTreeCalcCompleteEventChildren(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerChildren);
}
function writeTreeRefCalcEventCacheAfterServerOverwrite(writeTreeRef, path, existingEventSnap, existingServerSnap) {
  return writeTreeCalcEventCacheAfterServerOverwrite(writeTreeRef.writeTree, writeTreeRef.treePath, path, existingEventSnap, existingServerSnap);
}
function writeTreeRefShadowingWrite(writeTreeRef, path) {
  return writeTreeShadowingWrite(writeTreeRef.writeTree, pathChild(writeTreeRef.treePath, path));
}
function writeTreeRefCalcIndexedSlice(writeTreeRef, completeServerData, startPost, count, reverse, index) {
  return writeTreeCalcIndexedSlice(writeTreeRef.writeTree, writeTreeRef.treePath, completeServerData, startPost, count, reverse, index);
}
function writeTreeRefCalcCompleteChild(writeTreeRef, childKey, existingServerCache) {
  return writeTreeCalcCompleteChild(writeTreeRef.writeTree, writeTreeRef.treePath, childKey, existingServerCache);
}
function writeTreeRefChild(writeTreeRef, childName) {
  return newWriteTreeRef(pathChild(writeTreeRef.treePath, childName), writeTreeRef.writeTree);
}
function newWriteTreeRef(path, writeTree) {
  return {
    treePath: path,
    writeTree
  };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ChildChangeAccumulator {
  constructor() {
    this.changeMap = new Map();
  }
  trackChildChange(change) {
    const type = change.type;
    const childKey = change.childName;
    assert(type === "child_added" || type === "child_changed" || type === "child_removed", "Only child changes supported for tracking");
    assert(childKey !== ".priority", "Only non-priority child changes can be tracked.");
    const oldChange = this.changeMap.get(childKey);
    if (oldChange) {
      const oldType = oldChange.type;
      if (type === "child_added" && oldType === "child_removed") {
        this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.snapshotNode));
      } else if (type === "child_removed" && oldType === "child_added") {
        this.changeMap.delete(childKey);
      } else if (type === "child_removed" && oldType === "child_changed") {
        this.changeMap.set(childKey, changeChildRemoved(childKey, oldChange.oldSnap));
      } else if (type === "child_changed" && oldType === "child_added") {
        this.changeMap.set(childKey, changeChildAdded(childKey, change.snapshotNode));
      } else if (type === "child_changed" && oldType === "child_changed") {
        this.changeMap.set(childKey, changeChildChanged(childKey, change.snapshotNode, oldChange.oldSnap));
      } else {
        throw assertionError("Illegal combination of changes: " + change + " occurred after " + oldChange);
      }
    } else {
      this.changeMap.set(childKey, change);
    }
  }
  getChanges() {
    return Array.from(this.changeMap.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class NoCompleteChildSource_ {
  getCompleteChild(childKey) {
    return null;
  }
  getChildAfterChild(index, child2, reverse) {
    return null;
  }
}
const NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
class WriteTreeCompleteChildSource {
  constructor(writes_, viewCache_, optCompleteServerCache_ = null) {
    this.writes_ = writes_;
    this.viewCache_ = viewCache_;
    this.optCompleteServerCache_ = optCompleteServerCache_;
  }
  getCompleteChild(childKey) {
    const node = this.viewCache_.eventCache;
    if (node.isCompleteForChild(childKey)) {
      return node.getNode().getImmediateChild(childKey);
    } else {
      const serverNode = this.optCompleteServerCache_ != null ? new CacheNode(this.optCompleteServerCache_, true, false) : this.viewCache_.serverCache;
      return writeTreeRefCalcCompleteChild(this.writes_, childKey, serverNode);
    }
  }
  getChildAfterChild(index, child2, reverse) {
    const completeServerData = this.optCompleteServerCache_ != null ? this.optCompleteServerCache_ : viewCacheGetCompleteServerSnap(this.viewCache_);
    const nodes = writeTreeRefCalcIndexedSlice(this.writes_, completeServerData, child2, 1, reverse, index);
    if (nodes.length === 0) {
      return null;
    } else {
      return nodes[0];
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function newViewProcessor(filter) {
  return { filter };
}
function viewProcessorAssertIndexed(viewProcessor, viewCache) {
  assert(viewCache.eventCache.getNode().isIndexed(viewProcessor.filter.getIndex()), "Event snap not indexed");
  assert(viewCache.serverCache.getNode().isIndexed(viewProcessor.filter.getIndex()), "Server snap not indexed");
}
function viewProcessorApplyOperation(viewProcessor, oldViewCache, operation, writesCache, completeCache) {
  const accumulator = new ChildChangeAccumulator();
  let newViewCache2, filterServerNode;
  if (operation.type === OperationType.OVERWRITE) {
    const overwrite = operation;
    if (overwrite.source.fromUser) {
      newViewCache2 = viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
    } else {
      assert(overwrite.source.fromServer, "Unknown source.");
      filterServerNode = overwrite.source.tagged || oldViewCache.serverCache.isFiltered() && !pathIsEmpty(overwrite.path);
      newViewCache2 = viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
    }
  } else if (operation.type === OperationType.MERGE) {
    const merge = operation;
    if (merge.source.fromUser) {
      newViewCache2 = viewProcessorApplyUserMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
    } else {
      assert(merge.source.fromServer, "Unknown source.");
      filterServerNode = merge.source.tagged || oldViewCache.serverCache.isFiltered();
      newViewCache2 = viewProcessorApplyServerMerge(viewProcessor, oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
    }
  } else if (operation.type === OperationType.ACK_USER_WRITE) {
    const ackUserWrite = operation;
    if (!ackUserWrite.revert) {
      newViewCache2 = viewProcessorAckUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
    } else {
      newViewCache2 = viewProcessorRevertUserWrite(viewProcessor, oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
    }
  } else if (operation.type === OperationType.LISTEN_COMPLETE) {
    newViewCache2 = viewProcessorListenComplete(viewProcessor, oldViewCache, operation.path, writesCache, accumulator);
  } else {
    throw assertionError("Unknown operation type: " + operation.type);
  }
  const changes = accumulator.getChanges();
  viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache2, changes);
  return { viewCache: newViewCache2, changes };
}
function viewProcessorMaybeAddValueEvent(oldViewCache, newViewCache2, accumulator) {
  const eventSnap = newViewCache2.eventCache;
  if (eventSnap.isFullyInitialized()) {
    const isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
    const oldCompleteSnap = viewCacheGetCompleteEventSnap(oldViewCache);
    if (accumulator.length > 0 || !oldViewCache.eventCache.isFullyInitialized() || isLeafOrEmpty && !eventSnap.getNode().equals(oldCompleteSnap) || !eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())) {
      accumulator.push(changeValue(viewCacheGetCompleteEventSnap(newViewCache2)));
    }
  }
}
function viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, viewCache, changePath, writesCache, source, accumulator) {
  const oldEventSnap = viewCache.eventCache;
  if (writeTreeRefShadowingWrite(writesCache, changePath) != null) {
    return viewCache;
  } else {
    let newEventCache, serverNode;
    if (pathIsEmpty(changePath)) {
      assert(viewCache.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data");
      if (viewCache.serverCache.isFiltered()) {
        const serverCache = viewCacheGetCompleteServerSnap(viewCache);
        const completeChildren = serverCache instanceof ChildrenNode ? serverCache : ChildrenNode.EMPTY_NODE;
        const completeEventChildren = writeTreeRefCalcCompleteEventChildren(writesCache, completeChildren);
        newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeEventChildren, accumulator);
      } else {
        const completeNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
        newEventCache = viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(), completeNode, accumulator);
      }
    } else {
      const childKey = pathGetFront(changePath);
      if (childKey === ".priority") {
        assert(pathGetLength(changePath) === 1, "Can't have a priority with additional path components");
        const oldEventNode = oldEventSnap.getNode();
        serverNode = viewCache.serverCache.getNode();
        const updatedPriority = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventNode, serverNode);
        if (updatedPriority != null) {
          newEventCache = viewProcessor.filter.updatePriority(oldEventNode, updatedPriority);
        } else {
          newEventCache = oldEventSnap.getNode();
        }
      } else {
        const childChangePath = pathPopFront(changePath);
        let newEventChild;
        if (oldEventSnap.isCompleteForChild(childKey)) {
          serverNode = viewCache.serverCache.getNode();
          const eventChildUpdate = writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache, changePath, oldEventSnap.getNode(), serverNode);
          if (eventChildUpdate != null) {
            newEventChild = oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath, eventChildUpdate);
          } else {
            newEventChild = oldEventSnap.getNode().getImmediateChild(childKey);
          }
        } else {
          newEventChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
        }
        if (newEventChild != null) {
          newEventCache = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator);
        } else {
          newEventCache = oldEventSnap.getNode();
        }
      }
    }
    return viewCacheUpdateEventSnap(viewCache, newEventCache, oldEventSnap.isFullyInitialized() || pathIsEmpty(changePath), viewProcessor.filter.filtersNodes());
  }
}
function viewProcessorApplyServerOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
  const oldServerSnap = oldViewCache.serverCache;
  let newServerCache;
  const serverFilter = filterServerNode ? viewProcessor.filter : viewProcessor.filter.getIndexedFilter();
  if (pathIsEmpty(changePath)) {
    newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
  } else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
    const newServerNode = oldServerSnap.getNode().updateChild(changePath, changedSnap);
    newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
  } else {
    const childKey = pathGetFront(changePath);
    if (!oldServerSnap.isCompleteForPath(changePath) && pathGetLength(changePath) > 1) {
      return oldViewCache;
    }
    const childChangePath = pathPopFront(changePath);
    const childNode = oldServerSnap.getNode().getImmediateChild(childKey);
    const newChildNode = childNode.updateChild(childChangePath, changedSnap);
    if (childKey === ".priority") {
      newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
    } else {
      newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, NO_COMPLETE_CHILD_SOURCE, null);
    }
  }
  const newViewCache2 = viewCacheUpdateServerSnap(oldViewCache, newServerCache, oldServerSnap.isFullyInitialized() || pathIsEmpty(changePath), serverFilter.filtersNodes());
  const source = new WriteTreeCompleteChildSource(writesCache, newViewCache2, completeCache);
  return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache2, changePath, writesCache, source, accumulator);
}
function viewProcessorApplyUserOverwrite(viewProcessor, oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
  const oldEventSnap = oldViewCache.eventCache;
  let newViewCache2, newEventCache;
  const source = new WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);
  if (pathIsEmpty(changePath)) {
    newEventCache = viewProcessor.filter.updateFullNode(oldViewCache.eventCache.getNode(), changedSnap, accumulator);
    newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, true, viewProcessor.filter.filtersNodes());
  } else {
    const childKey = pathGetFront(changePath);
    if (childKey === ".priority") {
      newEventCache = viewProcessor.filter.updatePriority(oldViewCache.eventCache.getNode(), changedSnap);
      newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
    } else {
      const childChangePath = pathPopFront(changePath);
      const oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
      let newChild;
      if (pathIsEmpty(childChangePath)) {
        newChild = changedSnap;
      } else {
        const childNode = source.getCompleteChild(childKey);
        if (childNode != null) {
          if (pathGetBack(childChangePath) === ".priority" && childNode.getChild(pathParent(childChangePath)).isEmpty()) {
            newChild = childNode;
          } else {
            newChild = childNode.updateChild(childChangePath, changedSnap);
          }
        } else {
          newChild = ChildrenNode.EMPTY_NODE;
        }
      }
      if (!oldChild.equals(newChild)) {
        const newEventSnap = viewProcessor.filter.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
        newViewCache2 = viewCacheUpdateEventSnap(oldViewCache, newEventSnap, oldEventSnap.isFullyInitialized(), viewProcessor.filter.filtersNodes());
      } else {
        newViewCache2 = oldViewCache;
      }
    }
  }
  return newViewCache2;
}
function viewProcessorCacheHasChild(viewCache, childKey) {
  return viewCache.eventCache.isCompleteForChild(childKey);
}
function viewProcessorApplyUserMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
  let curViewCache = viewCache;
  changedChildren.foreach((relativePath, childNode) => {
    const writePath = pathChild(path, relativePath);
    if (viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) {
      curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    }
  });
  changedChildren.foreach((relativePath, childNode) => {
    const writePath = pathChild(path, relativePath);
    if (!viewProcessorCacheHasChild(viewCache, pathGetFront(writePath))) {
      curViewCache = viewProcessorApplyUserOverwrite(viewProcessor, curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
    }
  });
  return curViewCache;
}
function viewProcessorApplyMerge(viewProcessor, node, merge) {
  merge.foreach((relativePath, childNode) => {
    node = node.updateChild(relativePath, childNode);
  });
  return node;
}
function viewProcessorApplyServerMerge(viewProcessor, viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
  if (viewCache.serverCache.getNode().isEmpty() && !viewCache.serverCache.isFullyInitialized()) {
    return viewCache;
  }
  let curViewCache = viewCache;
  let viewMergeTree;
  if (pathIsEmpty(path)) {
    viewMergeTree = changedChildren;
  } else {
    viewMergeTree = new ImmutableTree(null).setTree(path, changedChildren);
  }
  const serverNode = viewCache.serverCache.getNode();
  viewMergeTree.children.inorderTraversal((childKey, childTree) => {
    if (serverNode.hasChild(childKey)) {
      const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
      const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childTree);
      curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
    }
  });
  viewMergeTree.children.inorderTraversal((childKey, childMergeTree) => {
    const isUnknownDeepMerge = !viewCache.serverCache.isCompleteForChild(childKey) && childMergeTree.value === void 0;
    if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
      const serverChild = viewCache.serverCache.getNode().getImmediateChild(childKey);
      const newChild = viewProcessorApplyMerge(viewProcessor, serverChild, childMergeTree);
      curViewCache = viewProcessorApplyServerOverwrite(viewProcessor, curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
    }
  });
  return curViewCache;
}
function viewProcessorAckUserWrite(viewProcessor, viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
  if (writeTreeRefShadowingWrite(writesCache, ackPath) != null) {
    return viewCache;
  }
  const filterServerNode = viewCache.serverCache.isFiltered();
  const serverCache = viewCache.serverCache;
  if (affectedTree.value != null) {
    if (pathIsEmpty(ackPath) && serverCache.isFullyInitialized() || serverCache.isCompleteForPath(ackPath)) {
      return viewProcessorApplyServerOverwrite(viewProcessor, viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
    } else if (pathIsEmpty(ackPath)) {
      let changedChildren = new ImmutableTree(null);
      serverCache.getNode().forEachChild(KEY_INDEX, (name2, node) => {
        changedChildren = changedChildren.set(new Path(name2), node);
      });
      return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
    } else {
      return viewCache;
    }
  } else {
    let changedChildren = new ImmutableTree(null);
    affectedTree.foreach((mergePath, value) => {
      const serverCachePath = pathChild(ackPath, mergePath);
      if (serverCache.isCompleteForPath(serverCachePath)) {
        changedChildren = changedChildren.set(mergePath, serverCache.getNode().getChild(serverCachePath));
      }
    });
    return viewProcessorApplyServerMerge(viewProcessor, viewCache, ackPath, changedChildren, writesCache, completeCache, filterServerNode, accumulator);
  }
}
function viewProcessorListenComplete(viewProcessor, viewCache, path, writesCache, accumulator) {
  const oldServerNode = viewCache.serverCache;
  const newViewCache2 = viewCacheUpdateServerSnap(viewCache, oldServerNode.getNode(), oldServerNode.isFullyInitialized() || pathIsEmpty(path), oldServerNode.isFiltered());
  return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor, newViewCache2, path, writesCache, NO_COMPLETE_CHILD_SOURCE, accumulator);
}
function viewProcessorRevertUserWrite(viewProcessor, viewCache, path, writesCache, completeServerCache, accumulator) {
  let complete;
  if (writeTreeRefShadowingWrite(writesCache, path) != null) {
    return viewCache;
  } else {
    const source = new WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
    const oldEventCache = viewCache.eventCache.getNode();
    let newEventCache;
    if (pathIsEmpty(path) || pathGetFront(path) === ".priority") {
      let newNode;
      if (viewCache.serverCache.isFullyInitialized()) {
        newNode = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
      } else {
        const serverChildren = viewCache.serverCache.getNode();
        assert(serverChildren instanceof ChildrenNode, "serverChildren would be complete if leaf node");
        newNode = writeTreeRefCalcCompleteEventChildren(writesCache, serverChildren);
      }
      newNode = newNode;
      newEventCache = viewProcessor.filter.updateFullNode(oldEventCache, newNode, accumulator);
    } else {
      const childKey = pathGetFront(path);
      let newChild = writeTreeRefCalcCompleteChild(writesCache, childKey, viewCache.serverCache);
      if (newChild == null && viewCache.serverCache.isCompleteForChild(childKey)) {
        newChild = oldEventCache.getImmediateChild(childKey);
      }
      if (newChild != null) {
        newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, newChild, pathPopFront(path), source, accumulator);
      } else if (viewCache.eventCache.getNode().hasChild(childKey)) {
        newEventCache = viewProcessor.filter.updateChild(oldEventCache, childKey, ChildrenNode.EMPTY_NODE, pathPopFront(path), source, accumulator);
      } else {
        newEventCache = oldEventCache;
      }
      if (newEventCache.isEmpty() && viewCache.serverCache.isFullyInitialized()) {
        complete = writeTreeRefCalcCompleteEventCache(writesCache, viewCacheGetCompleteServerSnap(viewCache));
        if (complete.isLeafNode()) {
          newEventCache = viewProcessor.filter.updateFullNode(newEventCache, complete, accumulator);
        }
      }
    }
    complete = viewCache.serverCache.isFullyInitialized() || writeTreeRefShadowingWrite(writesCache, newEmptyPath()) != null;
    return viewCacheUpdateEventSnap(viewCache, newEventCache, complete, viewProcessor.filter.filtersNodes());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class View {
  constructor(query_, initialViewCache) {
    this.query_ = query_;
    this.eventRegistrations_ = [];
    const params = this.query_._queryParams;
    const indexFilter = new IndexedFilter(params.getIndex());
    const filter = queryParamsGetNodeFilter(params);
    this.processor_ = newViewProcessor(filter);
    const initialServerCache = initialViewCache.serverCache;
    const initialEventCache = initialViewCache.eventCache;
    const serverSnap = indexFilter.updateFullNode(ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
    const eventSnap = filter.updateFullNode(ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
    const newServerCache = new CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
    const newEventCache = new CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
    this.viewCache_ = newViewCache(newEventCache, newServerCache);
    this.eventGenerator_ = new EventGenerator(this.query_);
  }
  get query() {
    return this.query_;
  }
}
function viewGetServerCache(view) {
  return view.viewCache_.serverCache.getNode();
}
function viewGetCompleteNode(view) {
  return viewCacheGetCompleteEventSnap(view.viewCache_);
}
function viewGetCompleteServerCache(view, path) {
  const cache = viewCacheGetCompleteServerSnap(view.viewCache_);
  if (cache) {
    if (view.query._queryParams.loadsAllData() || !pathIsEmpty(path) && !cache.getImmediateChild(pathGetFront(path)).isEmpty()) {
      return cache.getChild(path);
    }
  }
  return null;
}
function viewIsEmpty(view) {
  return view.eventRegistrations_.length === 0;
}
function viewAddEventRegistration(view, eventRegistration) {
  view.eventRegistrations_.push(eventRegistration);
}
function viewRemoveEventRegistration(view, eventRegistration, cancelError) {
  const cancelEvents = [];
  if (cancelError) {
    assert(eventRegistration == null, "A cancel should cancel all event registrations.");
    const path = view.query._path;
    view.eventRegistrations_.forEach((registration) => {
      const maybeEvent = registration.createCancelEvent(cancelError, path);
      if (maybeEvent) {
        cancelEvents.push(maybeEvent);
      }
    });
  }
  if (eventRegistration) {
    let remaining = [];
    for (let i = 0; i < view.eventRegistrations_.length; ++i) {
      const existing = view.eventRegistrations_[i];
      if (!existing.matches(eventRegistration)) {
        remaining.push(existing);
      } else if (eventRegistration.hasAnyCallback()) {
        remaining = remaining.concat(view.eventRegistrations_.slice(i + 1));
        break;
      }
    }
    view.eventRegistrations_ = remaining;
  } else {
    view.eventRegistrations_ = [];
  }
  return cancelEvents;
}
function viewApplyOperation(view, operation, writesCache, completeServerCache) {
  if (operation.type === OperationType.MERGE && operation.source.queryId !== null) {
    assert(viewCacheGetCompleteServerSnap(view.viewCache_), "We should always have a full cache before handling merges");
    assert(viewCacheGetCompleteEventSnap(view.viewCache_), "Missing event cache, even though we have a server cache");
  }
  const oldViewCache = view.viewCache_;
  const result = viewProcessorApplyOperation(view.processor_, oldViewCache, operation, writesCache, completeServerCache);
  viewProcessorAssertIndexed(view.processor_, result.viewCache);
  assert(result.viewCache.serverCache.isFullyInitialized() || !oldViewCache.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back");
  view.viewCache_ = result.viewCache;
  return viewGenerateEventsForChanges_(view, result.changes, result.viewCache.eventCache.getNode(), null);
}
function viewGetInitialEvents(view, registration) {
  const eventSnap = view.viewCache_.eventCache;
  const initialChanges = [];
  if (!eventSnap.getNode().isLeafNode()) {
    const eventNode = eventSnap.getNode();
    eventNode.forEachChild(PRIORITY_INDEX, (key, childNode) => {
      initialChanges.push(changeChildAdded(key, childNode));
    });
  }
  if (eventSnap.isFullyInitialized()) {
    initialChanges.push(changeValue(eventSnap.getNode()));
  }
  return viewGenerateEventsForChanges_(view, initialChanges, eventSnap.getNode(), registration);
}
function viewGenerateEventsForChanges_(view, changes, eventCache, eventRegistration) {
  const registrations = eventRegistration ? [eventRegistration] : view.eventRegistrations_;
  return eventGeneratorGenerateEventsForChanges(view.eventGenerator_, changes, eventCache, registrations);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let referenceConstructor$1;
class SyncPoint {
  constructor() {
    this.views = new Map();
  }
}
function syncPointSetReferenceConstructor(val) {
  assert(!referenceConstructor$1, "__referenceConstructor has already been defined");
  referenceConstructor$1 = val;
}
function syncPointGetReferenceConstructor() {
  assert(referenceConstructor$1, "Reference.ts has not been loaded");
  return referenceConstructor$1;
}
function syncPointIsEmpty(syncPoint) {
  return syncPoint.views.size === 0;
}
function syncPointApplyOperation(syncPoint, operation, writesCache, optCompleteServerCache) {
  const queryId = operation.source.queryId;
  if (queryId !== null) {
    const view = syncPoint.views.get(queryId);
    assert(view != null, "SyncTree gave us an op for an invalid query.");
    return viewApplyOperation(view, operation, writesCache, optCompleteServerCache);
  } else {
    let events = [];
    for (const view of syncPoint.views.values()) {
      events = events.concat(viewApplyOperation(view, operation, writesCache, optCompleteServerCache));
    }
    return events;
  }
}
function syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete) {
  const queryId = query._queryIdentifier;
  const view = syncPoint.views.get(queryId);
  if (!view) {
    let eventCache = writeTreeRefCalcCompleteEventCache(writesCache, serverCacheComplete ? serverCache : null);
    let eventCacheComplete = false;
    if (eventCache) {
      eventCacheComplete = true;
    } else if (serverCache instanceof ChildrenNode) {
      eventCache = writeTreeRefCalcCompleteEventChildren(writesCache, serverCache);
      eventCacheComplete = false;
    } else {
      eventCache = ChildrenNode.EMPTY_NODE;
      eventCacheComplete = false;
    }
    const viewCache = newViewCache(new CacheNode(eventCache, eventCacheComplete, false), new CacheNode(serverCache, serverCacheComplete, false));
    return new View(query, viewCache);
  }
  return view;
}
function syncPointAddEventRegistration(syncPoint, query, eventRegistration, writesCache, serverCache, serverCacheComplete) {
  const view = syncPointGetView(syncPoint, query, writesCache, serverCache, serverCacheComplete);
  if (!syncPoint.views.has(query._queryIdentifier)) {
    syncPoint.views.set(query._queryIdentifier, view);
  }
  viewAddEventRegistration(view, eventRegistration);
  return viewGetInitialEvents(view, eventRegistration);
}
function syncPointRemoveEventRegistration(syncPoint, query, eventRegistration, cancelError) {
  const queryId = query._queryIdentifier;
  const removed = [];
  let cancelEvents = [];
  const hadCompleteView = syncPointHasCompleteView(syncPoint);
  if (queryId === "default") {
    for (const [viewQueryId, view] of syncPoint.views.entries()) {
      cancelEvents = cancelEvents.concat(viewRemoveEventRegistration(view, eventRegistration, cancelError));
      if (viewIsEmpty(view)) {
        syncPoint.views.delete(viewQueryId);
        if (!view.query._queryParams.loadsAllData()) {
          removed.push(view.query);
        }
      }
    }
  } else {
    const view = syncPoint.views.get(queryId);
    if (view) {
      cancelEvents = cancelEvents.concat(viewRemoveEventRegistration(view, eventRegistration, cancelError));
      if (viewIsEmpty(view)) {
        syncPoint.views.delete(queryId);
        if (!view.query._queryParams.loadsAllData()) {
          removed.push(view.query);
        }
      }
    }
  }
  if (hadCompleteView && !syncPointHasCompleteView(syncPoint)) {
    removed.push(new (syncPointGetReferenceConstructor())(query._repo, query._path));
  }
  return { removed, events: cancelEvents };
}
function syncPointGetQueryViews(syncPoint) {
  const result = [];
  for (const view of syncPoint.views.values()) {
    if (!view.query._queryParams.loadsAllData()) {
      result.push(view);
    }
  }
  return result;
}
function syncPointGetCompleteServerCache(syncPoint, path) {
  let serverCache = null;
  for (const view of syncPoint.views.values()) {
    serverCache = serverCache || viewGetCompleteServerCache(view, path);
  }
  return serverCache;
}
function syncPointViewForQuery(syncPoint, query) {
  const params = query._queryParams;
  if (params.loadsAllData()) {
    return syncPointGetCompleteView(syncPoint);
  } else {
    const queryId = query._queryIdentifier;
    return syncPoint.views.get(queryId);
  }
}
function syncPointViewExistsForQuery(syncPoint, query) {
  return syncPointViewForQuery(syncPoint, query) != null;
}
function syncPointHasCompleteView(syncPoint) {
  return syncPointGetCompleteView(syncPoint) != null;
}
function syncPointGetCompleteView(syncPoint) {
  for (const view of syncPoint.views.values()) {
    if (view.query._queryParams.loadsAllData()) {
      return view;
    }
  }
  return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let referenceConstructor;
function syncTreeSetReferenceConstructor(val) {
  assert(!referenceConstructor, "__referenceConstructor has already been defined");
  referenceConstructor = val;
}
function syncTreeGetReferenceConstructor() {
  assert(referenceConstructor, "Reference.ts has not been loaded");
  return referenceConstructor;
}
let syncTreeNextQueryTag_ = 1;
class SyncTree {
  constructor(listenProvider_) {
    this.listenProvider_ = listenProvider_;
    this.syncPointTree_ = new ImmutableTree(null);
    this.pendingWriteTree_ = newWriteTree();
    this.tagToQueryMap = new Map();
    this.queryToTagMap = new Map();
  }
}
function syncTreeApplyUserOverwrite(syncTree, path, newData, writeId, visible) {
  writeTreeAddOverwrite(syncTree.pendingWriteTree_, path, newData, writeId, visible);
  if (!visible) {
    return [];
  } else {
    return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceUser(), path, newData));
  }
}
function syncTreeApplyUserMerge(syncTree, path, changedChildren, writeId) {
  writeTreeAddMerge(syncTree.pendingWriteTree_, path, changedChildren, writeId);
  const changeTree = ImmutableTree.fromObject(changedChildren);
  return syncTreeApplyOperationToSyncPoints_(syncTree, new Merge(newOperationSourceUser(), path, changeTree));
}
function syncTreeAckUserWrite(syncTree, writeId, revert = false) {
  const write = writeTreeGetWrite(syncTree.pendingWriteTree_, writeId);
  const needToReevaluate = writeTreeRemoveWrite(syncTree.pendingWriteTree_, writeId);
  if (!needToReevaluate) {
    return [];
  } else {
    let affectedTree = new ImmutableTree(null);
    if (write.snap != null) {
      affectedTree = affectedTree.set(newEmptyPath(), true);
    } else {
      each(write.children, (pathString) => {
        affectedTree = affectedTree.set(new Path(pathString), true);
      });
    }
    return syncTreeApplyOperationToSyncPoints_(syncTree, new AckUserWrite(write.path, affectedTree, revert));
  }
}
function syncTreeApplyServerOverwrite(syncTree, path, newData) {
  return syncTreeApplyOperationToSyncPoints_(syncTree, new Overwrite(newOperationSourceServer(), path, newData));
}
function syncTreeApplyServerMerge(syncTree, path, changedChildren) {
  const changeTree = ImmutableTree.fromObject(changedChildren);
  return syncTreeApplyOperationToSyncPoints_(syncTree, new Merge(newOperationSourceServer(), path, changeTree));
}
function syncTreeApplyListenComplete(syncTree, path) {
  return syncTreeApplyOperationToSyncPoints_(syncTree, new ListenComplete(newOperationSourceServer(), path));
}
function syncTreeApplyTaggedListenComplete(syncTree, path, tag) {
  const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
  if (queryKey) {
    const r = syncTreeParseQueryKey_(queryKey);
    const queryPath = r.path, queryId = r.queryId;
    const relativePath = newRelativePath(queryPath, path);
    const op = new ListenComplete(newOperationSourceServerTaggedQuery(queryId), relativePath);
    return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
  } else {
    return [];
  }
}
function syncTreeRemoveEventRegistration(syncTree, query, eventRegistration, cancelError) {
  const path = query._path;
  const maybeSyncPoint = syncTree.syncPointTree_.get(path);
  let cancelEvents = [];
  if (maybeSyncPoint && (query._queryIdentifier === "default" || syncPointViewExistsForQuery(maybeSyncPoint, query))) {
    const removedAndEvents = syncPointRemoveEventRegistration(maybeSyncPoint, query, eventRegistration, cancelError);
    if (syncPointIsEmpty(maybeSyncPoint)) {
      syncTree.syncPointTree_ = syncTree.syncPointTree_.remove(path);
    }
    const removed = removedAndEvents.removed;
    cancelEvents = removedAndEvents.events;
    const removingDefault = removed.findIndex((query2) => {
      return query2._queryParams.loadsAllData();
    }) !== -1;
    const covered = syncTree.syncPointTree_.findOnPath(path, (relativePath, parentSyncPoint) => syncPointHasCompleteView(parentSyncPoint));
    if (removingDefault && !covered) {
      const subtree = syncTree.syncPointTree_.subtree(path);
      if (!subtree.isEmpty()) {
        const newViews = syncTreeCollectDistinctViewsForSubTree_(subtree);
        for (let i = 0; i < newViews.length; ++i) {
          const view = newViews[i], newQuery = view.query;
          const listener = syncTreeCreateListenerForView_(syncTree, view);
          syncTree.listenProvider_.startListening(syncTreeQueryForListening_(newQuery), syncTreeTagForQuery_(syncTree, newQuery), listener.hashFn, listener.onComplete);
        }
      }
    }
    if (!covered && removed.length > 0 && !cancelError) {
      if (removingDefault) {
        const defaultTag = null;
        syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(query), defaultTag);
      } else {
        removed.forEach((queryToRemove) => {
          const tagToRemove = syncTree.queryToTagMap.get(syncTreeMakeQueryKey_(queryToRemove));
          syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToRemove), tagToRemove);
        });
      }
    }
    syncTreeRemoveTags_(syncTree, removed);
  }
  return cancelEvents;
}
function syncTreeApplyTaggedQueryOverwrite(syncTree, path, snap, tag) {
  const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
  if (queryKey != null) {
    const r = syncTreeParseQueryKey_(queryKey);
    const queryPath = r.path, queryId = r.queryId;
    const relativePath = newRelativePath(queryPath, path);
    const op = new Overwrite(newOperationSourceServerTaggedQuery(queryId), relativePath, snap);
    return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
  } else {
    return [];
  }
}
function syncTreeApplyTaggedQueryMerge(syncTree, path, changedChildren, tag) {
  const queryKey = syncTreeQueryKeyForTag_(syncTree, tag);
  if (queryKey) {
    const r = syncTreeParseQueryKey_(queryKey);
    const queryPath = r.path, queryId = r.queryId;
    const relativePath = newRelativePath(queryPath, path);
    const changeTree = ImmutableTree.fromObject(changedChildren);
    const op = new Merge(newOperationSourceServerTaggedQuery(queryId), relativePath, changeTree);
    return syncTreeApplyTaggedOperation_(syncTree, queryPath, op);
  } else {
    return [];
  }
}
function syncTreeAddEventRegistration(syncTree, query, eventRegistration) {
  const path = query._path;
  let serverCache = null;
  let foundAncestorDefaultView = false;
  syncTree.syncPointTree_.foreachOnPath(path, (pathToSyncPoint, sp) => {
    const relativePath = newRelativePath(pathToSyncPoint, path);
    serverCache = serverCache || syncPointGetCompleteServerCache(sp, relativePath);
    foundAncestorDefaultView = foundAncestorDefaultView || syncPointHasCompleteView(sp);
  });
  let syncPoint = syncTree.syncPointTree_.get(path);
  if (!syncPoint) {
    syncPoint = new SyncPoint();
    syncTree.syncPointTree_ = syncTree.syncPointTree_.set(path, syncPoint);
  } else {
    foundAncestorDefaultView = foundAncestorDefaultView || syncPointHasCompleteView(syncPoint);
    serverCache = serverCache || syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
  }
  let serverCacheComplete;
  if (serverCache != null) {
    serverCacheComplete = true;
  } else {
    serverCacheComplete = false;
    serverCache = ChildrenNode.EMPTY_NODE;
    const subtree = syncTree.syncPointTree_.subtree(path);
    subtree.foreachChild((childName, childSyncPoint) => {
      const completeCache = syncPointGetCompleteServerCache(childSyncPoint, newEmptyPath());
      if (completeCache) {
        serverCache = serverCache.updateImmediateChild(childName, completeCache);
      }
    });
  }
  const viewAlreadyExists = syncPointViewExistsForQuery(syncPoint, query);
  if (!viewAlreadyExists && !query._queryParams.loadsAllData()) {
    const queryKey = syncTreeMakeQueryKey_(query);
    assert(!syncTree.queryToTagMap.has(queryKey), "View does not exist, but we have a tag");
    const tag = syncTreeGetNextQueryTag_();
    syncTree.queryToTagMap.set(queryKey, tag);
    syncTree.tagToQueryMap.set(tag, queryKey);
  }
  const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, path);
  let events = syncPointAddEventRegistration(syncPoint, query, eventRegistration, writesCache, serverCache, serverCacheComplete);
  if (!viewAlreadyExists && !foundAncestorDefaultView) {
    const view = syncPointViewForQuery(syncPoint, query);
    events = events.concat(syncTreeSetupListener_(syncTree, query, view));
  }
  return events;
}
function syncTreeCalcCompleteEventCache(syncTree, path, writeIdsToExclude) {
  const includeHiddenSets = true;
  const writeTree = syncTree.pendingWriteTree_;
  const serverCache = syncTree.syncPointTree_.findOnPath(path, (pathSoFar, syncPoint) => {
    const relativePath = newRelativePath(pathSoFar, path);
    const serverCache2 = syncPointGetCompleteServerCache(syncPoint, relativePath);
    if (serverCache2) {
      return serverCache2;
    }
  });
  return writeTreeCalcCompleteEventCache(writeTree, path, serverCache, writeIdsToExclude, includeHiddenSets);
}
function syncTreeGetServerValue(syncTree, query) {
  const path = query._path;
  let serverCache = null;
  syncTree.syncPointTree_.foreachOnPath(path, (pathToSyncPoint, sp) => {
    const relativePath = newRelativePath(pathToSyncPoint, path);
    serverCache = serverCache || syncPointGetCompleteServerCache(sp, relativePath);
  });
  let syncPoint = syncTree.syncPointTree_.get(path);
  if (!syncPoint) {
    syncPoint = new SyncPoint();
    syncTree.syncPointTree_ = syncTree.syncPointTree_.set(path, syncPoint);
  } else {
    serverCache = serverCache || syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
  }
  const serverCacheComplete = serverCache != null;
  const serverCacheNode = serverCacheComplete ? new CacheNode(serverCache, true, false) : null;
  const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, query._path);
  const view = syncPointGetView(syncPoint, query, writesCache, serverCacheComplete ? serverCacheNode.getNode() : ChildrenNode.EMPTY_NODE, serverCacheComplete);
  return viewGetCompleteNode(view);
}
function syncTreeApplyOperationToSyncPoints_(syncTree, operation) {
  return syncTreeApplyOperationHelper_(operation, syncTree.syncPointTree_, null, writeTreeChildWrites(syncTree.pendingWriteTree_, newEmptyPath()));
}
function syncTreeApplyOperationHelper_(operation, syncPointTree, serverCache, writesCache) {
  if (pathIsEmpty(operation.path)) {
    return syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
  } else {
    const syncPoint = syncPointTree.get(newEmptyPath());
    if (serverCache == null && syncPoint != null) {
      serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
    }
    let events = [];
    const childName = pathGetFront(operation.path);
    const childOperation = operation.operationForChild(childName);
    const childTree = syncPointTree.children.get(childName);
    if (childTree && childOperation) {
      const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
      const childWritesCache = writeTreeRefChild(writesCache, childName);
      events = events.concat(syncTreeApplyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
    }
    if (syncPoint) {
      events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
    }
    return events;
  }
}
function syncTreeApplyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache) {
  const syncPoint = syncPointTree.get(newEmptyPath());
  if (serverCache == null && syncPoint != null) {
    serverCache = syncPointGetCompleteServerCache(syncPoint, newEmptyPath());
  }
  let events = [];
  syncPointTree.children.inorderTraversal((childName, childTree) => {
    const childServerCache = serverCache ? serverCache.getImmediateChild(childName) : null;
    const childWritesCache = writeTreeRefChild(writesCache, childName);
    const childOperation = operation.operationForChild(childName);
    if (childOperation) {
      events = events.concat(syncTreeApplyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
    }
  });
  if (syncPoint) {
    events = events.concat(syncPointApplyOperation(syncPoint, operation, writesCache, serverCache));
  }
  return events;
}
function syncTreeCreateListenerForView_(syncTree, view) {
  const query = view.query;
  const tag = syncTreeTagForQuery_(syncTree, query);
  return {
    hashFn: () => {
      const cache = viewGetServerCache(view) || ChildrenNode.EMPTY_NODE;
      return cache.hash();
    },
    onComplete: (status) => {
      if (status === "ok") {
        if (tag) {
          return syncTreeApplyTaggedListenComplete(syncTree, query._path, tag);
        } else {
          return syncTreeApplyListenComplete(syncTree, query._path);
        }
      } else {
        const error2 = errorForServerCode(status, query);
        return syncTreeRemoveEventRegistration(syncTree, query, null, error2);
      }
    }
  };
}
function syncTreeTagForQuery_(syncTree, query) {
  const queryKey = syncTreeMakeQueryKey_(query);
  return syncTree.queryToTagMap.get(queryKey);
}
function syncTreeMakeQueryKey_(query) {
  return query._path.toString() + "$" + query._queryIdentifier;
}
function syncTreeQueryKeyForTag_(syncTree, tag) {
  return syncTree.tagToQueryMap.get(tag);
}
function syncTreeParseQueryKey_(queryKey) {
  const splitIndex = queryKey.indexOf("$");
  assert(splitIndex !== -1 && splitIndex < queryKey.length - 1, "Bad queryKey.");
  return {
    queryId: queryKey.substr(splitIndex + 1),
    path: new Path(queryKey.substr(0, splitIndex))
  };
}
function syncTreeApplyTaggedOperation_(syncTree, queryPath, operation) {
  const syncPoint = syncTree.syncPointTree_.get(queryPath);
  assert(syncPoint, "Missing sync point for query tag that we're tracking");
  const writesCache = writeTreeChildWrites(syncTree.pendingWriteTree_, queryPath);
  return syncPointApplyOperation(syncPoint, operation, writesCache, null);
}
function syncTreeCollectDistinctViewsForSubTree_(subtree) {
  return subtree.fold((relativePath, maybeChildSyncPoint, childMap) => {
    if (maybeChildSyncPoint && syncPointHasCompleteView(maybeChildSyncPoint)) {
      const completeView = syncPointGetCompleteView(maybeChildSyncPoint);
      return [completeView];
    } else {
      let views = [];
      if (maybeChildSyncPoint) {
        views = syncPointGetQueryViews(maybeChildSyncPoint);
      }
      each(childMap, (_key, childViews) => {
        views = views.concat(childViews);
      });
      return views;
    }
  });
}
function syncTreeQueryForListening_(query) {
  if (query._queryParams.loadsAllData() && !query._queryParams.isDefault()) {
    return new (syncTreeGetReferenceConstructor())(query._repo, query._path);
  } else {
    return query;
  }
}
function syncTreeRemoveTags_(syncTree, queries) {
  for (let j = 0; j < queries.length; ++j) {
    const removedQuery = queries[j];
    if (!removedQuery._queryParams.loadsAllData()) {
      const removedQueryKey = syncTreeMakeQueryKey_(removedQuery);
      const removedQueryTag = syncTree.queryToTagMap.get(removedQueryKey);
      syncTree.queryToTagMap.delete(removedQueryKey);
      syncTree.tagToQueryMap.delete(removedQueryTag);
    }
  }
}
function syncTreeGetNextQueryTag_() {
  return syncTreeNextQueryTag_++;
}
function syncTreeSetupListener_(syncTree, query, view) {
  const path = query._path;
  const tag = syncTreeTagForQuery_(syncTree, query);
  const listener = syncTreeCreateListenerForView_(syncTree, view);
  const events = syncTree.listenProvider_.startListening(syncTreeQueryForListening_(query), tag, listener.hashFn, listener.onComplete);
  const subtree = syncTree.syncPointTree_.subtree(path);
  if (tag) {
    assert(!syncPointHasCompleteView(subtree.value), "If we're adding a query, it shouldn't be shadowed");
  } else {
    const queriesToStop = subtree.fold((relativePath, maybeChildSyncPoint, childMap) => {
      if (!pathIsEmpty(relativePath) && maybeChildSyncPoint && syncPointHasCompleteView(maybeChildSyncPoint)) {
        return [syncPointGetCompleteView(maybeChildSyncPoint).query];
      } else {
        let queries = [];
        if (maybeChildSyncPoint) {
          queries = queries.concat(syncPointGetQueryViews(maybeChildSyncPoint).map((view2) => view2.query));
        }
        each(childMap, (_key, childQueries) => {
          queries = queries.concat(childQueries);
        });
        return queries;
      }
    });
    for (let i = 0; i < queriesToStop.length; ++i) {
      const queryToStop = queriesToStop[i];
      syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToStop), syncTreeTagForQuery_(syncTree, queryToStop));
    }
  }
  return events;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ExistingValueProvider {
  constructor(node_) {
    this.node_ = node_;
  }
  getImmediateChild(childName) {
    const child2 = this.node_.getImmediateChild(childName);
    return new ExistingValueProvider(child2);
  }
  node() {
    return this.node_;
  }
}
class DeferredValueProvider {
  constructor(syncTree, path) {
    this.syncTree_ = syncTree;
    this.path_ = path;
  }
  getImmediateChild(childName) {
    const childPath = pathChild(this.path_, childName);
    return new DeferredValueProvider(this.syncTree_, childPath);
  }
  node() {
    return syncTreeCalcCompleteEventCache(this.syncTree_, this.path_);
  }
}
const generateWithValues = function(values) {
  values = values || {};
  values["timestamp"] = values["timestamp"] || new Date().getTime();
  return values;
};
const resolveDeferredLeafValue = function(value, existingVal, serverValues) {
  if (!value || typeof value !== "object") {
    return value;
  }
  assert(".sv" in value, "Unexpected leaf node or priority contents");
  if (typeof value[".sv"] === "string") {
    return resolveScalarDeferredValue(value[".sv"], existingVal, serverValues);
  } else if (typeof value[".sv"] === "object") {
    return resolveComplexDeferredValue(value[".sv"], existingVal);
  } else {
    assert(false, "Unexpected server value: " + JSON.stringify(value, null, 2));
  }
};
const resolveScalarDeferredValue = function(op, existing, serverValues) {
  switch (op) {
    case "timestamp":
      return serverValues["timestamp"];
    default:
      assert(false, "Unexpected server value: " + op);
  }
};
const resolveComplexDeferredValue = function(op, existing, unused) {
  if (!op.hasOwnProperty("increment")) {
    assert(false, "Unexpected server value: " + JSON.stringify(op, null, 2));
  }
  const delta = op["increment"];
  if (typeof delta !== "number") {
    assert(false, "Unexpected increment value: " + delta);
  }
  const existingNode = existing.node();
  assert(existingNode !== null && typeof existingNode !== "undefined", "Expected ChildrenNode.EMPTY_NODE for nulls");
  if (!existingNode.isLeafNode()) {
    return delta;
  }
  const leaf = existingNode;
  const existingVal = leaf.getValue();
  if (typeof existingVal !== "number") {
    return delta;
  }
  return existingVal + delta;
};
const resolveDeferredValueTree = function(path, node, syncTree, serverValues) {
  return resolveDeferredValue(node, new DeferredValueProvider(syncTree, path), serverValues);
};
const resolveDeferredValueSnapshot = function(node, existing, serverValues) {
  return resolveDeferredValue(node, new ExistingValueProvider(existing), serverValues);
};
function resolveDeferredValue(node, existingVal, serverValues) {
  const rawPri = node.getPriority().val();
  const priority = resolveDeferredLeafValue(rawPri, existingVal.getImmediateChild(".priority"), serverValues);
  let newNode;
  if (node.isLeafNode()) {
    const leafNode = node;
    const value = resolveDeferredLeafValue(leafNode.getValue(), existingVal, serverValues);
    if (value !== leafNode.getValue() || priority !== leafNode.getPriority().val()) {
      return new LeafNode(value, nodeFromJSON(priority));
    } else {
      return node;
    }
  } else {
    const childrenNode = node;
    newNode = childrenNode;
    if (priority !== childrenNode.getPriority().val()) {
      newNode = newNode.updatePriority(new LeafNode(priority));
    }
    childrenNode.forEachChild(PRIORITY_INDEX, (childName, childNode) => {
      const newChildNode = resolveDeferredValue(childNode, existingVal.getImmediateChild(childName), serverValues);
      if (newChildNode !== childNode) {
        newNode = newNode.updateImmediateChild(childName, newChildNode);
      }
    });
    return newNode;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tree {
  constructor(name2 = "", parent = null, node = { children: {}, childCount: 0 }) {
    this.name = name2;
    this.parent = parent;
    this.node = node;
  }
}
function treeSubTree(tree, pathObj) {
  let path = pathObj instanceof Path ? pathObj : new Path(pathObj);
  let child2 = tree, next = pathGetFront(path);
  while (next !== null) {
    const childNode = safeGet(child2.node.children, next) || {
      children: {},
      childCount: 0
    };
    child2 = new Tree(next, child2, childNode);
    path = pathPopFront(path);
    next = pathGetFront(path);
  }
  return child2;
}
function treeGetValue(tree) {
  return tree.node.value;
}
function treeSetValue(tree, value) {
  tree.node.value = value;
  treeUpdateParents(tree);
}
function treeHasChildren(tree) {
  return tree.node.childCount > 0;
}
function treeIsEmpty(tree) {
  return treeGetValue(tree) === void 0 && !treeHasChildren(tree);
}
function treeForEachChild(tree, action) {
  each(tree.node.children, (child2, childTree) => {
    action(new Tree(child2, tree, childTree));
  });
}
function treeForEachDescendant(tree, action, includeSelf, childrenFirst) {
  if (includeSelf && !childrenFirst) {
    action(tree);
  }
  treeForEachChild(tree, (child2) => {
    treeForEachDescendant(child2, action, true, childrenFirst);
  });
  if (includeSelf && childrenFirst) {
    action(tree);
  }
}
function treeForEachAncestor(tree, action, includeSelf) {
  let node = includeSelf ? tree : tree.parent;
  while (node !== null) {
    if (action(node)) {
      return true;
    }
    node = node.parent;
  }
  return false;
}
function treeGetPath(tree) {
  return new Path(tree.parent === null ? tree.name : treeGetPath(tree.parent) + "/" + tree.name);
}
function treeUpdateParents(tree) {
  if (tree.parent !== null) {
    treeUpdateChild(tree.parent, tree.name, tree);
  }
}
function treeUpdateChild(tree, childName, child2) {
  const childEmpty = treeIsEmpty(child2);
  const childExists = contains(tree.node.children, childName);
  if (childEmpty && childExists) {
    delete tree.node.children[childName];
    tree.node.childCount--;
    treeUpdateParents(tree);
  } else if (!childEmpty && !childExists) {
    tree.node.children[childName] = child2.node;
    tree.node.childCount++;
    treeUpdateParents(tree);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
const INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
const MAX_LEAF_SIZE_ = 10 * 1024 * 1024;
const isValidKey = function(key) {
  return typeof key === "string" && key.length !== 0 && !INVALID_KEY_REGEX_.test(key);
};
const isValidPathString = function(pathString) {
  return typeof pathString === "string" && pathString.length !== 0 && !INVALID_PATH_REGEX_.test(pathString);
};
const isValidRootPathString = function(pathString) {
  if (pathString) {
    pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
  }
  return isValidPathString(pathString);
};
const isValidPriority = function(priority) {
  return priority === null || typeof priority === "string" || typeof priority === "number" && !isInvalidJSONNumber(priority) || priority && typeof priority === "object" && contains(priority, ".sv");
};
const validateFirebaseDataArg = function(fnName, value, path, optional) {
  if (optional && value === void 0) {
    return;
  }
  validateFirebaseData(errorPrefix(fnName, "value"), value, path);
};
const validateFirebaseData = function(errorPrefix2, data, path_) {
  const path = path_ instanceof Path ? new ValidationPath(path_, errorPrefix2) : path_;
  if (data === void 0) {
    throw new Error(errorPrefix2 + "contains undefined " + validationPathToErrorString(path));
  }
  if (typeof data === "function") {
    throw new Error(errorPrefix2 + "contains a function " + validationPathToErrorString(path) + " with contents = " + data.toString());
  }
  if (isInvalidJSONNumber(data)) {
    throw new Error(errorPrefix2 + "contains " + data.toString() + " " + validationPathToErrorString(path));
  }
  if (typeof data === "string" && data.length > MAX_LEAF_SIZE_ / 3 && stringLength(data) > MAX_LEAF_SIZE_) {
    throw new Error(errorPrefix2 + "contains a string greater than " + MAX_LEAF_SIZE_ + " utf8 bytes " + validationPathToErrorString(path) + " ('" + data.substring(0, 50) + "...')");
  }
  if (data && typeof data === "object") {
    let hasDotValue = false;
    let hasActualChild = false;
    each(data, (key, value) => {
      if (key === ".value") {
        hasDotValue = true;
      } else if (key !== ".priority" && key !== ".sv") {
        hasActualChild = true;
        if (!isValidKey(key)) {
          throw new Error(errorPrefix2 + " contains an invalid key (" + key + ") " + validationPathToErrorString(path) + `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
        }
      }
      validationPathPush(path, key);
      validateFirebaseData(errorPrefix2, value, path);
      validationPathPop(path);
    });
    if (hasDotValue && hasActualChild) {
      throw new Error(errorPrefix2 + ' contains ".value" child ' + validationPathToErrorString(path) + " in addition to actual children.");
    }
  }
};
const validateFirebaseMergePaths = function(errorPrefix2, mergePaths) {
  let i, curPath;
  for (i = 0; i < mergePaths.length; i++) {
    curPath = mergePaths[i];
    const keys = pathSlice(curPath);
    for (let j = 0; j < keys.length; j++) {
      if (keys[j] === ".priority" && j === keys.length - 1)
        ;
      else if (!isValidKey(keys[j])) {
        throw new Error(errorPrefix2 + "contains an invalid key (" + keys[j] + ") in path " + curPath.toString() + `. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);
      }
    }
  }
  mergePaths.sort(pathCompare);
  let prevPath = null;
  for (i = 0; i < mergePaths.length; i++) {
    curPath = mergePaths[i];
    if (prevPath !== null && pathContains(prevPath, curPath)) {
      throw new Error(errorPrefix2 + "contains a path " + prevPath.toString() + " that is ancestor of another path " + curPath.toString());
    }
    prevPath = curPath;
  }
};
const validateFirebaseMergeDataArg = function(fnName, data, path, optional) {
  if (optional && data === void 0) {
    return;
  }
  const errorPrefix$1 = errorPrefix(fnName, "values");
  if (!(data && typeof data === "object") || Array.isArray(data)) {
    throw new Error(errorPrefix$1 + " must be an object containing the children to replace.");
  }
  const mergePaths = [];
  each(data, (key, value) => {
    const curPath = new Path(key);
    validateFirebaseData(errorPrefix$1, value, pathChild(path, curPath));
    if (pathGetBack(curPath) === ".priority") {
      if (!isValidPriority(value)) {
        throw new Error(errorPrefix$1 + "contains an invalid value for '" + curPath.toString() + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
      }
    }
    mergePaths.push(curPath);
  });
  validateFirebaseMergePaths(errorPrefix$1, mergePaths);
};
const validatePathString = function(fnName, argumentName, pathString, optional) {
  if (optional && pathString === void 0) {
    return;
  }
  if (!isValidPathString(pathString)) {
    throw new Error(errorPrefix(fnName, argumentName) + 'was an invalid path = "' + pathString + `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`);
  }
};
const validateRootPathString = function(fnName, argumentName, pathString, optional) {
  if (pathString) {
    pathString = pathString.replace(/^\/*\.info(\/|$)/, "/");
  }
  validatePathString(fnName, argumentName, pathString, optional);
};
const validateWritablePath = function(fnName, path) {
  if (pathGetFront(path) === ".info") {
    throw new Error(fnName + " failed = Can't modify data under /.info/");
  }
};
const validateUrl = function(fnName, parsedUrl) {
  const pathString = parsedUrl.path.toString();
  if (!(typeof parsedUrl.repoInfo.host === "string") || parsedUrl.repoInfo.host.length === 0 || !isValidKey(parsedUrl.repoInfo.namespace) && parsedUrl.repoInfo.host.split(":")[0] !== "localhost" || pathString.length !== 0 && !isValidRootPathString(pathString)) {
    throw new Error(errorPrefix(fnName, "url") + `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`);
  }
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EventQueue {
  constructor() {
    this.eventLists_ = [];
    this.recursionDepth_ = 0;
  }
}
function eventQueueQueueEvents(eventQueue, eventDataList) {
  let currList = null;
  for (let i = 0; i < eventDataList.length; i++) {
    const data = eventDataList[i];
    const path = data.getPath();
    if (currList !== null && !pathEquals(path, currList.path)) {
      eventQueue.eventLists_.push(currList);
      currList = null;
    }
    if (currList === null) {
      currList = { events: [], path };
    }
    currList.events.push(data);
  }
  if (currList) {
    eventQueue.eventLists_.push(currList);
  }
}
function eventQueueRaiseEventsAtPath(eventQueue, path, eventDataList) {
  eventQueueQueueEvents(eventQueue, eventDataList);
  eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath) => pathEquals(eventPath, path));
}
function eventQueueRaiseEventsForChangedPath(eventQueue, changedPath, eventDataList) {
  eventQueueQueueEvents(eventQueue, eventDataList);
  eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, (eventPath) => pathContains(eventPath, changedPath) || pathContains(changedPath, eventPath));
}
function eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue, predicate) {
  eventQueue.recursionDepth_++;
  let sentAll = true;
  for (let i = 0; i < eventQueue.eventLists_.length; i++) {
    const eventList = eventQueue.eventLists_[i];
    if (eventList) {
      const eventPath = eventList.path;
      if (predicate(eventPath)) {
        eventListRaise(eventQueue.eventLists_[i]);
        eventQueue.eventLists_[i] = null;
      } else {
        sentAll = false;
      }
    }
  }
  if (sentAll) {
    eventQueue.eventLists_ = [];
  }
  eventQueue.recursionDepth_--;
}
function eventListRaise(eventList) {
  for (let i = 0; i < eventList.events.length; i++) {
    const eventData = eventList.events[i];
    if (eventData !== null) {
      eventList.events[i] = null;
      const eventFn = eventData.getEventRunner();
      if (logger) {
        log("event: " + eventData.toString());
      }
      exceptionGuard(eventFn);
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const INTERRUPT_REASON = "repo_interrupt";
const MAX_TRANSACTION_RETRIES = 25;
class Repo {
  constructor(repoInfo_, forceRestClient_, authTokenProvider_, appCheckProvider_) {
    this.repoInfo_ = repoInfo_;
    this.forceRestClient_ = forceRestClient_;
    this.authTokenProvider_ = authTokenProvider_;
    this.appCheckProvider_ = appCheckProvider_;
    this.dataUpdateCount = 0;
    this.statsListener_ = null;
    this.eventQueue_ = new EventQueue();
    this.nextWriteId_ = 1;
    this.interceptServerDataCallback_ = null;
    this.onDisconnect_ = newSparseSnapshotTree();
    this.transactionQueueTree_ = new Tree();
    this.persistentConnection_ = null;
    this.key = this.repoInfo_.toURLString();
  }
  toString() {
    return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host;
  }
}
function repoStart(repo, appId, authOverride) {
  repo.stats_ = statsManagerGetCollection(repo.repoInfo_);
  if (repo.forceRestClient_ || beingCrawled()) {
    repo.server_ = new ReadonlyRestClient(repo.repoInfo_, (pathString, data, isMerge, tag) => {
      repoOnDataUpdate(repo, pathString, data, isMerge, tag);
    }, repo.authTokenProvider_, repo.appCheckProvider_);
    setTimeout(() => repoOnConnectStatus(repo, true), 0);
  } else {
    if (typeof authOverride !== "undefined" && authOverride !== null) {
      if (typeof authOverride !== "object") {
        throw new Error("Only objects are supported for option databaseAuthVariableOverride");
      }
      try {
        stringify(authOverride);
      } catch (e) {
        throw new Error("Invalid authOverride provided: " + e);
      }
    }
    repo.persistentConnection_ = new PersistentConnection(repo.repoInfo_, appId, (pathString, data, isMerge, tag) => {
      repoOnDataUpdate(repo, pathString, data, isMerge, tag);
    }, (connectStatus) => {
      repoOnConnectStatus(repo, connectStatus);
    }, (updates) => {
      repoOnServerInfoUpdate(repo, updates);
    }, repo.authTokenProvider_, repo.appCheckProvider_, authOverride);
    repo.server_ = repo.persistentConnection_;
  }
  repo.authTokenProvider_.addTokenChangeListener((token) => {
    repo.server_.refreshAuthToken(token);
  });
  repo.appCheckProvider_.addTokenChangeListener((result) => {
    repo.server_.refreshAppCheckToken(result.token);
  });
  repo.statsReporter_ = statsManagerGetOrCreateReporter(repo.repoInfo_, () => new StatsReporter(repo.stats_, repo.server_));
  repo.infoData_ = new SnapshotHolder();
  repo.infoSyncTree_ = new SyncTree({
    startListening: (query, tag, currentHashFn, onComplete) => {
      let infoEvents = [];
      const node = repo.infoData_.getNode(query._path);
      if (!node.isEmpty()) {
        infoEvents = syncTreeApplyServerOverwrite(repo.infoSyncTree_, query._path, node);
        setTimeout(() => {
          onComplete("ok");
        }, 0);
      }
      return infoEvents;
    },
    stopListening: () => {
    }
  });
  repoUpdateInfo(repo, "connected", false);
  repo.serverSyncTree_ = new SyncTree({
    startListening: (query, tag, currentHashFn, onComplete) => {
      repo.server_.listen(query, currentHashFn, tag, (status, data) => {
        const events = onComplete(status, data);
        eventQueueRaiseEventsForChangedPath(repo.eventQueue_, query._path, events);
      });
      return [];
    },
    stopListening: (query, tag) => {
      repo.server_.unlisten(query, tag);
    }
  });
}
function repoServerTime(repo) {
  const offsetNode = repo.infoData_.getNode(new Path(".info/serverTimeOffset"));
  const offset = offsetNode.val() || 0;
  return new Date().getTime() + offset;
}
function repoGenerateServerValues(repo) {
  return generateWithValues({
    timestamp: repoServerTime(repo)
  });
}
function repoOnDataUpdate(repo, pathString, data, isMerge, tag) {
  repo.dataUpdateCount++;
  const path = new Path(pathString);
  data = repo.interceptServerDataCallback_ ? repo.interceptServerDataCallback_(pathString, data) : data;
  let events = [];
  if (tag) {
    if (isMerge) {
      const taggedChildren = map(data, (raw) => nodeFromJSON(raw));
      events = syncTreeApplyTaggedQueryMerge(repo.serverSyncTree_, path, taggedChildren, tag);
    } else {
      const taggedSnap = nodeFromJSON(data);
      events = syncTreeApplyTaggedQueryOverwrite(repo.serverSyncTree_, path, taggedSnap, tag);
    }
  } else if (isMerge) {
    const changedChildren = map(data, (raw) => nodeFromJSON(raw));
    events = syncTreeApplyServerMerge(repo.serverSyncTree_, path, changedChildren);
  } else {
    const snap = nodeFromJSON(data);
    events = syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap);
  }
  let affectedPath = path;
  if (events.length > 0) {
    affectedPath = repoRerunTransactions(repo, path);
  }
  eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, events);
}
function repoOnConnectStatus(repo, connectStatus) {
  repoUpdateInfo(repo, "connected", connectStatus);
  if (connectStatus === false) {
    repoRunOnDisconnectEvents(repo);
  }
}
function repoOnServerInfoUpdate(repo, updates) {
  each(updates, (key, value) => {
    repoUpdateInfo(repo, key, value);
  });
}
function repoUpdateInfo(repo, pathString, value) {
  const path = new Path("/.info/" + pathString);
  const newNode = nodeFromJSON(value);
  repo.infoData_.updateSnapshot(path, newNode);
  const events = syncTreeApplyServerOverwrite(repo.infoSyncTree_, path, newNode);
  eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
}
function repoGetNextWriteId(repo) {
  return repo.nextWriteId_++;
}
function repoGetValue(repo, query) {
  const cached = syncTreeGetServerValue(repo.serverSyncTree_, query);
  if (cached != null) {
    return Promise.resolve(cached);
  }
  return repo.server_.get(query).then((payload) => {
    const node = nodeFromJSON(payload).withIndex(query._queryParams.getIndex());
    const events = syncTreeApplyServerOverwrite(repo.serverSyncTree_, query._path, node);
    eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
    return Promise.resolve(node);
  }, (err) => {
    repoLog(repo, "get for query " + stringify(query) + " failed: " + err);
    return Promise.reject(new Error(err));
  });
}
function repoSetWithPriority(repo, path, newVal, newPriority, onComplete) {
  repoLog(repo, "set", {
    path: path.toString(),
    value: newVal,
    priority: newPriority
  });
  const serverValues = repoGenerateServerValues(repo);
  const newNodeUnresolved = nodeFromJSON(newVal, newPriority);
  const existing = syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path);
  const newNode = resolveDeferredValueSnapshot(newNodeUnresolved, existing, serverValues);
  const writeId = repoGetNextWriteId(repo);
  const events = syncTreeApplyUserOverwrite(repo.serverSyncTree_, path, newNode, writeId, true);
  eventQueueQueueEvents(repo.eventQueue_, events);
  repo.server_.put(path.toString(), newNodeUnresolved.val(true), (status, errorReason) => {
    const success = status === "ok";
    if (!success) {
      warn("set at " + path + " failed: " + status);
    }
    const clearEvents = syncTreeAckUserWrite(repo.serverSyncTree_, writeId, !success);
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, clearEvents);
    repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
  });
  const affectedPath = repoAbortTransactions(repo, path);
  repoRerunTransactions(repo, affectedPath);
  eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, []);
}
function repoUpdate(repo, path, childrenToMerge, onComplete) {
  repoLog(repo, "update", { path: path.toString(), value: childrenToMerge });
  let empty = true;
  const serverValues = repoGenerateServerValues(repo);
  const changedChildren = {};
  each(childrenToMerge, (changedKey, changedValue) => {
    empty = false;
    changedChildren[changedKey] = resolveDeferredValueTree(pathChild(path, changedKey), nodeFromJSON(changedValue), repo.serverSyncTree_, serverValues);
  });
  if (!empty) {
    const writeId = repoGetNextWriteId(repo);
    const events = syncTreeApplyUserMerge(repo.serverSyncTree_, path, changedChildren, writeId);
    eventQueueQueueEvents(repo.eventQueue_, events);
    repo.server_.merge(path.toString(), childrenToMerge, (status, errorReason) => {
      const success = status === "ok";
      if (!success) {
        warn("update at " + path + " failed: " + status);
      }
      const clearEvents = syncTreeAckUserWrite(repo.serverSyncTree_, writeId, !success);
      const affectedPath = clearEvents.length > 0 ? repoRerunTransactions(repo, path) : path;
      eventQueueRaiseEventsForChangedPath(repo.eventQueue_, affectedPath, clearEvents);
      repoCallOnCompleteCallback(repo, onComplete, status, errorReason);
    });
    each(childrenToMerge, (changedPath) => {
      const affectedPath = repoAbortTransactions(repo, pathChild(path, changedPath));
      repoRerunTransactions(repo, affectedPath);
    });
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, []);
  } else {
    log("update() called with empty data.  Don't do anything.");
    repoCallOnCompleteCallback(repo, onComplete, "ok", void 0);
  }
}
function repoRunOnDisconnectEvents(repo) {
  repoLog(repo, "onDisconnectEvents");
  const serverValues = repoGenerateServerValues(repo);
  const resolvedOnDisconnectTree = newSparseSnapshotTree();
  sparseSnapshotTreeForEachTree(repo.onDisconnect_, newEmptyPath(), (path, node) => {
    const resolved = resolveDeferredValueTree(path, node, repo.serverSyncTree_, serverValues);
    sparseSnapshotTreeRemember(resolvedOnDisconnectTree, path, resolved);
  });
  let events = [];
  sparseSnapshotTreeForEachTree(resolvedOnDisconnectTree, newEmptyPath(), (path, snap) => {
    events = events.concat(syncTreeApplyServerOverwrite(repo.serverSyncTree_, path, snap));
    const affectedPath = repoAbortTransactions(repo, path);
    repoRerunTransactions(repo, affectedPath);
  });
  repo.onDisconnect_ = newSparseSnapshotTree();
  eventQueueRaiseEventsForChangedPath(repo.eventQueue_, newEmptyPath(), events);
}
function repoAddEventCallbackForQuery(repo, query, eventRegistration) {
  let events;
  if (pathGetFront(query._path) === ".info") {
    events = syncTreeAddEventRegistration(repo.infoSyncTree_, query, eventRegistration);
  } else {
    events = syncTreeAddEventRegistration(repo.serverSyncTree_, query, eventRegistration);
  }
  eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
}
function repoRemoveEventCallbackForQuery(repo, query, eventRegistration) {
  let events;
  if (pathGetFront(query._path) === ".info") {
    events = syncTreeRemoveEventRegistration(repo.infoSyncTree_, query, eventRegistration);
  } else {
    events = syncTreeRemoveEventRegistration(repo.serverSyncTree_, query, eventRegistration);
  }
  eventQueueRaiseEventsAtPath(repo.eventQueue_, query._path, events);
}
function repoInterrupt(repo) {
  if (repo.persistentConnection_) {
    repo.persistentConnection_.interrupt(INTERRUPT_REASON);
  }
}
function repoLog(repo, ...varArgs) {
  let prefix = "";
  if (repo.persistentConnection_) {
    prefix = repo.persistentConnection_.id + ":";
  }
  log(prefix, ...varArgs);
}
function repoCallOnCompleteCallback(repo, callback, status, errorReason) {
  if (callback) {
    exceptionGuard(() => {
      if (status === "ok") {
        callback(null);
      } else {
        const code = (status || "error").toUpperCase();
        let message = code;
        if (errorReason) {
          message += ": " + errorReason;
        }
        const error2 = new Error(message);
        error2.code = code;
        callback(error2);
      }
    });
  }
}
function repoGetLatestState(repo, path, excludeSets) {
  return syncTreeCalcCompleteEventCache(repo.serverSyncTree_, path, excludeSets) || ChildrenNode.EMPTY_NODE;
}
function repoSendReadyTransactions(repo, node = repo.transactionQueueTree_) {
  if (!node) {
    repoPruneCompletedTransactionsBelowNode(repo, node);
  }
  if (treeGetValue(node)) {
    const queue = repoBuildTransactionQueue(repo, node);
    assert(queue.length > 0, "Sending zero length transaction queue");
    const allRun = queue.every((transaction) => transaction.status === 0);
    if (allRun) {
      repoSendTransactionQueue(repo, treeGetPath(node), queue);
    }
  } else if (treeHasChildren(node)) {
    treeForEachChild(node, (childNode) => {
      repoSendReadyTransactions(repo, childNode);
    });
  }
}
function repoSendTransactionQueue(repo, path, queue) {
  const setsToIgnore = queue.map((txn) => {
    return txn.currentWriteId;
  });
  const latestState = repoGetLatestState(repo, path, setsToIgnore);
  let snapToSend = latestState;
  const latestHash = latestState.hash();
  for (let i = 0; i < queue.length; i++) {
    const txn = queue[i];
    assert(txn.status === 0, "tryToSendTransactionQueue_: items in queue should all be run.");
    txn.status = 1;
    txn.retryCount++;
    const relativePath = newRelativePath(path, txn.path);
    snapToSend = snapToSend.updateChild(relativePath, txn.currentOutputSnapshotRaw);
  }
  const dataToSend = snapToSend.val(true);
  const pathToSend = path;
  repo.server_.put(pathToSend.toString(), dataToSend, (status) => {
    repoLog(repo, "transaction put response", {
      path: pathToSend.toString(),
      status
    });
    let events = [];
    if (status === "ok") {
      const callbacks = [];
      for (let i = 0; i < queue.length; i++) {
        queue[i].status = 2;
        events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId));
        if (queue[i].onComplete) {
          callbacks.push(() => queue[i].onComplete(null, true, queue[i].currentOutputSnapshotResolved));
        }
        queue[i].unwatcher();
      }
      repoPruneCompletedTransactionsBelowNode(repo, treeSubTree(repo.transactionQueueTree_, path));
      repoSendReadyTransactions(repo, repo.transactionQueueTree_);
      eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
      for (let i = 0; i < callbacks.length; i++) {
        exceptionGuard(callbacks[i]);
      }
    } else {
      if (status === "datastale") {
        for (let i = 0; i < queue.length; i++) {
          if (queue[i].status === 3) {
            queue[i].status = 4;
          } else {
            queue[i].status = 0;
          }
        }
      } else {
        warn("transaction at " + pathToSend.toString() + " failed: " + status);
        for (let i = 0; i < queue.length; i++) {
          queue[i].status = 4;
          queue[i].abortReason = status;
        }
      }
      repoRerunTransactions(repo, path);
    }
  }, latestHash);
}
function repoRerunTransactions(repo, changedPath) {
  const rootMostTransactionNode = repoGetAncestorTransactionNode(repo, changedPath);
  const path = treeGetPath(rootMostTransactionNode);
  const queue = repoBuildTransactionQueue(repo, rootMostTransactionNode);
  repoRerunTransactionQueue(repo, queue, path);
  return path;
}
function repoRerunTransactionQueue(repo, queue, path) {
  if (queue.length === 0) {
    return;
  }
  const callbacks = [];
  let events = [];
  const txnsToRerun = queue.filter((q) => {
    return q.status === 0;
  });
  const setsToIgnore = txnsToRerun.map((q) => {
    return q.currentWriteId;
  });
  for (let i = 0; i < queue.length; i++) {
    const transaction = queue[i];
    const relativePath = newRelativePath(path, transaction.path);
    let abortTransaction = false, abortReason;
    assert(relativePath !== null, "rerunTransactionsUnderNode_: relativePath should not be null.");
    if (transaction.status === 4) {
      abortTransaction = true;
      abortReason = transaction.abortReason;
      events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
    } else if (transaction.status === 0) {
      if (transaction.retryCount >= MAX_TRANSACTION_RETRIES) {
        abortTransaction = true;
        abortReason = "maxretry";
        events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
      } else {
        const currentNode = repoGetLatestState(repo, transaction.path, setsToIgnore);
        transaction.currentInputSnapshot = currentNode;
        const newData = queue[i].update(currentNode.val());
        if (newData !== void 0) {
          validateFirebaseData("transaction failed: Data returned ", newData, transaction.path);
          let newDataNode = nodeFromJSON(newData);
          const hasExplicitPriority = typeof newData === "object" && newData != null && contains(newData, ".priority");
          if (!hasExplicitPriority) {
            newDataNode = newDataNode.updatePriority(currentNode.getPriority());
          }
          const oldWriteId = transaction.currentWriteId;
          const serverValues = repoGenerateServerValues(repo);
          const newNodeResolved = resolveDeferredValueSnapshot(newDataNode, currentNode, serverValues);
          transaction.currentOutputSnapshotRaw = newDataNode;
          transaction.currentOutputSnapshotResolved = newNodeResolved;
          transaction.currentWriteId = repoGetNextWriteId(repo);
          setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
          events = events.concat(syncTreeApplyUserOverwrite(repo.serverSyncTree_, transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
          events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, oldWriteId, true));
        } else {
          abortTransaction = true;
          abortReason = "nodata";
          events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, transaction.currentWriteId, true));
        }
      }
    }
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, path, events);
    events = [];
    if (abortTransaction) {
      queue[i].status = 2;
      (function(unwatcher) {
        setTimeout(unwatcher, Math.floor(0));
      })(queue[i].unwatcher);
      if (queue[i].onComplete) {
        if (abortReason === "nodata") {
          callbacks.push(() => queue[i].onComplete(null, false, queue[i].currentInputSnapshot));
        } else {
          callbacks.push(() => queue[i].onComplete(new Error(abortReason), false, null));
        }
      }
    }
  }
  repoPruneCompletedTransactionsBelowNode(repo, repo.transactionQueueTree_);
  for (let i = 0; i < callbacks.length; i++) {
    exceptionGuard(callbacks[i]);
  }
  repoSendReadyTransactions(repo, repo.transactionQueueTree_);
}
function repoGetAncestorTransactionNode(repo, path) {
  let front;
  let transactionNode = repo.transactionQueueTree_;
  front = pathGetFront(path);
  while (front !== null && treeGetValue(transactionNode) === void 0) {
    transactionNode = treeSubTree(transactionNode, front);
    path = pathPopFront(path);
    front = pathGetFront(path);
  }
  return transactionNode;
}
function repoBuildTransactionQueue(repo, transactionNode) {
  const transactionQueue = [];
  repoAggregateTransactionQueuesForNode(repo, transactionNode, transactionQueue);
  transactionQueue.sort((a, b) => a.order - b.order);
  return transactionQueue;
}
function repoAggregateTransactionQueuesForNode(repo, node, queue) {
  const nodeQueue = treeGetValue(node);
  if (nodeQueue) {
    for (let i = 0; i < nodeQueue.length; i++) {
      queue.push(nodeQueue[i]);
    }
  }
  treeForEachChild(node, (child2) => {
    repoAggregateTransactionQueuesForNode(repo, child2, queue);
  });
}
function repoPruneCompletedTransactionsBelowNode(repo, node) {
  const queue = treeGetValue(node);
  if (queue) {
    let to = 0;
    for (let from = 0; from < queue.length; from++) {
      if (queue[from].status !== 2) {
        queue[to] = queue[from];
        to++;
      }
    }
    queue.length = to;
    treeSetValue(node, queue.length > 0 ? queue : void 0);
  }
  treeForEachChild(node, (childNode) => {
    repoPruneCompletedTransactionsBelowNode(repo, childNode);
  });
}
function repoAbortTransactions(repo, path) {
  const affectedPath = treeGetPath(repoGetAncestorTransactionNode(repo, path));
  const transactionNode = treeSubTree(repo.transactionQueueTree_, path);
  treeForEachAncestor(transactionNode, (node) => {
    repoAbortTransactionsOnNode(repo, node);
  });
  repoAbortTransactionsOnNode(repo, transactionNode);
  treeForEachDescendant(transactionNode, (node) => {
    repoAbortTransactionsOnNode(repo, node);
  });
  return affectedPath;
}
function repoAbortTransactionsOnNode(repo, node) {
  const queue = treeGetValue(node);
  if (queue) {
    const callbacks = [];
    let events = [];
    let lastSent = -1;
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].status === 3)
        ;
      else if (queue[i].status === 1) {
        assert(lastSent === i - 1, "All SENT items should be at beginning of queue.");
        lastSent = i;
        queue[i].status = 3;
        queue[i].abortReason = "set";
      } else {
        assert(queue[i].status === 0, "Unexpected transaction status in abort");
        queue[i].unwatcher();
        events = events.concat(syncTreeAckUserWrite(repo.serverSyncTree_, queue[i].currentWriteId, true));
        if (queue[i].onComplete) {
          callbacks.push(queue[i].onComplete.bind(null, new Error("set"), false, null));
        }
      }
    }
    if (lastSent === -1) {
      treeSetValue(node, void 0);
    } else {
      queue.length = lastSent + 1;
    }
    eventQueueRaiseEventsForChangedPath(repo.eventQueue_, treeGetPath(node), events);
    for (let i = 0; i < callbacks.length; i++) {
      exceptionGuard(callbacks[i]);
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function decodePath(pathString) {
  let pathStringDecoded = "";
  const pieces = pathString.split("/");
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].length > 0) {
      let piece = pieces[i];
      try {
        piece = decodeURIComponent(piece.replace(/\+/g, " "));
      } catch (e) {
      }
      pathStringDecoded += "/" + piece;
    }
  }
  return pathStringDecoded;
}
function decodeQuery(queryString) {
  const results = {};
  if (queryString.charAt(0) === "?") {
    queryString = queryString.substring(1);
  }
  for (const segment of queryString.split("&")) {
    if (segment.length === 0) {
      continue;
    }
    const kv = segment.split("=");
    if (kv.length === 2) {
      results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
    } else {
      warn(`Invalid query segment '${segment}' in query '${queryString}'`);
    }
  }
  return results;
}
const parseRepoInfo = function(dataURL, nodeAdmin) {
  const parsedUrl = parseDatabaseURL(dataURL), namespace = parsedUrl.namespace;
  if (parsedUrl.domain === "firebase.com") {
    fatal(parsedUrl.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
  }
  if ((!namespace || namespace === "undefined") && parsedUrl.domain !== "localhost") {
    fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");
  }
  if (!parsedUrl.secure) {
    warnIfPageIsSecure();
  }
  const webSocketOnly = parsedUrl.scheme === "ws" || parsedUrl.scheme === "wss";
  return {
    repoInfo: new RepoInfo(parsedUrl.host, parsedUrl.secure, namespace, nodeAdmin, webSocketOnly, "", namespace !== parsedUrl.subdomain),
    path: new Path(parsedUrl.pathString)
  };
};
const parseDatabaseURL = function(dataURL) {
  let host = "", domain = "", subdomain = "", pathString = "", namespace = "";
  let secure = true, scheme = "https", port = 443;
  if (typeof dataURL === "string") {
    let colonInd = dataURL.indexOf("//");
    if (colonInd >= 0) {
      scheme = dataURL.substring(0, colonInd - 1);
      dataURL = dataURL.substring(colonInd + 2);
    }
    let slashInd = dataURL.indexOf("/");
    if (slashInd === -1) {
      slashInd = dataURL.length;
    }
    let questionMarkInd = dataURL.indexOf("?");
    if (questionMarkInd === -1) {
      questionMarkInd = dataURL.length;
    }
    host = dataURL.substring(0, Math.min(slashInd, questionMarkInd));
    if (slashInd < questionMarkInd) {
      pathString = decodePath(dataURL.substring(slashInd, questionMarkInd));
    }
    const queryParams = decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd)));
    colonInd = host.indexOf(":");
    if (colonInd >= 0) {
      secure = scheme === "https" || scheme === "wss";
      port = parseInt(host.substring(colonInd + 1), 10);
    } else {
      colonInd = host.length;
    }
    const hostWithoutPort = host.slice(0, colonInd);
    if (hostWithoutPort.toLowerCase() === "localhost") {
      domain = "localhost";
    } else if (hostWithoutPort.split(".").length <= 2) {
      domain = hostWithoutPort;
    } else {
      const dotInd = host.indexOf(".");
      subdomain = host.substring(0, dotInd).toLowerCase();
      domain = host.substring(dotInd + 1);
      namespace = subdomain;
    }
    if ("ns" in queryParams) {
      namespace = queryParams["ns"];
    }
  }
  return {
    host,
    port,
    domain,
    subdomain,
    secure,
    scheme,
    pathString,
    namespace
  };
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class DataEvent {
  constructor(eventType, eventRegistration, snapshot, prevName) {
    this.eventType = eventType;
    this.eventRegistration = eventRegistration;
    this.snapshot = snapshot;
    this.prevName = prevName;
  }
  getPath() {
    const ref2 = this.snapshot.ref;
    if (this.eventType === "value") {
      return ref2._path;
    } else {
      return ref2.parent._path;
    }
  }
  getEventType() {
    return this.eventType;
  }
  getEventRunner() {
    return this.eventRegistration.getEventRunner(this);
  }
  toString() {
    return this.getPath().toString() + ":" + this.eventType + ":" + stringify(this.snapshot.exportVal());
  }
}
class CancelEvent {
  constructor(eventRegistration, error2, path) {
    this.eventRegistration = eventRegistration;
    this.error = error2;
    this.path = path;
  }
  getPath() {
    return this.path;
  }
  getEventType() {
    return "cancel";
  }
  getEventRunner() {
    return this.eventRegistration.getEventRunner(this);
  }
  toString() {
    return this.path.toString() + ":cancel";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class CallbackContext {
  constructor(snapshotCallback, cancelCallback) {
    this.snapshotCallback = snapshotCallback;
    this.cancelCallback = cancelCallback;
  }
  onValue(expDataSnapshot, previousChildName) {
    this.snapshotCallback.call(null, expDataSnapshot, previousChildName);
  }
  onCancel(error2) {
    assert(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback");
    return this.cancelCallback.call(null, error2);
  }
  get hasCancelCallback() {
    return !!this.cancelCallback;
  }
  matches(other) {
    return this.snapshotCallback === other.snapshotCallback || this.snapshotCallback.userCallback !== void 0 && this.snapshotCallback.userCallback === other.snapshotCallback.userCallback && this.snapshotCallback.context === other.snapshotCallback.context;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class QueryImpl {
  constructor(_repo, _path, _queryParams, _orderByCalled) {
    this._repo = _repo;
    this._path = _path;
    this._queryParams = _queryParams;
    this._orderByCalled = _orderByCalled;
  }
  get key() {
    if (pathIsEmpty(this._path)) {
      return null;
    } else {
      return pathGetBack(this._path);
    }
  }
  get ref() {
    return new ReferenceImpl(this._repo, this._path);
  }
  get _queryIdentifier() {
    const obj = queryParamsGetQueryObject(this._queryParams);
    const id = ObjectToUniqueKey(obj);
    return id === "{}" ? "default" : id;
  }
  get _queryObject() {
    return queryParamsGetQueryObject(this._queryParams);
  }
  isEqual(other) {
    other = getModularInstance(other);
    if (!(other instanceof QueryImpl)) {
      return false;
    }
    const sameRepo = this._repo === other._repo;
    const samePath = pathEquals(this._path, other._path);
    const sameQueryIdentifier = this._queryIdentifier === other._queryIdentifier;
    return sameRepo && samePath && sameQueryIdentifier;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + pathToUrlEncodedString(this._path);
  }
}
class ReferenceImpl extends QueryImpl {
  constructor(repo, path) {
    super(repo, path, new QueryParams(), false);
  }
  get parent() {
    const parentPath = pathParent(this._path);
    return parentPath === null ? null : new ReferenceImpl(this._repo, parentPath);
  }
  get root() {
    let ref2 = this;
    while (ref2.parent !== null) {
      ref2 = ref2.parent;
    }
    return ref2;
  }
}
class DataSnapshot {
  constructor(_node, ref2, _index) {
    this._node = _node;
    this.ref = ref2;
    this._index = _index;
  }
  get priority() {
    return this._node.getPriority().val();
  }
  get key() {
    return this.ref.key;
  }
  get size() {
    return this._node.numChildren();
  }
  child(path) {
    const childPath = new Path(path);
    const childRef = child(this.ref, path);
    return new DataSnapshot(this._node.getChild(childPath), childRef, PRIORITY_INDEX);
  }
  exists() {
    return !this._node.isEmpty();
  }
  exportVal() {
    return this._node.val(true);
  }
  forEach(action) {
    if (this._node.isLeafNode()) {
      return false;
    }
    const childrenNode = this._node;
    return !!childrenNode.forEachChild(this._index, (key, node) => {
      return action(new DataSnapshot(node, child(this.ref, key), PRIORITY_INDEX));
    });
  }
  hasChild(path) {
    const childPath = new Path(path);
    return !this._node.getChild(childPath).isEmpty();
  }
  hasChildren() {
    if (this._node.isLeafNode()) {
      return false;
    } else {
      return !this._node.isEmpty();
    }
  }
  toJSON() {
    return this.exportVal();
  }
  val() {
    return this._node.val();
  }
}
function ref(db2, path) {
  db2 = getModularInstance(db2);
  db2._checkNotDeleted("ref");
  return path !== void 0 ? child(db2._root, path) : db2._root;
}
function child(parent, path) {
  parent = getModularInstance(parent);
  if (pathGetFront(parent._path) === null) {
    validateRootPathString("child", "path", path, false);
  } else {
    validatePathString("child", "path", path, false);
  }
  return new ReferenceImpl(parent._repo, pathChild(parent._path, path));
}
function push(parent, value) {
  parent = getModularInstance(parent);
  validateWritablePath("push", parent._path);
  validateFirebaseDataArg("push", value, parent._path, true);
  const now = repoServerTime(parent._repo);
  const name2 = nextPushId(now);
  const thennablePushRef = child(parent, name2);
  const pushRef = child(parent, name2);
  let promise;
  if (value != null) {
    promise = set$1(pushRef, value).then(() => pushRef);
  } else {
    promise = Promise.resolve(pushRef);
  }
  thennablePushRef.then = promise.then.bind(promise);
  thennablePushRef.catch = promise.then.bind(promise, void 0);
  return thennablePushRef;
}
function remove$1(ref2) {
  validateWritablePath("remove", ref2._path);
  return set$1(ref2, null);
}
function set$1(ref2, value) {
  ref2 = getModularInstance(ref2);
  validateWritablePath("set", ref2._path);
  validateFirebaseDataArg("set", value, ref2._path, false);
  const deferred = new Deferred();
  repoSetWithPriority(ref2._repo, ref2._path, value, null, deferred.wrapCallback(() => {
  }));
  return deferred.promise;
}
function update$1(ref2, values) {
  validateFirebaseMergeDataArg("update", values, ref2._path, false);
  const deferred = new Deferred();
  repoUpdate(ref2._repo, ref2._path, values, deferred.wrapCallback(() => {
  }));
  return deferred.promise;
}
function get(query) {
  query = getModularInstance(query);
  return repoGetValue(query._repo, query).then((node) => {
    return new DataSnapshot(node, new ReferenceImpl(query._repo, query._path), query._queryParams.getIndex());
  });
}
class ValueEventRegistration {
  constructor(callbackContext) {
    this.callbackContext = callbackContext;
  }
  respondsTo(eventType) {
    return eventType === "value";
  }
  createEvent(change, query) {
    const index = query._queryParams.getIndex();
    return new DataEvent("value", this, new DataSnapshot(change.snapshotNode, new ReferenceImpl(query._repo, query._path), index));
  }
  getEventRunner(eventData) {
    if (eventData.getEventType() === "cancel") {
      return () => this.callbackContext.onCancel(eventData.error);
    } else {
      return () => this.callbackContext.onValue(eventData.snapshot, null);
    }
  }
  createCancelEvent(error2, path) {
    if (this.callbackContext.hasCancelCallback) {
      return new CancelEvent(this, error2, path);
    } else {
      return null;
    }
  }
  matches(other) {
    if (!(other instanceof ValueEventRegistration)) {
      return false;
    } else if (!other.callbackContext || !this.callbackContext) {
      return true;
    } else {
      return other.callbackContext.matches(this.callbackContext);
    }
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
}
class ChildEventRegistration {
  constructor(eventType, callbackContext) {
    this.eventType = eventType;
    this.callbackContext = callbackContext;
  }
  respondsTo(eventType) {
    let eventToCheck = eventType === "children_added" ? "child_added" : eventType;
    eventToCheck = eventToCheck === "children_removed" ? "child_removed" : eventToCheck;
    return this.eventType === eventToCheck;
  }
  createCancelEvent(error2, path) {
    if (this.callbackContext.hasCancelCallback) {
      return new CancelEvent(this, error2, path);
    } else {
      return null;
    }
  }
  createEvent(change, query) {
    assert(change.childName != null, "Child events should have a childName.");
    const childRef = child(new ReferenceImpl(query._repo, query._path), change.childName);
    const index = query._queryParams.getIndex();
    return new DataEvent(change.type, this, new DataSnapshot(change.snapshotNode, childRef, index), change.prevName);
  }
  getEventRunner(eventData) {
    if (eventData.getEventType() === "cancel") {
      return () => this.callbackContext.onCancel(eventData.error);
    } else {
      return () => this.callbackContext.onValue(eventData.snapshot, eventData.prevName);
    }
  }
  matches(other) {
    if (other instanceof ChildEventRegistration) {
      return this.eventType === other.eventType && (!this.callbackContext || !other.callbackContext || this.callbackContext.matches(other.callbackContext));
    }
    return false;
  }
  hasAnyCallback() {
    return !!this.callbackContext;
  }
}
function addEventListener(query, eventType, callback, cancelCallbackOrListenOptions, options) {
  let cancelCallback;
  if (typeof cancelCallbackOrListenOptions === "object") {
    cancelCallback = void 0;
    options = cancelCallbackOrListenOptions;
  }
  if (typeof cancelCallbackOrListenOptions === "function") {
    cancelCallback = cancelCallbackOrListenOptions;
  }
  if (options && options.onlyOnce) {
    const userCallback = callback;
    const onceCallback = (dataSnapshot, previousChildName) => {
      repoRemoveEventCallbackForQuery(query._repo, query, container);
      userCallback(dataSnapshot, previousChildName);
    };
    onceCallback.userCallback = callback.userCallback;
    onceCallback.context = callback.context;
    callback = onceCallback;
  }
  const callbackContext = new CallbackContext(callback, cancelCallback || void 0);
  const container = eventType === "value" ? new ValueEventRegistration(callbackContext) : new ChildEventRegistration(eventType, callbackContext);
  repoAddEventCallbackForQuery(query._repo, query, container);
  return () => repoRemoveEventCallbackForQuery(query._repo, query, container);
}
function onValue(query, callback, cancelCallbackOrListenOptions, options) {
  return addEventListener(query, "value", callback, cancelCallbackOrListenOptions, options);
}
function off$1(query, eventType, callback) {
  let container = null;
  const expCallback = callback ? new CallbackContext(callback) : null;
  if (eventType === "value") {
    container = new ValueEventRegistration(expCallback);
  } else if (eventType) {
    container = new ChildEventRegistration(eventType, expCallback);
  }
  repoRemoveEventCallbackForQuery(query._repo, query, container);
}
syncPointSetReferenceConstructor(ReferenceImpl);
syncTreeSetReferenceConstructor(ReferenceImpl);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const FIREBASE_DATABASE_EMULATOR_HOST_VAR = "FIREBASE_DATABASE_EMULATOR_HOST";
const repos = {};
let useRestClient = false;
function repoManagerDatabaseFromApp(app2, authProvider, appCheckProvider, url, nodeAdmin) {
  let dbUrl = url || app2.options.databaseURL;
  if (dbUrl === void 0) {
    if (!app2.options.projectId) {
      fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp().");
    }
    log("Using default host for project ", app2.options.projectId);
    dbUrl = `${app2.options.projectId}-default-rtdb.firebaseio.com`;
  }
  let parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
  let repoInfo = parsedUrl.repoInfo;
  let isEmulator;
  let dbEmulatorHost = void 0;
  if (typeof process !== "undefined") {
    dbEmulatorHost = process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR];
  }
  if (dbEmulatorHost) {
    isEmulator = true;
    dbUrl = `http://${dbEmulatorHost}?ns=${repoInfo.namespace}`;
    parsedUrl = parseRepoInfo(dbUrl, nodeAdmin);
    repoInfo = parsedUrl.repoInfo;
  } else {
    isEmulator = !parsedUrl.repoInfo.secure;
  }
  const authTokenProvider = nodeAdmin && isEmulator ? new EmulatorTokenProvider(EmulatorTokenProvider.OWNER) : new FirebaseAuthTokenProvider(app2.name, app2.options, authProvider);
  validateUrl("Invalid Firebase Database URL", parsedUrl);
  if (!pathIsEmpty(parsedUrl.path)) {
    fatal("Database URL must point to the root of a Firebase Database (not including a child path).");
  }
  const repo = repoManagerCreateRepo(repoInfo, app2, authTokenProvider, new AppCheckTokenProvider(app2.name, appCheckProvider));
  return new Database(repo, app2);
}
function repoManagerDeleteRepo(repo, appName) {
  const appRepos = repos[appName];
  if (!appRepos || appRepos[repo.key] !== repo) {
    fatal(`Database ${appName}(${repo.repoInfo_}) has already been deleted.`);
  }
  repoInterrupt(repo);
  delete appRepos[repo.key];
}
function repoManagerCreateRepo(repoInfo, app2, authTokenProvider, appCheckProvider) {
  let appRepos = repos[app2.name];
  if (!appRepos) {
    appRepos = {};
    repos[app2.name] = appRepos;
  }
  let repo = appRepos[repoInfo.toURLString()];
  if (repo) {
    fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
  }
  repo = new Repo(repoInfo, useRestClient, authTokenProvider, appCheckProvider);
  appRepos[repoInfo.toURLString()] = repo;
  return repo;
}
class Database {
  constructor(_repoInternal, app2) {
    this._repoInternal = _repoInternal;
    this.app = app2;
    this["type"] = "database";
    this._instanceStarted = false;
  }
  get _repo() {
    if (!this._instanceStarted) {
      repoStart(this._repoInternal, this.app.options.appId, this.app.options["databaseAuthVariableOverride"]);
      this._instanceStarted = true;
    }
    return this._repoInternal;
  }
  get _root() {
    if (!this._rootInternal) {
      this._rootInternal = new ReferenceImpl(this._repo, newEmptyPath());
    }
    return this._rootInternal;
  }
  _delete() {
    if (this._rootInternal !== null) {
      repoManagerDeleteRepo(this._repo, this.app.name);
      this._repoInternal = null;
      this._rootInternal = null;
    }
    return Promise.resolve();
  }
  _checkNotDeleted(apiName) {
    if (this._rootInternal === null) {
      fatal("Cannot call " + apiName + " on a deleted database.");
    }
  }
}
function getDatabase(app2 = getApp(), url) {
  return _getProvider(app2, "database").getImmediate({
    identifier: url
  });
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerDatabase(variant) {
  setSDKVersion(SDK_VERSION$1);
  _registerComponent(new Component("database", (container, { instanceIdentifier: url }) => {
    const app2 = container.getProvider("app").getImmediate();
    const authProvider = container.getProvider("auth-internal");
    const appCheckProvider = container.getProvider("app-check-internal");
    return repoManagerDatabaseFromApp(app2, authProvider, appCheckProvider, url);
  }, "PUBLIC").setMultipleInstances(true));
  registerVersion(name$1, version$1, variant);
  registerVersion(name$1, version$1, "esm2017");
}
PersistentConnection.prototype.simpleListen = function(pathString, onComplete) {
  this.sendRequest("q", { p: pathString }, onComplete);
};
PersistentConnection.prototype.echo = function(data, onEcho) {
  this.sendRequest("echo", { d: data }, onEcho);
};
registerDatabase();
var db, app;
const getDb = () => db;
const start = async (firebaseConfig) => {
  try {
    app = initializeApp(firebaseConfig);
    db = getDatabase(app);
    return { ok: "firebase started" };
  } catch (error2) {
    return { error: error2 };
  }
};
var db = getDb();
const getKey = async (url) => {
  try {
    var data = await push(child(ref(db), url));
    return { ok: data.key };
  } catch (error2) {
    return { error: error2 };
  }
};
const update = async (data) => {
  try {
    const updates = {};
    updates[data.ref] = data.obj;
    return await update$1(ref(db), updates).then(() => {
      return { ok: "Data updated" };
    }).catch((error2) => {
      return { error: error2 };
    });
  } catch (error2) {
    return { error: error2 };
  }
};
const set = async (data) => {
  try {
    return await set$1(ref(db, data.ref), data.obj).then(() => {
      return { ok: "Data setted" };
    }).catch((error2) => {
      return { error: error2 };
    });
  } catch (error2) {
    return { error: error2 };
  }
};
const once = async (url) => {
  try {
    return await get(ref(db, url)).then((snapshot) => {
      if (snapshot.exists())
        return { ok: snapshot.val() };
      else
        return { ok: "No data" };
    }).catch((error2) => {
      return { error: error2 };
    });
  } catch (error2) {
    return { error: error2 };
  }
};
const on = async (url, func2) => {
  try {
    var x = await onValue(ref(db, url), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists())
        return func2({ ok: data });
      else
        return func2({ ok: "No data" });
    });
  } catch (error2) {
    return func2({ error: error2 });
  }
};
const off = async (url) => {
  try {
    off$1(ref(db, url));
    return { ok: "off" };
  } catch (error2) {
    return func({ error: error2 });
  }
};
const remove = async (url) => {
  try {
    return await remove$1(ref(db, url)).then(() => {
      return { ok: "Data removed" };
    }).catch((error2) => {
      return { error: error2 };
    });
  } catch (error2) {
    return func({ error: error2 });
  }
};
const database = {
  getKey,
  update,
  set,
  once,
  on,
  off,
  remove,
  start
};
function _prodErrorMap() {
  return {
    ["dependent-sdk-initialized-before-auth"]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
const prodErrorMap = _prodErrorMap;
const _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory("auth", "Firebase", _prodErrorMap());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logClient = new Logger("@firebase/auth");
function _logError(msg, ...args) {
  if (logClient.logLevel <= LogLevel.ERROR) {
    logClient.error(`Auth (${SDK_VERSION$1}): ${msg}`, ...args);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth2, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), { [code]: message });
  const factory = new ErrorFactory("auth", "Firebase", errorMap);
  return factory.create(code, {
    appName: auth2.name
  });
}
function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== "string") {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];
    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }
    return authOrCode._errorFactory.create(code, ...fullParams);
  }
  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
function debugFail(failure) {
  const message = `INTERNAL ASSERTION FAILED: ` + failure;
  _logError(message);
  throw new Error(message);
}
function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const instanceCache = new Map();
function _getInstance(cls) {
  debugAssert(cls instanceof Function, "Expected a class definition");
  let instance = instanceCache.get(cls);
  if (instance) {
    debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
    return instance;
  }
  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function initializeAuth(app2, deps) {
  const provider = _getProvider(app2, "auth");
  if (provider.isInitialized()) {
    const auth3 = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if (deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth3;
    } else {
      _fail(auth3, "already-initialized");
    }
  }
  const auth2 = provider.initialize({ options: deps });
  return auth2;
}
function _initializeAuthInstance(auth2, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth2._updateErrorMap(deps.errorMap);
  }
  auth2._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _getCurrentUrl() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _isOnline() {
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (_isHttpOrHttps() || isBrowserExtension() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return navigatorLanguage.languages && navigatorLanguage.languages[0] || navigatorLanguage.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Delay {
  constructor(shortDelay, longDelay) {
    this.shortDelay = shortDelay;
    this.longDelay = longDelay;
    debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
    this.isMobile = isMobileCordova() || isReactNative();
  }
  get() {
    if (!_isOnline()) {
      return Math.min(5e3, this.shortDelay);
    }
    return this.isMobile ? this.longDelay : this.shortDelay;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _emulatorUrl(config, path) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const { url } = config.emulator;
  if (!path) {
    return url;
  }
  return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FetchProvider {
  static initialize(fetchImpl, headersImpl, responseImpl) {
    this.fetchImpl = fetchImpl;
    if (headersImpl) {
      this.headersImpl = headersImpl;
    }
    if (responseImpl) {
      this.responseImpl = responseImpl;
    }
  }
  static fetch() {
    if (this.fetchImpl) {
      return this.fetchImpl;
    }
    if (typeof self !== "undefined" && "fetch" in self) {
      return self.fetch;
    }
    debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }
    if (typeof self !== "undefined" && "Headers" in self) {
      return self.Headers;
    }
    debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl) {
      return this.responseImpl;
    }
    if (typeof self !== "undefined" && "Response" in self) {
      return self.Response;
    }
    debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SERVER_ERROR_MAP = {
  ["CREDENTIAL_MISMATCH"]: "custom-token-mismatch",
  ["MISSING_CUSTOM_TOKEN"]: "internal-error",
  ["INVALID_IDENTIFIER"]: "invalid-email",
  ["MISSING_CONTINUE_URI"]: "internal-error",
  ["INVALID_PASSWORD"]: "wrong-password",
  ["MISSING_PASSWORD"]: "internal-error",
  ["EMAIL_EXISTS"]: "email-already-in-use",
  ["PASSWORD_LOGIN_DISABLED"]: "operation-not-allowed",
  ["INVALID_IDP_RESPONSE"]: "invalid-credential",
  ["INVALID_PENDING_TOKEN"]: "invalid-credential",
  ["FEDERATED_USER_ID_ALREADY_LINKED"]: "credential-already-in-use",
  ["MISSING_REQ_TYPE"]: "internal-error",
  ["EMAIL_NOT_FOUND"]: "user-not-found",
  ["RESET_PASSWORD_EXCEED_LIMIT"]: "too-many-requests",
  ["EXPIRED_OOB_CODE"]: "expired-action-code",
  ["INVALID_OOB_CODE"]: "invalid-action-code",
  ["MISSING_OOB_CODE"]: "internal-error",
  ["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]: "requires-recent-login",
  ["INVALID_ID_TOKEN"]: "invalid-user-token",
  ["TOKEN_EXPIRED"]: "user-token-expired",
  ["USER_NOT_FOUND"]: "user-token-expired",
  ["TOO_MANY_ATTEMPTS_TRY_LATER"]: "too-many-requests",
  ["INVALID_CODE"]: "invalid-verification-code",
  ["INVALID_SESSION_INFO"]: "invalid-verification-id",
  ["INVALID_TEMPORARY_PROOF"]: "invalid-credential",
  ["MISSING_SESSION_INFO"]: "missing-verification-id",
  ["SESSION_EXPIRED"]: "code-expired",
  ["MISSING_ANDROID_PACKAGE_NAME"]: "missing-android-pkg-name",
  ["UNAUTHORIZED_DOMAIN"]: "unauthorized-continue-uri",
  ["INVALID_OAUTH_CLIENT_ID"]: "invalid-oauth-client-id",
  ["ADMIN_ONLY_OPERATION"]: "admin-restricted-operation",
  ["INVALID_MFA_PENDING_CREDENTIAL"]: "invalid-multi-factor-session",
  ["MFA_ENROLLMENT_NOT_FOUND"]: "multi-factor-info-not-found",
  ["MISSING_MFA_ENROLLMENT_ID"]: "missing-multi-factor-info",
  ["MISSING_MFA_PENDING_CREDENTIAL"]: "missing-multi-factor-session",
  ["SECOND_FACTOR_EXISTS"]: "second-factor-already-in-use",
  ["SECOND_FACTOR_LIMIT_EXCEEDED"]: "maximum-second-factor-count-exceeded",
  ["BLOCKING_FUNCTION_ERROR_RESPONSE"]: "internal-error"
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
function _addTidIfNecessary(auth2, request) {
  if (auth2.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), { tenantId: auth2.tenantId });
  }
  return request;
}
async function _performApiRequest(auth2, method, path, request, customErrorMap = {}) {
  return _performFetchWithErrorHandling(auth2, customErrorMap, () => {
    let body = {};
    let params = {};
    if (request) {
      if (method === "GET") {
        params = request;
      } else {
        body = {
          body: JSON.stringify(request)
        };
      }
    }
    const query = querystring(Object.assign({ key: auth2.config.apiKey }, params)).slice(1);
    const headers = new (FetchProvider.headers())();
    headers.set("Content-Type", "application/json");
    headers.set("X-Client-Version", auth2._getSdkClientVersion());
    if (auth2.languageCode) {
      headers.set("X-Firebase-Locale", auth2.languageCode);
    }
    return FetchProvider.fetch()(_getFinalTarget(auth2, auth2.config.apiHost, path, query), Object.assign({
      method,
      headers,
      referrerPolicy: "no-referrer"
    }, body));
  });
}
async function _performFetchWithErrorHandling(auth2, customErrorMap, fetchFn) {
  auth2._canInitEmulator = false;
  const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
  try {
    const networkTimeout = new NetworkTimeout(auth2);
    const response = await Promise.race([
      fetchFn(),
      networkTimeout.promise
    ]);
    networkTimeout.clearNetworkTimeout();
    const json = await response.json();
    if ("needConfirmation" in json) {
      throw _makeTaggedError(auth2, "account-exists-with-different-credential", json);
    }
    if (response.ok && !("errorMessage" in json)) {
      return json;
    } else {
      const errorMessage = response.ok ? json.errorMessage : json.error.message;
      const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
      if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
        throw _makeTaggedError(auth2, "credential-already-in-use", json);
      } else if (serverErrorCode === "EMAIL_EXISTS") {
        throw _makeTaggedError(auth2, "email-already-in-use", json);
      }
      const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
      if (serverErrorMessage) {
        throw _errorWithCustomMessage(auth2, authError, serverErrorMessage);
      } else {
        _fail(auth2, authError);
      }
    }
  } catch (e) {
    if (e instanceof FirebaseError) {
      throw e;
    }
    _fail(auth2, "network-request-failed");
  }
}
async function _performSignInRequest(auth2, method, path, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth2, method, path, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth2, "multi-factor-auth-required", {
      serverResponse
    });
  }
  return serverResponse;
}
function _getFinalTarget(auth2, host, path, query) {
  const base = `${host}${path}?${query}`;
  if (!auth2.config.emulator) {
    return `${auth2.config.apiScheme}://${base}`;
  }
  return _emulatorUrl(auth2.config, base);
}
class NetworkTimeout {
  constructor(auth2) {
    this.auth = auth2;
    this.timer = null;
    this.promise = new Promise((_, reject) => {
      this.timer = setTimeout(() => {
        return reject(_createError(this.auth, "timeout"));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function _makeTaggedError(auth2, code, response) {
  const errorParams = {
    appName: auth2.name
  };
  if (response.email) {
    errorParams.email = response.email;
  }
  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }
  const error2 = _createError(auth2, code, errorParams);
  error2.customData._tokenResponse = response;
  return error2;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function deleteAccount(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v1/accounts:delete", request);
}
async function getAccountInfo(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v1/accounts:lookup", request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return void 0;
  }
  try {
    const date = new Date(Number(utcTimestamp));
    if (!isNaN(date.getTime())) {
      return date.toUTCString();
    }
  } catch (e) {
  }
  return void 0;
}
async function getIdTokenResult(user, forceRefresh = false) {
  const userInternal = getModularInstance(user);
  const token = await userInternal.getIdToken(forceRefresh);
  const claims = _parseToken(token);
  _assert(claims && claims.exp && claims.auth_time && claims.iat, userInternal.auth, "internal-error");
  const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
  const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
  return {
    claims,
    token,
    authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
    issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
    expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
    signInProvider: signInProvider || null,
    signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
  };
}
function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1e3;
}
function _parseToken(token) {
  const [algorithm, payload, signature] = token.split(".");
  if (algorithm === void 0 || payload === void 0 || signature === void 0) {
    _logError("JWT malformed, contained fewer than 3 sections");
    return null;
  }
  try {
    const decoded = base64Decode(payload);
    if (!decoded) {
      _logError("Failed to decode base64 JWT payload");
      return null;
    }
    return JSON.parse(decoded);
  } catch (e) {
    _logError("Caught error parsing JWT payload as JSON", e);
    return null;
  }
}
function _tokenExpiresIn(token) {
  const parsedToken = _parseToken(token);
  _assert(parsedToken, "internal-error");
  _assert(typeof parsedToken.exp !== "undefined", "internal-error");
  _assert(typeof parsedToken.iat !== "undefined", "internal-error");
  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
  if (bypassAuthState) {
    return promise;
  }
  try {
    return await promise;
  } catch (e) {
    if (e instanceof FirebaseError && isUserInvalidated(e)) {
      if (user.auth.currentUser === user) {
        await user.auth.signOut();
      }
    }
    throw e;
  }
}
function isUserInvalidated({ code }) {
  return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ProactiveRefresh {
  constructor(user) {
    this.user = user;
    this.isRunning = false;
    this.timerId = null;
    this.errorBackoff = 3e4;
  }
  _start() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.schedule();
  }
  _stop() {
    if (!this.isRunning) {
      return;
    }
    this.isRunning = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
  }
  getInterval(wasError) {
    var _a;
    if (wasError) {
      const interval = this.errorBackoff;
      this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4);
      return interval;
    } else {
      this.errorBackoff = 3e4;
      const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
      const interval = expTime - Date.now() - 3e5;
      return Math.max(0, interval);
    }
  }
  schedule(wasError = false) {
    if (!this.isRunning) {
      return;
    }
    const interval = this.getInterval(wasError);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, interval);
  }
  async iteration() {
    try {
      await this.user.getIdToken(true);
    } catch (e) {
      if (e.code === `auth/${"network-request-failed"}`) {
        this.schedule(true);
      }
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UserMetadata {
  constructor(createdAt, lastLoginAt) {
    this.createdAt = createdAt;
    this.lastLoginAt = lastLoginAt;
    this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
    this.creationTime = utcTimestampToDateString(this.createdAt);
  }
  _copy(metadata) {
    this.createdAt = metadata.createdAt;
    this.lastLoginAt = metadata.lastLoginAt;
    this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _reloadWithoutSaving(user) {
  var _a;
  const auth2 = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(user, getAccountInfo(auth2, { idToken }));
  _assert(response === null || response === void 0 ? void 0 : response.users.length, auth2, "internal-error");
  const coreAccount = response.users[0];
  user._notifyReloadListener(coreAccount);
  const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
  const providerData = mergeProviderData(user.providerData, newProviderData);
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
  const updates = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };
  Object.assign(user, updates);
}
async function reload(user) {
  const userInternal = getModularInstance(user);
  await _reloadWithoutSaving(userInternal);
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
  const deduped = original.filter((o) => !newData.some((n) => n.providerId === o.providerId));
  return [...deduped, ...newData];
}
function extractProviderData(providers) {
  return providers.map((_a) => {
    var { providerId } = _a, provider = __rest(_a, ["providerId"]);
    return {
      providerId,
      uid: provider.rawId || "",
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function requestStsToken(auth2, refreshToken) {
  const response = await _performFetchWithErrorHandling(auth2, {}, () => {
    const body = querystring({
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    }).slice(1);
    const { tokenApiHost, apiKey } = auth2.config;
    const url = _getFinalTarget(auth2, tokenApiHost, "/v1/token", `key=${apiKey}`);
    return FetchProvider.fetch()(url, {
      method: "POST",
      headers: {
        "X-Client-Version": auth2._getSdkClientVersion(),
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body
    });
  });
  return {
    accessToken: response.access_token,
    expiresIn: response.expires_in,
    refreshToken: response.refresh_token
  };
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class StsTokenManager {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(response) {
    _assert(response.idToken, "internal-error");
    _assert(typeof response.idToken !== "undefined", "internal-error");
    _assert(typeof response.refreshToken !== "undefined", "internal-error");
    const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }
  async getToken(auth2, forceRefresh = false) {
    _assert(!this.accessToken || this.refreshToken, auth2, "user-token-expired");
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    if (this.refreshToken) {
      await this.refresh(auth2, this.refreshToken);
      return this.accessToken;
    }
    return null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(auth2, oldToken) {
    const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth2, oldToken);
    this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
  }
  updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
    this.refreshToken = refreshToken || null;
    this.accessToken = accessToken || null;
    this.expirationTime = Date.now() + expiresInSec * 1e3;
  }
  static fromJSON(appName, object) {
    const { refreshToken, accessToken, expirationTime } = object;
    const manager = new StsTokenManager();
    if (refreshToken) {
      _assert(typeof refreshToken === "string", "internal-error", {
        appName
      });
      manager.refreshToken = refreshToken;
    }
    if (accessToken) {
      _assert(typeof accessToken === "string", "internal-error", {
        appName
      });
      manager.accessToken = accessToken;
    }
    if (expirationTime) {
      _assert(typeof expirationTime === "number", "internal-error", {
        appName
      });
      manager.expirationTime = expirationTime;
    }
    return manager;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(stsTokenManager) {
    this.accessToken = stsTokenManager.accessToken;
    this.refreshToken = stsTokenManager.refreshToken;
    this.expirationTime = stsTokenManager.expirationTime;
  }
  _clone() {
    return Object.assign(new StsTokenManager(), this.toJSON());
  }
  _performRefresh() {
    return debugFail("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", { appName });
}
class UserImpl {
  constructor(_a) {
    var { uid, auth: auth2, stsTokenManager } = _a, opt = __rest(_a, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase";
    this.emailVerified = false;
    this.isAnonymous = false;
    this.tenantId = null;
    this.providerData = [];
    this.proactiveRefresh = new ProactiveRefresh(this);
    this.reloadUserInfo = null;
    this.reloadListener = null;
    this.uid = uid;
    this.auth = auth2;
    this.stsTokenManager = stsTokenManager;
    this.accessToken = stsTokenManager.accessToken;
    this.displayName = opt.displayName || null;
    this.email = opt.email || null;
    this.emailVerified = opt.emailVerified || false;
    this.phoneNumber = opt.phoneNumber || null;
    this.photoURL = opt.photoURL || null;
    this.isAnonymous = opt.isAnonymous || false;
    this.tenantId = opt.tenantId || null;
    this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
  }
  async getIdToken(forceRefresh) {
    const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
    _assert(accessToken, this.auth, "internal-error");
    if (this.accessToken !== accessToken) {
      this.accessToken = accessToken;
      await this.auth._persistUserIfCurrent(this);
      this.auth._notifyListenersIfCurrent(this);
    }
    return accessToken;
  }
  getIdTokenResult(forceRefresh) {
    return getIdTokenResult(this, forceRefresh);
  }
  reload() {
    return reload(this);
  }
  _assign(user) {
    if (this === user) {
      return;
    }
    _assert(this.uid === user.uid, this.auth, "internal-error");
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.isAnonymous = user.isAnonymous;
    this.tenantId = user.tenantId;
    this.providerData = user.providerData.map((userInfo) => Object.assign({}, userInfo));
    this.metadata._copy(user.metadata);
    this.stsTokenManager._assign(user.stsTokenManager);
  }
  _clone(auth2) {
    return new UserImpl(Object.assign(Object.assign({}, this), { auth: auth2, stsTokenManager: this.stsTokenManager._clone() }));
  }
  _onReload(callback) {
    _assert(!this.reloadListener, this.auth, "internal-error");
    this.reloadListener = callback;
    if (this.reloadUserInfo) {
      this._notifyReloadListener(this.reloadUserInfo);
      this.reloadUserInfo = null;
    }
  }
  _notifyReloadListener(userInfo) {
    if (this.reloadListener) {
      this.reloadListener(userInfo);
    } else {
      this.reloadUserInfo = userInfo;
    }
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(response, reload2 = false) {
    let tokensRefreshed = false;
    if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
      this.stsTokenManager.updateFromServerResponse(response);
      tokensRefreshed = true;
    }
    if (reload2) {
      await _reloadWithoutSaving(this);
    }
    await this.auth._persistUserIfCurrent(this);
    if (tokensRefreshed) {
      this.auth._notifyListenersIfCurrent(this);
    }
  }
  async delete() {
    const idToken = await this.getIdToken();
    await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
    this.stsTokenManager.clearRefreshToken();
    return this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((userInfo) => Object.assign({}, userInfo)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(auth2, object) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
    const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
    const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
    const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
    const tenantId = (_e = object.tenantId) !== null && _e !== void 0 ? _e : void 0;
    const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
    const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
    const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
    const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
    _assert(uid && plainObjectTokenManager, auth2, "internal-error");
    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
    _assert(typeof uid === "string", auth2, "internal-error");
    assertStringOrUndefined(displayName, auth2.name);
    assertStringOrUndefined(email, auth2.name);
    _assert(typeof emailVerified === "boolean", auth2, "internal-error");
    _assert(typeof isAnonymous === "boolean", auth2, "internal-error");
    assertStringOrUndefined(phoneNumber, auth2.name);
    assertStringOrUndefined(photoURL, auth2.name);
    assertStringOrUndefined(tenantId, auth2.name);
    assertStringOrUndefined(_redirectEventId, auth2.name);
    assertStringOrUndefined(createdAt, auth2.name);
    assertStringOrUndefined(lastLoginAt, auth2.name);
    const user = new UserImpl({
      uid,
      auth: auth2,
      email,
      emailVerified,
      displayName,
      isAnonymous,
      photoURL,
      phoneNumber,
      tenantId,
      stsTokenManager,
      createdAt,
      lastLoginAt
    });
    if (providerData && Array.isArray(providerData)) {
      user.providerData = providerData.map((userInfo) => Object.assign({}, userInfo));
    }
    if (_redirectEventId) {
      user._redirectEventId = _redirectEventId;
    }
    return user;
  }
  static async _fromIdTokenResponse(auth2, idTokenResponse, isAnonymous = false) {
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromServerResponse(idTokenResponse);
    const user = new UserImpl({
      uid: idTokenResponse.localId,
      auth: auth2,
      stsTokenManager,
      isAnonymous
    });
    await _reloadWithoutSaving(user);
    return user;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class InMemoryPersistence {
  constructor() {
    this.type = "NONE";
    this.storage = {};
  }
  async _isAvailable() {
    return true;
  }
  async _set(key, value) {
    this.storage[key] = value;
  }
  async _get(key) {
    const value = this.storage[key];
    return value === void 0 ? null : value;
  }
  async _remove(key) {
    delete this.storage[key];
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
}
InMemoryPersistence.type = "NONE";
const inMemoryPersistence = InMemoryPersistence;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _persistenceKeyName(key, apiKey, appName) {
  return `${"firebase"}:${key}:${apiKey}:${appName}`;
}
class PersistenceUserManager {
  constructor(persistence, auth2, userKey) {
    this.persistence = persistence;
    this.auth = auth2;
    this.userKey = userKey;
    const { config, name: name2 } = this.auth;
    this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name2);
    this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name2);
    this.boundEventHandler = auth2._onStorageEvent.bind(auth2);
    this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(user) {
    return this.persistence._set(this.fullUserKey, user.toJSON());
  }
  async getCurrentUser() {
    const blob = await this.persistence._get(this.fullUserKey);
    return blob ? UserImpl._fromJSON(this.auth, blob) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(newPersistence) {
    if (this.persistence === newPersistence) {
      return;
    }
    const currentUser = await this.getCurrentUser();
    await this.removeCurrentUser();
    this.persistence = newPersistence;
    if (currentUser) {
      return this.setCurrentUser(currentUser);
    }
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(auth2, persistenceHierarchy, userKey = "authUser") {
    if (!persistenceHierarchy.length) {
      return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth2, userKey);
    }
    const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
      if (await persistence._isAvailable()) {
        return persistence;
      }
      return void 0;
    }))).filter((persistence) => persistence);
    let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
    const key = _persistenceKeyName(userKey, auth2.config.apiKey, auth2.name);
    let userToMigrate = null;
    for (const persistence of persistenceHierarchy) {
      try {
        const blob = await persistence._get(key);
        if (blob) {
          const user = UserImpl._fromJSON(auth2, blob);
          if (persistence !== selectedPersistence) {
            userToMigrate = user;
          }
          selectedPersistence = persistence;
          break;
        }
      } catch (_a) {
      }
    }
    const migrationHierarchy = availablePersistences.filter((p) => p._shouldAllowMigration);
    if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
      return new PersistenceUserManager(selectedPersistence, auth2, userKey);
    }
    selectedPersistence = migrationHierarchy[0];
    if (userToMigrate) {
      await selectedPersistence._set(key, userToMigrate.toJSON());
    }
    await Promise.all(persistenceHierarchy.map(async (persistence) => {
      if (persistence !== selectedPersistence) {
        try {
          await persistence._remove(key);
        } catch (_a) {
        }
      }
    }));
    return new PersistenceUserManager(selectedPersistence, auth2, userKey);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
    return "Opera";
  } else if (_isIEMobile(ua)) {
    return "IEMobile";
  } else if (ua.includes("msie") || ua.includes("trident/")) {
    return "IE";
  } else if (ua.includes("edge/")) {
    return "Edge";
  } else if (_isFirefox(ua)) {
    return "Firefox";
  } else if (ua.includes("silk/")) {
    return "Silk";
  } else if (_isBlackBerry(ua)) {
    return "Blackberry";
  } else if (_isWebOS(ua)) {
    return "Webos";
  } else if (_isSafari(ua)) {
    return "Safari";
  } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
    return "Chrome";
  } else if (_isAndroid(ua)) {
    return "Android";
  } else {
    const re = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }
  return "Other";
}
function _isFirefox(ua = getUA()) {
  return /firefox\//i.test(ua);
}
function _isSafari(userAgent = getUA()) {
  const ua = userAgent.toLowerCase();
  return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = getUA()) {
  return /crios\//i.test(ua);
}
function _isIEMobile(ua = getUA()) {
  return /iemobile/i.test(ua);
}
function _isAndroid(ua = getUA()) {
  return /android/i.test(ua);
}
function _isBlackBerry(ua = getUA()) {
  return /blackberry/i.test(ua);
}
function _isWebOS(ua = getUA()) {
  return /webos/i.test(ua);
}
function _isIOS(ua = getUA()) {
  return /iphone|ipad|ipod/i.test(ua);
}
function _isIOSStandalone(ua = getUA()) {
  var _a;
  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
  return isIE() && document.documentMode === 10;
}
function _isMobileBrowser(ua = getUA()) {
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _isIframe() {
  try {
    return !!(window && window !== window.top);
  } catch (e) {
    return false;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;
  switch (clientPlatform) {
    case "Browser":
      reportedPlatform = _getBrowserName(getUA());
      break;
    case "Worker":
      reportedPlatform = `${_getBrowserName(getUA())}-${clientPlatform}`;
      break;
    default:
      reportedPlatform = clientPlatform;
  }
  const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
  return `${reportedPlatform}/${"JsCore"}/${SDK_VERSION$1}/${reportedFrameworks}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AuthImpl {
  constructor(app2, config) {
    this.app = app2;
    this.config = config;
    this.currentUser = null;
    this.emulatorConfig = null;
    this.operations = Promise.resolve();
    this.authStateSubscription = new Subscription(this);
    this.idTokenSubscription = new Subscription(this);
    this.redirectUser = null;
    this.isProactiveRefreshEnabled = false;
    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
    this.lastNotifiedUid = void 0;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = { appVerificationDisabledForTesting: false };
    this.frameworks = [];
    this.name = app2.name;
    this.clientVersion = config.sdkClientVersion;
  }
  _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    }
    this._initializationPromise = this.queue(async () => {
      var _a;
      if (this._deleted) {
        return;
      }
      this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
      if (this._deleted) {
        return;
      }
      if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
        await this._popupRedirectResolver._initialize(this);
      }
      await this.initializeCurrentUser(popupRedirectResolver);
      if (this._deleted) {
        return;
      }
      this._isInitialized = true;
    });
    return this._initializationPromise;
  }
  async _onStorageEvent() {
    if (this._deleted) {
      return;
    }
    const user = await this.assertedPersistence.getCurrentUser();
    if (!this.currentUser && !user) {
      return;
    }
    if (this.currentUser && user && this.currentUser.uid === user.uid) {
      this._currentUser._assign(user);
      await this.currentUser.getIdToken();
      return;
    }
    await this._updateCurrentUser(user);
  }
  async initializeCurrentUser(popupRedirectResolver) {
    var _a;
    let storedUser = await this.assertedPersistence.getCurrentUser();
    if (popupRedirectResolver && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
      const storedUserEventId = storedUser === null || storedUser === void 0 ? void 0 : storedUser._redirectEventId;
      const result = await this.tryRedirectSignIn(popupRedirectResolver);
      if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
        storedUser = result.user;
      }
    }
    if (!storedUser) {
      return this.directlySetCurrentUser(null);
    }
    if (!storedUser._redirectEventId) {
      return this.reloadAndSetCurrentUserOrClear(storedUser);
    }
    _assert(this._popupRedirectResolver, this, "argument-error");
    await this.getOrInitRedirectPersistenceManager();
    if (this.redirectUser && this.redirectUser._redirectEventId === storedUser._redirectEventId) {
      return this.directlySetCurrentUser(storedUser);
    }
    return this.reloadAndSetCurrentUserOrClear(storedUser);
  }
  async tryRedirectSignIn(redirectResolver) {
    let result = null;
    try {
      result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
    } catch (e) {
      await this._setRedirectUser(null);
    }
    return result;
  }
  async reloadAndSetCurrentUserOrClear(user) {
    try {
      await _reloadWithoutSaving(user);
    } catch (e) {
      if (e.code !== `auth/${"network-request-failed"}`) {
        return this.directlySetCurrentUser(null);
      }
    }
    return this.directlySetCurrentUser(user);
  }
  useDeviceLanguage() {
    this.languageCode = _getUserLanguage();
  }
  async _delete() {
    this._deleted = true;
  }
  async updateCurrentUser(userExtern) {
    const user = userExtern ? getModularInstance(userExtern) : null;
    if (user) {
      _assert(user.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
    }
    return this._updateCurrentUser(user && user._clone(this));
  }
  async _updateCurrentUser(user) {
    if (this._deleted) {
      return;
    }
    if (user) {
      _assert(this.tenantId === user.tenantId, this, "tenant-id-mismatch");
    }
    return this.queue(async () => {
      await this.directlySetCurrentUser(user);
      this.notifyAuthListeners();
    });
  }
  async signOut() {
    if (this.redirectPersistenceManager || this._popupRedirectResolver) {
      await this._setRedirectUser(null);
    }
    return this._updateCurrentUser(null);
  }
  setPersistence(persistence) {
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(_getInstance(persistence));
    });
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(errorMap) {
    this._errorFactory = new ErrorFactory("auth", "Firebase", errorMap());
  }
  onAuthStateChanged(nextOrObserver, error2, completed) {
    return this.registerStateListener(this.authStateSubscription, nextOrObserver, error2, completed);
  }
  onIdTokenChanged(nextOrObserver, error2, completed) {
    return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error2, completed);
  }
  toJSON() {
    var _a;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
    };
  }
  async _setRedirectUser(user, popupRedirectResolver) {
    const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
    return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
  }
  async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
    if (!this.redirectPersistenceManager) {
      const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
      _assert(resolver, this, "argument-error");
      this.redirectPersistenceManager = await PersistenceUserManager.create(this, [_getInstance(resolver._redirectPersistence)], "redirectUser");
      this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(id) {
    var _a, _b;
    if (this._isInitialized) {
      await this.queue(async () => {
      });
    }
    if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
      return this._currentUser;
    }
    if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
      return this.redirectUser;
    }
    return null;
  }
  async _persistUserIfCurrent(user) {
    if (user === this.currentUser) {
      return this.queue(async () => this.directlySetCurrentUser(user));
    }
  }
  _notifyListenersIfCurrent(user) {
    if (user === this.currentUser) {
      this.notifyAuthListeners();
    }
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = true;
    if (this.currentUser) {
      this._currentUser._startProactiveRefresh();
    }
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = false;
    if (this.currentUser) {
      this._currentUser._stopProactiveRefresh();
    }
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var _a, _b;
    if (!this._isInitialized) {
      return;
    }
    this.idTokenSubscription.next(this.currentUser);
    const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
    if (this.lastNotifiedUid !== currentUid) {
      this.lastNotifiedUid = currentUid;
      this.authStateSubscription.next(this.currentUser);
    }
  }
  registerStateListener(subscription, nextOrObserver, error2, completed) {
    if (this._deleted) {
      return () => {
      };
    }
    const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
    const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    _assert(promise, this, "internal-error");
    promise.then(() => cb(this.currentUser));
    if (typeof nextOrObserver === "function") {
      return subscription.addObserver(nextOrObserver, error2, completed);
    } else {
      return subscription.addObserver(nextOrObserver);
    }
  }
  async directlySetCurrentUser(user) {
    if (this.currentUser && this.currentUser !== user) {
      this._currentUser._stopProactiveRefresh();
      if (user && this.isProactiveRefreshEnabled) {
        user._startProactiveRefresh();
      }
    }
    this.currentUser = user;
    if (user) {
      await this.assertedPersistence.setCurrentUser(user);
    } else {
      await this.assertedPersistence.removeCurrentUser();
    }
  }
  queue(action) {
    this.operations = this.operations.then(action, action);
    return this.operations;
  }
  get assertedPersistence() {
    _assert(this.persistenceManager, this, "internal-error");
    return this.persistenceManager;
  }
  _logFramework(framework) {
    if (!framework || this.frameworks.includes(framework)) {
      return;
    }
    this.frameworks.push(framework);
    this.frameworks.sort();
    this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
  }
  _getFrameworks() {
    return this.frameworks;
  }
  _getSdkClientVersion() {
    return this.clientVersion;
  }
}
function _castAuth(auth2) {
  return getModularInstance(auth2);
}
class Subscription {
  constructor(auth2) {
    this.auth = auth2;
    this.observer = null;
    this.addObserver = createSubscribe((observer) => this.observer = observer);
  }
  get next() {
    _assert(this.observer, this.auth, "internal-error");
    return this.observer.next.bind(this.observer);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AuthCredential {
  constructor(providerId, signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  toJSON() {
    return debugFail("not implemented");
  }
  _getIdTokenResponse(_auth) {
    return debugFail("not implemented");
  }
  _linkToIdToken(_auth, _idToken) {
    return debugFail("not implemented");
  }
  _getReauthenticationResolver(_auth) {
    return debugFail("not implemented");
  }
}
async function updateEmailPassword(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v1/accounts:update", request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signInWithPassword(auth2, request) {
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth2, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signInWithEmailLink$1(auth2, request) {
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth2, request));
}
async function signInWithEmailLinkForLinking(auth2, request) {
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth2, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EmailAuthCredential extends AuthCredential {
  constructor(_email, _password, signInMethod, _tenantId = null) {
    super("password", signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  static _fromEmailAndPassword(email, password) {
    return new EmailAuthCredential(email, password, "password");
  }
  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
      if (obj.signInMethod === "password") {
        return this._fromEmailAndPassword(obj.email, obj.password);
      } else if (obj.signInMethod === "emailLink") {
        return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
      }
    }
    return null;
  }
  async _getIdTokenResponse(auth2) {
    switch (this.signInMethod) {
      case "password":
        return signInWithPassword(auth2, {
          returnSecureToken: true,
          email: this._email,
          password: this._password
        });
      case "emailLink":
        return signInWithEmailLink$1(auth2, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth2, "internal-error");
    }
  }
  async _linkToIdToken(auth2, idToken) {
    switch (this.signInMethod) {
      case "password":
        return updateEmailPassword(auth2, {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password
        });
      case "emailLink":
        return signInWithEmailLinkForLinking(auth2, {
          idToken,
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(auth2, "internal-error");
    }
  }
  _getReauthenticationResolver(auth2) {
    return this._getIdTokenResponse(auth2);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signInWithIdp(auth2, request) {
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth2, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const IDP_REQUEST_URI$1 = "http://localhost";
class OAuthCredential extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  static _fromParams(params) {
    const cred = new OAuthCredential(params.providerId, params.signInMethod);
    if (params.idToken || params.accessToken) {
      if (params.idToken) {
        cred.idToken = params.idToken;
      }
      if (params.accessToken) {
        cred.accessToken = params.accessToken;
      }
      if (params.nonce && !params.pendingToken) {
        cred.nonce = params.nonce;
      }
      if (params.pendingToken) {
        cred.pendingToken = params.pendingToken;
      }
    } else if (params.oauthToken && params.oauthTokenSecret) {
      cred.accessToken = params.oauthToken;
      cred.secret = params.oauthTokenSecret;
    } else {
      _fail("argument-error");
    }
    return cred;
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const { providerId, signInMethod } = obj, rest = __rest(obj, ["providerId", "signInMethod"]);
    if (!providerId || !signInMethod) {
      return null;
    }
    const cred = new OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || void 0;
    cred.accessToken = rest.accessToken || void 0;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  _getIdTokenResponse(auth2) {
    const request = this.buildRequest();
    return signInWithIdp(auth2, request);
  }
  _linkToIdToken(auth2, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth2, request);
  }
  _getReauthenticationResolver(auth2) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth2, request);
  }
  buildRequest() {
    const request = {
      requestUri: IDP_REQUEST_URI$1,
      returnSecureToken: true
    };
    if (this.pendingToken) {
      request.pendingToken = this.pendingToken;
    } else {
      const postBody = {};
      if (this.idToken) {
        postBody["id_token"] = this.idToken;
      }
      if (this.accessToken) {
        postBody["access_token"] = this.accessToken;
      }
      if (this.secret) {
        postBody["oauth_token_secret"] = this.secret;
      }
      postBody["providerId"] = this.providerId;
      if (this.nonce && !this.pendingToken) {
        postBody["nonce"] = this.nonce;
      }
      request.postBody = querystring(postBody);
    }
    return request;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function parseMode(mode) {
  switch (mode) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function parseDeepLink(url) {
  const link = querystringDecode(extractQuerystring(url))["link"];
  const doubleDeepLink = link ? querystringDecode(extractQuerystring(link))["deep_link_id"] : null;
  const iOSDeepLink = querystringDecode(extractQuerystring(url))["deep_link_id"];
  const iOSDoubleDeepLink = iOSDeepLink ? querystringDecode(extractQuerystring(iOSDeepLink))["link"] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
class ActionCodeURL {
  constructor(actionLink) {
    var _a, _b, _c, _d, _e, _f;
    const searchParams = querystringDecode(extractQuerystring(actionLink));
    const apiKey = (_a = searchParams["apiKey"]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams["oobCode"]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams["mode"]) !== null && _c !== void 0 ? _c : null);
    _assert(apiKey && code && operation, "argument-error");
    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams["continueUrl"]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e = searchParams["languageCode"]) !== null && _e !== void 0 ? _e : null;
    this.tenantId = (_f = searchParams["tenantId"]) !== null && _f !== void 0 ? _f : null;
  }
  static parseLink(link) {
    const actionLink = parseDeepLink(link);
    try {
      return new ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class EmailAuthProvider {
  constructor() {
    this.providerId = EmailAuthProvider.PROVIDER_ID;
  }
  static credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  static credentialWithLink(email, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(actionCodeUrl, "argument-error");
    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  }
}
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FederatedAuthProvider {
  constructor(providerId) {
    this.providerId = providerId;
    this.defaultLanguageCode = null;
    this.customParameters = {};
  }
  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class BaseOAuthProvider extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    this.scopes = [];
  }
  addScope(scope) {
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }
    return this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FacebookAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("facebook.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: FacebookAuthProvider.PROVIDER_ID,
      signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential2) {
    return FacebookAuthProvider.credentialFromTaggedObject(userCredential2);
  }
  static credentialFromError(error2) {
    return FacebookAuthProvider.credentialFromTaggedObject(error2.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
}
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GoogleAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("google.com");
    this.addScope("profile");
  }
  static credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: GoogleAuthProvider.PROVIDER_ID,
      signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken,
      accessToken
    });
  }
  static credentialFromResult(userCredential2) {
    return GoogleAuthProvider.credentialFromTaggedObject(userCredential2);
  }
  static credentialFromError(error2) {
    return GoogleAuthProvider.credentialFromTaggedObject(error2.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse) {
      return null;
    }
    const { oauthIdToken, oauthAccessToken } = tokenResponse;
    if (!oauthIdToken && !oauthAccessToken) {
      return null;
    }
    try {
      return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
}
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class GithubAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("github.com");
  }
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: GithubAuthProvider.PROVIDER_ID,
      signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken
    });
  }
  static credentialFromResult(userCredential2) {
    return GithubAuthProvider.credentialFromTaggedObject(userCredential2);
  }
  static credentialFromError(error2) {
    return GithubAuthProvider.credentialFromTaggedObject(error2.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
}
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class TwitterAuthProvider extends BaseOAuthProvider {
  constructor() {
    super("twitter.com");
  }
  static credential(token, secret) {
    return OAuthCredential._fromParams({
      providerId: TwitterAuthProvider.PROVIDER_ID,
      signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token,
      oauthTokenSecret: secret
    });
  }
  static credentialFromResult(userCredential2) {
    return TwitterAuthProvider.credentialFromTaggedObject(userCredential2);
  }
  static credentialFromError(error2) {
    return TwitterAuthProvider.credentialFromTaggedObject(error2.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse) {
      return null;
    }
    const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
    if (!oauthAccessToken || !oauthTokenSecret) {
      return null;
    }
    try {
      return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
    } catch (_a) {
      return null;
    }
  }
}
TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
TwitterAuthProvider.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signUp(auth2, request) {
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signUp", _addTidIfNecessary(auth2, request));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class UserCredentialImpl {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }
  static async _fromIdTokenResponse(auth2, operationType, idTokenResponse, isAnonymous = false) {
    const user = await UserImpl._fromIdTokenResponse(auth2, idTokenResponse, isAnonymous);
    const providerId = providerIdForResponse(idTokenResponse);
    const userCred = new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: idTokenResponse,
      operationType
    });
    return userCred;
  }
  static async _forOperation(user, operationType, response) {
    await user._updateTokensIfNecessary(response, true);
    const providerId = providerIdForResponse(response);
    return new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: response,
      operationType
    });
  }
}
function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }
  if ("phoneNumber" in response) {
    return "phone";
  }
  return null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function signInAnonymously$1(auth2) {
  var _a;
  const authInternal = _castAuth(auth2);
  await authInternal._initializationPromise;
  if ((_a = authInternal.currentUser) === null || _a === void 0 ? void 0 : _a.isAnonymous) {
    return new UserCredentialImpl({
      user: authInternal.currentUser,
      providerId: null,
      operationType: "signIn"
    });
  }
  const response = await signUp(authInternal, {
    returnSecureToken: true
  });
  const userCredential2 = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response, true);
  await authInternal._updateCurrentUser(userCredential2.user);
  return userCredential2;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MultiFactorError extends FirebaseError {
  constructor(auth2, error2, operationType, user) {
    var _a;
    super(error2.code, error2.message);
    this.operationType = operationType;
    this.user = user;
    this.name = "FirebaseError";
    Object.setPrototypeOf(this, MultiFactorError.prototype);
    this.appName = auth2.name;
    this.code = error2.code;
    this.tenantId = (_a = auth2.tenantId) !== null && _a !== void 0 ? _a : void 0;
    this.serverResponse = error2.customData.serverResponse;
  }
  static _fromErrorAndOperation(auth2, error2, operationType, user) {
    return new MultiFactorError(auth2, error2, operationType, user);
  }
}
function _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth2) : credential._getIdTokenResponse(auth2);
  return idTokenProvider.catch((error2) => {
    if (error2.code === `auth/${"multi-factor-auth-required"}`) {
      throw MultiFactorError._fromErrorAndOperation(auth2, error2, operationType, user);
    }
    throw error2;
  });
}
async function _link$1(user, credential, bypassAuthState = false) {
  const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
  return UserCredentialImpl._forOperation(user, "link", response);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _reauthenticate(user, credential, bypassAuthState = false) {
  const { auth: auth2 } = user;
  const operationType = "reauthenticate";
  try {
    const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential, user), bypassAuthState);
    _assert(response.idToken, auth2, "internal-error");
    const parsed = _parseToken(response.idToken);
    _assert(parsed, auth2, "internal-error");
    const { sub: localId } = parsed;
    _assert(user.uid === localId, auth2, "user-mismatch");
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
      _fail(auth2, "user-mismatch");
    }
    throw e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _signInWithCredential(auth2, credential, bypassAuthState = false) {
  const operationType = "signIn";
  const response = await _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential);
  const userCredential2 = await UserCredentialImpl._fromIdTokenResponse(auth2, operationType, response);
  if (!bypassAuthState) {
    await auth2._updateCurrentUser(userCredential2.user);
  }
  return userCredential2;
}
async function signInWithCredential(auth2, credential) {
  return _signInWithCredential(_castAuth(auth2), credential);
}
async function createUserWithEmailAndPassword$1(auth2, email, password) {
  const authInternal = _castAuth(auth2);
  const response = await signUp(authInternal, {
    returnSecureToken: true,
    email,
    password
  });
  const userCredential2 = await UserCredentialImpl._fromIdTokenResponse(authInternal, "signIn", response);
  await authInternal._updateCurrentUser(userCredential2.user);
  return userCredential2;
}
function signInWithEmailAndPassword$1(auth2, email, password) {
  return signInWithCredential(getModularInstance(auth2), EmailAuthProvider.credential(email, password));
}
function onAuthStateChanged$1(auth2, nextOrObserver, error2, completed) {
  return getModularInstance(auth2).onAuthStateChanged(nextOrObserver, error2, completed);
}
function signOut$1(auth2) {
  return getModularInstance(auth2).signOut();
}
const STORAGE_AVAILABLE_KEY = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class BrowserPersistenceClass {
  constructor(storage, type) {
    this.storage = storage;
    this.type = type;
  }
  _isAvailable() {
    try {
      if (!this.storage) {
        return Promise.resolve(false);
      }
      this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
      this.storage.removeItem(STORAGE_AVAILABLE_KEY);
      return Promise.resolve(true);
    } catch (_a) {
      return Promise.resolve(false);
    }
  }
  _set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }
  _get(key) {
    const json = this.storage.getItem(key);
    return Promise.resolve(json ? JSON.parse(json) : null);
  }
  _remove(key) {
    this.storage.removeItem(key);
    return Promise.resolve();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _iframeCannotSyncWebStorage() {
  const ua = getUA();
  return _isSafari(ua) || _isIOS(ua);
}
const _POLLING_INTERVAL_MS$1 = 1e3;
const IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
class BrowserLocalPersistence extends BrowserPersistenceClass {
  constructor() {
    super(window.localStorage, "LOCAL");
    this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.safariLocalStorageNotSynced = _iframeCannotSyncWebStorage() && _isIframe();
    this.fallbackToPolling = _isMobileBrowser();
    this._shouldAllowMigration = true;
  }
  forAllChangedKeys(cb) {
    for (const key of Object.keys(this.listeners)) {
      const newValue = this.storage.getItem(key);
      const oldValue = this.localCache[key];
      if (newValue !== oldValue) {
        cb(key, oldValue, newValue);
      }
    }
  }
  onStorageEvent(event, poll = false) {
    if (!event.key) {
      this.forAllChangedKeys((key2, _oldValue, newValue) => {
        this.notifyListeners(key2, newValue);
      });
      return;
    }
    const key = event.key;
    if (poll) {
      this.detachListener();
    } else {
      this.stopPolling();
    }
    if (this.safariLocalStorageNotSynced) {
      const storedValue2 = this.storage.getItem(key);
      if (event.newValue !== storedValue2) {
        if (event.newValue !== null) {
          this.storage.setItem(key, event.newValue);
        } else {
          this.storage.removeItem(key);
        }
      } else if (this.localCache[key] === event.newValue && !poll) {
        return;
      }
    }
    const triggerListeners = () => {
      const storedValue2 = this.storage.getItem(key);
      if (!poll && this.localCache[key] === storedValue2) {
        return;
      }
      this.notifyListeners(key, storedValue2);
    };
    const storedValue = this.storage.getItem(key);
    if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
      setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
    } else {
      triggerListeners();
    }
  }
  notifyListeners(key, value) {
    this.localCache[key] = value;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(value ? JSON.parse(value) : value);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((key, oldValue, newValue) => {
        this.onStorageEvent(new StorageEvent("storage", {
          key,
          oldValue,
          newValue
        }), true);
      });
    }, _POLLING_INTERVAL_MS$1);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      if (this.fallbackToPolling) {
        this.startPolling();
      } else {
        this.attachListener();
      }
    }
    if (!this.listeners[key]) {
      this.listeners[key] = new Set();
      this.localCache[key] = this.storage.getItem(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.detachListener();
      this.stopPolling();
    }
  }
  async _set(key, value) {
    await super._set(key, value);
    this.localCache[key] = JSON.stringify(value);
  }
  async _get(key) {
    const value = await super._get(key);
    this.localCache[key] = JSON.stringify(value);
    return value;
  }
  async _remove(key) {
    await super._remove(key);
    delete this.localCache[key];
  }
}
BrowserLocalPersistence.type = "LOCAL";
const browserLocalPersistence = BrowserLocalPersistence;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class BrowserSessionPersistence extends BrowserPersistenceClass {
  constructor() {
    super(window.sessionStorage, "SESSION");
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
}
BrowserSessionPersistence.type = "SESSION";
const browserSessionPersistence = BrowserSessionPersistence;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _allSettled(promises) {
  return Promise.all(promises.map(async (promise) => {
    try {
      const value = await promise;
      return {
        fulfilled: true,
        value
      };
    } catch (reason) {
      return {
        fulfilled: false,
        reason
      };
    }
  }));
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Receiver {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  static _getInstance(eventTarget) {
    const existingInstance = this.receivers.find((receiver) => receiver.isListeningto(eventTarget));
    if (existingInstance) {
      return existingInstance;
    }
    const newInstance = new Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  }
  isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
  async handleEvent(event) {
    const messageEvent = event;
    const { eventId, eventType, data } = messageEvent.data;
    const handlers = this.handlersMap[eventType];
    if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
      return;
    }
    messageEvent.ports[0].postMessage({
      status: "ack",
      eventId,
      eventType
    });
    const promises = Array.from(handlers).map(async (handler) => handler(messageEvent.origin, data));
    const response = await _allSettled(promises);
    messageEvent.ports[0].postMessage({
      status: "done",
      eventId,
      eventType,
      response
    });
  }
  _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener("message", this.boundEventHandler);
    }
    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = new Set();
    }
    this.handlersMap[eventType].add(eventHandler);
  }
  _unsubscribe(eventType, eventHandler) {
    if (this.handlersMap[eventType] && eventHandler) {
      this.handlersMap[eventType].delete(eventHandler);
    }
    if (!eventHandler || this.handlersMap[eventType].size === 0) {
      delete this.handlersMap[eventType];
    }
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.removeEventListener("message", this.boundEventHandler);
    }
  }
}
Receiver.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _generateEventId(prefix = "", digits = 10) {
  let random = "";
  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }
  return prefix + random;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sender {
  constructor(target) {
    this.target = target;
    this.handlers = new Set();
  }
  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
      handler.messageChannel.port1.close();
    }
    this.handlers.delete(handler);
  }
  async _send(eventType, data, timeout = 50) {
    const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    if (!messageChannel) {
      throw new Error("connection_unavailable");
    }
    let completionTimer;
    let handler;
    return new Promise((resolve, reject) => {
      const eventId = _generateEventId("", 20);
      messageChannel.port1.start();
      const ackTimer = setTimeout(() => {
        reject(new Error("unsupported_event"));
      }, timeout);
      handler = {
        messageChannel,
        onMessage(event) {
          const messageEvent = event;
          if (messageEvent.data.eventId !== eventId) {
            return;
          }
          switch (messageEvent.data.status) {
            case "ack":
              clearTimeout(ackTimer);
              completionTimer = setTimeout(() => {
                reject(new Error("timeout"));
              }, 3e3);
              break;
            case "done":
              clearTimeout(completionTimer);
              resolve(messageEvent.data.response);
              break;
            default:
              clearTimeout(ackTimer);
              clearTimeout(completionTimer);
              reject(new Error("invalid_response"));
              break;
          }
        }
      };
      this.handlers.add(handler);
      messageChannel.port1.addEventListener("message", handler.onMessage);
      this.target.postMessage({
        eventType,
        eventId,
        data
      }, [messageChannel.port2]);
    }).finally(() => {
      if (handler) {
        this.removeMessageHandler(handler);
      }
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _window() {
  return window;
}
function _setWindowLocation(url) {
  _window().location.href = url;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _isWorker() {
  return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
  if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
    return null;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active;
  } catch (_a) {
    return null;
  }
}
function _getServiceWorkerController() {
  var _a;
  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME = "firebaseLocalStorageDb";
const DB_VERSION = 1;
const DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
const DB_DATA_KEYPATH = "fbase_key";
class DBPromise {
  constructor(request) {
    this.request = request;
  }
  toPromise() {
    return new Promise((resolve, reject) => {
      this.request.addEventListener("success", () => {
        resolve(this.request.result);
      });
      this.request.addEventListener("error", () => {
        reject(this.request.error);
      });
    });
  }
}
function getObjectStore(db2, isReadWrite) {
  return db2.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME);
  return new DBPromise(request).toPromise();
}
function _openDatabase() {
  const request = indexedDB.open(DB_NAME, DB_VERSION);
  return new Promise((resolve, reject) => {
    request.addEventListener("error", () => {
      reject(request.error);
    });
    request.addEventListener("upgradeneeded", () => {
      const db2 = request.result;
      try {
        db2.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener("success", async () => {
      const db2 = request.result;
      if (!db2.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        db2.close();
        await _deleteDatabase();
        resolve(await _openDatabase());
      } else {
        resolve(db2);
      }
    });
  });
}
async function _putObject(db2, key, value) {
  const request = getObjectStore(db2, true).put({
    [DB_DATA_KEYPATH]: key,
    value
  });
  return new DBPromise(request).toPromise();
}
async function getObject(db2, key) {
  const request = getObjectStore(db2, false).get(key);
  const data = await new DBPromise(request).toPromise();
  return data === void 0 ? null : data.value;
}
function _deleteObject(db2, key) {
  const request = getObjectStore(db2, true).delete(key);
  return new DBPromise(request).toPromise();
}
const _POLLING_INTERVAL_MS = 800;
const _TRANSACTION_RETRY_COUNT = 3;
class IndexedDBLocalPersistence {
  constructor() {
    this.type = "LOCAL";
    this._shouldAllowMigration = true;
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.pendingWrites = 0;
    this.receiver = null;
    this.sender = null;
    this.serviceWorkerReceiverAvailable = false;
    this.activeServiceWorker = null;
    this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    if (this.db) {
      return this.db;
    }
    this.db = await _openDatabase();
    return this.db;
  }
  async _withRetries(op) {
    let numAttempts = 0;
    while (true) {
      try {
        const db2 = await this._openDb();
        return await op(db2);
      } catch (e) {
        if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
          throw e;
        }
        if (this.db) {
          this.db.close();
          this.db = void 0;
        }
      }
    }
  }
  async initializeServiceWorkerMessaging() {
    return _isWorker() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
    this.receiver._subscribe("keyChanged", async (_origin, data) => {
      const keys = await this._poll();
      return {
        keyProcessed: keys.includes(data.key)
      };
    });
    this.receiver._subscribe("ping", async (_origin, _data) => {
      return ["keyChanged"];
    });
  }
  async initializeSender() {
    var _a, _b;
    this.activeServiceWorker = await _getActiveServiceWorker();
    if (!this.activeServiceWorker) {
      return;
    }
    this.sender = new Sender(this.activeServiceWorker);
    const results = await this.sender._send("ping", {}, 800);
    if (!results) {
      return;
    }
    if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes("keyChanged"))) {
      this.serviceWorkerReceiverAvailable = true;
    }
  }
  async notifyServiceWorker(key) {
    if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
      return;
    }
    try {
      await this.sender._send("keyChanged", { key }, this.serviceWorkerReceiverAvailable ? 800 : 50);
    } catch (_a) {
    }
  }
  async _isAvailable() {
    try {
      if (!indexedDB) {
        return false;
      }
      const db2 = await _openDatabase();
      await _putObject(db2, STORAGE_AVAILABLE_KEY, "1");
      await _deleteObject(db2, STORAGE_AVAILABLE_KEY);
      return true;
    } catch (_a) {
    }
    return false;
  }
  async _withPendingWrite(write) {
    this.pendingWrites++;
    try {
      await write();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(key, value) {
    return this._withPendingWrite(async () => {
      await this._withRetries((db2) => _putObject(db2, key, value));
      this.localCache[key] = value;
      return this.notifyServiceWorker(key);
    });
  }
  async _get(key) {
    const obj = await this._withRetries((db2) => getObject(db2, key));
    this.localCache[key] = obj;
    return obj;
  }
  async _remove(key) {
    return this._withPendingWrite(async () => {
      await this._withRetries((db2) => _deleteObject(db2, key));
      delete this.localCache[key];
      return this.notifyServiceWorker(key);
    });
  }
  async _poll() {
    const result = await this._withRetries((db2) => {
      const getAllRequest = getObjectStore(db2, false).getAll();
      return new DBPromise(getAllRequest).toPromise();
    });
    if (!result) {
      return [];
    }
    if (this.pendingWrites !== 0) {
      return [];
    }
    const keys = [];
    const keysInResult = new Set();
    for (const { fbase_key: key, value } of result) {
      keysInResult.add(key);
      if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
        this.notifyListeners(key, value);
        keys.push(key);
      }
    }
    for (const localKey of Object.keys(this.localCache)) {
      if (this.localCache[localKey] && !keysInResult.has(localKey)) {
        this.notifyListeners(localKey, null);
        keys.push(localKey);
      }
    }
    return keys;
  }
  notifyListeners(key, newValue) {
    this.localCache[key] = newValue;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(newValue);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      this.startPolling();
    }
    if (!this.listeners[key]) {
      this.listeners[key] = new Set();
      void this._get(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.stopPolling();
    }
  }
}
IndexedDBLocalPersistence.type = "LOCAL";
const indexedDBLocalPersistence = IndexedDBLocalPersistence;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
function _loadJS(url) {
  return new Promise((resolve, reject) => {
    const el = document.createElement("script");
    el.setAttribute("src", url);
    el.onload = resolve;
    el.onerror = (e) => {
      const error2 = _createError("internal-error");
      error2.customData = e;
      reject(error2);
    };
    el.type = "text/javascript";
    el.charset = "UTF-8";
    getScriptParentElement().appendChild(el);
  });
}
function _generateCallbackName(prefix) {
  return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
}
new Delay(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _withDefaultResolver(auth2, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }
  _assert(auth2._popupRedirectResolver, auth2, "argument-error");
  return auth2._popupRedirectResolver;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class IdpCredential extends AuthCredential {
  constructor(params) {
    super("custom", "custom");
    this.params = params;
  }
  _getIdTokenResponse(auth2) {
    return signInWithIdp(auth2, this._buildIdpRequest());
  }
  _linkToIdToken(auth2, idToken) {
    return signInWithIdp(auth2, this._buildIdpRequest(idToken));
  }
  _getReauthenticationResolver(auth2) {
    return signInWithIdp(auth2, this._buildIdpRequest());
  }
  _buildIdpRequest(idToken) {
    const request = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: true,
      returnIdpCredential: true
    };
    if (idToken) {
      request.idToken = idToken;
    }
    return request;
  }
}
function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
  const { auth: auth2, user } = params;
  _assert(user, auth2, "internal-error");
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const { auth: auth2, user } = params;
  _assert(user, auth2, "internal-error");
  return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AbstractPopupRedirectOperation {
  constructor(auth2, filter, resolver, user, bypassAuthState = false) {
    this.auth = auth2;
    this.resolver = resolver;
    this.user = user;
    this.bypassAuthState = bypassAuthState;
    this.pendingPromise = null;
    this.eventManager = null;
    this.filter = Array.isArray(filter) ? filter : [filter];
  }
  execute() {
    return new Promise(async (resolve, reject) => {
      this.pendingPromise = { resolve, reject };
      try {
        this.eventManager = await this.resolver._initialize(this.auth);
        await this.onExecution();
        this.eventManager.registerConsumer(this);
      } catch (e) {
        this.reject(e);
      }
    });
  }
  async onAuthEvent(event) {
    const { urlResponse, sessionId, postBody, tenantId, error: error2, type } = event;
    if (error2) {
      this.reject(error2);
      return;
    }
    const params = {
      auth: this.auth,
      requestUri: urlResponse,
      sessionId,
      tenantId: tenantId || void 0,
      postBody: postBody || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(type)(params));
    } catch (e) {
      this.reject(e);
    }
  }
  onError(error2) {
    this.reject(error2);
  }
  getIdpTask(type) {
    switch (type) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return _signIn;
      case "linkViaPopup":
      case "linkViaRedirect":
        return _link;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return _reauth;
      default:
        _fail(this.auth, "internal-error");
    }
  }
  resolve(cred) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.resolve(cred);
    this.unregisterAndCleanUp();
  }
  reject(error2) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.reject(error2);
    this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    if (this.eventManager) {
      this.eventManager.unregisterConsumer(this);
    }
    this.pendingPromise = null;
    this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
class PopupOperation extends AbstractPopupRedirectOperation {
  constructor(auth2, filter, provider, resolver, user) {
    super(auth2, filter, resolver, user);
    this.provider = provider;
    this.authWindow = null;
    this.pollId = null;
    if (PopupOperation.currentPopupAction) {
      PopupOperation.currentPopupAction.cancel();
    }
    PopupOperation.currentPopupAction = this;
  }
  async executeNotNull() {
    const result = await this.execute();
    _assert(result, this.auth, "internal-error");
    return result;
  }
  async onExecution() {
    debugAssert(this.filter.length === 1, "Popup operations only handle one event");
    const eventId = _generateEventId();
    this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], eventId);
    this.authWindow.associatedEvent = eventId;
    this.resolver._originValidation(this.auth).catch((e) => {
      this.reject(e);
    });
    this.resolver._isIframeWebStorageSupported(this.auth, (isSupported) => {
      if (!isSupported) {
        this.reject(_createError(this.auth, "web-storage-unsupported"));
      }
    });
    this.pollUserCancellation();
  }
  get eventId() {
    var _a;
    return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
  }
  cancel() {
    this.reject(_createError(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    if (this.authWindow) {
      this.authWindow.close();
    }
    if (this.pollId) {
      window.clearTimeout(this.pollId);
    }
    this.authWindow = null;
    this.pollId = null;
    PopupOperation.currentPopupAction = null;
  }
  pollUserCancellation() {
    const poll = () => {
      var _a, _b;
      if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        this.pollId = window.setTimeout(() => {
          this.pollId = null;
          this.reject(_createError(this.auth, "popup-closed-by-user"));
        }, 2e3);
        return;
      }
      this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
    };
    poll();
  }
}
PopupOperation.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PENDING_REDIRECT_KEY = "pendingRedirect";
const redirectOutcomeMap = new Map();
class RedirectAction extends AbstractPopupRedirectOperation {
  constructor(auth2, resolver, bypassAuthState = false) {
    super(auth2, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
    ], resolver, void 0, bypassAuthState);
    this.eventId = null;
  }
  async execute() {
    let readyOutcome = redirectOutcomeMap.get(this.auth._key());
    if (!readyOutcome) {
      try {
        const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
        const result = hasPendingRedirect ? await super.execute() : null;
        readyOutcome = () => Promise.resolve(result);
      } catch (e) {
        readyOutcome = () => Promise.reject(e);
      }
      redirectOutcomeMap.set(this.auth._key(), readyOutcome);
    }
    return readyOutcome();
  }
  async onAuthEvent(event) {
    if (event.type === "signInViaRedirect") {
      return super.onAuthEvent(event);
    } else if (event.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (event.eventId) {
      const user = await this.auth._redirectUserForId(event.eventId);
      if (user) {
        this.user = user;
        return super.onAuthEvent(event);
      } else {
        this.resolve(null);
      }
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
}
async function _getAndClearPendingRedirectStatus(resolver, auth2) {
  const key = pendingRedirectKey(auth2);
  const hasPendingRedirect = await resolverPersistence(resolver)._get(key) === "true";
  await resolverPersistence(resolver)._remove(key);
  return hasPendingRedirect;
}
function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth2) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth2.config.apiKey, auth2.name);
}
async function _getRedirectResult(auth2, resolverExtern, bypassAuthState = false) {
  const authInternal = _castAuth(auth2);
  const resolver = _withDefaultResolver(authInternal, resolverExtern);
  const action = new RedirectAction(authInternal, resolver, bypassAuthState);
  const result = await action.execute();
  if (result && !bypassAuthState) {
    delete result.user._redirectEventId;
    await authInternal._persistUserIfCurrent(result.user);
    await authInternal._setRedirectUser(null, resolverExtern);
  }
  return result;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
class AuthEventManager {
  constructor(auth2) {
    this.auth = auth2;
    this.cachedEventUids = new Set();
    this.consumers = new Set();
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
    this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(authEventConsumer) {
    this.consumers.add(authEventConsumer);
    if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
      this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
      this.saveEventToCache(this.queuedRedirectEvent);
      this.queuedRedirectEvent = null;
    }
  }
  unregisterConsumer(authEventConsumer) {
    this.consumers.delete(authEventConsumer);
  }
  onEvent(event) {
    if (this.hasEventBeenHandled(event)) {
      return false;
    }
    let handled = false;
    this.consumers.forEach((consumer) => {
      if (this.isEventForConsumer(event, consumer)) {
        handled = true;
        this.sendToConsumer(event, consumer);
        this.saveEventToCache(event);
      }
    });
    if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
      return handled;
    }
    this.hasHandledPotentialRedirect = true;
    if (!handled) {
      this.queuedRedirectEvent = event;
      handled = true;
    }
    return handled;
  }
  sendToConsumer(event, consumer) {
    var _a;
    if (event.error && !isNullRedirectEvent(event)) {
      const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
      consumer.onError(_createError(this.auth, code));
    } else {
      consumer.onAuthEvent(event);
    }
  }
  isEventForConsumer(event, consumer) {
    const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
    return consumer.filter.includes(event.type) && eventIdMatches;
  }
  hasEventBeenHandled(event) {
    if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
      this.cachedEventUids.clear();
    }
    return this.cachedEventUids.has(eventUid(event));
  }
  saveEventToCache(event) {
    this.cachedEventUids.add(eventUid(event));
    this.lastProcessedEventTime = Date.now();
  }
}
function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter((v) => v).join("-");
}
function isNullRedirectEvent({ type, error: error2 }) {
  return type === "unknown" && (error2 === null || error2 === void 0 ? void 0 : error2.code) === `auth/${"no-auth-event"}`;
}
function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return true;
    case "unknown":
      return isNullRedirectEvent(event);
    default:
      return false;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _getProjectConfig(auth2, request = {}) {
  return _performApiRequest(auth2, "GET", "/v1/projects", request);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
const HTTP_REGEX = /^https?/;
async function _validateOrigin(auth2) {
  if (auth2.config.emulator) {
    return;
  }
  const { authorizedDomains } = await _getProjectConfig(auth2);
  for (const domain of authorizedDomains) {
    try {
      if (matchDomain(domain)) {
        return;
      }
    } catch (_a) {
    }
  }
  _fail(auth2, "unauthorized-domain");
}
function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();
  const { protocol, hostname } = new URL(currentUrl);
  if (expected.startsWith("chrome-extension://")) {
    const ceUrl = new URL(expected);
    if (ceUrl.hostname === "" && hostname === "") {
      return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
    }
    return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
  }
  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }
  if (IP_ADDRESS_REGEX.test(expected)) {
    return hostname === expected;
  }
  const escapedDomainPattern = expected.replace(/\./g, "\\.");
  const re = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
  return re.test(hostname);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const NETWORK_TIMEOUT = new Delay(3e4, 6e4);
function resetUnloadedGapiModules() {
  const beacon = _window().___jsl;
  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    for (const hint of Object.keys(beacon.H)) {
      beacon.H[hint].r = beacon.H[hint].r || [];
      beacon.H[hint].L = beacon.H[hint].L || [];
      beacon.H[hint].r = [...beacon.H[hint].L];
      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          beacon.CP[i] = null;
        }
      }
    }
  }
}
function loadGapi(auth2) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c;
    function loadGapiIframe() {
      resetUnloadedGapiModules();
      gapi.load("gapi.iframes", {
        callback: () => {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: () => {
          resetUnloadedGapiModules();
          reject(_createError(auth2, "network-request-failed"));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }
    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      loadGapiIframe();
    } else {
      const cbName = _generateCallbackName("iframefcb");
      _window()[cbName] = () => {
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          reject(_createError(auth2, "network-request-failed"));
        }
      };
      return _loadJS(`https://apis.google.com/js/api.js?onload=${cbName}`);
    }
  }).catch((error2) => {
    cachedGApiLoader = null;
    throw error2;
  });
}
let cachedGApiLoader = null;
function _loadGapi(auth2) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth2);
  return cachedGApiLoader;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PING_TIMEOUT = new Delay(5e3, 15e3);
const IFRAME_PATH = "__/auth/iframe";
const EMULATED_IFRAME_PATH = "emulator/auth/iframe";
const IFRAME_ATTRIBUTES = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  }
};
const EID_FROM_APIHOST = new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
]);
function getIframeUrl(auth2) {
  const config = auth2.config;
  _assert(config.authDomain, auth2, "auth-domain-config-required");
  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth2.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth2.name,
    v: SDK_VERSION$1
  };
  const eid = EID_FROM_APIHOST.get(auth2.config.apiHost);
  if (eid) {
    params.eid = eid;
  }
  const frameworks = auth2._getFrameworks();
  if (frameworks.length) {
    params.fw = frameworks.join(",");
  }
  return `${url}?${querystring(params).slice(1)}`;
}
async function _openIframe(auth2) {
  const context = await _loadGapi(auth2);
  const gapi2 = _window().gapi;
  _assert(gapi2, auth2, "internal-error");
  return context.open({
    where: document.body,
    url: getIframeUrl(auth2),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, (iframe) => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      setHideOnLeave: false
    });
    const networkError = _createError(auth2, "network-request-failed");
    const networkErrorTimer = _window().setTimeout(() => {
      reject(networkError);
    }, PING_TIMEOUT.get());
    function clearTimerAndResolve() {
      _window().clearTimeout(networkErrorTimer);
      resolve(iframe);
    }
    iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
      reject(networkError);
    });
  }));
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BASE_POPUP_OPTIONS = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
};
const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 600;
const TARGET_BLANK = "_blank";
const FIREFOX_EMPTY_URL = "http://localhost";
class AuthPopup {
  constructor(window2) {
    this.window = window2;
    this.associatedEvent = null;
  }
  close() {
    if (this.window) {
      try {
        this.window.close();
      } catch (e) {
      }
    }
  }
}
function _open(auth2, url, name2, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = "";
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  });
  const ua = getUA().toLowerCase();
  if (name2) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name2;
  }
  if (_isFirefox(ua)) {
    url = url || FIREFOX_EMPTY_URL;
    options.scrollbars = "yes";
  }
  const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
  if (_isIOSStandalone(ua) && target !== "_self") {
    openAsNewWindowIOS(url || "", target);
    return new AuthPopup(null);
  }
  const newWin = window.open(url || "", target, optionsString);
  _assert(newWin, auth2, "popup-blocked");
  try {
    newWin.focus();
  } catch (e) {
  }
  return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
  const el = document.createElement("a");
  el.href = url;
  el.target = target;
  const click = document.createEvent("MouseEvent");
  click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const WIDGET_PATH = "__/auth/handler";
const EMULATOR_WIDGET_PATH = "emulator/auth/handler";
function _getRedirectUrl(auth2, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(auth2.config.authDomain, auth2, "auth-domain-config-required");
  _assert(auth2.config.apiKey, auth2, "invalid-api-key");
  const params = {
    apiKey: auth2.config.apiKey,
    appName: auth2.name,
    authType,
    redirectUrl,
    v: SDK_VERSION$1,
    eventId
  };
  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth2.languageCode);
    params.providerId = provider.providerId || "";
    if (!isEmpty(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    }
    for (const [key, value] of Object.entries(additionalParams || {})) {
      params[key] = value;
    }
  }
  if (provider instanceof BaseOAuthProvider) {
    const scopes = provider.getScopes().filter((scope) => scope !== "");
    if (scopes.length > 0) {
      params.scopes = scopes.join(",");
    }
  }
  if (auth2.tenantId) {
    params.tid = auth2.tenantId;
  }
  const paramsDict = params;
  for (const key of Object.keys(paramsDict)) {
    if (paramsDict[key] === void 0) {
      delete paramsDict[key];
    }
  }
  return `${getHandlerBase(auth2)}?${querystring(paramsDict).slice(1)}`;
}
function getHandlerBase({ config }) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }
  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
class BrowserPopupRedirectResolver {
  constructor() {
    this.eventManagers = {};
    this.iframes = {};
    this.originValidationPromises = {};
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
  }
  async _openPopup(auth2, provider, authType, eventId) {
    var _a;
    debugAssert((_a = this.eventManagers[auth2._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
    const url = _getRedirectUrl(auth2, provider, authType, _getCurrentUrl(), eventId);
    return _open(auth2, url, _generateEventId());
  }
  async _openRedirect(auth2, provider, authType, eventId) {
    await this._originValidation(auth2);
    _setWindowLocation(_getRedirectUrl(auth2, provider, authType, _getCurrentUrl(), eventId));
    return new Promise(() => {
    });
  }
  _initialize(auth2) {
    const key = auth2._key();
    if (this.eventManagers[key]) {
      const { manager, promise: promise2 } = this.eventManagers[key];
      if (manager) {
        return Promise.resolve(manager);
      } else {
        debugAssert(promise2, "If manager is not set, promise should be");
        return promise2;
      }
    }
    const promise = this.initAndGetManager(auth2);
    this.eventManagers[key] = { promise };
    return promise;
  }
  async initAndGetManager(auth2) {
    const iframe = await _openIframe(auth2);
    const manager = new AuthEventManager(auth2);
    iframe.register("authEvent", (iframeEvent) => {
      _assert(iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent, auth2, "invalid-auth-event");
      const handled = manager.onEvent(iframeEvent.authEvent);
      return { status: handled ? "ACK" : "ERROR" };
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    this.eventManagers[auth2._key()] = { manager };
    this.iframes[auth2._key()] = iframe;
    return manager;
  }
  _isIframeWebStorageSupported(auth2, cb) {
    const iframe = this.iframes[auth2._key()];
    iframe.send(WEB_STORAGE_SUPPORT_KEY, { type: WEB_STORAGE_SUPPORT_KEY }, (result) => {
      var _a;
      const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
      if (isSupported !== void 0) {
        cb(!!isSupported);
      }
      _fail(auth2, "internal-error");
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(auth2) {
    const key = auth2._key();
    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth2);
    }
    return this.originValidationPromises[key];
  }
  get _shouldInitProactively() {
    return _isMobileBrowser() || _isSafari() || _isIOS();
  }
}
const browserPopupRedirectResolver = BrowserPopupRedirectResolver;
var name = "@firebase/auth";
var version = "0.18.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class AuthInterop {
  constructor(auth2) {
    this.auth = auth2;
    this.internalListeners = new Map();
  }
  getUid() {
    var _a;
    this.assertAuthConfigured();
    return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
  }
  async getToken(forceRefresh) {
    this.assertAuthConfigured();
    await this.auth._initializationPromise;
    if (!this.auth.currentUser) {
      return null;
    }
    const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
    return { accessToken };
  }
  addAuthTokenListener(listener) {
    this.assertAuthConfigured();
    if (this.internalListeners.has(listener)) {
      return;
    }
    const unsubscribe = this.auth.onIdTokenChanged((user) => {
      var _a;
      listener(((_a = user) === null || _a === void 0 ? void 0 : _a.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(listener, unsubscribe);
    this.updateProactiveRefresh();
  }
  removeAuthTokenListener(listener) {
    this.assertAuthConfigured();
    const unsubscribe = this.internalListeners.get(listener);
    if (!unsubscribe) {
      return;
    }
    this.internalListeners.delete(listener);
    unsubscribe();
    this.updateProactiveRefresh();
  }
  assertAuthConfigured() {
    _assert(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
  }
  updateProactiveRefresh() {
    if (this.internalListeners.size > 0) {
      this.auth._startProactiveRefresh();
    } else {
      this.auth._stopProactiveRefresh();
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    default:
      return void 0;
  }
}
function registerAuth(clientPlatform) {
  _registerComponent(new Component("auth", (container, { options: deps }) => {
    const app2 = container.getProvider("app").getImmediate();
    const { apiKey, authDomain } = app2.options;
    return ((app3) => {
      _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", { appName: app3.name });
      _assert(!(authDomain === null || authDomain === void 0 ? void 0 : authDomain.includes(":")), "argument-error", {
        appName: app3.name
      });
      const config = {
        apiKey,
        authDomain,
        clientPlatform,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: _getClientVersion(clientPlatform)
      };
      const authInstance = new AuthImpl(app3, config);
      _initializeAuthInstance(authInstance, deps);
      return authInstance;
    })(app2);
  }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider("auth-internal");
    authInternalProvider.initialize();
  }));
  _registerComponent(new Component("auth-internal", (container) => {
    const auth2 = _castAuth(container.getProvider("auth").getImmediate());
    return ((auth3) => new AuthInterop(auth3))(auth2);
  }, "PRIVATE").setInstantiationMode("EXPLICIT"));
  registerVersion(name, version, getVersionForPlatform(clientPlatform));
  registerVersion(name, version, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getAuth(app2 = getApp()) {
  const provider = _getProvider(app2, "auth");
  if (provider.isInitialized()) {
    return provider.getImmediate();
  }
  return initializeAuth(app2, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [
      indexedDBLocalPersistence,
      browserLocalPersistence,
      browserSessionPersistence
    ]
  });
}
registerAuth("Browser");
const createUserWithEmailAndPassword = async (data) => {
  try {
    const auth2 = getAuth();
    return await createUserWithEmailAndPassword$1(auth2, data.email, data.password).then((userCredential2) => {
      return { ok: "user created", data: userCredential2.user };
    }).catch((error2) => {
      const errorCode = error2.code;
      const errorMessage = error2.message;
      return { error: errorMessage, errorCode };
    });
  } catch (error2) {
    return { error: error2 };
  }
};
const signInWithEmailAndPassword = async (data) => {
  try {
    const auth2 = getAuth();
    return await signInWithEmailAndPassword$1(auth2, data.email, data.password).then((userCredential2) => {
      return { ok: "signed in", data: userCredential2.user };
    }).catch((error2) => {
      const errorCode = error2.code;
      const errorMessage = error2.message;
      return { error: errorMessage, errorCode };
    });
  } catch (error2) {
    return { error: error2 };
  }
};
const signInAnonymously = async (data) => {
  try {
    const auth2 = getAuth();
    return await signInAnonymously$1(auth2).then(() => {
      return { ok: "signed in", data: userCredential.user };
    }).catch((error2) => {
      const errorCode = error2.code;
      const errorMessage = error2.message;
      return { error: errorMessage, errorCode };
    });
  } catch (error2) {
    return { error: error2 };
  }
};
const signOut = async () => {
  try {
    const auth2 = getAuth();
    return await signOut$1(auth2).then(() => {
      return { ok: "signed out" };
    }).catch((error2) => {
      return { error: error2 };
    });
  } catch (error2) {
    return { error: error2 };
  }
};
const onAuthStateChanged = async (func2) => {
  try {
    const auth2 = getAuth();
    return await onAuthStateChanged$1(auth2, (user) => {
      if (user) {
        func2({ ok: "signed in", data: user, uid: user.uid });
      } else {
        func2({ ok: "signed out" });
      }
    });
  } catch (error2) {
    return func2({ error: error2 });
  }
};
const auth = {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInAnonymously,
  onAuthStateChanged,
  signOut
};
window.database = database;
window.auth = auth;
