var menus = require('./menus');

exports.liste_plat = function () {
    return Object.keys(menus.plats);
};

exports.info_plat = function (plat_id) {
    return menus.plats[plat_id];
};

exports.commande_plat = function (plat_id) {
    var test = menus.commandes.push(menus.plats[plat_id]);
    return "Votre commande est en cours...";
};