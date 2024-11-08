# PetStore-Swagger API Automation
**The PetStore-Swagger API has been automated using Playwright API Automation tool**


### Prequisite

Ensure following softwares installed in your local machine
- Visual Studio
-  Node.js
-  npm
- 
### Language
- JavaScript

### Configuration and Setup
1. Clone/Download the SreedharPasupuleti-CBATest Branch to your local machine
2. Open project folder from Visual Studio Code
3. Open **Terminal** in Visual Studio Code
4. Run the following commands
'''bash
npm install playwright@latest
npm install -g allure-commandline --save-dev

Note: Choose JavaScript as Programming Language whne prompted
 (for reporting in html format)
5. From Visual Studio Code, go to extensions and install **Playwright Test for VSCode** 
6. Save the project to finalise the setup

### How to Run:
Open the TEST EXPLORER in Visual Studio Code
Click on Refresh to view the tests-api --> Swagger_pet_Tests --> tests hierarchy
After refreshing you will see all the tests created for PetStore
Select each test and run as desired
Verify the status code and validation checks under TEST RESULTS section

**Run below command from Terminal**
To generate and view the test report in Allure, run the following command in the Terminal:
allure serve my-allure-results 


