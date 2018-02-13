const selectors = require('./selector')
module.exports = {


    homeScreenUIcheck: (browser) => {
        browser.expect.element(selectors.pageTitle).text.to.contain('Wanted Queries')
        browser.expect.element(selectors.buttons.menu).to.be.visible
        browser.expect.element(selectors.page).text.to.contain('Welcome to "Wanted Queries". This application will format and display query outputs to a criminal database similar to the NCIC\'s. The screens are summarized below, and can be accessed through the menu to the top left.')
        browser.expect.element(selectors.welcomeScreen).text.to.contain('Enter Wanted')
        browser.expect.element(selectors.welcomeScreen).text.to.contain('This query is to generate a new warrant.')
        browser.expect.element(selectors.welcomeScreen).text.to.contain('Modify Wanted')
        browser.expect.element(selectors.welcomeScreen).text.to.contain('This query is to modify an existing warrant.')
        browser.expect.element(selectors.welcomeScreen).text.to.contain('Cancel Wanted')
        browser.expect.element(selectors.welcomeScreen).text.to.contain('This query is to close out an existing warrant.')
        browser.expect.element(selectors.welcomeScreen).text.to.contain('Required fields will be marked this way when empty, and this way when in error.')
        browser.expect.element(selectors.version).text.to.contain('Version 1.1')
    },

    enterWantedUIcheck: (browser) => {
        browser.click(selectors.buttons.menu)
            .waitForElementVisible(selectors.buttons.enterWanted, 2000)
            .click(selectors.buttons.enterWanted)
            .waitForElementVisible(selectors.buttons.clear, 2000)
        browser.expect.element(selectors.pageWrap).text.to.contain('Wanted Queries')
        browser.expect.element(selectors.page).text.to.contain('Enter Wanted')
        browser.expect.element(selectors.pageWrap).text.to.contain('Fields highlighted in blue are required, others are optional. If hilighted in red, there is an error with that field. When ready, click "submit" for an assembled query, or a list of errors if any exist. You can also click "clear" to clear out the field.')
        browser.expect.element(selectors.buttons.menu).to.be.visible
        browser.assert.visible(selectors.buttons.clear)
        browser.assert.visible(selectors.buttons.submit)
        browser.expect.element(selectors.pageWrap).text.to.contain('Submit query for validation.')
        browser.assert.visible(selectors.header)
        browser.assert.visible(selectors.mke)
        browser.assert.visible(selectors.oai)
        browser.assert.visible(selectors.name)
        browser.assert.visible(selectors.sex)
        browser.assert.visible(selectors.race)
        browser.assert.visible(selectors.height)
        browser.assert.visible(selectors.weight)
        browser.assert.visible(selectors.hair)
        browser.assert.visible(selectors.offense)
        browser.assert.visible(selectors.dow)
        browser.assert.visible(selectors.dL)
        browser.assert.visible(selectors.dLs)
        browser.assert.visible(selectors.dLexp)
        browser.assert.visible(selectors.lP)
        browser.assert.visible(selectors.lS)
        browser.assert.visible(selectors.lExpd)
        browser.expect.element(selectors.version).text.to.contain('Version 1.1')
    },

    modifyWantedUIcheck: (browser) => {
        browser.click(selectors.buttons.menu)
            .waitForElementVisible(selectors.buttons.modifyWanted, 2000)
            .click(selectors.buttons.modifyWanted)
            .waitForElementVisible(selectors.buttons.submit, 2000)
        browser.expect.element(selectors.pageTitle).text.to.contain('Wanted Queries')
        browser.expect.element(selectors.page).text.to.contain('Modify Wanted')
        browser.expect.element(selectors.buttons.menu).to.be.visible
        browser.expect.element(selectors.pageWrap).text.to.contain('Fields highlighted in blue are required, others are optional. If hilighted in red, there is an error with that field. When ready, click "submit" for an assembled query, or a list of errors if any exist. You can also click "clear" to clear out the field.')       
        browser.assert.visible(selectors.buttons.clear)
        browser.assert.visible(selectors.buttons.submit)
        browser.expect.element(selectors.page).text.to.contain('Submit query for validation.')
        browser.assert.visible(selectors.wrntId)
        browser.assert.visible(selectors.header)
        browser.assert.visible(selectors.mke)
        browser.assert.visible(selectors.oai)
        browser.assert.visible(selectors.name)
        browser.assert.visible(selectors.sex)
        browser.assert.visible(selectors.race)
        browser.assert.visible(selectors.height)
        browser.assert.visible(selectors.weight)
        browser.assert.visible(selectors.hair)
        browser.assert.visible(selectors.offense)
        browser.assert.visible(selectors.dow)
        browser.assert.visible(selectors.dL)
        browser.assert.visible(selectors.dLs)
        browser.assert.visible(selectors.dLexp)
        browser.assert.visible(selectors.lP)
        browser.assert.visible(selectors.lS)
        browser.assert.visible(selectors.lExpd)
        browser.expect.element(selectors.version).text.to.contain('Version 1.1')
    },

    cancelWantedUIcheck: (browser) => {
        browser.click(selectors.buttons.menu)
            .waitForElementVisible(selectors.buttons.cancelWanted, 2000)
            .click(selectors.buttons.cancelWanted)
            .waitForElementVisible(selectors.buttons.submit, 2000)
        browser.expect.element(selectors.pageTitle).text.to.contain('Wanted Queries')
        browser.expect.element(selectors.pageWrap).text.to.contain('Fields highlighted in blue are required, others are optional. If hilighted in red, there is an error with that field. When ready, click "submit" for an assembled query, or a list of errors if any exist. You can also click "clear" to clear out the field.')
        browser.expect.element(selectors.buttons.menu).to.be.visible
        browser.expect.element(selectors.pageWrap).text.to.contain('Cancel Wanted')     
        browser.assert.visible(selectors.buttons.clear)
        browser.assert.visible(selectors.buttons.submit)
        browser.expect.element(selectors.page).text.to.contain('Submit query for validation.')
        browser.assert.visible(selectors.wrntId)
        browser.assert.visible(selectors.rFc)
        browser.assert.visible(selectors.dOc)
        browser.expect.element(selectors.version).text.to.contain('Version 1.1')
    },
    cancelWantedGoodData : (browser, data) => {
        browser
            .click(selectors.buttons.menu)
            .waitForElementVisible(selectors.buttons.cancelWanted, 2000)
            .click(selectors.buttons.cancelWanted)
            .waitForElementVisible(selectors.buttons.submit, 2000)
            .clearValue(selectors.fields.wid)
            .setValue(selectors.fields.wid, data.wid)
            .verify.value(selectors.fields.wid, data.wid)

            .clearValue(selectors.fields.resInput)
            .setValue(selectors.fields.resInput, data.resInput)
            .verify.value(selectors.fields.resInput, data.resInput)
            
            .clearValue(selectors.fields.doc)
            .setValue(selectors.fields.doc, data.doc)
            .verify.value(selectors.fields.doc, data.docOutput)
            
            .click(selectors.buttons.submit)
            browser.expect.element(selectors.output.header).text.to.equal(data.header)
            browser.expect.element(selectors.output.queryTitle).text.to.equal(data.queryTitle)
            browser.expect.element(selectors.output.result).text.to.equal(data.result)           
    },
    cancelWantedBadData: (browser, data) => {
        browser
            .click(selectors.buttons.menu)
            .waitForElementVisible(selectors.buttons.cancelWanted, 2000)
            .click(selectors.buttons.cancelWanted)
            .waitForElementVisible(selectors.buttons.submit, 2000)
            .clearValue(selectors.fields.wid)
            .setValue(selectors.fields.wid, data.wid)
            .verify.value(selectors.fields.wid, data.wid)

            .clearValue(selectors.fields.resInput)
            .setValue(selectors.fields.resInput, data.resInput)
            .verify.value(selectors.fields.resInput, data.resInput)
            
            .clearValue(selectors.fields.doc)
            .setValue(selectors.fields.doc, data.doc)
            //.verify.value(selectors.fields.doc, data.docOutput)
            
            .click(selectors.buttons.submit)

            browser.expect.element(selectors.resultList).text.to.contain(data.resultList_1)
            browser.expect.element(selectors.resultList).text.to.contain(data.resultList_2)
            browser.expect.element(selectors.resultList).text.to.contain(data.resultList_3)
            browser.expect.element(selectors.error_4).text.to.equal(data.resultList_4)
    },
    blankFields: (browser, data) => {
        browser
            .click(selectors.buttons.menu)
            .waitForElementVisible(selectors.buttons.cancelWanted, 2000)
            .click(selectors.buttons.cancelWanted)
            .waitForElementVisible(selectors.buttons.submit, 2000)

            .clearValue(selectors.fields.wid)
            .setValue(selectors.fields.wid, data.wid)
            .verify.value(selectors.fields.wid, data.wid)
            .clearValue(selectors.fields.wid)

            .clearValue(selectors.fields.resInput)
            .setValue(selectors.fields.resInput, data.resInput)
            .verify.value(selectors.fields.resInput, data.resInput)
            
            .clearValue(selectors.fields.doc)
            .setValue(selectors.fields.doc, data.doc)
            .click(selectors.buttons.submit)

            browser.expect.element(selectors.resultList).text.to.contain(data.resultList_1)
            browser.expect.element(selectors.resultList).text.to.contain(data.resultList_2)
            browser.expect.element(selectors.resultList).text.to.contain(data.resultList_3)
            browser.expect.element(selectors.error_4).text.to.equal(data.resultList_4)
    }
}