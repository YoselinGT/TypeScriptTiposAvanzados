import {CreateProductDto, FindProductDto, UpdateProductDto} from "./product.dto";
import {faker} from '@faker-js/faker'
import {Producto} from "./product.model";

export const productos: Producto[] = [];

export const addProducto = (data: CreateProductDto): Producto => {
    const newProducto = {
        ...data,
        id: faker.string.uuid(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
        category: {
            id: data.categoryId,
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
            name: faker.commerce.department()
        }
    }

    productos.push(newProducto)

    return newProducto;
}

export const updateProducto =(id: Producto['id'], changes: UpdateProductDto) :Producto => {

    const index = productos.findIndex(item => item.id === id)

    const prevData = productos[index];

    productos[index] = {
        ...prevData,
        ...changes
    }

    return  productos[index];
}

export const findProducts = (dto: FindProductDto): Producto[] => {

    // FindProductDto.color = 'blue'; No permite modificarlos por que es un parametro solo de lectura
    
    return productos;
}
