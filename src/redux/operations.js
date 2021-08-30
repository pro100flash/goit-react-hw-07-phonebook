import axios from "axios";
import shortid from "shortid";
import * as actions from "./actions";

axios.defaults.baseURL = "http://localhost:3030";

export const addContact = (name, number) => (dispatch) => {
  const contact = {
    id: shortid(),
    name,
    number,
  };

  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

export const deleteContact = (id) => (dispatch) => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch((error) => dispatch(actions.deleteContactError(error)));
};

export const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactError(error)));
};

const ololo = (rofl) => {
  fofl = pidor;
};
