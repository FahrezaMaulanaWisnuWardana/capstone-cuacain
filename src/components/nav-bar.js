class navBar extends HTMLElement{
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML = `
            <div class="navbar">
                Nav Bar
                <div id="ip"></div>
            </div>
        `
    }
}
customElements.define('nav-bar',navBar)