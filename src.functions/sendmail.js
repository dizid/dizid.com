exports.handler = function(event, context, callback) {
    const{ name } = JSON.parse(event.body)
    
    if (name === 'james') {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: "Thanks for your message " + name})
    })
} else {
    callback(new Error("You are not James!"))
}
}