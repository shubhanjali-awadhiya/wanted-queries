const selectors = require('../test_data/selectors')
const data = require('../test_data/data')
const functions = require('../test_data/functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    'Under the required field limits enter wanted test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.enterWanted, 3000)
        browser.click(selectors.buttons.enterWanted)
        browser.pause(200)
        functions.enterFields(selectors.fields, data.test1.inputs, browser)
        functions.enterDates(selectors.dateFields, data.test1.dateInputs, browser)
        functions.enterDropDowns(selectors.dropDowns,  data.test1.dropDownPicks, browser)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('The "Header" field should be between 9 and 19 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "MKE" field should be between 2 and 4 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Originating Agency Identifier" field should be 9 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Name" field should be between 3 and 30 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Weight" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Hair" field should be between 3 and 10 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Offense" field should be between 5 and 15 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.')
        browser.expect.element(selectors.resultList).text.to.contain('The "DL State" field should be 2 characters long.')
        //browser.expect.element(selectors.resultList).text.to.contain('The "DL Expiration Date" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.')
        browser.expect.element(selectors.resultList).text.to.contain('The "License State" field should be 2 characters long.')
        //browser.expect.element(selectors.resultList).text.to.contain('The "License Expiration Date" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.')
    },
    'Over the required field limits enter wanted test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.enterWanted, 3000)
        browser.click(selectors.buttons.enterWanted)
        browser.pause(200)
        functions.enterFields(selectors.fields, data.test2.inputs, browser)
        functions.enterDates(selectors.dateFields, data.test2.dateInputs, browser)
        functions.enterDropDowns(selectors.dropDowns,  data.test2.dropDownPicks, browser)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('The "Header" field should be between 9 and 19 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "MKE" field should be between 2 and 4 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Originating Agency Identifier" field should be 9 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Height" field should be 3 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Weight" field should be between 1 and 3 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Hair" field should be between 3 and 10 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Offense" field should be between 5 and 15 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Date of Warrant/Violation" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "DL State" field can only include a valid State/Territory abbreviation.')
        browser.expect.element(selectors.resultList).text.to.contain('The "License Plate" field should be between 5 and 8 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "License State" field can only include a valid State/Territory abbreviation.')
        browser.expect.element(selectors.resultList).text.to.contain('If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.')
        browser.expect.element(selectors.resultList).text.to.contain('If one of the following are present, all must be present: License Plate, License State, License Expiration Date.')
    },
    'Blank fields enter wanted test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.enterWanted, 3000)
        browser.click(selectors.buttons.enterWanted)
        browser.pause(200)
        browser.expect.element(selectors.buttons.submit).to.not.to.enabled
        browser.setValue(selectors.fields.hdr, '1')
        browser.clearValue(selectors.fields.hdr)
        browser.verify.value(selectors.fields.hdr, '')
        browser.pause(3000)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('The "Header" field should be between 9 and 19 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "MKE" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Originating Agency Identifier" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Name" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Sex" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Race / Ethnicity" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Height" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Weight" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Hair" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Offense" field must be included.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Date of Warrant/Violation" field must be included.')
    },
    'Minimum requirements - good data test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.enterWanted, 3000)
        browser.click(selectors.buttons.enterWanted)
        browser.pause(200)
        functions.enterFields(selectors.fields, data.test3.inputs, browser)
        functions.enterDates(selectors.dateFields, data.test3.dateInputs, browser)
        functions.enterDropDowns(selectors.dropDowns,  data.test3.dropDownPicks, browser)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('Assembled Query: aaaa !@#$.B$.AAAA55555.A3#.F.A.001.001.Blk.DR3$!.1900-01-01.#.AK.1900-01-01.123CR.AK.1900-01-01')
        browser.expect.element(selectors.resultList).text.to.contain('Valid')
    },
    'Maximum requirements - good data test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.enterWanted, 3000)
        browser.click(selectors.buttons.enterWanted)
        browser.pause(200)
        functions.enterFields(selectors.fields, data.test4.inputs, browser)
        functions.enterDates(selectors.dateFields, data.test4.dateInputs, browser)
        functions.enterDropDowns(selectors.dropDowns,  data.test4.dropDownPicks, browser)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('Assembled Query: aaaa BBBB !@#$ 1119.BB$$.AAAA55555.First LAST !@#$ 1111 (">?") 30.U.U.999.999.BlckBlckBB.drunken $#?$1!5.2018-02-09.HHHHH 1234 !@#$ "11".WI.2018-01-29.123CRIME.WI.2018-01-29')
        browser.expect.element(selectors.resultList).text.to.contain('Valid')
    },
    'Required fields only - good data test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.enterWanted, 3000)
        browser.click(selectors.buttons.enterWanted)
        browser.pause(200)
        functions.enterFields(selectors.fields, data.test5.inputs, browser)
        functions.enterDates(selectors.dateFields, data.test5.dateInputs, browser)
        functions.enterDropDowns(selectors.dropDowns,  data.test5.dropDownPicks, browser)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('Assembled Query: 123456789.BBB.AAAA55555.Lavar Ball.M.A.606.240.Black.Fraud.2018-02-09.123.AK.2018-02-09...')
        browser.expect.element(selectors.resultList).text.to.contain('Valid')
    },
    'Under the required field limits modify wanted test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.modifyWanted, 3000)
        browser.click(selectors.buttons.modifyWanted)
        browser.pause(200)
        browser.setValue(selectors.wid, '123456789')
        functions.enterFields(selectors.fields, data.test6.inputs, browser)
        functions.enterDates(selectors.dateFields, data.test6.dateInputs, browser)
        functions.enterDropDowns(selectors.dropDowns,  data.test6.dropDownPicks, browser)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('The "Warrant ID" field should be 10 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Header" field should be between 9 and 19 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "MKE" field should be between 2 and 4 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Originating Agency Identifier" field should be 9 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Name" field should be between 3 and 30 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Hair" field should be between 3 and 10 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Offense" field should be between 5 and 15 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Date of Warrant/Violation" field must be entered as a date, MM/DD/YYYY, no earlier than 01/01/1900 and no later than today\'s date.')
        browser.expect.element(selectors.resultList).text.to.contain('The "DL State" field should be 2 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "License State" field should be 2 characters long.')
    },
    'Over the required field limits modify wanted test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.modifyWanted, 3000)
        browser.click(selectors.buttons.modifyWanted)
        browser.pause(200)
        browser.setValue(selectors.wid, '12345678901')
        functions.enterFields(selectors.fields, data.test7.inputs, browser)
        functions.enterDates(selectors.dateFields, data.test7.dateInputs, browser)
        functions.enterDropDowns(selectors.dropDowns,  data.test7.dropDownPicks, browser)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('The "Warrant ID" field should be 10 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Header" field should be between 9 and 19 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "MKE" field should be between 2 and 4 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Originating Agency Identifier" field should be 9 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Height" field should be 3 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Weight" field should be between 1 and 3 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Hair" field should be between 3 and 10 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "Offense" field should be between 5 and 15 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "DL State" field can only include a valid State/Territory abbreviation.')
        browser.expect.element(selectors.resultList).text.to.contain('The "License Plate" field should be between 5 and 8 characters long.')
        browser.expect.element(selectors.resultList).text.to.contain('The "License State" field can only include a valid State/Territory abbreviation.')
        browser.expect.element(selectors.resultList).text.to.contain('If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.')
        browser.expect.element(selectors.resultList).text.to.contain('If one of the following are present, all must be present: License Plate, License State, License Expiration Date.')
    },
    'Blank fields modify wanted test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.modifyWanted, 3000)
        browser.click(selectors.buttons.modifyWanted)
        browser.pause(200)
        browser.setValue(selectors.wid, '1234567890')
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('At least one optional field needs to be included.')
    },
    'Minimum requirements - modify good data test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.modifyWanted, 3000)
        browser.click(selectors.buttons.modifyWanted)
        browser.pause(200)
        browser.setValue(selectors.wid, '1234567890')
        functions.enterFields(selectors.fields, data.test8.inputs, browser)
        functions.enterDates(selectors.dateFields, data.test8.dateInputs, browser)
        functions.enterDropDowns(selectors.dropDowns,  data.test8.dropDownPicks, browser)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('Assembled Query: 1234567890.aaaa !@#$.B$.AAAA55555.A3#.F.A.001.001.Blk.DR3$!.1900-01-01.#.AK.1900-01-01.123CR.AK.1900-01-01')
        browser.expect.element(selectors.resultList).text.to.contain('Valid')
    },
    'Maximum requirements - modify good data test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.modifyWanted, 3000)
        browser.click(selectors.buttons.modifyWanted)
        browser.pause(200)
        browser.setValue(selectors.wid, '1234567890')
        functions.enterFields(selectors.fields, data.test9.inputs, browser)
        functions.enterDates(selectors.dateFields, data.test9.dateInputs, browser)
        functions.enterDropDowns(selectors.dropDowns,  data.test9.dropDownPicks, browser)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('Assembled Query: 1234567890.aaaa BBBB !@#$ 1119.BB$$.AAAA55555.First LAST !@#$ 1111 (">?") 30.U.U.999.999.BlckBlckBB.drunken $#?$1!5.2018-02-09.HHHHH 1234 !@#$ "11".WI.2018-01-29.123CRIME.WI.2018-01-29')
        browser.expect.element(selectors.resultList).text.to.contain('Valid')
    },
    'Required fields only - modify good data test': browser => {
        browser.waitForElementVisible(selectors.buttons.menu, 3000)
        browser.click(selectors.buttons.menu)
        browser.waitForElementVisible(selectors.buttons.modifyWanted, 3000)
        browser.click(selectors.buttons.modifyWanted)
        browser.pause(200)
        browser.setValue(selectors.wid, '1234567890')
        functions.enterFields(selectors.fields, data.test10.inputs, browser)
        functions.enterDates(selectors.dateFields, data.test10.dateInputs, browser)
        functions.enterDropDowns(selectors.dropDowns,  data.test10.dropDownPicks, browser)
        browser.click(selectors.buttons.submit)
        browser.expect.element(selectors.resultList).text.to.contain('Assembled Query: 1234567890.123456789.BBB.AAAA55555.Lavar Ball.M.A.606.240.Black.Fraud.2018-02-09.123.AK.2018-02-09...')
        browser.expect.element(selectors.resultList).text.to.contain('Valid')
    },
}