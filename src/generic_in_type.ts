type GenericType<T>=Array<T>;

 const rollNumbers:GenericType<number>=[1,2,3,4];
 const rollNumbers3:GenericType<string>=['1','2','3','4'];
 const bolleanArray:GenericType<boolean>=[true,false,true];

 type nameRollType={name:string;roll:number};
 const userNameAndRollNumber:GenericType<nameRollType>=[
    {
        name:"A",
        roll:1
    },
    {
        name:"B",
        roll:2
    },
    {
        name:"C",
        roll:3
    }
 ]

 type GenericTuple<X,Y>=[X,Y];
 const relation:GenericTuple<string,number>=["Plabon",24];


 const relationWithSalary:GenericTuple<object,string>=[{
    name:"Plabon",
    salary:1000
 },
 "Hania Amir"
]

const relationWithSalary2:GenericTuple<{name:String,salary:number},string>=[{
    name:"Plabon",
    salary:1000
 },
 "Hania Amir"
]