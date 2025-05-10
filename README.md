https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} this is the weather API and
this is my key cf94d7d3e74b6f8bdbb77d49673e3a2a


Project Objective:

Create s dynamic and responsive Web application to allow users to "Rent a Car"

Tools and Technologies:

Server-side: ExpressJS

Front-End: Html, CSS, Javascript, Angular etc

Back-end: MongoDB

Middleware: Node.js

Background of the project:

Carzy is a self-drive car rental company which gives cars of all types on online. The Carzy team decided to hire a Full Stack developer who Application" web application with a rich and user-friendly ind interface

You are hired as the Full Stack developer and are asked to develop management team has provided you with the requirements and business model so that you can easily arrange different components of the application application. 

Functional Requirements:

Below are the key responsibilities and functionalities to be implemented in the admin user/portal

The admin user should be able to:

1. Login to Portal

2. Create Admin Account

3. Manage Car (CRUD) details

4. Mange tax for different type of cars.

5. View rentals of all users

6. View history of rental for a rental for a particular user.

7. During the rental pickup note the ODO meter reading and marking the car as rented and date of rental should be updated.

8. Calculate rental cost which is Price / KM on type of car+Tax-Discount-Any extra discount for loyalty points + Per day rental cost if car has been rented more than a day

Below are the key responsibilities and functionalities to be implemented in the user login.

The user should be able to:

1. Register into the application with captcha

2. Login into the application with captcha

3. Change Password

4. Update Profile

5. Search different type of cars

6. Rent a car which can be SUV, Sedan, Compact, mini-van car or a luxury car etc. online by browsing all the cars available.

7. Price to the car rental will be per kilometer based on the model above.

8. Tax will be applied 10% for basic cars,20% for mid-range cars and 40% for high end and luxury cars

9. 10% discount can be given to a customer who has rented car above 1000km and the frequent renter.

10. View his or her previous rentals.

11. View his or her further rentals

12. Cancel a booking.

13. For every 50 KM rented 1 point should be given for loyalty bonus

14. For every 25 loyalty points accumulated 2  consecutive rides should be given extra discount which ever applies. 

Common Features

1. Welcome Page

2. Login Screen

3. Registration Page

4. Forgot Password/Reset Password

5. All users should be able to View and edit profile.

6. Implement validations wherever required for example: login page, registration page etc.

7. UI-UX should be user friendly.

8. Back button should be disabled after logout/sign-out

Phase 1: Database Schema Design

1. Identify domain objects and their attributes as per the requirement

Phase 2: Front End Development

Develop a web page as per requirements for the above requirement web application using Front End technologies.

Phase 3: Back End Development

Develop a RESTful Web API to perform CRUD operations on Domain objects as per requirements and store the data in MongoDB database

Steps to develop a Restful Web API.

1. Identify the domain objects and their attributes as per requirements.

2. Design Database Schema as per requirements.

3. Create Entity class for each domain object with required attributes

4. Create DAL class for performing CRUD operations

5. Create a Service class to invoke DAL class methods for each entity

6. Create a Controller annotations class to build the RESTful Web Al using service class using required annotations

Phase 4: Unit Testing

1. Perform Unit Testing using postman/ swagger/ insomnia tools for all the functional requirements. 

2. Perform Functional Testing using postman for all rest end points

Note:

Use proper Naming Conventions (package, class and interface, variable names)

Use Interfaces for loose Use ting as and when required

Use standard HTTP status codes: 404,500,200,201,401,403 while implementing RESTful web API


mongodb+srv://Abhiram25:<db_password>@cluster0.tlbnrt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
