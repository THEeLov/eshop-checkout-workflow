# Online Store Checkout Workflow

This project implements a prototype of a new checkout workflow for an online store, designed to simplify the purchasing process for users. The checkout process is divided into five steps, allowing users to review their order, select a recipient (if the order is a gift), choose a payment method, enter billing information, and finally confirm the order.

## Features

### Step 1: Order Summary
- **Order Review**: Users can review the items in their cart and see the total price.
- **Purchase Options**: 
  - A button to buy the items for yourself.
  - A button to buy the items as a gift.

### Step 2 (Optional): Select Recipient
- **Gift Option**: If the user chooses to gift their cart, they can select a recipient from a searchable list of users.
- **Features**:
  - A search bar to filter the list of users.
  - A list of users to select from.

### Step 3: Select Payment Method
- **Payment Options**: Users can select from a list of available payment methods.
- **Payment Methods**: 
  - Credit Card (with a form for card details: Card number, Holder's name, Expiration date, CVV).
  - Two additional payment methods.

### Step 4: Fill in Billing Info
- **Billing Information**: A form to enter billing details with the following fields:
  - Name and Surname (required)
  - Email (required)
  - Phone number (optional)
  - Address (required)
  - City (required)
  - State/Province (required)
  - Country (required)
  - Zip Code (required)

### Step 5: Confirmation
- **Order Confirmation**: Users receive a confirmation message, preferably with a nice animation.

## Navigation and Validation
- **Step Navigation**: Users can navigate back and forth between steps. The Select Recipient step is included when gifting the cart and skipped when not.
- **Validation**: Proper validation is implemented for each field, ensuring users cannot proceed to the next step if there are errors.

## Data Persistence
- **Form Persistence**: The form data is persistent, ensuring that if a user submits any form and refreshes the page, the submitted data is retained and the user is returned to the correct step.

## API and Frontend Structure

### Project Structure
The project is structured as a Turborepo with the following packages and apps:

- **api**: Express backend application.
- **web**: Vite React frontend application.
- **@repo/validation-schemas**: Shared validation schemas for both web and API applications.
- **@repo/openapi**: Generated OpenAPI specification and hooks for backend communication (using Axios and Tanstack query).

### Configurations
- **@repo/eslint-config**: Shared ESLint configurations.
- **@repo/typescript-config**: Shared TypeScript configurations.

### Optional UI Library
- **@repo/ui**: Optional library for building custom UI components.

## Getting Started

### Prerequisites
- Install the necessary dependencies:
  ```bash
  npm install
  ```

- Run a Redis container on port 6379:
  ```bash
  docker run -d --name pb138-iteration-04-redis -p 6379:6379 redis
  ```

### Setting Up the Environment
- Create a `.env` file for the API:
  ```bash
  cp apps/api/.env.example apps/api/.env
  ```
  Or manually create it in `apps/api` using the provided `.env.example` as a template.

## Running the Project
To start the project, ensure all dependencies are installed and the Redis container is running. The frontend and backend can be started as per the project's scripts.
