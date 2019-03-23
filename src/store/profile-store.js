import Vuex from 'vuex';
import words from './words.json';

const randomChoice = (list, count = 1) => list
    .map((e) => ({item: e, order: Math.random()}))
    .sort((a, b) => b.order - a.order)
    .slice(0, count)
    .map((e) => e.item);

export default () => new Vuex.Store({
  state: {
    age1: words.age1[0],
    wara: words.wara[0],
    age2: words.age2[0],
    area: words.area[0],
    person: words.person[0],
    star: words.star[0],
    face: words.face[0],
    arrow: words.arrow[0],
    likes: words.like.slice(0, 3).join('/'),
    angry: words.angry[0],
    hate: words.hate[0],
  },
  mutations: {
    reload(state) {
      state.age1 = randomChoice(words.age1)[0],
      state.wara = randomChoice(words.wara)[0],
      state.age2 = randomChoice(words.age2)[0],
      state.area = randomChoice(words.area)[0],
      state.person = randomChoice(words.person)[0],
      state.star = randomChoice(words.star)[0],
      state.face = randomChoice(words.face)[0],
      state.arrow = randomChoice(words.arrow)[0],
      state.likes = randomChoice(words.like, 3).join('/'),
      state.angry = randomChoice(words.angry)[0],
      state.hate = randomChoice(words.hate)[0];
    },
  },
});
