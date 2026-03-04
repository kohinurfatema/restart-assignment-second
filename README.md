# Customer Support Zone

A Customer Support Ticket Management System built with **React + Vite + CSS + React-Toastify**.

---

## Features

- View all customer support tickets in a 2-column card grid
- Click a ticket to move it to **Task Status** (In-Progress)
- Mark tickets as **Complete** to move them to Resolved
- Live banner counts for In-Progress and Resolved tickets
- Toast notifications for all actions (React-Toastify)
- Fully responsive design for mobile devices

---

## Tech Stack

- React 18
- Vite
- CSS (single App.css file)
- React-Toastify

---

## React Concepts — Q&A

### 1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code directly inside JavaScript files. React uses JSX to describe what the UI should look like.

Instead of writing:

```js
React.createElement('h1', null, 'Hello World')
```

You write:

```jsx
<h1>Hello World</h1>
```

JSX is used because it makes the code easier to read and write. It lets developers see the structure of the UI directly in the component file. Under the hood, a tool like Babel compiles JSX into regular JavaScript before the browser runs it.

---

### 2. What is the difference between State and Props?

| | State | Props |
|---|---|---|
| **Defined in** | Inside the component | Passed from parent component |
| **Mutable?** | Yes — can be changed with `useState` | No — read-only inside the component |
| **Owned by** | The component itself | The parent component |
| **Used for** | Data that changes over time | Data passed down to child components |

**State** is internal data that a component manages itself. For example, in this project, `tickets`, `inProgressTickets`, and `resolvedTickets` are all state variables in `App.jsx` because they change when the user interacts with the app.

**Props** are values passed down from a parent to a child. For example, `Banner` receives `inProgress` and `resolved` as props from `App.jsx` — `Banner` just displays them, it does not change them.

---

### 3. What is the useState hook, and how does it work?

`useState` is a built-in React hook that lets a component store and update data. When the state changes, React automatically re-renders the component to show the updated value.

**Syntax:**

```jsx
const [value, setValue] = useState(initialValue);
```

- `value` — the current state value
- `setValue` — a function to update the state
- `initialValue` — the starting value when the component first renders

**Example from this project:**

```jsx
const [tickets, setTickets] = useState(ticketsData);
```

When a user clicks a ticket card, `setTickets` is called to remove that ticket from the list. React then re-renders the component and the card disappears from the grid.

---

### 4. How can you share state between components in React?

State is shared between components by **lifting state up** — storing the state in the nearest common parent component and passing it down to children via **props**.

**Example from this project:**

`App.jsx` manages all three state variables:

```jsx
const [tickets, setTickets] = useState(ticketsData);
const [inProgressTickets, setInProgressTickets] = useState([]);
const [resolvedTickets, setResolvedTickets] = useState([]);
```

- `Banner` receives `inProgress` and `resolved` counts as props to display the live numbers
- `TicketCard` receives the `onAddToProgress` handler as a prop to update state when clicked
- `TaskStatus` receives `inProgressTickets`, `resolvedTickets`, and `onComplete` as props

This way, one source of truth (App.jsx) controls the data, and all child components stay in sync automatically.

---

### 5. How is event handling done in React?

In React, events are handled using **camelCase event attributes** directly on JSX elements, and you pass a **function** as the handler.

**Basic syntax:**

```jsx
<button onClick={handleClick}>Click me</button>
```

**Inline arrow function (used when passing arguments):**

```jsx
<div onClick={() => onAddToProgress(ticket)}>...</div>
```

**Example from this project:**

```jsx
// TicketCard.jsx
<div className="ticket-card" onClick={() => onAddToProgress(ticket)}>
```

```jsx
// TaskStatus.jsx
<button className="btn-complete" onClick={() => onComplete(ticket)}>
  Complete
</button>
```

React uses a **Synthetic Event** system that wraps native browser events to ensure consistent behavior across all browsers. Common events include `onClick`, `onChange`, `onSubmit`, and `onMouseEnter`.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Banner.jsx
│   ├── TicketCard.jsx
│   ├── TaskStatus.jsx
│   └── Footer.jsx
├── data/
│   └── tickets.json
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Getting Started

```bash
npm install
npm run dev
```
