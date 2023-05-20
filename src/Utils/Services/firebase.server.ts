import { Platform } from "react-native";
import messaging from "@react-native-firebase/messaging";

import firebase from "@react-native-firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default class FirebaseService {
  static _subscription = null;

  constructor() {}

  static async init(_this = null) {
    console.log("FCM TOKEN", await messaging().getToken());
    messaging()
      .hasPermission()
      .then(async (authorizationStatus) => {
        let authStatus = messaging.AuthorizationStatus.NOT_DETERMINED;
        let enabled: any = false;
        // enabled = !!(authStatus === messaging.AuthorizationStatus.AUTHORIZED);
        if (Platform.OS == "ios") {
          enabled =
            authStatus ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        } else {
          enabled = true;
        }
        if (enabled) {
          FirebaseService.storeUserFirebaseToken().then();
          console.log("Stored FCM Token");
          FirebaseService.localmessage(_this)
          messaging().onMessage((remoteMessage: any) => {
            console.log("Message handled in the on Meesagine", remoteMessage);
            
          })
          messaging().setBackgroundMessageHandler(async (remoteMessage) => {
         
            console.log("Message handled in the background!", remoteMessage);
          });
          messaging().setOpenSettingsForNotificationsHandler(
            async (remoteMessage) => {
              console.log("Message handled in the background!", remoteMessage);
            }
          );
         
        }
      });
  }

  static subscribe(remoteMessage) {
    messaging().onMessage((remoteMessage: any) => {
      console.log("Message handled in the on Meesagine", remoteMessage);
      
    })
  }


 static localmessage(remoteMessage:any) {
  console.log("Localstorage notification")
 
    try {
      const text = remoteMessage.data.message;
      const payload = JSON.parse(remoteMessage.data.sendbird);
      const localNotification = new firebase.notifications.Notification({
        show_in_foreground: true
      })
        .android.setChannelId('com.gorider')
        .android.setPriority(firebase.notifications.Android.Priority.High)
        .setNotificationId(remoteMessage.messageId)
        .setTitle('New message')
        .setSubtitle(`Unread message: ${payload.unread_message_count}`)
        .setBody(text)
        .setData(payload);
  
      const action = new firebase.notifications.Android.Action('Reply', 'ic_launcher', 'My Test Action');
      // Add the action to the notification
      localNotification.android.addAction(action);
  
      return firebase.notifications().displayNotification(localNotification);
    } catch (e) {
      return Promise.resolve();
    }
  }




  static unsubscribe(interest: any) {
    FirebaseService._subscription = null;
  }

  static async storeUserFirebaseToken(force = false) {
    let deviceToken = await AsyncStorage.getItem("fcmToken");
    if (force || !deviceToken) {
      deviceToken = deviceToken || (await messaging().getToken());
      AsyncStorage.setItem("fcmToken", deviceToken);
    }
  }

  static handleNotification(notification: any) {
    console.log("HANDLE NOTIFICATION", notification);
    // iOS app specific handling
    if (Platform.OS === "ios") {
      switch (notification.appState) {
        case "inactive":
        // inactive: App came in foreground by clicking on notification.
        // Use notification.userInfo for redirecting to specific view controller
        case "background":
        // background: App is in background and notification is received.
        // You can fetch required data here don't do anything with UI
        case "active":
        // App is foreground and notification is received. Show a alert or something.
        default:
          break;
      }
    }
  }

  static onSubscriptionsChanged = (interests: string[]): void => {
    console.log("CALLBACK: onSubscriptionsChanged");
    // console.log(interests);
  };


}
