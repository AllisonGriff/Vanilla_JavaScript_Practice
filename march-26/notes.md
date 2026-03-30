<!-- what do you thinkk of when you think of a fast programming language?
 i think of c++ and rust, but there are many other fast programming languages out there. AI ANSWERS
 what makes a programming language fast? is it the way it compiles code, the way it manages memory, or something else?
 there are many factors that can contribute to a programming language being fast. Some of these factors include:
 - The way the language compiles code: Some languages, like C++ and Rust, compile code to machine code, which can be faster than interpreted languages like Python or JavaScript.
 - Memory management: Some languages, like C++ and Rust, give developers more control over memory management, which can lead to faster performance. In contrast, languages like Python and JavaScript use garbage collection, which can introduce overhead.
 - Optimization: Some languages have built-in optimizations that can improve performance. For example, C++ has features like inline functions and template metaprogramming that can help optimize code.
 - Concurrency: Some languages have better support for concurrent programming, which can improve performance in certain scenarios. For example, Go has built-in support for goroutines, which can make it easier to write concurrent code.
 Ultimately, the speed of a programming language depends on many factors, including the specific use case and how well the code is written
 what is an abstraction?
 it is a way to simplify code to make it easier to understand and use. 
 it is a way to hide complexity and provide a simpler interface for users
 what is a zero cost abstraction?
 it is an abstraction that does not introduce any overhead or performance penalty.
 it is an abstraction that is optimized away by the compiler, so it does not affect the performance of the code.
/ Zero-cost abstraction: a wrapper class
 class Temperature {
 private:
     float celsius;
 public:
     Temperature(float c) : celsius(c) {}  
     float getCelsius() const { return celsius; }
     float getFahrenheit() const { return celsius * 9/5 + 32; }
 }
 Usage
 Temperature temp(25);
loat f = temp.getFahrenheit();

 object oriented programming vs functional programming  -->


```
const nums = [1, 2, 3, 4, 5, 6];
const words = ['the', 'quick', 'brown', 'fox'];
const colors = [
  {
    campus: "IU",
    name: "crimson",
    hexCode: "#990000"
  },
  {
    campus: "IU",
    name: "cream",
    hexCode: "#EDEBEB"
  },
  {
    campus: "Purdue",
    name: "black",
    hexCode: "#000000"
  },
  {
    campus: "Purdue",
    name: "campus gold",
    hexCode: "#C28E0E"
  }
];
```

**how might we add 1 to everything in this list**

```javascript
const nums= []
```