var TestLinkAPI = require('testlink-api-client');
var utilites = require('testlink-api-client/lib/utilities');

/**
 * Update Result for a given TestCase.
 *
 *  @method reportTCResult
 *  @param  {object}     testPlanId
 *  @param  {object}     testCaseExternalId
 *  @param  {object}     buildId
 *  @param  {object}     notes
 *  @param  {object}     status
 *  @param  {object}     platformName
 *  @param  {object}     user
 *  @param  {object}     bugId
 *  @param  {function}   callback
 *  @return {Json object}JSON Object for TestCase Result
 */
TestLinkApi.prototype.reportTCResult = function(params, callback) {
    var post = utilites.postCompose(this.url),
        inputObject = {
        methodName: "reportTCResult",
        devKey: {
            value: this.devkey,
            type: "string"
        },
        testplanid: {
            value: params.testplanid || "testplanid",
            type: "int"
        },
        testcaseid: {
            value: params.testcaseid || "testcaseid",
            type: "string"
        },
        buildid: {
            value: params.buildid || "buildid",
            type: "string"
        },
        notes: {
            value: params.notes || "notes",
            type: "string"
        },
        platformname: {
            value: params.platformname || "platformname",
            type: "string"
        },
        user: {
            value: params.user || "user",
            type: "string"
        },
        bugid: {
            value: params.bugid || "bugid",
            type: "string"
        },
        // added to avoid error:
        //  { struct: { code: '150', message: 'No status provided.' } }
        status: {
            value: params.status || 'status',
            type: 'string'
        },
    },
        body = utilites.getRequestByObject(inputObject);
    utilites.postRequest(post, body, function(response) {
        var tcresult = utilites.getJsObjectByXmlResponse(response);
        callback(tcresult);
    });
};
