## Steps to follow to get this tutorial working

0. Make sure that you have all the prerequisites explained in this site. (https://docs.amplify.aws/start/getting-started/installation/q/integration/react)

1. Clone this repo

2. Install this project
````
$ npm install
$ npm start
````

3. Install all the libraries for Amplify
````
npm install aws-amplify @aws-amplify/ui-react
````

4. Amplify init
````
$ amplify init
````

5. Lets start working on the authentication
````
$ amplify add auth
````
Pick all the defaults

6. Push the changes to the cloud
````
$ amplify push
````

7. Modify the front end to get the look and feel you want.
`````
$ cp base/App-01-auth.js src/App.js
$ cp base/index.html src/index.html 
$ cp base/App.css src/App.css
`````

8. Create an user and test

9. Add an GraphQL API
````
$ amplify add api
````

10. Add this schema:
````
type Note @model{
	id: ID!
	note: String!
	owner: String!
	meaning: String
	spanish: String
}
````

11. Push the changes to the cloud
````
$ amplify push
````

12. Modify the front-end
`````
$ cp base/App-02-api.js src/App.js
`````

13. Test it and see if everything works.

14. Add predictions for intepreting sentiment
````
$ amplify add predictions
````
Select the option -- Interpret - Text

15. Add predicitons for translations 
````
$ amplify add predictions
````
Select the option --- Convert - Translation

16. Push the changes to the cloud
````
$ amplify push
````

17. Modify the front end
`````
$ cp base/App-03-predictions.js src/App.js
`````