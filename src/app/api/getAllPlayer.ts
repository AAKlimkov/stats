import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../utils/supabaseClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("players").select("*");

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ data });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
