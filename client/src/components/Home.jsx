import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import navImg from "../assets/nav.png";
import { Switch, Button, Select, Space } from "antd";

function Home() {
    const [isDarkMode, setDarkMode] = useState(false);
    const [data, setData] = useState([]);


  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleToggle = () => {
    setDarkMode(!isDarkMode);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios
          .get(`https://hodlinfo-lqtd.onrender.com/`)
          .then((res) => setData(res.data.slice(0, 10)));
        
        console.log(data.slice(0, 10));
       
      } catch (error) {
        console.log(error);
      }
    };
    console.log(data);
    fetchData();
  }, []);
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="sec-1">
        <div className="nav-1">
          <img src={navImg} alt="" />
        </div>
        <div className="nav-2">
          <Space wrap>
            <Select
              defaultValue="INR"
              style={{
                width: 80,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "INR",
                  label: "INR",
                },
              ]}
            />
            <Select
              defaultValue="IOST"
              style={{
                width: 80,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "INR",
                  label: "INR",
                },
                {
                  value: "IOST",
                  label: "IOST",
                },
                {
                  value: "ETH",
                  label: "ETH",
                },
              ]}
            />
          </Space>
          <Button>BUY BTC</Button>
        </div>
        <div className="nav-3">
          <div className="count">
            <span>35</span>
          </div>
          <div>
            <Button style={{ backgroundColor: "skyblue" }}>Telegram</Button>
          </div>
          <div>
            <Switch checked={isDarkMode} onChange={handleToggle} />
          </div>
        </div>
      </div>
      <div className="sec-2">
        <span>Best Price to Trade</span>
      </div>
      <div className="sec-3">
        <div>
          <p>0.10%</p>
          <span>1 Hrs</span>
        </div>
        <div>
          <p>1.3%</p>
          <span>1 Day</span>
        </div>
        <div id="main">
          <p>₹ 36,25,159</p>
        </div>
        <div>
          <p>10.6%</p>
          <span>1 Month</span>
        </div>
        <div>
          <p>12.8%</p>
          <span>1 Year</span>
        </div>
      </div>

      <div className="sec-4">
        <span>Average BTC/INR net price including commission</span>
      </div>
      <div className="sec-5" style={{ overflowX: "auto" }}>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last</th>
            <th>Buy / Sell</th>

            <th>Volume</th>
            <th>Base unit</th>
          </tr>
          {data.map((item, index) => (
            <>
              <tr className="trr"
              key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.last}</td>
                <td>
                  {item.buy} / {item.sell}
                </td>

                <td>{item.volume}</td>
                <td>{item.base_unit}</td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Home;
