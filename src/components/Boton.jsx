const Boton = ({ nombre, password }) => {
    const Login = () => alert("Ingresando, por favor espere.")

    return (
        <div>
            <button
                className={nombre && password === "252525" ? "" : "disabled"}
                onClick={() => Login()}>
                Ingresar
            </button>
        </div>
    )
}

export default Boton