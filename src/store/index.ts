import { createEvent, createStore } from "effector";

export const setIsOpenNotifications = createEvent<boolean>();
export const $isNotificationsOpen = createStore(false).on(setIsOpenNotifications, (_, isOpen) => isOpen);

export const setIsAuthenticated = createEvent<boolean>();
export const $isAuthenticated = createStore(Boolean(localStorage.getItem("jwt") || "")).on(
  setIsAuthenticated,
  (_, data) => data
);
