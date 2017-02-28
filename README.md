## Electron-sample-app

Sample Electron app which includes tray, auto-launch, electron-packager for all the three platforms( Windows, Linux, Mac )

# Electron Packager

For Default build
```console

  "build": "electron-packager . Electron-sample-app"

```

For Linux build
```console

    "build-linux32": "electron-packager . Electron-sample-app --platform=linux  --arch=ia32"

    "build-linux64": "electron-packager . Electron-sample-app --platform=linux  --arch=x64"

```
For windows build
```console

	"build-mac": "electron-packager . Electron-sample-app --platform=darwin  --arch=x64"

    "build-win32": "electron-packager . Electron-sample-app --platform=win32  --arch=ia32"

```
For Mac build
```console

  "build-win64": "electron-packager . Electron-sample-app --platform=win32  --arch=x64"

```

# Run

electron is an npm module that contains pre-compiled versions of Electron.

If you’ve installed it globally with npm, then you will only need to run the following in your app’s source directory:

```console
	electron .
```

If you’ve installed it locally, then run:

macOS
```console
	./node_modules/.bin/electron .
	or
	./Electron.app/Contents/MacOS/Electron your-app/
```
Linux 
```console
	./node_modules/.bin/electron .
	or
	./electron/electron your-app/
```

Windows
```console
	.\node_modules\.bin\electron .
	or
	.\electron\electron.exe your-app\

```

# Try this Sample

```console

	# Clone the repository
	git clone git@github.com:linkRachit/Electron-sample-app.git
	# Go into the repository
	cd Electron-sample-app
	# Install dependencies
	npm install
	# Run the app
	npm start

```

