//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝐑𝐨𝐰𝐝𝐲 𝐦𝐝 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：3.0                                                       //

// ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗
//██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║
//██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║
//██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║
//╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║
// ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝
                                            
// █████╗ ███╗   ██╗     ██╗██╗   ██╗         
//██╔══██╗████╗  ██║     ██║██║   ██║         
//███████║██╔██╗ ██║     ██║██║   ██║         
//██╔══██║██║╚██╗██║██   ██║██║   ██║         
//██║  ██║██║ ╚████║╚█████╔╝╚██████╔╝         
//╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝  ╚═════╝          
//                                            
//███╗   ███╗██████╗                          
//████╗ ████║██╔══██╗                         
//██╔████╔██║██║  ██║                         
//██║╚██╔╝██║██║  ██║                         
//██║ ╚═╝ ██║██████╔╝                         
//╚═╝     ╚═╝╚═════╝                          
//                                            
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : ROWDY MD
//  * @author : Mr dakshina
//  * @youtube : https://www.youtube.com/@gamingrash2006
//  * @description : ROWDY MD, A Multi-functional WhatsApp bot created by Mr Dakshina.
//*
//*
//base by Mr dakshina
//GitHub: @Mrdakshina
//WhatsApp: +94769615736
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@gamingrash2006
//   * Created By Github: Mrdakshina.
//   * Credit To Mr dakshina
//   * © 2024 ROWDY MD-V7.
// ⛥┌┤
// */
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "your session_id here",
};
