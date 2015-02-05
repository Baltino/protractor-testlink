# protractor-testlink
Protractor calculator tested and helped by testlink

 Clone, or download the repo to your computer.
 
 The Test project has been created already. Is PTR_CAL_-:Protractor Calculator.
 
 The test Plan is: Test Plan 1.
 
 The Test suite has been created with these 3 tests.
 

##Pre requisites

### In your project directory
    
    npm install
    ./node_modules/.bin/webdriver-manager update
    ./node_modules/.bin/webdriver-manager install

On a new terminal

    ./node_modules/.bin/protractor conf.js

## Results

Login at http://demo.testlink.org/latest/index.php with user_aragon / user_aragon. Has the Leader role.
Go to test executions to see the results or simply follow below links:

* http://demo.testlink.org/latest/lib/execute/execHistory.php?tcase_id=44682
* http://demo.testlink.org/latest/lib/execute/execHistory.php?tcase_id=44843
* http://demo.testlink.org/latest/lib/execute/execHistory.php?tcase_id=44852

## Notes
Already done but note it's important to set the port in the RPCurl (line 23 in spec.js) because this plugin checks for it.
Be aware that the api attributes are not camelCased.

If you dont know any id or something (like passed tests, or test case id), use your browser console to inspect elements and see how test links manage them.
