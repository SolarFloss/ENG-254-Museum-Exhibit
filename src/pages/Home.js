import React, { Component } from 'react';
import '../css/home.css';
import { Route, Link } from 'react-router-dom';
import { ChevronsRight } from 'react-feather';
import { ChevronDown } from 'react-feather';
class Home extends Component {
    constructor() {
        super();
        this.links = document.getElementsByTagName('nav');
    }
    linkClicked = (e) => {
        // e.preventDefault();
        let target = e.target;
        if (e.target.children.length !== 0)
            target = target.children[0];

        for (let i = 0; i < this.links[0].children.length; i++) {
            this.links[0].children[i].classList.remove("selected");
            console.log(this.links[0].children[i].textContent)
            if(this.links[0].children[i].textContent === "RICHARD WRIGHT")
                this.links[0].children[i].classList.add("selected");
        }



        if (this.links[0].classList.contains("open"))
            this.links[0].classList.toggle("open");
    }
    render() {
        return (
            <div className="home-wrapper wrapper">

                <div className="right-wrapper">
                    <div className="image-wrapper">
                        <ChevronDown/>
                    </div>
                </div>

                <div className="left-wrapper">
                    <div className="info">
                        <div className="book-info">
                            <span className="book-title">BLACK BOY</span>
                            <span className="book-author">BY RICHARD WRIGHT</span>
                        </div>
                        <span className="tag">
                        Is childhood freedom and autonomy a blessing or a curse? When left to explore an unfiltered world as a 
                        young African American child, what are the consequences? Richard Wright's <i className="em">Black Boy</i> explores these questions as he
                        tells crucial parts of his life spanning from his upbringing, to his coming of age as an adult.
                        </span>
                        <Link to="/wright" onClick={this.linkClicked}><span className="explore">Explore <ChevronsRight/></span></Link>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Home;
