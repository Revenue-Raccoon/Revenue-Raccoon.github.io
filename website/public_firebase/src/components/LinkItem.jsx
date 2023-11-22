// GymDumbbells.jsx
import React from "react";
import styles from "/src/styles/LinkItem.module.css";

function LinkItem(props) {
  const { link } = props;
  console.log("Image Path:", link.image);
  return (
    <>
      <section className={styles.mainContainer}>
        <div className={styles.imageWrapper}>
          <img loading="lazy" src={link.image} className={styles.mainImage} />
          <a href={link.image} className={styles.secondaryImage} />
        </div>

        <div className={styles.productDetails}>
          <h2 className={styles.title}>{link.title}</h2>

          <div className={styles.priceContainer}>
            <div className={styles.priceLabel}>Price for</div>
            <div className={styles.customerPrice}>customer:</div>
          </div>

          <div className={styles.profitContainer}>
            <div className={styles.profitLabel}>Profit per</div>
          </div>

          <div className={styles.priceValues}>
            <div className={styles.priceValue}>${link.price_per_customer}</div>
            <div className={styles.profitValue}>${link.profit_for_sale}</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LinkItem;
