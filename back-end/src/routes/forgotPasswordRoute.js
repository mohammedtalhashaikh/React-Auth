import { v4 as uuid } from "uuid";
import { sendEmail } from "../util/sendEmail";
import { db } from "../db";

export const forgotPasswordRoute = {
  path: "/api/forgot-password/:email",
  method: "put",
  handler: async (req, res) => {
    const { email } = req.params;

    const passwordResetCode = uuid();

    const { result } = await db
      .collection("users")
      .updateOne({ email }, { $set: { passwordResetCode } });

    if (result.nModified > 0) {
      try {
        await sendEmail({
          to: email,
          from: "talhashaikh6366@gmail.com",
          subject: "Password reset",
          text: `
                 To reset your password click this link:
                 http://localhost:3000/reset-password/${passwordResetCode}`,
        });
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    }

    res.sendStatus(200);
  },
};
