import React from 'react';

const Notification = ({ message }) => {
	if (message) {
		console.log(message, 'else part');
		const notificatonStyle = {
			color: 'black',
			background: '#91addb',
			fontSize: 20,
			border: 'solid #394036 3px',
			paddingLeft: 20
		};
		return <div style={notificatonStyle}>{message}</div>;
	} else {
		return null;
	}
};

export default Notification;
