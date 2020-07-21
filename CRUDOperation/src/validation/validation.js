//validation of inputs of client object

module.exports = function(client){
    var regexName = /^[A-Za-z]+$/;
    var regexAddress = /^[A-Za-z]+$/;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(client.name.match(regexName) && client.address.match(regexAddress) && client.email.match(regexEmail)){
        return true;
    }
    else{
        return false;
    }
}