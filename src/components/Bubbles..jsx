function Bubbles() {
  return (
    <div className="bubbles">
      {[...Array(20)].map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
}

export default Bubbles;
