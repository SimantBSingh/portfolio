import { AiOutlineHome, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { TfiControlForward } from 'react-icons/tfi';
import { RxDashboard } from 'react-icons/rx';

const my_navbar_data = [
  {
    index: 1,
    nav_link: `/portfolio`,
    navbar_name: 'Home',
    nav__icon: AiOutlineHome,
    bc: '#00a5ee',
  },
  {
    index: 2,
    nav_link: `/portfolio/#about_me`,
    navbar_name: 'About',
    nav__icon: TfiControlForward,
  },
  {
    index: 3,
    nav_link: `/portfolio/tech/`,
    navbar_name: 'Skills and Abilities',
    nav__icon: RiCodeSSlashLine,
    another_page: true,
  },
  {
    index: 4,
    nav_link: '/portfolio/education_and_certifications',
    navbar_name: 'Education',
    nav__icon: AiOutlineSafetyCertificate,
    another_page: true,
  },
  {
    index: 5,
    nav_link: '/portfolio/#my-work',
    navbar_name: 'Projects and Experience',
    nav__icon: RxDashboard,
  },
  // {
  //   index: 6,
  //   nav_link: `/#contact_page`,
  //   navbar_name: 'Contact Me',
  //   nav__icon: BiConversation,
  // },
];

export default my_navbar_data;
