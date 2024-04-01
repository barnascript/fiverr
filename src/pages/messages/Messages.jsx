import styles from "./Messages.module.scss";
import { Link } from "react-router-dom";

const MyGigs = () => {
  const currentUser = {
    id: 1,
    isSeller: false,
  };

  const message = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt est
  voluptatum similique, accusamus explicabo odio velit.`;
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.top}>
        <h3>Messages</h3>
      </div>
      <table>
        <tr>
          <th>Buyer</th>
          <th>Last Message</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        <tr className={styles.active}>
          <td>John Doe</td>
          <td>
            <Link to="/message/123">{message.substring(0, 100)}...</Link>
          </td>
          <td>1 hour ago</td>
          <td>
            <button>Mark as read</button>
          </td>
        </tr>
        <tr className={styles.active}>
          <td>John Doe</td>
          <td>
            <Link to="/message/123">{message.substring(0, 100)}...</Link>
          </td>
          <td>1 hour ago</td>
          <td>
            <button>Mark as read</button>
          </td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>
            <Link to="/message/123">{message.substring(0, 100)}...</Link>
          </td>
          <td>1 hour ago</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>
            <Link to="/message/123">{message.substring(0, 100)}...</Link>
          </td>
          <td>1 hour ago</td>
        </tr>
        <tr>
          <td>John Doe</td>
          <td>
            <Link to="/message/123">{message.substring(0, 100)}...</Link>
          </td>
          <td>1 hour ago</td>
        </tr>
      </table>
    </div>
  );
};

export default MyGigs;
