import { browser, ExpectedConditions } from "protractor";
import { habrHomeObj } from "../objectRepository/habr.home.obj";

const defaultTimeout: number = browser.params.defaultTimeout;
const expect = ExpectedConditions;

export class HabrHomePage{

    readonly habrHomeElements = new habrHomeObj;

    public async OpenHabrHome(){
        await browser.navigate().to(browser.baseUrl);
    }

    public async HabrHomeLoaded(){
        await browser.wait(expect.presenceOf(this.habrHomeElements.logo), defaultTimeout);
        await browser.wait(expect.presenceOf(this.habrHomeElements.developmentButton), defaultTimeout);
    }

    public async DevelopmentLogoLoaded(){
        await browser.wait(expect.presenceOf(this.habrHomeElements.developmentLogo), defaultTimeout);
    }
}