export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#svg">Home</a>
          </li>
          <li>
            {" "}
            <a href="#projects">Projects</a>
          </li>
          <li>
            {" "}
            <a href="#ContactMe">Contact Me</a>
          </li>
          <li>
            {" "}
            <a href="#aboutMe">About Me</a>{" "}
          </li>
          <li className="navProfile">
            <img
              alt="profile"
              src="/images/profile.jpg"
              className="profilePic"
            ></img>
            <span className="tooltipNav">Mark Angelo S. Templanza</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
