// export default function Mapping() {
//   return (
//     <div>
//       <App />

//     </div>
//   )
// }



// const App = () => {
//   // const numbers = [1, 2, 3, 4, 5];
//   return (
//     <div className="container">
//       <div>
//         {/* <h1>Numbers List</h1>
//         <ul>
//           <Numbers numbers={numbers} />
//         </ul> */}

//         {/* <h1>Skills Level</h1> */}
//         {/* <Skills skills={skills} /> */}
//         <h1>Countries List</h1>
//         <Countries countries={countries} />
//       </div>
//     </div>
//   );
// };



// Mapping array of numbers

// const Numbers = ({numbers}) =>{
//     const list = numbers.map((number) => <li>{number}</li>)
//     return list
// }

// Mapping array of arrays

// const skills = [
//     ['HTML', 10],
//     ['Node', 10],
//     ['React', 10],
//     ['CSS', 9],
//     ['JavaScript', 8],
//     ['Python', 7],
//     ['D3.js', 6],
// ]



// Skill Component

// const Skill = ({ skill: [tech, level] }) => (
//     <li>
//       {tech} {level}
//     </li>
//   )


// Skills Component

// const Skills = ({ skills }) => {
//     const skillsList = skills.map((skill) => <Skill skill={skill} />)
//     console.log(skillsList)
//     return <ul>{skillsList}</ul>
//   }

  //Mapping array of objects

  
// const countries = [
//     { name: 'Finland', city: 'Helsinki' },
//     { name: 'Sweden', city: 'Stockholm' },
//     { name: 'Denmark', city: 'Copenhagen' },
//     { name: 'Norway', city: 'Oslo' },
//     { name: 'Iceland', city: 'Reykjavík' },
//   ]

//   const Country = ({ country: { name, city } }) => {
//     return (
//       <div>
//         <h1>{name}</h1>
//         <small>{city}</small>
//       </div>
//     )
//   }


// // countries component

// const Countries = ({ countries }) => {
//   const countryList = countries.map((country) => <Country country={country} />)
//   return <div>{countryList}</div>
// }

// Key in mapping arrays


// const Numbers = ({ numbers }) => {
//   // modifying array to array of li JSX
//   const list = numbers.map((num) => <li key={num}>{num}</li>)
//   return list
// }

// Let's also add in key in countries mapping example.

// const countries = [
//   { name: 'Finland', city: 'Helsinki' },
//   { name: 'Sweden', city: 'Stockholm' },
//   { name: 'Denmark', city: 'Copenhagen' },
//   { name: 'Norway', city: 'Oslo' },
//   { name: 'Iceland', city: 'Reykjavík' },
// ]


// // Country component
// const Country = ({ country: { name, city } }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <small>{city}</small>
//     </div>
//   )
// }


// // countries component
// const Countries = ({ countries }) => {
//   const countryList = countries.map((country) => (
//     <Country key={country.name} country={country} />
//   ))
//   return <div>{countryList}</div>
// }