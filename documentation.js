

async function setUpTryDotnet() {
    let session = await createTryDotnetSession();
    let openDocuments = session.getOpenDocuments();
    setUpCopyButton(openDocuments);
    setUpRunButton(session);
}

function setUpCopyButton(openDocuments) {
    let copyTextButton = document.getElementById("trydotnet-copy-button");
    copyTextButton.addEventListener("click", event => setDocumentContent(openDocuments[0]));
}

function setUpRunButton(session) {
    let runButton = document.getElementById("trydotnet-run-button");
    runButton.addEventListener("click", session.run )
}

function setDocumentContent(openDocument) {
    //read the content that is present in the window and set the content of the editor
    let contentArea = document.getElementById('trydotnet-content-area');
    openDocument.setContent(contentArea.innerText);
}

async function createTryDotnetSession() {
    let configuration = {
        hostOrigin: "http://localhost:58737",
        trydotnetOrigin: "http://localhost:27261",
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