import React from "react";

const Blog = () => {
  return (
    <div className="mb-3 mt-3 ">
      <div className="justify-content-center">
        <h1 className="text-primary text-center">Welcome to my Blog</h1>
      </div>
      <div>
        <div className="mb-3">
          <h4>Q.1: What is cors?</h4>
          <p className="text-wrap">
            Answer: Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </div>
        <div>
          <h4>
            Q.2: Why are you using firebase? What other options do you have to
            implement authentication?
          </h4>
          <p className="text-wrap">
            Answer: Firebase Authentication provides backend services,
            easy-to-use SDKs, and ready-made UI libraries to authenticate users
            to your app. It supports authentication using passwords, phone
            numbers, popular federated identity providers like Google, Facebook
            and Twitter, and more. A few options to implement authentication:
            STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg,
            Authress, Auth0, Firebase, Amazon Cognito, OneLogin etc.
          </p>
        </div>
        <div>
          <h4>Q.3: How does the private route work?</h4>
          <p className="text-wrap">
            Answer: The private route component is similar to the public route,
            the only change is that redirect URL and authenticate condition. If
            the user is not authenticated he will be redirected to the login
            page and the user can only access the authenticated routes If he is
            authenticated (Logged in).
          </p>
        </div>
        <div>
          <h4>Q.4: What is Node? How does Node work?</h4>
          <p className="text-wrap">
            Answer: Node. js is a JavaScript runtime environment that achieves
            low latency and high throughput by taking a “non-blocking” approach
            to serving requests. In other words, Node. js wastes no time or
            resources on waiting for I/O requests to return.
            <br />
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node. js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
