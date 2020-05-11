import React from 'react';
import styles from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{label: 'Salad' , type: 'salad' },
	{label: 'Bacon' , type: 'bacon' },
	{label: 'Cheese', type: 'cheese'},
	{label: 'Meat'  , type: 'meat'  },
];

const buildControls = (props) => (
	// Oops - his solution was better - dont pass in type to the BuildControl and instead do
	// the callback wrap here rather than in BuildControl...
	<div className={styles.BuildControls}>
		<p>Price: <strong>${props.price.toFixed(2)}</strong></p>
		{controls.map(ctrl =>
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				type={ctrl.type}
				onAdd={props.onAdd}
				onRemove={props.onRemove}/>
		)}
		<button className={styles.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
	</div>
);

export default buildControls;