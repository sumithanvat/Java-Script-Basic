const Part_Time = 1;
const Full_Time = 2;
const Part_time_Hours = 4;
const Full_Time_Hours = 8;
const Wage_Per_Hours = 20;

let empHours = 0;
empCheck =Math.floor(Math.random()*10)%3;
switch(empCheck){
    case Part_Time:
    empHours=Part_time_Hours;
    break;
    case Full_Time:
    empHours=Full_Time_Hours;
    break;
    default:
    empHours=0;

}
let employeeWage = empHours * Wage_Per_Hours;
console.log("Emoployee Wage is :-" +employeeWage)