module.exports = (email)=>{
    
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Exclusive Pre-Launch: Limited Seats Available!</title>
    </head>
    
    <body>
        <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            <tr>
                <td bgcolor="#ffffff" style="padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);">
                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td align="center" style="padding-bottom: 20px;">
                                <img src="https://i.ibb.co/CK8dSp6/logomobile.png" alt="Company Logo" width="150">
                            </td>
                        </tr>
                        <tr>
                            <td align="center">
                                <h1>Be Among the First!</h1>
                                <p>Hello subscriber: ${email},</p>
                                <p>We are thrilled to announce the exclusive pre-launch of our cutting-edge tech platform!</p>
                                <p>Secure your spot now as seats are limited!</p>
                                <p>Get ready for:</p>
                                <ul style="text-align: center; padding: 0; margin-top: 10px; margin-bottom: 20px; list-style: none;">
                                    <li style="margin-bottom: 5px;">Revolutionary features</li>
                                    <li style="margin-bottom: 5px;">Enhanced productivity</li>
                                    <li style="margin-bottom: 5px;">Unparalleled user experience</li>
                                </ul>
                                <a href="https://yourcompany.com/prelaunch" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">Learn More</a>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="font-size: 12px; color: #777777; padding-top: 20px;">
                                <p>If you have any questions, feel free to contact us at <a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
                                <p>You are receiving this email because you subscribed to updates from us. If you wish to unsubscribe, <a href="https://yourcompany.com/unsubscribe">click here</a>.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    
    </html>    
    `
}