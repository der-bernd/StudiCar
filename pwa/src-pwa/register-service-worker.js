import { register } from 'register-service-worker'

import { Notify } from 'quasar'

import Vue from 'vue'
import Vuex from 'vuex'

import store from '../src/store'

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready (/* registration */) {
    if (process.env.DEV) {
      console.log('Service worker is active.')

    }
  },

  registered (registration) {
    if (process.env.DEV) {
      console.log('Service worker has been registered.')
      /* alert('will be updated') */
      registration.update()
    }
  },

  cached (/* registration */) {
    if (process.env.DEV) {
      console.log('Content has been cached for offline use.')
    }
  },

  updatefound (/* registration */) {
    if (process.env.DEV) {
      console.log('New content is downloading.')
    }
  },

  updated (registration) {

    if (process.env.DEV) {
      console.log('New content is available; please refresh.')
      /* alert('please refresh') */
      store.commit('setOldVersionRunning', true)
    }
    // else finalReload(registration)
  },

  offline () {
    if (process.env.DEV) {
      console.log('No internet connection found. App is running in offline mode.')
    }
  },

  error (err) {
    if (process.env.DEV) {
      console.error('Error during service worker registration:', err)
    }
  }
})

function hardReload () {
  /* var script = document.createElement("script");
  script.src = "SCRIPT.js?ver=" + (new Date()).getTime();
  document.body.appendChild(script); */
  /* location.reload() */
}