import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4E16AQEDkfRjGzZOQA/profile-displaybackgroundimage-shrink_200_800/0/1594817799753?e=1625702400&v=beta&t=jzQdJhy2-MT39Tm51XVpS4T95CGAsl2Lf2suxdoWPYk" alt="" />
                <Avatar className="sidebar__avatar" src="https://bit.ly/3nQtot4" />
                <h2>Prince Kumar</h2>
                <h4>React developer at Etelligens Technologies</h4>

                <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed your profile</p>
                        <p className="sidebar__statNumber">329</p>
                    </div>
                    <div className="sidebar__stat">
                        <p>Connections</p>
                        <p className="sidebar__statNumber">2,825</p>
                    </div>
                    <h6>Manage your network</h6>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("React")}
                {recentItem("Next")}
                {recentItem("Angular")}
                {recentItem("Vue")}
            </div>
        </div>
    )
}

export default Sidebar
