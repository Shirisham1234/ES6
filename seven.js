let employees=["rahul","sonia","priyanka"]
let new_Employees=employees.map(function(emp_Name){
    return emp_Name.length>6
})
console.log(new_Employees)