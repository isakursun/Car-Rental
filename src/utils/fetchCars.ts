import { CarType, FilterType } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "11bbca2d8amsha932e0f205d61e2p1b3243jsn8454c024ae2f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters: FilterType): Promise<CarType[]> {
  const {
    make = "bmw",
    model = "m3",
    limit = "5",
    year = "",
    fuel_type = "",
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`,
    options
  );

  return await res.json();
}
