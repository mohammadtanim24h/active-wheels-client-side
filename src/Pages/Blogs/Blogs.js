import React from "react";

const Blogs = () => {
    return (
        <div>
            <h2 className="text-3xl text-center mb-5">Blogs</h2>
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Suscipit, laboriosam odio molestiae dignissimos
                        mollitia, eaque et optio accusantium nam, explicabo
                        ipsum! Animi delectus aspernatur iure dignissimos
                        debitis ut nemo asperiores.
                    </p>
                </div>
                <div className="shadow p-4 rounded-lg">
                    <h3 className="text-2xl text-slate-700 mb-2">
                        Why you do not set the state directly in React.{" "}
                    </h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Suscipit, laboriosam odio molestiae dignissimos
                        mollitia, eaque et optio accusantium nam, explicabo
                        ipsum! Animi delectus aspernatur iure dignissimos
                        debitis ut nemo asperiores.
                    </p>
                </div>
                <div className="shadow p-4 rounded-lg">
                    <h3 className="text-2xl text-slate-700 mb-2">
                        What is a unit test? Why should write unit tests?
                    </h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Suscipit, laboriosam odio molestiae dignissimos
                        mollitia, eaque et optio accusantium nam, explicabo
                        ipsum! Animi delectus aspernatur iure dignissimos
                        debitis ut nemo asperiores.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
