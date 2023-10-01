//Handlebars helpers
module.exports = {
//Limited Each loop
limitedEach(context, iterations, options) {
    var ret = '';
    for (var i = 0, j = Math.min(context.length, iterations); i < j; i++) {
        ret = ret + options.fn(context[i]);
    }
    return ret;
    }

}