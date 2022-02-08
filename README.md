# Goodside React Native Interview

## To run the app

Try `yarn ios` or `npm run ios` first, if that doesn't work, run `npm start`, and then build & run the app through Xcode.

## Welcome to the Goodside React Native Interview!

Duration: 1-2 hours max

The goal of this exercise is to assess your skills in React Native and understanding your approach and solution. Do your best to complete all the requirements. The design is not a primary focus, however, as mentioned in the “Bonus” section, it will award additional points. You have the freedom to pick any library to accomplish your goal. Do not spend more than 2 hours on this, your goal is to do as much as you can within one to two hours. In your PR, include any comments, what you didn’t get to finish, or anything noteworthy. In your code, include any comments.

Additional Info:
- At minimum, you need three screens:
    - Home Screen
    - Login screen
    - Sign up screen
- Feel free to use any UI library you wish (or stick to plain React Native components)
- Feel free to utilize state management (redux, mobs, or context) if you wish
- Assume your app will run both on iOS and Android
- For data, use: `GET https://620281374d21c200170b97a1.mockapi.io/api/v1/Articles`
- Communication is key, ensure you comment where necessary

1. Creating a login page that navigates to a Home Screen
    1. Ensure solution uses separate navigators
2. The login page
    1. Inputs should be an email address and password
    2. A “Login” button that will push the user
    3. A “Remember Me” functionality that will pre-populate email & password (but still requires user to click “Login”)
    4. For the sake of time, lets assume all users who log in with arbitrary credentials are existing users
3. Sign up page
    1. Email must be valid (has only one @, does not contain symbols)
    2. Password requirements:
        1. 8 characters min., 16 characters max.
        2. Only letters, numbers, and special symbol: +, !, /
        3. Contains at least one number
        4. Contains at least one special symbol
        5. Should tell the user that the password does not conform
        6. Password requirements should be clearly stated before the user begins to sign up
    3. For the sake of time, lets assume no further checks are required and a user gets pushed to the Home Screen upon successful/valid inputs
4. The Home Screen
    1. Shows “Welcome {{username}}” at the top
    2. Render an infinite scroll list (max 15 items per page)
        1. Using the data source above, create a “simulated” `page` and `count` experience
            1. For example, start with the first 15 items, then once I reach to the bottom of the scroll list, fetch the next 15, and so on
        2. Render “title” field from data source
        3. Render “summary” field from data source
    3. Has a log out button somewhere on the top of the screen that will kick them out and go back to the Login page.

Bonus:
- Tests for the sign up inputs
- Making it look nice