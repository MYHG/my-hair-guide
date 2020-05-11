# my-hair-guide

1. To start the server use 'yarn server'
2. Go to 'localhost:3000'
3. To run the database, open a new window and run 'mongodb'
4. When adding new data to the seeds file run 'node server/api/database/seeds' in the terminal
5. To create a new user account see below:
    - Send a POST request to http://localhost:3000/api/register
    - Refer to the user schema for required request body fields
    - HairQuizResponses array should be empty 
    - Make a copy of the user ID for the next step
6. To create a new hair quiz for a user see below:
    - Send a POST request to http://localhost:3000/api/hair-quiz/paste-user-id
    - Refer to the hair quiz schema for required request body fields
7.  To view a users account see below:
    - Send a GET request to 
    http://localhost:3000/api/user/paste-user-id

