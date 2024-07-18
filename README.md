Cocktail Recipe Project (cocktail heaven) /(phase1)

Welcome to the Cocktail Recipe App project! This single-page application allows users to see various cocktail recipes and even add their own recipes. The app fetches data from a json-server backend, making it interactive and dynamic.
Features

    View Cocktails: Browse a collection of cocktail recipes with images, ingredients, and instructions.
    
    Add New Cocktail: Users can add their own cocktail recipes, including image, ingredients, and instructions.

Technologies Used

    HTML: Structuring the frontend interface.
    CSS: Styling the app for a pleasant user experience.
    JavaScript (ES6+): Implementing interactive features and asynchronous data fetching.
    json-server: Simulating a backend with a db.json file to store cocktail data.

Setup Instructions

To run this project locally, follow these steps:

Prerequisites

    Node.js and npm: Ensure Node.js is installed on your machine. You can download it here.
    json-server: Install json-server globally to serve the db.json file.

    bash

    npm install -g json-server

Installation

    Clone the Repository:

    bash

git clone https://github.com/your-username/cocktail-recipe-app.git
cd cocktail-recipe-app

Install Dependencies:

bash

    npm install

Running the App

    Start json-server:

    bash

    json-server --watch db.json

    This will start json-server and serve the db.json file on http://localhost:3000.

    Open the App:
        Open index.html in your browser. Since this project runs entirely on a single HTML file, you can simply open index.html directly in your browser.

Usage

    View Cocktails: Browse through the list of cocktails displayed on the main page. 

    Add New Cocktail:

        Scroll to the bottom of the page and click on the "Add New Cocktail" button.
        Enter details for the new cocktail (name, category, glass type, image URL, ingredients, instructions) in the prompts.
        Click OK to add the cocktail. It will appear in the list of cocktails after a refresh.

Author
Nickson Mokua Mogaka (frontend ninja)