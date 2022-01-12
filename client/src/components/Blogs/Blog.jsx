import React from "react";

//css
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <>
      <div className="card">
        <img
          alt="abc"
          src={`${"https://picsum.photos/350/200"}`}
          style={{ height: "350px" }}
        />
        <div className="card-body">
          <p className={`card-title ${styles.header}`}>
            HOW TO SPEND A WEEKEND IN SPAIN
          </p>
          <p className={`card-text ${styles.cardText} ${styles.wrap}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            efficitur sem dui, a porttitor elit consectetur in. Duis lacinia leo
            id tortor euismod scelerisque. Pellentesque tempor accumsan nisl,
            eget elementum nibh dapibus id. Mauris pharetra libero lacus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. In sed ultricies mi, et iaculis nulla. Cras
            vestibulum justo sit amet posuere ornare. Phasellus vitae nisi
            tempor risus rhoncus consequat at id leo. Maecenas non mattis justo.
            Morbi faucibus tempus felis a blandit. Fusce fermentum tellus nec
            magna laoreet, ac laoreet mauris lacinia. Integer tincidunt luctus
            auctor. Nulla fermentum dui augue, non iaculis tortor facilisis eu.
            Etiam vestibulum eros quis eros tristique pellentesque. Maecenas
            libero metus, porttitor eu fringilla eu, euismod sit amet ex.
            Phasellus et pharetra tellus, et hendrerit magna. Etiam quis sodales
            urna. Cras vitae congue neque, sit amet pharetra erat. Nunc
            molestie, magna sit amet ornare vulputate, mauris tellus auctor
            mauris, quis mattis mi ex vel mi. Morbi erat justo, sodales eu ante
            accumsan, faucibus auctor turpis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam non quam quam.
          </p>
          <div className="row">
            <div className={`col-4 ${styles.date}`}>12/1/2021</div>
            <div className="col-4"></div>
            <div className={`col-4 ${styles.username}`}>@john_dev</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
