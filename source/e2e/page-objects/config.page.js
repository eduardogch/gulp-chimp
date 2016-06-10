/**
 * Define Environment and EnvURL
 */
var Project = function() {
    this.env    = "develop";
    this.env    = "qa";
    this.env    = "production";
    this.envURL = "";
};

/**
 * Define Default URL
 */
Project.prototype.open = function(path) {
    if (this.env === "develop") {
        this.envURL = "http://localhost:3001";
    }
    if (this.env === "qa") {
        this.envURL = "http://localhost:3002";
    }
    if (this.env === "production") {
        this.envURL = "http://localhost:3003";
    }
    browser.url(this.envURL + path);
};

module.exports = new Project();
