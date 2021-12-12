# Deployed link --> 
https://expo.dev/@shahin_zaman/uber-clone-mobileApp


# Run the app Locally

Clone the project. After Cloning --> 


If you are new to mobile development, the easiest way to get started is with Expo CLI. Expo is a set of tools built around React Native and, while it has many features,
https://docs.expo.dev/
the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator.

https://reactnative.dev/docs/environment-setup

Terminal :
		`npm install -g expo-cli`

we need to add sudo in mac (to give the Super-User write access permission)
to do so → 
		`sudo npm install -g expo-cli`

then give the mac user password (if it’s admin user)

note: when we want to install packages globally in mac then we need to add sudo (super user do) in front of that command for security purpose (& then we need to give the password)

to know about sudo in mac → 
https://superuser.com/questions/185441/what-does-the-sudo-command-do

	`expo init uber-clone`


<img src="https://firebasestorage.googleapis.com/v0/b/file-upload-15ce7.appspot.com/o/1.png?alt=media&token=6d877c82-56e4-44bf-8ee7-0c00b4bdcc60" alt="">


hit Enter → it’ll by default choose blank (the 1st selected one)


<img src="https://firebasestorage.googleapis.com/v0/b/file-upload-15ce7.appspot.com/o/2.png?alt=media&token=7754f91d-6ca8-41af-b6af-6589889ced00" alt="">


expo : 

expo is really good for many reasons - it allows you to easily test on your phone, on android before if you had to develop for ios you couldn’t actually do it easily unless you had a mac in fact you couldn't do it you needed to have xcode now with expo you can actually do this.
when you’re installing dependencies makes it so much easier.


<img src="https://firebasestorage.googleapis.com/v0/b/file-upload-15ce7.appspot.com/o/3.png?alt=media&token=19d5496b-9d44-46a7-a72a-a24c27bcb495" alt="">


then in Terminal → 

	`expo start`    /    `npm start`


it’ll open up the browser to select the various options of Simulator for development purpose :


<img src="https://firebasestorage.googleapis.com/v0/b/file-upload-15ce7.appspot.com/o/4.png?alt=media&token=0daa4efe-214f-4741-9204-9333d89e6c17" alt="">

note: don’t cut this it’ll host our app (keep it in the browser)


click on Run on iOS simulator → it’ll open up the iOS Simulator for the app with XCode :
we’ll see app Home-screen in the Simulator

Terminal :

<img src="https://firebasestorage.googleapis.com/v0/b/file-upload-15ce7.appspot.com/o/5.png?alt=media&token=99b81f16-8a6c-4239-84fb-8fd82377af67" alt="">

now, in the terminal → click i :

it’ll forcely start the app on the Simulator :


<img src="https://firebasestorage.googleapis.com/v0/b/file-upload-15ce7.appspot.com/o/6.png?alt=media&token=c7e1c8e7-1ace-4293-8393-3de21893ab6f" alt="">


then, refresh the Simulator → 

output :


<img src="https://firebasestorage.googleapis.com/v0/b/file-upload-15ce7.appspot.com/o/7.jpg?alt=media&token=9dc1772d-b7b3-4537-8faa-db15982ffa07" alt="" width="200" height="400">


### note: we have to create firebase-app, firebase config connection & firestore database also need to active Google APIs to get the app's database working with localhost...
