import React, { Component } from 'react';
import '../css/about.css';

class About extends Component {
    render() {
        return (
            <div className="about-wrapper wrapper">
                <div className="section">
                    <h1>WHO</h1>
                    <p>My name is <span className="em">Nicholas Morris</span>, and I am a student from Northern Virginia Community College. I also happen to be a <span className="em">web developer and designer</span>, so when I heard that I would have to make a webpage for my ENG 254 class, I was probably happier than most. Aside from doing what I love and being able to create a nice looking website, I also get to talk about a wonderful book I read throughout the semester titles <em>Black Boy</em>  written by Richard Wright.</p>
                </div>

                <div className="section">
                    <h1>WHAT</h1>
                    <p>After reading a small excerpt of this book I was instantly hooked by Wright's writing style. Aside from touching on critical topics for his
                        time period, the way he talked about each topic with great detail was extremely captivating. Wright was truly an intellectual, and it really
                        showed in his writing. The way he would depict people and their characteristics made me feel as if I was personally meeting these people. He
                        seems to describe them in such a way that makes them unique.
                    </p>
                </div>

                <div className="section">
                    <h1>WHY</h1>
                    <p>
                        Through my analysis of Wright's <i>Black Boy</i>, I hope that I can show you the many problems that a significant amount of young blacks face
                        due to isolation and independence. With this knowledge, hopefully you can be of assistance in detecting these problems early and acting 
                        accordingly. Although I have not provided any solutions to the problems presented, I hope that this step is a step in the right direction.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;
