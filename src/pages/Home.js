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
                        <span className="tag">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et mauris ut massa tempus ultricies. Aliquam gravida felis vel nisi condimentum lobortis. Nullam nec dui nunc. Curabitur elit dui, cursus quis posuere lobortis, euismod in dui. Phasellus facilisis mi a urna semper porttitor. Integer a.</span>
                            <span className="explore">Explore <ChevronsRight/></span>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Home;
