import React from "react";
import "./index.less";
import ContentItem from './components/contentItem';
import Images from '../../../images'


export default class Content extends React.Component {
    render(){
        return(
            <div className="content">
                
                <img src={Images.inch1}/>
                <img src={Images.inch2}/>
                <img src={Images.inch3}/>
                <img src={Images.inch4}/>
                <img src={Images.inch5}/>
            </div>
        )
    }
}