class footBar extends HTMLElement{
    connectedCallback(){
        this.render()
    }
    render(){
        this.innerHTML = `
        <div class="foot-bar">
            <p>&#169; 2022 Copyright - All Rights Reserved</p>
        <div>
        `
    }
}
customElements.define('foot-bar',footBar)