const button = document.querySelector('button');
const setupText = document.querySelector('.main-itself-setup-text');
const paragraphText = document.querySelector('.main-itself-paragraph');

async function generateJoke() {
    try {
        const request = new Request(`https://official-joke-api.appspot.com/jokes/random`);
        const response = await fetch(request);

        if (!response.ok) {
            throw new Error();
        };

        const data = await response.json();

        setupText.textContent = data.setup;
        paragraphText.textContent = data.punchline;
    }
    catch(error) {
        console.error(error);
    };
};

generateJoke();

button.addEventListener('click', generateJoke);