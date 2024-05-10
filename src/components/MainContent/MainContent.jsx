import styles from "./MainContent.module.css";
import data from "../../../animals.json";
import Animal from "../Animal/Animal";
import SearchInput from "../SearchInput/SearchInput";
import { useState } from "react";

export default function MainContent() {
    const [input, setInput] = useState("");
    console.log(input);

    const filteredArray = data.filter((animal) =>
        animal.title.toLowerCase().includes(input.toLowerCase())
    );

    console.log(filteredArray.length);

    const animals = filteredArray.map((animal) => {
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
                <p>{`${filteredArray.length} Animal shown`}</p>
            ) : (
                <p>{`${filteredArray.length} Animals shown`}</p>
            )}
            <div className={styles.wrapper}>{filteredArray.length == 0 ? <p>sad</p> : animals }</div>
        </>
    );
}
