1. What problem does the context API help solve?

    The context API allows you to bring state directly to any component under the provider which solves the issue of prop drilling in normal react.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions send payload data and a type property to the Reducers, which are functions that use the Actions to determine changes to an application's state. The Store is a file which contains all of the data from the Actions for a redux application and all modifications of that data is made in the store. All data is passed from the Store to the rest of the application making it the "single source of truth".

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global meaning that any component anywhere within the app can access it so long as they hook into it whereas Component state is works with a specific component and can only be updated within the component and its children through props. Application state should be the standard for controlling state in your application however, Component state works better in general areas where the place of state does not interract with the rest of the app.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-thunk allows for the passage of funcionts into actions creators instead of an object. This allows us to dispatch synchronous actions after an asynchronous function occures.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I prefer context api for the simplicity and ease it offers with its setup and setting up state. Since redux takes a lot of code to complete the same tasks, context api takes out a lot of the hassle of said code.
