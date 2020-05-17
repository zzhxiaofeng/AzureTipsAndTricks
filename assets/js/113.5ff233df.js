(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{416:function(e,t,n){"use strict";n.r(t);var a=n(43),s=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/azure-cli-extensions-overview?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Extensions with Azure CLI"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("📺 Watch the video : "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=wu-PtY_ykgc&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=56?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to take advantage of Azure CLI Extensions"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h4",{attrs:{id:"what-are-azure-cli-extensions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-are-azure-cli-extensions","aria-hidden":"true"}},[e._v("#")]),e._v(" What are Azure CLI Extensions?")]),e._v(" "),n("p",[e._v("The Azure CLI is a powerful command-line interface that you can use to manage your Azure resources. It comes loaded with lots of commands that you can use to create resources like VMs and Web Apps and do almost anything with them that you can imagine, like swap a deployment slot.")]),e._v(" "),n("p",[e._v("Sometimes, the commands that the Azure CLI offers aren't enough. Or maybe you want to use them differently than they allow you to. For these cases, you can use "),n("strong",[e._v("Azure CLI Extensions")]),e._v(".\nAzure CLI extensions are additions to the CLI that are built by Microsoft and the community and provide you with additional functionality. The extensions are Python wheels that you can run as CLI commands. "),n("a",{attrs:{href:"https://pypi.org/project/wheel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python wheel"),n("OutboundLink")],1),e._v(" is a built-package format for Python code that allows small code packages to be installed and uninstalled in client applications easily.")]),e._v(" "),n("p",[e._v("You can view a list of all of the CLI extensions "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/azure-cli-extensions-list?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(". And you can also see the list when you type the command "),n("strong",[e._v("az extension list-available --output table")]),e._v(" in the Azure CLI.")]),e._v(" "),n("h5",{attrs:{id:"installing-and-using-an-azure-cli-extension"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-and-using-an-azure-cli-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing and using an Azure CLI Extension")]),e._v(" "),n("p",[e._v("Installing Azure CLI extensions is very easy. First, open up an instance of the Azure CLI. You can open a local instance on your computer (make sure that you are running the latest version of the CLI) or open it in the Azure Cloud Shell (https://shell.azure.com).")]),e._v(" "),n("p",[e._v("Once you are in the Azure CLI, you can install extensions with this command:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("az extension add --name <extension-name>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("You can use the name of any extension that is listed in the "),n("strong",[e._v("az extension list-available")]),e._v(" list. If you want to use an extension that's not in the list, for instance an extension that you've built yourself, you can add it by using the URL or the local path to it. Just make sure that your CLI instance has access to the extension that you are trying to install. In the case of an external extension that you need to add with a URL or local path, you should use his command:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("az extension add --source <URL-or-path>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("You can also update extensions to their latest version. You do that by using this command:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("az extension update --name <extension-name>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("And you can also uninstall extensions when you are done with them. Use this command to remove an extension:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("az extension remove --name <extension-name>\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v('Here is an example of installing the Azure CLI Extension called "'),n("a",{attrs:{href:"https://github.com/Azure/azure-cli-extensions/tree/master/src/find?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Find"),n("OutboundLink")],1),e._v('". This extension talks to a Microsoft AI-powered API, called Azure Aladdin, that helps to make using Azure easier. The extension is currently in preview. By the time you read this post, the '),n("strong",[e._v("find")]),e._v(" extension might have changed or might have become a part of the Azure CLI.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/AddFindExtensionInAzureCloudShell.png")}}),e._v(" "),n("p",[e._v('(Installing the "Find" extension in the Azure Cloud Shell)')]),e._v(" "),n("p",[e._v("The help extension is really cool. You can for instance use it to get explanations about Azure CLI commands.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/ExplainCLICommands.png")}}),e._v(" "),n("p",[e._v('(Get CLI command explanations from the "Find" extension in the Azure Cloud Shell)')]),e._v(" "),n("p",[e._v("You can also use the extension to find commands. This is really useful when you know that there should be a CLI command for something but don't not exactly what it is.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/HelpFindCommands.png")}}),e._v(" "),n("p",[e._v('(Get CLI command explanation from the "Find" extension in the Azure Cloud Shell)')]),e._v(" "),n("h5",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[e._v("The Azure CLI is a very powerful tool and CLI extensions make it even more powerful and useful. Check out the "),n("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/azure-cli-extensions-list?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("list of extensions"),n("OutboundLink")],1),e._v(" to see if there are any in there that can help you.")])])},[],!1,null,null,null);t.default=s.exports}}]);