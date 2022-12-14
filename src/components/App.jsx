import { useState, useEffect } from "react";
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid'
import { Conteiner } from "./App.styles";
import { Filter } from "./Filter/Filter";
import Form from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";

export function App() {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  
  const [filter, setFilter] = useState('')
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])
  //визуал контактов
  const handleAddFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }
  const addContact = ({ name, number }) => {
    const showContacts = {name, number , id: nanoid() };
    console.log('showContacts',showContacts)
    if (name === '' || number === '') {
      Notiflix.Notify.warning('Please enter all fields!');
      return;
    }
   if (contacts.find(contact => contact.name === name)) {
    Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
 else{setContacts(contacts => [showContacts, ...contacts]) } 
  }
  const  deliteContacts = (id) => {
  setContacts(prevContacts => prevContacts.filter((contact) => contact.id !== id))
    }
  const handleChangeFilterInput = e => setFilter(e.target.value);
    return (
      <Conteiner>
        <h1 style={{
          textAlign: 'center',
          color: 'red',
          bacgroundColor: 'green',
        }}>Phonebook</h1>
         <Form addContact={addContact} />
        <h2 style={{
          textAlign: 'center',
          color: 'red',
        }}>Contacts</h2>
        <Filter filter={filter} onChange={handleChangeFilterInput} />
        <Contacts contacts={handleAddFilter()} onRemove={deliteContacts} />
      </Conteiner>

    )
  
      }
