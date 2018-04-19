import React, { Component } from 'react';
import '../css/wright.css';

class Wright extends Component {
    render() {
        return (
            <div className="wright-wrapper wrapper">
                <div className="top-links">
                    <span><a href="#background">BACKGROUND</a></span>
                    <span><a href="#work">HIS WORK</a></span>
                    <span><a href="#influence">INFLUENCE</a></span>
                </div>
                <div className="section" id="#background">
                    <h1>BACKGROUND</h1>
                    <div className="wright-image image"></div>
                    <p>
                        Richard Wright, born September 4, 1908, in the city of Natchez, Mississippi, was an African American writer of many popular and controversial
                        writings. He often wrote about the issues of society that he observed as a child and as an adult. The majority of these issues were directly
                        related to race relations primarily between whites and blacks during the 20th century.
                    </p>
                    <p>
                        Growing up in poverty and under a single mother made Wright's life very similar to the majority of young blacks at the time. Before the age of
                        21 Wright had worked several jobs, and was in and out of school. At the same time Wright was discovering his extreme thirst for knowledge, and
                        his strong desire to learn to read and write.
                    </p>
                    
                </div>

                <div className="section" id="work">
                    <h1>HIS WORK</h1>
                    <div className="book-image image"></div>
                    <p>Throughout his life, Wright wrote several books ranging from Drama, to Non-fiction, the most popular being the one that we will be analyzing,
                         titled <em>Black Boy</em>, which was written in 1945. Some of his other works include, <em>Native Son</em>, written in 1940,
                        <em>The Outsider</em>, written in 1953, <em>The Long Dream</em>, written in 1958, and <em>Lawd Today</em>, written in 1963. Along with a 
                        number of his other works, <em>Black Boy</em> was met with disdain, the most notable case
                        being from white supremacist Senator from Mississipi, stating
                    </p>
                    
                    <p>
                        <span className="quote">"Its purpose is to plant the seeds of devilment and trouble-breeding in the days to come in the mind and heart of every American Negro.... It is the dirtiest, filthiest, lousiest, most obscene piece of writing that I have ever seen in print. I would hate to have a son or daughter of mine permitted to read it; it is so filthy and so dirty. But it comes from a Negro, and you cannot expect any better from a person of his type" (Tristam, Pierre)</span>
                    </p>
                    <p>
                        Along with this, the book was banned by the board of education of the Island Trees Union Free School District. This happened in 1982 and
                        resulted in a US Supreme Court Case in 1982, named Island Trees School Distric v. Pico (Island Trees Sch. Dist. v. Pico by Pico).
                    </p>
                    <div className="cover-image image"></div>
                </div>

                <div className="section" id="influence">
                    <h1>INFLUENCE</h1>
                    <div className="communist-image image"></div>
                    <p>Before taking a look at specific individuals that insipired the work of Richard Wright, it is important to note the importance of the rising 
                        communist party in the mid-20th century. After constantly moving from place to place, Wright ended up arriving in Chicago and made his way
                        into the American Communist Party. From here in 1938, Wright published <em>Uncle Tom's Children</em>. which was a collection of stories
                        depicting blacks revolting against their government and the environment around them. According to Wright, many of the books he wrote between
                        1932 and 1944 were reflections of his beliefs tied to communism. He believed that communism was the only set of ideals that are capable of 
                        restoring humanitarian values in society (Britannica, The Editors of Encyclopaedia).
                    </p>
                    <p>

                    </p>
                </div>
            </div>
        );
    }
}

export default Wright;
