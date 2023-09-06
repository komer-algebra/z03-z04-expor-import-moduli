import * as func from '../modules/functions'

const Main = () => {
  return (
    <>
      <h1>My personal main</h1>
      <div>
        <p>Ovdje se nalaze funkcije:</p>
        <ul>
          <li>Funkcija One daje: {func.one()}</li>
          <li>Funkcija Two daje: {func.two()}</li>
          <li>Funkcija Three daje: {func.three()}</li>
        </ul>
      </div>
    </>
  );
}

export default Main;
