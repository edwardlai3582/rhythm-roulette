import React from 'react';

import Producer from '../Producer';

import styles from './styles.css';

function ProducerList(props) {
  const ComponentToRender = props.component;
  let content = (<div> 0 producer</div>);

  // If we have items, render them
  if (props.rrs) {
    content = props.rrs.rhythmroulettes.map(function(rr) {
        return <Producer key={rr.name} name={rr.name} photo={rr.photo} youtubeLink={rr.youtubeLink} />
    })
  }

  return (
    <div className={styles.ProducerlistWrapper}>
        {content}
    </div>
  );
}

ProducerList.propTypes = {
  rrss: React.PropTypes.array,
};

export default ProducerList;
