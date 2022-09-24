// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    console.log(req.body);
    const result = await fetch(process.env.SLACK_URL ?? "", {
      body: req.body,
      method: req.method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    res.status(200).json({ name: "OK" });
  } catch (e) {
    console.log(e);
    res.status(400).json({ name: `${e}` });
  }
}
