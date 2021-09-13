export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Adress,
    phone: string,
    website: string,
    company: Compagny
}

interface Adress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

interface Geo {
    lat: string,
    lng: string
}

interface Compagny {
    name: string,
    catchPhrase: string,
    bs: string
}