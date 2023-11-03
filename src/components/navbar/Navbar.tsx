import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


library.add(faPhone, faUser, faAngleDown);
function Navbar() {
  return (
    <div className="Navbar">

      <nav className="bg-white">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
            <span className="self-center text-xl font-semibold text-blue-800 whitespace-nowrap">  Verde     </span>
          </a>
          <div className="flex space-x-4 md:order-2 max-fourthsmall::bg-red-800">
            <button type="button" className="px-7 py-1 max-md3:px-5 max-sm:px-3 max-sm:py-1 max-sixthsmall:px-1 max-sixthsmall:py-1 max-fifthsmall:px-1 max-fifthsmall:py-1 max-triplesmall:px-1 max-triplesmall:pyS-1 max-fourthsmall:py-1  font-semibold text-gray-100 bg-gradient-to-b from-green-600 from-20% to-blue-600 rounded-full">     <FontAwesomeIcon icon="phone" size="xs" />  Help</button>
            <button type="button" className="px-4 py-2 font-semibold bg-white border-2 border-green-700 rounded max-md3:px-4 max-sm:px-3 max-sm:py-1 max-sixthsmall:px-1 max-sixthsmall:py-1 max-fifthsmall:px-1 max-fifthsmall:py-1 max-triplesmall:px-1 max-triplesmall:pyS-1 max-fourthsmall:py-1">  <FontAwesomeIcon className='text-blue-900' icon="user" size="xs" />  <FontAwesomeIcon className='ml-2 text-blue-900' icon="angle-down" size="xs" />    </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;