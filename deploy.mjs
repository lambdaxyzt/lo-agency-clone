import dotenv from 'dotenv'
import { deploy } from "@samkirkland/ftp-deploy";
dotenv.config()
console.log(process.env.FTP_HOST);
console.log(process.env.FTP_USER);
console.log(process.env.FTP_PASS);

async function deployMyCode() {
    console.log("🚚 Deploy started");
    await deploy({
        server:   process.env.FTP_HOST,
        username: process.env.FTP_USER,
        password: process.env.FTP_PASS,
        "local-dir":'./src/',
        "server-dir": "./public_html/websites/lo-agency-clone/"

    });
    console.log("🚀 Deploy done!");
}

deployMyCode();