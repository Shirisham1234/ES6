 const Account=require('./AC')
 class CA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal = 25000
    constructor(id, name,email,amount){
        super(name,email)
        this.acc_Id = id 
        this.acc_Bal = amount
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}



let ca1= new CA(102, "Priyanka","pg@gmail.com", 2500000);
console.log(ca1)


console.log(ca1.get_Bal())