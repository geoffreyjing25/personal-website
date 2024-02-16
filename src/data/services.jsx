import { VscCode } from 'react-icons/vsc';
import { FaBrain } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';


export default [
    {
        title: 'Product',
        icon: <MdWeb className='w-full h-full'/>,
        description: 'User interviews, market research, GTM strategy, data analysis, product roadmapping, prototyping & testing, UI/UX design, data-driven decision making'
    },
    {
        title: 'Entrepreneurship',
        icon: <FaBrain className='w-full h-full'/>,
        description: 'customer acquisition, growth hacking, financial analysis, business strategy, pitching & fundraising, business ideation + validation, team building, leadership',
    },
    {
        title: 'Software',
        icon: <VscCode className='w-full h-full'/>,
        description: 'Full stack web dev, mobile software dev, machine learning (CV, LLMs), proficiency in plethora of programming languages and technologies',
    },

]