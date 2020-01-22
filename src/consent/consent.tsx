import * as React from 'react';
import {
  RenderScriptsProps,
  RenderScripts,
  RenderScriptsReactHelmetProp,
} from '../utils/render-scripts';

export interface ConsentProps extends RenderScriptsReactHelmetProp {
  accountId: string;
  mmsDomain?: string;
  waitForConsent?: boolean;
}

export const Consent: React.FC<ConsentProps> = ({
  accountId,
  mmsDomain = `https://message${accountId}.sp-prod.net`,
  waitForConsent = true,
  reactHelmet,
}) => {
  const sourcePointConfig = {
    config: {
      mmsDomain,
      accountId,
      cmpOrigin: 'https://sourcepoint.mgr.consensu.org',
      waitForConsent,
    },
  };

  const scripts: RenderScriptsProps['scripts'] = [
    {
      content: `(function () { var e = false; var c = window; var t = document; function r() { if (!c.frames["__cmpLocator"]) { if (t.body) { var a = t.body; var e = t.createElement("iframe"); e.style.cssText = "display:none"; e.name = "__cmpLocator"; a.appendChild(e) } else { setTimeout(r, 5) } } } r(); function p() { var a = arguments; __cmp.a = __cmp.a || []; if (!a.length) { return __cmp.a } else if (a[0] === "ping") { a[2]({ gdprAppliesGlobally: e, cmpLoaded: false }, true) } else { __cmp.a.push([].slice.apply(a)) } } function l(t) { var r = typeof t.data === "string"; try { var a = r ? JSON.parse(t.data) : t.data; if (a.__cmpCall) { var n = a.__cmpCall; c.__cmp(n.command, n.parameter, function (a, e) { var c = { __cmpReturn: { returnValue: a, success: e, callId: n.callId } }; t.source.postMessage(r ? JSON.stringify(c) : c, "*") }) } } catch (a) { } } if (typeof __cmp !== "function") { c.__cmp = p; __cmp.msgHandler = l; c.addEventListener("message", l, false) } })();`,
    },
    {
      content: `window._sp_ = ${JSON.stringify(sourcePointConfig)}`,
    },
    {
      src: 'https://dialogue.sp-prod.net/messagingWithoutDetection.js',
    },
  ];

  return <RenderScripts scripts={scripts} reactHelmet={reactHelmet} />;
};
