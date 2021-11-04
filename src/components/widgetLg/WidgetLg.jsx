import React from "react";
import "./widgetLg.css";

function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">latest transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetTh">Customers</th>
          <th className="widgetTh">Date</th>
          <th className="widgetTh">Amount</th>
          <th className="widgetTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$112.00</td>
          <td className="widgetLgStatus">
            <Button type="Approve" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$112.00</td>
          <td className="widgetLgStatus">
            <Button type="Decline" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$112.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgData">2 Jun 2021</td>
          <td className="widgetLgAmount">$112.00</td>
          <td className="widgetLgStatus">
            <Button type="Approve" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
