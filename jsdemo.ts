import * as trydotnet from "./trydotnet";

var sessions = await trydotnet.autoEnable({ apiBaseAddress: new URL("https:try.dot.net"), useWasmRunner: true });
var outputPanel = document.getElementById('trydotnet-output');
var copyContentButton = document.getElementById('trydotnet-copy-button');
copyContentButton.addEventListener("click", event => setSourceCode);
var editor = sessions[0].getTextEditor();

function setSourceCode() {
    //read the content that is present in the window and set the content of the editor
    var contentArea = document.getElementById('trydotnet-content-area');
    editor.setContent(contentArea.innerText);
}