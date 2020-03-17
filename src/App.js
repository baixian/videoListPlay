import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import VideoListPlay from './components/VideoListPlay';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name:'视频1',sources:[{src:'https://www.runoob.com/try/demo_source/movie.mp4', type: 'video/mp4',}]},
        { name:'视频2',sources:[{src:'https://www.w3school.com.cn/example/html5/mov_bbb.mp4', type: 'video/mp4',}]}
      ],
      visible: false
    };
  }
  handleClick = () => {
    this.setState({
      visible: true
    })
  }
  closeVideoPlay = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    const { list, visible, closeVideoPlay } = this.state;
    return (
        <div>
          <Button type="primary" onClick={this.handleClick}>视频弹框</Button>
          {
            visible &&
            <VideoListPlay
                videoList={list}
                closeVideoPlay={this.closeVideoPlay}
            />
          }
        </div>
    );
  }
}
export default App;
