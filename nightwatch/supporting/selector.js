module.exports = {

    fields: {
        wid: 'input[name="widInput"]',
        hdr: 'input[name="hdrInput"]',
        mke: 'input[name="mkeInput"]',
        ori: 'input[name="oriInput"]',
        nam: 'input[name="namInput"]',
        sex: {
            dropDown: 'select[name="sexInput"]',
            female: 'option[value="F"]',
            male: 'option[value="M"]',
            other: 'option[value="O"]',
            unknown: 'option[value="U"]'
        },
        race: {
            dropDown: 'select[name="racInput"]',
            asian: 'option[value="A"]',
            black: 'option[value="B"]',
            hispanic: 'option[value="H"]',
            americanIndian: 'option[value="I"]',
            white: 'option[value="W"]',
            unknown: 'option[value="U"]'
        },
        hgt: 'input[name="hgtInput"]',
        wgt: 'input[name="wgtInput"]',
        hai: 'input[name="haiInput"]',
        off: 'input[name="offInput"]',
        dow: 'input[name="dowInput"]', //date of warrant
        oln: 'input[name="olnInput"]', //Driver's license #
        ols: 'input[name="olsInput"]', // DL state
        old: 'input[name="oldInput"]', // DL expiration date
        lic: 'input[name="licInput"]', //license plate
        lis: 'input[name="lisInput"]', //license state
        lid: 'input[name="lidInput"]', // license expiration date
        resInput: 'input[name="resInput"]', //reason for cancellation
        doc: 'input[name="datInput"]',  //date of cancellation
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
    resultList: 'ul[id="errorList"]',
    page: 'div[id="outerContainer"]',
    intro: 'td[colspan="2"]',
    header: 'span[name="hdrHeader"]',
    mke: 'span[name="mkeHeader"]',
    oai: 'span[name="oriHeader"]',
    name: 'span[name="namHeader"]',
    sex: 'span[name="sexHeader"]',
    race: 'span[name="racHeader"]',
    height: 'span[name="hgtHeader"]',
    weight: 'span[name="wgtHeader"]',
    hair: 'span[name="haiHeader"]',
    offense: 'span[name="offHeader"]',
    dow: 'span[name="dowHeader"]',
    dL: 'span[name="olnHeader"]',
    dLs: 'span[name="olsHeader"]',
    dLexp: 'span[name="oldHeader"]',
    lP: 'span[name="licHeader"]',
    lS: 'span[name="lisHeader"]',
    lExpd: 'span[name="lidHeader"]',
    wrntId: 'span[name="widHeader"]',
    rFc: 'span[name="resHeader"]', //reason for cancellation
    dOc: 'span[name="datHeader"]', //date of cancellation
    pageTitle: 'h1[class="titleBar"]',
    welcomeScreen: 'div[id="welcomeScreen"]',
    version: 'h6[name="version"]',
    pageWrap: 'div[id="pageWrap"]',

    output: {
        header: 'h4[id="validHeader"]',
        queryTitle: 'span[name="queryTitle"]',
        result: 'span[name="queryBody"]'

    },
    error_4: 'span[name="queryTitle"]'
    
    
}
