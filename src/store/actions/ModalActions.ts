import {Dispatch} from "redux";

export const actionType = {
  TOGGLE_PROJECTS_DRAWER_VISIBLE: "modal/TOGGLE_PROJECTS_DRAWER_VISIBLE",
  SET_CONTACT_MODAL_VISIBLE: "modal/SET_ESTIMATE_MODAL_VISIBLE",
};

export interface SetContactModalVisible {
  type: typeof actionType.SET_CONTACT_MODAL_VISIBLE;
  payload: boolean;
}

export interface ToggleProjectsDrawerVisible {
  type: typeof actionType.TOGGLE_PROJECTS_DRAWER_VISIBLE;
}

export type ModalActions =
  | SetContactModalVisible
  | ToggleProjectsDrawerVisible

export const setContactModalVisible = (visible: boolean) => ({
  type: actionType.SET_CONTACT_MODAL_VISIBLE,
  payload: visible
});

export const toggleProjectsDrawerVisible = () => ({
  type: actionType.TOGGLE_PROJECTS_DRAWER_VISIBLE,
})

export const openContactModal = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setContactModalVisible(true))
  };
};

export const closeContactModal = () => {
  return async (dispatch: Dispatch) => {
    dispatch(setContactModalVisible(false))
  };
};

