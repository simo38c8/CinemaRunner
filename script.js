let mobileMenubutton = document.querySelector("#mobile-menu-button");
let mobileMenuClosebutton = document.querySelector("#close-menu-button");

let comfortNumber = null;
let snackNumber = null;
let priceNumber = null;

mobileMenubutton.addEventListener("click", openMobileMenu);
mobileMenuClosebutton.addEventListener("click", closeMobileMenu);

function openMobileMenu() {
  document.querySelector("#mobile-menu").style.display = "grid";
}

function closeMobileMenu() {
  document.querySelector("#mobile-menu").style.display = "none";
}

(function getMovieList() {
  fetch("./cinemas.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document
        .querySelector("#sort-by-overall-container")
        .addEventListener("click", () => {
          sortByOverallRating(data);
        });

      document
        .querySelector("#sort-by-comfort-container")
        .addEventListener("click", () => {
          sortByOComfortRating(data);
        });

      document
        .querySelector("#sort-by-snacks-container")
        .addEventListener("click", () => {
          sortBySnackRating(data);
        });

      document
        .querySelector("#sort-by-price-container")
        .addEventListener("click", () => {
          sortByPriceRating(data);
        });

      function sortByPriceRating(data) {
        data.sort((a, b) => {
          return a.priceRating - b.priceRating;
        });
        console.log("done");
        showMovies();
      }

      function sortBySnackRating(data) {
        data.sort((a, b) => {
          return a.SnackRating - b.SnackRating;
        });
        console.log("done");
        showMovies();
      }

      function sortByOComfortRating(data) {
        data.sort((a, b) => {
          return a.comfortRating - b.comfortRating;
        });
        console.log("done");
        showMovies();
      }

      function sortByOverallRating(data) {
        data.sort((a, b) => {
          return a.overallRating - b.overallRating;
        });
        console.log("done");
        showMovies();
      }
      showMovies();
      function showMovies() {
        document.querySelector("#list-container").innerHTML = "";

        for (i = 0; i < data.length; i++) {
          let content = ` <div class="cinema">
<p  style="background-color: ${data[i].overallColor}"  class="overall-rating">${data[i].overallRating}</p>
<p class="price-rating">${data[i].priceRating}</p>
<p class="snack-rating">${data[i].SnackRating}</p>
<p class="comfort-rating">${data[i].comfortRating}</p>
<a href="cinema-overview.html">
<img src="${data[i].image}" alt="" />
</a>
<div class="imperial-ratings-container">
  <h3>${data[i].name}</h3>
  <svg
    id="price"
    xmlns="http://www.w3.org/2000/svg"
    width="115.14mm"
    height="116.12mm"
    viewBox="0 0 326.38 329.15"
  >
    <title>circle_comfort</title>
    <g id="${data[i].comfortColor}">
      <path
        d="M220.46,77.92c2.89,14.34,11.1,14.8,20.85,13.14,22.74-3.87,45.49-7.75,68.3-11.14,15.8-2.35,18.34.5,16,16-2.66,18-2.78,18.13-20.76,20.48l-30.36,3.94c.4,6.62.76,12.66,1.15,19.2l42.54-1.9q.63,2.63,1.28,5.26c-4.29,2.18-8.39,5.67-12.9,6.34-25.93,3.82-51.94,7.13-78,10.17-4.12.48-8.51-1.32-15.16-2.48,12.64-14.48,28.36-9.18,42.3-14.44-.45-5.5-.93-11.49-1.58-19.52-8.87,1.16-16.87,2-24.78,3.28-9.64,1.59-16.65-1.42-21.58-10.1-11.2-19.7-24.1-38.57-33.58-59-6-13-7.6-28.23-10.32-42.62C162.35,6.23,167.2.39,175.39,0c7.89-.35,13.64,3.42,15.66,12.54a289.93,289.93,0,0,0,10.78,36.7c3.83,10.5,11.62,14.25,23.32,12,15.71-3.08,31.73-4.61,47.64-6.66,6.07-.78,13.29-.88,13,7.12-.11,3.17-6.62,8.07-10.81,8.81C257.37,73.61,239.51,75.45,220.46,77.92Z"
        style="fill: #fff"
      />
      <path
        id="line2"
        d="M156.64,329.15a145.39,145.39,0,0,1-55-10.66,10,10,0,0,1-5.27-13.73h0a10,10,0,0,1,12.67-4.86,127,127,0,0,0,89.12,2.27,10,10,0,0,1,12.4,5.5h0a10,10,0,0,1-6,13.43,145.73,145.73,0,0,1-48,8"
      />
      <path
        id="line3"
        d="M75.32,305.94A146.18,146.18,0,0,1,10,224.49a10,10,0,0,1,7.16-12.81h0a10,10,0,0,1,11.86,6.62,126.2,126.2,0,0,0,56.47,70.44,10,10,0,0,1,3.87,13h0A10,10,0,0,1,75.32,305.94Z"
      />
      <path
        id="line5"
        d="M44.8,74.2h0a10,10,0,0,1-1.37-14.53,145.43,145.43,0,0,1,98.42-48.4,10,10,0,0,1,10.8,10h0a10,10,0,0,1-9.21,10A125.62,125.62,0,0,0,58.31,73,10,10,0,0,1,44.8,74.2Z"
      />
      <path
        id="line4"
        d="M14.2,198.68A10,10,0,0,1,2,190.63a147.47,147.47,0,0,1-2-24.12A145.05,145.05,0,0,1,24.35,85.56,10,10,0,0,1,38.8,83.2h0a10,10,0,0,1,2.26,13.36A125.25,125.25,0,0,0,20,166.51a127.37,127.37,0,0,0,1.73,20.92,10,10,0,0,1-7.53,11.25Z"
      />
      <g id="line1">
        <path
          d="M217.58,303.68h0a10,10,0,0,1,4.53-12.8,126.56,126.56,0,0,0,68.17-112.36c0-1.08,0-2.14-.06-3.21V175l20-.55v.34c0,1.26.07,2.51.07,3.77a146.52,146.52,0,0,1-78.86,130.06A10,10,0,0,1,217.58,303.68Z"
        />
        <path
          d="M299,164.42h0a10.17,10.17,0,0,0-8.7,10.22c1.33,32.6-10.88,64.9-34.19,89.77a132.25,132.25,0,0,1-28.3,22.85c-.91.55-1.83,1.08-2.76,1.6l-.3.17L234,305.45l.3-.17c1.08-.62,2.16-1.23,3.24-1.88A153.16,153.16,0,0,0,270.32,277c27-28.79,41.11-66.16,39.6-103.88A9.23,9.23,0,0,0,299,164.42Z"
        />
      </g>
    </g>
  </svg>
  <svg
    id="price"
    xmlns="http://www.w3.org/2000/svg"
    width="110.71mm"
    height="117.99mm"
    viewBox="0 0 313.81 334.47"
  >
    <title>circle_snacks</title>
    <g id="${data[i].SnackColor}">
      <g>
        <path
          d="M256,57.23c9.85,20.05,19.93,40.11,30,60,1.14,2.11,1.14,6.75,6.87,4.43,5-1.9,3-4.43,1.83-7.39-8.93-20.9-18.09-41.59-27-62.7-3-7.6-6.88-4.22-11.23-2.75-.46-2.11,1.38-3.8,2.06-5.7,2.52-6.12,8-11,13.75-11.19,6.41-.21,8.24,7.18,10.53,12.46,9.62,22,19.24,44.12,28.63,66.29,4.81,11.61,2.52,17.74-9.16,23.65-12.14,6.33-24.74,12.24-37.1,18.36-24.51,12.25-26.57,11.83-42.15-9.07-1.14-1.69-2.52-3.38-3.89-5.07C207,122.46,194.87,106.21,183,90c-6.64-9.29-5.73-13.51,4.81-16,8-1.9,16.26-2.11,24.51-4,7.79-1.9,16.26,1.68,21.3,10.76,8.93,16.26,20.38,31.46,30.69,46.87,1.37,2.32,2.29,6.12,6.41,4.22,4.35-1.9,1.15-4.85,0-7-8.93-18.16-17.86-36.32-27-54.47C236.1,55.75,234.49,49,257.4,48.78,252.13,50.89,254.65,54.27,256,57.23Zm-5.26,80.22q-20.28-30.39-40.54-60.8c-3.44-5.28-6.42-.63-9.39.21-3.67,1.27-4.13,3.38-1.84,6.34,14.43,19.21,28.63,38.63,43.06,57.84,1.15,1.27,2.06,3.17,4.58,3C249.61,142.73,253.5,141.68,250.76,137.45Z"
          style="fill: #fff"
        />
        <path
          d="M224.66,64.83c-5.73,1.69-11.69.21-14-4.22-3.2-6.34-7.55-12-11.45-18-4.12-6.12,2.75-15,11-14.36,4.58.43,8.24.22,12.36-2.11s8.94-1.26,12.37,2.33c3.21,3.37,4.12,7.81,1.61,10.76-3.9,4.44-5.73,8.45-2.52,13.09C233.59,58.92,230.84,63.14,224.66,64.83Z"
          style="fill: #fff"
        />
        <path
          d="M235.42,21.76c-5.5-5.7-1.38-9.71,3.43-12.67,5-3.16,26.8,4.22,29.55,9.5,1.37,2.75,1.83,6.12-.46,7.81a80.12,80.12,0,0,0-16.72,16.68c-1.83,2.32-5.5,2.32-9.62,1.27C245,31.89,244.81,31.89,235.42,21.76Z"
          style="fill: #fff"
        />
        <path
          d="M173.57,43.5c1.83-6.75,14-8.65,17.41-2.74,3.89,6.76,10.07,11.82,12.82,19.42,2.52,6.76-.68,8-5.49,7.6-6-.42-10.77-.63-16.49,2.33-6.19,3.16-13.29-2.54-13.06-9.72C172,55.75,172.2,49.63,173.57,43.5Z"
          style="fill: #fff"
        />
        <path
          d="M194,32.32c-.69,1.68-2.06.84-3.67.84-9.16-.21-7.1-7.6-8.24-12C180.21,14,188,8,195.56,10.78c5.27,2.11,10.31,4.65,16.26,5.49,2.52.42,5.5,2.53,4.58,6.76C207.24,22.82,198.31,23.45,194,32.32Z"
          style="fill: #fff"
        />
        <path
          d="M219.38,0c5.73,0,8.7,4,12.6,6.76-4.13,3.38-3,9.92-6.87,12.45-3.67,2.33-3.9-4-6.88-5.27l-6.87-3.17c-1.83-.85-3.66-1.27-3.2-3.17C210,2.33,213.88-.2,219.38,0Z"
          style="fill: #fff"
        />
      </g>
      <path
        id="line2"
        d="M156.64,334.47a145.2,145.2,0,0,1-55-10.66,10,10,0,0,1-5.27-13.72h0a10,10,0,0,1,12.67-4.86,127.12,127.12,0,0,0,89.12,2.28,10,10,0,0,1,12.4,5.5h0a10,10,0,0,1-6,13.43,145.73,145.73,0,0,1-48,8"
      />
      <path
        id="line3"
        d="M75.32,311.26A146.15,146.15,0,0,1,10,229.81,10,10,0,0,1,17.2,217h0a10,10,0,0,1,11.86,6.62,126.2,126.2,0,0,0,56.47,70.44,10,10,0,0,1,3.87,13h0A10,10,0,0,1,75.32,311.26Z"
      />
      <path
        id="line5"
        d="M44.8,79.52h0A10,10,0,0,1,43.42,65a145.43,145.43,0,0,1,98.42-48.4,10,10,0,0,1,10.8,10h0a10,10,0,0,1-9.21,10A125.62,125.62,0,0,0,58.31,78.33,10,10,0,0,1,44.8,79.52Z"
      />
      <path
        id="line4"
        d="M14.2,204A10,10,0,0,1,2,196a147.38,147.38,0,0,1-2-24.12,145.05,145.05,0,0,1,24.35-81A10,10,0,0,1,38.8,88.52h0a10,10,0,0,1,2.26,13.36,125.25,125.25,0,0,0-21.06,70,127.28,127.28,0,0,0,1.73,20.92A10,10,0,0,1,14.2,204Z"
      />
      <g id="line1">
        <path
          d="M217.58,309h0a10,10,0,0,1,4.53-12.81,126.54,126.54,0,0,0,68.17-112.36c0-1.07,0-2.14-.06-3.21v-.35l20-.55v.35c0,1.25.07,2.5.07,3.76a146.52,146.52,0,0,1-78.86,130.06A10,10,0,0,1,217.58,309Z"
        />
        <path
          d="M299,169.74h0a10.17,10.17,0,0,0-8.7,10.22c1.33,32.6-10.88,64.9-34.19,89.78a132.56,132.56,0,0,1-28.3,22.85c-.91.55-1.83,1.07-2.76,1.59l-.3.17L234,310.77l.3-.17c1.08-.61,2.16-1.23,3.24-1.88a153.16,153.16,0,0,0,32.75-26.45c27-28.79,41.11-66.16,39.6-103.88A9.24,9.24,0,0,0,299,169.74Z"
        />
      </g>
    </g>
  </svg>
  <svg
    id="price"
    xmlns="http://www.w3.org/2000/svg"
    width="111mm"
    height="124.19mm"
    viewBox="0 0 314.65 352.03"
  >
    <title>circle_price</title>
    <g id="${data[i].PriceColor}">
      <path
        d="M290.74,177.61,265.43,189.1c-2.27-4.34-4.54-8.67-6.7-12.75-42.23,3.08-57.43-2.83-64.26-25.95l23-10.45c9.69,4.54,17.91,8.55,26.4,12.45.67-1.2,1.46-2.16,2.14-3.36l-16.15-35.57c-24,4.33-47.78,7.68-60.22-19.74-12.56-27.66,0-47.67,22.58-63.87-2.78-6.78-5.1-12.58-7.43-18.38L210.13,0l8.07,17.79c39.54-1,54.56,5.92,59.15,26.77L254.07,55.13c-7.36-4.11-13.51-7.57-19.55-10.79-.79.95-1.71,2.27-2.5,3.22,2.24,4.94,4.88,9.41,6.61,14.58,3.84,13.15,10.55,17.85,25.81,14.5,22.63-4.61,36.13,3,44.74,19.91,9.39,18.68,6.64,37.5-7.82,52.7-4.95,5.23-10.49,9.83-15.55,14.81C287.54,169.23,289.08,173.3,290.74,177.61Zm-17-39.37c10.13-7.28,13.59-15.11,8.83-24.27-4.66-8.91-13.06-9.26-22.28-5.38ZM216.32,83.58,203.66,55.67c-8.47,6.22-12.5,12.82-8,22.09C200.08,86.78,207.22,87.72,216.32,83.58Z"
        style="fill: #fff"
      />
      <path
        id="line2"
        d="M156.64,352a145.2,145.2,0,0,1-55-10.66,10,10,0,0,1-5.27-13.72h0a10,10,0,0,1,12.67-4.86,127.19,127.19,0,0,0,89.12,2.27,10,10,0,0,1,12.4,5.5h0a10,10,0,0,1-6,13.44,146,146,0,0,1-48,8"
      />
      <path
        id="line3"
        d="M75.32,328.83A146.18,146.18,0,0,1,10,247.38a10,10,0,0,1,7.16-12.82h0a10,10,0,0,1,11.86,6.63,126.2,126.2,0,0,0,56.47,70.44,10,10,0,0,1,3.87,13h0A10,10,0,0,1,75.32,328.83Z"
      />
      <path
        id="line5"
        d="M44.8,97.08h0a10,10,0,0,1-1.37-14.54,145.42,145.42,0,0,1,98.42-48.39,10,10,0,0,1,10.8,10h0a10,10,0,0,1-9.21,10A125.67,125.67,0,0,0,58.31,95.9,10,10,0,0,1,44.8,97.08Z"
      />
      <path
        id="line4"
        d="M14.2,221.56a10,10,0,0,1-12.21-8A147.56,147.56,0,0,1,0,189.4a145.05,145.05,0,0,1,24.35-80.95,10,10,0,0,1,14.45-2.36h0a10,10,0,0,1,2.26,13.36A125.25,125.25,0,0,0,20,189.4a127.25,127.25,0,0,0,1.73,20.91,10,10,0,0,1-7.53,11.25Z"
      />
      <g id="line1">
        <path
          d="M217.58,326.57h0a10,10,0,0,1,4.53-12.8A126.56,126.56,0,0,0,290.28,201.4c0-1.08,0-2.14-.06-3.21v-.35l20-.56v.35c0,1.25.07,2.51.07,3.77a146.52,146.52,0,0,1-78.86,130.06A10,10,0,0,1,217.58,326.57Z"
        />
        <path
          d="M299,187.3h0a10.18,10.18,0,0,0-8.7,10.23c1.33,32.59-10.88,64.89-34.19,89.77a132.56,132.56,0,0,1-28.3,22.85c-.91.55-1.83,1.07-2.76,1.6l-.3.17L234,328.33l.3-.17c1.08-.61,2.16-1.22,3.24-1.87a153.16,153.16,0,0,0,32.75-26.45c27-28.8,41.11-66.16,39.6-103.88A9.24,9.24,0,0,0,299,187.3Z"
        />
      </g>
    </g>
  </svg>
</div>
</div>`;

          document
            .querySelector("#list-container")
            .insertAdjacentHTML("afterbegin", content);
        }
      }
    });
})();

