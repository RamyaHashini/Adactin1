$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking in Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Login in the Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the Adactin in Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"\u003cUsername\u003e\" in Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click the Login Button And it Navigates to search Hotel page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;",
  "rows": [
    {
      "cells": [
        "Username",
        "password"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;1"
    },
    {
      "cells": [
        "jivita04",
        "123456"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2"
    },
    {
      "cells": [
        "ABC",
        "123"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;3"
    },
    {
      "cells": [
        "DEF",
        "456"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "User Login in the Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the Adactin in Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"jivita04\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"123456\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click the Login Button And it Navigates to search Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_the_Adactin_in_Application()"
});
formatter.result({
  "duration": 3133956500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jivita04",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 262153000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 137606100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_Login_Button_And_it_Navigates_to_search_Hotel_page()"
});
formatter.result({
  "duration": 430934600,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User Login in the Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the Adactin in Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"ABC\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"123\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click the Login Button And it Navigates to search Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_the_Adactin_in_Application()"
});
formatter.result({
  "duration": 442671600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 154712400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 154881600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_Login_Button_And_it_Navigates_to_search_Hotel_page()"
});
formatter.result({
  "duration": 378947700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Login in the Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the Adactin in Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"DEF\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"456\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click the Login Button And it Navigates to search Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_the_Adactin_in_Application()"
});
formatter.result({
  "duration": 204002200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DEF",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 180491400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_the_in_password_field(String)"
});
formatter.result({
  "duration": 150765100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_the_Login_Button_And_it_Navigates_to_search_Hotel_page()"
});
formatter.result({
  "duration": 333462300,
  "status": "passed"
});
});