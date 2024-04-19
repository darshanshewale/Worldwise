import styles from "../Components/CountryList.module.css";
import Spinner from "../Components/Spinner";
import Message from "../Components/Message";
import CountryItem from "../Components/CountryItem";
import { useCities } from "../contexts/CitiesContext";

export default function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  // this reduce as commond country to multiple cities 
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  // render city through countryitems
  return (
    <ul className={styles.countryList} key={countries.country}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}
