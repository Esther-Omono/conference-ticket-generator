# Conference Ticket Generator

A modern, web application built with React and Tailwind CSS that allows users to fill out a form with their details, perform validations on the inputs, and generate a ticket upon successful submission.

## Table of Content

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Requirements](#setup-requirements)
- [Issues Encountered](#issues-encountered)
- [Acknowledgement](#acknowledgement)

## Features

1. Multi-step Process

- Three-step flow with progress indicator
- Step 1: Ticket Selection
- Step 2: Attendee Details
- Step 3: Ticket Confirmation
- Progress bar showing current step (1/3, 2/3, 3/3)

2. State Management

- Centralized state management using React Context API
- Persistent storage using localStorage
- Form data preservation between steps
- Reset functionality for starting over

3. Form Features

- Ticket selection with quantity options
- Profile photo upload with Cloudinary integration
- Attendee information collection:
  - Name
  - Email (with validation)
  - Special requests
- Form validation before proceeding to next step

4. UI/UX Features

- Responsive design for mobile and desktop
- Custom styling with Tailwind CSS
- Loading states for asynchronous operations
- Smooth transitions between steps
- Custom button hover effects
- Error handling and user feedback

5. Image Upload

- Cloudinary integration for image storage
- Loading state during upload
- Secure image handling
- Error handling for failed uploads

## Tech Stack

- React.js - JSX for structure
- Tailwind CSS for styling
- Context API for state management
- localStorage for data persistence
- Cloudinary for image storage
- Lucide React for icons

## Project Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── Outercard.jsx
│   ├── AttendeeDetails.jsx
│   ├── TicketSelection.jsx
│   └── TicketReady.jsx
├── context/
│   └── FormContext.jsx
└── App.jsx
```

## Setup Requirements

1. Clone the repository

2. Install dependencies:

```bash
npm install
```

3. Create a .env file with your Cloudinary URL:

```bash
REACT_APP_CLOUDINARY_URL=your_cloudinary_upload_url_here
```

4. Start the development server:

```bash
npm start
```

## Issues Encountered

I had issues with installing and using tailwind. This is the very first time I have used it in a project. It was quite challenging, however with the help of Tailwind Documentation and Google, I was able to get the hang of it. I look forward to using it in more projects to come.

Other issues I encountered include:

1. Form Validation

- Implementing comprehensive form validation
- Improving Email validation

2. Image Upload

- Potential CORS issues with Cloudinary
- Handling large file sizes
- Optimizing image preview

3. State Management

- The use of localStorage
- Need for better error handling for data persistence

## Acknowledgment

This project was inspired by and developed as part of the [HNG12 internship](https://hng.tech/internship), a fast-paced bootcamp for learning digital skills.
