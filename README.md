A live demo is avaible at
[https://farmville-da0a6.firebaseapp.com/](https://farmville-da0a6.firebaseapp.com/)

### Build info

`npm start` runs the app in development mode.

`npm run build` builds the app for production to the `build` folder.

### Notes

I load all data once, at the root of the app. I considered splitting the json
files into individual files for each farm and site, to simulate calls to an API;
but I decided it would look more realistic to preserve the state while
navigating the app.

Keeping all the state at the root of the app causes a lot of boilerplate code,
so I was planning to use Redux - but I didn't have time for it in the end.

Not all the fields of Farms and Sites are displayed, since it would be a lot of
repetitive code. Instead I focused on implementing more interesting things, like
the togglable nested side drawer, the date picker, and the editable list of
potential factors.
