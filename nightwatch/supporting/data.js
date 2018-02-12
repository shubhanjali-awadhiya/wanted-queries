module.exports = {
    cancelWanted: {
        goodDataMin: { // min allowed
            wid: '4444455555',
            resInput: '1Test Test',
            doc: '02/08/2018',
            docOutput: '2018-02-08',
            header: 'Valid',
            queryTitle: 'Assembled Query:',
            result: '4444455555.1Test Test.2018-02-08',
        },
        goodDataMax: { // min allowed
            wid: '4444455555',
            resInput: '1This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test',
            doc: '12/31/2025',
            docOutput: '2025-12-31',
            header: 'Valid',
            queryTitle: 'Assembled Query:',
            result: '4444455555.1This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test.2025-12-31'
        },
        badData: {  //over the maximum allowable
            wid: '4444455555555',
            resInput: '1This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test This is a test',
            doc: '02/31/2021',
            header: 'Errors Received:',
            resultList_1: 'The "Warrant ID" field should be 10 characters long.',
            resultList_2: 'The "Reason for Cancellation" field should be between 5 and 150 characters long.',
            resultList_3: 'The field named "Date of Cancellation" must be included.',
            resultList_4: 'No results generated due to error.'
        },
        blankFields: {
            wid:' ',
            resInput: '',
            doc: '',
            header: 'Errors Received:',
            //resultList_1: 'The field named "Warrant ID" must be included.',
            resultList_2: 'The field named "Reason for Cancellation" must be included.',
            resultList_3: 'The field named "Date of Cancellation" must be included.',
            resultList_4: 'No results generated due to error.'
        }
    }
}

