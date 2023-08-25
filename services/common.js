const passport = require("passport");

exports.isAuth = () => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTY2ODliZTJiZTdhMWY4NTE5MjQzYSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkyOTA1NDcwfQ.bQdJi7vd4M3gcZJj2mvZlZVYXKIunyVU66hyWfDWVys";
  return token;
};

// {
//   "builds": [
//     {
//       "src": "index.js",
//       "use": "@vercel/node"
//     },
//     {
//       "src": "build/**",
//       "use": "@vercel/static"
//     }
//   ],
//   "routes": [
//     {
//       "src": "/auth",
//       "dest": "index.js"
//     },
//     {
//       "src": "/auth/(.*)",
//       "dest": "index.js"
//     },
//     {
//       "src": "/users/own",
//       "dest": "index.js"
//     },
//     {
//       "src": "/users/own/(.*)",
//       "dest": "index.js"
//     },
//     {
//       "src": "/blog",
//       "dest": "index.js"
//     },
//     {
//       "src": "/blog/(.*)",
//       "dest": "index.js"
//     },
//     {
//       "src": "/",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/blog/:id",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/login",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/signup",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/submit",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/blog-update/:id",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/signOut",
//       "dest": "build/index.html"
//     },
//     {
//       "src": "/(.+)",
//       "dest": "build/$1"
//     }
//   ]
// }
