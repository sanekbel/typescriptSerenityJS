import { by, element } from "protractor";

export class habrDevObj{
    readonly searchField = element(by.id("searc-form-btn"));
    readonly logo = element(by.xpath('/html/body/div[1]/div[3]/div/div[1]/div[1]/div[1]'));
}