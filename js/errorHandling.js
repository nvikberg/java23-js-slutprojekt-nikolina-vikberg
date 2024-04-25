export function errorEmptySearch(inputValue) {
    if (!inputValue) {
        const errorMessage = document.querySelector('#errorMessage');
        errorMessage.innerText = 'Empty search field';
        errorMessage.classList.remove('hide');
        return errorMessage;
    }
}

//film or celebrity not found error handling message 
export function errorNotFound() {
    const notFoundDiv = document.querySelector('#notFoundDiv');
    const notFoundText = document.querySelector('#notFoundText');
    const checkSpelling = document.createElement('p');


    notFoundText.innerText= 'Not Found';
    checkSpelling.innerText= 'Please check your spelling and try again';
    checkSpelling.classList.add('checkSpelling')


    notFoundDiv.classList.add('notFound');


    notFoundDiv.append(notFoundText, checkSpelling);
    notFoundDiv.classList.remove('hide');

    return notFoundDiv;


}
//network error message
export function errorNetwork (error) {
const notFoundDiv = document.querySelector('#notFoundDiv');
const notFoundText = document.querySelector('#notFoundText');

notFoundText.innerText= 'Network Error';

notFoundDiv.classList.add('notFound');
notFoundDiv.innerHTML = '';


notFoundDiv.append(notFoundText);
notFoundDiv.classList.remove('hide');

return notFoundDiv;


}
