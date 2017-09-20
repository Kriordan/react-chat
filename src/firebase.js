import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyD8APkKuKdmH-lCErp1ksW8oADHS625eIQ',
  authDomain: 'bloc-chat-5bb24.firebaseapp.com',
  databaseURL: 'https://bloc-chat-5bb24.firebaseio.com',
  projectId: 'bloc-chat-5bb24',
  storageBucket: 'bloc-chat-5bb24.appspot.com',
  messagingSenderId: '833273460634'
};
firebase.initializeApp(config);

export default firebase;
