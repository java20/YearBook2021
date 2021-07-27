/*
<div class="my-page page events">
<div class="events__container">
<figure class="events__figure events__figure--3-1">
<img src="./img/Event/AzharImages/img1.jpg" alt="" class="events__image" />
</figure>
<figure class="events__figure events__figure--3-2">
<img src="./img/Event/AzharImages/img2.jpeg" alt="" class="events__image" />
</figure>
<video class="events__video events__figure--3-3" autoplay muted controls loop>
<source src="./img/Memories/sohelimages/video1.mp4" type="video/mp4" />
</video>
</div>
</div>
<div class="my-page page events">
<div class="events__container">
<figure class="events__figure events__figure--2-1">
<img src="./img/Event/AzharImages/img2.jpeg" alt="" class="events__image" />
</figure>
<video class="events__video events__figure--2-2" autoplay muted controls loop>
<source src="./img/Memories/sohelimages/video1.mp4" type="video/mp4" />
</video>
</div>
</div>
<div class="my-page page events">
<div class="events__container">
<figure class="events__figure events__figure--1-1">
<img src="./img/Event/AzharImages/img1.jpg" alt="" class="events__image" />
</figure>
</div>
</div>
*/
import { data } from "./data/data";

const elementFigure = `
        <figure class="events__figure events__figure--#FIGURE-#FIGURENO">
            <img src="./img/Event/#USER_FOLDER/#USER_FILE" alt="event photo" class="events__image" />
        </figure>`;

const elementVideo = `
        <video class="events__video events__figure--#FIGURE-#FIGURENO" controls>
            <source src="./img/Event/#USER_FOLDER/#USER_FILE" type="video/mp4" />
        </video>`;

const elementMarkup = (figure, figureNo, folder, file) => {
	const element = !file.endsWith("mp4") ? elementFigure : elementVideo;
	// console.log(figure, figureNo, folder, file);

	return element
		.replace("#FIGURE", figure)
		.replace("#FIGURENO", figureNo)
		.replace("#USER_FOLDER", folder)
		.replace("#USER_FILE", file);
};

const two = (data) => {
	const element = !data[0][Object.keys(data[0])[0]].Event[0].endsWith("mp4") ? figure : video;

	data.map((el, indx) => {
		data[indx][Object.keys(el)].Event.filter((evtEl, evtIndx) => {
			const element = !evtEl.endsWith("mp4") ? figure : video;
			return element
				.replace("#FIGURE", "2")
				.replace("#FIGURENO", evtIndx + 1)
				.replace("#USER_FOLDER")
				.replace("#USER_FILE");
		});
	});

	const datamarkup = element
		.replace("#FIGURE", "1")
		.replace("#FIGURENO", "1")
		.replace("#USER_FOLDER", Object.keys(data[0])[0])
		.replace("#USER_FILE", data[0][Object.keys(data[0])[0]].Event[0]);

	const finalmarkup = `
        <div class="my-page page events">
            <div class="events__container">
            ${datamarkup}
            </div>
        </div>`;
};

export const eventRender = () => {
	// console.log(one([data[0]]));
	const events = document.querySelector("#events");

	const datamarkup = data
		.map((el, indx) => {
			const key = Object.keys(el)[0];
			const length = el[key].Event.length;
			let markup;

			if (length > 0 && length <= 3) {
				return el[key].Event.map((evtEl, evtIndx) => {
					return elementMarkup(length, evtIndx + 1, key, evtEl);
				});
			} else if (length > 3) {
				let range = 3;

				return el[key].Event.slice(range - 3, range).map((evtEl, evtIndx) => {
					return elementMarkup(3, evtIndx + 1, key, evtEl);
				});
			}
		})
		.filter((el) => el != undefined);

	const finalMarkup = `
	 	    <div class="my-page page events">
	        <div class="events__container">
            #DATAMARKUP
	        </div>
	    </div>`;
	events.insertAdjacentHTML(
		"beforeend",
		datamarkup.map((el) => {
			return finalMarkup.replace("#DATAMARKUP", el);
		}),
	);
};
