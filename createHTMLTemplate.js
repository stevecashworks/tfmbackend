const createHTMLTemplate=({name, message})=>{
    return`
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Welcome Email</title>
    <style>
        /* General styles for the body and container */
        body {
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
            font-family: Arial, sans-serif;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
        }
        .header img {
            width: 120px;
        }
        .header h1 {
            color: #333333;
            font-size: 24px;
            margin: 0;
            padding: 10px 0;
        }
        .content {
            text-align: center;
            padding: 20px 0;
        }
        .content p {
            font-size: 16px;
            color: #666666;
            line-height: 1.6;
        }
        .button-container {
            text-align: center;
            margin-top: 20px;
        }
        .btn-success {
            background-color: #28a745;
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            display: inline-block;
            cursor: pointer;
        }
        .btn-success:hover {
            background-color: #218838;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #999999;
        }
        /* Responsive Design */
        @media only screen and (max-width: 600px) {
            .container {
                padding: 15px;
            }
            .header h1 {
                font-size: 20px;
            }
            .content p {
                font-size: 14px;
            }
            .btn-success {
                font-size: 14px;
                padding: 8px 16px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header with logo and title -->
        <div class="header">
            <img src="gs://tfmbank-38ad9.appspot.com/logo1.png" alt="Company Logo">
            <h1>Welcome to Our Company!</h1>
        </div>

        <!-- Content section with a message -->
        <div class="content">
        <h5> dear {name}</h5>
            <p>
                Thank you for joining us! We're excited to have you as part of our growing community. At <strong>Our Company</strong>, we strive to provide the best services tailored to your needs. Feel free to explore and reach out if you have any questions.
            </p>

            <!-- Button -->
            <div class="button-container">
                <a href="https://your-link.com" class="btn-success">Get Started</a>
            </div>
        </div>

        <!-- Footer section -->
        <div class="footer">
            <p>
                &copy; 2024 TfmBank. All rights reserved.<br>
                
            </p>
        </div>
    </div>
</body>
</html>

    `
}
export default createHTMLTemplate