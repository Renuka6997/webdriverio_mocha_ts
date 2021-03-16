
import elementPage from "./element.page"

class RegisterPage {
    
    get signin() { return $("//a[@title = 'Log in to your customer account']")}
    get email() { return $("//input[@id='email_create']")}
    get createacc() { return $("//i[@class='icon-user left']")}
    get title() { return $("//input[@id='id_gender2']")}
    get fname() { return $("//input[@id='customer_firstname']")}
    get lname() { return $("//input[@id='customer_lastname']")}
    get pwd() { return $('#passwd')}
    get date() { return $('#days')}
    get month() { return $('#months')}
    get year() { return $('#years')}
    get address() { return $('#address1')}
    get addressline() {return $("//input[@id='address2']")}
    get city() { return $('#city')}
    get state() { return $('#id_state')}
    get zipcode() { return $('#postcode')}
    get country() { return $('#id_country')}
    get phone() { return $('#phone_mobile')}
    get address2() { return $('#alias')}
    get regbutton() { return $("//span[.='Register']")}

    getPageTitle() {
        return elementPage.doGetPageTitle();
    }
    getSignin() {
        elementPage.doClick(this.signin);
    }

    getCreateAcc(email : string) {
        elementPage.doSetValue(this.email, email);
        elementPage.doClick(this.createacc);
    }

    getTitle() {
        elementPage.doClick(this.title);
    }

    getFName(firstname : string) {
        elementPage.doSetValue(this.fname, firstname);
    }

    getLName(lastname : string) {
        elementPage.doSetValue(this.lname, lastname);
    }
      
    getPassword(pass : string) {
        elementPage.doSetValue(this.pwd, pass);
    }

    getDate() {
        this.date.selectByAttribute('value', '6');
    }

    getMonth() {
        this.month.selectByAttribute('value', '4');
    }

    getYear() {
        this.year.selectByAttribute('value','2000')
    }

    getAddress(add1 : string) {
        elementPage.doSetValue(this.address, add1);
    }

    getAdressLine(addline : string) {
        elementPage.doSetValue(this.addressline, addline);
    }

    getCity(cname : string) {
        elementPage.doSetValue(this.city, cname);
    }

    getState() {
        this.state.selectByAttribute('value', '1');
    }

    getZipcode(code : string) {
        elementPage.doSetValue(this.zipcode, code);
    }

    getCountry() {
        this.country.selectByAttribute('value', '21');
    }

    getPhone(phnum : string) {
        elementPage.doSetValue(this.phone, phnum);
    }

    getAddress2(add2 : string) {
        elementPage.doSetValue(this.address2, add2);
    }

    getRegbutton() {
        elementPage.doClick(this.regbutton);
    }

}
export default new RegisterPage();