# _Currency Exchanger_

#### By: _**Katie Pundt**_

#### _An application to convert USD to a chosen currency._


## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _npm_
* _webpack_
* _eslint_
* _popperjs/core_
* _APIs_
* _git_
* _GitHub_

## Description
_The application will allow users to input an amount in USD and select a currency from a dropdown menu to convert it to._

## Setup/Installation Requirements

* Navigate to https://github.com/kpundt93/currency-exchanger
* Click on the green "Code" button and copy the repository URL or click on the copy button
* Open the terminal on your desktop
* Once in the terminal, use it to navigate to your desktop folder
* Once inside your desktop folder, use the command `git clone https://github.com/kpundt93/currency-exchanger.git`
* After cloning the project, navigate into it using the command `cd currency-exchanger`
* Use the command `git remote` to confirm the creation of the new local repository
* Open the project in your preferred text editor
* Create a new file in the root of the project directory called `.env`
* Open your web browser and follow this link: https://www.exchangerate-api.com/
* Enter your email address and then check your email for an activation link
* Upon clicking the activation link in your email you'll be taken to a page with your API key
* Copy this key and return to the empty `.env` file that you created
* In the `.env` file type the following `API_KEY=[YOUR_API_KEY_HERE]` and paste your API key in place of `[YOUR_API_KEY_HERE]` (be sure to remove the square brackets)
* Save the project
* Navigate back to your terminal
* Install project dependencies by running the command `npm install`
* If you receive errors in the terminal, try running `npm install` again, sometimes npm can be finicky
* Then run the command `npm run start` to start the project server and view the application (use ctrl + c to exit the server in the terminal)

## Troubleshooting

* If you are receiving errors regrading webpack, try running the command `npm install webpack@4.39.3 --save-dev --save-exact`, then run `npm run build` again
* If you continue to have issues setting up the environment, try deleting the package-lock.json file and the node_modules folder from the project. Then rebuild the environment by running `npm install` again.

## Known Bugs

* _No known bugs_

## Contact Information
_Katie Pundt, kzpundt@gmail.com_

## License
_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Katie Pundt_