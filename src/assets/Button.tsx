interface Props {
  id: string;
  text: string;
}

const Button = ({ id, text }: Props) => {
  return (
    <button id={id} className="aryehBtn">
      {text}
    </button>
  );
};

export default Button;
