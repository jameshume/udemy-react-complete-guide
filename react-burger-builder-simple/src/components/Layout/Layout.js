import React from 'react';
import styles from './Layout.css';

const layout = (props) => (
	<React.Fragment>
		<div>Toolbar, SideDrarer, Backdrop</div>
		<main className={styles.Content}>
			{props.children}
		</main>
	</React.Fragment>
);

export default layout;