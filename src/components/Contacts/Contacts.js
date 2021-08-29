import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import * as operations from "../../redux/operations";
import { getVisibleContacts } from "../../redux/selectors";
import S from "./Contacts.module.css";

function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(operations.deleteContact(id));

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={S.container}>
          <p className={S.name}>
            {name}: {number}{" "}
          </p>
          {
            <button
              className={S.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Удалить
            </button>
          }
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
