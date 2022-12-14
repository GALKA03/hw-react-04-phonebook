import PropTypes from 'prop-types';
import {ContactsConteiner,Item,Btn } from './Contacts.style'
const ContactsItem = ({ name, number, onRemove, id, children }) => {
   return( 
    
           <Item >
               {name}:{number} <Btn onClick={()=> onRemove(id)}>Delete</Btn>
      {children}
       </Item>

    )
}
export const Contacts = ({ contacts, onRemove }) => {
    if (contacts.length === 0) {
        return null;
    }
       //console.log(contacts)
    return( 
    <ContactsConteiner>
     {contacts.map((contact) => <ContactsItem {...contact}key={contact.id} onRemove={onRemove} />
     )}
    </ContactsConteiner>
    )
}
ContactsItem.prototype = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    onRemove: PropTypes.func,
 id:PropTypes.func
}
Contacts.prototype = {
    contacts: PropTypes.func,
    onRemove:PropTypes.func
}