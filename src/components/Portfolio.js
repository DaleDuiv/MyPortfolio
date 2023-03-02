import React from "react";
import Project from "./Project";

  const projects = [
    {
      id: 0,
      title: "Pick-A-Meal",
      image: "/img/pick-a-meal.png",
      description: "A one-stop semantic recipe search database for finding all of your favorite recipes",
      repo: "https://github.com/DaleDuiv/PickAMeal",
      live: "https://jeco1988.github.io/Pick-A-Meal/"
    },
    {
      id: 1,
      title: "TechBlog",
      image: "/img/techblogRunthrough.jpg",
      description: "A fullstack Techblog website utilising Handlebars & MySQL",
      repo: "https://github.com/DaleDuiv/techblog",
      live: "https://techblog-daleduiv.herokuapp.com/"
    },
    {
      id: 2,
      title: "Workout-Planner",
      image: "/img/WorkoutTracker.png",
      description: "A fullstack Workout tracker that collects your info and stores it for future use",
      repo: "https://github.com/DaleDuiv/project-2",
      live: "https://ancient-eyrie-19788.herokuapp.com"
    },
    {
      id: 3,
      title: "OpenWeatherAPI",
      image: "/img/OpenWeatherAPI.png",
      description: "A weather dashboard that a user can search a city, retrieve weather and 5day forecase and store city for future ease",
      repo: "https://github.com/DaleDuiv/challenge6",
      live: "https://daleduiv.github.io/challenge6/"
    },
    {
      id: 4,
      title: "TheOpenSource",
      image: "/img/OSScreenshot.jpg",
      description: "Our final REACT project, an Open Source platform",
      repo: "https://github.com/jeco1988/theopensource",
      live: "https://theopensource.herokuapp.com/"
    },
    
  ];

  export default function Portfolio() {
    return (
      <div>
        <p className="content is-medium">Portfolio</p>
        <hr />

        <Project projects={projects}/>
      </div>
    );
  }
