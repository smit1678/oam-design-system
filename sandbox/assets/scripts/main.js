'use strict';
import React from 'react';
import { render } from 'react-dom';
import OAM from '../../../assets/scripts/index';
var { Modal, ModalHeader, ModalBody, ModalFooter } = OAM.Modal;

OAM.hello();

var renderModal = function () {
  var container = document.querySelector('[data-hook="modal"]');
  if (container === null) return;

  var el = React.createElement('div', null,
    <Modal
      id='test-modal'
      revealed >

      <ModalHeader>
        <div className='modal__headline'>
          <p className='modal__subtitle'>Modal subtitle</p>
          <h1 className='modal__title'>This is the modal title</h1>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className='prose'>
          <p>This modal is currently under development.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur ac tellus at rutrum. Duis vestibulum tempor commodo. Phasellus efficitur fermentum quam nec semper. Nulla convallis dui quis ante dapibus, at mollis mi fringilla. Ut sit amet pellentesque nibh.</p>
          <p>Etiam ultrices est a auctor sodales. Ut sit amet feugiat est, id sodales leo. Vestibulum id lorem lectus. Aliquam dictum egestas elementum. Proin blandit auctor justo. Praesent quis odio a justo tempus dictum. Praesent sed nisi dui. Vestibulum velit dui, accumsan quis dui a, iaculis dictum quam.</p>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className='button button--achromic' type='button'><span>Cancel</span></button>
        <button className='button button--base' type='submit'><span>Save</span></button>
      </ModalFooter>
    </Modal>
  );

  render(el, container);
};

renderModal();
