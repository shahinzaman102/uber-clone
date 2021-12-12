If you are new to mobile development, the easiest way to get started is with Expo CLI. Expo is a set of tools built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator.

https://reactnative.dev/docs/environment-setup

Terminal :
npm install -g expo-cli
we need to add sudo in mac (to give the Super-User write access permission)
to do so → 
		sudo npm install -g expo-cli
then give the mac user password (if it’s admin user)

note: when we want to install packages globally in mac then we need to add sudo (super user do) in front of that command for security purpose (& then we need to give the password)

to know about sudo in mac → 
https://superuser.com/questions/185441/what-does-the-sudo-command-do

expo init uber-clone


hit Enter → it’ll by default choose blank (the 1st selected one)


expo : 
expo is really good for many reasons - it allows you to easily test on your phone, on android before if you had to develop for ios you couldn’t actually do it easily unless you had a mac in fact you couldn't do it you needed to have xcode now with expo you can actually do this.
when you’re installing dependencies makes it so much easier.


then in Terminal → 

expo start 	 /    npm start

it’ll open up the browser to select the various options of Simulator for development purpose :

note: don’t cut this it’ll host our app (keep it in the browser)

click on Run on iOS simulator → it’ll open up the iOS Simulator for the app with XCode :
we’ll see app Home-screen in the Simulator

Terminal :

now, in the terminal → click i :
it’ll forcely start the app on the Simulator :


