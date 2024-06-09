new Vue({
  el: '#app',
  data: {
    name: '',
    upperName: '',
  },
  // 遅延処理用のメソッド
  created: function () {
    this.delayFunc = _.debounce(this.getUpper, 1000);
  },
  watch: {
    name: function (newValue, oldValue) {
      this.delayFunc();
    },
  },

  // 大文字に変換したものをupperNameにプロパティに設定

  methods: {
    getUpper: function () {
      this.upperName = this.name.toUpperCase();
    },
  },
});
