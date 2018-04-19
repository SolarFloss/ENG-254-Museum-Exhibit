import React, { Component } from 'react';
import '../css/themes.css';

class Themes extends Component {
    render() {
        return (
            <div className="themes-wrapper wrapper">
                <div className="top-links">
                    <span><a href="#racism">RACISM</a></span>
                    <span><a href="#isolation">ISOLATION</a></span>
                    <span><a href="#society">SOCIETY</a></span>
                </div>
                <div className="section" id="racism">
                    <h1>RACISM</h1>
                    <p>
                        As a child, Wright often came in contact with the issue of racism and race. Even with little to no understanding, he had been
                        told that there is an "important" distinction to make between black and white people. Several times throughout his childhood
                        he would ask his mother or grandmother questions regarding race, and by giving unclear answers, they only helped confuse young
                        Wright. This quote does a great job of explaining Wright's confusion:
                    </p>
                    <p>
                        <span className="quote">"It might have been that my tardiness in learning to sense white people as "white" people came from the fact that many of my relatives were "white"-looking people. My grandmother, who was white as any "white" person, had never looked "white" to me (Wright, Richard).</span>
                    </p>
                    <p>
                        Wright had no understanding as to what makes a person <b>white</b>. Why can't your looks alone determing what makes you white, 
                        and what doesn't make you white? These are questions that Wright considered in his mind throughout a majority of his childhood. 
                    </p>
                    <p>
                        What we can determine from this is that, from a very young age, many blacks at the time, and to this day, are given told that they
                        are inherently different from their white counterparts. This is extremely damaging, because as a child they cannot graps the absurd
                        notion that having a different skin color determines anything about their personal character.
                    </p>
                   
                </div>

                <div className="section" id="isolation">
                    <h1>ISOLATION</h1>
                    <p>
                        With a father out of the picture and a busy working mother, most of Wright's childhood was spent in isolation and solitude. This allowed him to explore the 
                        world at his own pace, but at the same time, forced him to be exposed to things a child should not be exposed to. One day in Wright's childhood
                        he stumbles into a bar filled with drunk adults, one of which asks him to repeat obscenities for pennies and nickels. Wright explains this as:
                    </p>
                    <p>
                        <span className="quote">"for a penny or a nickel, I would repeat to anyone whatever was whispered to me. In my foggy, tipsy state, the reaction of men and women to my mysterious words enthralled me. I ran from person to person, laughing, hiccoughing, spewing out firth that made them bend down with glee" (Wright, Richard).</span>
                    </p>
                    <p>
                        Even though Wright did not know what each word meant, he knew that what he was doing would be looked down upon. This childish behavior
                        displayed by the adults in the bar are a perfect example of something that a child should not be exposed to. It can't be said for sure
                        whether or not this specific situation had a large impact on Wright's behavior as he grew up in the future, but it is not hard to 
                        imagine a much worse situation that a child could stumble onto, which would severly impact their growth as an adult.
                    </p>
                </div>

                <div className="section" id="society">
                    <h1>SOCIETY</h1>
                    <p>
                        From a very young age, Wright had always stood out, and in more ways than one. This prooved to be a challenge for Wright in many
                        situations. In general peer pressure brought on by society is usually straightforward, and not paridoxical, but unlucky for Wright,
                        he found himself in this exact situation. He writes,
                    </p>
                    <p>
                        <span className="quote">
                        "Yet, all about me, Negroes were stealing. More than once I had been called a "dumb nigger" by black boys who discovered that I had not availed myself of a chance to snatch some petty piece of white property that had been carelessly left within my reach.
                        "How in hell you gonna git ahead?" I had been asked when I had said that one ought not steal" (Wright, Richard).
                        </span>
                    </p>
                    <p>
                        The paradox here is that society is very against stealing. This is something that seems to be common sense, but the lines of what is
                        common sense starts to get blurred when referring to oppressed groups. While society is against stealing, people a part of the same
                        black community as Wright were confused as to why he didn't steal, and how he thinks he will get ahead without stealing.
                    </p>
                </div>
            </div>
        );
    }
}

export default Themes;
