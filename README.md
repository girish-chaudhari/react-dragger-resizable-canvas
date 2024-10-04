Here is a detailed README.md for your package `react-resize-draggable-window` with all necessary information, including installation, usage, and props:

---

# react-resize-draggable-window

## Overview

A simple, resizable, and draggable window component for React applications.

## Installation

You can install it with npm:

```bash
npm i react-resize-draggable-window
```

## Usage

Here's an example of how to use the `CanvasWindow` component in your React application:

```javascript
import React from 'react';
import CanvasWindow from 'react-resize-draggable-window';

const App = () => (
  <CanvasWindow className="custom-class" isPortalDisabled={false}>
    <p>Your content here</p>
  </CanvasWindow>
);

export default App;
```

## Props

The `CanvasWindow` component accepts the following props:

---

| Prop Name         | Type         | Default | Description                                            |
|-------------------|--------------|---------|--------------------------------------------------------|
| className         | string       | ''      | Additional class names to apply to the window.         |
| isPortalDisabled  | boolean      | true    | Whether to disable the use of a portal for rendering the window. |
| defaultPosition   | Position     |         | The default position of the window.                    |
| defaultSize       | Size         |         | The default size of the window.                        |
| title             | string       |         | The title of the window.                               |
| isOpen            | boolean      |         | Whether the window is open.                            |
| children          | ReactNode    | null    | The content to be displayed inside the window.         |
| isDraggable       | boolean      |         | Whether the window is draggable.                       |
| isResizable       | boolean      |         | Whether the window is resizable.                       |
| footer            | ReactNode    |         | The footer content of the window.                      |
| onClose           | Dispatch<SetStateAction<boolean>> | undefined | Callback function to handle window close action.       |


## Example

Here's a more detailed example demonstrating the use of the `CanvasWindow` component with additional props:

```javascript
import React from 'react';
import CanvasWindow from 'react-resize-draggable-window';
import './App.css';

const App = () => (
  <CanvasWindow className="custom-class" isPortalDisabled={false}>
    <div>
      <h1>Resizable and Draggable Window</h1>
      <p>This is a resizable and draggable window component.</p>
    </div>
  </CanvasWindow>
);

export default App;
```

## Custom Styles

You can apply custom styles to the `CanvasWindow` component by passing a `className` prop and defining the styles in your CSS file. Here's an example:

```css
/* App.css */
.custom-class {
  border: 2px solid #000;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
}
```

## Development

To run the development server and see the component in action, use the following commands:

```bash
npm install
npm start
```

## Build

To build the package for production, use the following command:

```bash
npm run build
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Acknowledgements

This package was inspired by the need for a simple, resizable, and draggable modal component in React applications.

A big thank you to [receter](https://github.com/receter) for their contributions and support!

You can replace the content of your current README.md with the above text.

