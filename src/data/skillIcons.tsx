import {
  SiPython, SiJavascript, SiTypescript, SiPhp, SiMysql, SiCplusplus,
  SiReact, SiVite, SiTailwindcss, SiHtml5, SiCss,
  SiExpress, SiNodedotjs, SiFastapi,
  SiFirebase,
  SiTensorflow, SiKeras, SiOpencv, SiPytorch,
  SiArduino, SiGooglesheets,
  SiGit, SiGithub, SiPostman,
  SiGooglecolab, SiStreamlit, SiPlotly, SiFigma,
} from 'react-icons/si'
import { Database, Cpu, Layers, Code2, Image as ImageIcon } from 'lucide-react'
import type { IconType } from 'react-icons'
import type { ComponentType } from 'react'

export const skillIcons: Record<string, IconType | ComponentType<any>> = {
  // Programming
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  SQL: SiMysql,
  'C/C++': SiCplusplus,

  // Frontend
  React: SiReact,
  Vite: SiVite,
  'Tailwind CSS': SiTailwindcss,
  HTML5: SiHtml5,
  CSS3: SiCss,

  // Backend
  'Express.js': SiExpress,
  'Node.js': SiNodedotjs,
  FastAPI: SiFastapi,

  // Database
  MySQL: SiMysql,
  'Firebase Realtime Database': SiFirebase,

  // AI / CV
  YOLOv8: Layers,
  TensorFlow: SiTensorflow,
  Keras: SiKeras,
  OpenCV: SiOpencv,
  PyTorch: SiPytorch,
  CNN: Layers,
  'Image Classification': Layers,
  'Data Augmentation': Layers,

  // IoT
  ESP32: Cpu,
  ESP8266: Cpu,
  'Arduino IDE': SiArduino,
  'Google Sheets API': SiGooglesheets,

  // Tools
  Git: SiGit,
  GitHub: SiGithub,
  'VS Code': Code2,        // fallback (ชื่อ export ไม่ตรงเวอร์ชัน)
  Postman: SiPostman,
  'Google Colab': SiGooglecolab,
  Streamlit: SiStreamlit,
  Plotly: SiPlotly,
  Figma: SiFigma,
  Canva: ImageIcon,        // fallback (ชื่อ export ไม่ตรงเวอร์ชัน)
}

export const DefaultSkillIcon = Database