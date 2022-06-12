import Logo from '../public/images/weatherIcon-32px.png'
class navBar extends HTMLElement{
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML = `
        <header class="nav-bar">
            <div class="nav-bar-menu">
                <a id="menu">☰</a>
            </div>

            <div class="nav-logo">
                <img id="icon" src="${Logo}" alt="logo CuacaIn">
                <label for="icon">CuacaIn</label>
            </div>
            <nav>
                <ul class="nav-bar-link" id="nav-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="#/cek-cuaca">Cek Cuaca</a></li>
                    <li><a href="#/berita-gempa">Berita Gempa</a></li>
                    <li><a href="#/about-us">About us</a></li>
                </ul>
            </nav>
        </header>
        `
    }
}
customElements.define('nav-bar',navBar)