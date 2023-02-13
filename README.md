# **Pomodoro Timer**

<img src="https://i.imgur.com/cUTQHb6.png" height=500/>

## **About**

---

This project is a SPA(Single Page Application) that was made using React along with TypeScript and other libraries, such as React-Hook-Form, Zod, React-router-dom and date-fns. There are two "pages" which is the timer itself and the history, where keep dynamically the register of all your cycles information and their status (`finished`,` interrupted` or `in progress`) using the localStorage.
<br/>

In this application i could practice and learn more about providers, useReduce, context API and localStorage. The `CycleContext.tsx` is the context where the state which controlls the cycles along with the `reducers` folder, where all the functions is storage, all integrated with TypeScript.

## **Run locally**

---

### Yarn

```bash
  yarn
  yarn dev
```

### NPM

```bash
  npm i
  npm start
```

## **Core Techonlogies**

---

<div style="display: flex;gap: 1rem; margin-top: 10px;">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@8.2.0/icons/react.svg" alt="" width="50" title="React">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@8.5.0/icons/typescript.svg" alt="" width="50" title="TypeScript">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@8.2.0/icons/styledcomponents.svg" alt=""  width="50" title="styled-components">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@8.5.0/icons/vite.svg" alt="" width="50" title="Vite">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@8.5.0/icons/reacthookform.svg" alt="" width="50" title="React-hook-form">
  <img src="https://cdn.jsdelivr.net/npm/simple-icons@8.5.0/icons/reactrouter.svg" alt="" width="50" title="React-Router">
</div>
