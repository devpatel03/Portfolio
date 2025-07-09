import React from 'react';

const NavItem = ({ icon, label, id, active, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex items-center space-x-2 py-2 px-4 rounded-full transition-all duration-300
      ${active ? 'bg-blue-400 text-gray-900 shadow-md' : 'text-gray-300 hover:bg-gray-700 hover:text-blue-400'}
      focus:outline-none focus:ring-2 focus:ring-blue-400`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

export default NavItem;