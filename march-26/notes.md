# Day 16

Let's think about two types of abstractions: one from "functional programming", and another from "theoretical computer science" (regex).

```javascript
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

## How might we normally add1 to everything in the list?

```javascript
const nums = [1, 2, 3, 4, 5, 6];

for (let i = 0; i<nums.length; i++) {
    nums[i] = nums[i] + 1
}

// [2, 3, 4, 5, 6, 7]
```

What if you think about this operation as you have something you want to do to every element of the list?

Can you express the "operation" as a function?

```javascript
function add1(x) {
    return x + 1;
}

const nums = [1, 2, 3, 4, 5, 6];

// what function do you want to run on every element of this list?

for (let i = 0; i<nums.length; i++) {
    nums[i] = add1(nums[i]);
}
```

Generalizing into the "map":

```javascript
function add1(x) {
    return x + 1;
}

const nums = [1, 2, 3, 4, 5, 6];

// what function do you want to run on every element of this list?

function myMap(callable, arr) {
    for (let i = 0; i<arr.length; i++) {
        arr[i] = callable(arr[i]);
    }
}

myMap(add1, nums)
```

We aren't going to actually implement this from scratch, the actual version of this "map" function is built into all kinds of modern programming languages.

Here's an example of the add1 but directly built-in to JS with an arrow function in this case:

```javascript
// let nums = [3, 4, 5, 6, 7, 8];

nums.map((x) => x + 1);
// [4, 5, 6, 7, 8, 9]
```

### A couple quick notes on how does this work?

Calling a function directly:

```javascript
function add1(x) {
    return x + 1;
}

nums.map((x) => add1(x));
```

Having more complexity inside your arrow function:

```javascript
nums.map((x) => {
    console.log(x);
    return x + 1;
});
```

### Example: What is the length of all strings?


```javascript
const words = ['the', 'quick', 'brown', 'fox'];

// we want an array containing the length of each of these words

words.map((word) => word.length);
```

## Filter

Takes a predicate (a function which returns true/false) and "filters out" everything that returns true.

Fun side note: The "Left Pad Incident of 2016": [https://en.wikipedia.org/wiki/Npm_left-pad_incident](https://en.wikipedia.org/wiki/Npm_left-pad_incident)

Given:

```javascript
let nums = [3, 4, 5, 6, 7, 8];

function isEven(x) {
    return x % 2 === 0;
}


nums.filter((x) => isEven(x));
```

Equivalently with an arrow function:

```javascript
nums.filter((x) => x % 2 === 0);
```

## Reduce