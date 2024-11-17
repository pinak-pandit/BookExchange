import React, { useContext, useState } from 'react'
import { Button, Modal } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Logout = () => {
  const [openModal, setOpenModal] = useState("");
  const props = { openModal, setOpenModal };

  // use context
  const { logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <Button
        color="red"
        onClick={() => props.setOpenModal('default')}
        className="hover:bg-red-700" // Add hover effect here for the button
      >
        Click here to Logout
      </Button>

      <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>Warning!</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Do you wish to logout from your account?
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              This is a re-confirmation that you are trying to logout from your account.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* The "Yes, I want to sign out!" button with hover effects */}
          <Link to="/" onClick={handleSignOut}>
            <Button
              color="black"
              onClick={() => props.setOpenModal(undefined)}
              className="hover:bg-black hover:text-white" // Hover effect here
            >
              Yes, I want to sign out!
            </Button>
          </Link>
          {/* Decline button with hover effects */}
          <Button
            color="blue"
            onClick={() => props.setOpenModal(undefined)}
            className="hover:bg-blue-600 hover:text-white" // Hover effect here
          >
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Logout;
