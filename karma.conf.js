var karmaConf = require('@coveuse/cli/karma.conf');

module.exports = function(config) {
    karmaConf(config, 'form', 'application');

    // Vous pouvez ajouter vos modification de configuration ici

    //Pour lancer les tests dans chrome => npm install karma-chrome-launcher
    //Puis activer les lignes ci-dessous.
    
    // config.plugins.push(require("karma-chrome-launcher"));
    // config.browsers = ['Chrome'];
};
