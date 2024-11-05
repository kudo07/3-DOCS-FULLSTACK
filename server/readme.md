1. FIRST ROUTE
   ROUTES==> SIGNUP
   controllers==> user.controller, user.route. user.servics

   1. http://localhost:8000/user
      BODY==>
      {
      "email":"byeee@gmail.com",
      "password1":"123567890",
      "password":"1234567890"
      }

2. SECOND ROUTE
   ROUTES==> LOGIN ROUTE
   controllers==> AUTH.controller, AUTH.route. user.servics,AUTH.VALIDATORS

   1. http://localhost:8000/auth/login
      BODY==>{
      "email":"bye@gmail.com",
      "password":"123567890"
      }

3. THIRD ROUTE
   REFRESHTOKEN ROUTE
   http://localhost:8000/auth/refresh

4. LOGOUT ROUTE
   http://localhost:8000/auth/logout

5. GET ROUTE FOR USER DETAILS
   http://localhost:8000/user/342

6. RESETPASSWORD ROUTE POST ENDPOIN
   http://localhost:8000/user/refresh-token
   post request

7. PUT PASSWORD TOKEN
   http://localhost:8000/user/password/:token
   PUT REQUEST

8. PUT VERIFY EMAIL PUT
   http://localhost:800/user/verify-email/token

9. GETONE DOCUMENT
   http://localhost:8000/document/idNumber

10. GETALL DOCUMENT
    http:localhost:8000/document/

11. PUT REQUEST ENDPOINT
    http://localhost:8000/document/idNumber
