fx_version "cerulean"

games { "gta5" }

description "NoPixel exter_radar"

version "q.0"

ui_page 'nui/dist/index.html'

files {
    "nui/dist/**/*",
}

server_scripts { "build/sv_*.js" }
client_scripts { "build/cl_*.js" }
shared_scripts { "build/config.js" }
