import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialLinks = ({ size = 22, className = "" }) => {
  const mobileNumber = import.meta.env.VITE_MOBILE_NUMBER;
  const links = [
    {
      icon: <FaGithub size={size} />,
      href: "https://github.com/ChiragRathod25",
      label: "GitHub",
      hoverColor: "hover:text-white",
    },
    {
      icon: <FaLinkedin size={size} />,
      href: "https://www.linkedin.com/in/chiragrathod25",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <FaTwitter size={size} />,
      href: "https://x.com/ChiragR2510",
      label: "Twitter / X",
      hoverColor: "hover:text-sky-400",
    },
    {
      icon: <FaInstagram size={size} />,
      href: "https://instagram.com/chirag25_10",
      label: "Instagram",
      hoverColor: "hover:text-pink-400",
    },
    {
      icon: <FaYoutube size={size} />,
      href: "https://www.youtube.com/@ChiragRathod25",
      label: "YouTube",
      hoverColor: "hover:text-red-400",
    },
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map(({ icon, href, label, hoverColor }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`text-slate-500 ${hoverColor} transition-all duration-200 hover:scale-110`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
