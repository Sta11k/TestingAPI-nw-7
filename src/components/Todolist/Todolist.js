// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import s from './Todolist.module.css';
import { deleteContacts } from '../../redux/app/app-phonebook-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/app/app-phonebook-selector';
import { useFetchContactQuery } from '../../redux/app/operation';

function Todolist() {
  const { data, isfetching } = useFetchContactQuery();

  const contactsOll = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContacts(id));

  return (
    <ul className={s.contacts__list}>
      {contactsOll.map(({ id, name, number, association }) => {
        return (
          <li key={id} className={s.item}>
            {' '}
            <p className={s.name__contact}>
              Association: {association} | <span> name: {name} | </span>
              <span>number: {number} |</span>
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              {' '}
              DELETE contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
export default Todolist;
