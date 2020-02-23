## ROOT 

![Kegel](https://media.giphy.com/media/3ohhwHkDJfIO8tlgS4/giphy.gif)


### Project description 

![SplashPage](public/splash-page.gif)

ROOT is a pelvic floor exercise app for people with vaginas. Tired of women's health apps that define kegels in terms of a woman using her body in service of others - heterosexual sex or childbirth -  I created ROOT to center the importance of a strong pelvic floor in terms of a woman's mental and physical health and quality of life. 

The first iteration of ROOT is a simple kegel exercise. It is essentially a counter app built in React. There are two types - slow and fast. The slow exercise is 10 reps of squeeze and rest exerices, 5 seconds each.

When the user finishes both the fast and slow exercise, they are redirected to the home page which has a bar chart that keeps track of their progress. 

The name ROOT is reference to the the root chakra. 

Women are 75% more likely to use digital health tools than men


### Libraries used:

React Router 

[Victory](https://github.com/FormidableLabs/victory)
```javascript 
npm install victory
```

[Styled Components](https://github.com/styled-components/styled-components)
```javascript
npm install --save styled-components
```

[React Spring](https://github.com/react-spring/react-spring)
```javascript
npm install react-spring
```


![TraceyEllisRoss](https://media.giphy.com/media/BdVcN2CztJ4L6/giphy.gif)

### Challenges 

![Timer](public/timer.gif)

I used React Hooks for this project which turned out to make everything a lot easier. Hooks lets you use state and other React features with writing a class. 

The biggest challenge was creating the countdown timer for the slow exercise. The user does one rep of squeeze and one rep of rest, but my countdown timer wanted to countdown from 1 to 0. This made the exercise a 2 second rep instead of a 1. Because I used ```useEffect()``` the solution actually turned out to be easier than I first anticipated. 


```javascript
 useEffect(() => {
        let interval = null;
        let littleTimer = null;

        let countDown = () => {
```

![BlackLadySketchShow](https://media.giphy.com/media/XcLx833bdmXhYNGJ1B/giphy.gif)

### What's next

- React native 
- React Router Page Transitions
- Smooth Timer Animations 
- Vibrations that correspond with reps 
- Exercise Plan - user can customize amount of rep and length of time  
- More exercises - Deep Squats with heel support, fascia ball, breathe using pc muscles 
- Calm notifications (https://calmtech.com/)

### Author 

[Aylor Brown](https://www.aylorbrown.com)
