import React, {useState} from "react";
import cart from "../data/cart";
import mebel from "../data/mebel";


const CreateCard = ({imgUrl,cost, size, name , id, tp}) => {
    let checkId = id;
    const [clicked, setState] = useState(false)
    const [addCol, setCol] = useState(0)
    const createObj = ({imgUrl,cost, size, name, id}) => {
        let obj = {
            imgUrl: imgUrl,
            cost : cost,
            size : size,
            name : name,
            id: id
        }
        console.log(obj)
        return obj
    }
    return(
        <div className={'card'}>
            <div><img src={imgUrl}/></div>
            <div className={'card-info'}>
                <h3>{name}</h3>
                <div>{size}</div>
                <span>{cost} рублей</span>
            </div>
            <div className={'col'}>
                <button onClick={addCol > 0? () => setCol(addCol - 1) : null}>
                   -
                </button>
                <div>
                    {`${addCol} шт`}
                </div>
                <button onClick={() => setCol(addCol + 1)}>
                    +
                </button>
            </div>
            <button className={'Buy'} disabled={clicked} onClick={(obj) => {
               obj = createObj({imgUrl,cost, size, name, id});
                let take = {
                    obj: obj,
                    col: addCol
                }
                let ready = false;
                let indexx = 0
               cart.entries.forEach(((value, index, array) => {
                   if(value.obj.id === take.obj.id) {
                      ready = true
                      indexx = index;

                   }
               }))
               if (ready) {
                   cart.entries[indexx].col = cart.entries[indexx].col + addCol
               }
               else {
               cart.entries.push(take)
            }
                cart.totalPrice = cart.totalPrice + (take.obj.cost*take.col)
                cart.count = cart.count + (take.col)
                console.log(cart)

            }

            }>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-cart" viewBox="0 0 16 16">

                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div>ДОБАВИТЬ В КОРЗИНУ</div>
            </button>
        </div>
    )
}



export default CreateCard
