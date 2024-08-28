const htmlContent = `
    <html>
  <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
      <tr>
        <td align="center">
          <table width="600px" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 20px; border-radius: 8px;">
            <tr>
              <td align="center" style="padding: 10px 0;">
                <h1 style="color: #333333; font-size: 24px; margin: 0;">Welcome to Inside Success Nigeria!</h1>
                <p style="color: #555555; font-size: 16px;">Your Account is Successfully Created</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 0; color: #333333;">
                <p style="font-size: 16px; margin: 0;">Dear {{businessName}},</p>
                <p style="font-size: 16px; margin: 10px 0;">
                  We’re excited to welcome you to <strong>I.S Nigeria</strong>! 🎉
                </p>
                <p style="font-size: 16px; margin: 10px 0;">
                  Your account has been successfully created. You can now log in and start exploring all the amazing features we offer.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 0; color: #333333;">
                <h3 style="font-size: 18px; margin: 0;">Here are your account details:</h3>
                <ul style="list-style-type: none; padding: 0; margin: 10px 0;">
                  <li style="font-size: 16px; margin-bottom: 5px;"><strong>Business Name:</strong> {{businessName}}</li>
                  <li style="font-size: 16px; margin-bottom: 5px;"><strong>Email:</strong> {{email}}</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 0; color: #333333;">
                <p style="font-size: 16px; margin: 0;">
                  If you have any questions or need assistance, don’t hesitate to reach out to our support team at <a href="mailto:support@yourcompany.com" style="color: #1e90ff; text-decoration: none;">support@isnigeria.com</a> or visit our <a href="#" style="color: #1e90ff; text-decoration: none;">help center</a>.
                </p>
                <p style="font-size: 16px; margin: 10px 0;">
                  We’re thrilled to have you onboard and can’t wait to see what you achieve with <strong>I.S Nigeria</strong>.
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 20px 0; color: #999999; font-size: 12px;">
                <p style="margin: 0;">© 2024 I.S Nigeria. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`

module.exports = htmlContent



