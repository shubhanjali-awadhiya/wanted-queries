const selectors = require('./selectors')

module.exports = {
    enterFields: (selector, inputs, browser) => {
        let keys = Object.getOwnPropertyNames(selector)
        keys.forEach((key) => {
            browser
                .clearValue(selector[key])
                .setValue(selector[key], inputs[key])
                .verify.value(selector[key], inputs[key])
        })
    },
    enterDates: (selector, inputs, browser) => {
        let keys = Object.getOwnPropertyNames(selector)
        keys.forEach((key) => {
            browser
                .clearValue(selector[key])
                .setValue(selector[key], inputs[key])
                //.verify.value(selector[key], inputs[key])
        })
    },
    enterDropDowns: (selector, inputs, browser) => {
        
        browser.click(selectors.dropDowns.sex.dropDown + ' ' + selectors.dropDowns.sex[inputs.sex])
        browser.click(selectors.dropDowns.rac.dropDown + ' ' + selectors.dropDowns.rac[inputs.rac])
    }
}