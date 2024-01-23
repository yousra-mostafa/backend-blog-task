To start the project you'll need to install a few dependencies.
Install Node.js from google

write on terminal
npm init
npm install express


for better maintainability and readability the file will be like this

project-root-directory
|-- controllers
|   |-- blogController.js
|   |-- homeController.js
|   |-- userController.js
|-- models
|   |-- Blog.js
|   |-- User.js
|-- routes
|   |-- blogRoutes.js
|   |-- homeRoutes.js
|   |-- userRoutes.js
|-- .env
|-- index.js
|-- package.json
|-- ...