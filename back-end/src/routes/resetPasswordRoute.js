import bcrypt from "bcrypt";
import { db } from "../db";

export const resetPasswordRoute = {
  path: "/api/users/:passwordResetCode/reset-password",
  method: "put",
  handler: async (req, res) => {
    const { passwordResetCode } = req.params;
    const { newPassword } = req.body;

    const newSalt = uuid();
    const pepper = process.env.PEPPER_STRING;

    const newPasswordHash = bcrypt.hash(newSalt + newPassword + pepper, 10);

    const result = await db.collection("users").findOneAndUpdate(
      { passwordResetCode },
      {
        $set: { passwordHash: newPasswordHash, salt: newSalt },
        $unset: { passwordResetCode: "" },
      }
    );

    if (result.lastErrorObject.n === 0) return res.sendStatus(404);

    res.sendStatus(200);
  },
};
