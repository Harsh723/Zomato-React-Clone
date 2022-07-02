import { AxiosResponse } from "axios";
import { LocationsRoot } from "../module/interface/location-interface";
import { commonHeader } from "./api-call";

const endPoint = "https://b.zmtcdn.com";

export const webAssets = `${endPoint}/web_assets`;

export const INIDAN_THUMBNAIL = `${endPoint}/images/countries/flags/country_1.png`;

export const HOME_PAGE_TOP_BANNER = `${webAssets}/81f3ff974d82520780078ba1cfbd453a1583259680.png?fit=around|1000:400&crop=1000:400;*,*`;

export const HOME_PAGE_LOGO = `${webAssets}/8313a97515fcb0447d2d77c276532a511583262271.png`;

export const footerImage = `${webAssets}/b40b97e677bc7b2ca77c58c61db266fe1603954218.png`;

export const countries = [
  "Australia",
  "Brazil",
  "Canada",
  "Chile",
  "Czech Republic",
  "Indonesia",
  "Ireland",
  "Italy",
  "Lebanon",
  "Malaysia",
  "New Zealand",
  "Phillippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Singapore",
  "Slovakia",
  "South Africa",
  "Sri Lanka",
  "Turkey",
  "UAE",
  "United Kingdom",
  "USA",
];

export const language = [
  "Türkçe",
  "हिंदी",
  "Português (BR)",
  "Indonesian",
  "Português (PT)",
  "Español",
  "Čeština",
  "Slovenčina",
  "Polish",
  "Italian",
  "Vietnamese",
];

export const getLocationSuggestions = (locationName: string) => {
  const locationURL = `locations?query=${locationName}&count=10`;
  return commonHeader(locationURL)
    .then((result: AxiosResponse<LocationsRoot>) => {
      if (result.data.location_suggestions.length) {
        return result.data.location_suggestions;
      }
      return [];
    })
    .catch(() => {
      return [];
    });
};
