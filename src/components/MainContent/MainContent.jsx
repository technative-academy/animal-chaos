import styles from "./MainContent.module.css";
import data from "../../../animals.json";
import Animal from "../Animal/Animal";

export default function MainContent() {
    console.log(data);
    const animals = data.map((animal) => {
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
            <div className={styles.wrapper}>{animals}</div>
        </>
    );
}
