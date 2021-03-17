import randomemail from "./randomemail";

class Testdata {

    accountData = {
        email : randomemail.randommail(),
        password : "123lk67",
        firstname : "renuka",
        lastName : "B",
        address : "36/2",
        addressline : "game street" ,
        city : "vizag",
        pincode : "00000",
        phone : "9999988888",
        address2 : "78/2, dane street"
    }
}
export default new Testdata();