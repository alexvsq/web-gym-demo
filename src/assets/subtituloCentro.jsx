import './assetsEstyles.css'
import TextoEfecto from './TextoEfecto.jsx';

function SubtituloCentro({subT1, subT2, textSub}) {
    return (
        <section className='container'>
            <div className='subtituloCentro'>
                <div className='subtitulosCentros'>
                    <h1 className='subTituloCentro1'>{<TextoEfecto text={subT1} />}</h1>
                    <h2 className='subTituloCentro2'>{<TextoEfecto text={subT2} />}</h2>
                </div>
                <div>
                    <p className='textSubtituloCentro'>{textSub}</p>
                </div>
            </div>
        </section>
    ) 
}

export default SubtituloCentro;
