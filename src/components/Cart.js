import React, { useContext } from 'react';
import listContext from '../contexts/list_context';

function Cart() {
  const { cart } = useContext(listContext);
  const cartlist = cart.map((i, index) => {
    console.log(i)
    return (
      <div className="container" key={index}>
        <div className="row">
          <div className="col-sm-5">
            <img
              style={{ display: "block", margin: "0 auto 10px", maxHeight: "100px" }}
              className="img-fluid"
              src={i.image}
              alt={i.title}
            />
          </div>
          <div className="col-sm-7">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.count}</td>
                  <td>$ {Math.round(i.price * i.count)}</td>
                  <td>{<Removebutton pd={i} />}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    )
  })

  if (cart.length > 0) {

    return (

      <div >
        <div className="text-center mt-5">
          <h1>Cart</h1>
          <p>This is the Cart Page.</p>
        </div>
        {cartlist}
      </div>
    )

  } else {
    return <p className='c'>cart is empty</p>
  }

}
function Removebutton(props) {
  const state = useContext(listContext);
  return (
    <button onClick={() => state.removePd(state.cart.indexOf(props.pd))} className="btn btn-danger">
      Remove
    </button>
  )
}

export default Cart;