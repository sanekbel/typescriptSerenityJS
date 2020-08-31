import { browser,ExpectedConditions,by, element } from "protractor";
import { HabrPage } from "../testPages/habrPage";

const defaultTimeout = browser.params.defaultTimeout;

export = function habrPageSteps(){

    let habr = new HabrPage;

    this.Given(/^I navigate to habr page$/, async () => {
        await habr.OpenPage();
    });

    this.Then(/^I am on habr page$/, async () => {
        await habr.HabrLoaded();
    });

    this.Then(/^I click on Development button$/, async () => {
        await habr.habrElements.developmentButton.click();
    });

    this.Then(/^I am on Development page$/, async () => {
        await habr.DevelopmentLoaded;
    });
}