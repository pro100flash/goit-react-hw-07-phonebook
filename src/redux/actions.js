import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("phonebook/addContactRequest ");
export const addContactSuccess = createAction("phonebook/addContactSuccess");
export const addContactError = createAction("phonebook/addContactError");

export const deleteContactRequest = createAction(
  "phonebook/deleteContactRequest"
);

export const deleteContactSuccess = createAction(
  "phonebook/deleteContactSuccess"
);

export const deleteContactError = createAction("phonebook/deleteContactError");

export const fetchContactRequest = createAction(
  "phonebook/deleteContactRequest"
);

export const fetchContactSuccess = createAction(
  "phonebook/deleteContactSuccess"
);

export const fetchContactError = createAction("phonebook/deleteContactError");

export const changeFilter = createAction("phonebook/changeFilter");
