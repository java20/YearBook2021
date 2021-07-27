import "@babel/polyfill";

import { loadProfiles, loadQuotes } from "./profilecreate";
import { data } from "./data/data";

import { eventRender } from "./eventRender";
import { memoriesRender } from "./memoriesRender";
loadProfiles();
loadQuotes();
// window.data = data;

eventRender();
memoriesRender();
