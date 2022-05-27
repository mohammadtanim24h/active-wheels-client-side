import React from "react";

const Blogs = () => {
    return (
        <div className="my-5">
            <h2 className="text-3xl text-center mb-5 text-slate-700">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="shadow p-4 rounded-lg">
                    <h3 className="text-2xl text-slate-700 mb-2">
                        How can I improve the performance of a React
                        Application?
                    </h3>
                    <p>
                        I can use the Profiler of React DevTools which gives
                        information about when a component is rendering, why it
                        is rendering, and how long it takes for the component to
                        render. From there I can find out what's slowing down
                        the app and what I can do to fix it. Additionally, I can
                        keep the component state local when I can to avoid any
                        unnecessary re-renders. I can use Memoization to cache
                        the component result which saves re-renders. Also, I can
                        use lazy loading to load images when they appear on the
                        viewport. Using the aforementioned steps, I can improve
                        the performance of a react app.
                    </p>
                </div>
                <div className="shadow p-4 rounded-lg">
                    <h3 className="text-2xl text-slate-700 mb-2">
                        What are the different ways to manage a state in a React
                        application?
                    </h3>
                    <p>
                        We can manage states in React Application in various
                        ways. Redux is a popular solution that provides a
                        central store that holds all states of our application.
                        Each component can access the stored state without
                        sending it from one component to another. It makes state
                        management much easier. Additionally, we can use Redux
                        actions and reducers to manage the state. We can also
                        use React hooks to manage our application state.
                        useReducer hook is a pure function with no side effects.
                        It uses the same concept of reducers in redux.
                    </p>
                </div>
                <div className="shadow p-4 rounded-lg">
                    <h3 className="text-2xl text-slate-700 mb-2">
                        How does prototypical inheritance work?
                    </h3>
                    <p>
                        The Prototypal Inheritance is a feature in javascript
                        used to add methods and properties in objects. It is a
                        method by which an object can inherit the properties and
                        methods of another object. Prototypal inheritance uses
                        the concept of prototype chaining. In this chain, every
                        object created contains prototype which points either to
                        another object or null. The prototypical chain concept
                        is used when searching our code. When we need to find a
                        property in an object, it is first searched in the
                        object, and if it is not found, it is then searched on
                        that object's prototype, and so on. It keeps going on
                        until the property is found or null is reached. The
                        prototypal inheritance includes not only prototypes
                        inheriting from other prototypes but also objects
                        inheriting from prototypes.
                    </p>
                </div>
                <div className="shadow p-4 rounded-lg">
                    <h3 className="text-2xl text-slate-700 mb-2">
                        Why you do not set the state directly in React?
                    </h3>
                    <p>
                        We do not set the state directly in React to keep the
                        state immutable. In a React application, when a state
                        changes a lot of things happen in the background. If we
                        mutate the state directly, it pollutes the previous
                        state with our mutation. And thus, the comparison
                        between the two states is affected. It also disrupts
                        React's lifecycle methods. Mutating states can lead to
                        bugs and abnormal behavior of a component. That's why we
                        should always keep the state mutable and never set the
                        state directly.
                    </p>
                </div>
                <div className="shadow p-4 rounded-lg">
                    <h3 className="text-2xl text-slate-700 mb-2">
                        What is a unit test? Why should write unit tests?
                    </h3>
                    <p>
                        A unit test is a way of testing a unit. It can be a line
                        of code, a method, or a class. In a unit test, the unit
                        we test is isolated and tested to see if it is working
                        as it should. Because of its being isolated, we know
                        when something is not right or is not working properly.
                        We should write unit tests to thoroughly test our app.
                        If we release an app without proper testing, we will
                        have to keep fixing issues again and again. Unit test
                        also simplifies the debugging process and makes
                        development easier.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
