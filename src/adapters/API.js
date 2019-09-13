const endpoint = "http://localhost:3000"
const signupURL = `${endpoint}/users`
const loginURL = `${endpoint}/login`
const validateURL = `${endpoint}/validate`
const horoscopeURL = `${endpoint}/horoscopes` 
const todayhoroscopeURL = `${endpoint}/today`
const starsignURL = `${endpoint}/starsigns`


const jsonify = res => {
    if (res.ok)
        return res.json()
    else
        throw res.json()
}

const handleServerError = response => {
    throw response
}

const saveToken = data => {
    localStorage.setItem('token', data.token)
    return data.user
}

const constructHeaders = (moreHeaders = {}) => (
    {
        'Authorization': localStorage.getItem('token'),
        ...moreHeaders
    }
)

const signUp = (user) => fetch(signupURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
}).then(jsonify)
.then(saveToken)
.catch(handleServerError)

const logIn = (user) => fetch(loginURL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
}).then(jsonify)
.then(saveToken)
.catch(handleServerError)

const validateUser = () => {
    if (!localStorage.getItem('token')) return Promise.resolve({error: 'no token'})

    return fetch(validateURL, {
        headers: constructHeaders()
    }).then(jsonify)
    .then(saveToken)
    .catch(handleServerError)
}

const clearToken = () => localStorage.removeItem('token')

const getHoroscope = (user) => {
    return fetch(todayhoroscopeURL)
    .then(jsonify)
    .then(data => data.find(data => data.starsign_id === user.starsign_id))
}

const getStarSignHoroscope = (starsign) => {
    return fetch(todayhoroscopeURL)
    .then(jsonify)
    .then(data => data.find(data => data.starsign_id === starsign.id))
}


// const getHoroscope = (user) => {
//     return fetch(horoscopeURL)
//     .then(jsonify)
//     .then(data => data.find(data => data.starsign_id === user.starsign_id))
// }

export default {
    signUp,
    logIn,
    validateUser,
    clearToken, 
    getHoroscope,
    getStarSignHoroscope
}