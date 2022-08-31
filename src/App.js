import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import MyFooter from './components/MyFooter'
import LatestRelease from './components/LatestRelease'

function App() {
  return (

    <div className="App">
      <MyNav />
      <Welcome />
      <LatestRelease />
      <MyFooter />
    </div>

  );
}

export default App;



/*

    ISTRUZIONI: 

    Crea il tuo primo progetto React, StriveBooks!
    In questo esercizio creerai il tuo negozio di libri personale usando i React Components!

    Usa il boilerplate tramite create - react - app per creare la tua React App di base.
    Installa bootstrap @4.6.1  e  react - bootstrap@1.6.4 nella tua app.
 
    Crea un componente MyNav che renderizzerà un componente react - bootstrap 
    per la navigation bar con i seguenti link: Home, About and Browse.
    Nota: non sappiamo ancora come creare una vera navigazione,
    quindi per il momento usa “#” come proprietà href per ognuno di essi.

    
    Crea un componente MyFooter che renderizzerà un footer per la pagina.

    Crea un componente Welcome con un Jumbotron e un sottotitolo per il tuo shop.
 
    Crea un componente Latest Release.
    Questo componente dovrà leggere un file.json fornito e mostrare le cover dei libri nella pagina.

*/
