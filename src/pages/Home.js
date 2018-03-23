import React, { Component } from 'react';
import '../css/home.css';
import { ChevronsRight } from 'react-feather';
import { ChevronDown } from 'react-feather';
class Home extends Component {
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
                            <span className="explore">Explore <ChevronsRight/></span>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Home;
