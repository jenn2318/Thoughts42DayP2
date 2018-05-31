module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/thoughts/", function(req, res) {
        thought.Post.findAll({thought: data})
            .then(function(thoughtPost) {
                res.json(thoughtPost);
            });
    });

    // Get route for returning posts of a specific category
    app.get("/api/thoughts/category/:category", function(req, res) {
        thought.Post.findAll({
            where: {
                category: req.params.category
            }
        })
            .then(function(thoughtPost) {
                res.json(thoughtPost);
            });
    });

    // Get route for retrieving a single post
    app.get("/api/thoughts/:id", function(req, res) {
        thought.Post.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function(thoughtPost) {
                res.json(thoughtPost);
            });
    });

    // POST route for saving a new post to the form
    app.post("/api/posts", function(req, res) {
        console.log(req.body);
        thought.Post.create({
            title: req.body.title,
            body: req.body.body,
            category: req.body.category
        })
            .then(function(thoughtPost) {
                res.json(thoughtPost);
            });
    });


    // PUT route for updating posts as the user enters a post
    app.put("/api/thoughts", function(req, res) {
        thought.Post.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function(thoughtPost) {
                res.json(thoughtPost);
            });
    });
};
