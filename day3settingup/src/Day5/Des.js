import React from 'react'

// const Skills = (props) => <ul>{props.skills}</ul>
const Skills = (props) =>{
const skillList = props.skills.map((skill) =><li>{skill}</li>)
return <ul>{skillList}</ul>
}
export default function Des() {
  return (
    <div>
       <Skills skills={['HTML', 'CSS', 'JavaScript']} />
       <Header data={data} />
       <Button text='Say Hi' onClick={() => alert('Hi')} />

    </div>
  )
}


//Object props type
const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
        firstName: 'Ashuu',
        lastName: 'Mohaz',
      },
      date: new Date(),
  }

const showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
  
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
// Header Component
const Header = (props) => {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>{props.data.welcome}</h1>
          <h2>{props.data.title}</h2>
          <h3>{props.data.subtitle}</h3>
          <p>
          {props.data.author.firstName} {props.data.author.lastName}
        </p>
        <small>{showDate(props.data.date)}</small>
        </div>
      </header>
    )
  }


  //Even we can write a function inside the curly bracket

  const Button = (props) =><button onClick={props.onClick}>{props.text}</button>


//Destructuring props



 