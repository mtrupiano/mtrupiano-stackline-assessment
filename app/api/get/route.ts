import { NextApiRequest } from "next";

import data from "./stackline_frontend_assessment_data_2021.json"
export async function GET(req: NextApiRequest) {
  return Response.json(data);
}