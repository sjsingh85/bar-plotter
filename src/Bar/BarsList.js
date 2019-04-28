import React from 'react';
import styles from './Bar.module.css';

function Bar({ max, bar: { values, name } }) {
  return (
    <React.Fragment>
      <span className={styles.barTitle}>{name}</span>
      <div className={styles.barRow}>
        {values.map((value, index) => (
          <div
            key={index}
            title={value}
            style={{ left: (value * 100) / max + '%' }}
            className={styles.bar}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default function BarsList({ bars }) {
  if (bars && bars.length > 0) {
    const maxItem = Math.max(
      ...bars.map(barItem => Math.max(...barItem.values))
    );

    return (
      <div className={styles.barsContainer}>
        {bars.map(bar => (
          <Bar key={bar.id} max={maxItem} bar={bar} />
        ))}
      </div>
    );
  } else {
    return <div>Nothing here</div>;
  }
}
