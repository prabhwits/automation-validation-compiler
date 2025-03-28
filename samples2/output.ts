function finder_fees_percetage_check(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload,"$.message.order.payments[*].tags[?(@.descriptor.code=='BUYER_FINDER_FEES')].list[?(@.descriptor.code=='BUYER_FINDER_FEES_PERCENTAGE')]");
    for(const testObj of scope){
        testObj._EXTERNAL = input.externalData;
        const value = payloadUtils.getJsonPath(testObj, '$.value')
        const reg = ["^[0-9]{1,2}$"]
        const nulls = ["null"]
        

        

const validate = (validations.noneIn(value, nulls)) && (validations.followRegex(value, reg))

        
        if(!validate){
            return [{
                valid: false,
                errorCode: "30000",
                description: `- **condition A**: all of the following sub conditions must be met:

  - **condition A.1**: no element of $.value must be in ["null"]
  - **condition A.2**: all elements of $.value must follow every regex in ["^[0-9]{1,2}$"]`
            }]
        }
    }
    return [{valid: true}];
}