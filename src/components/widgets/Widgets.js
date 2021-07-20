import React from 'react';
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => {
        return(
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                <FiberManualRecordIcon className="widgets__icon" />
                </div>
                <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="widgets">
            <div className="widgets__header">
            <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Prince Widgets is back", "top news -9099 reader")}
            {newsArticle("Coronavirus-India updates", "top news -909 reader")}
            {newsArticle("tesla", "top news -4099 reader")}
            {newsArticle("Jobs in India", "top news -909900 reader")}
            {newsArticle("React is just awesome", "top news -2099 reader")}
        </div>  
    )
}

export default Widgets
