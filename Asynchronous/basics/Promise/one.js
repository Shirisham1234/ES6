let goToGoa=(success,failure)=>{
    let acc_bal=45000;
    acc_bal>45000 ? success("Go to goa!enjoy")
                   :failure("go to pg! sleep")    
}
goToGoa(()=>{},()=>{})