/** Shopify CDN: Minification failed

Line 9:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 10:13 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 17:12 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 23:7 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
class DetailsDisclosure extends HTMLElement {
    constructor() {
        super();
        this.mainDetailsToggle = this.querySelector('details');

        this.mainDetailsToggle.addEventListener('focusout', this.onFocusOut.bind(this));
    }

    onFocusOut() {
        setTimeout(() => {
            if (!this.contains(document.activeElement)) this.close();
        })
    }

    close() {
        this.mainDetailsToggle.removeAttribute('open');
        this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
    }
}

customElements.define('details-disclosure', DetailsDisclosure);