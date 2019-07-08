

async function setUpTryDotnet(hostOrigin, trydotnetOrigin) {
    let session = await createTryDotnetSession(hostOrigin, trydotnetOrigin);
    setUpCopyButton(session);
    setUpRunButtonAndOutputPanel(session);
}

function setUpCopyButton(session) {
    let openDocuments = session.getOpenDocuments();
    let copyTextButton = document.getElementById("trydotnet-copy-button");
    copyTextButton.addEventListener("click", event => setDocumentContent(openDocuments[0]));
}

function setUpOutputPanel(session, outputPanel) {
    session.subscribeToOutputEvents(event => {
        if (event.stdout) {
            outputPanel.innerText += event.stdout.join("\n");
        }
        if (event.exception) {
            outputPanel.innerText += `Unhandled Exception: ${event.exception}`;
        }
    });
}

function setUpRunButtonAndOutputPanel(session) {
    let runButton = document.getElementById("trydotnet-run-button");
    let outputPanel = document.getElementById("trydotnet-output-panel");
    runButton.onclick = async() => {
        outputPanel.innerText = "";
        session.run();
        //var runResult = await session.run();
        //outputPanel.innerText = runResult.output;
    };

    setUpOutputPanel(session, outputPanel);
}

function setDocumentContent(openDocument) {
    //read the content that is present in the window and set the content of the editor
    let contentArea = document.getElementById('trydotnet-content-area');
    openDocument.setContent(contentArea.innerText);
}

async function createTryDotnetSession(hostOrigin, trydotnetOrigin) {
    let configuration = {
        hostOrigin: hostOrigin,
        trydotnetOrigin: trydotnetOrigin,
        useWasmRunner: true
    };

    let project = await trydotnet.createProject({
        packageName: "blazor-console",
        files: [
            {
                name: "Program.cs",
                content:
                    `using System;

namespace fullPaths
{
    class Program
    {
        static void Main(string[] args)
        {
            #region myRegion
            Console.WriteLine("Hello World!");
            #endregion
        }
    }
}`
            }
        ]
    });

    let editors = [document.getElementById("editor")];
    var session = await trydotnet.createSessionWithProjectAndOpenDocument(configuration, editors, window, project, "Program.cs");
    return session;
}