import { ContactApi } from "../../api/contact"
import Contact from "../../models/Contact"
import { fromContentfulModel } from "../../mappers/ContactMapper"

export const actionType = {
  SET_CONTACT: "settings/SET_CONTACT",
};

export interface SetContact {
  type: typeof actionType.SET_CONTACT;
  payload: boolean;
}

export type SettingsActions =
  | SetContact

export const setContact = (contact: Contact) => ({
  type: actionType.SET_CONTACT,
  payload: contact
});

export const reloadSettings = () => async (
  dispatch: any,
  getState: any,
  {contactApi}: {contactApi: ContactApi}
) => {
  const contactResponse = await contactApi.getContact()
  dispatch(setContact(fromContentfulModel(contactResponse.items.pop())))
};
