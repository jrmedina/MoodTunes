import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="personContainer">
        <p>Joshua Medina</p>
        <a className="linkedinAnchor" href="https://www.linkedin.com/in/joshua-medina/">
          <AiFillLinkedin />
        </a>

        <a className="githubAnchor" href="https://github.com/jrmedina">
          <AiFillGithub />
        </a>
      </div>
      <div className="personContainer">
        <p>Michael Martinelli</p>
        <a className="linkedinAnchor" href="https://www.linkedin.com/in/michael-martinelli-7230b5237/">
          <AiFillLinkedin />
        </a>
        <a className="githubAnchor" href="https://github.com/mmartinelli22">
          <AiFillGithub />
        </a>
      </div>
      <div className="personContainer">
        <p>Jordan Farelli</p>
        <a className="linkedinAnchor" href="https://www.linkedin.com/in/jordan-farelli/">
          <AiFillLinkedin />
        </a>

        <a className="githubAnchor" href="https://github.com/jfarelli">
          <AiFillGithub />
        </a>
      </div>
      <div className="personContainer">
        <p>Ana Bennett</p>
        <a className="linkedinAnchor" href="https://www.linkedin.com/in/ana-bennett/">
          <AiFillLinkedin />
        </a>

        <a className="githubAnchor" href="https://github.com/anabennett11">
          <AiFillGithub />
        </a>
      </div>
    </div>

  )
}

export default Footer
