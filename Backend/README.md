# User Registration Endpoint Documentation

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body:
The request body should be a JSON object with the following structure:
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

### Validation:
- `email`: Must be a valid email address.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

### Responses:

#### Success:
- **Status Code**: 201 Created
- **Response Body**:
  ```json
  {
    "message": "User registered successfully",
    "user": {
      "id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Client Errors:
- **Status Code**: 400 Bad Request
- **Response Body**:
  ```json
  {
    "error": "All fields are required"
  }
  ```
  or
  ```json
  {
    "error": "Invalid email"
  }
  ```
  or
  ```json
  {
    "error": "First name must be at least 3 characters long"
  }
  ```
  or
  ```json
  {
    "error": "Password must be at least 6 characters long"
  }
  ```

#### Server Errors:
- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "An error occurred while registering the user"
  }
  ```

### Example Request:
```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### Example Response:
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "60c72b2f9b1e8b001c8e4b8e",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```