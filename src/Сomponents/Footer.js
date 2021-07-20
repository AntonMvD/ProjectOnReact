export default function Footer() {
    return(
        <div className={'footer'}>
            <div className={'contact-Us'}>
                <div>
                    СВЯЗАТЬСЯ С НАМИ
                </div>
                <div>
                    <div>
                        <img src={'https://upload.wikimedia.org/wikipedia/commons/3/30/Home_free_icon.svg'}/>
                    </div>
                    <div className={'contact-text'}>
                        Гомель, УЛ.Какая-то Д 51
                    </div>
                </div>
                <div>
                    <div>
                        <img src={'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png'}/>
                    </div>
                    <div className={'contact-text'}>
                        +3754444444444
                    </div>
                </div>
                <div>
                    <div>
                        <img src={'https://cdn.iconscout.com/icon/free/png-256/email-1818372-1541480.png'}/>
                    </div>
                    <div className={'contact-text'}>
                        blabla@gmail.com
                    </div>
                </div>
            </div>
            <div className={'join-us'}>
                <div className={'join-uss'}>
                    Присоединяйтесь к нам
                </div>
                <div>
                    <div>
                        <a href={'https://www.vk.com/sal_ne_sosal'}>  <img src={'https://cdn.worldvectorlogo.com/logos/vk-com-logo.svg'}/></a>
                    </div>
                    <div className={'youtube'}>
                        <a href={'https://www.youtube.com/channel/UCHHKF70v4ydMtNk1w_OsyZA'}>  <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png'}/></a>
                    </div>
                    <div>
                        <a href={'https://www.instagram.com/sipejee3/?utm_medium=copy_link'}> <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png'}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}