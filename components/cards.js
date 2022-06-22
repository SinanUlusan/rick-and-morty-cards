import unfetch from "isomorphic-unfetch";
import React from "react";
import Link from "next/link";

import styles from "./cards.module.css";

function Cards({ characters }) {
  return (
    <div className={styles.cards}>
      {characters.results.map((character) => (
        <article className={styles.article}>
          <div className={styles.imgBox}>
            <img src={character.image} />
          </div>
          <div>
            <div className={styles.section}>
              <Link
                href={`https://rickandmortyapi.com/api/character/${character.id}`}
                as={`https://rickandmortyapi.com/api/character/${character.id}`}
              >
                <a target="_blank">
                  <h2>{character.name}</h2>
                </a>
              </Link>
              <span className={styles.status}>
                <span className={styles.statusIcon}></span>
                {character.status} - {character.species}
              </span>
            </div>

            <div className={styles.section}>
              <span className={styles.textGray}>Last known location: </span>
              <Link
                href={`https://rickandmortyapi.com/api/character/${character.id}`}
                as={`https://rickandmortyapi.com/api/character/${character.id}`}
              >
                <a target="_blank" className={styles.tagNotice}>
                  {character.origin.name}
                </a>
              </Link>
            </div>

            <div className={styles.section}>
              <span className={styles.textGray}>Gender of Character: </span>
              <Link
                href={`https://rickandmortyapi.com/api/character/${character.id}`}
                as={`https://rickandmortyapi.com/api/character/${character.id}`}
              >
                <a target="_blank" className={styles.tagNotice}>
                  {character.gender}
                </a>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const data = await unfetch("https://rickandmortyapi.com/api/character");

  const characters = await data.json();

  return {
    props: {
      characters: characters,
    },
  };
}

export default Cards;
