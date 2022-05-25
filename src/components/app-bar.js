class appBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <div class="topbar-container">
            <div class="topbar">
                okes
            </div>
        </div>`
    }
}
customElements.define("app-bar",appBar);