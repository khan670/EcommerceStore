import React from "react";
import PageSection from "../components/layout/PageSection";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../components/Buttons/Button";

const Cart: React.FC = () => {
  return (
    <div className="w-full ">
      <PageSection pageHead="Cart Page" />
      <div className="flex gap-6 mt-10 px-3">
        <div className="bg-color-light-gray w-[70%] rounded-lg overflow-hidden border border-gray-300">
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
              {[1, 2, 3, 4].map((value) => (
                <>
                  <tr
                    className="font-bold border-b border-b-gray-300"
                    key={value}
                  >
                    <td className="px-4 py-4 text-center">
                      <MdOutlineCancel
                        size={20}
                        className="hover:text-color-theme transition-all duration-300 mx-auto cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-4">
                      <img src="/fashion-1.png" alt="" width={50} height={50} />
                    </td>
                    <td className="px-4 py-4">Power Guard Fortress</td>
                    <td className="px-4 py-4">$550.00</td>
                    <td className="px-4 py-4 text-center">
                      <input
                        type="number"
                        className="px-4 py-4 w-2/6 mx-auto bg-transparent border border-gray-300 rounded focus:outline-none text-center"
                      />
                    </td>
                    <td className="px-4 py-4">$230.50</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" w-[30%] ">
          <div className="bg-color-light-gray rounded-lg border border-gray-300">
            <div className="p-5">
              <h1 className="font-extrabold text-lg">Cart Totals</h1>
            </div>
            <hr />
            <div className="p-5 flex justify-between items-center">
              <h1 className="font-semibold text-color-text-body text-lg">
                Subtotal
              </h1>
              <h1 className="font-bold text-base ">$1100.00</h1>
            </div>
            <hr />
            <div className="p-5 flex justify-between items-center">
              <h1 className="font-semibold text-color-text-body text-lg">
                Total
              </h1>
              <h1 className="font-bold text-base ">$1100.00</h1>
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
