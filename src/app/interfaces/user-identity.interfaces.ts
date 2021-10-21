export interface UserIdentity {
  id: string;
  firstName: string;
  email: string;
  token: string;
  expiredAt: string;
  isActive: true;
  isTest: true;
  isConfirmation: true;
  isNotificationEmail: true;
  isNotificationTelegram: true;
  isNotificationPushBrowser: true;
  isNotificationPushPhone: true;
  notificationTime: number;
  timeZone: string;
  sourceDomain: string;
  affiliateDomain: string;
  phone: string;
  language: string;
  isRequestInputEmail: string;
  skyApple: string;
  skyAndroid: string;
  connectedSocialAccounts: string;
}
