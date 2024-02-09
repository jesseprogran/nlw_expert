import logo from "./assets/logo-nlw-export.svg";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12">
      <img src={logo} />

      <form className="w-full">
        <input type="text" placeholder="Busque em suas notas..." />
      </form>
    </div>
  );
}
