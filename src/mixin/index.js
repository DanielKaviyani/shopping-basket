const Mixin = {
  created() {
    this.$store.dispatch("product/get_products");
  },
  methods: {
    make_limit(title) {
      return `${title.slice(0, 12)}...`;
    }
  }
};

export default Mixin;
