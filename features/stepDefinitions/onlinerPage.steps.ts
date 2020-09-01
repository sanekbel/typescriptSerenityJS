import { browser,ExpectedConditions,by, element } from "protractor";
import { OnlinerHomePage } from "../pageObjects/onliner/onlinerHome.page";

const defaultTimeout = browser.params.defaultTimeout;

export = function habrSteps()
{
    this.setDefaultTimeout(defaultTimeout);

    let onlinerHome = new OnlinerHomePage;

    this.Given(/^I navigate to onliner page$/, async () => {
        await onlinerHome.OpenOnlinerHome();
    });

    this.Then(/^onliner iframe is loaded$/, async () => {
        await onlinerHome.onlinerIframeIsLoaded();
    });

    this.Then(/^I click on Catalog button in iframe$/, async () => {
        await onlinerHome.CatalogFrameIsPresent();
    });

    this.Then(/^I am on Catalog page$/, async () => {
        await onlinerHome.CheckTheUrl('https://catalog.onliner.by');
    });

    this.Then(/^onliner car dropdown is loaded$/, async () => {
        await onlinerHome.CarDropdownIsPresent();
    });

    this.Then(/^I check "(.*?)" car from dropdown$/, async (car: string) => {
        await onlinerHome.ChooseTheCar(car);
    });

    this.Then(/^dropdown has "(.*?)" text$/, async (car: string) => {
        await onlinerHome.onlinerHomeElements.carDropdown
    });
}