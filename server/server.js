const compression = require("compression");
const csurf = require("csurf");
const path = require("path");
const express = require("express");

const { protectorMiddleware } = require("./middlewares/csrf");
const { cookieSessionMiddleware } = require("./middlewares/cookieSession");
const { io_cookieSession } = require("./middlewares/io_cookieSession");
const { server, app, io } = require("./utilities/socket-io");

const { usersRoutes } = require("./routes/usersRoutes");
const { recipesRoutes } = require("./routes/recipesRoutes");
const { chaptersRoutes } = require("./routes/chaptersRoutes");
const { cookBooksRoutes } = require("./routes/cookBooksRoutes");
const { coAuthorsRoutes } = require("./routes/coAuthorsRoutes");
const { ingredientsListRoutes } = require("./routes/ingredientsListRoutes");
const { favouriteRecipesRoutes } = require("./routes/favouriteRecipesRoutes");

const PORT = 3001;

app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieSessionMiddleware);
io.use(io_cookieSession);
app.use(csurf());
app.use(protectorMiddleware);

app.use("/api/users", usersRoutes);
app.use("/api/recipes", recipesRoutes);
app.use("/api/chapters", chaptersRoutes);
app.use("/api/cookbooks", cookBooksRoutes);
app.use("/api/co_authors", coAuthorsRoutes);
app.use("/api/ingredients_list", ingredientsListRoutes);
app.use("/api/favourite_recipes", favouriteRecipesRoutes);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

server.listen(process.env.PORT || PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`);
});
