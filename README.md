# Study
## Raw Fact 
1. Yield Raw Promise=>it will chain
2. Yield Put(action)=>it will dispatch action
3. Yield call(another generator)=>it will chain generators
4. Fetch remote data example
5. Fetch remote data example in a debounce way

## Models 
For 1-3, They are all **effects** they are
1. plain javascript objects(A common abstraction)
2. our saga will interrupt them as an command object(that's why all yield functions with different generator executor have different behaviour in entire js world), and yes, put&call are just the constructor to create those object.

P.S     
Study saga is just study the **effect object and how saga interrupt them**

Note:       
Yield promise is possible but just harder to test

# Improvement
Redux Development Tool Enabled

# redux-saga-beginner-tutorial
Companion Repo for [Redux/Redux-saga beginner tutorial](https://github.com/redux-saga/redux-saga/blob/master/docs/introduction/BeginnerTutorial.md)

# Instructions

Setup

```
// clone the repo
git clone https://github.com/yelouafi/redux-saga-beginner-tutorial.git

cd redux-saga-beginner-tutorial

npm install
```

Run the demo

```
npm start
```

Run tests

```
npm test
```
