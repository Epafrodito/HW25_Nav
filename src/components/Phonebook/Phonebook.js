import { contacts } from "./contacts";
import { useState, useEffect, useMemo } from "react";
import "./Phonebook.css";

export const Phonebook = () => {
  const [contact, setContact] = useState([]);
  const [genderContact, setGenderContact] = useState([]);
  const [value, setValue] = useState("");
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(true);
  const [noGender, setNoGender] = useState(true);

  function curentValue(e) {
    setValue(e.target.value.toLowerCase());
  }
  function selectMale(e) {
    setMale(e.target.checked);
  }
  function selectFemale(e) {
    setFemale(e.target.checked);
  }
  function selectNoGender(e) {
    setNoGender(e.target.checked);
  }
  useEffect(() => {
    let selectGender = [];
    contacts.map((el) => {
      if (el.gender === "male" && male === true) {
        selectGender.push(el);
      } else if (el.gender === "female" && female === true) {
        selectGender.push(el);
      } else if (el.gender === undefined && noGender === true) {
        selectGender.push(el);
      }
    });
    setGenderContact(selectGender);
    setContact(selectGender);
  }, [male, female, noGender]);
  useMemo(() => {
    let searchContact = [];
    genderContact.map((el) => {
      if (Object.values(el).join("").toLowerCase().includes(value)) {
        searchContact.push(el);
        setContact(searchContact);
      }
      setContact(searchContact);
    });
  }, [value]);
  return (
    <div className="book">
      <div className="phonebook">
        <input
          className="search"
          placeholder="Пошук..."
          onChange={curentValue}
        />
        <div className="gender-box">
          <input type="checkbox" onChange={selectFemale} checked={female} />
          <span>Жінка</span>
          <input type="checkbox" onChange={selectMale} checked={male} />
          <span>Чоловік</span>
          <input type="checkbox" onChange={selectNoGender} checked={noGender} />
          <span>Анонім</span>
        </div>
        <div>
          {contact.map((el) => (
            <div key={el.firstName} className="info-abonent">
              <p>
                {el.firstName} {el.lastName}
              </p>
              <p>{el.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
