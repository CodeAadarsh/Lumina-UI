import { __exports as u } from "./index.esm31.js";
import B from "react";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N;
function Q() {
  return N ? u : (N = 1, process.env.NODE_ENV !== "production" && function() {
    function l(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === X ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case m:
          return "Fragment";
        case W:
          return "Profiler";
        case F:
          return "StrictMode";
        case z:
          return "Suspense";
        case V:
          return "SuspenseList";
        case G:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case D:
            return "Portal";
          case U:
            return (e.displayName || "Context") + ".Provider";
          case L:
            return (e._context.displayName || "Context") + ".Consumer";
          case M:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case q:
            return r = e.displayName || null, r !== null ? r : l(e.type) || "Memo";
          case A:
            r = e._payload, e = e._init;
            try {
              return l(e(r));
            } catch {
            }
        }
      return null;
    }
    function T(e) {
      return "" + e;
    }
    function v(e) {
      try {
        T(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), T(e);
      }
    }
    function f(e) {
      if (e === m) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === A)
        return "<...>";
      try {
        var r = l(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function C() {
      var e = b.A;
      return e === null ? null : e.getOwner();
    }
    function p() {
      return Error("react-stack-top-frame");
    }
    function x(e) {
      if (S.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function Y(e, r) {
      function t() {
        w || (w = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function I() {
      var e = l(this.type);
      return P[e] || (P[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function $(e, r, t, n, c, o, E, _) {
      return t = o.ref, e = {
        $$typeof: g,
        type: e,
        key: r,
        props: o,
        _owner: c
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: I
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function O(e, r, t, n, c, o, E, _) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              k(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(a);
      if (S.call(r, "key")) {
        a = l(e);
        var s = Object.keys(r).filter(function(J) {
          return J !== "key";
        });
        n = 0 < s.length ? "{key: someKey, " + s.join(": ..., ") + ": ...}" : "{key: someKey}", j[a + n] || (s = 0 < s.length ? "{" + s.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          s,
          a
        ), j[a + n] = !0);
      }
      if (a = null, t !== void 0 && (v(t), a = "" + t), x(r) && (v(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var R in r)
          R !== "key" && (t[R] = r[R]);
      } else t = r;
      return a && Y(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), $(
        e,
        a,
        o,
        c,
        C(),
        t,
        E,
        _
      );
    }
    function k(e) {
      typeof e == "object" && e !== null && e.$$typeof === g && e._store && (e._store.validated = 1);
    }
    var i = B, g = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), F = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), U = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), G = Symbol.for("react.activity"), X = Symbol.for("react.client.reference"), b = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, S = Object.prototype.hasOwnProperty, K = Array.isArray, d = console.createTask ? console.createTask : function() {
      return null;
    };
    i = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var w, P = {}, y = i["react-stack-bottom-frame"].bind(
      i,
      p
    )(), h = d(f(p)), j = {};
    u.Fragment = m, u.jsx = function(e, r, t, n, c) {
      var o = 1e4 > b.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !1,
        n,
        c,
        o ? Error("react-stack-top-frame") : y,
        o ? d(f(e)) : h
      );
    }, u.jsxs = function(e, r, t, n, c) {
      var o = 1e4 > b.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !0,
        n,
        c,
        o ? Error("react-stack-top-frame") : y,
        o ? d(f(e)) : h
      );
    };
  }(), u);
}
export {
  Q as __require
};
//# sourceMappingURL=index.esm29.js.map
