import workingTeam from "./assets/working-team.jpg";
import teamMeeting from "./assets/team-meeting.jpg";
import successImg from "./assets/success.jpg";

export type Mission = {
  img: string;
  title: string;
  summary: string;
};

export const MISSIONS: Mission[] = [
  {
    img: workingTeam,
    title: "What We Do",
    summary:
      "At our company, we specialize in providing personalized and enriching session experiences tailored to your unique needs. Our team of experts is dedicated to delivering high-quality guidance and support to help you achieve your goals. Whether you're looking to improve your skills, explore new interests, or enhance your knowledge, we're here to make it happen.",
  },
  {
    img: teamMeeting,
    title: "What We Offer",
    summary:
      "Our comprehensive range of session offerings is designed to cater to a diverse range of interests and objectives. From one-on-one coaching sessions to group workshops and immersive experiences, we have something for everyone. Explore our curated selection of sessions covering topics such as language learning, all delivered by experienced professionals passionate about sharing their expertise.",
  },
  {
    img: successImg,
    title: "What You Get",
    summary:
      "When you book a session with us, you'll receive personalized attention and guidance from industry experts, gain practical knowledge and hands-on learning opportunities, access exclusive resources and materials, connect with like-minded individuals through networking opportunities, and receive ongoing support and follow-up to ensure your continued success.",
  },
];
