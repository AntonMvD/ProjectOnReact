import Dropdown from 'react-bootstrap/Dropdown'
import {Link} from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";


export default function Header() {
    return (
        <>
            <div className={'box-shadow'}>
                <div className={'header2'}>
                    <Link to={'/'}><div className={'logo'}> <img src="https://cdn.discordapp.com/attachments/757981671453753354/864874379821318174/png_1-removebg-preview.png" alt="ЛОГОТИП"/></div></Link>
                    <div className={'textIn'}>
                            <div className={'burger-menu'}>
                                <DropdownButton id="dropdown-item-button" title="Каталог">

                                   <Link to={'/chairs'}><Dropdown.Item as="button">Стулья</Dropdown.Item></Link>
                                   <Link to={'/kresla'}> <Dropdown.Item as="button">Кресла</Dropdown.Item></Link>
                                   <Link to={'/beds'}><Dropdown.Item as="button">Кровати</Dropdown.Item></Link>
                                   <Link to={'/tabels'}> <Dropdown.Item as="button">Столы</Dropdown.Item></Link>
                                   <Link to={'/Cupboard'}><Dropdown.Item as='button'>Шкафы</Dropdown.Item> </Link>
                                    <Link to={'/Doors'}><Dropdown.Item as='button'>Двери</Dropdown.Item> </Link>
                                    <Link to={'/Carpet'}><Dropdown.Item as='button'>Ковёр</Dropdown.Item> </Link>
                    </DropdownButton>

                            </div>
                        <input/>
                        <div><img src='https://www.vippng.com/png/detail/10-106940_magnifying-glass-icon-png-search-icon-svg.png'/></div>
                    </div>
                    <div className={'menu'}>
                        <Link to={'/cart'} className={'cart'}>
                            <img src={'https://img.icons8.com/ios/452/shopping-cart.png'}/>

                            <div className={'text-head'}>
                                Корзина
                            </div>
                        </Link>

                        <Link to={'/sales'}  className={'sales'}>
                            <img src={'https://img.icons8.com/pastel-glyph/2x/sale--v3.png'}/>
                            <div className={'text-head'}>
                                Акции
                            </div>
                            </Link>
                        <Link to={'/login'} className={'login'}>
                            <img src={'https://static.thenounproject.com/png/178831-200.png'}/>

                            <div className={'text-head'}>
                                Войти
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )}