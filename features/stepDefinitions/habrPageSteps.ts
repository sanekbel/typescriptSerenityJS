import { browser,ExpectedConditions,by, element } from "protractor";
import { HabrHomePage } from "../pageObjects/habrHome.page";
import { HabrDevPage } from "../pageObjects/habrDev.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function habrSteps()
{
    this.setDefaultTimeout(11000);

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

    this.Then(/^I find a "(.*?)" element$/, async (element: string) => {
        await habrHome.ElementIsPresented(element);
    });

    this.Then(/^that "(.*?)" element has "(.*?)" text$/, async (element: string, text: string) => {
        await habrHome.ElementHasText(element, text);
    });
}