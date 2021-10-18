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

export interface SignUp {
  email: string;
  password: string;
  firstName: string;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface Note {
  id: string;
  note: string;
  categoryId: string;
  targetId: string;
  questionOfDayId: string;
  targetProgress: number;
  day: number;
  month: number;
  year: number;
  createdAt: string;
  isTask: true;
  isComplete: true;
  order: number;
  files: [
    {
      id: string;
      originalName: string;
    }
  ];
  tagIds: [string];
  checklist: [
    {
      id: string;
      text: string;
      isComplete: true;
    }
  ];
}
