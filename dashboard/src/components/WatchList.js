import React, { useState, useContext } from "react";
import axiosInstance from "../utils/axiosInstance";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnoutChart";
import TradeModal from "./TradeModal";

const labels = watchlist.map((s) => s["name"]);

const WatchList = () => {
  const [tradeModal, setTradeModal] = useState(null); // { stock, mode }
  const [successMsg, setSuccessMsg] = useState("");

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((s) => s.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleOpenTrade = (stock, mode) => {
    setSuccessMsg("");
    setTradeModal({ stock, mode });
  };

  const handleTradeSuccess = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(""), 3500);
  };

  return (
    <div className="watchlist-container">
      {successMsg && (
        <div
          style={{
            background: "#e6f9ee",
            color: "#267a45",
            padding: "10px 16px",
            borderRadius: "4px",
            margin: "8px",
            fontSize: "0.9rem",
            fontWeight: 500,
          }}
        >
          ✓ {successMsg}
        </div>
      )}

      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem
            stock={stock}
            key={index}
            onTrade={handleOpenTrade}
          />
        ))}
      </ul>

      <DoughnutChart data={data} />

      {tradeModal && (
        <TradeModal
          stock={tradeModal.stock}
          mode={tradeModal.mode}
          onClose={() => setTradeModal(null)}
          onSuccess={handleTradeSuccess}
        />
      )}
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock, onTrade }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showActions && (
        <WatchListActions uid={stock.name} stock={stock} onTrade={onTrade} />
      )}
    </li>
  );
};

const WatchListActions = ({ uid, stock, onTrade }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
          <button className="buy" onClick={() => onTrade(stock, "BUY")}>
            Buy
          </button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="sell" onClick={() => onTrade(stock, "SELL")}>
            Sell
          </button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};