let timeline1 = document.querySelector(".timeline1");
let timeline2 = document.querySelector(".timeline2");
let timeline3 = document.querySelector(".timeline3");
let timeline4 = document.querySelector(".timeline4");
let timeline5 = document.querySelector(".timeline5");
let reviewText1 = document.querySelector("#review-text1");
let reviewText2 = document.querySelector("#review-text2");
let reviewCircle = document.querySelector("#review-circle");
let reviewNextButton = document.querySelector("#review-next-button");
let reviewBackButton = document.querySelector("#review-back-button");

reviewBackButton.addEventListener("click", goBack);
reviewNextButton.addEventListener("click", goForward);

function goForward() {
  if (reviewText1.textContent == "Comfort") {
    nextReviewSubject2();
  } else if (reviewText1.textContent == "Snacks") {
    nextReviewSubject3();
  } else if (reviewText1.textContent == "Price") {
    nextReviewSubject4();
  } else if (reviewText1.textContent == "Comment") {
    nextReviewSubject5();
  } else if (reviewText1.textContent == "Overview") {
  }
}

function goBack() {
  if (reviewText1.textContent == "Comfort") {
    document.querySelector("#review-section").style.display = "none";
  } else if (reviewText1.textContent == "Snacks") {
    starterReview();
  } else if (reviewText1.textContent == "Price") {
    nextReviewSubject2();
  } else if (reviewText1.textContent == "Comment") {
    nextReviewSubject3();
  } else if (reviewText1.textContent == "Overview") {
    nextReviewSubject4();
  }
}

