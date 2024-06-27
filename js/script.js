$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('header.header').addClass('fixed');
            $('#f_cart').stop().animate({
                bottom: '150px'
            }, 100);
            $('#go-top').stop().animate({
                bottom: '70px'
            }, 150);
        } else {
            $('header.header').removeClass('fixed');
            $('#f_cart').stop().animate({
                bottom: '-70px'
            }, 100);
            $('#go-top').stop().animate({
                bottom: '-50px'
            }, 150);
        }
    });
    $('#go-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 500, function () {
            $('#go-top').stop().animate({
                bottom: '-50px'
            }, 150);
        });
    });
});
// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");

Sentry.init({
  dsn: "https://c74d51e0934e9eb35fbbb837d9a271f3@o4507501751369728.ingest.de.sentry.io/4507501758840912",
  integrations: [
    nodeProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
// IMPORTANT: Make sure to import `instrument.js` at the top of your file.
// If you're using ECMAScript Modules (ESM) syntax, use `import "./instrument.js";`
require("./instrument.js");

// All other imports below
const { createServer } = require("node:http");

const server = createServer((req, res) => {
  // server code
});

server.listen(3000, "127.0.0.1");
Sentry.startSpan({
    op: "test",
    name: "My First Test Span",
  }, () => {
    try {
      foo();
    } catch (e) {
      Sentry.captureException(e);
    }
  });