import React, { Component } from 'react';
import '../css/about.css';

class About extends Component {
    render() {
        return (
            <div className="about-wrapper wrapper">
                <div className="section">
                    <h1>WHO AM I</h1>
                    <p>My name is <span className="em">Nicholas Morris</span>, and I am a student from Northern Virginia Community College. I also happen to be a <span className="em">web developer and designer</span>, so when I heard that I would have to make a webpage for my ENG 254 class, I was probably happier than most. Aside from doing what I love and being able to create a nice looking website, I also get to talk about a wonderful book I read throughout the semester titles <em>Black Boy</em>  written by Richard Wright.</p>
                </div>

                <div className="section">
                    <h1>WHY I CHOSE THIS BOOK</h1>
                    <p>After reading a small excerpt of this book I was instantly hooked by Wright's writing style. Aside from touching on critical topics for his
                        time period, the way he talked about each topic with great detail was extremely captivating. Wright was truly an intellectual, and it really
                        showed in his writing. The way he would depict people and their characteristics made me feel as if I was personally meeting these people. He
                        seems to describe them in such a way that makes them unique.
                    </p>
                </div>

                <div className="section">
                    <h1>SOCIETY AND CLASS</h1>
                    <p>In varius pulvinar sodales. Donec malesuada condimentum tristique. Quisque ac aliquet sem, vitae lobortis arcu. Etiam molestie libero eu massa molestie, id venenatis nulla efficitur. Quisque nec pretium lorem. Ut non quam magna. Vivamus vitae nisi id massa fringilla vulputate. Curabitur tristique, magna id imperdiet fermentum, purus sem pretium odio, at pharetra nibh felis vel metus. Nulla facilisi. Nullam convallis elit nec nulla auctor gravida a venenatis lorem. Quisque dignissim fringilla nibh non mollis. Cras condimentum neque et dolor convallis mattis. Vestibulum tincidunt id magna sed semper. Suspendisse hendrerit tristique velit ac aliquet. Nunc feugiat eros a bibendum viverra. </p>
                </div>

                <div className="section">
                    <h1>CHILDHOOD</h1>
                    <p>In varius pulvinar sodales. Donec malesuada condimentum tristique. Quisque ac aliquet sem, vitae lobortis arcu. Etiam molestie libero eu massa molestie, id venenatis nulla efficitur. Quisque nec pretium lorem. Ut non quam magna. Vivamus vitae nisi id massa fringilla vulputate. Curabitur tristique, magna id imperdiet fermentum, purus sem pretium odio, at pharetra nibh felis vel metus. Nulla facilisi. Nullam convallis elit nec nulla auctor gravida a venenatis lorem. Quisque dignissim fringilla nibh non mollis. Cras condimentum neque et dolor convallis mattis. Vestibulum tincidunt id magna sed semper. Suspendisse hendrerit tristique velit ac aliquet. Nunc feugiat eros a bibendum viverra. </p>
                </div>
            </div>
        );
    }
}

export default About;
