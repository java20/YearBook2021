import { profiles } from "./data/profiles";

export function loadProfiles() {
	let ele = document.getElementById("profilePages");
	let markup;
	for (let i = 0; i < profiles.length; i++) {
		if (i % 4 == 0) {
			markup = `
      <div class="my-page page user_profile">
					<div class="user_profile__container">
						<figure class="user_profile__card">
							<img src="${profiles[i]["Add Image for your Profile Photo"]}" alt="${profiles[i]["Full Name"]}"
								class="user_profile__image" />
							<figcaption class="user_profile__name">${profiles[i]["Full Name"]}</figcaption>
						</figure>
						<figure class="user_profile__card">
							<img src="${profiles[i + 1]["Add Image for your Profile Photo"]}" alt="${profiles[i + 1]["Full Name"]}"
								class="user_profile__image" />
							<figcaption class="user_profile__name">${profiles[i + 1]["Full Name"]}</figcaption>
						</figure>
						<figure class="user_profile__card">
							<img src="${profiles[i + 2]["Add Image for your Profile Photo"]}" alt="${profiles[i + 2]["Full Name"]}"
								class="user_profile__image" />
							<figcaption class="user_profile__name">${profiles[i + 2]["Full Name"]}</figcaption>
						</figure>
						<figure class="user_profile__card">
							<img src="${profiles[i + 3]["Add Image for your Profile Photo"]}" alt="${profiles[i + 3]["Full Name"]}"
								class="user_profile__image" />
							<figcaption class="user_profile__name">${profiles[i + 3]["Full Name"]}</figcaption>
						</figure>
					</div>
				</div>`;
			ele.insertAdjacentHTML("beforeend", markup);
		}
	}
}
