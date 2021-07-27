import { data } from "./data/data";

const elementFigure = `
        <figure class="events__figure events__figure--#FIGURE-#FIGURENO">
            <img src="./img/Memories/#USER_FOLDER/#USER_FILE" alt="event photo" class="events__image" />
        </figure>`;

const elementVideo = `
        <video class="events__video events__figure--#FIGURE-#FIGURENO" controls>
            <source src="./img/Memories/#USER_FOLDER/#USER_FILE" type="video/mp4" />
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

export const memoriesRender = () => {
	const memories = document.querySelector("#memories");

	const datamarkup = data
		.map((el, indx) => {
			const key = Object.keys(el)[0];
			const length = el[key].Memories.length;
			let markup;

			if (length > 0 && length <= 3) {
				return el[key].Memories.map((evtEl, evtIndx) => {
					return elementMarkup(length, evtIndx + 1, key, evtEl);
				});
			} else if (length > 3) {
				let range = 3;

				return el[key].Memories.slice(range - 3, range).map((evtEl, evtIndx) => {
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

	memories.insertAdjacentHTML(
		"beforeend",
		datamarkup.map((el) => {
			return finalMarkup.replace("#DATAMARKUP", el);
		}),
	);
};
