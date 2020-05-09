import {createMenu} from './components/menu.js';
import {createListTask} from "./components/list.js";
import {createTask} from "./components/task.js";
import {createEditTask} from "./components/task-edit.js";
import {createButtonLoadMore} from "./components/load-more-button.js";
import {createFilterTemplate} from "./components/filter.js";
import {generateFilters} from "./mock/filter.js";

const COUNTTASK = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const menu = document.querySelector(`.main__control`);
const main = document.querySelector(`.main`);
render(menu, createMenu(), `beforeend`);
render(main, createFilterTemplate(generateFilters()), `beforeend`);
render(main, createListTask(), `beforeend`);
const boardTasks = document.querySelector(`.board__tasks`);
render(boardTasks, createEditTask(), `beforeend`);


new Array(COUNTTASK).fill(``).forEach(
    () => render(boardTasks, createTask(), `beforeend`)
);

const boardContainer = document.querySelector(`.board`);
render(boardContainer, createButtonLoadMore(), `beforeend`);
