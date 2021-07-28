import { profiles } from "./data/profiles";

export function loadProfiles() {
	let ele = document.getElementById("profilePages");
	let ele2 = document.getElementById('profilepageindex');
	let markup;
	let profilenames;
	for (let i = 0; i < profiles.length; i++) {
		if(i < 24){
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
					</div>
	`
		ele.insertAdjacentHTML("beforeend",markup);
		}
}
else if(i<=24){
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
						</div>
					</div>
	`
		ele.insertAdjacentHTML("beforeend",markup);
}
  }
}

export function loadQuotes(){
  let ele = document.getElementById('quotespages');
  let color_pallete = ['#e68200', '#8b7add', '#e67072', '#6bcbef', '#91ab01', '#00b33e', '#72cc92']
  let markup;
  for (let i = 0; i < profiles.length; i++) {
    markup = `
    <div class='quotes__container'>
      <div>
        <p class='quotes__container__author'>${profiles[i]["Full Name"]}</p>
        <p>${profiles[i]["Small Message or Quotes"]}</p>
      </div>
    </div>
    `
    ele.insertAdjacentHTML("beforeend",markup);

    document.getElementsByClassName('quotes__container__author')[i].style.color = color_pallete[i%7];
  }

}


