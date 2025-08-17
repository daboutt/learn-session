const express = require('express');
const app = express();

const session = require('express-session');

//Create in-memory session
const store = new session.MemoryStore();

//Create session
app.use(
  session({
    secret: '232jksf@',
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: true,
      sameSite: 'strict',
    },
  })
);

// NOTE: Note: Storing in-memory sessions is something that should be done only during development,
// NOT during production due to security risks

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server is listen on por ${PORT}`);
});
