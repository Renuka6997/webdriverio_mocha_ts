class ElementPage {

    doClick(element) {
        element.waitForDisplayed();
        element.click();
    }

    doSetValue(element, value : string) {
        element.waitForDisplayed();
        element.setValue(value);
    }

    doGetPageTitle() {
        return browser.getTitle();
    }
}
export default new ElementPage();