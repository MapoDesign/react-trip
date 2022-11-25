import React from "react";

function Footer() {
  return (
    <>
      {/*  Footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="text-container about">
                <h4>Few Words About Me</h4>
                <p className="white">
                  Mi chiamo Elisa Resmini. Dopo un contratto a tempo
                  indeterminato, finito perché l'azienda è andata in
                  liquidazione, mi sono reinventata. Ho la passione della
                  programmazione e lavoro su React come Front-end Developer.
                  Avendo una formazione di design e comunicazione, ho più occhio
                  critico dei miei colleghi e creo template davvero belli da
                  vedere e funzionali in termini di User Experience.
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="text-container">
                <h4>Links</h4>
                <ul className="list-unstyled li-space-lg white">
                  <li>
                    <a
                      className="white"
                      href="https://www.linkedin.com/in/elisaresmini/"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      className="white"
                      href="https://frontend-developer-portfolio.netlify.app/"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="text-container">
                <h4>Coding</h4>
                <ul className="list-unstyled li-space-lg">
                  <li className="white">React</li>
                  <li className="white">Vanilla JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="p-small">
                Copyright © 2020{" "}
                <a href="https://mapodesign.com">Template by ElisaResmini</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
