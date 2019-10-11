<template>
  <div>
    <VmHero></VmHero>
    <VmProductsList></VmProductsList>
  </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';
import VmHero from '@/components/hero/Hero';

export default {
  name: 'index',
  components: {
    VmProductsList,
    VmHero
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      {src: 'https://kit.fontawesome.com/45f615a25c.js'}
      
      ],
    };
  },
};
</script>
