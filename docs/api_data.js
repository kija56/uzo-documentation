define({ "api": [
  
  {
    "type": "POST",
    "url": "/api/v1/users",
    "title": "Create an account",
    "name": "Create_an_account",
    "description": "<p>An admin can create an account</p>",
    "group": "User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "POST-createUser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Admin JWT key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer thisisjwttokenshouldbeonger\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User full name</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "size": "6..20",
            "optional": false,
            "field": "username",
            "description": "<p>Username for login</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>If not provided will be auto generated</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"User\"",
              "\"Admin\"",
              "\"Moderator\""
            ],
            "optional": true,
            "field": "userGroup",
            "defaultValue": "User",
            "description": "<p>User group the user belongs to</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /api/account/create \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"name\":\"Jhon Snow\", \"username\":\"i_know_nothing\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/api/account/create',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'name': 'Jhon Snow',\n       'username': 'i_know_nothing'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  message: \"Username already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User full name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User full username</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "userGroup",
            "description": "<p>Group this user belongs to</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"Jhon Snow\",\n  \"userGroup\": \"User\",\n  \"username\": \"i_know_nothing\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/api/account/:id",
    "title": "DELETE an account",
    "name": "DELETE_an_account",
    "description": "<p>An admin can delete account</p>",
    "group": "User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "DELETE-deleteUser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Admin JWT key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer thisisjwttokenshouldbeonger\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X DELETE /api/account/5c444e1387e95374633c1e0d \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'DELETE',\n     url: '/api/account/5c444e1387e95374633c1e0d',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": 'Successfuly deleted'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"No account found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/api/account/:id",
    "title": "Get an account",
    "name": "Get_an_account",
    "description": "<p>An admin can get an account</p>",
    "group": "User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "GET-getUser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Admin JWT key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer thisisjwttokenshouldbeonger\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X GET /api/account/:id \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: '/api/account/:id',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"No account found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "User",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User full name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User full username</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "userGroup",
            "description": "<p>Group this user belongs to</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"Jhon Snow\",\n  \"userGroup\": \"User\",\n  \"username\": \"i_know_nothing\"\n}",
          "type": "json"
        }
      ]
    }
  },
  
  {
    "type": "PATCH",
    "url": "/api/account/:id",
    "title": "Patch Update an account",
    "name": "Patch_Update_an_account",
    "description": "<p>An admin can update account</p>",
    "group": "User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "PUT-updateFullUser"
      }
    ],
    "filename": "examples/api.route.js",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/api/account/:id",
    "title": "Update an account",
    "name": "Update_an_account",
    "description": "<p>An admin can update account</p>",
    "group": "User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "PUT-updateUser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Admin JWT key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer thisisjwttokenshouldbeonger\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>User full name</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "allowedValues": [
              "\"User\"",
              "\"Admin\"",
              "\"Moderator\""
            ],
            "optional": true,
            "field": "userGroup",
            "description": "<p>User group the user belongs to</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X PUT /api/account/5c444e1387e95374633c1e0d \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"name\":\"I am Snow\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'PUT',\n     url: '/api/account/5c444e1387e95374633c1e0d',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'name': 'I am Snow'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"I am Snow\",\n  \"userGroup\": \"User\",\n  \"username\": \"i_know_nothing\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User full name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User full username</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "userGroup",
            "description": "<p>Group this user belongs to</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"No account found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/v1/users/invite",
    "title": "Register staff user",
    "name": "Register_user",
    "description": "<p>Staff User registration</p>",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "firstname",
            "description": "<p>Optional Firstname of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Mandatory Lastname.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Mandatory username.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory email.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "country",
            "defaultValue": "BD",
            "description": "<p>Mandatory with default value &quot;BD&quot;.</p>"
          }
        ],
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "email",
            "description": "<p>info.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email.address",
            "description": "<p>email address.</p>"
          },
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "email.verified",
            "description": "<p>Email verification info</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email.verified.expire",
            "description": "<p>Sent link expire date</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "email.verified.value",
            "description": "<p>Already verified or not</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>User country code</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "age",
            "description": "<p>User age</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "examples/api.route.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/api/v1/auth/login",
    "title": "User Login",
    "name": "User_login",
    "description": "<p>User Login</p>",
    "group": "Authentication",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory Email of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory Password.</p>"
          },
        ],
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ObjectID of the User.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>FirstName of the User.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>LastName.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the user.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>User type.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "default":1,
            "description": "<p>User Status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Phone Number of the user</p>"
          },
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /api/v1/auth/login \\\n       -d '{\"email\":\"johndoe@gmail.com\", \"password\":\"i_know_nothing\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/api/v1/auth/login',\n       data: {\n       'email': 'johndoe@gmail.com',\n       'password': 'i_know_nothing'\n     }\n  });\n  console.log('Logged In: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "POST",
    "url": "/api/v1/auth/staff/login",
    "title": "Staff Login",
    "name": "Staff Login",
    "description": "<p>Staff Login</p>",
    "group": "Authentication",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Mandatory Email of the User.</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory Password.</p>"
          },
        ],
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>ObjectID of the User.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>FirstName of the User.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>LastName.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role of the user.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email.</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>User type.</p>"
          },
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "default":1,
            "description": "<p>User Status</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "phoneNumber",
            "description": "<p>Phone Number of the user</p>"
          },
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /api/v1/auth/staff/login \\\n       -d '{\"email\":\"johndoe@gmail.com\", \"password\":\"i_know_nothing\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/api/v1/auth/staff/login',\n       data: {\n       'email': 'johndoe@gmail.com',\n       'password': 'i_know_nothing'\n     }\n  });\n  console.log('Logged In: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "error",
            "description": "<p>Error response</p>"
          }
        ]
      }
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Authentication"
  }
] });
