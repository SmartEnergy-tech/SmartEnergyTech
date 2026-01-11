import axios from "axios";
import { createEvent, createStore } from "effector";

export const setIsOpenNotifications = createEvent<boolean>();
export const $isNotificationsOpen = createStore(false).on(setIsOpenNotifications, (_, isOpen) => isOpen);

export const setIsAuthenticated = createEvent<string>();
export const $isAuthenticated = createStore(Boolean(localStorage.getItem("jwt") || "")).on(
  setIsAuthenticated,
  (_, data) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${data}`;

    return Boolean(data);
  }
);

export const setAvatar = createEvent<string>();
export const $avatar = createStore(localStorage.getItem("avatar") || "").on(setAvatar, (_, newAvatar) => {
  localStorage.setItem("avatar", newAvatar);
  return newAvatar;
});
