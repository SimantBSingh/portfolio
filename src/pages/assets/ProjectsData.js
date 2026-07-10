import resume_img from '../../Image/proj_imgs/resume_img.webp';
import landing_img from '../../Image/proj_imgs/landing_img.png';
import foodscan from '../../Image/proj_imgs/foodscan.png';
import proj_img from '../../Image/proj_img.png';
import dental_img from '../../Image/proj_imgs/clinic_img.jpg';


const proj_data = [
  {
    id: 1,
    project_name: 'SensorySync',
    proj_creation_date: 'Startup',
    project_image: proj_img,
    proj_description:
      'Therapy coordination platform connecting parents and therapists with therapist-verified progress tracking. Co-founder and technical lead; secured $18,000 in seed funding for development.',
    proj_code_like: '#',
  },
  {
    id: 2,
    project_name: 'Transcript Slide Mapping',
    proj_creation_date: 'AI/NLP',
    project_image: resume_img,
    proj_description:
      'AI-driven NLP pipeline that aligns transcript lines with PowerPoint slides and uses a local distilled LLM to remove filler words and improve clarity.',
    proj_code_like: 'https://github.com/SimantBSingh/Transcript-Slide-Mapping',
  },
  {
    id: 3,
    project_name: 'Restaurant Server Helper (RESPER)',
    proj_creation_date: 'Full Stack',
    project_image: dental_img,
    proj_description:
      'Restaurant management application with admin, employee, and customer portals deployed with AWS Lambda and S3. Built with Vue, Express, MongoDB, AWS, Terraform, and GitHub Actions.',
    proj_code_like: 'https://github.com/asharm10/Front-End-With-Veutify',
  },
  {
    id: 4,
    project_name: 'Car Dealership',
    proj_creation_date: 'Java Backend',
    project_image: landing_img,
    proj_description:
      'Car dealing system with chat support for buying and selling vehicles through agents. Built with Spring Boot, Java, JUnit, TCP sockets, OOP, and network programming.',
    proj_code_like: 'https://github.com/SimantBSingh/Car-Dealer-Management',
  },
  {
    id: 5,
    project_name: 'FoodScan+',
    proj_creation_date: 'Computer Vision',
    project_image: foodscan,
    proj_description:
      'Food recognition project kept on the portfolio as supporting application work alongside the resume-backed project set.',
    proj_code_like: 'https://github.com/SimantBSingh/'
  },
];

export default proj_data;
