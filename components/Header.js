import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header class="main-header">
    <h1 class="name">Rachel Williams</h1>
       <nav>
      <ul>
        <li>
          <a href="#aboutme">About Me</a>
        </li>
        <li>
          <a href="#myprojects">My Projects</a>
        </li>
        <li>
          <a href="#contactme">Contact Me</a>
        </li>
      </ul>
    </nav>

  </header>
  );
}

export default Header;
