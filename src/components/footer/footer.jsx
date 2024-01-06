import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://music.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </footer>
  );
}

export default Footer;
