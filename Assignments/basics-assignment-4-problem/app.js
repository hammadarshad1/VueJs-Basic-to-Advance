var app = new Vue({
  el: "#assignment",
  data: {
    input: "",
    paragraphHide: false,
    color: "",
  },
  computed: {
      enteredClass(){
          if (this.input === 'user1'){
              return "user1"
          }
          else if(this.input === 'user2'){
              return "user2"
          }
      },
      toggleButton() {
          if (this.paragraphHide == false){
              return "visible"
          }
          else{
              return "hidden"
          }
      },
      changeColor(){
          return {backgroundColor: this.color}
      }
  },
  methods: {
    toggle() {
      this.paragraphHide = !this.paragraphHide;
    },
  },
});
