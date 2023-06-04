// Arrow function
const createArray=(param:string):string[]=>{
    return [param];
}
const result=createArray('asdfgh');


const createArray1=<T>(param:T):T[]=>{
    return [param];
}
const result1=createArray1<string>('asdfgh');
const result2=createArray1<boolean>(false);
const result3=createArray1<{name:string}>({name:"Bangladesh"});


//spread Operator

const crush="kane";
const myInfo={
    name:"Plabon",
    age:100,
    salary:1000000000000,
};
const newdata={
    ...myInfo,crush
}

const createArray2=<X,Y>(param1:X,param2:Y):[X,Y]=>{
    return [param1,param2];
}

function createArray3<X,Y>(param1:X,param2:Y):[X,Y]{
    return [param1,param2];
}