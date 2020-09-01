import { by, element } from "protractor";

export class onlinerHomeObj{
    readonly frame = element(by.css('iframe.modal-iframe'));
    readonly frameCatalog = element(by.css('script#result-item-catalog'));
}