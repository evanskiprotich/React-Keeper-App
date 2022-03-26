import React from 'react'
import '../style.css'

let CurrentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {CurrentYear}</p>
    </footer>
  );
}

export default Footer