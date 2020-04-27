module.exports.isUndefined = function isUndefined() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] == undefined) {
      return true;
    }
  }
  return false;
}

module.exports.sendError = function(res, status, message){
  res.status(status).send({
    success: false,
    message
  })
}
