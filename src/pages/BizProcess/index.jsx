import React, { Component } from 'react';
import FlowStatistics from './components/FlowStatistics';
import FlowChart from './components/FlowChart';

export default function() {
  return (
    <div className="BizProcess-page">
      {/* <FlowStatistics /> */}
      <FlowChart history/>
    </div>
  );
}
