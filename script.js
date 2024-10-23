hashes = [
    'c70698bda07fe1463b6c7936ae69578ef9e1b6cd2bdb5ed5f1204531b224b71b'
]
  
function passwordStrength(password) {
    let strength = 0

    if (password.length < 8){
        return 0
    }
const crypto = require('crypto')
const hash = crypto.createHash('sha256')
hash.update(password)
const hashValue = hash.digest('hex')
if (hashes.includes(hashValue))
{
    return 0
}

if (password.match(/[a-z]/) && password.match(/[A-Z]/)){
    strength++
}

if (password.match(/[0-9]/)) {
    strength++
}

if (password.match(/[^a-zA-Z0-9]/))
{
    strength++
}

return strength
}