const shorten_form = document.querySelector(".shorten_link_box")
const link_input = document.querySelector(".shorten_input")
const error_message = document.querySelector(".error_message")
const links_nav = document.querySelector('.links_nav')
shorten_form.addEventListener('submit',(e)=>{
    get_shorten_url(e)
})

async function get_shorten_url(e){
    e.preventDefault()
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link_input.value}`);
    if (!response.ok) {
        error_message.textContent="Oops! This is not a valid URL"
        link_input.classList.add("error_in_input")
        throw "Oops! This is not a valid URL"
    }
    const data = await response.json()
    const short_link = data.result.short_link
    const displayShortLink = `
        <div class="link_box">
            <p class="original_link text">${link_input.value}</p>
            <div class="new_link_box">
                <a class="shorten_link" href="https://${short_link}" target="_blank">${short_link}</a>
                <button class="copy_button"><img src="images/copy.png"> <span class="copy_button_text">Copy</span></button>
            </div>
        </div>
        `
    document.querySelector(".no_links_text").classList.add("hide")
    links_nav.innerHTML+=displayShortLink
    link_input.value="" // remove link in input after shorten the link
    error_message.textContent="" // remove error error_message after successful fetch
    link_input.classList.remove("error_in_input") // remove border red
    document.querySelectorAll(".copy_button").forEach(button =>{
        button.addEventListener("click",()=>{
            copy_button(button)
        })
    })
}


function copy_button(button){
    button.children[1].textContent="Copied!"
    navigator.clipboard.writeText(button.parentElement.children[0].textContent); // Copy shorten url
    console.log(button.parentElement.children[0].textContent);
    setTimeout(() => {
        button.children[1].textContent="Copy"
    }, 2000)
}