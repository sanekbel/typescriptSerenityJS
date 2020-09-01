import { browser, ExpectedConditions, by, element } from "protractor";
import { onlinerHomeObj } from "../../objectRepository/onliner/onlinerHome.obj";

const defaultTimeout: number = browser.params.defaultTimeout;
const expect = ExpectedConditions;

export class OnlinerHomePage{

    readonly onlinerHomeElements = new onlinerHomeObj;
    readonly baseUrl: string= "https://onliner.by";

    public async OpenOnlinerHome(){
        await browser.navigate().to(this.baseUrl);
    }

    public async onlinerIframeIsLoaded(){
        await browser.wait(expect.presenceOf(this.onlinerHomeElements.frame), defaultTimeout);
    }

    public async CatalogFrameIsPresent(){
        await browser.switchTo().frame(this.onlinerHomeElements.frame.getWebElement());
        await browser.wait(expect.presenceOf(this.onlinerHomeElements.frameCatalog), defaultTimeout);
        await this.onlinerHomeElements.frameCatalog.click();
    }

    public async CheckTheUrl(url: string){
        await browser.wait(expect.urlIs(url));
    }

    public async CarDropdownIsPresent(){
        await browser.wait(expect.presenceOf(this.onlinerHomeElements.carDropdown));
    }

    public async ChooseTheCar(car: string){
        await this.onlinerHomeElements.carDropdown.click();
        await browser.wait(expect.presenceOf(element(by.xpath(`//option[contains(@value, ${car})]`))));
        element(by.xpath(`//option[contains(@value, ${car})]`)).click();
    }

    public async DropdownHasText(text: string){
        await browser.wait(expect.textToBePresentInElementValue(this.onlinerHomeElements.carDropdown, text));
    }
}