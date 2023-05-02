"use client";
import React from "react";

function Subscribe() {
  return (
    <div className="subscribeContainer">
      <h1>Subscribe</h1>
      <h2 className="subscribeMessage">
        Subscribe to our podcast and get the latest episodes delivered to your
        inbox.
      </h2>
      <div className="subscribeForm">
        <input type="text" placeholder="Your Email Address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default Subscribe;
