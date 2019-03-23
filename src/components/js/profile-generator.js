export default {
  data() {
    return {
      res: '',
    };
  },
  computed: {
    age1() {
      return this.$store.state.age1;
    },
    wara() {
      return this.$store.state.wara;
    },
    age2() {
      return this.$store.state.age2;
    },
    area() {
      return this.$store.state.area;
    },
    person() {
      return this.$store.state.person;
    },
    star() {
      return this.$store.state.star;
    },
    face() {
      return this.$store.state.face;
    },
    arrow() {
      return this.$store.state.arrow;
    },
    likes() {
      return this.$store.state.likes;
    },
    angry() {
      return this.$store.state.angry;
    },
    hate() {
      return this.$store.state.hate;
    },
    result() {
      return `${this.res}\n`;
    },
  },
  methods: {
    reload() {
      this.$store.commit('reload');
    },
    refreshTweet() {
      const res = document.getElementById('quwtaraProfileGeneratorResult');
      this.res = res ? res.textContent : '？？？？ミスったかも。ごめん。';
      const d = document;
      const buttonTmpl =
        d.getElementsByClassName('twitter-share-button-template')[0];
      const button = buttonTmpl.cloneNode();
      button.classList.add('twitter-share-button');
      const tweetArea = d.getElementById('quwtaraProfileGeneratorTweetArea');
      tweetArea.innerHTML = '';
      tweetArea.appendChild(button);

      const sc = d.createElement('script');
      const hd = d.getElementsByTagName('head')[0];
      sc.src = 'https://platform.twitter.com/widgets.js';
      hd.appendChild(sc);
    },
  },
  mounted() {
    this.refreshTweet();
  },
  updated() {
    this.refreshTweet();
  },
};
