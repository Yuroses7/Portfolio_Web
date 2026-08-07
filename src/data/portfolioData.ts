// ============================================================
// PORTFOLIO DATA — single source of truth.
// Edit values here; the components render whatever is here.
// ============================================================

export const profile = {
  fullName: 'Chayanan Ruaysup',
  thaiName: 'ชยานันท์ รวยทรัพย์',
  nationality: 'Thai',
  title: 'Computer Engineering Student',
  tagline: 'Building AI, IoT, and full-stack systems that solve real problems.',
  university: 'Kasetsart University',
  faculty: 'Engineering',
  major: 'Computer Engineering',
  status: 'Fourth-year Student',
  graduation: 'March 2027',
  gpax: '3.69 / 4.00',
  toeic: '550',
  // TODO: replace with your real contact details
  email: 'chayanan.ru@ku.th@example.com',
  github: 'https://github.com/Yuroses7',
  linkedin: 'https://linkedin.com/in/Chayanan RUAYSUP',
  location: 'Bangkok, Thailand',
}

export const about = `Computer Engineering student at Kasetsart University with strong interests in Artificial Intelligence, Data Analytics, Process Automation, IoT, and Full-Stack Development. Experienced in building AI, IoT, and web applications through academic projects, research, and national innovation competitions. Passionate about solving real-world problems using software engineering and continuously learning new technologies.`

export const careerInterests = [
  'Data Analytics',
  'Artificial Intelligence',
  'Machine Learning',
  'Computer Vision',
  'Full-Stack Development',
  'Software Engineering',
  'IoT Systems',
  'Process Automation',
  'Business Intelligence',
]

export type SkillGroup = {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: 'Programming', items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL', 'C/C++'] },
  { label: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { label: 'Backend', items: ['Express.js', 'Node.js', 'FastAPI'] },
  { label: 'Database', items: ['MySQL', 'Firebase Realtime Database'] },
  {
    label: 'AI / Computer Vision',
    items: ['YOLOv8', 'TensorFlow', 'Keras', 'OpenCV', 'PyTorch', 'CNN', 'Image Classification', 'Data Augmentation'],
  },
  { label: 'IoT', items: ['ESP32', 'ESP8266', 'Arduino IDE', 'Google Sheets API'] },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Google Colab', 'Streamlit', 'Plotly', 'Figma', 'Canva'],
  },
]

export const coursework = [
  'Artificial Intelligence',
  'Software Engineering',
  'Embedded Systems',
  'Electronic Laboratory for Embedded Systems',
  'Computer Networks',
  'Data Communication and Computer Networks',
  'Operating Systems',
  'Database Systems',
  'Algorithm Design and Analysis',
  'Probability Theory and Statistics',
  'Mobile Software Development',
  'Finance for Entrepreneurs',
]

