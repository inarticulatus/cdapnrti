<template>
<div>
  <p style="font-size:25px; margin:50px; padding-bottom: 10px;">Our Popular Products</p><br>
  <div class="columns is-centered is-multiline">
    <div style="padding-top:15px;" class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" style="min-width: 23vw;" v-for="product in products" :key="product.id">
      <VmProducts :product="product"></VmProducts>
    </div>
    <div class="section" v-if="products.length === 0">
      <p>{{ noProductLabel }}</p>
    </div>
    </div>
  </div>
</div>

</template>

<script>
import VmProducts from '../Products';
import { getByTitle } from '@/assets/filters';

export default {
  name: 'productsList',
  
  components: { VmProducts },
  
  data () {
    return {
      id: '',
      noProductLabel: 'No product found',
      productsFiltered: []
    };
  },

  computed: {
    products () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.state.products;
      }
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.state.products,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }

};
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>
