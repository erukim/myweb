async function isAdmin(req, res, next) {
    if (!req.user || !req.user?.admin) return res.redirect('/')
    else next();
}
module.exports = isAdmin;