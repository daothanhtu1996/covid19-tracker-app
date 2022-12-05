import CountrySelector from "./components/CountrySelector";
import Summary from "./components/Summary";
import Highlight from "./components/Highlight/indes";
import { useEffect, useState } from "react";

import { getCountries, getReportByCountry } from "./api";


function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [report, setReport] = useState([]);

  // useEffect(() => {
  //   const getCountries= async()=>{
  //    const countryLists = await countriesApi.getAll();
  //    console.log(countryLists)
  //   }
  //   getCountries();
  // }, []);

  useEffect(() => {
    getCountries().then((res) => {
      console.log({ res });
      setCountries(res.data);
      setSelectedCountryId("vn");
    });
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountryId
      );
      getReportByCountry(Slug).then((res) => {
        //xoa ngay cuoi cung
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [countries, selectedCountryId]);

  return (
    <div>

      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId}
      />

      <Highlight report={report} />
      <Summary report={report} />
    </div>
  );
}
export default App;
