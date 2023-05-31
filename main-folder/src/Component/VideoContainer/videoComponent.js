import { Component } from 'react';
import { ChannelLogo, ChannelName, Thumbnail, VideoDescription, VideoDetailContainer, VideoInfoContainer, VideoParagraph, ViewsContainer } from './videoDetailStyle';
import {BsDot} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import ReactContext from '../../Context/reactContext';
class VideoDetail extends Component {
  
  render() {
    const {videoDetails} = this.props
    const {id,title,thumbnailUrl,channelName,profileUrl,views,publishedAt} = videoDetails
    return (
      <ReactContext.Consumer>
        {value=>{
          const {isDarkModeOn} = value
          return(
            <Link to={`/video/${id}`}>
            <VideoDetailContainer darkMode={isDarkModeOn}>
               <Thumbnail src={thumbnailUrl}/>
               <VideoInfoContainer>
                   <ChannelLogo src={profileUrl}/>
                   <VideoDescription>
                       <VideoParagraph>{title}</VideoParagraph>
                       <ChannelName>{channelName}</ChannelName>
                       <ViewsContainer>
                           <ChannelName>{views} views</ChannelName>
                           <BsDot style={{fontSize: '31px', marginTop: '10px'}}/>
                           <ChannelName>{publishedAt}</ChannelName>
                       </ViewsContainer>
                   </VideoDescription>
               </VideoInfoContainer>
            </VideoDetailContainer>
            </Link>
          )
        }}
     </ReactContext.Consumer>
    );
  }
}

export default VideoDetail;
