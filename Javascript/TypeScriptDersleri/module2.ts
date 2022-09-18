import { Employee, mesaj } from "./module1";
import * as  os from "node:os";

console.log(os.homedir());
// test from  "./module1";

console.log(mesaj);

let ali:Employee =  new Employee("Ali","al123");

ali.displayEmployee();
console.log(ali.spmName);


