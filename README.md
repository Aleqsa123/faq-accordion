# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users are be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

This is a screenshot of Desktop design: ![](./design/finished%20desktop-design.PNG),
and this is a screenshot of Mobile design: ![](./design/finished%20mobile-design.PNG)

### Links

- Solution URL: [https://github.com/Aleqsa123/faq-accordion]
- Live Site URL: [https://github.com/Aleqsa123/faq-accordion]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library


### What I learned

I learned how to make accordion type frontend app. After creating feature, the challenge was styling them. I used module.css for styling. I learned how to display hidden answers smoothly with webkit keyframes.


This is code I love in the project:

```css
@-webkit-keyframes fadeIn {
  from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeIn {
  from { opacity: 0; }
    to { opacity: 1; }
}

.show {
  text-align: left;
  display: block;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 3s;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  color: hsla(240, 6%, 50%, 1);
  margin-bottom: 20px;
}
```


### Continued development

I haven't used Next.js and Styled Components in this project, so it's time to use them in my next apps.


## Author

- Github - [Aleqsa123](https://github.com/Aleqsa123)
- Linkedin - [Aleksi Merebashvili](https://www.linkedin.com/in/aleksi-merebashvili-36627426/)
- Facebook - [Aleksi Merebashvili](https://www.facebook.com/aleksi.merebashvili)
- Frontendmentor - [Aleqsa123] (https://www.frontendmentor.io/profile/Aleqsa123)
