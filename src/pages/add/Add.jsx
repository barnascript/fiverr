import styles from "./Add.module.scss";

const Add = () => {
  return (
    <div className={`sw ${styles.wrapper}`}>
      <h3>Add New Gig</h3>
      <form>
        <div className={styles.left}>
          <label htmlFor="">
            Title
            <input
              type="text"
              placeholder="e.g I will do something I am really good at"
            />
          </label>
          <label htmlFor="">
            Category
            <select name="" id="">
              <option value="Design">Design</option>
            </select>
          </label>

          <label htmlFor="">
            Cover Image
            <input type="file" />
          </label>
          <label htmlFor="">
            Upload Images
            <input type="file" />
          </label>
          <label htmlFor="">
            Description
            <textarea
              className={styles.description}
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Brief Description to introduce your service to customers"
            ></textarea>
            <button className={styles.actual_button}>Create</button>
          </label>
        </div>
        <div className={styles.right}>
          <label htmlFor="">
            Service Title{" "}
            <input type="text" placeholder="e.g One page web design" />
          </label>
          <label htmlFor="">
            Short Description
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Short description of your service"
            ></textarea>
          </label>
          <label htmlFor="">
            Delivery Time
            <input type="text" placeholder="e.g 3 days" />
          </label>
          <label htmlFor="">
            Revision Number
            <input type="number" />
          </label>
          <label htmlFor="">
            Add Features
            <input type="text" placeholder="Page Designing" />
            <input type="text" placeholder="Page Designing" />
            <input type="text" placeholder="Page Designing" />
            <input type="text" placeholder="Page Designing" />
            <input type="text" placeholder="Page Designing" />
          </label>
          <label htmlFor="">
            Price
            <input type="number" />
          </label>
          <button className={styles.mobile_button}>Create</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
