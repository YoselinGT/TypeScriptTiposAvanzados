import {Producto} from "./product.model";

export interface CreateProductDto extends  Omit<Producto, 'id' | 'createdAt' | 'updatedAt' | 'category' > {
    categoryId: string
}

type example = Pick<Producto, 'color' | 'description'>
export interface  UpdateProductDto extends Partial<CreateProductDto> {}

type example2 = Required<Producto>

export interface  FindProductDto extends Readonly<Partial<Omit<Producto, 'tags'>>> {
    //readonly tags: ReadonlyArray<'string'>
}