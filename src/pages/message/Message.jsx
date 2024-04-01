import styles from "./Message.module.scss";
import image1 from "../../assets/img/image1.jpeg";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <div className={styles.breadcrumbs}>
        <Link to="/messages">MESSAGES</Link> {`>`} JOHN DOE {`>`}
      </div>
      <div className={styles.messages}>
        <div className={styles.message1}>
          <img src={image1} alt="" />
          <div className={styles.box}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, iusto aperiam necessitatibus distinctio laborum nesciunt
            quo facere itaque odio repellendus quae animi exercitationem soluta
            harum laudantium numquam, fuga possimus, aut ducimus quibusdam
            magnam doloremque.
          </div>
        </div>
        <div className={styles.message2}>
          <img src={image1} alt="" />
          <div className={styles.box}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, iusto aperiam necessitatibus distinctio laborum nesciunt
            quo facere itaque odio repellendus quae animi exercitationem soluta
            harum laudantium numquam, fuga possimus, aut ducimus quibusdam
            magnam doloremque.
          </div>
        </div>
        <div className={styles.message1}>
          <img src={image1} alt="" />
          <div className={styles.box}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, iusto aperiam necessitatibus distinctio laborum nesciunt
            quo facere itaque odio repellendus quae animi exercitationem soluta
            harum laudantium numquam, fuga possimus, aut ducimus quibusdam
            magnam doloremque.
          </div>
        </div>
        <div className={styles.message2}>
          <img src={image1} alt="" />
          <div className={styles.box}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, iusto aperiam necessitatibus distinctio laborum nesciunt
            quo facere itaque odio repellendus quae animi exercitationem soluta
            harum laudantium numquam, fuga possimus, aut ducimus quibusdam
            magnam doloremque.
          </div>
        </div>
        <div className={styles.message1}>
          <img src={image1} alt="" />
          <div className={styles.box}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, iusto aperiam necessitatibus distinctio laborum nesciunt
            quo facere itaque odio repellendus quae animi exercitationem soluta
            harum laudantium numquam, fuga possimus, aut ducimus quibusdam
            magnam doloremque.
          </div>
        </div>
        <div className={styles.message2}>
          <img src={image1} alt="" />
          <div className={styles.box}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, iusto aperiam necessitatibus distinctio laborum nesciunt
            quo facere itaque odio repellendus quae animi exercitationem soluta
            harum laudantium numquam, fuga possimus, aut ducimus quibusdam
            magnam doloremque.
          </div>
        </div>
        <div className={styles.message1}>
          <img src={image1} alt="" />
          <div className={styles.box}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, iusto aperiam necessitatibus distinctio laborum nesciunt
            quo facere itaque odio repellendus quae animi exercitationem soluta
            harum laudantium numquam, fuga possimus, aut ducimus quibusdam
            magnam doloremque.
          </div>
        </div>
        <div className={styles.message2}>
          <img src={image1} alt="" />
          <div className={styles.box}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, iusto aperiam necessitatibus distinctio laborum nesciunt
            quo facere itaque odio repellendus quae animi exercitationem soluta
            harum laudantium numquam, fuga possimus, aut ducimus quibusdam
            magnam doloremque.
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.action}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write a message"
        ></textarea>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Message;
