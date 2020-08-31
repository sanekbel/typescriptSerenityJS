import { by, element } from "protractor";

export class habrDevObj{
    readonly searchField = element(by.id("searc-form-btn"));
    readonly logo = element(by.css("div.page-header.page-header_110"));
}