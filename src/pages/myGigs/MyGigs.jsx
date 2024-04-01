import styles from "./MyGigs.module.scss";
import delete_icon from "../../assets/img/delete.png";
import image1 from "../../assets/img/image1.jpeg";
import { Link } from "react-router-dom";

const MyGigs = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.top}>
        <h3>Gigs</h3>
        <Link to="/add">
          <button>Add New Gig</button>
        </Link>
      </div>
      <table>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Orders</th>
          <th>Action</th>
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
            <img src={delete_icon} alt="delete" />
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
            <img src={delete_icon} alt="delete" />
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
              <img src={delete_icon} alt="delete" />
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
            <img src={delete_icon} alt="delete" />
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
            <img src={delete_icon} alt="delete" />
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
            <img src={delete_icon} alt="delete" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default MyGigs;
