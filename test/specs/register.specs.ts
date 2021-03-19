
import constants from "../pageobjects/constants";
import registerPage from "../pageobjects/register.page";
import {expect} from 'chai';
import testdata from "../pageobjects/testdata";
import elementPage from "../pageobjects/element.page";

describe("login and register in the application", function() {

    it("create an account ", function() {
        browser.url('/');
        browser.maximizeWindow();
        registerPage.getSignin();
        registerPage.getCreateAcc(testdata.accountData.email);
        console.log(testdata.accountData.email);
        elementPage.doWait(constants.titles.LOGIN_TITLE);
        const title1 = registerPage.getPageTitle();
        console.log('login page title is : ', title1);
        expect(constants.titles.LOGIN_TITLE).to.equal(title1);
    })

    it("filling personal information", function() {
        registerPage.getTitle();
        registerPage.getFName(testdata.accountData.firstname);
        registerPage.getLName(testdata.accountData.lastName);
        registerPage.getPassword(testdata.accountData.password);
        registerPage.getDate(testdata.accountData.date);
        registerPage.getMonth(testdata.accountData.month);
        registerPage.getYear(testdata.accountData.year);
    })

    it("registering by giving address", function() {
        registerPage.getAddress(testdata.accountData.address);
        registerPage.getAdressLine(testdata.accountData.addressline);
        registerPage.getCity(testdata.accountData.city);
        registerPage.getState(testdata.accountData.state);
        registerPage.getZipcode(testdata.accountData.pincode);
        registerPage.getCountry(testdata.accountData.country);
        registerPage.getPhone(testdata.accountData.phone);
        registerPage.getAddress2(testdata.accountData.address2);
        registerPage.getRegbutton();
        elementPage.doWait(constants.titles.ACCOUNT_TITLE);
        const title2 = registerPage.getPageTitle();
        console.log('account page title is : ', title2);
        expect(constants.titles.ACCOUNT_TITLE).to.equal(title2);
    })

    it("adding the product to the cart", function() {
        registerPage.getWomentag();
        registerPage.getTshirttag();
        const title3 = registerPage.getPageTitle();
        elementPage.doWait(constants.titles.ORDER_TITLE);
        console.log('ordered page title is : ', title3);
        expect(constants.titles.ORDER_TITLE).to.equal(title3);
        registerPage.getProduct();
        registerPage.getAddtoCart();
    })

    it("proceeding to checkout", function() {
        registerPage.getProceed();  
        registerPage.getSummary();
        elementPage.doWait(constants.titles.PURCHASE_TITLE);
        const title4 = registerPage.getPageTitle();
        console.log('purchase page title is : ', title4);
        expect(constants.titles.PURCHASE_TITLE).to.equal(title4);
        registerPage.getCheckaddress();
        registerPage.getCheckbox();
        registerPage.getShipping();
    })
})