document
  .querySelector("#create-review button")
  .addEventListener("click", starterReview);

function starterReview() {
  reviewBackButton.textContent = "Exit";
  document.querySelector("#review-section").style.display = "block";
  timeline1.style.fill = "#c41d1d";
  timeline2.style.fill = "white";
  timeline3.style.fill = "white";
  timeline4.style.fill = "white";
  timeline5.style.fill = "white";
  reviewText1.textContent = "Comfort";
  reviewText2.textContent =
    "How comfortable did you find the seats in the cinema?";
  reviewCircle.innerHTML = `
    <title>circle_comfort</title>
  <g>
  <path id="lineFive" d="M44.8,74.2h0a10,10,0,0,1-1.37-14.53,145.43,145.43,0,0,1,98.42-48.4,10,10,0,0,1,10.8,10h0a10,10,0,0,1-9.21,10A125.62,125.62,0,0,0,58.31,73,10,10,0,0,1,44.8,74.2Z" />

  <path id="lineFour" d="M14.2,198.68A10,10,0,0,1,2,190.63a147.47,147.47,0,0,1-2-24.12A145.05,145.05,0,0,1,24.35,85.56,10,10,0,0,1,38.8,83.2h0a10,10,0,0,1,2.26,13.36A125.25,125.25,0,0,0,20,166.51a127.37,127.37,0,0,0,1.73,20.92,10,10,0,0,1-7.53,11.25Z" "/>
  <path id="lineThree" d="M75.32,305.94A146.18,146.18,0,0,1,10,224.49a10,10,0,0,1,7.16-12.81h0a10,10,0,0,1,11.86,6.62,126.2,126.2,0,0,0,56.47,70.44,10,10,0,0,1,3.87,13h0A10,10,0,0,1,75.32,305.94Z" />
  <path id="lineTwo" d="M156.64,329.15a145.39,145.39,0,0,1-55-10.66,10,10,0,0,1-5.27-13.73h0a10,10,0,0,1,12.67-4.86,127,127,0,0,0,89.12,2.27,10,10,0,0,1,12.4,5.5h0a10,10,0,0,1-6,13.43,145.73,145.73,0,0,1-48,8" /> 
  
  <foreignobject class="node" x="106" y="22" width="300" height="300">
                
  <p class="review-number">1</p>               
</foreignobject>
  <g id="lineOne">
  <path d="M217.58,303.68h0a10,10,0,0,1,4.53-12.8,126.56,126.56,0,0,0,68.17-112.36c0-1.08,0-2.14-.06-3.21V175l20-.55v.34c0,1.26.07,2.51.07,3.77a146.52,146.52,0,0,1-78.86,130.06A10,10,0,0,1,217.58,303.68Z" />
  <path d="M299,164.42h0a10.17,10.17,0,0,0-8.7,10.22c1.33,32.6-10.88,64.9-34.19,89.77a132.25,132.25,0,0,1-28.3,22.85c-.91.55-1.83,1.08-2.76,1.6l-.3.17L234,305.45l.3-.17c1.08-.62,2.16-1.23,3.24-1.88A153.16,153.16,0,0,0,270.32,277c27-28.79,41.11-66.16,39.6-103.88A9.23,9.23,0,0,0,299,164.42Z" />
  </g>
    <path d="M220.46,77.92c2.89,14.34,11.1,14.8,20.85,13.14,22.74-3.87,45.49-7.75,68.3-11.14,15.8-2.35,18.34.5,16,16-2.66,18-2.78,18.13-20.76,20.48l-30.36,3.94c.4,6.62.76,12.66,1.15,19.2l42.54-1.9q.63,2.63,1.28,5.26c-4.29,2.18-8.39,5.67-12.9,6.34-25.93,3.82-51.94,7.13-78,10.17-4.12.48-8.51-1.32-15.16-2.48,12.64-14.48,28.36-9.18,42.3-14.44-.45-5.5-.93-11.49-1.58-19.52-8.87,1.16-16.87,2-24.78,3.28-9.64,1.59-16.65-1.42-21.58-10.1-11.2-19.7-24.1-38.57-33.58-59-6-13-7.6-28.23-10.32-42.62C162.35,6.23,167.2.39,175.39,0c7.89-.35,13.64,3.42,15.66,12.54a289.93,289.93,0,0,0,10.78,36.7c3.83,10.5,11.62,14.25,23.32,12,15.71-3.08,31.73-4.61,47.64-6.66,6.07-.78,13.29-.88,13,7.12-.11,3.17-6.62,8.07-10.81,8.81C257.37,73.61,239.51,75.45,220.46,77.92Z" style="fill: #fff"/>
   
  
   
  </g>`;
  document.querySelector("#textarea-container").style.display = "none";
  document.querySelector("#review-circle2").style.display = "none";
  document.querySelector("#review-circle3").style.display = "none";
  setTimeout(function () {
    document.querySelector("#lineOne").addEventListener("click", reviewOne);
    document.querySelector("#lineTwo").addEventListener("click", reviewTwo);
    document.querySelector("#lineThree").addEventListener("click", reviewThree);
    document.querySelector("#lineFour").addEventListener("click", reviewFour);
    document.querySelector("#lineFive").addEventListener("click", reviewFive);
    document.querySelector(".review-number").textContent = comfortNumber;

    document.querySelector("#lineOne").style.fill = "";
    document.querySelector("#lineTwo").style.fill = "";
    document.querySelector("#lineThree").style.fill = "";
    document.querySelector("#lineFour").style.fill = "";
    document.querySelector("#lineFive").style.fill = "";

    if (comfortNumber == 1) {
      document.querySelector("#lineOne").style.fill = "#8a2c2a";
      document.querySelector("#lineTwo").style.fill = "";
      document.querySelector("#lineThree").style.fill = "";
      document.querySelector("#lineFour").style.fill = "";
      document.querySelector("#lineFive").style.fill = "";
    } else if (comfortNumber == 2) {
      document.querySelector("#lineOne").style.fill = "#8a2c2a";
      document.querySelector("#lineTwo").style.fill = "#8a2c2a";
      document.querySelector("#lineThree").style.fill = "";
      document.querySelector("#lineFour").style.fill = "";
      document.querySelector("#lineFive").style.fill = "";
    } else if (comfortNumber == 3) {
      document.querySelector("#lineOne").style.fill = "#ffb800";
      document.querySelector("#lineTwo").style.fill = "#ffb800";
      document.querySelector("#lineThree").style.fill = "#ffb800";
      document.querySelector("#lineFour").style.fill = "";
      document.querySelector("#lineFive").style.fill = "";
    } else if (comfortNumber == 4) {
      document.querySelector("#lineOne").style.fill = "#45db00";
      document.querySelector("#lineTwo").style.fill = "#45db00";
      document.querySelector("#lineThree").style.fill = "#45db00";
      document.querySelector("#lineFour").style.fill = "#45db00";
      document.querySelector("#lineFive").style.fill = "";
    } else if (comfortNumber == 5) {
      document.querySelector("#lineOne").style.fill = "#45db00";
      document.querySelector("#lineTwo").style.fill = "#45db00";
      document.querySelector("#lineThree").style.fill = "#45db00";
      document.querySelector("#lineFour").style.fill = "#45db00";
      document.querySelector("#lineFive").style.fill = "#45db00";
    }

    function reviewOne() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#8a2c2a";
      svgParent.querySelector("#lineTwo").style.fill = "";
      svgParent.querySelector("#lineThree").style.fill = "";
      svgParent.querySelector("#lineFour").style.fill = "";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">1</p>`;
      comfortNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewTwo() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#8a2c2a";
      svgParent.querySelector("#lineTwo").style.fill = "#8a2c2a";
      svgParent.querySelector("#lineThree").style.fill = "";
      svgParent.querySelector("#lineFour").style.fill = "";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">2</p>`;
      comfortNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewThree() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#ffb800";
      svgParent.querySelector("#lineTwo").style.fill = "#ffb800";
      svgParent.querySelector("#lineThree").style.fill = "#ffb800";
      svgParent.querySelector("#lineFour").style.fill = "";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">3</p>`;
      comfortNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewFour() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#45db00";
      svgParent.querySelector("#lineTwo").style.fill = "#45db00";
      svgParent.querySelector("#lineThree").style.fill = "#45db00";
      svgParent.querySelector("#lineFour").style.fill = "#45db00";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">4</p>`;
      comfortNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewFive() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#45db00";
      svgParent.querySelector("#lineTwo").style.fill = "#45db00";
      svgParent.querySelector("#lineThree").style.fill = "#45db00";
      svgParent.querySelector("#lineFour").style.fill = "#45db00";
      svgParent.querySelector("#lineFive").style.fill = "#45db00";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">5</p>`;
      comfortNumber = svgParent.querySelector(".review-number").textContent;
    }
  }, 1);
}

