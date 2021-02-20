const controller = {
    index : function(request, response, next) {
        response.send('Welcome to Homepage')
    },
}


module.exports = controller