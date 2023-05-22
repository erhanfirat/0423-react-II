// { counter, arttirici }
const Counter = ({
  counter,
  arttirici,
  counterGuncelle,
  bgColor = "#fff",
  paragraph,
  children,
}) => {
  console.log("Counter render edildi!");

  return (
    <div className="container-card">
      Counter: {counter}
      {counter > 10 ? (
        <div>Tebrikler, 10 puan üstü bir skor elde ettiniz!</div>
      ) : (
        <div>Puanın 10'dan düşük, biraz daha çalışmalısın!</div>
      )}
      <br />
      <button onClick={() => arttirici()}> Arttır </button>
      <button onClick={() => counterGuncelle(0)}> Reset </button>
      <br />
      {paragraph}
      <hr />
      {children}
    </div>
  );
};

export default Counter;
