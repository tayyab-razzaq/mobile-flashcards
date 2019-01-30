import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';

import {NOTIFICATION_KEY, PERMISSION_GRANTED_STATUS_NAME} from '../common/constants';

export const dismissAllScheduledNotifications = () =>
	AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync);

const getDeviceNotification = () => ({
	title: 'Daily Quiz Reminder',
	body: 'Please solve any quiz today',
	android: {
		sound: true,
		priority: 'high',
		sticky: false,
		vibrate: true
	},
	ios: {
		sound: true
	}
});

export const setupDeviceNotifications = () => AsyncStorage.getItem(NOTIFICATION_KEY).then(JSON.parse).then(data => {
	if (data === null) {
		Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
			if (PERMISSION_GRANTED_STATUS_NAME === status) {
				Notifications.cancelAllScheduledNotificationsAsync();
				
				const tomorrow = new Date();
				tomorrow.setDate(tomorrow.getDate() + 1);
				tomorrow.setHours(24);
				tomorrow.setMinutes(0);
				
				Notifications.scheduleLocalNotificationAsync(getDeviceNotification(), {
					time: tomorrow,
					repeat: 'day'
				});
				
				AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
			}
		});
	}
});