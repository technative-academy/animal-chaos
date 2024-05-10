import styles from "./MainContent.module.css";
import data from "../../../animals.json";
import Animal from "../Animal/Animal";
import SearchInput from "../SearchInput/SearchInput";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";
import ShowLessButton from "../ShowLessButton/ShowLessButton";
import { useState } from "react";

export default function MainContent() {
  const animalsPerPage = 6;

  const [animalsDisplayed, setAnimalsDisplayed] = useState(animalsPerPage);

  function increasePageSize() {
    setAnimalsDisplayed(animalsDisplayed + animalsPerPage);
  }

  function decreasePageSize() {
    setAnimalsDisplayed(animalsDisplayed - animalsPerPage);
  }

  const [input, setInput] = useState("");

  const filteredArray = data.filter((animal) =>
    animal.title.toLowerCase().includes(input.toLowerCase())
  );

  const filteredSliceArray = filteredArray.slice(0, animalsDisplayed);

  const animals = filteredSliceArray.map((animal) => {
    return (
      <Animal
        id={animal.id}
        key={animal.id}
        title={animal.title}
        description={animal.description}
        image={animal.image}
      />
    );
  });

  return (
    <>
      <SearchInput input={input} setInput={setInput} />
      {filteredArray.length === 1 ? (
        <p className={styles.filtertext}>
          {filteredSliceArray.length} of{" "}
          {`${filteredArray.length} animal shown`}
        </p>
      ) : (
        <p className={styles.filtertext}>
          {filteredSliceArray.length} of{" "}
          {`${filteredArray.length} animals shown`}
        </p>
      )}
      <div className={styles.wrapper}>
        {filteredArray.length == 0 ? (
          <p>sad</p>
        ) : (
          <div className={styles.container}>{animals}</div>
        )}
      </div>
      {animalsDisplayed >= filteredArray.length ? (
        <ShowLessButton decreasePageSize={decreasePageSize} />
      ) : (
        <ShowMoreButton increasePageSize={increasePageSize} />
      )}
    </>
  );
}
