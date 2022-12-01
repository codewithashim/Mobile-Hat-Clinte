import React from "react";
import ReactStateImage from "../../Assects/blogs/react_state.png";
import Prototype from "../../Assects/blogs/HowPrototype.jpeg";
import UnitTest from "../../Assects/blogs/blogs3.png";
import ReactVsVue from "../../Assects/blogs/react.jpeg";

const Blogs = () => {
  return (
    <section className="p-6">
      <div>
        <h1 className="font-bold text-2xl text-center">Recent Blogs</h1>
        <div className="divider"></div>
      </div>
      <div className="blog_items">
        <div className="blog_item_1">
          <div className="card card-compact bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src={ReactStateImage}
                alt="React State Manegment"
                style={{
                  width: "50%",
                  height: "50%",
                }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                What are the different ways to manage a state in a React
                application?
              </h2>
              <p>
                In this article, we will discuss the different ways to manage a
                state in a React application. The state is a data that can
                change over time. It is a data that a component holds and can be
                changed by the component itself or by an external source. The
                state is a part of the component and is private to the
                component. It is not accessible to any other component. The
                state is managed within the component. The state is used to hold
                a
              </p>
            </div>
          </div>
        </div>
        <div className="blog_item_2">
          <div className="card card-compact bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src={Prototype}
                alt="React State Manegment"
                style={{
                  width: "50%",
                  height: "50%",
                }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                How does prototypical inheritance work?
              </h2>
              <p>
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object
              </p>
            </div>
          </div>
        </div>
        <div className="blog_item_3">
          <div className="card card-compact bg-base-100 shadow-xl m-4">
            <figure>
              <img
                src={UnitTest}
                alt="React State Manegment"
                style={{
                  width: "50%",
                  height: "50%",
                }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                What is a unit test? Why should we write unit tests?
              </h2>
              <p>
                Unit testing is a type of software testing where individual
                units / components of a software are tested. The purpose is to
                validate that each unit of the software performs as expected. A
                unit is the smallest testable part of any software. It usually
                has one or a few inputs and usually a single output. It is a
                level of software testing where individual units / components of
                a software are tested. The purpose is to validate that each unit
                of the software performs as expected. A unit is the smallest
                testable part of any software. It usually has one or a few
                inputs and usually a single output. It is a level of software
                testing where individual units / components of a software are
                tested. The purpose is to validate that each unit of the
                software performs as expected. A unit is the smallest testable
                part of any software. It usually has one or a few inputs and
                usually a single output.
              </p>
            </div>
          </div>
        </div>
        <div className="blog_item_4">
          <figure className="flex justify-center items-center">
            <img
              src={ReactVsVue}
              alt="React State Manegment"
              style={{
                width: "50%",
                height: "50%",
              }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">React vs. Angular vs. Vue?</h2>

            <p>
              <strong>Angular</strong>
              <br />
              In Angular, components are referred to as directives. Directives
              are just markers on DOM elements, which Angular can track and
              attach specific behavior too. Therefore, Angular separates the UI
              part of components as attributes of HTML tags, and their behaviors
              in the form of JavaScript code. This is what sets it apart when
              looking at Angular vs React.
            </p>

            <p>
              <strong>React</strong> <br />
              React, interestingly, combines the UI and behavior of components.
              For instance, here is the code to create a hello world component
              in React. In React, the same part of the code is responsible for
              creating a UI element and dictating its behavior.
            </p>

            <p>
              <strong>Vue</strong> <br />
              When looking into Vue vs React, in Vue, UI and behavior are also a
              part of components, which makes things more intuitive. Also, Vue
              is highly customizable, which allows you to combine the UI and
              behavior of components from within a script. Further, you can also
              use pre-processors in Vue rather than CSS, which is a great
              functionality. Vue is great when it comes to integration with
              other libraries, like Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
