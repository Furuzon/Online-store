import React from "react";

export default function Button() {
  return (
    <div style={{ textAlign: "center" }} className="col-md-12 mt-4">
      <button className="cart-button mb-3">Proceed to checout</button>
      <span id="cart-alert">Shippig and tax calcualted at Checout</span>
    </div>
  );
}
