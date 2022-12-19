


let header =
    `
    <div id = 'navbar'>

    <a href = '#'>
        <div id = 'mast'>
            <img src = 'assets/bupg.png' alt = 'logo'>
        </div>
    </a>

    <div id = 'nav'>
        <a href = '#'>
            <h2 class = 'navbtn'>
                Home
            </h2>
        </a>
        <a href = '#about'>
            <h2 class = 'navbtn'>
                About Us
            </h2>
        </a>
        <a href = '#events'>
            <h2 class = 'navbtn'>
                News & Events
            </h2>
        </a>
        <a href = '#board'>
            <h2 class = 'navbtn'>
                Board
            </h2>
        </a>
        <a href = '#contact'>
            <h2 class = 'navbtn'>
                Contact
            </h2>
        </a>
    </div>

    <div id = 'bars'>
        <div class = 'bar one'>
        </div>
        <div class = 'bar two'>
        </div>
    </div>
</div>

`

document.body.innerHTML = header + document.body.innerHTML

const bars = Id('bars'),
    nav = Id('nav')


bars.onclick = () => {
    bars.classList.toggle('active')
    nav.classList.toggle('active')
}

for (let i = 0; i < Class('navbtn').length; i++){
    let navbtn = Class('navbtn')[i]
    navbtn.onclick = () => {
        bars.classList.toggle('active')
    nav.classList.toggle('active')
    }
}