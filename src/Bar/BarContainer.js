import React from 'react';
import getBarItems from './BarItemsGenerator';
import Bar from './Bar';

export default function BarContainer() {
  const bars = getBarItems(10);

  return <Bar bars={bars} />;
}
