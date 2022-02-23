const { PrismaClient } = require('@prisma/client')

let prisma

// To fix an error, that you can't run PrismaClient in the Browser
// if checks if you are a server
if (typeof window === 'undefined') {
  prisma = new PrismaClient()
}

async function prismaFetched() {
  // SELECT * FROM bitcoin
  let allBitcoinData = await prisma.bitcoin.findMany()
  return allBitcoinData;
}

// API HANDLER
export default function handler (req, res) {
  prismaFetched().then(value => {
    res.status(200).json(value);
  })
}
