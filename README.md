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