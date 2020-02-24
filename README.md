## ROOT 

![Kegel](https://media.giphy.com/media/3ohhwHkDJfIO8tlgS4/giphy.gif)


### Project description 

![SplashPage](public/splash-page.gif)

ROOT is a pelvic floor exercise app for people with vaginas. Tired of women's health apps that define pelvic floor health in terms of a woman using her body in service of others - heterosexual sex or childbirth -  I created ROOT to center the importance of a strong pelvic floor in terms of a woman's mental and physical health and quality of life. 

The name ROOT is a reference to the the root chakra. (In eastern traditions, the pelvic floor is known as the root chakra.)

This first iteration of ROOT is a simple kegel exercise. It is essentially a counter app built in React. There are two types of exercises - slow and fast. The slow exercise is 10 reps of 'squeeze' and 'rest', 5 seconds each. The fast exercise is 5 reps of 'squeeze' and 'rest', 1 second each. 

When the user finishes both the fast and slow exercise, they are redirected to the home page which has a bar chart that keeps track of their progress in minutes. 


### Libraries used:

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

I used React Hooks for this project which turned out to make everything a lot easier. Hooks provide functional components things like state and lifecycle methods without using a class component. 

The biggest challenge was creating the countdown timer for the slow exercise. The user does one rep of squeeze and one rep of rest, but my countdown timer wanted to countdown from 1 to 0. This made the exercise a 2 second rep instead of a 1. 


I used the ```useEffect()``` hook to determine when isActive is true to start the timer inside the function. I ended up building out ```useEffect()``` quite a bit and was able to add only 4 lines of code to solve the challenge of the 2nd interval (littleTimer)

```javascript
 useEffect(() => {
        let interval = null;
        let littleTimer = null;

        let countDown = () => {
                if (seconds ==1){
                if (reps ==0) {
                // to get day of week 
                var d = new Date();
                var n = d.getDay();
                  let tempValue = [...value];
                  let currentDay = tempValue[n];
                  currentDay.minutes += 50/60
                    // send to slow timer when done with reps                    
                history.push("/slowtimer");
                  setValue(
                      //add rep time for the current day
                      value = tempValue
                  )
              } else {
                  // reset seconds to a different value
                  setSeconds(MAXSECONDS);
                  // resets the number of reps
                  setNumberReps(reps => reps - 1);
                  // reset activity
                  if (activity == 'rest') {
                      setActivity('squeeze');
                    } else {
                        setActivity('rest');
                  }
              }
          } else {
            setSeconds(seconds => seconds - 1);
          }
      }
      if (isActive) {
          
        interval = setInterval(countDown, 1000);

        // 2nd set interval
          if (seconds == 0) {
            setSeconds(MAXSECONDS);
            countDown();
          }
      }
      return () => {
          clearInterval(interval); 
          clearInterval(littleTimer);
      }
    }, [isActive, seconds, reps, activity]);

```

![Timer](public/timer.gif)

I initialized ```interval``` and ```littleTimer``` as new variable intervals to null. If ```isActive``` is detected as true, then ```interval``` is assigned to a new interval and ```countDown``` run. 

To skip past the number 0, I added these three lines: 

```javascript
  if (seconds == 0) {
            setSeconds(MAXSECONDS);
            countDown();
          }
```

If the timer hits zero, ```setSeconds``` is called with 1 as an argument and ```countDown``` is called, starting the timer over. 


 
![BlackLadySketchShow](https://media.giphy.com/media/XcLx833bdmXhYNGJ1B/giphy.gif)

### What's next

- React native 
- React Router Page Transitions
- Vibrations that correspond with reps 
- Exercise Plan - user can customize amount of rep and length of time  
- More exercises - Deep Squats with heel support, fascia ball, breathe using pc muscles 
- Calm notifications (https://calmtech.com/)

### Author 

[Aylor Brown](https://www.aylorbrown.com)
