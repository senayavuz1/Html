export var mesaj:string ="ilk module kavramim";

let mesaj2:string="let mesaj string";
export class Employee{
    private  empcode:string;
    spmName:string;
    constructor(name:string,code:string){
        this.spmName=name;
        this.empcode=code;
    }
    displayEmployee(){
        console.log("Employee Code"+this.empcode + " , Employee Name:"+ this.spmName);
    }
}

let companyName= "xyz";

export class A{

}
export class B{

}
export class C{

}

