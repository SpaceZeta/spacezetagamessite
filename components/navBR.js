class NavBR extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        
      </style>
      <header>
        
                <nav class="navbar navbar-default">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#site-nav-bar" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>

                        <div class="collapse navbar-collapse" id="site-nav-bar">
                            <ul class="nav navbar-nav">
                                <li><a href="index-ptbr.html">Home</a></li>
                                <li><a href="observo-ptbr.html">Observo</a></li>
                                <li><a href="floodlight-ptbr.html">Floodlight</a></li>
                                <li><a href="watcheye-ptbr.html">Watch Eye</a></li>
                                <li><a href="contact-ptbr.html">Contato</a></li>
                            </ul>
                        </div><!-- /.navbar-collapse -->
                    </nav>
                    </header>
    `;
  }
}

customElements.define('nav-br-component', NavBR);