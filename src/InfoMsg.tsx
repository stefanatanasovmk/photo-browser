interface Props {
  msg: string;
}

export default function InfoMsg({ msg }: Props): JSX.Element {
  return <p style={infoText}>{msg}</p>;
}


const infoText: React.CSSProperties = {
  fontSize: "1.5rem",
  alignSelf: "center",
  textAlign: "center",
};
