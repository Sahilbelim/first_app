import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));

var num1 = 10;
var num2 = 20;

var page = (
  <main>
    <center>
      <h1>large block of code in React</h1>
    </center>

    <ul>
      <h2>List of React Topic</h2>
      <li>
        <h4 className="h-4">1] React Components :</h4>
        <span>
          Learn the basics of React components, which are the building blocks of
          React applications. Understand functional and className components and
          their role in UI development.
        </span>
      </li>
      <li>
        <h4 className="h-4">2] React State Management:</h4>
        <span>
          Explore different approaches to managing state in React, including the
          useState and useContext hooks, as well as state management libraries
          like Redux and Mobx.
        </span>
      </li>
      <li>
        <h4 className="h-4">3] React Router:</h4>
        <span>
          Learn how to implement client-side routing in React applications using
          React Router. Create navigation menus and handle dynamic routes.
        </span>
      </li>
      <li>
        <h4 className="h-4">4] React Hooks:</h4>
        <span>
          Dive deeper into React Hooks, such as useEffect, useMemo, and
          useCallback, to manage side effects and optimize performance in
          functional components.
        </span>
      </li>
      <li>
        <h4 className="h-4">5] React Context API:</h4>
        <span>
          Understand how to use the React Context API to manage global state and
          avoid prop drilling in your application.
        </span>
      </li>
      <li>
        <h4 className="h-4">6] React Forms:</h4>
        <span>
          Explore techniques for handling forms in React, including controlled
          and uncontrolled components, form validation, and form libraries like
          Formik.
        </span>
      </li>
      <li>
        <h4 className="h-4">7] React Testing:</h4>
        <span>
          Learn about testing React components using tools like Jest and React
          Testing Library. Write unit tests and integration tests for your
          application.
        </span>
      </li>
      <li>
        <h4 className="h-4">8] React Performance Optimization:</h4>
        <span>
          Discover strategies for optimizing the performance of your React
          application, including code splitting, lazy loading, and memoization.
        </span>
      </li>
      <li>
        <h4 className="h-4">9] Server-Side Rendering (SSR) with React:</h4>
        <span>
          Understand the benefits of SSR and how to implement it with frameworks
          like Next.js for improved SEO and initial page load speed.
        </span>
      </li>
      <li>
        <h4 className="h-4">10] React Best Practices and Patterns:</h4>
        <span>
          Explore best practices for organizing and structuring your React code,
          including folder structure, naming conventions, and design patterns
          like Higher Order Components (HOCs) and Render Props.
        </span>
      </li>
    </ul>
  </main>
);

root.render(page);
