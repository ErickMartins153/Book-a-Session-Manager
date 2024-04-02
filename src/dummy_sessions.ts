import microphone from "./assets/microphone.jpg";
import frenchClass from "./assets/french-class.jpg";
import japanImg from "./assets/japan.jpg";
import studioImg from "./assets/music-studio.jpg";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

export const SESSIONS: Session[] = [
  {
    id: "sess01",
    title: "Beginner friendly vocal lessons",
    summary: "Tailored guidance for total beginners in singing.",
    description: `
      Embarking on vocal lessons may feel daunting, but with the right guidance, it's an exciting journey.
      \n\nIn this session, we'll explore beginner-friendly vocal training:\n\n- Why start singing?
      \n- Overcoming beginner challenges.\n- Basics: breath control, pitch, and resonance.
      \n- No need for technical jargon; I'll simplify.\n- Importance of posture and vocal health.
      \n- Interactive exercises for improvement.
      \n\nBy the end, you'll have a clear roadmap for your melodic adventure.`,
    duration: 1,
    date: "2023-11-01",
    image: microphone,
  },
  {
    id: "sess02",
    title: "Intermediate French Conversation Class",
    summary:
      "Enhance your French speaking skills through conversational practice.",
    description: `
      Take your French language skills to the next level with our intermediate conversation class.
      \n\nIn this session, you'll:\n\n- Practice speaking French in real-life scenarios.
      \n- Improve your pronunciation and fluency.
      \n- Discuss various topics ranging from culture to current events.
      \n- Receive personalized feedback from experienced instructors.
      \n\nIdeal for learners with some prior knowledge of French who want to focus on speaking proficiency.`,
    duration: 1.5,
    date: "2023-11-05",
    image: frenchClass,
  },
  {
    id: "sess04",
    title: "Japanese Language and Culture Crash Course",
    summary:
      "Discover the beauty of Japanese language and culture in just one session.",
    description: `
      Immerse yourself in Japanese language and culture with our crash course.
      \n\nIn this session, you'll:\n\n- Learn basic Japanese phrases for greetings, introductions, and daily life.
      \n- Gain insights into Japanese customs, traditions, and etiquette.
      \n- Explore fascinating aspects of Japanese culture such as anime, manga, and cuisine.
      \n- Participate in fun activities to practice your language skills.
      \n\nNo prior knowledge of Japanese required. Get ready for an unforgettable cultural experience!`,
    duration: 2,
    date: "2023-11-15",
    image: japanImg,
  },
  {
    id: "sess05",
    title: "Recording Studio Basics",
    summary: "Introduction to recording studio equipment and techniques.",
    description: `
      Explore the world of recording studios and learn the essentials of audio recording.
      \n\nTopics include:\n\n- Overview of recording studio equipment.
      \n- Microphone types and placement techniques.
      \n- Recording software and basic editing.
      \n\nWhether you're a musician or an aspiring audio engineer, this session is for you!`,
    duration: 2,
    date: "2023-11-25",
    image: studioImg,
  },
];
