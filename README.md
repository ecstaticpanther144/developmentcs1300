# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`
https://ecstaticpanther144.github.io/development1300

### Goal and Value of the Application
This application is a website that models a shoe store that offers a variety of shoe styles and colors. While the inventory on the application is limited (four colors and three styles), the basic model of being able to filter the inventory by these two parameters is easily extendable to real world shoe store websites. Additionally, the sorting feature organizes the inventory by price, though this can also be extended in real world examples to also sort by rating, popularity, or any other such factor. Thus, the goal of this application is to serve as a model for breaking down the process of shoe buying to its most basic steps of searching by color, style, and price.

### Usability Principles Considered
To be consistent with most users' mental models of online shopping, the filters and sort options were sectioned off to the side while the inventory took center stage. Additionally, the cart is displayed as a list on the side, so the user is aware of the size and cost of their cart. Also, a remove button appears with each cart item to connect the idea of removal from the cart to the cart itself, rather than having a toggling button in the main grid that creates changes in the side bar. Also, each shoe item is displayed with a name, a description, an image, the price, and the add to cart button in that order. This is another choice that agrees with users' mental models, as these data points are the main factors that a shopper would need in order to decide on a pair of shoes. The use of dropdowns in the side nav is also better for usability than, for example, checkboxes, as in this inventory, shoes each have one color and one style. Thus, being able to pick just one color or style at a time from the dropdown prevents the user from being confused why there aren't any multipcolored blue and pink shoes, for example. Also, there is a hierarchy in terms of font sizes, as the title of the webpage is the largest. Also, in the shoe items, the name is larger than the description and the price. Also, the two sections of the sidebar have the same font size as they are equally important sections of the sidebar.

### Organization of Components
The app component handles all of the logic of filtering, sorting, and rendering the data and sidebar elements. The ShoeItem component styles the shoe items in the main grid and displays all the necessary information in an intuitive hierarchy and order. The Filters component styles the dropdown menus, as well as creates the eventKeys and sets the onSelect event handler to the relevant constant from the App class. 

### How Data is Passed Down Through Components
The App component creates the constants that set the states for the different sorting and filtering events. These constants are then accessed in the Filters component through the use of props. They become the action that the event handlers for the dropdowns performs. Once the data is filtered by the App component, the filtered data array is mapped to an array of ShoeItem components that are then rendered on screen. 

### How the User Triggers State Changes
When the user clicks on a color or a style from the dropdown menus, they set the state to that color/style's eventKey. This then triggers the App component to filter based on that eventKey's value and then creates the filtered data. The same thing happens for sorting: the user picks a sorting mode (default is low-to-high) and that changes the sorting state to either option's eventKey. The App component then uses that change of state to sort the data.

