# 🧠 The React Quiz

An interactive quiz application built with React, designed to help users test their knowledge of React concepts through multiple-choice questions, timed challenges, and score tracking.

The application combines a component-based interface with centralized state management using the React Context API and `useReducer`, providing a practical demonstration of handling quiz logic, user interactions, and application state.

## 🌐 Live Demo

https://react-quizz-mahmoud.netlify.app/

## 📸 Project Preview

<img width="1364" height="629" alt="Image" src="https://github.com/user-attachments/assets/4d1204ce-b19f-4c19-97a6-7f84c5d0ae12" />

-------
<img width="1365" height="634" alt="Image" src="https://github.com/user-attachments/assets/7e1bf279-6c04-4c12-84ea-e0285eccb2b0" />

-------
<img width="1361" height="626" alt="Image" src="https://github.com/user-attachments/assets/44027e7d-0b9a-4f24-bc6e-8a724e5ac325" />

## ✨ Key Features

- **Interactive React Quiz:** Test your knowledge of React concepts through multiple-choice questions.
- **Timed Questions:** Answer questions within a countdown timer.
- **Score Tracking:** Earn points for correct answers and view your final score.
- **Progress Indicator:** Track your progress throughout the quiz.
- **Difficulty Selection:** Choose between Easy, Medium, and Hard question levels.
- **Question Count Selection:** Choose how many questions to include in a quiz.
- **Answer Feedback:** Receive visual feedback indicating correct and incorrect answers.
- **Results Screen:** Review your final score, percentage, and high score.
- **Quiz Restart:** Start another quiz after completing a session.
- **Loading and Error States:** Display feedback while quiz questions are being loaded.

## 🛠️ Technologies & Tools

- **React 19** — Building interactive user interfaces with functional components and hooks.
- **JavaScript (ES6+)** — Implementing quiz logic and application behavior.
- **React Context API** — Sharing quiz state across components.
- **useReducer** — Managing quiz state transitions, scoring, question navigation, and timer updates.
- **Custom React Hooks** — Simplifying access to shared quiz state.
- **Fetch API** — Retrieving quiz questions from a local API endpoint.
- **JSON Server** — Serving quiz questions from a local JSON data source during development.
- **CSS3** — Styling the interface with Flexbox, Grid, CSS variables, transitions, and animations.
- **Create React App** — Providing the development and production build environment.

## 💡 React Concepts & Implementation

- **Component-Based Development:** Building the application from focused, reusable UI components.
- **State Management:** Using Context API and `useReducer` to manage the quiz lifecycle and related state.
- **Custom Hooks:** Creating a custom hook to access the quiz context.
- **Side Effects:** Using `useEffect` for data fetching and managing the countdown timer.
- **Conditional Rendering:** Displaying different screens depending on the current quiz state.
- **Event Handling:** Responding to answer selections, quiz controls, and user input.
- **Dynamic Rendering:** Rendering answer options and quiz information from data.
- **Component Composition:** Organizing the interface into smaller components with specific responsibilities.
- **Loading and Error Handling:** Representing different states during asynchronous data retrieval.

### 📚 A Foundation for State Management

This project was an important step in my understanding of React state management. It introduced me to the `useReducer` hook and helped me understand how to manage complex state through actions and predictable state transitions.

Building this understanding made learning the Context API and Redux much easier later on, as I was already familiar with the core concepts behind reducer-based state management and how actions are used to update application state.

## 🎯 Quiz Experience

The application guides users through a quiz session, from the initial screen to the final results.

1. Choose the number of questions and difficulty level.
2. Start the quiz and answer multiple-choice questions.
3. Receive visual feedback after selecting an answer.
4. Track progress, score, and remaining time.
5. View the final score and percentage when the quiz ends.
6. Restart the quiz to begin another session.

## 🎨 Interface & Styling

The interface uses custom CSS to create a focused quiz experience, including:

- Theme colors defined with CSS custom properties.
- Flexbox and CSS Grid for layout.
- Visual states for correct and incorrect answers.
- A progress indicator and countdown timer.
- CSS transitions and a loading animation.
- A custom heading font for visual identity.

## 🔌 Data Integration

Quiz questions are stored in a local JSON file and served through JSON Server. The React application retrieves the questions using the browser's Fetch API.

This setup provides a simple example of separating quiz data from the user interface while practicing asynchronous data fetching and loading and error states.

---

Built as a hands-on React project to practice component-based development, state management, custom hooks, asynchronous operations, and interactive UI design.
