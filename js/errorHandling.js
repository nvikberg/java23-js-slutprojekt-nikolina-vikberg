export function errorEmptySearch(inputValue) {
    if (!inputValue) {
        const errorMessage = document.querySelector('#errorMessage');
        errorMessage.innerText = 'Empty search field';
        errorMessage.classList.remove('hide');
        return errorMessage;
    } else {
        errorMessage.classList.add('hide');

    }
}

//film or celebrity not found error handling message 
export function errorNotFound() {
    const notFoundDiv = document.querySelector('#notFoundDiv');
    const notFoundText = document.querySelector('#notFoundText');

    notFoundText.innerText= 'Not Found';

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

notFoundDiv.append(notFoundText);
notFoundDiv.classList.remove('hide');

return notFoundDiv;


}
