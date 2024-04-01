import styles from "./Gigs.module.scss";
import { gigs } from "../../data";
import GigCard from "../../mini_components/gigCard/GigCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Snippet from "../../components/snippet/Snippet";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const toggleDropdown = (e) => {
    const selected = document.querySelector(".selected");

    if (e.target !== selected) {
      setOpen(false);
    }
    setOpen(!open);
  };

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => newRequest("/gigs"),
  });

  return (
    <>
      <div className={`sw ${styles.wrapper}`}>
        <div className={styles.options}>
          <div className={styles.left}>
            <span>
              <Link>FIVERR</Link> {`>`} <Link>GRAPHICS & DESIGN</Link> {`>`}{" "}
            </span>
            <h2 className={styles.profession}>AI Artists</h2>

            <p>
              Explore the boundaries of art and technology with Fiverr's AI
              artists
            </p>

            <div className={styles.budget}>
              <b>Budget:</b>
              <input type="text" placeholder="min" />
              <input type="text" placeholder="max" />
              <button>Apply</button>
            </div>
          </div>

          <div className={styles.right}>
            <b>Sort: </b>{" "}
            <div className={styles.selected} onClick={toggleDropdown}>
              {sort === "sales" ? "Best Selling" : "Newest"}
            </div>
            {open && (
              <div className={styles.dropdown}>
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={styles.gigs}>
          {gigs.map((gig) => (
            <div className={styles.gig}>
              <GigCard item={gig} key={gig.id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gigs;
