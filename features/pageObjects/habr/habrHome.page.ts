import { browser, ExpectedConditions, ElementFinder } from "protractor";
import { habrHomeObj } from "../../objectRepository/habr/habrHome.obj";
import { Before } from "cucumber";

const defaultTimeout: number = browser.params.defaultTimeout;
const expect = ExpectedConditions;

export class HabrHomePage{

    readonly habrHomeElements = new habrHomeObj;

    public async OpenHabrHome(){
        await browser.navigate().to(browser.baseUrl);
    }

    public async HabrHomeLoaded(){
        await browser.wait(expect.presenceOf(this.habrHomeElements.logo), defaultTimeout);
        await browser.wait(expect.elementToBeClickable(this.habrHomeElements.developmentButton));
        await browser.wait(expect.presenceOf(this.habrHomeElements.developmentButton), defaultTimeout);
    }

    public async DevelopmentLogoLoaded(){
        await browser.wait(expect.presenceOf(this.habrHomeElements.developmentLogo), defaultTimeout);
    }

    public async ElementIsPresented(element: string){
        let habrElement: ElementFinder;
        switch(element){
            case "loginButton":
                habrElement = this.habrHomeElements.loginButton;
                break;
            default:
                habrElement = this.habrHomeElements.loginButton;
        }
        await browser.wait(expect.presenceOf(this.habrHomeElements.loginButton), defaultTimeout);
    }

    public async ElementHasText(element: string, text: string){
        let habrElement: ElementFinder;
        switch(element){
            case "login":
                habrElement = this.habrHomeElements.loginButton;
                break;
            default:
                habrElement = this.habrHomeElements.loginButton;
        }

        await browser.wait(expect.textToBePresentInElement(habrElement, text), 1000, `The ${element} element don't have ${text} text`);
       // browser.switchTo().frame(this.habrHomeElements.frame.getWebElement())
    }
}