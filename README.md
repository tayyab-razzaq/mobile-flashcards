# Udacity Mobile Flashcards

Mobile application (Android or iOS - or both) that allows users to study collections of flashcards.

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).


#### To get started developing right away:

* install all project dependencies with `npm install`

* start the development server with `npm start`


## Available Scripts

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start -- --reset-cache
```

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:


### Platforms Tested


* iOS
* Android


### Supporting Platforms


* iOS
* Android


### Database


To manage `AsyncStorage` database, we are using different helper methods.

`getDecks`: return all of the decks along with their titles, questions, and answers. 

`getDeck`: take in a single id argument and return the deck associated with that id. 

`saveDeckTitle`: take in a single title argument and add it to the decks. 

`addCardToDeck`: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 

`removeDeck`: take in a single title argument and remove it from the decks. 

