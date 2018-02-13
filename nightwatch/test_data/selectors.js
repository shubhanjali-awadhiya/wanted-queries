module.exports = {

    fields: {
        hdr: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        oai: 'input[name="oriInput"]',
        nam: 'input[name="namInput"]',
        hgt: 'input[name="hgtInput"]',
        wgt: 'input[name="wgtInput"]',
        hai: 'input[name="haiInput"]',
        off: 'input[name="offInput"]',
        oln: 'input[name="olnInput"]', //Driver's license #
        ols: 'input[name="olsInput"]', // DL state
        lic: 'input[name="licInput"]', //license plate
        lis: 'input[name="lisInput"]', //license state
        //resInput: 'input[name="resInput"]', //reason for cancellation
        //doc: 'input[name="datInput"]',  //date of cancellation
    },
    dateFields: {
        dow: 'input[name="dowInput"]', //date of warrant
        old: 'input[name="oldInput"]', // DL expiration date
        lid: 'input[name="lidInput"]',
    },
    dropDowns: {
        sex: {
            dropDown: 'select[name="sexInput"]',
            female: 'option[value="F"]',
            male: 'option[value="M"]',
            other: 'option[value="O"]',
            unknown: 'option[value="U"]'
        },
        rac: {
            dropDown: 'select[name="racInput"]',
            asian: 'option[value="A"]',
            black: 'option[value="B"]',
            hispanic: 'option[value="H"]',
            americanIndian: 'option[value="I"]',
            white: 'option[value="W"]',
            unknown: 'option[value="U"]'
        }
    },
    buttons: {
        menu: 'div[class="bm-burger-button"]',
        submit: 'button[id="saveBtn"]',
        clear: 'button[id="clearBtn"]',
        home: 'p[name="homeOption"]',
        enterWanted: 'p[name="enterOption"]',
        modifyWanted: 'p[name="modifyOption"]',
        cancelWanted: 'p[name="cancelOption"]',
        X: 'div[class="bm-cross-button"]'
    },
    wid: 'input[name="widInput"]',
    resultList: 'td[class="results"]',
    page: 'div[id="pageWrap"]'
 }