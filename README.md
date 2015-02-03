# protractor-testlink
Protractor calculator tested and helped by testlink

 Clone, or download the repo to your computer.
 
 The Test project has been created already. Is PTR_CAL_-:Protractor Calculator.
 
 The test Plan is: Test Plan 1.
 
 The Test suite has been created with these 3 tests.
 

##Pre requisites
* npm install -g protractor

* webdriver-manager update

* webdriver-manager install


##Steps
* Enter http://demo.testlink.org/latest/index.php. 
user: user_aragon, pass: user_aragon. Has the Leader role. 

* Go to test executions to see the results

### In your project directory
npm install testlink-api-client

You will have to add an object to line 831 in \User\testlink-api-client\lib\testlinkapi.js

status: {

      value: params.status || 'status',
      
      type: 'string'
      
  }
  
  
Its important to set the port in the RPCurl (line 23 in spec.js) because this plugin checks for it.
Be aware that the api attributes are not camelCased.

At last: 

protractor conf.js



##Notes
If you dont know any id or something(like passed tests, or test case id), use your browser console to inspect elements and see how test links manage them
