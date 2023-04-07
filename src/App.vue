
<script>
import Share from '@/components/Share.vue';
import 'tippy.js/dist/tippy.css';
export default {
  name: 'App',
  components: { Share },
  data() {
    return {
      showLink: false,
    }
  },

  computed: {
    cssVariables() {
      return {
        '--mobile-threshold': '375px',
      }
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
  <div class="article" :style="cssVariables">
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
          <tippy
            :interactive="true"
            :offset="[0, 20]"
          >
            <template #default>
              <div name="sendBtn" class="article__send-btn" @click="onSendBtnClick">
                <img class="article__send-icon" src="./assets/icon-share.svg" alt="Send icon" />
              </div>
            </template>
            <template #content>
              <Share />
            </template>
          </tippy>
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
    display: flex;
    flex-direction: column;
  }

  &__img{
    width: 100%;
    height: 100%;
  }

  &__details-container {
    padding: 30px;
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

    &:hover {
      background-color: $desaturated-dark-blue;

      & .article__send-icon {
        filter: none;
      }
    }
  }

  &__send-icon {
    filter: invert(49%) sepia(24%) saturate(371%) hue-rotate(174deg) brightness(96%) contrast(94%);
  }
}

.tippy-box {
  background-color: $very-dark-grayish-blue;
  border-radius: 7px;
  padding: 10px 20px;
}

.tippy-arrow {
  color: $very-dark-grayish-blue;
}

@media screen and (min-width: 650px) {
  .article {
    &__container {
      flex-direction: row;
      max-height: 300px;
      max-width: 800px;
    }
  }
}
.attribution { font-size: 11px; text-align: center; }
.attribution a { color: hsl(228, 45%, 44%); }
</style>