// ------------------------------------------------------------
// 📸 PROJECT COVER IMAGES
// Drop your image files into src/image/ using these exact
// filenames, and these imports will resolve automatically.
// ------------------------------------------------------------
import smartGlassesImg from '../image/au_glass.png'
import granwayTravelImg from '../image/Bus.png'
import roomCheckImg from '../image/RoomCheck.png'
import thaiHerbCnnImg from '../image/Herb.png'
import movieBookingImg from '../image/moive.png'
import workImg from '../image/work.jpg'
import engiHackImg from '../image/engihack.jpg'
// 📸 AWARD PHOTOS
import expoImg from '../image/expo.jpg'
import newGenWorkImg from '../image/i new gen.jpg'
import kuAiImg from '../image/ku_ai.jpg'
import HackathonImg from '../image/hackatron.png'
export type Project = {
  id: string
  title: string
  role?: string
  overview: string
  responsibilities: string[]
  technologies: string[]
  achievements?: string[]
  featured?: boolean
  // 📸 cover image shown at the top of the ProjectCard
  image?: string
  // 🔗 optional links, rendered as buttons on the card
  githubUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    id: 'smart-glasses',
    title: 'AI Smart Glasses for the Visually Impaired',
    role: 'Developer',
    overview:
      'An AI-powered wearable assistive device that helps visually impaired users perceive obstacles and read their surroundings in real time.',
    responsibilities: [
      'Built object detection using YOLOv8',
      'Implemented depth estimation',
      'Developed REST APIs using FastAPI',
      'Connected ESP32 camera and speaker',
      'Integrated Text-to-Speech',
      'Connected a React Native caregiver application',
      'Improved dataset quality using Roboflow',
    ],
    technologies: ['Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'PyTorch', 'ESP32', 'Gemini API', 'gTTS', 'React Native'],
    achievements: [
      'Silver Medal — Thailand New Gen Inventors Award 2026',
      'Silver Medal — Higher Education Innovation Awards 2026',
      'Honorable Mention — KU AI Pioneers',
    ],
    featured: true,
    image: smartGlassesImg,
    githubUrl: 'https://github.com/Yuroses7/bilnder_Application',
  },
  {
    id: 'granway-travel',
    title: 'Granway Travel — Bus Ticket Booking System',
    overview: 'A complete full-stack online bus ticket booking platform with seat selection and payment verification.',
    responsibilities: [
      'Designed the MySQL database',
      'Created a booking trigger for BOOK-XXXXXX IDs',
      'Developed the frontend and backend',
      'Integrated PHPMailer via Gmail SMTP',
      'Implemented session-based authentication',
    ],
    technologies: ['PHP', 'MySQL', 'Tailwind CSS', 'Bootstrap', 'PHPMailer'],
    achievements: [],
    image: granwayTravelImg,
    githubUrl: 'https://github.com/Yuroses7/Bus',
  },
  {
    id: 'room-check',
    title: 'Room-Check — Smart IoT Monitoring System',
    overview:
      'An end-to-end IoT room monitoring platform that detects room occupancy using ambient light and sound sensors across multiple rooms.',
    responsibilities: [
      'Programmed ESP32/ESP8266 sensor nodes',
      'Connected Firebase Realtime Database',
      'Developed the dashboard with Streamlit',
      'Implemented Plotly gauge charts',
      'Integrated the LINE Messaging API',
      'Optimized the dashboard refresh mechanism',
    ],
    technologies: ['Python', 'Streamlit', 'Firebase RTDB', 'ESP32', 'ESP8266', 'C++', 'Plotly', 'LINE Messaging API'],
    achievements: [],
    image: roomCheckImg,
    githubUrl: 'https://github.com/Yuroses7/RoomCheck',
  },
  {
    id: 'thai-herb-cnn',
    title: 'Thai Herb Image Classification using CNN',
    overview: 'A Convolutional Neural Network trained to classify 10 species of Thai herbs from images.',
    responsibilities: [
      'Prepared datasets',
      'Applied image preprocessing',
      'Used data augmentation',
      'Added dropout regularization',
      'Trained the CNN using TensorFlow/Keras',
      'Evaluated using accuracy, loss, confusion matrix, and classification report',
      'Predicted on unseen images',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Matplotlib', 'Google Colab'],
    achievements: [],
    image: thaiHerbCnnImg,
    githubUrl: 'https://github.com/Yuroses7/Thai-Herb-Image-Classification-using-CNN',
  },
  {
    id: 'movie-booking',
    title: 'Movie Booking Web Application',
    overview: 'A full-stack movie ticket booking web application with seat reservation and authentication.',
    responsibilities: ['Movie listing', 'Seat reservation', 'Authentication', 'REST API', 'Responsive UI'],
    technologies: ['React', 'TypeScript', 'Express.js', 'Node.js', 'MySQL', 'Tailwind CSS'],
    achievements: [],
    image: movieBookingImg,
    githubUrl: 'https://github.com/Yuroses7/Cinema',
  },
  {
    id: 'rice-paddy-advisor',
    title: 'AI Rice Paddy Management Advisor — Sakon Nakhon',
    overview:
      'An interactive map-based tool that recommends rice-farming practices (AWD, no-burn straw, split fertilizer) per tambon in Mueang Sakon Nakhon, using live Gemini AI analysis of real water-quality, GHG, and PM2.5 datasets.',
    responsibilities: [
      'Built the interactive Leaflet map with per-tambon risk markers',
      'Computed WQI, PM2.5, and carbon-reduction baselines from 3 real datasets',
      'Integrated the Google Gemini API for live, tambon-specific recommendations',
      'Designed the co-benefit chart with Chart.js',
      'Handled API error states and a local fallback ranking system',
    ],
    technologies: ['JavaScript', 'Leaflet', 'Chart.js', 'Gemini API', 'HTML/CSS'],
    achievements: [],
    image: HackathonImg,
    // TODO: ใส่ลิงก์ repo และ demo จริงของคุณตรงนี้
    githubUrl: 'https://github.com/Yuroses7/rice-ai-recommendation',
    
  },
]

export type Experience = {
  title: string
  org: string
  duration: string
  points: string[]
  // 📸 optional photo shown next to this experience entry
  image?: string
}

export const experience: Experience[] = [
  {
    title: 'Customer Service Staff',
    org: 'Aimtham Co., Ltd. — Kin Donburi Gateway Ekamai',
    duration: '2 Months',
    points: ['Customer service', 'Order management', 'Customer support', 'Team collaboration', 'Problem solving'],
    image: workImg,
  },
]

export type Award = {
  title: string
  org: string
  // 📸 optional photo shown on the award card
  image?: string
}

export const awards: Award[] = [
  { title: 'Silver Medal', org: 'Thailand New Gen Inventors Award 2026 (NRCT)', image: expoImg },
  { title: 'Silver Medal', org: 'Higher Education Innovation Awards 2026 (NRCT)', image: newGenWorkImg },
  { title: 'Honorable Mention', org: 'KU AI Pioneers: Forward Challenge', image: kuAiImg },
  { title: 'Third Prize', org: 'BDI miniHack Promising Idea — ENGiHack 2026', image: engiHackImg },
]

export const languages = [
  { name: 'Thai', level: 'Native' },
  { name: 'English', level: 'Intermediate · TOEIC 550' },
]