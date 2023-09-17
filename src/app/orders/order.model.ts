import {Producto} from "../products/product.model";
import {User} from "../users/user.model";
import {BaseModel} from "../base.model";

interface Order extends  BaseModel{
    products: Producto[];
    user: User;
}