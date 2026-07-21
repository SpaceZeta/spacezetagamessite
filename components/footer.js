class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        
      </style>
        
                <footer class="footer footer-text">
            <h4>SpaceZeta Games</h4>
            &copy; Theme by <a href="https://themewagon.com/">Themewagon</a> | modified by SpaceZeta
        </footer>
    `;
  }
}

customElements.define('footer-component', Footer);