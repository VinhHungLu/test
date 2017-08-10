import $ from "jquery";

export default class {
    constructor(root, eurToUsd){
        this.root = root;
        this.eurToUsd = eurToUsd;
        this.USD = 0;
        this.EUR = 0;
    }

    render(){
        let html = `
            <table>
                <tr>
                <td>EUR</td>
                <td>&nbsp;</td>
                <td>USD</td>
                </tr>
                <tr>
                <td><input id="EUR" value="${this.EUR}"/></td>
                <td>
                    <button id="convertEURtoUSD">>>></button><br>
                    <button id="convertUSDtoEUR"><<<</button>
                </td>
                <td><input id="USD" value="${this.USD}" /></td>
            </tr>
            </table>
        `;
        this.root.innerHTML = html;
        $('#convertEURtoUSD').on('click', () => {
            this.convertEURtoUSD() 
        });
        $('#convertUSDtoEUR').on('click', () => { 
            this.convertUSDtoEUR() 
        });
    }
    convertEURtoUSD() {
        this.EUR = $('#EUR').val();
        this.USD = this.EUR * this.eurToUsd;
        this.render();
    }
    
    convertUSDtoEUR() {
        this.USD = $('#USD').val();
        this.EUR = this.USD / this.eurToUsd;
        this.render();
    }
}