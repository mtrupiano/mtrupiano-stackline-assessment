This is my submission for Stackline's front end assessment. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). While this assessment was a bit of a challenge in a couple ways I still had a great time working on it! Thank you for your consideration.

Admittedly I spent about 5 hours working on this. I definitely had to spend a good amount of time:

 - refreshing my knowledge of Redux (it's been about a year since I've used it)
 - learning how to work with MUI's Data-Grid and LineChart components

## Approach
In order to facilitate an easy build/deployment process I decided to build this project with NextJS with plans to deploy it with Vercel. It's a framework that I'm comfortable with and I didn't want to spend too much time on set up. Similarly I chose to work with Material UI as a UI library again because it is something I'm familiar with. 

The two main things I had to consider when tackling this problem were:

- How to stub the API request, and
- How best to implement Redux with NextJS with SSR

Again to keep things simple, I chose to use NextJS's [API route functionality](https://nextjs.org/docs/pages/building-your-application/routing/api-routes). The route simply imports the JSON file on the server and returns it when the API route is called from the front end. Apologies if this is not the intended or most desirable pattern for stubbing an API call here.

Using Redux with NextJS seems to nullify one of NextJS's core principles of prioritizing server-side rendering. In order to implement Redux in this case, I essentially had to turn the entire page into a client-rendered component. I did this mostly by following [this setup guide](https://redux.js.org/usage/nextjs) for Redux Toolkit on NextJS.

## Challenges
### When to load the data into the store
I admittedly am not entirely familiar with the best practices for loading data from an API call into a redux store. In my implementation, the simplest method I saw was to put the API call in a useEffect so the API call was made once on page load, and then just load the response data into the store all at once. Relying on useEffect here with an empty dependency array seems a bit awkward but I couldn't quite think of another solution. 

### Material UI's Line Chart component
As you can see from the deployed application, the line chart is not the most aesthetically appealing data display. This is my first time working with this specific MUI component and there is some functionality that was a bit unintuive for me. Namely there is no way to fully customize the axis interval ticks and labels. These ticks are generated almost entirely based on the data provided to the axis property. I spent probably about 2 hours trying to fennagle a work-around to get the x-axis to look like the mock up (i.e. specifically only show the 3-letter month names). [As you can see in the docs](https://mui.com/x/api/charts/axis-config/), there is no way to fully customize the number of ticks (the 'tickNumber' property straight up says it might be ignored). 
