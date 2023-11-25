"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  // eslint-disable-next-line no-undef
  try {
    connectToDatabase();
  } catch (error) {}
}
