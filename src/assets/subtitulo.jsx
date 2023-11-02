import './assetsEstyles.css'
import TextoEfecto from './TextoEfecto.jsx';

function Subtitutlo({subT1, subT2, textSub}) {
    return (
        
        <header className='container '>
        <div className='subtitulo'>
            <div>
                <h1 className='subTitulo1'>{<TextoEfecto text={subT1} />}</h1>
                <h2 className='subTitulo2'>{<TextoEfecto text={subT2} />}</h2>
            </div>
            <div>
                <p className='textSubtitulo'>{textSub}</p>
            </div>
        </div>
        </header>
    ) 
}

export default Subtitutlo;
