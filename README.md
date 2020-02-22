## ROOT 

![Kegel](https://media.giphy.com/media/3ohhwHkDJfIO8tlgS4/giphy.gif)

### Project description 
ROOT is a pelvic floor exercise app for people with vaginas. Tired of women's health app -- in terms of a woman body in service of others - heterosexual sex and childbirth - I created ROOT to center the importance of a strong pelvic floor in terms of a woman's mental and physical health and quality of life. 

The first iteration of ROOT is a simple kegel exercise. It is essentially a counter app built in React. 

The name ROOT comes from the root chakra. 


### Libraries used:

React Router 

Victory (https://github.com/FormidableLabs/victory)
```javascript 
npm install victory
```

Styled Components (https://github.com/styled-components/styled-components)
```javascript
npm install --save styled-components
```

React Spring (https://github.com/react-spring/react-spring)
```javascript
npm install react-spring
```

### APIs used 

<Switch>
<Link>
<BrowserRouter>
<Route>



![DestroyComputer](https://media.giphy.com/media/WjhqatKJh5Kgw/giphy.gif)
### Challenges 

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
- More exercises - Deep Squats with heel support, fascia ball
- Calm notifications (https://calmtech.com/)

### Author 
Aylor Brown 

