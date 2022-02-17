define({ "api": [
  
  {
    "type": "POST",
    "url": "/api/v1/users",
    "title": "Create a user",
    "name": "Create_a_user",
    "description": "<p>An admin can create a user</p>",
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
        "content": "curl -X POST /api/v1/users \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"name\":\"Jhon Snow\", \"username\":\"i_know_nothing\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/api/v1/users',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'name': 'Jhon Snow',\n       'username': 'i_know_nothing'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
    "url": "/api/v1/users/:id",
    "title": "Delete a user",
    "name": "Delete_a_user",
    "description": "<p>An admin can delete user</p>",
    "group": "User",
    "version": "1.0.0",
    "permission": [
      {
        "name": "DELETE-delete-user"
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
            "description": "<p>JWT key</p>"
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
        "content": "curl -X DELETE /api/v1/users/5c444e1387e95374633c1e0d \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'DELETE',\n     url: '/api/v1/users/5c444e1387e95374633c1e0d',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": 'Successfully deleted'\n}",
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
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"No user found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/api/v1/users/:id",
    "title": "Get a user",
    "name": "Get_a_user",
    "description": "<p>An admin can view a user</p>",
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
        "content": "curl -X GET /api/v1/users/:id \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: '/api/v1/users/:id',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"No user found\"\n}",
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
    "url": "/api/v1/users/:id",
    "title": "Patch Update a User",
    "name": "Patch_Update_a_user",
    "description": "<p>An admin can update a user</p>",
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
    "url": "/api/v1/users/:id",
    "title": "Update a user",
    "name": "Update_a_user",
    "description": "<p>An admin can update a user</p>",
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
        "content": "curl -X PUT /api/v1/users/5c444e1387e95374633c1e0d \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"name\":\"I am Snow\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'PUT',\n     url: '/api/v1/users/5c444e1387e95374633c1e0d',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'name': 'I am Snow'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"No user found\"\n}",
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
      },
       "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /api/v1/auth/staff/login \\\n   -d '{\"email\":\"johndoe@gmail.com\", \"password\":\"i_know_nothing\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/api/v1/auth/staff/login',\n       data: {\n       'email': 'johndoe@gmail.com',\n       'password': 'i_know_nothing'\n     }\n  });\n  console.log('Logged In: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
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
    "groupTitle": "Authentication"
  },


  {
    "type": "POST",
    "url": "/api/v1/auth/change-password",
    "title": "Change password",
    "name": "Change_password",
    "description": "<p>A system user can change password</p>",
    "group": "Authentication",
    "version": "1.0.0",
    "permission": [
      {
        "name": "POST-change-password"
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
            "description": "<p> JWT key</p>"
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
            "field": "password",
            "description": "<p>New password/p>"
          },
          {
            "group": "Body",
            "type": "String",
            "size": "6..20",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>Old User Password</p>"
          },
          
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /api/v1/auth/change-password \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"password\":\"I_now_know\", \"oldPassword\":\"i_know_nothing\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/api/v1/auth/change-password',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'password': 'Now_I_Know',\n       'oldPassword': 'i_know_nothing'\n     }\n  });\n  console.log('Password changed: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 400 Bad Request\n{\n  message: \"Password not changed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Authentication",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "userMessage",
            "description": "<p>Password Changed Successfully</p>"
          },
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"userMessage\": 'Password Change Successfully',\n  }",
          "type": "json"
        }
      ]
    }
  },


  {
    "type": "POST",
    "url": "/api/v1/pipelines",
    "title": "Create Pipeline",
    "name": "Create_pipeline",
    "description": "<p>A system user can create a pipeline</p>",
    "group": "Pipeline",
    "version": "1.0.0",
    "permission": [
      {
        "name": "POST-create-pipeline"
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
            "description": "<p> JWT key</p>"
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
            "description": "<p>Pipeline name/p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the pipeline</p>"
          },
          {
            "group": "Body",
            "type": "Array",
            "optional": false,
            "field": "stages",
            "description": "<p>Pipeline Stages</p>"
          },
          
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /api/v1/pipelines \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"name\":\"First Pipeline\", \"description\":\"Any descriptions\", \"stages\":\"[\"{\"name\":\"Onboarding\",\"color\":\"#6BF4C\", \"deals\":\"78282efd\"]}\"]\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/api/v1/pipelines',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'name': 'Pipeline name',\n 'descriptions': 'Any descriptions',\n 'stages:'[{name:'Onboarding',color:'#6BF4C', deals:['78282efd']}]'     }\n  });\n  console.log('Password changed: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 400 Bad Request\n{\n  message: \"Pipeline not created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Pipeline",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Pipeline ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the pipeline</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "descriptions",
            "description": "<p>Pipeline descriptions</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "stages",
            "description": "<p>Pipeline Stages</p>"
          },
          
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"Pipeline Name\",\n  \"descriptions\": \"Any descriptions\",\n  \"stages\": \"[{name:'Onboarding',color:'#6BF4C', deals:['78282efd']}]\"\n}",
          "type": "json"
        }
      ]
    }
  },


  {
    "type": "GET",
    "url": "/api/v1/pipelines",
    "title": "Get all pipelines",
    "name": "Get_all_pipelines",
    "description": "<p>A user can view pipelines</p>",
    "group": "Pipeline",
    "version": "1.0.0",
    "permission": [
      {
        "name": "GET-view-pipeline"
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
            "description": "<p> JWT key</p>"
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
        "content": "curl -X GET /api/v1/pipelines \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: '/api/v1/pipelines',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 400 Notfound\n{\n  userMessage: \"Oops... Something went wrong, contact the admin...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Pipeline",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Pipeline Id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Pipeline name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Pipeline description</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "stages",
            "description": "<p>Pipeline stages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{[{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"Pipeline name\",\n  \"description\": \"Some descriptions\",\n  \"stages\": \"[{name:'Onboarding',color:'#6BF4C', deals:['78282efd']}]\"\n}]}",
          "type": "json"
        }
      ]
    }
  },
  

   {
    "type": "GET",
    "url": "/api/v1/pipelines/:id",
    "title": "Get a pipeline",
    "name": "Get_a_pipeline",
    "description": "<p>A user can view a pipeline</p>",
    "group": "Pipeline",
    "version": "1.0.0",
    "permission": [
      {
        "name": "GET-view-pipeline"
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
            "description": "<p> JWT key</p>"
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
        "content": "curl -X GET /api/v1/pipelines/:id \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: '/api/v1/pipelines/:id',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     }\n  });\n  console.log('Pipeline fetched ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"No pipeline found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Pipeline",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Pipeline Id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Pipeline name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Pipeline description</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "stages",
            "description": "<p>Pipeline stages</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"Pipeline name\",\n  \"description\": \"Some descriptions\",\n  \"stages\": \"[{name:'Onboarding',color:'#6BF4C', deals:['78282efd']}]\"\n}",
          "type": "json"
        }
      ]
    }
  },


   
  {
    "type": "PATCH",
    "url": "/api/v1/pipelines/:id/move-stage",
    "title": "Move deal to another stage",
    "name": "Move_deal",
    "description": "<p>A system user can move a deal to another stage</p>",
    "group": "Pipeline",
    "version": "1.0.0",
    "permission": [
      {
        "name": "PATCH-move-deal"
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
            "description": "<p> JWT key</p>"
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
            "field": "dealId",
            "description": "<p>Deal to move/p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "fromStage",
            "description": "<p>Deal initial stage</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "toStage",
            "description": "<p>Target stage</p>"
          },
          
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X PATCH /api/v1/pipelines/:id/move-stage \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"dealId\":\"890efde442\", \"fromStage\":\"8fe826ed\", \"toStage\":\"8fe826ed\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/api/v1/pipelines',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'dealId': '890efde442',\n 'fromStage': '6a890efde442',\n 'toStage:'890efde442fed'     }\n  });\n  console.log('Deal moved: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 400 Bad Request\n{\n  message: \"Failed to change stage.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Pipeline",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Pipeline ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the pipeline</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "descriptions",
            "description": "<p>Pipeline descriptions</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "stages",
            "description": "<p>Pipeline Stages</p>"
          },
          
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"Pipeline Name\",\n  \"descriptions\": \"Any descriptions\",\n  \"stages\": \"[{name:'Onboarding',color:'#6BF4C', deals:['78282efd']}]\"\n}",
          "type": "json"
        }
      ]
    }
  },


  {
    "type": "POST",
    "url": "/api/v1/pipelines/:id/stages/:stageId",
    "title": "Add deal to Pipeline",
    "name": "Add_deal_to_pipeline",
    "description": "<p>A system user can add deal to a pipeline</p>",
    "group": "Pipeline",
    "version": "1.0.0",
    "permission": [
      {
        "name": "POST-add-deal"
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
            "description": "<p> JWT key</p>"
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
            "description": "<p>Deal name/p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contact",
            "description": "<p>Contact ID</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "assignee",
            "description": "<p>Deal Assignee</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Deal value</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Deal notes</p>"
          },
          
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /api/v1/pipelines/:id/stages/:stageId \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"name\":\"First Deal\", \"contact\":\"efd45a66a\", \"assignee\":\"efd45a66a\", \"value\":\"$100\", \"notes\":\"Any notes\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/api/v1/pipelines/:id/stages/:stageId',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'name': 'Deal name',\n 'contact': 'a62292992ed',\n 'assignee':'fede4171',\n 'value':'2000000',\n 'notes':'Any notes'  });\n  console.log('Deal added to pipeline: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 400 Bad Request\n{\n  message: \"Deal not created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Pipeline",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Pipeline ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the pipeline</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "descriptions",
            "description": "<p>Pipeline descriptions</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "stages",
            "description": "<p>Pipeline Stages</p>"
          },
          
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"Pipeline Name\",\n  \"descriptions\": \"Any descriptions\",\n  \"stages\": \"[{name:'Onboarding',color:'#6BF4C', deals:['78282efd']}]\"\n}",
          "type": "json"
        }
      ]
    }
  },


   {
    "type": "DELETE",
    "url": "/api/v1/pipelines/:id",
    "title": "Delete a pipeline",
    "name": "Delete_a_pipeline",
    "description": "<p>A user can delete a pipeline</p>",
    "group": "Pipeline",
    "version": "1.0.0",
    "permission": [
      {
        "name": "DELETE-delete-pipeline"
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
            "description": "<p>JWT key</p>"
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
        "content": "curl -X DELETE /api/v1/pipelines/:id/5c444e1387e95374633c1e0d \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'DELETE',\n     url: '/api/v1/pipilines/5c444e1387e95374633c1e0d',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     }\n  });\n  console.log('Pipeline deleted: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": 'Successfully deleted'\n}",
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
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"No pipeline found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Pipeline"
  },


 {
    "type": "PUT",
    "url": "/api/v1/pipelines/:id",
    "title": "Update a pipeline",
    "name": "Update_a_pipeline",
    "description": "<p>An admin can update a pipeline</p>",
    "group": "Pipeline",
    "version": "1.0.0",
    "permission": [
      {
        "name": "PUT-update-pipeline"
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
            "description": "<p>Pipeline name</p>"
          },
          {
            "group": "Body",
            "type": "String",
            
            "optional": true,
            "field": "description",
            "description": "<p>Pipeline descriptions</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X PUT /api/v1/pipelines/5c444e1387e95374633c1e0d \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"name\":\"New Pipeline Name\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'PUT',\n     url: '/api/v1/pipelines/5c444e1387e95374633c1e0d',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'name': 'New pipeline name'\n     }\n  });\n  console.log('Pipeline updated: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"New pipeline name\",\n  \"description\": \"Pipeline descriptions\",\n  \"stages\": \"[]\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "200": [
          {
           "group": "200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Pipeline ID</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the pipeline</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "descriptions",
            "description": "<p>Pipeline descriptions</p>"
          },
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "stages",
            "description": "<p>Pipeline Stages</p>"
          },
          
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
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"No pipeline found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Pipeline"
  },



   {
    "type": "POST",
    "url": "/api/v1/contacts",
    "title": "Create a contact",
    "name": "Create_a_contact",
    "description": "<p>A user can create a contact</p>",
    "group": "Contact",
    "version": "1.0.0",
    "permission": [
      {
        "name": "POST-create-contact"
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
            "description": "<p> JWT key</p>"
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
            "description": "<p>Contact full name</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Contact email address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Contact phone number</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>Contact mobile number</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>Contact company</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Contact type</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>Contact avatar</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Contact notes</p>"
          },
          
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X POST /api/v1/contacts \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"name\":\"David Snow\", \"email\":\"davidsnow@gmail.com\", \"phone\":\"+234809087654\", \"mobile\":\"+234809087654\", \"company\":\"fed45afee\", \"type\":\"personal\", \"avatar\":\"https://avatars0.githubusercontent.com/u/1234?s=460&v=4\", \"notes\":\"Contact notes\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'POST',\n     url: '/api/v1/contacts',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'name': 'David Snow',\n  'email': 'davidsnow@example.com',\n  'phone': '+5772882',\n  'mobile': '99020',\n  'company': 'ef41561ed',\n  'type': 'another type',\n  'avatar': 'namam.png',\n  'notes': 'yet another notes'\n }\n  });\n  console.log('Contact created: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 409 Conflict\n{\n  message: \"Contact already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Contact",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Contact Id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Contact full name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Contact phone number</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>Contact mobile number</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Contact Email</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>Company this contact belongs to</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Contact type</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Contact notes</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>Contact avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"David Snow\",\n  \"mobile\": \"+030030939\",\n  \"phone\": \"+0093003\",\n  \"company\": \"ef62727\",\n  \"type\": \"User\",\n  \"email\": \"davidsnow@example.com\"\n}",
          "type": "json"
        }
      ]
    }
  },



   {
    "type": "PATCH",
    "url": "/api/v1/contacts/:id",
    "title": "Update a contact",
    "name": "Update_a_contact",
    "description": "<p>A user can update a contact</p>",
    "group": "Contact",
    "version": "1.0.0",
    "permission": [
      {
        "name": "PATCH-update-contact"
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
            "description": "<p> JWT key</p>"
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
            "description": "<p>Contact full name</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Contact email address</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Contact phone number</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>Contact mobile number</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>Contact company</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Contact type</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>Contact avatar</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Contact notes</p>"
          },
          
        ]
      }
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -X PATCH /api/v1/contacts \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\\n     -d '{\"name\":\"David Snow\", \"email\":\"davidsnow@gmail.com\", \"phone\":\"+234809087654\", \"mobile\":\"+234809087654\", \"company\":\"fed45afee\", \"type\":\"personal\", \"avatar\":\"https://avatars0.githubusercontent.com/u/1234?s=460&v=4\", \"notes\":\"Contact notes\"}'",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'PATCH',\n     url: '/api/v1/contacts/:id',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     },\n     data: {\n       'name': 'David Snow',\n  'email': 'davidsnow@example.com',\n  'phone': '+5772882',\n  'mobile': '99020',\n  'company': 'ef41561ed',\n  'type': 'another type',\n  'avatar': 'namam.png',\n  'notes': 'yet another notes'\n }\n  });\n  console.log('Contact updated: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"Contact not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Contact",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Contact Id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Contact full name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Contact phone number</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>Contact mobile number</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Contact Email</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>Company this contact belongs to</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Contact type</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Contact notes</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>Contact avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"David Snow\",\n  \"mobile\": \"+030030939\",\n  \"phone\": \"+0093003\",\n  \"company\": \"ef62727\",\n  \"type\": \"User\",\n  \"email\": \"davidsnow@example.com\"\n}",
          "type": "json"
        }
      ]
    }
  },


  {
    "type": "GET",
    "url": "/api/v1/contacts",
    "title": "Get all contacts",
    "name": "Get_all_contacts",
    "description": "<p>A user can view contacts</p>",
    "group": "Contact",
    "version": "1.0.0",
    "permission": [
      {
        "name": "GET-view-contact"
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
            "description": "<p> JWT key</p>"
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
        "content": "curl -X GET /api/v1/contacts \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: '/api/v1/contacts',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 400 Notfound\n{\n  userMessage: \"Oops... Something went wrong, contact the admin...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Contact",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Contact Id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Contact full name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Contact phone number</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>Contact mobile number</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Contact Email</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>Company this contact belongs to</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Contact type</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Contact notes</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>Contact avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"data\":\"[{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"Contact name\",\n  \"mobile\": \"+562662\",\n \"phone\": \"+0093003\",\n  \"company\": \"ef62727\",\n  \"type\": \"User\",\n  \"email\":\" davidsnow@example.com \",\n  \"notes\": \"Contact notes\"\n}]\"\n}",
          "type": "json"
        }
      ]
    }
  },
  
 {
    "type": "GET",
    "url": "/api/v1/contacts/:id",
    "title": "View contact",
    "name": "View_contact",
    "description": "<p>A user can view contact</p>",
    "group": "Contact",
    "version": "1.0.0",
    "permission": [
      {
        "name": "GET-view-contact"
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
            "description": "<p> JWT key</p>"
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
        "content": "curl -X GET /api/v1/contacts/:id \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'GET',\n     url: '/api/v1/contacts/:id',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
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
          "content": "HTTP/1.1 404 Notfound\n{\n  userMessage: \"Contact not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Contact",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Contact Id</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Contact full name</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>Contact phone number</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "mobile",
            "description": "<p>Contact mobile number</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Contact Email</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>Company this contact belongs to</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>Contact type</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "notes",
            "description": "<p>Contact notes</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>Contact avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"data\":\"{\n  \"id\": '5c444e1387e95374633c1e0d',\n  \"name\": \"Contact name\",\n  \"mobile\": \"+562662\",\n \"phone\": \"+0093003\",\n  \"company\": \"ef62727\",\n  \"type\": \"User\",\n  \"email\":\" davidsnow@example.com \",\n  \"notes\": \"Contact notes\"\n}\"\n}",
          "type": "json"
        }
      ]
    }
  },



  {
    "type": "DELETE",
    "url": "/api/v1/contacts/:id",
    "title": "Delete a contact",
    "name": "Delete_a_contact",
    "description": "<p>A user can delete contact</p>",
    "group": "Contact",
    "version": "1.0.0",
    "permission": [
      {
        "name": "DELETE-delete-contact"
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
            "description": "<p> JWT key</p>"
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
        "content": "curl -X DELETE /api/v1/contacts/5c444e1387e95374633c1e0d \\\n     -H \"Authorization: Bearer thisisjwttokenshouldbeonger\" \\",
        "type": "curl"
      },
      {
        "title": "node.js",
        "content": "const axios = require('axios');\ntry {\n   const response = await axios({\n     method: 'DELETE',\n     url: '/api/v1/contacts/5c444e1387e95374633c1e0d',\n     headers: {\n        'Authorization': 'Bearer thisisjwttokenshouldbeonger'\n     }\n  });\n  console.log('User created: ', response);\n} catch (error) {\n  console.error(error);\n}",
        "type": "node.js"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": 'Successfully deleted'\n}",
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
          "content": "HTTP/1.1 404 Notfound\n{\n  message: \"No contact found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "examples/api.route.js",
    "groupTitle": "Contact"
  },
] });
