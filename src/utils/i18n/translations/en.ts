import defaultTranslations from 'ra-language-english'

console.log(JSON.stringify(defaultTranslations, null, 2))
export default {
    ...defaultTranslations,
    "users": {
        "labels": {
            "id": "Id",
            "client": "Client",
            "firstName": "First name",
            "lastName": "Last name",
            "personType": "Person type",
            "email": "Email",
            "login": "Login"
        }
    },
    "resources": {
        "users": {
            "name": "Users",
        }
    }
}