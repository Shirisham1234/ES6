let employees=[
    {id:101,name:"siri",sal:45000},
    {id:102,name:"pavi",sal:55000},
]
let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{

    
    setTimeout(()=>{
        let dbflag=true
        if(dbflag){
            resolve("Data inserted")
            employees.push(emp)
        }
        else{
            reject("Failed")
        }


    },4000)

})
}
let getEmployees=()=>{
setTimeout(()=>{
    let rows=""
    for(employee of employees){
        rows = rows + `<tr>
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.sal}</td>
        </tr>`
    }
    document.getElementById('abc').innerHTML =rows
},2000)
}
let   exec =async ()=>{
 await createEmployee({id:103,name:"anu",sal:65000})
getEmployees()
}
exec()


