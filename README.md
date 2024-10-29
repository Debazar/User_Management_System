
# User Management System

This project is a User Management System built with Node.js, Express, and EJS. It provides an intuitive interface for managing user records, allowing users to add, view, edit, and delete user information efficiently.

## Features

- **Add, View, Edit, Delete Users**: Full CRUD functionality to manage user records.
- **Flash Messages**: Feedback for user actions (e.g., success or error messages).
- **Search Functionality**: Easily find user records based on search criteria.
- **Breadcrumb Navigation**: User-friendly navigation throughout the application.
- **Session Management**: Maintains user sessions and flash messages.
- **404 Error Page**: Custom error page for undefined routes.

## Technologies Used

- **Node.js** and **Express.js**: Backend framework for building the server and handling routes.
- **MongoDB** (via Mongoose): NoSQL database for persistent storage of user data.
- **EJS**: Templating engine for dynamic HTML rendering.
- **Bootstrap**: CSS framework for responsive design and styling.
- **Express Sessions** and **Express Flash**: For managing user sessions and flash messages.

## 2. Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Debazar/User_Management_System.git
   cd User_Management_System
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory with the following content:

   ```plaintext
   PORT=5001
   DB_URI=mongodb://your_username:your_password@host:port/database
   ```

4. **Start the application**:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:5001`.

## 3. Project Structure

- **`server/routes/user.js`**: Defines routes for user operations (CRUD).
- **`server/controllers/userController.js`**: Contains business logic for handling user-related actions.
- **`server/config/db.js`**: Manages the MongoDB connection.
- **`views/`**: Contains EJS templates for rendering the frontend.
- **`public/`**: Stores static assets like CSS and images.

## 4. Frontend Overview

- **Add User Form**: Users can enter user details including first name, last name, telephone, email, and additional notes.
- **Navigation and Breadcrumbs**: Provides an easy way to navigate between different sections (e.g., Dashboard, Add User).
- **Responsive Layout**: The application is designed to be responsive and user-friendly on various screen sizes.

### Example Add User Form

The form captures the following fields:

- **First Name** and **Last Name**
- **Telephone** and **Email**
- **User Details**: A text area for additional information.

The form submits a `POST` request to `/add` to create a new user entry.

## API Endpoints

- **GET /** - Display homepage with a list of users.
- **GET /add** - Show form for adding a new user.
- **POST /add** - Handle submission of new user data.
- **GET /view/:id** - View details of a specific user.
- **GET /edit/:id** - Show edit form for a user.
- **PUT /edit/:id** - Update user information.
- **DELETE /edit/:id** - Remove a user record.
- **POST /search** - Search users based on provided criteria.

## Contributing

Contributions are welcome! You can open issues or submit pull requests to add features, improve code quality, or fix bugs.

## License

This project is licensed under the MIT License.
```

