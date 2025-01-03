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

# User Login Endpoint Documentation

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to log in a user. It requires the user's email and password.

### Request Body:
The request body should be a JSON object with the following structure:
```json
{
  "email": "string",
  "password": "string"
}
```

### Validation:
- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

### Responses:

#### Success:
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "token": "string",
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
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```
  or
  ```json
  {
    "errors": [
      {
        "msg": "Password must be at least 6 characters long",
        "param": "password",
        "location": "body"
      }
    ]
  }
  ```

#### Authentication Errors:
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### Server Errors:
- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "An error occurred while logging in the user"
  }
  ```

### Example Request:
```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

### Example Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MmIyZjliMWU4YjAwMWM4ZTRiOGUiLCJpYXQiOjE2MjQ1MjY0MDB9.4Z5y6Q5y6Q5y6Q5y6Q5y6Q5y6Q5y6Q5y6Q5y6Q",
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

# User Profile Endpoint Documentation

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint is used to get the profile of the authenticated user. It requires a valid JWT token.

### Headers:
- `Authorization`: Bearer token

### Responses:

#### Success:
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string"
  }
  ```

#### Authentication Errors:
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Example Request:
```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer <token>"
```

### Example Response:
```json
{
  "id": "60c72b2f9b1e8b001c8e4b8e",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

# User Logout Endpoint Documentation

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated user. It requires a valid JWT token.

### Headers:
- `Authorization`: Bearer token

### Responses:

#### Success:
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Authentication Errors:
- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Example Request:
```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer <token>"
```

### Example Response:
```json
{
  "message": "Logged out successfully"
}
```