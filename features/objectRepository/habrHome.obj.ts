import { by, element } from "protractor";

export class habrHomeObj{
    readonly logo = element(by.className("logo"));
    readonly searchField = element(by.id("searc-form-btn"));
    readonly developmentButton = element(by.xpath("//a[contains(@href,'https://habr.com/en/flows/develop/')]"));
    readonly developmentLogo = element(by.css("div.page-header.page-header_110"));
    readonly loginButton = element(by.id('login'));
}