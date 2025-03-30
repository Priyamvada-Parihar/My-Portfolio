import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

import {
  AccordionsItem,
  ISkillsItem,
  IProjectItem,
  IJobItem,
} from '../../base-interface';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  animations: [
    trigger('accordionAnimation', [
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          overflow: 'hidden',
        })
      ),
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      transition('closed <=> open', [animate('500ms ease-in-out')]),
    ]),
  ],
})
export class PersonalComponent {
  sideList: AccordionsItem[] = [
    {
      title: 'Categories',
      open: true,
      link: false,
      content: [
        {
          title: 'About',
          link: 'about',
          icon: 'flag.png',
        },
        {
          title: 'Skills',
          link: 'skills',
          icon: 'angular.png',
        },
        {
          title: 'Experience',
          link: 'jobs',
          icon: 'work.png',
        },
        {
          title: 'Projects',
          link: 'projects',
          icon: 'code.png',
        },
        {
          title: 'Educations',
          link: 'uni',
          icon: 'university.png',
        },
        {
          title: 'Achievements',
          link: 'achi',
          icon: 'achievements.png',
        },
      ],
    },
    {
      title: 'Social Link',
      open: true,
      link: true,
      content: [
        {
          title: 'LinkedIn',
          link: 'https://www.linkedin.com/in/priyamvada-parihar',
          icon: 'linkedin.png',
        },
        {
          title: 'GitHub',
          link: 'https://github.com/Priyamvada-Parihar',
          icon: 'github.png',
        },
        {
          title: 'LeetCode',
          link: 'https://leetcode.com/u/Priyamvada_Parihar/',
          icon: 'leetcode.png',
        },
        {
          title: 'Phone',
          link: '+91 9689264431',
          icon: 'phone.png',
        },
        {
          title: 'Email',
          link: 'pariharpriyamvada@gmail.com',
          icon: 'email.png',
        },
      ],
    },
  ];

  skills: ISkillsItem[] = [
    {
      name: 'C++',
      icon: 'c-.png',
    },
    {
      name: 'Java',
      icon: 'java.png',
    },
    {
      name: 'Python',
      icon: 'python.png',
    },
    {
      name: 'MySQL',
      icon: 'mysql.png',
    },
    {
      name: 'MongoDB',
      icon: 'MongoDB.png',
    },
    {
      name: 'HTML',
      icon: 'html.png',
    },
    {
      name: 'CSS/SCSS',
      icon: 'css.png',
    },
    {
      name: 'Javascript',
      icon: 'javascript.png',
    },
    {
      name: 'Bootstrap',
      icon: 'Bootstrap.png',
    },
    {
      name: 'Django',
      icon: 'Django.png',
    },
    {
      name: 'React',
      icon: 'react.png',
    },
    {
      name: 'Node.js',
      icon: 'Node.js.png',
    },
    {
      name: 'Angular',
      icon: 'angular.png',
    },
    {
      name: 'Typescript',
      icon: 'typescript.png',
    },
    {
      name: 'Electron.js',
      icon: 'Electron.png',
    },
    {
      name: 'PyTorch',
      icon: 'PyTorch.png',
    },
    {
      name: 'TensorFlow',
      icon: 'TensorFlow.png',
    },
    {
      name: 'VS Code',
      icon: 'Visual Studio Code (VS Code).png',
    },
    {
      name: 'Git',
      icon: 'git.png',
    },
    {
      name: 'AWS',
      icon: 'AWS.png',
    },
    {
      name: 'Linux',
      icon: 'linux.png',
    },
    {
      name: 'Canva',
      icon: 'Canva.png',
    },
  ];

