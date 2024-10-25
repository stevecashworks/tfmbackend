const createHTMLTemplate=({name, message})=>{
    return`
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style>
    /* Reset for consistent look across different email clients */
    body, html, p {
      margin: 0;
      padding: 0;
    }
    body {
      background-color: #1a1a1a;
      font-family: Arial, sans-serif;
      color: #dcdcdc;
    }
    a {
      color: #4CAF50;
      text-decoration: none;
    }
    table {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #333;
      border-radius: 10px;
      overflow: hidden;
    }
    td {
      padding: 15px;
      text-align: center;
    }
    .header {
      background-color: #2c3e50;
      color: #fff;
    }
    .main-content {
      padding: 20px;
      color: #dcdcdc;
      background-color:white;
    }
    .footer {
      background-color: #444;
      color: #b3b3b3;
      font-size: 12px;
    }
    @media only screen and (max-width: 600px) {
      table {
        width: 100% !important;
      }
    }
  </style>
  <title>Bank Notification</title>
</head>
<body>
  <table role="presentation">
    <!-- Header Section -->
    <tr class="header">
      <td>
        <h1>TFMBank</h1>
      </td>
    </tr>

    <!-- Main Content -->
    <tr>
      <td class="main-content">
        <h2>Hello, ${name}</h2>
      <p  style="color:black;">${message} </p>
        <p>If you have any questions, feel free to <a href="mailto:tfmbank1@gmail.com">contact us</a>.</p>
      </td>
    </tr>

    <!-- Footer Section -->
    <tr class="footer">
      <td>
        <p>© 2024 Your Bank. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
   
 
    `
}
export default createHTMLTemplate