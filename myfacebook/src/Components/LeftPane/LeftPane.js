import React from 'react'
import "./leftPane.css"
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FlagIcon from '@mui/icons-material/Flag';



export default function LeftPane() {
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">

          <li className="leftPaneMenuItem">
              <MarkUnreadChatAltIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneManuText">Messages</span>
          </li>
          <li className="leftPaneMenuItem">
              <GroupIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneManuText">Groups</span>
          </li>
          <li className="leftPaneMenuItem">
              <RssFeedIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneManuText">Feeds</span>
          </li>
          <li className="leftPaneMenuItem">
              <FlagIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneManuText">Pages</span>
          </li>
          <li className="leftPaneMenuItem">
              <CalendarMonthIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneManuText">Events</span>
          </li>
          <li className="leftPaneMenuItem">
              <BuildIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneManuText">Settings</span>
          </li>
          <li className="leftPaneMenuItem">
              <SportsEsportsIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneManuText">Games</span>
          </li>
          <li className="leftPaneMenuItem">
              <NewspaperIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneManuText">News</span>
          </li>
          <li className="leftPaneMenuItem">
              <WorkOutlineIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneManuText">Jobs</span>
          </li>

          <li className="leftPaneMenuItem">
              <AddShoppingCartIcon className='leftPaneMenuIcon'/>
              <span className="leftPaneManuText">Market</span>
          </li>
          <hr/>

          <div className="pagesYouLiked">
            <h3>Pages You Likes</h3>
          </div>
          <div className="pageList">
          <li className="pageListItem">
            <img src="./images/1.jpg" alt="" className="pagePic" />
            <span className="pageName">Code With Amith</span>
          </li>
          <li className="pageListItem">
            <img src="./images/1.jpg" alt="" className="pagePic" />
            <span className="pageName">Code With Amith</span>
          </li>
          <li className="pageListItem">
            <img src="./images/1.jpg" alt="" className="pagePic" />
            <span className="pageName">Code With Amith</span>
          </li>
          <li className="pageListItem">
            <img src="./images/1.jpg" alt="" className="pagePic" />
            <span className="pageName">Code With Amith</span>
          </li>
          <li className="pageListItem">
            <img src="./images/1.jpg" alt="" className="pagePic" />
            <span className="pageName">Code With Amith</span>
          </li>
          <li className="pageListItem">
            <img src="./images/1.jpg" alt="" className="pagePic" />
            <span className="pageName">Code With Amith</span>
          </li>
          <li className="pageListItem">
            <img src="./images/1.jpg" alt="" className="pagePic" />
            <span className="pageName">Code With Amith</span>
          </li>
          <li className="pageListItem">
            <img src="./images/1.jpg" alt="" className="pagePic" />
            <span className="pageName">Code With Amith</span>
          </li>
          <li className="pageListItem">
            <img src="./images/1.jpg" alt="" className="pagePic" />
            <span className="pageName">Code With Amith</span>
          </li>

          </div>
        </div>
      </div>
    </div>
  )
}
