import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

export default function Cards({ src, title, description, link }: Props) {
  return (
    <>
      <Card
        style={{
          width: "30rem",
          border: "1px solid #33ab5d",
          borderRadius: "8px",
          overflowX: "hidden",
        }}
      >
        <a href={link}>
          <Card.Img variant="top" src={src} />
        </a>
        <Card.Body style={{ background: "black" }}>
          <Card.Title style={{ color: "#33ab5d" }}>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <a href={link}>
            <Button
              style={{
                background: "#33ab5d",
                border: "none",
                borderRadius: "8px",
                padding: "8px 15px 8px 15px",
              }}
            >
              Click me to Visit
            </Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
}
