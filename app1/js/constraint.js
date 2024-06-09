let app = new Vue({
  el: '#app',
  data: {
    author: {
      name: '河野',
      // company: ''
    },
  },
  created: function () {
    let that = this;
    this.timer = setTimeout(function () {
      // that.author.name = 'Y.KONO';
      // that.author.company = 'プロジェクト';
      // プロパティの追加↓
      Vue.set(that.author, 'company', '株式会社ABC');
      // app.$set(that.author, 'company', 'プロジェクト');
    }, 2000);
  },
  beforeDestroy: function () {
    clearInterval(this.timer);
  },
});
