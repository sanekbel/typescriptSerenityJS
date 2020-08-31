import { by, element } from "protractor";

export class TestObj{
    readonly logo = element(by.className("logo"));
    readonly searchField = element(by.id("searc-form-btn"));
    readonly developmentButton = element(by.xpath("//a[contains(@href,'https://habr.com/en/flows/develop/')]"));
    readonly developmentLogo = element(by.xpath('/html/body/div[1]/div[3]/div/div[1]/div[1]/div[1]'));
}