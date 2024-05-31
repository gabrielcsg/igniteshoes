import { OneSignal } from 'react-native-onesignal';

export function tagUserEmailCreate(email: string) {
  OneSignal.User.addTag('user_email', email);
}

export function tagUserEmailRemove() {
  OneSignal.User.removeTag('user_email');
}

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: 'User',
    user_email: 'teste@email.com',
  });
}

export function tagUserInfoRemove() {
  OneSignal.User.removeTags(['user_name', 'user_email']);
}

export function tagCarUpdate(itemCount: string) {
  OneSignal.User.addTag('cart_items_count', itemCount);
}
