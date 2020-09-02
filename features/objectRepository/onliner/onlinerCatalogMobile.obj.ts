import { by, element } from "protractor";

export class onlinerCatalogMobileObj{
    readonly checkboxFilterXiaomi = element(by.xpath('//*[@id="schema-filter"]/div[3]/div[6]/div[2]/ul/li[1]/label/span[1]/span'));    
    readonly FilterXiaomi = element(by.css('span.schema-tags__text')).element(by.cssContainingText('tag.text', 'Xiaomi'));

    //div//ul//input[@value="xiaomi"]

    //*[@id="schema-filter"]/div[3]/div[6]/div[2]/ul/li[1]/label/span[1]/span

    //div[@class="schema-filter__fieldset"]/div[2]/ul/li[1]/label/span/span

    //div[@class="schema-filter__fieldset"]/div[@class="schema-filter__facet"]/ul/li[1]/label/span/span
}