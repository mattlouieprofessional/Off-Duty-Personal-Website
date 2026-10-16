
/*
  OFF/DUTY website settings.
  Edit these values to personalize your website.
*/

const settings = {
  instagramUsername: "YOUR_USERNAME",
  heroBio:
    "Cars, music, good food, new places, and making the most of life."
};

/*
  Add photos to your GitHub repository in a folder named "images".
  Then add each photo path and caption below.
  Example: { src: "images/wrx.jpg", caption: "Weekend drives." }
*/

const photos = [
  // { src: "images/wrx.jpg", caption: "Weekend drives." },
  // { src: "images/friends.jpg", caption: "Good people, good times." },
  // { src: "images/travel.jpg", caption: "Somewhere new." }
];

function setupInstagram() {
  const username = settings.instagramUsername.replace(/^@/, "").trim();

  if (!username || username === "YOUR_USERNAME") {
    return;
  }

  const url = "https://www.instagram.com/" +
    encodeURIComponent(username) + "/";

  document.getElementById("instagramLink").href = url;
  document.getElementById("bottomInstagram").href = url;
}

function setupBio() {
  const bio = document.getElementById("heroBio");

  if (bio && settings.heroBio) {
    bio.textContent = settings.heroBio;
  }
}

function setupGallery() {
  const gallery = document.getElementById("galleryGrid");

  if (!gallery || photos.length === 0) {
    return;
  }

  gallery.innerHTML = "";

  photos.forEach((photo) => {
    const item = document.createElement("figure");
    item.className = "gallery-item";

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.caption || "Personal gallery photo";
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.className = "gallery-caption";
    caption.textContent = photo.caption || "";

    item.appendChild(image);
    item.appendChild(caption);
    gallery.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupInstagram();
  setupBio();
  setupGallery();
});
