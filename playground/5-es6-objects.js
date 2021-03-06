// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

// Object destructuring

const product = {
    label: {
        id: 1,
        name: 'Red Notebook'
    },
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const {label:productLabel, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label:{name, id} = {name: 'None', id: 'WithoutId'}, stock = 0} = {}) => {
    console.log(type, name, id, stock)
}

transaction('order', product)