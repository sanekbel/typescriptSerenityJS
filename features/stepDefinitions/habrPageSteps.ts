import { browser,ExpectedConditions,by, element } from "protractor";
import { HabrHomePage } from "../pageObjects/habr.home.page";
import { HabrDevPage } from "../pageObjects/habr.dev.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function habrSteps()
{
    this.setDefaultTimeout(defaultTimeout);

    let habrHome = new HabrHomePage;
    let habrDev = new HabrDevPage;

    this.Given(/^I navigate to habr page$/, async () => {
        await habrHome.OpenHabrHome();
    });

    this.Then(/^I am on habr page$/, async () => {
        await habrHome.HabrHomeLoaded();
    });

    this.Then(/^I click on Development button$/, async () => {
        await habrHome.habrHomeElements.developmentButton.click();
    });

    this.Then(/^I am on Development page$/, async () => {
        await habrDev.HabrDevLoaded();
    });
}