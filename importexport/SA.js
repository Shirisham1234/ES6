const Account=require('./AC')
class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal = 500;
    constructor(id, name,email,amount){
        super(name,email)
        this.acc_Id = id 
        this.acc_Bal =amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}
let sa1=new SA(101,"Rahul","RG@gmail.com",50000)

console.log(sa1)
console.log(sa1.get_Bal())