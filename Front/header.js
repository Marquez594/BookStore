class Header extends HTMLElement{
    connectedCallback() {
        this.innerHTML=`

            <div class="header">
                <h1>Test</h1>

            </div>
        `;}
    }

customElements.define('main-header', Header);
