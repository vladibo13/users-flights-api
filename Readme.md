# Nodejs Express Validation
- Use @hapi/joi package for validations
 
- Before you start:
- Create a see function that will create for you an array of data:
    • Object flights
        ◦ Departure – datetime format
        ◦ Arrival – datetime format
        ◦ From – country string (api)
        ◦ Destination – country string (api)
        ◦ Company (serch some api or generate from array with few)

    1. Validate the Login and register,
        a. username – length min 5 max – 10 ( regex, must contain at least 1 special character ! or @ or # or $)
        b. password – exactly 16 characters.
    2. getFlights  - GET
        a. departure – datetime
        b. arrival – datetime filter and response with the flights between requested  time range
        c. validate with Joi the relevant query params
    3. saveFlights – POST 
        a. adding multiple flights objects (or 1 inside array)
        b. validate with Joi the relevant schema [{flight},{flight}…..]


## last lesson we focused on JWT authentication

 

- implementation for 

- sign  token in login

- verify as middlware in flights api data

- Homework are optional for this class

- implement  end2end  authentication with nodejs and jwt

- login will sign a token and response to the client

- client should accespt the token and perform immediately a request to get flights array of data

- the verification should stay on the middleware

- make sure all the operations mentioned above are executed FROM react client


