# Dentist portal
It's an example on Vue.js project.

- [See it live!](https://kahore.github.io/ex-dentist/)

This project is built with 
- [vue-cli](https://github.com/vuejs/vue-cli)
- [vuex](https://github.com/vuejs/vuex)
- [vue router](https://github.com/vuejs/vue-router)
- [vuelidate](https://github.com/vuelidate/vuelidate)
- [bootstrap 4](https://getbootstrap.com/)
- [firebase](https://firebase.google.com/)

## Accordance with TODO list we have a 4 user type
1. Dentist (add practice, patients, create case order)
2. Lab (update case order)
3. Clinisian (update case order, can alert patient)
4. Admin (can create Lab and Clinician user)
 #### Please note, register possible only for Dentist
 
 For demo I already create several account, so you you can login to see how it all works
 
| Login                  | Password              |
| ---------------------- | --------------------- |
| dentist1@example.com   | 123456                |
| dentist2@example.com   | 123456                |
| dentist3@example.com   | 123456                |
| lab1@example.com       | 123456                |
| clinician1@example.com | 123456                |
| admin@example.com      | 123456                |

## Features
- All forms under client-side validation
- Online update individual statistic, based on action in app
- Highlight case order depends on what type of users attention actually required
- Chat-like internal communication for each order
- Create user account for firebase login inside app
- Individual thumbnail to identify the user type uploading the files (Actually file name only, cause it's a demo)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
