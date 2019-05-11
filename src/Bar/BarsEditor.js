import React from 'react';
import styles from './Bar.module.css';

function BarValueButton({ value, onRemoveBarValue }) {
  return (
    <div className={styles.barValueButton}>
      {value}
      <button onClick={onRemoveBarValue}>x</button>
    </div>
  );
}

function onRemove(value, id) {
  console.log(`Remove ${value} from id: ${id}`);
}

function BarsEditor({ bars }) {
  if (bars && bars.length > 0) {
    const barValuesRenderer = bars.map(item => {
      return (
        <div className={styles.barsItemContainer} key={item.id}>
          <span>{item.name}</span>
          {item.values.map((value, index) => {
            const onRemoveBarValue = onRemove.bind(this, value, item.id);
            return (
              <BarValueButton
                key={index}
                value={value}
                onRemoveBarValue={onRemoveBarValue}
              />
            );
          })}
        </div>
      );
    });

    return (
      <React.Fragment>
        <div>BarsEditor goes here</div>
        {barValuesRenderer}
      </React.Fragment>
    );
  }

  return null;
}

export default BarsEditor;
