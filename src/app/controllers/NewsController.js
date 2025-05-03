
class NewsController {
    //[GET] /NEWS
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug4
    show(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController;