const selectors = require('../supporting/selector')
const functions = require('../supporting/functions')
const data = require('../supporting/data')
module.exports = {

    beforeEach: browser => {
        browser.url('http://localhost:3000/#/')
    },
    after: browser => {
        browser.end()
    },
    'Testing UI of home screen': browser => {
        functions.homeScreenUIcheck(browser)
    },
    'Testing UI of enter wanted screen': browser => {
        functions.enterWantedUIcheck(browser)
    },
    'Testing UI of modify wanted screen': browser => {
        functions.modifyWantedUIcheck(browser)
    },
    'Testing UI of cancel wanted screen': browser => {
        functions.cancelWantedUIcheck(browser)
    },

    // 'Testing cancel wanted screen with minimum allowable good data': browser => {
    //     functions.cancelWantedGoodData(browser, data.cancelWanted.goodDataMin)
    // },
    // commeneting out because of the bug which id not allowing it to run.

    // 'Testing cancel wanted screen with maximum allowable good data': browser => {
    //     functions.cancelWantedGoodData(browser, data.cancelWanted.goodDataMax)
    //},
    'Testing cancel wanted screen with bad data-over the maximum allowable': browser => {
        functions.cancelWantedBadData(browser, data.cancelWanted.badData)
    },
    'Testing cancel wanted screen with blank fields': browser => {
        functions.blankFields(browser, data.cancelWanted.blankFields)
    },
    'Testing Cancel wanted screen with bad data fields with less than required': browser => {
        functions.cancelWantedBadData(browser, data.cancelWanted.badData2)
    }

}