const img_url = 'https://image.tmdb.org/t/p/w500';
const mainClass = document.querySelector('#mainClass'); //main body


//adds data to the divs for popular list and the ranked list
export function addDataToTop10Cards(data) {
  data.slice(0, 10).forEach((movie, index) => {
    const movieDiv = createMovieCard(movie, index);
    const ranking = document.createElement('h2');
    ranking.innerText = `${index + 1}`;
    movieDiv.append(ranking);
    mainClass.append(movieDiv);
  });
}


//adds data into divs for movie search
export function addDataToMovieCards(data) {
  data.forEach((movie) => {
    const movieDiv = createMovieCard(movie);
    mainClass.append(movieDiv);
  });
}


//adds data into divs for celebrity search
export function addDataToCelebrityCards(data) {
  data.forEach((celebrity) => {
    const celebrityDiv = createCelebrityCard(celebrity);
    mainClass.append(celebrityDiv);

  });
}



//elements for celebrities data card
export function createCelebrityCard(celebrity) {
  const { original_name, profile_path, known_for_department, known_for } = celebrity;
  const celebrityDiv = document.createElement('div');
  celebrityDiv.classList.add('movie'); //adding movie class style to movieDiv

  const celebrityName = document.createElement('h4')
  celebrityName.innerText = original_name;

  const knownForDepartment = document.createElement('h4')
  knownForDepartment.innerText = 'Known for: ' + known_for_department;

  const celebrityImage = document.createElement('img');

  //in case of no img 
  if (profile_path !== null) {
    celebrityImage.src = `${img_url + profile_path}`;
  } else {
    celebrityImage.alt = 'No Image Available';
    celebrityImage.classList.add('img');
  }

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('movie-description');

  const knownFromText = document.createElement('p');
  knownFromText.innerText = 'Known From: '
  descriptionDiv.append(knownFromText);

  //console.log(known_for);

  //loops out the media list for the celebrity 
  //and create elements for the description div
  for (const celebrityInfo of known_for) {
    const { title, media_type, name } = celebrityInfo;


    //if the "known for" array is empty there is no media available 
    if (known_for.length === 0) {
      console.log(known_for.length);

      const emptyDescription = document.createElement('p');
      emptyDescription.innerText = `No media available for this person`;

      descriptionDiv.append(emptyDescription);

    } else {

      //known for movie or tv description
      if (media_type === 'movie') {
        const movieTitle = document.createElement('p');
        movieTitle.innerText = ` ${media_type} : ${title}`;
        descriptionDiv.append(movieTitle);


      } else if (media_type === 'tv') {
        const tvShow = document.createElement('p');
        tvShow.innerText = ` ${media_type} : ${name}`;
        descriptionDiv.append(tvShow);

      }

    }
  }

  celebrityDiv.append(celebrityName, knownForDepartment, celebrityImage, descriptionDiv);

  celebrityDiv.addEventListener('mouseenter', () => {
    descriptionDiv.classList.remove('hide');
  });

  celebrityDiv.addEventListener('mouseleave', () => {
    descriptionDiv.classList.add('hide');
  });

  return celebrityDiv;
}




//all the elements for the movie card
export function createMovieCard(movie) {
  const { title, poster_path, overview, release_date, id } = movie;

  const movieDiv = document.createElement('div');
  movieDiv.classList.add('movie'); //adding movie class style to movieDiv

  const movieTitle = document.createElement('h4');
  movieTitle.innerText = title;

  const releaseDate = document.createElement('h4');
  releaseDate.innerText = "Released " + release_date;

  const movieImage = document.createElement('img');

  if (poster_path !== null) {
    movieImage.src = `${img_url + poster_path}`;
  } else {
    movieImage.alt = 'No Image Available';
    movieImage.classList.add('img');
  }



  //description div that holds the information about the movie 
  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('movie-description'); //adding style to descriptionDiv
  descriptionDiv.innerHTML = `${overview}`;

  //if description is empty 
  if (overview === "") {
    console.log(overview);

    const emptyDescription = document.createElement('p');
    emptyDescription.innerText = `No description available for this movie`;

    descriptionDiv.append(emptyDescription);
  }

  movieDiv.append(movieTitle, releaseDate, movieImage, descriptionDiv);

  movieDiv.addEventListener('mouseenter', () => {
    descriptionDiv.classList.remove('hide');
  });

  movieDiv.addEventListener('mouseleave', () => {
    descriptionDiv.classList.add('hide');
  });



  return movieDiv;
}
