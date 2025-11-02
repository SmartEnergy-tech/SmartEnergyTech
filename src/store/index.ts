import { createEvent, createStore } from "effector";

export const setIsOpenNotifications = createEvent<boolean>();

export const $isNotificationsOpen = createStore(false).on(setIsOpenNotifications, (_, isOpen) => isOpen);
