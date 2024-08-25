function addTwo(num: number):number{

    return num + 2
}
addTwo(5)

function getUpper(val:string){
    return val.toLocaleUpperCase()
}
getUpper("abhi")

function signUpUser(name: string , email:string,password:string,isPaid:Boolean){

}
signUpUser("Abhishek","acds@gmail.com","hbfhB",true)

let LOGINuSER = (name:string,email:string,isPaid:boolean = false) =>{
    if(isPaid === void 0){isPaid = false;}
}
LOGINuSER("h","a")

function getValue(myVal:number){
    if(myVal > 5){
        return true;
    }
    return "200 OK"
}

const getHello = (s: string): string=>{
    return ""
}

const heroes = ["thor","spiderman","ironman"]
// const heroes = [1,3]
heroes.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errormessage: string): void{
    console.log(errormessage); 
}
function hanndleError(errormessage: string): never{
    // console.log(errormessage); 
    throw new Error(errormessage);
}

export{}