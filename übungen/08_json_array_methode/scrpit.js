let myObjectArr = [
    {
        "name":"Max",
        "age": 7,
        "is_a_good_guy": true 
    },
    {
        "name":"Peter",
        "age": 19,
        "is_a_good_guy": false 
    },
    {
        "name":"Arnold",
        "age": 4,
        "is_a_good_guy": true 
    },
    {
        "name":"Justus",
        "age": 50,
        "is_a_good_guy": true 
    },
    {
        "name":"Bombur",
        "age": 17,
        "is_a_good_guy": false 
    }
];

console.log (
   myObjectArr.findIndex((guy) => {return guy ["name"] == "Justus"}),
   myObjectArr.findIndex((guy) => {return guy ["age"] == 19})
);


console.log(
    myObjectArr.filter((element) => {return element['is_a_good_guy']  == true}),
    myObjectArr.filter((element) => {return element['age']  > 18} ),
);
