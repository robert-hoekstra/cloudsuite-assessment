import _ from 'lodash';
import './styles/scss/main.scss';
import './scripts/dropdown'
import './scripts/parallax'
import './scripts/rotate'
import logo from './assets/logo/logo.svg';

let html = `<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Front-end assessment (Medior)| Cloudsuite</title>
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="../styles/main.css" />
  </head>
  <body>
    <header>
      <nav>
        <ul class="main-navigation">
          <li id="dropdown" class="dropdown-container">
            <a class="rotate-container"href="#">Products <span class="fa fa-angle-down"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Living</a></li>
              <li><a href="#">Garden</a></li>
              <li><a href="#">Indoor Paint</a></li>
              <li><a href="#">Outdoor Paint</a></li>
              <li><a href="#">Gifts</a></li>
              <li><a href="#">All products</a></li>
            </ul>
          </li>
          <li><a href="#">Get inspired</a></li>
          <li><a href="#">Find a store</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <a href="/" title="to home"
          ><img
            src="../assets/logo/logo.svg"
            alt="Logo of the Cloudsuite company."
        /></a>
        <div class="shop-navigation">
          <div class="searchBar">
            <input
            class="fa fa-solid"
              type="search"
              name="searchbar"
              id="searchbar"
              placeholder="&#xf167; What are you looking for?"
            />
            <span class="fa-solid fa-search"></span>
          </div>
          <div class="account"><a href="/my-account"><span class="fa fa-user"></span>My account</a></div>
          <a href="/cart"><span class="fa fa-shopping-cart">
          </span></a>
        </div>
      </nav>
    </header>
    <main>
      <section class="hero parallax-wrapper">
        <div class="parallax">
          <h1>Bring the most beautiful colors into your home</h1>
          <button class="shadow">Discover our indoor paint</button>
        </div>
      </section>
    </main>
    <footer>
      <span>I am just here to create space for scrollable behavior ;)</span>
      <span class="fa-solid fa-user"></span>
    </footer>
    <script src="../scripts/parallax.js"></script>
    <script src="../scripts/dropdown.js"></script>
    <script src="../scripts/rotate.js"></script>
  </body>
</html>`


function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = html

 // Add the image to our existing div.;
 logo.src = logo;
 element.appendChild(logo);

  return element;
}

document.body.appendChild(component());
