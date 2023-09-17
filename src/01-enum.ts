export enum ROLES {
    ADMIN = 'admin',
    SELER = 'seller',
    CUSTOMER = 'customer'
}

export type User = {
    username : string;
    role: ROLES
}

const user: User = {
    username: 'Yoselin',
    role: ROLES.ADMIN
}
