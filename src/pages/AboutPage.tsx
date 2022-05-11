import { useNavigate } from "react-router-dom";

const AboutPage: React.FC = (props) => {
  const history = useNavigate();

  return (
    <>
      <h1>Страница с информацей</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolore, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Dolore, voluptatibus. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolore, voluptatibus. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolore, voluptatibus. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolore, voluptatibus.
      </p>
      <button
        className="btn"
        onClick={() => {
          history("/");
        }}
      >
        Обратно к списку дел
      </button>
    </>
  );
};

export default AboutPage;
