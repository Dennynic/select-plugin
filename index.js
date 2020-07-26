import { Select } from "./select/select";
import "./select/styles.scss";

const select = new Select("#select", {
  placeholder: "Select element",
  //selectedId: "4",
  data: [
    { id: "1", value: "Skoda" },
    { id: "2", value: "VolksW" },
    { id: "3", value: "Audi" },
    { id: "4", value: "BMW" },
    { id: "5", value: "Renault" },
    { id: "6", value: "Citroen" },
    { id: "7", value: "Lada" },
    { id: "8", value: "ZaZ" },
  ],
  onSelect(item) {
    console.log("Selected item", item);
  },
});
