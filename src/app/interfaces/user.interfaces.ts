export interface ResponseUser {
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

export interface UserRegister {
  email: string;
  password: string;
  firstName: string;
}

export interface UserLogin {
  email: string;
  password: string;
}
