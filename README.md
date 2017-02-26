<h1 align="center">
  <br>
  <a href="https://github.com/R3J3CT3D/EncryPass-Desktop"><img src="" alt="EncryPass" width="180" style= "margin-bottom: 1rem"></a>
  <br>
  EncryPass
  <br>
  <br>
</h1>


<h4 align="center">Change your password with the same.</h4>

<br>

**EncryPass** is an innovative cross-platform application that simplifies secure password generation. It allow you
to keep the same password but always different.

<br>

## Table of content

- [Downloads](#downloads)
- [Build](#build)
    - [Tests](#tests)
    - [Build](#builds)
- [Screenshots](#sreens)
    - [Extension](#extension)
    - [Database](#database)
- [Status](#status)
    - [Upload the page tree file](#upload-the-page-tree-file)
    - [Go to the import view](#go-to-the-import-view)
    - [Import the uploaded page tree file](#import-the-uploaded-page-tree-file)
- [Story](#story)

<br>

## Downloads

All prebuilt binaries for all major platforms are available under
[releases](https://github.com/R3J3CT3D/EncryPass-Desktop/releases/latest).

EncryPass is also available for [Android](https://github.com/R3J3CT3D/EncryPass-Android) and 
for [IOS](https://github.com/R3J3CT3D/EncryPass-IOS).

<br>

## Build

If you want, you can also build EncryPass directly from source.

First, clone the repository
```bash
$ git clone git@github.com:R3J3CT3D/EncryPass-Desktop.git
```
Go into the cloned directory
```bash
$ cd EncryPass-Desktop
```

### Tests

Run the project
```bash
$ sudo npm start
```

To build, use **electron-packager**
See documentation [here](https://github.com/electron-userland/electron-packager).

### Builds

```bash
$ electron-packager .
```

<br>

## Screens
<p align="center">
  <img src="lel.png?raw=true" alt="" width="100%">
  <img src="lel.png?raw=true" alt="" width="40%">
</p>

<br>

## Status
This is the first version of EncryPass so currently the features are far away.
But I work on it everyday.

If you have any suggestions then please open an issue!

<br/>

## Story
I always wanted to use a different password for each site, unfortunatly, I always had a bad memory, so I create EncryPass, based on the Caesar encryption which encrypt a main password to generate a new.
