interface CrushInterface<T,U=null>{
    name:string,
    husband:T,
    wife?:U,
}

const crush1:CrushInterface<boolean>={
    name:"Kate Winslet",
    husband:true
}

const crush2:CrushInterface<string>={
    name:"Kate Winslet",
    husband:"Plabon"
}

const crush3:CrushInterface<object>={
    name:"Kate Winslet",
    husband:{
        name:"Plabon",
        salary:10000000
    }
}

interface HusbandInterface{
    name:string,
    salary:number
}
interface WifeInterface{
    name:string,
    age:number
}

const crush4:CrushInterface<HusbandInterface>={
    name:"Kate Winslet",
    husband:{
        name:"Plabon",
        salary:10000000
    }
}

const crush5:CrushInterface<HusbandInterface,WifeInterface>={
    name:"Kate Winslet",
    husband:{
        name:"Plabon",
        salary:10000000
    },
    wife:{
        name:"Hania Amir",
        age:30
    }
}