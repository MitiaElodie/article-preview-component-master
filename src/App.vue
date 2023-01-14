<template>
  <div class="article">
    <div class="article__container">
      <div class="article__img-container"></div>
      <div class="article__details-container">
        <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
        <div class="article__author-container">
          <img class="article__author-img" src="./assets/avatar-michelle.jpg" alt="Headshot of Michelle Appleton" />
          <div class="article__author-details">
            <p>Michelle Appleton</p>
            <p>28 Jun 2020</p>
          </div>
          <div class="article__send-btn">
            <img class="article__send-icon" src="./assets/icon-share.svg" alt="Send icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Your Name Here</a>.
    </div>
  </footer>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
$very-dark-grayish-blue: hsl(217, 19%, 35%);
$desaturated-dark-blue: hsl(214, 17%, 51%);
$grayish-blue: hsl(212, 23%, 69%);
$light-grayish-blue: hsl(210, 46%, 95%);
// font-size: 13px
// font-family: https://fonts.google.com/specimen/Manrope 500, 700

.article {
  font-family: 'Manrope', sans-serif;
}

.attribution { font-size: 11px; text-align: center; }
.attribution a { color: hsl(228, 45%, 44%); }
</style>
