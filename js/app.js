import "@babel/polyfill";

import { loadProfiles } from "./profilecreate";
import { data } from "./data/data";

import { eventRender } from "./eventRender";
import { memoriesRender } from "./memoriesRender";
loadProfiles();

// window.data = data;

eventRender();
memoriesRender();
