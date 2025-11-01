# Task Manager App

A simple and elegant task management application built with React Native and Expo. It helps you organize your tasks, focus on what's important, and be more productive.

## ✨ Features

- **Create & Manage Tasks**: Easily add, update, and delete tasks.
- **Task Prioritization**: Assign priorities (High, Medium, Low) to your tasks.
- **Status Filtering**: Filter tasks by their status (All, Pending, Completed).
- **Priority Filtering**: Filter tasks by their priority level.
- **Light & Dark Mode**: Switch between light and dark themes for your comfort.
- **Pull to Refresh**: Update your task list with a simple gesture.
- **Form Validation**: Ensures you provide valid input when creating tasks.
- **Responsive UI**: A clean and modern user interface that looks great on any device.

## 📸 Screenshots

|                                                       Welcome Screen                                                       |                                                     Main App Screen                                                     |
| :------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| <img src="https://github.com/JavDev95/task-manager/blob/main/assets/images/welcome.png" alt="Welcome Screen" width="300"/> | <img src="https://github.com/JavDev95/task-manager/blob/main/assets/images/app.png" alt="Main App Screen" width="300"/> |

## 🚀 Tech Stack

- **Framework**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/)
- **UI Library**: [React Native Paper](https://reactnativepaper.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) for global state (theme, filters)
- **Data Fetching & Caching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Mock Backend**: [json-server](https://github.com/typicode/json-server)

## 🧠 Architectural Choices

### State Management: Zustand

For global state management (like theme and filters), this project uses **Zustand**. Zustand is optimal for simplicity, minimal boilerplate, with outstanding performance, lightweight and hook based modern global state solution.

### Data Fetching: TanStack Query

All asynchronous operations, like fetching and updating tasks, are handled by **TanStack Query (React Query)**. It provides excellent tools for caching, background refetching, and managing server state, which simplifies data handling and improves the user experience with features like optimistic updates and loading states.

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- `npm` or `yarn` package manager
- Expo Go app on your iOS or Android device, or a configured simulator/emulator.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd task-manager
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

This project requires two processes to run simultaneously: the mock API server (`json-server`) and the Expo development server.

You will need two separate terminal windows to run them.

1.  **Start the mock API server:**
    In your first terminal, run the following command to start the `json-server`. This will serve your `db.json` file on `http://localhost:3000`.

    ```bash
    npm run start:db
    ```

2.  **Start the Expo development server:**
    In your second terminal, run the `start` command.

    ```bash
    npm run start
    ```

3.  **Connect your device:**
    Once the Expo server is running, you will see a QR code in the terminal. Scan this QR code with the **Expo Go** app on your physical device. Alternatively, you can run the app on a simulator (e.g., 'i' for iOS Simulator, 'a' for Android Emulator).

### Available Scripts

Here are the most important scripts available in `package.json`:

- `npm start`: Starts the Expo development server only.
- `npm run start:db`: Starts the `json-server` mock database only.
- `npm run start:ios`: Starts the Expo dev server and attempts to launch the iOS simulator.
- `npm run start:android`: Starts the Expo dev server and attempts to launch the Android emulator.
- `npm run lint`: Lints the project files using ESLint.

---

Happy tasking! 🎉
