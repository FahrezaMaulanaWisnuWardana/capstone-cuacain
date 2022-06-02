class navBar extends HTMLElement{
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML = `
        <header class="nav-bar">
            <div class="nav-bar-menu">
                <a id="menu" href="#">☰</a>
            </div>

            <div class="nav-logo">
                <img id="icon" src="../public/images/weatherIcon-32px.png" alt="logo CuacaIn">
                <label for="icon">CuacaIn</label>
            </div>
            <nav id="drawer">
                <ul class="nav-bar-link" id="nav-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#">Cek Cuaca</a></li>
                    <li><a href="/#">Berita Gempa</a></li>
                    <li><a href="/#">About us</a></li>
                </ul>
            </nav>
        </header>
        `
    }
}
customElements.define('nav-bar',navBar)