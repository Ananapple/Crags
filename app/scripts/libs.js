define([], function() {

    var _this = {};

    var s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };

    /**
     * Generates a global unique(ish) id
     * 
     * @return {string} - generated id
     */
    _this.guid = function () {
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };

    return _this;

});