import { Link } from "react-router-dom";

interface Props {
  id: string;
  text: string;
  link: string;
}

const Button = ({ id, text, link }: Props) => {
  return (
    <Link id={id} className="aryehBtn" to={link}>
      {text}
    </Link>
  );
};

export default Button;
