User Management Dashboard:
This project is a fully functional User Management Dashboard created using React, using useContext for global state management and Axios for API interactions. The dashboard enables users to execute basic CRUD actions (add, modify, and delete users) while utilizing client-side pagination to show data efficiently. Each component is designed with modularity, reusability, and clean coding principles in mind, and is combined with Tailwind CSS to provide a modern and responsive user interface.

1. App.js (Main Component):

The App.js component is the central hub of the application. It serves as the entry point for managing users and handles the core functionality such as fetching, creating, updating, and deleting users. The component also incorporates pagination to enhance user experience when handling a large dataset.
State Management:
    users: Maintains the list of users fetched from the API, simulating 100 records by repeating data.
    selectedUser: Tracks the user currently being edited.
    error: Manages any errors encountered during API operations.
    currentPage: Handles the current page state for pagination.
Key Functionalities:
    Fetching Users: fetchUsers() fetches data from the API, duplicates it to simulate a larger dataset, and assigns unique IDs to each user.
    Adding a User: handleAddUser() sends a POST request to add a new user and updates the UI accordingly.
    Editing a User: handleEditUser() sends a PUT request to update the user's information.
    Deleting a User: handleDeleteUser() sends a DELETE request to remove a user from the list.
    Pagination: Manages the display of users across multiple pages using paginate().
Components Integrated:
    <UserList />: Displays the user data in a paginated table.
    <UserForm />: Manages the form for adding or editing users.

2. UserContext.js (Global State Management):

UserContext.js provides a context for global state management. By utilizing React’s useContext, the project eliminates prop drilling and allows components to easily access shared state and functions across the application.
Context Provider:
    The context encapsulates core functionalities (users, currentPage, CRUD operations) and makes them globally accessible.
    This promotes a cleaner and more maintainable architecture, especially as the application scales.
Advantages:
    Reduces the complexity of passing props between deeply nested components.
    Encourages a more modular and reusable codebase.
    

3. UserList.js (User Table with Pagination):
   
The UserList.js component displays the list of users in a tabular format and provides the ability to paginate through the user data.
Props via Context:
    users: The current list of users displayed on the page.
    handleDeleteUser: Deletes a user when triggered.
    setSelectedUser: Prepares a user for editing.
    paginate, currentPage, and totalPages: Manages pagination.
Features:
    Table Layout: Displays user details such as ID, first name, last name, email, and department (mapped to company.name from the API).
   

4. UserForm.js (Add/Edit Form)
UserForm.js is responsible for handling both the creation of new users and the modification of existing users.
Form Fields:
    Input Fields: Contains fields for firstName, lastName, email, and department. The form is dynamically populated when editing a user.
Conditional Behavior:
    The form functions in two modes:
        Add Mode: When no user is selected, the form allows for the addition of a new user.
        Edit Mode: When a user is selected, the form pre-fills with the user’s existing information for editing.
Form Submission:
    Add: Calls the handleAddUser() method to add a new user.
    Edit: Calls handleEditUser() to update an existing user’s information.
Styling:
    Form elements are styled using Tailwind CSS, ensuring an intuitive and clean user interface with responsive behavior. The buttons are distinct, offering visual feedback during hover and focus.


5. userService.js (API Layer)
This file acts as the API service layer for the application. It encapsulates all HTTP requests using axios, providing a clean separation of concerns between data fetching and UI rendering.
API Functions:
    getUsers(): Retrieves the list of users from the mock API.
    addUser(user): Sends a POST request to create a new user.
    updateUser(userId, updatedUser): Sends a PUT request to modify an existing user's details.
    deleteUser(userId): Sends a DELETE request to remove a user from the backend.
Advantages:
    Centralizes all API logic, making it easier to maintain and update.
    Promotes better code readability and reusability.


6. Pagination Logic
Pagination is implemented to ensure a smooth user experience, especially when managing a large number of users.
State Variables:
    currentPage: Tracks the current page being viewed.
    usersPerPage: Defines the number of users shown per page (set to 20).
Calculation:
    indexOfLastUser: Determines the last user to be displayed on the current page.
    indexOfFirstUser: Determines the first user to be displayed on the current page.
    currentUsers: Slices the users array to display only the relevant users for the current page.
Pagination UI:
    Dynamic pagination buttons are rendered based on the total number of pages, with the current page highlighted for clarity. Users can navigate seamlessly between pages using these buttons.


Challenges Faced and Potential Improvements:

During the development of the User Management Dashboard, a few key challenges surfaced. First, managing state across multiple components became complex, especially with the addition of CRUD operations and pagination logic. This challenge was mitigated by using the useContext hook for centralized state management, but it required careful structuring to avoid over-complication.

Another significant challenge was error handling. Ensuring that errors from the mock API, such as failed user fetches or invalid input data, were caught and displayed correctly required thoughtful implementation of try-catch blocks and conditional UI rendering.

Styling the components with Tailwind CSS also posed a challenge in maintaining consistency across the application, particularly when ensuring responsiveness on different screen sizes.

If given more time, I would improve the application by implementing server-side pagination for better performance when handling large datasets. Additionally, introducing a form validation library like Formik or Yup would enhance the reliability of input validation. Lastly, adding unit and integration tests using Jest and React Testing Library would ensure that all components and functionalities are thoroughly tested, reducing the risk of bugs and improving overall code quality. These improvements would enhance both scalability and robustness in future iterations.