  projects: IProjectItem[] = [
    // {
    //   name: 'BourseTalent',
    //   detail: `Iran Financial Center, Job Placement Platform.`,
    //   link: 'https://boursetalent.ifc.ir/',
    //   achievements: [
    //     'Using Vue.js scripts instead of Django templates to Increase development speed and readability',
    //   ],
    // },
    // {
    //   name: 'DadGam',
    //   detail: `Legal Consultancy Platform`,
    //   link: 'https://daadgam.com/',
    //   achievements: [
    //     'Developing custom formbuilder, resulting in a 50% improvement in consistency in developing.',
    //     'Add nebular UI library to Angular and create theming.',
    //     'Using cookie to handle user data in subdomains.',
    //   ],
    // },
    // {
    //   name: 'Sky-Lounge',
    //   detail: `Online Menu`,
    //   link: 'https://sky-lounge.ir/',
    //   achievements: [
    //     'Custom UI/UX elements.',
    //     'Responsive web design with Angular.',
    //     'Use JSON database to reduse development and host costs.',
    //   ],
    // },
    // {
    //   name: 'NMS',
    //   detail: `Node Monitoring System`,
    //   achievements: [
    //     'Developed custom DatePicker instead AngularMaterial for better UI/UX',
    //     'Increase website load time by 20% by reducing loops.',
    //   ],
    // },
    // {
    //   name: 'BesazBam',
    //   detail: `Building Services Platform`,
    //   link: 'https://besazbam.ir/',
    //   achievements: [
    //     'Using TypeScript in React for better development',
    //     'Customize Ant Design UI Library',
    //   ],
    // },
    {
      name: 'DoneZo',
      detail:
        'Tech Stack: Electron.js, JavaScript, HTML & CSS',
        achievements: [
          'Developed a desktop productivity app using Electron.js, enabling task management with a progress tracker.',
          'Create, track, and complete tasks with a gamified experience.',
        ],
        link: 'https://done-zo-inky.vercel.app/',
    },

    {
      name: 'Personal Portfolio',
      detail:
        'Tech Stack: HTML & SCSS, Angular, Typescript',
        achievements: [
          'This is my personal CV website built using Angular and designed to resemble the macOS system. ',
          'It showcases my skills, work experience, and projects.',
        ],
        link: '',
    },

    {
      name: 'DeepFake Video Detection Using Deep Learning',
      detail:
        'Tech Stack: HTML & CSS, JavaScript, Bootstrap, Django, Python, Deep Learning',
        achievements: [
          'Developed a deep learning model for accurate real-time deepfake detection in videos.',
          'Leveraged CNN and RNN architectures to enhance detection accuracy.',
          'Implemented and optimized detection workflow for user-friendly web-based application.',
        ],
        link: '',
    },

    {
      name: 'Sarvasparshi Foundation',
      detail:
        'Tech Stack: HTML & CSS, Javascript, Bootstrap, Firebase',
        achievements: [
          'Developed a responsive website for the Sarvasparshi Foundation to showcase its mission and impact.',
          'Used Firebase for scalable backend and real-time database support.',
        ],
        link: 'https://github.com/Priyamvada-Parihar/Sarvasparshi-Foundation',
    },

    {
      name: 'Animated Weather Cards',
      detail:
        'Tech Stack: HTML & CSS, React.js',
        achievements: [
          'Developed animated weather cards using React.',
          'Integrated real-time weather data with smooth UI transitions.',
        ],
        link: 'https://animated-weather-cards.vercel.app/',
    },

    {
      name: 'Forest Fire Prediction',
      detail:
        'Tech Stack: HTML & CSS, Javascript, Python, Machine Learning',
        achievements: [
          'Developed a forest fire prediction system using Machine Learning.',
        ],
        link: 'https://github.com/Priyamvada-Parihar/Forest-Fire-Prediction-Website/tree/main/Forest-Fire-Prediction-Website',
    },
  ];

  jobs: IJobItem[] = [
    {
      title: 'Heal Bharat',
      logo: 'Heal-Bharat.jpg',
      website: '',
      date: 'Jan 2025 - Present',
      detail:
        'Developed UI for registration, doctor profiles, and appointment booking.',
      achievements: [
        'Built API endpoints and integrated frontend with backend.',
        'Tested functionality and managed appointment data.',
      ],
    },
    {
      title: 'Elite Softwares',
      logo: 'elite-softwares.jpeg',
      website: 'https://elitesoftwares.co.in/',
      date: 'Dec 2023 - Feb 2024 · 2 mo',
      detail:
        'Developed an e-commerce website for selling digital arts',
      achievements: [
        'Learnt responsive development using Bootstrap',
        'Learnt web hosting on cpanel',
      ],
    },
  ];

  goTo(element: any, type: boolean) {
    if (type) {
      window.open(element, '_blank');
    } else {
      let x = document.getElementById(element);
      x?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleAccordion(item: any) {
    item.open = !item.open;
  }

  fulllscreen() {
    const doc = window.document as any;
    const docEl = doc.documentElement;

    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    const exitFullScreen =
      doc.exitFullscreen ||
      doc.mozCancelFullScreen ||
      doc.webkitExitFullscreen ||
      doc.msExitFullscreen;

    if (
      !doc.fullscreenElement &&
      !doc.mozFullScreenElement &&
      !doc.webkitFullscreenElement &&
      !doc.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
    } else {
      exitFullScreen.call(doc);
    }
  }
}
