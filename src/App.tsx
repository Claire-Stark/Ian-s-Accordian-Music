// src/App.tsx
import React from "react";
import "./App.css";
import VideoList from "./components/VideoList";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Ian's Accordian Music Archive</h1>
      <p>Here you will find the latest uploads that he has made.</p>
      <VideoList />
      <h2>About Ian</h2>
      <p>
        I am resident of Auckland NZ. I have been playing the Accordion since
        the age of 14 and was taught by a professional Accordionist Trevor
        Taylor (see his album Interfusion on YouTube) back in the 70's and 80's.
        After a 30 year hiatus I started playing again in 2013 using the Roland
        FR8 V Accordion. My channel is all about focusing of the diversity and
        beautiful sound of the Accordion e.g. folk, continental, Irish Scottish
        etc. On my videos you will not see much of me ( I'm not photogenic) but
        I like to put slides and video clips to accompany the music and
        hopefully take you to places and bring back old memories and hopefully
        even inspire people to learn the Accordion. If you like the sounds I'm
        playing they are made by Richard Noel (visit his channel
        www.noelaccordion.com) .
      </p>
    </div>
  );
}

export default App;
