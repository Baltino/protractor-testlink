// spec.js

describe('angularjs homepage', function() {
	/* These asignations made me a little uncomfortable 
		Now I understand that these will be called when an action is done with them.
		Like firstNumber.sendKeys(a) -> will trigger the search in the DOM and will send the keys

	*/
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));
  var result;
  var TEST_CASE_1 = 44682,
  	TEST_CASE_2 = ,
  	TEST_CASE_3 = ;

/*api_key= '6ed224eb86f5bdda068635c90bebd702471c534b67c2bd43f809554e0d714d8d'*/
/*prefix='PTR_CAL_'*/
  var TestLinkAPI = require('testlink-api-client'),
	devKey="38a37bc818db0e9c9ee95a73ac9ba270",
	RPCUrl="http://demo.testlink.org:80/latest/lib/api/xmlrpc/v1/xmlrpc.php",
	testlink=new TestLinkAPI(devKey,RPCUrl),
	testProjectId=12,
	buildId=841,
	testsuiteid=44679,
	testPlanId=44696,
	testCaseId;

	
  //show test project
  testlink.getTestProjectByName({
  		testprojectname: 'Protractor Calculator'
	}, function(project){
		console.log('Test Project:');
		console.log(project);
  });

  //show test case
  testlink.getTestCaseIDByName({
  	testcasename: testCaseId
  }, function(testCase) {
  	console.log('Test Case:');
  	console.log(testCase);
  });


  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  afterEach(function() {
  	result = (jasmine.getEnv().currentSpec.results_.passedCount) ? 'p' : 'f';
	
    testlink.reportTCResult({
		testplanid: testPlanId,
		testcaseid: testCaseId,
		buildid: buildId,
		notes: 'Note number 0',
		platformname: 'chrome',
		status: result,
		user: 'user_aragon',
		bugid: 12
	}, function(testCase) {
		console.log('Report test case:');
		console.log(testCase);
	});*/
  });

  it('should add one and two', function() {
  	testCaseId = TEST_CASE_1;
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();
    
    expect(latestResult.getText()).toEqual('3');
  });


  it('should add four and six and work like a form', function() {
  	testCaseId = TEST_CASE_2;
    firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);

    secondNumber.sendKeys('\n');//protractor.key.ENTER

    expect(latestResult.getText()).toEqual('10');
  });

  it('should have a history, and formatted accordingly', function() {
  	testCaseId = TEST_CASE_3;
    add(1, 2);
    add(3, 4);

    expect(history.last().getText()).toContain('1 + 2');//it works like a stack
    expect(history.first().getText()).toContain('3 + 4'); // This is wrong!
    

    add(5, 6);

    expect(history.count()).toEqual(3); // This is wrong!
  });
});
