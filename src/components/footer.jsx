import './css/footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <div className='container'>

                <main className='footerDivs'>
                    <div>
                    <img src="/images/logoBlack.svg" alt="logofooter" />
                    </div>
                    <div>
                        <h3>what is lorem ipsum</h3>
                        <p>what is lorem ipsum</p>
                        <p>what is lorem ipsum</p>
                    </div>

                    <div>
                        <h3>what is lorem ipsum</h3>
                        <p>what is lorem ipsum</p>
                        <p>what is lorem ipsum</p>
                    </div>
                </main>
                <div className='lineaFooter'></div>
                <footer className='footerFooter'>
                    <h3>Todos los derechos reservados - 2023</h3>
                </footer>

            </div>
        </footer>

    )
}

export default Footer