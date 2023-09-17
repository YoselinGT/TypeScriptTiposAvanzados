export const createProduct = (
    id: string | number,
    stock?: number,
    isNew?: boolean
) => {
    return {
        id,
        // stock: stock || 10,
        // isNew: isNew || true
        stock: stock ?? 10,
        isNew: isNew ?? true
    }
}

const p1= createProduct(1,12,true)
console.log(p1)
const p2= createProduct(1)
console.log(p2)

const p3= createProduct(1,0,false)
console.log(p3)
