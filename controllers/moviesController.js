
function index(req, res) {
    res.send('Movies list here')
}

function show(req, res) {
    res.send('One movie here')
}

module.exports = {
    index,
    show
}