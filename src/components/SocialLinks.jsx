import {   FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaYoutube, } from "react-icons/fa";

const SocialLinks = ({ size = 24, className = "" }) => {
  const mobileNumber=import.meta.env.VITE_MOBILE_NUMBER;
  const links = [
  {
    icon: <FaGithub size={size} />,
    href: "https://github.com/ChiragRathod25",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={size} />,
    href: "https://www.linkedin.com/in/chiragrathod25",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter size={size} />,
    href: "https://x.com/ChiragR2510",
    label: "Twitter",
  },
  {
    icon: <FaInstagram size={size} />,
    href: "https://instagram.com/chirag25_10",
    label: "Instagram",
  },
  {
    icon: <FaPhone size={size} />,
    href: `tel:${mobileNumber}`,
    label: "Call Me",
  },
  {
    icon: <FaYoutube size={size} />,
    href: "https://www.youtube.com/@ChiragRathod25",
    label: "YouTube",
  },
];


  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map(({ icon, href, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-gray-600 hover:text-blue-600 transition transform hover:scale-110"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