function nextReviewSubject2() {
  reviewBackButton.textContent = "Back";
  timeline1.style.fill = "#c41d1d";
  timeline2.style.fill = "#c41d1d";
  timeline3.style.fill = "white";
  timeline4.style.fill = "white";
  timeline5.style.fill = "white";
  reviewText1.textContent = "Snacks";
  reviewText2.textContent = "how was the selection of the snacks?";
  reviewCircle.innerHTML = `
    <g>
      <g>
        <path d="M256,57.23c9.85,20.05,19.93,40.11,30,60,1.14,2.11,1.14,6.75,6.87,4.43,5-1.9,3-4.43,1.83-7.39-8.93-20.9-18.09-41.59-27-62.7-3-7.6-6.88-4.22-11.23-2.75-.46-2.11,1.38-3.8,2.06-5.7,2.52-6.12,8-11,13.75-11.19,6.41-.21,8.24,7.18,10.53,12.46,9.62,22,19.24,44.12,28.63,66.29,4.81,11.61,2.52,17.74-9.16,23.65-12.14,6.33-24.74,12.24-37.1,18.36-24.51,12.25-26.57,11.83-42.15-9.07-1.14-1.69-2.52-3.38-3.89-5.07C207,122.46,194.87,106.21,183,90c-6.64-9.29-5.73-13.51,4.81-16,8-1.9,16.26-2.11,24.51-4,7.79-1.9,16.26,1.68,21.3,10.76,8.93,16.26,20.38,31.46,30.69,46.87,1.37,2.32,2.29,6.12,6.41,4.22,4.35-1.9,1.15-4.85,0-7-8.93-18.16-17.86-36.32-27-54.47C236.1,55.75,234.49,49,257.4,48.78,252.13,50.89,254.65,54.27,256,57.23Zm-5.26,80.22q-20.28-30.39-40.54-60.8c-3.44-5.28-6.42-.63-9.39.21-3.67,1.27-4.13,3.38-1.84,6.34,14.43,19.21,28.63,38.63,43.06,57.84,1.15,1.27,2.06,3.17,4.58,3C249.61,142.73,253.5,141.68,250.76,137.45Z" style="fill: #fff"/>
        <path d="M224.66,64.83c-5.73,1.69-11.69.21-14-4.22-3.2-6.34-7.55-12-11.45-18-4.12-6.12,2.75-15,11-14.36,4.58.43,8.24.22,12.36-2.11s8.94-1.26,12.37,2.33c3.21,3.37,4.12,7.81,1.61,10.76-3.9,4.44-5.73,8.45-2.52,13.09C233.59,58.92,230.84,63.14,224.66,64.83Z" style="fill: #fff"/>
        <path d="M235.42,21.76c-5.5-5.7-1.38-9.71,3.43-12.67,5-3.16,26.8,4.22,29.55,9.5,1.37,2.75,1.83,6.12-.46,7.81a80.12,80.12,0,0,0-16.72,16.68c-1.83,2.32-5.5,2.32-9.62,1.27C245,31.89,244.81,31.89,235.42,21.76Z" style="fill: #fff"/>
        <path d="M173.57,43.5c1.83-6.75,14-8.65,17.41-2.74,3.89,6.76,10.07,11.82,12.82,19.42,2.52,6.76-.68,8-5.49,7.6-6-.42-10.77-.63-16.49,2.33-6.19,3.16-13.29-2.54-13.06-9.72C172,55.75,172.2,49.63,173.57,43.5Z" style="fill: #fff"/>
        <path d="M194,32.32c-.69,1.68-2.06.84-3.67.84-9.16-.21-7.1-7.6-8.24-12C180.21,14,188,8,195.56,10.78c5.27,2.11,10.31,4.65,16.26,5.49,2.52.42,5.5,2.53,4.58,6.76C207.24,22.82,198.31,23.45,194,32.32Z" style="fill: #fff"/>
        <path d="M219.38,0c5.73,0,8.7,4,12.6,6.76-4.13,3.38-3,9.92-6.87,12.45-3.67,2.33-3.9-4-6.88-5.27l-6.87-3.17c-1.83-.85-3.66-1.27-3.2-3.17C210,2.33,213.88-.2,219.38,0Z" style="fill: #fff"/>
      </g>
      <path id="lineFive" d="M44.8,79.52h0A10,10,0,0,1,43.42,65a145.43,145.43,0,0,1,98.42-48.4,10,10,0,0,1,10.8,10h0a10,10,0,0,1-9.21,10A125.62,125.62,0,0,0,58.31,78.33,10,10,0,0,1,44.8,79.52Z" />
      <path id="lineFour" d="M14.2,204A10,10,0,0,1,2,196a147.38,147.38,0,0,1-2-24.12,145.05,145.05,0,0,1,24.35-81A10,10,0,0,1,38.8,88.52h0a10,10,0,0,1,2.26,13.36,125.25,125.25,0,0,0-21.06,70,127.28,127.28,0,0,0,1.73,20.92A10,10,0,0,1,14.2,204Z"/>
      <path id="lineThree" d="M75.32,311.26A146.15,146.15,0,0,1,10,229.81,10,10,0,0,1,17.2,217h0a10,10,0,0,1,11.86,6.62,126.2,126.2,0,0,0,56.47,70.44,10,10,0,0,1,3.87,13h0A10,10,0,0,1,75.32,311.26Z" />
      <path id="lineTwo" d="M156.64,334.47a145.2,145.2,0,0,1-55-10.66,10,10,0,0,1-5.27-13.72h0a10,10,0,0,1,12.67-4.86,127.12,127.12,0,0,0,89.12,2.28,10,10,0,0,1,12.4,5.5h0a10,10,0,0,1-6,13.43,145.73,145.73,0,0,1-48,8" />
      <foreignobject class="node" x="106" y="32" width="300" height="300">
                
      <p class="review-number">1</p>               
  </foreignobject>
      <g id="lineOne">
        <path d="M217.58,309h0a10,10,0,0,1,4.53-12.81,126.54,126.54,0,0,0,68.17-112.36c0-1.07,0-2.14-.06-3.21v-.35l20-.55v.35c0,1.25.07,2.5.07,3.76a146.52,146.52,0,0,1-78.86,130.06A10,10,0,0,1,217.58,309Z" />
        <path d="M299,169.74h0a10.17,10.17,0,0,0-8.7,10.22c1.33,32.6-10.88,64.9-34.19,89.78a132.56,132.56,0,0,1-28.3,22.85c-.91.55-1.83,1.07-2.76,1.59l-.3.17L234,310.77l.3-.17c1.08-.61,2.16-1.23,3.24-1.88a153.16,153.16,0,0,0,32.75-26.45c27-28.79,41.11-66.16,39.6-103.88A9.24,9.24,0,0,0,299,169.74Z" />
      </g>
    </g>`;
  document.querySelector("#textarea-container").style.display = "none";
  document.querySelector("#review-circle2").style.display = "none";
  document.querySelector("#review-circle3").style.display = "none";
  document.querySelector("#svg-container").style.display = "block";
  setTimeout(function () {
    document.querySelector("#lineOne").addEventListener("click", reviewOne);
    document.querySelector("#lineTwo").addEventListener("click", reviewTwo);
    document.querySelector("#lineThree").addEventListener("click", reviewThree);
    document.querySelector("#lineFour").addEventListener("click", reviewFour);
    document.querySelector("#lineFive").addEventListener("click", reviewFive);
    document.querySelector(".review-number").textContent = snackNumber;

    document.querySelector("#lineOne").style.fill = "";
    document.querySelector("#lineTwo").style.fill = "";
    document.querySelector("#lineThree").style.fill = "";
    document.querySelector("#lineFour").style.fill = "";
    document.querySelector("#lineFive").style.fill = "";

    if (snackNumber == 1) {
      document.querySelector("#lineOne").style.fill = "#8a2c2a";
      document.querySelector("#lineTwo").style.fill = "";
      document.querySelector("#lineThree").style.fill = "";
      document.querySelector("#lineFour").style.fill = "";
      document.querySelector("#lineFive").style.fill = "";
    } else if (snackNumber == 2) {
      document.querySelector("#lineOne").style.fill = "#8a2c2a";
      document.querySelector("#lineTwo").style.fill = "#8a2c2a";
      document.querySelector("#lineThree").style.fill = "";
      document.querySelector("#lineFour").style.fill = "";
      document.querySelector("#lineFive").style.fill = "";
    } else if (snackNumber == 3) {
      document.querySelector("#lineOne").style.fill = "#ffb800";
      document.querySelector("#lineTwo").style.fill = "#ffb800";
      document.querySelector("#lineThree").style.fill = "#ffb800";
      document.querySelector("#lineFour").style.fill = "";
      document.querySelector("#lineFive").style.fill = "";
    } else if (snackNumber == 4) {
      document.querySelector("#lineOne").style.fill = "#45db00";
      document.querySelector("#lineTwo").style.fill = "#45db00";
      document.querySelector("#lineThree").style.fill = "#45db00";
      document.querySelector("#lineFour").style.fill = "#45db00";
      document.querySelector("#lineFive").style.fill = "";
    } else if (snackNumber == 5) {
      document.querySelector("#lineOne").style.fill = "#45db00";
      document.querySelector("#lineTwo").style.fill = "#45db00";
      document.querySelector("#lineThree").style.fill = "#45db00";
      document.querySelector("#lineFour").style.fill = "#45db00";
      document.querySelector("#lineFive").style.fill = "#45db00";
    }

    function reviewOne() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#8a2c2a";
      svgParent.querySelector("#lineTwo").style.fill = "";
      svgParent.querySelector("#lineThree").style.fill = "";
      svgParent.querySelector("#lineFour").style.fill = "";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">1</p>`;
      snackNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewTwo() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#8a2c2a";
      svgParent.querySelector("#lineTwo").style.fill = "#8a2c2a";
      svgParent.querySelector("#lineThree").style.fill = "";
      svgParent.querySelector("#lineFour").style.fill = "";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">2</p>`;
      snackNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewThree() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#ffb800";
      svgParent.querySelector("#lineTwo").style.fill = "#ffb800";
      svgParent.querySelector("#lineThree").style.fill = "#ffb800";
      svgParent.querySelector("#lineFour").style.fill = "";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">3</p>`;
      snackNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewFour() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#45db00";
      svgParent.querySelector("#lineTwo").style.fill = "#45db00";
      svgParent.querySelector("#lineThree").style.fill = "#45db00";
      svgParent.querySelector("#lineFour").style.fill = "#45db00";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">4</p>`;
      snackNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewFive() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#45db00";
      svgParent.querySelector("#lineTwo").style.fill = "#45db00";
      svgParent.querySelector("#lineThree").style.fill = "#45db00";
      svgParent.querySelector("#lineFour").style.fill = "#45db00";
      svgParent.querySelector("#lineFive").style.fill = "#45db00";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">5</p>`;
      snackNumber = svgParent.querySelector(".review-number").textContent;
    }
  }, 1);
}

