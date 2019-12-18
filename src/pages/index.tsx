import React from 'react';
import S from './index.css';
import { Carousel, Icon } from 'antd';

class app extends React.Component {
  state = {
    isFlow: false,
  };

  go = (type: string) =>{
    return window.location.href = "https://xrkffgg.github.io/" + type
  };

  handleScroll = (e: { nativeEvent: { deltaY: number; }; }) =>{
    if(!this.state.isFlow){
      this.setState({
        isFlow: true
      });
      if(e.nativeEvent.deltaY <= 0){
        this.refs.el.prev();
      } else {
        this.refs.el.next();
      };
      setTimeout(() =>{
        this.setState({
          isFlow: false
        });
      },500);
    }
  };

  render(){
    return (
      <div className={S.main} onWheel={(e) => this.handleScroll(e)}>
        <Carousel ref="el" dotPosition="right">
          <div className={S.box1}>
            <div className={S.content}>
              <div 
                className={S.box} 
                onClick={() =>{window.location.href = "https://xrkffgg.github.io/Knotes"}}>
                <div className={S.tit}>
                  Knotes
                </div> 
                <div className={S.con}>
                  以 Vuepress 为驱动的，文字记录
                </div>
                <Icon className={S.icon} type="smile" theme="twoTone" twoToneColor="#3eaf7c"/>
              </div>
            </div>
          </div>
          <div className={S.box2}>
            <div className={S.content}>
              <div 
                className={S.box}
                onClick={() =>{window.location.href = "https://xrkffgg.github.io/Kvue"}}>
                <div className={S.tit}>
                  Kvue
                </div>
                <div className={S.con}>
                  Vue 练习地
                </div>
                <Icon className={S.icon} type="smile" theme="twoTone" twoToneColor="#1989fa"/>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default app;
