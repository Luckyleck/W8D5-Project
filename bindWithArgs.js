/*
Function.prototype.myBind = function(context) {

   return () => {return this.call(context)} 
  

}
*/
Function.prototype.myBind = function(arguments) {
    let that = this;
    const boundArgs = Array.from(arguments);
   const context = boundArgs.shift()
//    debugger 
    return function () {return that.apply(context,boundArgs)}


   // return (arg1,arg2,arg3....)
 
 }

 class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  const alex = new Dog("Alex")
  
  boundedSays = markov.says.myBind(pavlov,"bark","alex")
  alexSays = markov.says.myBind(alex)