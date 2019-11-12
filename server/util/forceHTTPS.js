// https://github.com/mahovich/koa-force-https

export default function forceHTTPS(port, hostname, httpStatusCode = 301) {
  return (ctx, next) => {
    if (ctx.secure) return next();

    const urlRedirect = ctx.request.URL;
    urlRedirect.protocol = 'https';
    if (port) urlRedirect.port = port;
    if (hostname) urlRedirect.hostname = hostname;

    ctx.response.status = httpStatusCode;
    ctx.response.redirect(urlRedirect.href);
  }
}