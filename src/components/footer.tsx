import { MDBIcon } from "mdb-react-ui-kit";
import { useState } from "react";
import { Button } from "react-bootstrap";
import FooterWave from "./wavefooter";

export default function Footer() {
  const [senderInfo, setSenderInfo] = useState<{
    name: string;
    email: string;
    descriptions: string;
  }>({ name: "", email: "", descriptions: "" });

  const onChangeHandler = (event: any): void => {
    event.preventDefault();
    const { value, name } = event.target;
    setSenderInfo((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = () => {
    console.log(senderInfo);
  };

  return (
    <>
      <div className="footerWave ">
        <FooterWave />
      </div>
      <div className="footerContainer">
        <div>
          <Button
            className="icon_buttons bounce"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook" className="icon" />
            <span className="tooltipText">Tooltip</span>
          </Button>
          <Button
            className="icon_buttons bounce"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/templanzamark21"
            role="button"
          >
            <MDBIcon fab icon="twitter" className="icon" />
            <span className="tooltipText">
              https://twitter.com/templanzamark21
            </span>
          </Button>
          <Button
            className="icon_buttons bounce"
            style={{ backgroundColor: "#dd4b39" }}
            href=""
            role="button"
          >
            <MDBIcon fab icon="google" className="icon" />
            <span className="tooltipText">templanzamark2002@gmail.com</span>
          </Button>
          <Button
            className="icon_buttons bounce"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" className="icon" />
            <span className="tooltipText">Tooltip</span>
          </Button>
          <Button
            className="icon_buttons bounce"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/mark-angelo-templanza-5b0171243/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" className="icon" />
            <span className="tooltipText">
              https://www.linkedin.com/in/mark-angelo-templanza-5b0171243/
            </span>
          </Button>
          <Button
            className="icon_buttons bounce"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/AlphaDureku"
            role="button"
          >
            <MDBIcon fab icon="github" className="icon" />
            <span className="tooltipText">https://github.com/AlphaDureku</span>
          </Button>
        </div>
        <div>
          <form onSubmit={onSubmitHandler}>
            <div>
              <h1>Get In Touch</h1>
            </div>
            <div className="sub-title-form">
              Think I'd be a good fit on contributing with your company? Send me
              a message so we can discuss about it!
            </div>
            <div>
              <div className="top-form">
                <div>
                  <label htmlFor="name">Your Name</label>
                  <br></br>

                  <input
                    type="text"
                    id="name"
                    onChange={onChangeHandler}
                    value={senderInfo.name}
                    name="name"
                    required
                  ></input>
                </div>
                <div>
                  <label htmlFor="email">Your Email </label>
                  <br></br>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={onChangeHandler}
                    value={senderInfo.email}
                    required
                  ></input>
                </div>
              </div>
              <div className="bottom-form">
                <div>
                  <label htmlFor="descriptions">Descriptions</label>
                  <br></br>
                  <textarea
                    name="descriptions"
                    id="descriptions"
                    onChange={onChangeHandler}
                    value={senderInfo.descriptions}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="buttonContainer">
                <button type="submit" className="submitForm bounce">
                  Submit Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
