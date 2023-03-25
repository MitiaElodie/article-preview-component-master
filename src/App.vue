
<script>
import Share from '@/components/Share.vue';
export default {
  name: 'App',
  components: { Share },
  data() {
    return {
      showLink: false
    }
  },

  methods: {
    onSendBtnClick() {
      this.showLink = !this.showLink;
    }
  }
}
</script>
<template>
  <div class="article">
    <div class="article__container">
      <div class="article__img-container">
        <img class="article__img" src="./assets/drawers.jpg" alt="A drawer well decorated" />
      </div>
      <div class="article__details-container">
        <h1 class="article__title">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p class="article__details">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
        <div class="article__publication-details">
          <div class="article__author-container">
            <img class="article__author-img" src="./assets/avatar-michelle.jpg" alt="Headshot of Michelle Appleton" />
            <div class="article__author-details">
              <p class="article__author-name">Michelle Appleton</p>
              <p class="article__publication-date">28 Jun 2020</p>
            </div>
          </div>
          <div class="article__share-link" v-if="showLink">
            <Share class="article__share" />
          </div>
          <div class="article__send-btn" @click="onSendBtnClick">
            <img class="article__send-icon" src="./assets/icon-share.svg" alt="Send icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="https://www.frontendmentor.io/profile/MitiaElodie">MitiaElodie</a>.
    </div>
  </footer>
</template>

<style lang="scss">
$very-dark-grayish-blue: hsl(217, 19%, 35%);
$desaturated-dark-blue: hsl(214, 17%, 51%);
$grayish-blue: hsl(212, 23%, 69%);
$light-grayish-blue: hsl(210, 46%, 95%);
$container-background: hsla(212, 23%, 69%, 0.2);

.article {
  font-family: 'Manrope', sans-serif;
  font-size: 13px;
  font-weight: 500;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $container-background;
  color: $desaturated-dark-blue;

  &__container {
    margin: 20px;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
  }

  &__img{
    width: 100%;
  }

  &__details-container {
    padding: 35px;
  }

  &__title {
    font-size: 1.2rem;
    margin-bottom: 15px;
    color: $very-dark-grayish-blue;
  }

  &__details {
    line-height: 1.6;
  }

  &__author-container,
  &__publication-details {
    display: flex;
    align-items: center;
  }

  &__publication-details {
    justify-content: space-between;
    margin-top: 30px;
  }

  &__author-img {
    width: 40px;
    border-radius: 100%;
    margin-right: 15px;
  }

  &__author-name {
    color: $very-dark-grayish-blue;
    font-weight: 700;
  }

  &__publication-date {
    color: $grayish-blue;
  }

  &__send-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $container-background;
    border-radius: 100%;
    cursor: pointer;
    width: 35px;
    height: 35px;
  }
}

.attribution { font-size: 11px; text-align: center; }
.attribution a { color: hsl(228, 45%, 44%); }
</style>
