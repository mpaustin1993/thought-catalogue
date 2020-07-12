const express = require("express");

const app = express();

// must use next() to get out of this function / have server send a reponse

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "fadf",
      title: "First server-side post",
      content: "This is coming from the server",
    },
    {
      id: "asdfasdf",
      title: "Second server-side post",
      content: "This is coming from the server",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts,
  });

});

module.exports = app;
