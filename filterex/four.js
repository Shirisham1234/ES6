let cars=[
    {model:"Maruthi", brand:"swift",price:700000 , color:"White"},
    {model:"Tata", brand:"punch",price:600000, color:"red"},
    {model:"Maruthi", brand:"alto",price:200000 , color:"White"},
    {model:"Tata", brand:"curv",price:1800000, color:"red"},
    {model:"Maruthi", brand:"swift",price:700000 , color:"White"},
    {model:"Velar", brand:"RR",price:9000000, color:"blue"},
    {model:"Mahindra", brand:"xuv",price:22000000 , color:"Blaci"},
    {model:"Tata", brand:"Safari",price:3200000, color:"red"},
    {model:"Maruthi", brand:"Brezza",price:1700000 , color:"Orange"},
    {model:"Mahindra", brand:"xuv300",price:1600000, color:"red"},
    {model:"Mahindra", brand:"Thar",price:3200000 , color:"White"},
    {model:"Tata", brand:"nexon",price:1500000, color:"red"},
    ]
    //print all red color cars and car names
    /*let new_cars=cars.filter((car)=>{
        return car.color="red"
    })
    console.log(new_cars)*/

    //print all cars,price above 50 lacks with filter

//let new_cars=cars.filter(car => car.price>5000000)
let new_cars=[]
for(car of cars){
    if(car.price>5000000){
    new_cars.push(car)
}
}
   console.log(new_cars) 
    