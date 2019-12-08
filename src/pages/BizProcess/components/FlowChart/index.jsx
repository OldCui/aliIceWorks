import React from 'react';
import ReactEcharts from 'echarts-for-react';
import FlowStatistics from '../FlowStatistics';
import Head from './Head';
import { Input, Button, Checkbox, Message } from '@alifd/next';
import { withRouter } from 'react-router-dom';
import styles from './index.module.scss';

const MOCK_DATA_1 = {
  threeMonths: {
    visits: '4,677',
    unique_users: '3,621',
    ip: '5,690',
    click: '6,583',
  },
  halfYear: {
    visits: '6,688',
    unique_users: '8,339',
    ip: '7,989',
    click: '9,832',
  },
  nearlyYear: {
    visits: '10,323',
    unique_users: '9,262',
    ip: '12,639',
    click: '26,386',
  },
};

const MOCK_DATA_2 = {
    threeMonths: {
      visits: '5,677',
      unique_users: '4,621',
      ip: '5,690',
      click: '7,583',
    },
    halfYear: {
      visits: '7,688',
      unique_users: '9,339',
      ip: '8,989',
      click: '10,832',
    },
    nearlyYear: {
      visits: '11,323',
      unique_users: '10,262',
      ip: '13,639',
      click: '27,386',
    },
  };

  const MOCK_DATA_3 = {
    threeMonths: {
      visits: '4,677',
      unique_users: '3,621',
      ip: '5,690',
      click: '6,583',
    },
    halfYear: {
      visits: '6,688',
      unique_users: '8,339',
      ip: '7,989',
      click: '9,832',
    },
    nearlyYear: {
      visits: '10,323',
      unique_users: '9,262',
      ip: '12,639',
      click: '26,386',
    },
  };



function FlowChart(props) {

let timeFn;
 
  let clickEvent = (params)=>{
      if(timeFn){
        window.clearTimeout(timeFn);
        timeFn = null
      }
    
    timeFn = window.setTimeout(()=>{
        console.log('点击了该点')
        Message.success('将要展示该页面的历史访问数据');
        flowHeaderData = MOCK_DATA_2
      },700)
  }

  let dbClick = (params)=>{
    if(timeFn){
        window.clearTimeout(timeFn);
        timeFn = null
      }
    Message.success('将要跳转到配置页面');
    console.log('props.history',props)
      props.history.push('/page-config');
  }


  const onEvents = {
    'click': clickEvent,
    'dblClick':dbClick
  };

  let flowHeaderData = MOCK_DATA_1


  const option = {
    title: {
        text: '****业务流程示意'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '节点1',
                x: 300,
                y: 300
            }, {
                name: '节点2',
                x: 800,
                y: 300
            }, {
                name: '节点3',
                x: 550,
                y: 100
            }, {
                name: '节点4',
                x: 550,
                y: 500
            }],
            // links: [],
            links: [{
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 5,
                        curveness: 0.2
                    }
                }
            }, {
                source: '节点2',
                target: '节点1',
                label: {
                    normal: {
                        show: true
                    }
                },
                lineStyle: {
                    normal: { curveness: 0.2 }
                }
            }, {
                source: '节点1',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点3'
            }, {
                source: '节点2',
                target: '节点4'
            }, {
                source: '节点1',
                target: '节点4'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
};
  return (
      <div>
          <FlowStatistics 
            calendatData={flowHeaderData}
            />
    <div style={{height:700}}>
      <ReactEcharts
          option={option}
          notMerge={true}
          lazyUpdate={true}
          onEvents={onEvents}
          style={{width: '100%',height:'100%'}}
        />
    </div>
    </div>
  );
}

export default withRouter(FlowChart);
