let goToGoa=(success,failure)=>{
    let acc_bal=45000;
    if(acc_bal>45000){
        success("Go to Goa! Enjoy")
    }
    else{
        failure("Go to PG! Sleep")
    }
}
goToGoa((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})