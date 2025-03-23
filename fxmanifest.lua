fx_version "cerulean"
lua54 'yes'
games { "gta5" }

author 'sobing4413'

description "RADAR & DISPATCH SYSTEM LIKE NOPIXEL 4.0"

version "1.0"

ui_page 'nui/dist/index.html'

server_scripts { "build/sv_*.js" }

client_scripts { "build/cl_*.js" }

shared_scripts { "build/config.js" }

files {
    "nui/dist/**/*",
}