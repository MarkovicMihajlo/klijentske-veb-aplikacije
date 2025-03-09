import { UserModel } from "../models/user.model"

export class UserService{

    static retrieveUsers() : UserModel[]{
        if(!localStorage.getItem('users')){
            const arr: UserModel[] = [
                {
                    email : 'user@example.com',
                    password : 'user123',
                    orders : []
                }
            ]
            localStorage.setItem('users', JSON.stringify(arr))
        }
        
        return JSON.parse(localStorage.getItem('users')!)
    
    }

    static login(email : string, passowrd : string): boolean{
        
        for(let user of this.retrieveUsers()){

            if(user.email === email && user.password === passowrd){
                localStorage.setItem('active', user.email)
                return true
            }

        }

        return false

    }

    static getActiveUser() : UserModel | null{

        if(!localStorage.getItem('active')) 
            return null
        for(let user of this.retrieveUsers()){

            if(user.email == localStorage.getItem('active')){
                return user
            }

        }

        return null

    }

    static changePassword(newPassword : string) : boolean{
    
        const arr = this.retrieveUsers()

        for(let user of arr){
            if(user.email == localStorage.getItem('active')){
                user.password = newPassword
                localStorage.setItem('users', JSON.stringify(arr))
                return true
            }
        }
        
        return false
    
    }

}