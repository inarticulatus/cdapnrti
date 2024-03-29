export const state = () => ({
  products: [
    
    {
       id: 2,
       title: 'Chocolate Milk - 250 mL',
       description: 'High Quality Milk for on the go. Loaded with rich nutrients, all natural.',
       price: 35,
       ratings: 5,
       reviews: 10,
       isAddedToCart: false,
       isAddedBtn: false,
       isFavourite: false,
       quantity: 1,
       picURL: "https://res.cloudinary.com/inarticulatus/image/upload/v1570611046/choco_milk.jpg"
     },
    {
      id: 3,
      title: 'Cheese - 100gm',
      description: 'Smoky cheese. Tastes best with Pizza and Sandwich. ',
      price: 110,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      picURL: "https://res.cloudinary.com/inarticulatus/image/upload/v1570611046/cheese_tpnb0k.jpg"

    },
    {
      id: 4,
      title: 'Frozen Peas - 500gm Pack',
      description: 'Ready to use frozen peas, that have been carefuly processed to lock in the freshness.',
      price: 50,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      picURL: "https://res.cloudinary.com/inarticulatus/image/upload/w_200/v1570611046/frozen_peas.jpg"
    },
    {
      id: 5,
      title: 'Strawberry Yoghurt - 100 mL',
      description: 'Yoghurt has never tasted better.',
      price: 35,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      picURL: "https://res.cloudinary.com/inarticulatus/image/upload/w_300/v1570820437/strawberry_yoghurt.jpg"
    },
  
//      {
//      id: 2,
//        title: 'Product 2',
//        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//        price: 35,
//        ratings: 5,
//        reviews: 10,
//        isAddedToCart: false,
//        isAddedBtn: false,
//        isFavourite: false,
//        quantity: 1
//      },
//     {
//        id: 3,
//        title: 'Product 3',
//        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//        price: 110,
//        ratings: 2,
//        reviews: 3,
//        isAddedToCart: false,
    //   isAddedBtn: false,
    //   isFavourite: false,
    //   quantity: 1
    // },
    // {
    //   id: 4,
    //   title: 'Product 4',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   price: 50,
    //   ratings: 1,
    //   reviews: 0,
    //   isAddedToCart: false,
    //   isAddedBtn: false,
    //   isFavourite: false,
    //   quantity: 1
    // },
    // {
    //   id: 5,
    //   title: 'Product 5',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   price: 35,
    //   ratings: 4,
    //   reviews: 2,
    //   isAddedToCart: false,
    //   isAddedBtn: false,
    //   isFavourite: false,
    //   quantity: 1
    // },
    // {
    //   id: 6,
    //   title: 'Product 6',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   price: 110,
    //   ratings: 5,
    //   reviews: 1,
    //   isAddedToCart: false,
    //   isAddedBtn: false,
    //   isFavourite: false,
    //   quantity: 1
    // },
    // {
    //   id: 7,
    //   title: 'Product 7',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   price: 50,
    //   ratings: 5,
    //   reviews: 7,
    //   isAddedToCart: false,
    //   isAddedBtn: false,
    //   isFavourite: false,
    //   quantity: 1
    // },
    // {
    //   id: 8,
    //   title: 'Product 8',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   price: 35,
    //   ratings: 3,
    //   reviews: 0,
    //   isAddedToCart: false,
    //   isAddedBtn: false,
    //   isFavourite: false,
    //   quantity: 1
    // },
    // {
    //   id: 9,
    //   title: 'Product 9',
    //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    //   price: 110,
    //   ratings: 4,
    //   reviews: 2,
    //   isAddedToCart: false,
    //   isAddedBtn: false,
    //   isFavourite: false,
    //   quantity: 1
    // }
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: '',
    productTitleSearched: ''
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  // SET_USER(state, authUser) {
  //   state.authUser = authUser
  // },
  setProducts(state, list) {
    state.products = list;
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    // const res = await this.$axios.get("/api/current_user")
    // commit("SET_USER", res.data)
      let files = await require.context('../assets/products/', false, /\.json$/)
      let products = files.keys().map(key => { 
        let rest = files(key);
        rest.slug= key.slice(2,-5);
        return rest;
      });
      await commit('setProducts', products);
    },
    

  // async logout({ commit }) {
  //   const { data } = await this.$axios.get("/api/logout")
  //   if (data.ok) commit("SET_USER", null)
  // },

  // async handleToken({ commit }, token) {
  //   const res = await this.$axios.post("/api/stripe", token)
  //   commit("SET_USER", res.data)
  // }
}

// export const mutations = {
//   setProducts(state, list) {
//     state.products = list;
//   },
// };

// export const actions = () => {
//   async nuxtServerInit({ commit }) {
//     let files = await require.context('./assets/products/', false, /\.json$/)
//     let products = files.keys().map(key => { 
//       let rest = files(key);
//       rest.slug= key.slice(2,-5);
//       return rest;
//     });
//     await commit('setProducts', products);
//   },
// };
