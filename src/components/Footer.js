import React from 'react'


let CurrentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright &copy; {CurrentYear}</p>
    </footer>
  );
}

export default Footer