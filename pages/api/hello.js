// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import ApiFetch from "../../hooks/ApiFetch";

// Fetch Api on call of http://localhost:3000/api/hello
export default function handler (req, res) {
  ApiFetch().then(value => {
    res.status(200).json(value);
  })
}
