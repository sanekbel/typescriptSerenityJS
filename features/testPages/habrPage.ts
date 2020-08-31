import { browser, ExpectedConditions } from "protractor";
import { TestObj } from "../pageObjects/testObj";

const defaultTimeout: number = browser.params.defaultTimeout;
const expect = ExpectedConditions;

export class HabrPage{

    readonly habrElements = new TestObj;

    public async OpenPage(){
        await browser.navigate().to(browser.baseUrl);
    }

    public async HabrLoaded(){
        await browser.wait(expect.presenceOf(this.habrElements.logo), defaultTimeout);
        await browser.wait(expect.presenceOf(this.habrElements.developmentButton), defaultTimeout);
    }

    public async DevelopmentLoaded(){
        await browser.wait(expect.presenceOf(this.habrElements.developmentLogo), defaultTimeout)
    }
}