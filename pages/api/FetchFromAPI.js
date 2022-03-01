// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ApiFetch from "../../hooks/ApiFetch";

// Fetch Api on call of http://localhost:3000/api/FetchFromAPI
export default function handler (req, res) {
  ApiFetch().then(value => {
    res.status(200).json(value);
  })
}

export const config = {
  api:{
      externalResolver: true,
  },
}
