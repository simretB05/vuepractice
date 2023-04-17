import Vue from 'vue'


Vue.config.productionTip = false


// attributes and methods that you defined for each element inside the blueprint are the same as you would use for the elements you create using the Vue instance or App component.

// For example, the class and id attributes that you set for the div element with class blog-post and id my-post are the same as you would use for any other div element in Vue. Similarly, the attrs property and its src and alt attributes that you set for the img element are the same as you would use for any other image element in Vue.

// Additionally, the methods you can use with these elements include event listeners like @click, computed properties like :class, and lifecycle hooks like mounted.

let a = new Vue( {
  // The beforeCreate and created hooks are called when the instance is being created. 
  // The beforeMount and mounted hooks are called when the instance is being mounted to the DOM.
  // The beforeUpdate and updated hooks are called when the instance's reactive data changes and it needs to update the DOM.
  // The beforeDestroy and destroyed hooks are called when the instance is being destroyed.
//   beforeUpdate: This method is called when the component is about to be updated, but before the changes are applied to the DOM. It can be used to perform any necessary cleanup or additional actions before the update occurs.

// updated: This method is called after the component has been updated and the changes have been applied to the DOM. It can be used to perform any necessary actions after the update, such as fetching new data from an API or updating other components.

// beforeDestroy: This method is called when the component is about to be destroyed, but before it is removed from the DOM. It can be used to perform any necessary cleanup or additional actions before the component is removed.

// destroyed: This method is called after the component has been destroyed and removed from the DOM. It can be used to perform any necessary actions after the component has been removed, such as cleaning up any event listeners or timers that were set up during the component's lifecycle.

// These lifecycle methods can be useful for performing actions at different points in a component's lifecycle, such as setting up or tearing down data, fetching new data, or manipulating the DOM.






    beforeCreate() {
      console.log('Component not created yet');
    },
    created() {
      console.log('Component created');
    },
    beforeMount() {
      console.log('Component not mounted yet');
    },
    mounted() {
      console.log('Component mounted');
    },
    beforeUpdate() {
      console.log('Component not updated yet');
    },
    updated() {
      console.log('Component updated');
    },
    beforeDestroy() {
      console.log('Component not destroyed yet');
    },
    destroyed() {
      console.log('Component destroyed');
  },
  data() {
    return {
      postBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at orci magna. Sed imperdiet sem vitae augue congue, vel lobortis lorem efficitur. Donec eget fermentum quam.'
    };
  },
 // new Vue( { ... } ) is a constructor function that creates a new instance of the Vue.js framework. When creating a new Vue instance, you pass in an options object that defines the properties and behavior of that instance.
  
//  When you create a virtual DOM with h, Vue uses it as a blueprint for creating the corresponding elements in the real DOM. The virtual DOM is essentially a JavaScript representation of the HTML markup that would be used to create the same structure in the real DOM.
  render( h ){
    return h('div', { class: 'blog-post', id: 'my-post' }, [
      h('h1', { class: 'post-title' }, 'My Blog Post'),
      h('p', { class: 'post-body' }, this.postBody),
      h( 'p', { class: 'post-date' }, 'Published on: April 17, 2023' ),
      h('img', {
        attrs: {
          src: './my-photo.jpg',
          alt: 'My Photo'
        }
      })
    ]);
    
  } 
} )
  
a.$mount( '#app2' )
  // Update the post body after 3 seconds
setTimeout(() => {
  a.postBody += ' I was added to the p tag!';
}, 3000);