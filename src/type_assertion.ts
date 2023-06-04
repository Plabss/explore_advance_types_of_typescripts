let emni:any;
emni="Next level web dev";
console.log((emni as string).charAt(5));


function kgToGram(param:(string|number)):(string|number){
    if(typeof param==='string'){
        const gram=parseFloat(param)*1000;
        return `${param} kg = ${gram} gram`;
    }else{
        return param*1000;
    }
}
const ans=kgToGram('12') as string;
const ans2=kgToGram(12) as number;


type CustomErrorType={
    message:string;
}

try {
    
} catch (error) {
    console.log((error as CustomErrorType).message);
}
