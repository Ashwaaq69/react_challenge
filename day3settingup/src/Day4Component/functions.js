import React from 'react'
//JavaScript function
// const getUserInfo = (firstName, lastname, country, tittle, skills) =>{
//     return `${firstName}, ${lastname}, a${tittle} developer based in ${country}. she knows ${skills.join(' ')}`
// }

// const skills = ['Html', 'Css', 'Js', 'React']
// console.log(getUserInfo('Ashuu', 'Mohaz', 'somalia', 'fullstack developer', skills))

//JavaScript Class


// class Parent {
//     constructor(firstname, lastname, country, title){
//         this.firstname = firstname
//         this.lastname = lastname
//         this.country = country
//         this.title = title
//     }
//    getPersonalInfo () {
//    return  `${this.firstname} ${this.lastname}, a ${this.title} developer basen in ${this.country}`
//    }
//    parentmethod(){
//     console.log('Parent Method')
//    }
// }



// const p1 = new Parent('Ashuu', 'Mohaz', 'somalia', 'FullStack Developer')

// class Child extends Parent {
//   constructor(firstname, lastName, country, title, skills) {
//     super(firstname, lastName, country, title)
//     this.skills = skills
   
//   }
//   getSkills() {
//     let len = this.skills.length
//     return len > 0 ? this.skills.join(' ') : 'No skills found'
//   }
//   childMethod() {
//     // code goes here
//   }
// }

// const skills = ['HTML', 'CSS', 'JS', 'React']

// const child = new Child(
//   'Asabeneh',
//   'Yetayeh',
//   'Finland',
//   'FullStack Developer',
//   skills
// )



//components Components can be:

// Functional Component / Presentational Component / Stateless Component / Dumb Component
// Class Component / Container Component/ Statefull Component / Smart Component

// const jsx = <h1>content</h1>

const header = (
    <header>
      <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 3, 2020</small>
      </div>
    </header>
  )


// const buttonStyles = {
//     padding: '10px 20px',
//     background: 'rgb(0, 255, 0',
//     border: 'none',
//     borderRadius: 5,
//   }
//   const Button = () => <button style={buttonStyles}> action </button>

// Hexadecimal color generator
// const hexaColor = () => {
//     let str = '0123456789abcdef'
//     let color = ''
//     for (let i = 0; i < 6; i++) {
//       let index = Math.floor(Math.random() * str.length)
//       color += str[index]
//     }
//     return '#' + color
//   }
  
//   const HexaColor = () => <div>{hexaColor()}</div>
  
const Day4Component = () => {
    // return jsx;
    return header;
    // return <Button />;
   
};

//Further on Functional components


export default Day4Component