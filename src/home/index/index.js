import React from "react";
import  "./index.less";
// import images from "../../images"
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

export default class Home extends React.Component {
    render (){
        return (
            <div className="mainWrapper">
                <Header />
                <Content />
                <Footer />

            </div>
        )
    }
}
