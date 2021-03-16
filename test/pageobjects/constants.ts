import randomemail from "./randomemail";

class Constants {

    accountData = {
        email : randomemail.randommail(),
        password : "123fe67",
        firstname : "Renuka",
        lastName : "B",
        address : "36/2",
        addressline : "game street" ,
        city : "vizag",
        pincode : "530087",
        phone : "9999988888",
        address2 : "78/2, dane street"
    }
}
export default new Constants();