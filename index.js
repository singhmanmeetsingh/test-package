const checkstring = (str) =>{
    if (typeof str === 'string' || str instanceof String){
        return true
    } else{
        return false
    }
}

module.exports = checkstring;