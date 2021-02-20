const controller = {
    index : function(request, response, next) {
        response.send('Welcome to Admin Page')
    },
    login : function(request, response) {
        response.json({
            status : true,
            url : request.url
        })
    },
    logout : function(request, response) {
        response.json({
            status : true,
            url : request.url
        })
    }

}


module.exports = controller