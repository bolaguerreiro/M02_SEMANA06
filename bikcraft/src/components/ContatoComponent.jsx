import React, { useState } from "react";
import "./Contato.css";

function ContatoComponent() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit() {
    const form = {
      nome,
      email,
      mensagem,
    };
    console.log("Formulário a ser enviado:", form);
  }

  return (
    <>
      <section className="contato-formulario">
        <form className="form">
          <div className="contato">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label>E-mail</label>
            <input
              type="email"
              id="email"
              placeholder="contato@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="col-2">
              <label>Mensagem</label>
              <textarea
                rows={5}
                placeholder="Mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
            </div>
            <button className="botao col-2" onClick={handleSubmit}>
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default ContatoComponent;
