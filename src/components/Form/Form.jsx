import { useState } from "react";
import { FormStyled,InputStyle,Btn} from './Form.styled';
//import PropTypes from 'prop-types';


export default function Form({addContact}) {
  const [name, setName] = useState('');
const [number, setNumber] = useState('');
  //const [password, setPassword]=useState('')
  
  const handelChange = e => {
    const{ name,value}=e.target
    switch (name) {
      case 'name':
       setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return
}
  }
  const hendleFormSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    resetName();
    resetNumber(); 
  }
  
const resetName = () => {
    setName('')  
  };
  const resetNumber = () => {
    setNumber('')
  }



return (   
           <FormStyled onSubmit={hendleFormSubmit}>
        <label>
       Name
                    <InputStyle
                     
                value={name}
                onChange={ handelChange}
                type="text"
                name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
          />
            </label>
            <label >
              Number
                    <InputStyle
                value={number} 
            onChange = {handelChange} 
  type="number"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            </label>
        <Btn type="submit">Add to contact</Btn>
          </FormStyled>
)

    }


//  Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };




//   state = {
//   name: '',
//   number:'',
//     }
//  handleChangeForm = e => {
   
//     this.setState({
//       [e.currentTarget.name]: e.currentTarget.value,
//     })
//     } 
// hendleFormSubmit = e => {
//     e.preventDefault();
//     //const { name, number} = this.state;
//     const {addContacts } = this.props;
//     const isValid = this.validateFormSubmit()
//     if (!isValid) {
//         return
//     } 
//   addContacts(this.state)
//     this.reset()
//     }
//  reset = () => {
//         this.setState({ name: '', number: '' })
//     };
//     validateFormSubmit = () => {
//         const { name, number } = this.state;
//         const { addContacts} = this.props;
//         if (!name || !number) {
//           alert('some file is empty')
//             return false;
//         }
//       return addContacts({ name, number })
        
//     }
//     render() {
//         const { name,number } = this.state;
//       return (
          
//            <FormStyled onSubmit={this.hendleFormSubmit}>
//         <label>
//        Name
//                     <InputStyle
                     
//                 value={name}
//                 onChange={this.handleChangeForm}
//                 type="text"
//                 name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
//           />
//             </label>
//             <label >
//               Number
//                     <InputStyle
//                 value={number} 
//             onChange = {this.handleChangeForm} 
//   type="number"
//   name="number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />
//             </label>
//         <Btn type="submit">Add to contact</Btn>
//           </FormStyled>
// )

//     }
// }
    

// export default Form
// Form.propTypes = {
//  handleChangeForm: PropTypes.func,

// };

 // hendleChengForm = ({target}) => {
    // const { name, value } = target;
    // this.setState({ [name]: value })
  //}