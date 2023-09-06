import * as func from '../modules/functions'

const Main = () => {
  return (
    <>
      <div>
      <h1>My personal main</h1>
      <h3>Funkcija One daje {func.one()}</h3>
      <h3>Funkcija Two daje {func.two()}</h3>
      <h3>Funkcija Three daje {func.three()}</h3>
      </div>
    </>
  );
}

export default Main;
