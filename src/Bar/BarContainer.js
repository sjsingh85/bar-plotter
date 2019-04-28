import React from 'react';
import { connect } from 'react-redux';
import BarsEditor from './BarsEditor';
import BarsList from './BarsList';

function BarContainer({ bars }) {
  return (
    <React.Fragment>
      <BarsEditor bars={bars} />
      <BarsList bars={bars} />
    </React.Fragment>
  );
}

export default connect(state => ({ bars: state.bars }))(BarContainer);
