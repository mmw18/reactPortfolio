// src/App.jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <RouterProvider router={router}>
        </RouterProvider>
      </main>
      <Footer />
    </>
  );
}

export default App;











// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Header from './components/header/header'
// import Footer from './components/Footer/Footer'
// import React from 'react';
// import { RouterProvider } from 'react-router-dom';
// import router from './routes/router'; 

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <Header />
//         <p>Hello World</p>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <Footer />
//     </>
//   )
// }

// export default App
