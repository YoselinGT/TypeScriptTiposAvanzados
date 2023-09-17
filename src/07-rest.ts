import {ROLES, User} from "./01-enum";

const currentUser: User = {
    username: 'Yoselin',
    role: ROLES.ADMIN
}

export const checkAdminsrole = () => {
    if(currentUser.role === 'admin'){
        return true
    }
    return false
}

console.log("checkAdminsrole",checkAdminsrole())
export const checkRole = (role1:string, role2:string) => {
    if(currentUser.role === role1){
        return true
    }
    if(currentUser.role === role2){
        return true
    }
    return false
}

console.log("checkRole",checkRole(ROLES.ADMIN,ROLES.SELER))

export const checkRole2 = (role:string[]) => {
    if(role.includes(currentUser.role)){
        return true
    }
    return false
}

console.log("checkRole2",checkRole2([ROLES.ADMIN,ROLES.SELER]))


export const checkRole3 = (...role:string[]) => {
    if(role.includes(currentUser.role)){
        return true
    }
    return false
}

console.log("checkRole3",checkRole3(ROLES.ADMIN,ROLES.SELER))
