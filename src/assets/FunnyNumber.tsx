interface Props {
  num: number;
  color: string;
  r: number;
  delay: number;
}

const FunnyNumber = ({ num, color, r, delay }: Props) => {
  return (
    <div
      style={{
        position: "fixed",
        opacity: 0,
        color: color,
        right: r + "vw",
        fontSize: "3em",
        animation: "rotate 2s linear infinite, fall 10s linear",
        animationDelay: delay + "s",
        animationFillMode: "forwards",
        fontWeight: "bold",
      }}
    >
      {num}
    </div>
  );
};

export default FunnyNumber;
