import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

class WidgetElement extends HTMLElement {
    connectedCallback() {
        this.mountPoint = document.createElement('div');
        this.appendChild(this.mountPoint);
        document.getElementById("chart-card").style.removeProperty("display");
        const root = ReactDOM.createRoot(this.mountPoint);
        root.render(
            <App/>
        );
    }
}

customElements.define('adminlte-simple-chart', WidgetElement);
