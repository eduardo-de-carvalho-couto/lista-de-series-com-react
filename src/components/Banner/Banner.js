import './Banner.css'

export const Banner = () => {
    return (
        <header className="banner">
            <div className='banner-container'>
                <div className='apresentacao'>
                    <p>A sua</p>
                    <h1>Lista de Series</h1>
                    <div className='logos-container'>
                        <div className='logos'>
                            <img src="/img/netflix.png" alt="prime"/>
                        </div>
                        <div className='logos'>
                            <img src="/img/prime.png" alt="prime"/>
                        </div>
                        <div className='logos'>
                            <img src="/img/hbo.png" alt="prime"/>
                        </div>
                        <div className='logos'>
                            <img src="/img/showtime.png" alt="prime"/>
                        </div>
                    </div>
                </div>
                <img src="/img/banner.png" alt="O banner principal"/>
            </div>
        </header>
    )
}
