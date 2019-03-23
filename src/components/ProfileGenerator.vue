<template>
  <div class="profile-generator">
    <p id="quwtaraProfileGeneratorResult">
      {{age1}}ぐらいの時が一番女の子してたと思う{{wara}}
      {{age2}}の{{area}}産の都内住み{{person}}です{{star}}
      基本カギなしだから仲良くしてくれる人フォロー嬉しいな{{face}}
      好き{{arrow}}{{likes}}/{{angry}}嫌い{{hate}} ❤️FF外の絡み無言フォロー大丈夫です❢</p>
    <div class="buttons">
      <a href="javascript:void(0);" v-on:click="reload()" class="reload">
        リロード
      </a>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button-template"
        data-size="large"
        v-bind:data-text="result"
        data-url="https://www.quwtara.space/playground/profile-generator/"
        data-hashtags="quwtara_profile_generator"
        data-related="myamyu"
        data-show-count="true">Tweet</a>
      <span id="quwtaraProfileGeneratorTweetArea"></span>
    </div>
    <div class="signature">
      by <a href="https://www.quwtara.space/playground/profile-generator/" target="_blank">Quwtara Profile Generator</a>
    </div>
  </div>
</template>
<style src="./css/profile-generator.css" scoped></style>
<script src="./js/profile-generator.js"></script>
