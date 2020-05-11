import React from 'react';
import styles from './BuildControl.css';

const buildControl = (props) => (
	<div className={styles.BuildControl}>
		<div className={styles.Label}>{props.label}</div>
		<button className={styles.Less} onClick={(evt) => props.onRemove(props.type)}>Less</button>
		<button className={styles.More} onClick={(evt) => props.onAdd(props.type)}>More</button>
	</div>
);

export default buildControl;