function nextReviewSubject3() {
  timeline1.style.fill = "#c41d1d";
  timeline2.style.fill = "#c41d1d";
  timeline3.style.fill = "#c41d1d";
  timeline4.style.fill = "white";
  timeline5.style.fill = "white";
  reviewText1.textContent = "Price";
  reviewText2.textContent =
    "how was the price range of the tickets and snacks?";
  reviewCircle.innerHTML = `
  <title>circle_price</title>
  <g>
    <path d="M290.74,177.61,265.43,189.1c-2.27-4.34-4.54-8.67-6.7-12.75-42.23,3.08-57.43-2.83-64.26-25.95l23-10.45c9.69,4.54,17.91,8.55,26.4,12.45.67-1.2,1.46-2.16,2.14-3.36l-16.15-35.57c-24,4.33-47.78,7.68-60.22-19.74-12.56-27.66,0-47.67,22.58-63.87-2.78-6.78-5.1-12.58-7.43-18.38L210.13,0l8.07,17.79c39.54-1,54.56,5.92,59.15,26.77L254.07,55.13c-7.36-4.11-13.51-7.57-19.55-10.79-.79.95-1.71,2.27-2.5,3.22,2.24,4.94,4.88,9.41,6.61,14.58,3.84,13.15,10.55,17.85,25.81,14.5,22.63-4.61,36.13,3,44.74,19.91,9.39,18.68,6.64,37.5-7.82,52.7-4.95,5.23-10.49,9.83-15.55,14.81C287.54,169.23,289.08,173.3,290.74,177.61Zm-17-39.37c10.13-7.28,13.59-15.11,8.83-24.27-4.66-8.91-13.06-9.26-22.28-5.38ZM216.32,83.58,203.66,55.67c-8.47,6.22-12.5,12.82-8,22.09C200.08,86.78,207.22,87.72,216.32,83.58Z" style="fill: #fff"/>
  
  
    <path id="lineFive" d="M44.8,97.08h0a10,10,0,0,1-1.37-14.54,145.42,145.42,0,0,1,98.42-48.39,10,10,0,0,1,10.8,10h0a10,10,0,0,1-9.21,10A125.67,125.67,0,0,0,58.31,95.9,10,10,0,0,1,44.8,97.08Z"/>
    <path id="lineFour" d="M14.2,221.56a10,10,0,0,1-12.21-8A147.56,147.56,0,0,1,0,189.4a145.05,145.05,0,0,1,24.35-80.95,10,10,0,0,1,14.45-2.36h0a10,10,0,0,1,2.26,13.36A125.25,125.25,0,0,0,20,189.4a127.25,127.25,0,0,0,1.73,20.91,10,10,0,0,1-7.53,11.25Z" />
    <path id="lineThree" d="M75.32,328.83A146.18,146.18,0,0,1,10,247.38a10,10,0,0,1,7.16-12.82h0a10,10,0,0,1,11.86,6.63,126.2,126.2,0,0,0,56.47,70.44,10,10,0,0,1,3.87,13h0A10,10,0,0,1,75.32,328.83Z"/>
    <path id="lineTwo" d="M156.64,352a145.2,145.2,0,0,1-55-10.66,10,10,0,0,1-5.27-13.72h0a10,10,0,0,1,12.67-4.86,127.19,127.19,0,0,0,89.12,2.27,10,10,0,0,1,12.4,5.5h0a10,10,0,0,1-6,13.44,146,146,0,0,1-48,8"/>
    <foreignobject class="node" x="106" y="45" width="300" height="300">
                
    <p class="review-number">1</p>               
</foreignobject>
    <g id="lineOne">
      <path d="M217.58,326.57h0a10,10,0,0,1,4.53-12.8A126.56,126.56,0,0,0,290.28,201.4c0-1.08,0-2.14-.06-3.21v-.35l20-.56v.35c0,1.25.07,2.51.07,3.77a146.52,146.52,0,0,1-78.86,130.06A10,10,0,0,1,217.58,326.57Z"/>
      <path d="M299,187.3h0a10.18,10.18,0,0,0-8.7,10.23c1.33,32.59-10.88,64.89-34.19,89.77a132.56,132.56,0,0,1-28.3,22.85c-.91.55-1.83,1.07-2.76,1.6l-.3.17L234,328.33l.3-.17c1.08-.61,2.16-1.22,3.24-1.87a153.16,153.16,0,0,0,32.75-26.45c27-28.8,41.11-66.16,39.6-103.88A9.24,9.24,0,0,0,299,187.3Z" />
    </g>
  </g>`;
  reviewCircle.style.height = "16rem";
  document.querySelector("#textarea-container").style.display = "none";
  document.querySelector("#review-circle2").style.display = "none";
  document.querySelector("#review-circle3").style.display = "none";
  document.querySelector("#svg-container").style.display = "block";
  reviewNextButton.style.backgroundColor = "#46495b";
  reviewNextButton.textContent = "Next";
  setTimeout(function () {
    document.querySelector("#lineOne").addEventListener("click", reviewOne);
    document.querySelector("#lineTwo").addEventListener("click", reviewTwo);
    document.querySelector("#lineThree").addEventListener("click", reviewThree);
    document.querySelector("#lineFour").addEventListener("click", reviewFour);
    document.querySelector("#lineFive").addEventListener("click", reviewFive);
    document.querySelector(".review-number").textContent = priceNumber;

    document.querySelector("#lineOne").style.fill = "";
    document.querySelector("#lineTwo").style.fill = "";
    document.querySelector("#lineThree").style.fill = "";
    document.querySelector("#lineFour").style.fill = "";
    document.querySelector("#lineFive").style.fill = "";

    if (priceNumber == 1) {
      document.querySelector("#lineOne").style.fill = "#8a2c2a";
      document.querySelector("#lineTwo").style.fill = "";
      document.querySelector("#lineThree").style.fill = "";
      document.querySelector("#lineFour").style.fill = "";
      document.querySelector("#lineFive").style.fill = "";
    } else if (priceNumber == 2) {
      document.querySelector("#lineOne").style.fill = "#8a2c2a";
      document.querySelector("#lineTwo").style.fill = "#8a2c2a";
      document.querySelector("#lineThree").style.fill = "";
      document.querySelector("#lineFour").style.fill = "";
      document.querySelector("#lineFive").style.fill = "";
    } else if (priceNumber == 3) {
      document.querySelector("#lineOne").style.fill = "#ffb800";
      document.querySelector("#lineTwo").style.fill = "#ffb800";
      document.querySelector("#lineThree").style.fill = "#ffb800";
      document.querySelector("#lineFour").style.fill = "";
      document.querySelector("#lineFive").style.fill = "";
    } else if (priceNumber == 4) {
      document.querySelector("#lineOne").style.fill = "#45db00";
      document.querySelector("#lineTwo").style.fill = "#45db00";
      document.querySelector("#lineThree").style.fill = "#45db00";
      document.querySelector("#lineFour").style.fill = "#45db00";
      document.querySelector("#lineFive").style.fill = "";
    } else if (priceNumber == 5) {
      document.querySelector("#lineOne").style.fill = "#45db00";
      document.querySelector("#lineTwo").style.fill = "#45db00";
      document.querySelector("#lineThree").style.fill = "#45db00";
      document.querySelector("#lineFour").style.fill = "#45db00";
      document.querySelector("#lineFive").style.fill = "#45db00";
    }

    function reviewOne() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#8a2c2a";
      svgParent.querySelector("#lineTwo").style.fill = "";
      svgParent.querySelector("#lineThree").style.fill = "";
      svgParent.querySelector("#lineFour").style.fill = "";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">1</p>`;
      priceNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewTwo() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#8a2c2a";
      svgParent.querySelector("#lineTwo").style.fill = "#8a2c2a";
      svgParent.querySelector("#lineThree").style.fill = "";
      svgParent.querySelector("#lineFour").style.fill = "";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">2</p>`;
      priceNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewThree() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#ffb800";
      svgParent.querySelector("#lineTwo").style.fill = "#ffb800";
      svgParent.querySelector("#lineThree").style.fill = "#ffb800";
      svgParent.querySelector("#lineFour").style.fill = "";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">3</p>`;
      priceNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewFour() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#45db00";
      svgParent.querySelector("#lineTwo").style.fill = "#45db00";
      svgParent.querySelector("#lineThree").style.fill = "#45db00";
      svgParent.querySelector("#lineFour").style.fill = "#45db00";
      svgParent.querySelector("#lineFive").style.fill = "";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">4</p>`;
      pricetNumber = svgParent.querySelector(".review-number").textContent;
    }
    function reviewFive() {
      let svgParent = event.target.parentElement.parentElement;
      svgParent.querySelector("#lineOne").style.fill = "#45db00";
      svgParent.querySelector("#lineTwo").style.fill = "#45db00";
      svgParent.querySelector("#lineThree").style.fill = "#45db00";
      svgParent.querySelector("#lineFour").style.fill = "#45db00";
      svgParent.querySelector("#lineFive").style.fill = "#45db00";
      svgParent.querySelector(
        ".node"
      ).innerHTML = `<p class="review-number">5</p>`;
      priceNumber = svgParent.querySelector(".review-number").textContent;
    }
  }, 1);
}

