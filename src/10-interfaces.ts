type Sizes = 'S' | 'M' | 'L' | 'XL';
interface Producto  {
    id: string | number
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
}

const productos: Producto[] = [];

productos.push({
    id: '1',
    title: 'p1',
    createdAt: new Date(),
    stock:90
})
