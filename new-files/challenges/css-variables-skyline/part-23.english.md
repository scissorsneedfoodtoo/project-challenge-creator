---
id: 5d821a354b47a40bde81cd56
title: Part 23
challengeType: 0
---

## Description
<section id='description'>
Placeholder Description
</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: test-text
    testString: assert(code.match());

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    <style>
      * {
        border: 1px solid black;
        box-sizing: border-box;
      }

      body {
        height: 100vh;
        margin: 0;
        overflow: hidden;
      }

      .background-buildings {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-evenly;
      }

      .bb1 {
        width: 10%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        --building-color1: #aa80ff;
        --building-color2: #66cc99;
      }

      .bb1a {
        width: 70%;
        height: 10%;
        background-color: var(--building-color1);
      }
  
      .bb1b {
        width: 80%;
        height: 10%;
        background-color: var(--building-color1);
      }
  
      .bb1c {
        width: 90%;
        height: 10%;
        background-color: var(--building-color1);
      }

      .bb1d {
        width: 100%;
        height: 70%;
        background-color: var(--building-color1);
      }

      .bb2 {
        width: 10%;
        height: 50%;
        background-color: var(--building-color2);
      }

      .bb3 {
        width: 10%;
        height: 55%;
      }

      .bb4 {
        width: 11%;
        height: 58%;
      }
    </style>
  </head>

  <body>
    <div class="background-buildings">
      <div></div>
      <div></div>
      <div class="bb1">
        <div class="bb1a"></div>
        <div class="bb1b"></div>
        <div class="bb1c"></div>
        <div class="bb1d"></div>
      </div>
      <div class="bb2"></div>
      <div class="bb3"></div>
      <div></div>
      <div class="bb4"></div>
      <div></div>
      <div></div>
    </div>
  </body>
</html>

<!--
  Hmm, I'm not sure why that didn't work. You can add a fallback value to a variable by putting it as the second value of where you use the variable like this: `var(--variable-name, fallback-value)`. The property will use the fallback value when there's a problem with the variable. Add a fallback value of `green` to the `background-color` of `bb1`.
-->
```

</div>
</section>


## Solution
<section id='solution'>

```js
```

</section>