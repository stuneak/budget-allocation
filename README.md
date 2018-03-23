## Budget allocation

The project is missing a configuration file database `./server/config.js`:

```js
const config = {
  secret: 'yousecretkey',
  url: 'mongodb://*', // your database
};

export default config;
```

### Development:

Frontend: `npm run dev:app` (port:3000)

Backend: `npm run dev:server` (port:3001)

To run the app: `npm run dev` to launch HMR (port:3000)

### Production:

To build app: `npm run build`

### Features

* [x] Registration, authorization, setting a budget
* [x] Introduction shopping list
* [ ] Purchases can be allocated to different categories
* [ ] Chart of expenditures (for the week, month, year)
* [ ] The application warns if the account remains 10 percent of the budget
* [ ] The page with the user settings (email, name, surname, password change, etc.)
* [ ] Multi-user access with association multiple users in the family

### The tools used in the development

* webpack: 4.2.0
* react: 16.2.0 (store: redux, side effects: redux-saga, styles: styled-components, ui: antd)
* express: 4.16.3 (mongoose, passport)
