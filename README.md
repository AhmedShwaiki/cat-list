Cat Carousel Project
Overview:
This project showcases a simple image carousel featuring pictures of cats, leveraging the Petite Vue.js library. The carousel employs a linked list data structure to create a paginator for an array of 10 items, demonstrating the practical usage of linked lists in real-life applications.

Technologies Used
Petite Vue.js: A lightweight Vue.js library that is loaded directly from a CDN.

How to Run the Project
To run this project, follow these steps:

Ensure you have access to the internet to load the Petite Vue.js code.
Host the index.html file using npx serve or any other HTTP server of your choice.

npx serve
Open your browser and navigate to the provided URL (usually http://localhost:5000).
That's it! You should now be able to view the cat image carousel.

Running Tests
To run the tests for this project, use the following command:

yarn test
This command will execute the tests and provide feedback on the project's functionality.

Project Structure
The project structure is as follows:

index.html: The main HTML file that includes the Petite Vue.js library and the application's JavaScript code.
src/list.js: JavaScript file containing the implementation of a linked list data structure.
src/node.js: JavaScript file representing a node in the linked list.
index.js: JavaScript file for the main application logic, utilizing Petite Vue.js and the linked list for the image carousel.
