import React from 'react'

const About = ()=>{

  const styleHeader = {
    margin: '0',
    textAlign: 'center',
    paddingtop: '5rem',
    fontSize: '3rem',
    fontweight: '200'
  }

  const styleDiv={
    width: '60%',
    margin: '0 auto',
    padding: '2rem',
    fontsize: '1.2rem',
    fontweight: '200',
    fontfamily: 'serif',
    lineheight: '2rem'
  }

  return(
    <div>
      <h3 style={styleHeader}>About</h3>

      <div style={styleDiv}>
        Make collections of flash cards to study and help you memorize vocabularies or any terms.
        You are able to make flash cards and put them in specic collection.Your collections are saved to localstorage in your browser
        and it will be available whenever your come back, unless you delete them.
      </div>
    </div>
  )
}
export default About;
