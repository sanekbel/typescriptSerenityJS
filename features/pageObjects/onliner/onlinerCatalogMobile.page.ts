import { browser, ExpectedConditions, by, element } from "protractor";
import { onlinerCatalogMobileObj } from "../../objectRepository/onliner/onlinerCatalogMobile.obj";

const defaultTimeout: number = browser.params.defaultTimeout;
const expect = ExpectedConditions;

export class OnlinerCatalogMobilePage{

    readonly onlinerCatalogMobileElements = new onlinerCatalogMobileObj;
    readonly baseUrl: string= "https://catalog.onliner.by/mobile";

    public async OpenCatalogMobileHome(){
        await browser.navigate().to(this.baseUrl);
    }

    public async onlinerCatalogIsLoaded(){
        await browser.wait(expect.presenceOf(this.onlinerCatalogMobileElements.checkboxFilterXiaomi), defaultTimeout);
    }

    public async XiaomiCheckboxIsSelected(){
        await this.onlinerCatalogMobileElements.checkboxFilterXiaomi.click();
    }

    public async XiaomiIsShown(){
        await browser.wait(expect.presenceOf(this.onlinerCatalogMobileElements.FilterXiaomi), defaultTimeout);
    }
}