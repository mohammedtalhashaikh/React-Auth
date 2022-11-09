import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
  path: "/api/test-email",
  method: "post",
  handler: async (req, res) => {
    try {
      await sendEmail({
        to: "talhashaikh6366+test1@gmail.com",
        from: "talhashaikh6366@gmail.com",
        subject: "Testing email api integration",
        text: "If you are reading this then yes it works!!!",
      });
      res.sendStatus(200);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  },
};
