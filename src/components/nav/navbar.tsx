import React, { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { FaBell, FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [dialog, setDialog] = useState(false);
  const dummyNavLinks = [
    { icon: <FaUser />, label: "Profile" },
    { icon: <FaCog />, label: "Settings" },
    { icon: <FaBell />, label: "Notifications" },
    { icon: <FaSignOutAlt />, label: "Logout" },
  ];

  return (
    <>
      <Dialog
        open={dialog}
        onClose={() => setDialog(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setDialog(false)}>Cancel</button>
              <button onClick={() => setDialog(false)}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <div className="w-[5%] bg-gray-900 p-4 flex flex-col items-center">
        <ul className="space-y-4">
          {dummyNavLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => {
                window.authentication.invokeLogin();
              }}
              className="p-4 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer"
              title={link.label}
            >
              {link.icon}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
