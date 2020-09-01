import { browser, ExpectedConditions, ElementFinder } from "protractor";
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
        await browser.wait(expect.visibilityOf(this.onlinerHomeElements.frameCatalog), defaultTimeout);
        await this.onlinerHomeElements.frameCatalog.click();
    }

    public async CheckTheUrl(url: string){
        await browser.wait(expect.urlIs(url));
    }
}