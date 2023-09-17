import {faker} from '@faker-js/faker'
import {addProducto, findProducts, productos, updateProducto} from "./products/product.service";


/*

 addProducto({
        id: faker.string.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        color: faker.color.human(),
        price: parseInt(faker.commerce.price(),10),
        stock: faker.number.int({min: 10, max:100}),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(['cat', 'dog', 'mouse']),
        size: faker.helpers.arrayElement(["M","S","XL","L"]),
        category: {
            id: faker.string.uuid(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
            name: faker.commerce.department()
        }
    })

* */

for(let i = 0; i < 50; i ++){
    addProducto({
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        color: faker.color.human(),
        price: parseInt(faker.commerce.price(),10),
        stock: faker.number.int({min: 10, max:100}),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(['cat', 'dog', 'mouse']),
        size: faker.helpers.arrayElement(["M","S","XL","L"]),
        categoryId: faker.string.uuid()
    })
}

console.log("productos",productos)

const producto = productos[0]

updateProducto(producto.id, {
    title: 'Nuevo titulo',
    stock: 80
})

findProducts({
    stock: 10,
    color: 'red'
})