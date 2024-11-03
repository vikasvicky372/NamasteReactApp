import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const itemCards = useSelector((store) => store.cart.items);
  
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return itemCards.length === 0 ? (
    <div className="w-6/12  m-auto py-4 my-4 font-bold text-xl text-center">
      Please Add items to the cart....
    </div>
  ) : (
    <div>
      <div className="w-6/12  m-auto py-4 my-4 font-bold text-xl text-center">
        <span>cart</span>
        <span className="px-6 mx-6">
          <button onClick = {()=>{handleClearCart()}}className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
            Clear Cart
          </button>
        </span>
      </div>

      <div className="w-6/12 m-auto">
        {itemCards.map((item) => (
          <ItemCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
