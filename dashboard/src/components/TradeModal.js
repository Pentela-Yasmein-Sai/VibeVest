import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

function TradeModal({ stock, mode, onClose, onSuccess }) {
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (qty <= 0) {
      setError("Quantity must be at least 1.");
      return;
    }

    setLoading(true);
    try {
      const res = await axiosInstance.post("/newOrder", {
        name: stock.name,
        qty: Number(qty),
        price: stock.price,
        mode,
      });
      onSuccess(res.data.message);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Trade failed.");
    } finally {
      setLoading(false);
    }
  };

  const overlayStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const modalStyle = {
    background: "#fff",
    borderRadius: "8px",
    padding: "32px",
    minWidth: "340px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
  };

  const isBuy = mode === "BUY";

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        <h4 style={{ color: isBuy ? "#4184f3" : "#ff5722", marginBottom: "16px" }}>
          {isBuy ? "Buy" : "Sell"} — {stock.name}
        </h4>
        <p style={{ color: "#666", marginBottom: "4px" }}>
          Market Price: <strong>₹{stock.price}</strong>
        </p>
        {error && (
          <div className="alert alert-danger py-2" style={{ fontSize: "0.9rem" }}>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Quantity</label>
            <input
              type="number"
              className="form-control"
              min="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              required
            />
          </div>
          <p style={{ color: "#888", fontSize: "0.9rem" }}>
            Estimated Total: <strong>₹{(qty * stock.price).toFixed(2)}</strong>
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
            <button
              type="submit"
              className={`btn ${isBuy ? "btn-primary" : "btn-danger"}`}
              style={{ flex: 1 }}
              disabled={loading}
            >
              {loading ? "Processing..." : `Confirm ${mode === "BUY" ? "Buy" : "Sell"}`}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ flex: 1 }}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TradeModal;