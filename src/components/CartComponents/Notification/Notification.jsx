import styles from './Notification.module.css';
import { useSelector } from 'react-redux';

const Notification = () => {

	const newNotification = useSelector(state => state.cartUi.notification);
	let msg = '';
	let type = '';
	if (newNotification) {
		msg = newNotification.msg;
		type = newNotification.type;
	}

	let specialClasses = '';
	switch(type) {
		case 'loading':
			specialClasses = styles.loading;
			break;
		case 'success':
			specialClasses = styles.success;
			break;
		case 'error':
			specialClasses = styles.error;
			break;
		default:
			specialClasses = '';
	};

	const classes = `${styles.notificationContainer} ${specialClasses}`
  return (
		<div className={classes} >
			<span className={styles.closeBtn}>x</span>
			{msg}
		</div>
	)
}

export default Notification;