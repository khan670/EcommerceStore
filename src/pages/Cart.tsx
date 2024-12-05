import React from "react";
import PageSection from "../components/layout/PageSection";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../components/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  InitialStateType,
  removeFromCart,
} from "../store/CartSlice";
import { CartData } from "../Types/ShopTypes";

const Cart: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const dispatch = useDispatch();
  const { cartData, taxPrice } = useSelector(
    (state: { cart: InitialStateType }) => state.cart
  );
  const totalPrice = cartData.reduce(
    (acc: number, item: CartData) => acc + item.price * (item?.quantity || 1),
    0
  );
  const totalPriceWithTax = totalPrice * (1 + taxPrice / 100);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };
  if (!userData.email)
    return (
      <div className="h-full text-center my-10 text-2xl capitalize font-bold ">
        please login first
      </div>
    );
  return (
    <div className="w-full ">
      <PageSection pageHead="Cart Page" />
      <div className="flex flex-col lg:flex-row gap-6 mt-10 px-3">
        <div className="bg-color-light-gray w-full lg:w-[70%] rounded-lg overflow-hidden border border-gray-300">
          <button
            className="px-4 py-2 bg-color-theme text-white m-4 border border-gray-300 rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <table className="w-full">
            <thead className="w-full ">
              <tr className="py-3 w-full text-color-text-body uppercase text-sm border-b border-b-gray-300">
                <th className="px-4 py-4">remove</th>
                <th className="px-4 py-4">Image</th>
                <th className="px-4 py-4">Product</th>
                <th className="px-4 py-4">Price</th>
                <th className="px-4 py-4">Quantity</th>
                <th className="px-4 py-4">subtotal</th>
              </tr>
            </thead>

            <tbody>
              {cartData.map((value, index) => (
                <tr
                  className="font-bold border-b border-b-gray-300"
                  key={index}
                >
                  <td className="px-4 py-4 text-center">
                    <MdOutlineCancel
                      size={20}
                      className="hover:text-color-theme transition-all duration-300 mx-auto cursor-pointer"
                      onClick={() => handleRemoveFromCart(value.id)}
                    />
                  </td>
                  <td className="px-4 py-4">
                    <img src={value.images[0]} alt="" width={50} height={50} />
                  </td>
                  <td className="px-4 py-4 text-center">{value.title}</td>
                  <td className="px-4 py-4 text-center">
                    ${value.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-4 text-center">{value.quantity}</td>
                  <td className="px-4 py-4 text-center">
                    ${value.price * (value?.quantity || 1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" lg:w-[30%] w-full ">
          <div className="bg-color-light-gray rounded-lg border border-gray-300">
            <div className="p-5">
              <h1 className="font-extrabold text-lg">Cart Totals</h1>
            </div>
            <hr />
            <div className="p-5 flex justify-between items-center">
              <h1 className="font-semibold text-color-text-body text-lg">
                Subtotal
              </h1>
              <h1 className="font-bold text-base ">${totalPrice.toFixed(2)}</h1>
            </div>
            <hr />
            <div className="p-5 flex justify-between items-center">
              <h1 className="font-semibold text-color-text-body text-lg">
                Total
              </h1>
              <h1 className="font-bold text-base ">
                ${totalPriceWithTax.toFixed(2)}
              </h1>
            </div>
          </div>
          <Button
            text="Proceed To Checkout"
            isRed={true}
            isWhite={false}
            className="mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
