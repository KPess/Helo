const bcrypt = require("bcryptjs");

module.exports = {
  register: (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(406).json({
        error: "Please fill in both fields"
      });
    } else {
      const db = req.app.get("db");
      db.checkForUser(username).then(user => {
        if (user.length > 0) {
          res.status(401).json({ error: "Username already taken" });
        } else {
          bcrypt.hash(password, 10).then(hash => {
            db.addUser(username, hash).then(() => {
              req.session.user = {
                username
              };
              res.status(200).json(req.session.user);
            });
          });
        }
      });
    }
  },
  login: (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(406).json({ error: "Please fill in both fields" });
    } else {
      const db = req.app.get("db");
      db.checkForUser(username).then(user => {
        if (user.length > 0) {
          const isAuthenticated = bcrypt.compareSync(password, user[0].hash);
          if (!isAuthenticated) {
            return res.status(403).json({ error: "Incorrect login" });
          } else {
            db.checkForUser(username).then(() => {
              req.session.user = {
                user: user[0],
                username: user[0].username
              };
              console.log(req.session)
            });
          }
        } else {
          return res.status(403).json({ error: "Incorrect login" });
        }
      });
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  currentSession: async (req, res) => {
    const db = req.app.get("db");

    if (req.session.user) {
      const foundUser = await db.checkForUser(req.session.user.username);
      const user = foundUser[0];
      if (req.session) {
        req.session.user = {
          username: user.username,
        };
        return res.send(req.session.user);
      }
    }
    else {
      res.status(401).json(`Please log in`)
    }
  }
};
