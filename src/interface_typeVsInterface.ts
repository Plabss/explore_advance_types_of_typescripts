type User={
    name:string;
    age:number;
};

type extendedUser=User &{
    role:string;
}

interface IUser{
    name:string;
    age:number;
}

interface IExtendedUser extends IUser{
    role:string;
}

const userWithTypeAlias:User={
    name:"Type Alias",
    age:100
}

const userWithTypeInterface:IUser={
    name:"Interface",
    age:200
}

const user2WithTypeInterface:IExtendedUser={
    name:"Interface",
    age:200,
    role:"unknown"
}

type rollNumbersType=number[];
const rollNumbers1:rollNumbersType=[1,2,3];

interface IRollNumberType{
    [index:number]:string;
}
const rollNumbers2:IRollNumberType=['1','2','3'];