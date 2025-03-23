# 🚔 Dispatch & Radar System
## Framework: QBCore & ESX
### Design Inspired By: NoPixel 4.0

## 📖 Overview
The Dispatch & Radar System is designed to enhance law enforcement gameplay in FiveM servers using QBCore or ESX. This system includes a real-time dispatch, speed radar, and job-restricted access for police officers.

## 🚨 Key Features:
✔️ Supports QBCore, ESX, and NP-Base
✔️ Modern speed radar with accurate vehicle tracking
✔️ Real-time dispatch system for police units
✔️ Configurable speed units: MPH / KMH
✔️ Fully customizable via config.js
✔️ Access restricted to police jobs only

## 📂 Installation Guide
### 1️⃣ Download & Setup
Clone or Download the Required Repositories:

NPX (Mandatory Dependency)

Dispatch & Radar script

Move the Scripts to Your Server Folder:

Place both scripts inside your resources/ directory.

### 2️⃣ Configure config.js
Before running the script, ensure the configuration matches your server's requirements:

js
Copy
Edit
```
Config = {
    FrameWork: "qbcore", // Options: qbcore, esx, np-base
    SpeedType: "mph", // Options: mph, kmh
    PoliceJobs: { // Define police jobs with access
        ['police']: true,
        ['lspd']: true,
        ['bcso']: true,
        ['sast']: true,
        ['sasp']: true,
        ['doc']: true,
    }
}
```
### 3️⃣ Start the Script
Add the following lines to your server.cfg to ensure the scripts start correctly:

ini
Copy
Edit
ensure npx
ensure dispatch-radar
Then, restart your server and verify that everything functions properly.

🔗 Dependencies
This script requires the NPX Framework to function correctly. Ensure that you have it installed before using the Dispatch & Radar System.

NPX Repository

Additionally, your server must be running QBCore or ESX for compatibility.

🎯 Future Updates
🚀 Planned features for upcoming updates:

GPS Unit Integration: Display real-time police unit locations

Radar Speed Alerts: Notify officers when a vehicle exceeds speed limits

Custom UI & Themes: Allow admins to modify radar & dispatch visuals

🛠️ Support & Contributions
If you encounter any issues or have suggestions for improvements, feel free to open an issue on this repository or reach out via Discord.

💡 Contributions are welcome! If you'd like to contribute, please submit a Pull Request with tested changes.

🚓 Stay safe and enjoy a more immersive police experience! 🚓
