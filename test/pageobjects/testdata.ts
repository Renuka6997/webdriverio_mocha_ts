import randomemail from "./randomemail";

class Testdata {

    accountData = {
        email : randomemail.randommail(),
        password : "123lk67",
        date : '6  ',
        month : '4',
        year : '2000',
        firstname : "renuka",
        lastName : "B",
        address : "36/2",
        addressline : "game street" ,
        city : "vizag",
        state : '1',
        pincode : "00000",
        country : '21',
        phone : "9999988888",
        address2 : "78/2, dane street"
    }
}
export default new Testdata();