function nextReviewSubject4() {
  timeline1.style.fill = "#c41d1d";
  timeline2.style.fill = "#c41d1d";
  timeline3.style.fill = "#c41d1d";
  timeline4.style.fill = "#c41d1d";
  timeline5.style.fill = "white";
  reviewText1.textContent = "Comment";
  reviewText2.textContent = "Describe your overall experience in the cinema";

  reviewCircle.innerHTML = "";
  reviewCircle.style.height = "0";
  document.querySelector("#review-circle2").style.display = "none";
  document.querySelector("#review-circle3").style.display = "none";

  document.querySelector("#textarea-container").style.display = "block";
  document.querySelector("#svg-container").style.display = "block";
  document.querySelector("#review-comment-text").classList.add("hidden");
}
function nextReviewSubject5() {
  timeline1.style.fill = "#c41d1d";
  timeline2.style.fill = "#c41d1d";
  timeline3.style.fill = "#c41d1d";
  timeline4.style.fill = "#c41d1d";
  timeline5.style.fill = "#c41d1d";
  document.querySelector("#review-comment-text").classList.remove("hidden");

  reviewText1.textContent = "Overview";
  reviewText2.textContent = "";
  document.querySelector("#review-circle2").style.display = "block";
  document.querySelector("#review-circle3").style.display = "block";
  document.querySelector("#textarea-container").style.display = "none";
  reviewCircle.style.height = "20rem";
  reviewCircle.innerHTML = `
  <title>circle_price</title>
  <g>
    <path d="M290.74,177.61,265.43,189.1c-2.27-4.34-4.54-8.67-6.7-12.75-42.23,3.08-57.43-2.83-64.26-25.95l23-10.45c9.69,4.54,17.91,8.55,26.4,12.45.67-1.2,1.46-2.16,2.14-3.36l-16.15-35.57c-24,4.33-47.78,7.68-60.22-19.74-12.56-27.66,0-47.67,22.58-63.87-2.78-6.78-5.1-12.58-7.43-18.38L210.13,0l8.07,17.79c39.54-1,54.56,5.92,59.15,26.77L254.07,55.13c-7.36-4.11-13.51-7.57-19.55-10.79-.79.95-1.71,2.27-2.5,3.22,2.24,4.94,4.88,9.41,6.61,14.58,3.84,13.15,10.55,17.85,25.81,14.5,22.63-4.61,36.13,3,44.74,19.91,9.39,18.68,6.64,37.5-7.82,52.7-4.95,5.23-10.49,9.83-15.55,14.81C287.54,169.23,289.08,173.3,290.74,177.61Zm-17-39.37c10.13-7.28,13.59-15.11,8.83-24.27-4.66-8.91-13.06-9.26-22.28-5.38ZM216.32,83.58,203.66,55.67c-8.47,6.22-12.5,12.82-8,22.09C200.08,86.78,207.22,87.72,216.32,83.58Z" style="fill: #fff"/>
    <path id="line2" d="M156.64,352a145.2,145.2,0,0,1-55-10.66,10,10,0,0,1-5.27-13.72h0a10,10,0,0,1,12.67-4.86,127.19,127.19,0,0,0,89.12,2.27,10,10,0,0,1,12.4,5.5h0a10,10,0,0,1-6,13.44,146,146,0,0,1-48,8" />
    <path id="line3" d="M75.32,328.83A146.18,146.18,0,0,1,10,247.38a10,10,0,0,1,7.16-12.82h0a10,10,0,0,1,11.86,6.63,126.2,126.2,0,0,0,56.47,70.44,10,10,0,0,1,3.87,13h0A10,10,0,0,1,75.32,328.83Z" />
    <path id="line5" d="M44.8,97.08h0a10,10,0,0,1-1.37-14.54,145.42,145.42,0,0,1,98.42-48.39,10,10,0,0,1,10.8,10h0a10,10,0,0,1-9.21,10A125.67,125.67,0,0,0,58.31,95.9,10,10,0,0,1,44.8,97.08Z" />
    <path id="line4" d="M14.2,221.56a10,10,0,0,1-12.21-8A147.56,147.56,0,0,1,0,189.4a145.05,145.05,0,0,1,24.35-80.95,10,10,0,0,1,14.45-2.36h0a10,10,0,0,1,2.26,13.36A125.25,125.25,0,0,0,20,189.4a127.25,127.25,0,0,0,1.73,20.91,10,10,0,0,1-7.53,11.25Z"/>
    <foreignobject class="node" x="106" y="42" width="300" height="300">
                
    <p class="review-number">${comfortNumber}</p>               
</foreignobject>
    <g id="line1">
      <path d="M217.58,326.57h0a10,10,0,0,1,4.53-12.8A126.56,126.56,0,0,0,290.28,201.4c0-1.08,0-2.14-.06-3.21v-.35l20-.56v.35c0,1.25.07,2.51.07,3.77a146.52,146.52,0,0,1-78.86,130.06A10,10,0,0,1,217.58,326.57Z" />
      <path d="M299,187.3h0a10.18,10.18,0,0,0-8.7,10.23c1.33,32.59-10.88,64.89-34.19,89.77a132.56,132.56,0,0,1-28.3,22.85c-.91.55-1.83,1.07-2.76,1.6l-.3.17L234,328.33l.3-.17c1.08-.61,2.16-1.22,3.24-1.87a153.16,153.16,0,0,0,32.75-26.45c27-28.8,41.11-66.16,39.6-103.88A9.24,9.24,0,0,0,299,187.3Z" />
    </g>
  </g>`;
  document.querySelector("#review-circle2").innerHTML = `
  <g>
    <g>
      <path d="M256,57.23c9.85,20.05,19.93,40.11,30,60,1.14,2.11,1.14,6.75,6.87,4.43,5-1.9,3-4.43,1.83-7.39-8.93-20.9-18.09-41.59-27-62.7-3-7.6-6.88-4.22-11.23-2.75-.46-2.11,1.38-3.8,2.06-5.7,2.52-6.12,8-11,13.75-11.19,6.41-.21,8.24,7.18,10.53,12.46,9.62,22,19.24,44.12,28.63,66.29,4.81,11.61,2.52,17.74-9.16,23.65-12.14,6.33-24.74,12.24-37.1,18.36-24.51,12.25-26.57,11.83-42.15-9.07-1.14-1.69-2.52-3.38-3.89-5.07C207,122.46,194.87,106.21,183,90c-6.64-9.29-5.73-13.51,4.81-16,8-1.9,16.26-2.11,24.51-4,7.79-1.9,16.26,1.68,21.3,10.76,8.93,16.26,20.38,31.46,30.69,46.87,1.37,2.32,2.29,6.12,6.41,4.22,4.35-1.9,1.15-4.85,0-7-8.93-18.16-17.86-36.32-27-54.47C236.1,55.75,234.49,49,257.4,48.78,252.13,50.89,254.65,54.27,256,57.23Zm-5.26,80.22q-20.28-30.39-40.54-60.8c-3.44-5.28-6.42-.63-9.39.21-3.67,1.27-4.13,3.38-1.84,6.34,14.43,19.21,28.63,38.63,43.06,57.84,1.15,1.27,2.06,3.17,4.58,3C249.61,142.73,253.5,141.68,250.76,137.45Z" style="fill: #fff"/>
      <path d="M224.66,64.83c-5.73,1.69-11.69.21-14-4.22-3.2-6.34-7.55-12-11.45-18-4.12-6.12,2.75-15,11-14.36,4.58.43,8.24.22,12.36-2.11s8.94-1.26,12.37,2.33c3.21,3.37,4.12,7.81,1.61,10.76-3.9,4.44-5.73,8.45-2.52,13.09C233.59,58.92,230.84,63.14,224.66,64.83Z" style="fill: #fff"/>
      <path d="M235.42,21.76c-5.5-5.7-1.38-9.71,3.43-12.67,5-3.16,26.8,4.22,29.55,9.5,1.37,2.75,1.83,6.12-.46,7.81a80.12,80.12,0,0,0-16.72,16.68c-1.83,2.32-5.5,2.32-9.62,1.27C245,31.89,244.81,31.89,235.42,21.76Z" style="fill: #fff"/>
      <path d="M173.57,43.5c1.83-6.75,14-8.65,17.41-2.74,3.89,6.76,10.07,11.82,12.82,19.42,2.52,6.76-.68,8-5.49,7.6-6-.42-10.77-.63-16.49,2.33-6.19,3.16-13.29-2.54-13.06-9.72C172,55.75,172.2,49.63,173.57,43.5Z" style="fill: #fff"/>
      <path d="M194,32.32c-.69,1.68-2.06.84-3.67.84-9.16-.21-7.1-7.6-8.24-12C180.21,14,188,8,195.56,10.78c5.27,2.11,10.31,4.65,16.26,5.49,2.52.42,5.5,2.53,4.58,6.76C207.24,22.82,198.31,23.45,194,32.32Z" style="fill: #fff"/>
      <path d="M219.38,0c5.73,0,8.7,4,12.6,6.76-4.13,3.38-3,9.92-6.87,12.45-3.67,2.33-3.9-4-6.88-5.27l-6.87-3.17c-1.83-.85-3.66-1.27-3.2-3.17C210,2.33,213.88-.2,219.38,0Z" style="fill: #fff"/>
    </g>
    <path id="line2" d="M156.64,334.47a145.2,145.2,0,0,1-55-10.66,10,10,0,0,1-5.27-13.72h0a10,10,0,0,1,12.67-4.86,127.12,127.12,0,0,0,89.12,2.28,10,10,0,0,1,12.4,5.5h0a10,10,0,0,1-6,13.43,145.73,145.73,0,0,1-48,8" />
    <path id="line3" d="M75.32,311.26A146.15,146.15,0,0,1,10,229.81,10,10,0,0,1,17.2,217h0a10,10,0,0,1,11.86,6.62,126.2,126.2,0,0,0,56.47,70.44,10,10,0,0,1,3.87,13h0A10,10,0,0,1,75.32,311.26Z" />
    <path id="line5" d="M44.8,79.52h0A10,10,0,0,1,43.42,65a145.43,145.43,0,0,1,98.42-48.4,10,10,0,0,1,10.8,10h0a10,10,0,0,1-9.21,10A125.62,125.62,0,0,0,58.31,78.33,10,10,0,0,1,44.8,79.52Z" />
    <path id="line4" d="M14.2,204A10,10,0,0,1,2,196a147.38,147.38,0,0,1-2-24.12,145.05,145.05,0,0,1,24.35-81A10,10,0,0,1,38.8,88.52h0a10,10,0,0,1,2.26,13.36,125.25,125.25,0,0,0-21.06,70,127.28,127.28,0,0,0,1.73,20.92A10,10,0,0,1,14.2,204Z" />
    <foreignobject class="node" x="106" y="32" width="300" height="300">
                
    <p class="review-number">${snackNumber}</p>               
</foreignobject>
    <g id="line1">
      <path d="M217.58,309h0a10,10,0,0,1,4.53-12.81,126.54,126.54,0,0,0,68.17-112.36c0-1.07,0-2.14-.06-3.21v-.35l20-.55v.35c0,1.25.07,2.5.07,3.76a146.52,146.52,0,0,1-78.86,130.06A10,10,0,0,1,217.58,309Z" />
      <path d="M299,169.74h0a10.17,10.17,0,0,0-8.7,10.22c1.33,32.6-10.88,64.9-34.19,89.78a132.56,132.56,0,0,1-28.3,22.85c-.91.55-1.83,1.07-2.76,1.59l-.3.17L234,310.77l.3-.17c1.08-.61,2.16-1.23,3.24-1.88a153.16,153.16,0,0,0,32.75-26.45c27-28.79,41.11-66.16,39.6-103.88A9.24,9.24,0,0,0,299,169.74Z" />
    </g>
  </g>`;
  document.querySelector("#review-circle3").innerHTML = `
  <title>circle_price</title>
  <g>
    <path d="M290.74,177.61,265.43,189.1c-2.27-4.34-4.54-8.67-6.7-12.75-42.23,3.08-57.43-2.83-64.26-25.95l23-10.45c9.69,4.54,17.91,8.55,26.4,12.45.67-1.2,1.46-2.16,2.14-3.36l-16.15-35.57c-24,4.33-47.78,7.68-60.22-19.74-12.56-27.66,0-47.67,22.58-63.87-2.78-6.78-5.1-12.58-7.43-18.38L210.13,0l8.07,17.79c39.54-1,54.56,5.92,59.15,26.77L254.07,55.13c-7.36-4.11-13.51-7.57-19.55-10.79-.79.95-1.71,2.27-2.5,3.22,2.24,4.94,4.88,9.41,6.61,14.58,3.84,13.15,10.55,17.85,25.81,14.5,22.63-4.61,36.13,3,44.74,19.91,9.39,18.68,6.64,37.5-7.82,52.7-4.95,5.23-10.49,9.83-15.55,14.81C287.54,169.23,289.08,173.3,290.74,177.61Zm-17-39.37c10.13-7.28,13.59-15.11,8.83-24.27-4.66-8.91-13.06-9.26-22.28-5.38ZM216.32,83.58,203.66,55.67c-8.47,6.22-12.5,12.82-8,22.09C200.08,86.78,207.22,87.72,216.32,83.58Z" style="fill: #fff"/>
    <path id="line2" d="M156.64,352a145.2,145.2,0,0,1-55-10.66,10,10,0,0,1-5.27-13.72h0a10,10,0,0,1,12.67-4.86,127.19,127.19,0,0,0,89.12,2.27,10,10,0,0,1,12.4,5.5h0a10,10,0,0,1-6,13.44,146,146,0,0,1-48,8" />
    <path id="line3" d="M75.32,328.83A146.18,146.18,0,0,1,10,247.38a10,10,0,0,1,7.16-12.82h0a10,10,0,0,1,11.86,6.63,126.2,126.2,0,0,0,56.47,70.44,10,10,0,0,1,3.87,13h0A10,10,0,0,1,75.32,328.83Z" />
    <path id="line5" d="M44.8,97.08h0a10,10,0,0,1-1.37-14.54,145.42,145.42,0,0,1,98.42-48.39,10,10,0,0,1,10.8,10h0a10,10,0,0,1-9.21,10A125.67,125.67,0,0,0,58.31,95.9,10,10,0,0,1,44.8,97.08Z" />
    <path id="line4" d="M14.2,221.56a10,10,0,0,1-12.21-8A147.56,147.56,0,0,1,0,189.4a145.05,145.05,0,0,1,24.35-80.95,10,10,0,0,1,14.45-2.36h0a10,10,0,0,1,2.26,13.36A125.25,125.25,0,0,0,20,189.4a127.25,127.25,0,0,0,1.73,20.91,10,10,0,0,1-7.53,11.25Z" />
    <foreignobject class="node" x="106" y="45" width="300" height="300">
                
    <p class="review-number">${priceNumber}</p>               
</foreignobject>
    <g id="line1">
      <path d="M217.58,326.57h0a10,10,0,0,1,4.53-12.8A126.56,126.56,0,0,0,290.28,201.4c0-1.08,0-2.14-.06-3.21v-.35l20-.56v.35c0,1.25.07,2.51.07,3.77a146.52,146.52,0,0,1-78.86,130.06A10,10,0,0,1,217.58,326.57Z" />
      <path d="M299,187.3h0a10.18,10.18,0,0,0-8.7,10.23c1.33,32.59-10.88,64.89-34.19,89.77a132.56,132.56,0,0,1-28.3,22.85c-.91.55-1.83,1.07-2.76,1.6l-.3.17L234,328.33l.3-.17c1.08-.61,2.16-1.22,3.24-1.87a153.16,153.16,0,0,0,32.75-26.45c27-28.8,41.11-66.16,39.6-103.88A9.24,9.24,0,0,0,299,187.3Z" />
    </g>
  </g>`;

  document.querySelector("#svg-container").style.display = "grid";
  document.querySelector("#svg-container").style.gridTemplateColumns =
    "15rem 15rem 15rem";
  document.querySelector("#svg-container").style.justifyContent = "center";

  document.querySelector("#review-circle #line1").style.fill = "";
  document.querySelector("#review-circle #line2").style.fill = "";
  document.querySelector("#review-circle #line3").style.fill = "";
  document.querySelector("#review-circle #line4").style.fill = "";
  document.querySelector("#review-circle #line5").style.fill = "";
  document.querySelector("#review-circle2 #line1").style.fill = "";
  document.querySelector("#review-circle2 #line2").style.fill = "";
  document.querySelector("#review-circle2 #line3").style.fill = "";
  document.querySelector("#review-circle2 #line4").style.fill = "";
  document.querySelector("#review-circle2 #line5").style.fill = "";
  document.querySelector("#review-circle3 #line1").style.fill = "";
  document.querySelector("#review-circle3 #line2").style.fill = "";
  document.querySelector("#review-circle3 #line3").style.fill = "";
  document.querySelector("#review-circle3 #line4").style.fill = "";
  document.querySelector("#review-circle3 #line5").style.fill = "";

  if (comfortNumber > 3) {
    document.querySelector("#review-circle #line1").style.fill = "#45db00";
    document.querySelector("#review-circle #line2").style.fill = "#45db00";
    document.querySelector("#review-circle #line3").style.fill = "#45db00";
    document.querySelector("#review-circle #line4").style.fill = "#45db00";
    document.querySelector("#review-circle #line5").style.fill = "#45db00";
  } else if (comfortNumber < 3) {
    document.querySelector("#review-circle #line1").style.fill = "#8a2c2a";
    document.querySelector("#review-circle #line2").style.fill = "#8a2c2a";
    document.querySelector("#review-circle #line3").style.fill = "#8a2c2a";
    document.querySelector("#review-circle #line4").style.fill = "#8a2c2a";
    document.querySelector("#review-circle #line5").style.fill = "#8a2c2a";
  } else {
    document.querySelector("#review-circle #line1").style.fill = "#ffb800";
    document.querySelector("#review-circle #line2").style.fill = "#ffb800";
    document.querySelector("#review-circle #line3").style.fill = "#ffb800";
    document.querySelector("#review-circle #line4").style.fill = "#ffb800";
    document.querySelector("#review-circle #line5").style.fill = "#ffb800";
  }

  if (snackNumber > 3) {
    document.querySelector("#review-circle2 #line1").style.fill = "#45db00";
    document.querySelector("#review-circle2 #line2").style.fill = "#45db00";
    document.querySelector("#review-circle2 #line3").style.fill = "#45db00";
    document.querySelector("#review-circle2 #line4").style.fill = "#45db00";
    document.querySelector("#review-circle2 #line5").style.fill = "#45db00";
  } else if (snackNumber < 3) {
    document.querySelector("#review-circle2 #line1").style.fill = "#8a2c2a";
    document.querySelector("#review-circle2 #line2").style.fill = "#8a2c2a";
    document.querySelector("#review-circle2 #line3").style.fill = "#8a2c2a";
    document.querySelector("#review-circle2 #line4").style.fill = "#8a2c2a";
    document.querySelector("#review-circle2 #line5").style.fill = "#8a2c2a";
  } else {
    document.querySelector("#review-circle2 #line1").style.fill = "#ffb800";
    document.querySelector("#review-circle2 #line2").style.fill = "#ffb800";
    document.querySelector("#review-circle2 #line3").style.fill = "#ffb800";
    document.querySelector("#review-circle2 #line4").style.fill = "#ffb800";
    document.querySelector("#review-circle2 #line5").style.fill = "#ffb800";
  }

  if (priceNumber > 3) {
    document.querySelector("#review-circle3 #line1").style.fill = "#45db00";
    document.querySelector("#review-circle3 #line2").style.fill = "#45db00";
    document.querySelector("#review-circle3 #line3").style.fill = "#45db00";
    document.querySelector("#review-circle3 #line4").style.fill = "#45db00";
    document.querySelector("#review-circle3 #line5").style.fill = "#45db00";
  } else if (priceNumber < 3) {
    document.querySelector("#review-circle3 #line1").style.fill = "#8a2c2a";
    document.querySelector("#review-circle3 #line2").style.fill = "#8a2c2a";
    document.querySelector("#review-circle3 #line3").style.fill = "#8a2c2a";
    document.querySelector("#review-circle3 #line4").style.fill = "#8a2c2a";
    document.querySelector("#review-circle3 #line5").style.fill = "#8a2c2a";
  } else {
    document.querySelector("#review-circle3 #line1").style.fill = "#ffb800";
    document.querySelector("#review-circle3 #line2").style.fill = "#ffb800";
    document.querySelector("#review-circle3 #line3").style.fill = "#ffb800";
    document.querySelector("#review-circle3 #line4").style.fill = "#ffb800";
    document.querySelector("#review-circle3 #line5").style.fill = "#ffb800";
  }
}
