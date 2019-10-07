import React, {useContext} from 'react';
import { AddressContext } from '../../context/addressContext';
import { ModalContainer, Label, Message, Input} from './styledMessageModal';

const MessageModal = () => {

  const [ addressData, updateAddressData] = useContext(AddressContext);
  const {error} = addressData;

  const closeModal = () => {
    updateAddressData(prevState => ({...prevState, error: ''}))
  }

  return (
    <ModalContainer error={error}>
      <Label>Message</Label>
      <Message>{error}</Message>
      <Input type="button" value="close" onClick={() => {closeModal()} }/>
    </ModalContainer>
  )
}

export default MessageModal;
