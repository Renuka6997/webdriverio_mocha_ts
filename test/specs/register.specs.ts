
import constants from "../pageobjects/constants";
import registerPage from "../pageobjects/register.page";
import {expect} from 'chai';

describe("login and register in the application", function() {

    it("create an account ", function() {
        browser.url('/');
        browser.maximizeWindow();
        registerPage.getSignin();
        registerPage.getCreateAcc(constants.accountData.email);
    })

    it("filling personal information", function() {
        const title = registerPage.getPageTitle();
        console.log('login page title is : ', title);
        expect("Login - My Store").to.equal(title);
        registerPage.getTitle();
        registerPage.getFName(constants.accountData.firstname);
        registerPage.getLName(constants.accountData.lastName);
        registerPage.getPassword(constants.accountData.password);
        registerPage.getDate();
        registerPage.getMonth();
        registerPage.getYear();
    })

    it("registering by giving address", function() {
        registerPage.getAddress(constants.accountData.address);
        registerPage.getAdressLine(constants.accountData.addressline);
        registerPage.getCity(constants.accountData.city);
        registerPage.getState();
        registerPage.getZipcode(constants.accountData.pincode);
        registerPage.getCountry();
        registerPage.getPhone(constants.accountData.phone);
        registerPage.getAddress2(constants.accountData.address2);
        registerPage.getRegbutton();
    })
})
