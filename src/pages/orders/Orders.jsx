import styles from "./Orders.module.scss";
import message from "../../assets/img/message.png";
import image1 from "../../assets/img/image1.jpeg";

const MyGigs = () => {
  const currentUser = {
    id: 1,
    isSeller: false,
  };
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.top}>
        <h3>Orders</h3>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>{currentUser?.isSeller ? "Seller" : "Buyer"}</th>
          <th>Contact</th>
        </tr>
        <tr>
          <td>
            {" "}
            <img src={image1} alt="" />
          </td>
          <td>Maria Anders</td>
          <td>11</td>
          <td>113</td>
          <td>
            {" "}
            <img src={message} alt="delete" />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <img src={image1} alt="" />
          </td>
          <td>Maria Anders</td>
          <td>11</td>
          <td>113</td>
          <td>
            {" "}
            <img src={message} alt="delete" />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <td>
              {" "}
              <img src={image1} alt="" />
            </td>
          </td>
          <td>Maria Anders</td>
          <td>11</td>
          <td>113</td>
          <td>
            {" "}
            <td>
              {" "}
              <img src={message} alt="delete" />
            </td>
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <img src={image1} alt="" />
          </td>
          <td>Maria Anders</td>
          <td>11</td>
          <td>113</td>
          <td>
            {" "}
            <img src={message} alt="delete" />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <img src={image1} alt="" />
          </td>
          <td>Maria Anders</td>
          <td>11</td>
          <td>113</td>
          <td>
            {" "}
            <img src={message} alt="delete" />
          </td>
        </tr>
        <tr>
          <td>
            {" "}
            <img src={image1} alt="" />
          </td>
          <td>Maria Anders</td>
          <td>11</td>
          <td>113</td>
          <td>
            {" "}
            <img src={message} alt="delete" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MyGigs;
