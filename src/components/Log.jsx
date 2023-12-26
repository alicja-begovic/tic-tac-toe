export default function Logo({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row} ${turn.square.col}`}>
          {turn.plyer} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
