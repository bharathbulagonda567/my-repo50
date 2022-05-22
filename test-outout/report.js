$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/uxer/Downloads/CucumberSeleniumFramework-master/CucumberSeleniumFramework-master/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#without Examples Keyword"
    },
    {
      "line": 5,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#"
    },
    {
      "line": 7,
      "value": "#Given user is already on Login Page"
    },
    {
      "line": 8,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 9,
      "value": "#Then user enters \"naveenk\" and \"test@123\""
    },
    {
      "line": 10,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 11,
      "value": "#Then user is on home page"
    },
    {
      "line": 14,
      "value": "#with Examples Keyword"
    }
  ],
  "line": 16,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "in home page enter search \"\u003csearchstring\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify search results",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "searchstring"
      ],
      "line": 29,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "brajusr",
        "Welcome*123",
        "git"
      ],
      "line": 30,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "brajusr",
        "test456",
        "git"
      ],
      "line": 31,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    },
    {
      "cells": [
        "brajusr",
        "Welcome*123",
        "git"
      ],
      "line": 32,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 285200,
  "status": "passed"
});
formatter.before({
  "duration": 205100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"brajusr\" and \"Welcome*123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "in home page enter search \"git\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify search results",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 10774484900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 13753700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "brajusr",
      "offset": 13
    },
    {
      "val": "Welcome*123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 487946000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10240207400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 28900300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "git",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.enterSearchstring_on_hopme_page(String)"
});
formatter.result({
  "duration": 50215592800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_search_results()"
});
formatter.result({
  "duration": 40928500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Git Pocket Guide\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RCDUI6V\u0027, ip: \u0027172.22.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\uxer\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61064}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 10fc0072bc8fbcb2f86d5283f1f58b1b\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Git Pocket Guide\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.LoginStepDefinition.verify_search_results(LoginStepDefinition.java:80)\r\n\tat ✽.Then verify search results(C:/Users/uxer/Downloads/CucumberSeleniumFramework-master/CucumberSeleniumFramework-master/src/main/java/Features/login.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 86200,
  "status": "passed"
});
formatter.after({
  "duration": 75200,
  "status": "passed"
});
formatter.before({
  "duration": 87400,
  "status": "passed"
});
formatter.before({
  "duration": 76900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"brajusr\" and \"test456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "in home page enter search \"git\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify search results",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 8635950300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 22094000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "brajusr",
      "offset": 13
    },
    {
      "val": "test456",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 398559700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10066442700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 5133400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "git",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.enterSearchstring_on_hopme_page(String)"
});
formatter.result({
  "duration": 50057528400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#searchBox\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RCDUI6V\u0027, ip: \u0027172.22.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\uxer\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61122}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2cb41e03529d1aee4b22ba39df7d51d8\n*** Element info: {Using\u003did, value\u003dsearchBox}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.LoginStepDefinition.enterSearchstring_on_hopme_page(LoginStepDefinition.java:70)\r\n\tat ✽.And in home page enter search \"git\"(C:/Users/uxer/Downloads/CucumberSeleniumFramework-master/CucumberSeleniumFramework-master/src/main/java/Features/login.feature:23)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_search_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 139700,
  "status": "passed"
});
formatter.after({
  "duration": 102800,
  "status": "passed"
});
formatter.before({
  "duration": 902900,
  "status": "passed"
});
formatter.before({
  "duration": 184800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enters \"brajusr\" and \"Welcome*123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "in home page enter search \"git\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "verify search results",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 9870178400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_free_CRM()"
});
formatter.result({
  "duration": 9524500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "brajusr",
      "offset": 13
    },
    {
      "val": "Welcome*123",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 396001600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 10092200200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_hopme_page()"
});
formatter.result({
  "duration": 5999500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "git",
      "offset": 27
    }
  ],
  "location": "LoginStepDefinition.enterSearchstring_on_hopme_page(String)"
});
formatter.result({
  "duration": 50270270400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verify_search_results()"
});
formatter.result({
  "duration": 16225900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027Git Pocket Guide\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.54)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RCDUI6V\u0027, ip: \u0027172.22.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.54, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\uxer\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61175}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9e6482f70ef986f0e232ed5faa8ab93f\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027Git Pocket Guide\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.LoginStepDefinition.verify_search_results(LoginStepDefinition.java:80)\r\n\tat ✽.Then verify search results(C:/Users/uxer/Downloads/CucumberSeleniumFramework-master/CucumberSeleniumFramework-master/src/main/java/Features/login.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 103900,
  "status": "passed"
});
formatter.after({
  "duration": 57900,
  "status": "passed"
});
});