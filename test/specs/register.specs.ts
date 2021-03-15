
import registerPage from "../pageobjects/register.page";


describe("login and register in the application", function() {

    it("create an account ", function() {
        browser.url('/');
        browser.maximizeWindow();
        registerPage.getSignin();
        registerPage.getCreateAcc("ryan@gmail.com");
    })

    it("filling personal information", function() {
        const title = registerPage.getPageTitle();
        console.log('login page title is : ', title);
        registerPage.getTitle();
        registerPage.getFName("pinky");
        registerPage.getLName("G");
        registerPage.getPassword("re4567");
        registerPage.getDate();
        registerPage.getMonth();
        registerPage.getYear();
    })

    it("registering by giving address", function() {
        registerPage.getAddress("36/2");
        registerPage.getAdressLine("game street")
        registerPage.getCity("vizag");
        registerPage.getState();
        registerPage.getZipcode("530087");
        registerPage.getCountry();
        registerPage.getPhone("9999988888");
        registerPage.getAddress2("78/2, dane street");
        registerPage.getRegbutton();
    })
})
