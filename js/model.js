export const state = {
  data: {},
  theme: {},
};
state.theme = localStorage.getItem("theme") || 'white';

