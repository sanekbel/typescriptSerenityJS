import { browser, ExpectedConditions } from "protractor";
import { habrDevObj } from "../objectRepository/habr.dev.obj";

const defaultTimeout = browser.params.defaultTimeout;
const expect = ExpectedConditions;

export class HabrDevPage{

    readonly habrHomeElements = new habrDevObj;

    public async HabrDevLoaded(){
        await browser.wait(expect.presenceOf(this.habrHomeElements.logo), defaultTimeout);
    }
}