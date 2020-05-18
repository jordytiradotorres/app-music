import axios from "axios";
import configService from "./config";

const trackService = {};

// con trae
// trackService.search = function(q) {
//   // tipo de busqueda --> pora buscar canciones
//   const type = "track";

//   return appMusicService
//     .get("/search", {
//       params: { q, type },
//     })
//     .then((res) => res.data);
// };

// con axios
trackService.search = function(q) {
  const type = "track";

  return axios
    .get(`${configService.apiUrl}/search`, {
      params: {
        q,
        type,
      },
    })
    .then((res) => res.data);
};

trackService.getById = function(id) {
  return axios
    .get(`${configService.apiUrl}/tracks/${id}`)
    .then((res) => res.data);
};

export default trackService;
