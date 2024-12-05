// // index.js
import React from 'react';
import ReactDOM from 'react-dom';

// import Exercise from './exercise'
// import Day4Component from './Day4Component/functions'
// import Day5 from './Day5/DayProps'
// import Des from './Day5/Des';
import Exer from './Day5/Exer';
// To get the root element from the HTML document
// import chefimage from './images/chef1.avif'
// // JSX element, header
// const welcome = 'Welcome to 30 Days Of React'
// const title = 'Getting Started React'
// const subtitle = 'JavaScript Library'
// const author = {
//   firstName: 'Ashuu',
//   lastName: 'mohaz',
// }
// const date = 'Oct 2, 2020'

// // JSX element, header
// const header = (
//   <header>
//     <div className='header-wrapper'>
//       <h1>{welcome}</h1>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <p>
//         Instructor: {author.firstName} {author.lastName}
//       </p>
//       <small>Date: {date}</small>
//     </div>
//   </header>
// )

// const numOne = 3
// const numTwo = 2

// const result = (
//   <p>
//     {numOne} + {numTwo} = {numOne + numTwo}
//   </p>
// )

// const yearBorn = 1820
// const currentYear = new Date().getFullYear()
// const age = currentYear - yearBorn
// const personAge = (
//   <p>
//     {' '}
//     {author.firstName} {author.lastName} is {age} years old
//   </p>
// )

// Header Component
// const Header = () => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Asabeneh Yetayeh</p>
//       <small>Oct 3, 2020</small>
//     </div>
//   </header>
// )

// User Card Component
// const UserCard = () => (
//   <div className='user-card'>
//     <img src={chefimage} alt='' />
//     <h2>Asabeneh Yetayeh</h2>
//   </div>
// )

// TechList Component
// const TechList = () => {
//   const techs = ['HTML', 'CSS', 'JavaScript']
//   const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//   return techsFormatted
// }

// // Main Component
// const Main = () => (
//   <main>
//     <div className='main-wrapper'>
//       <p>Prerequisite to get started react.js:</p>
//       <ul>
//         <TechList />
//       </ul>
//       <UserCard />
//     </div>
//   </main>
// )

// Footer Component
// const Footer = () => (
//   <footer>
//     <div className='footer-wrapper'>
//       <p>Copyright 2020</p>
//     </div>
//   </footer>
// )


// const Header = () => (
//   <header>
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Asabeneh Yetayeh</p>
//       <small>Oct 3, 2020</small>
//     </div>
//   </header>
// )

// // JSX element, app
const App = (
  <div className='app'>
    {/* <Day4Component /> */}
    {/* <Header />
    <Main />
    <Footer /> */}
    {/* <Day5 /> */}
    {/* <Des /> */}
    
    <Exer />
  </div>
    
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render( App ,   rootElement)