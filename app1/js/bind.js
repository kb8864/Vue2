let app = new Vue({
  el: '#app',
  data: {
    url: 'https://v2.vuejs.org/v2/guide/installation#Direct-lt-script-gt-Include',
    flag: false,
  },
});

new Vue({
  el: '#app2',
  data: {
    email: 'ABCDEFG@example.com',
  },
  // 演算した結果を取得する算出プロパティ
  computed: {
    localEmail: function () {
      return this.email.split('@')[0].toLowerCase();
    },
  },
});
