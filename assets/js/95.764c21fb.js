(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{398:function(e,t,r){"use strict";r.r(t);var n=r(43),s=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-network/virtual-networks-overview?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Network"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"use-vnet-peering-to-connect-existing-vnets"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-vnet-peering-to-connect-existing-vnets","aria-hidden":"true"}},[e._v("#")]),e._v(" Use VNET peering to connect existing VNETs")]),e._v(" "),r("p",[e._v("Recently a question came up about how to securely connect existing VNETs. This got me thinking about how I have VMs deployed in their own VNETs.")]),e._v(" "),r("p",[e._v("Often when I set up a VM for a demo, I’ll use the default settings, which creates a VNET for each VM. In this post, I’ll walk you through how to set up a "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/architecture/reference-architectures/hybrid-networking/hub-spoke?toc=%2fazure%2fvirtual-network%2ftoc.json?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("hub-spoke network topology"),r("OutboundLink")],1),e._v(" to connect existing VNETs.")]),e._v(" "),r("h4",{attrs:{id:"my-requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#my-requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" My requirements")]),e._v(" "),r("ul",[r("li",[e._v("Connect three VNETs, one of which has a Point-to-Site gateway configured")]),e._v(" "),r("li",[e._v("No public IPs attached to VM network interfaces")]),e._v(" "),r("li",[e._v("Ability to connect to all VMs")])]),e._v(" "),r("h4",{attrs:{id:"how-i-connect-three-existing-vnets"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-i-connect-three-existing-vnets","aria-hidden":"true"}},[e._v("#")]),e._v(" How I connect three existing VNETs")]),e._v(" "),r("p",[e._v("I am starting with these resources:")]),e._v(" "),r("p",[e._v("Subscription 1:")]),e._v(" "),r("ul",[r("li",[e._v("hub-vnet – the VNET with the Point-to-Site VPN configured\n"),r("ul",[r("li",[e._v("vnet-gw – the VNET gateway")]),e._v(" "),r("li",[e._v("win2016svr-east – VM inside the VNET with no public IP ("),r("a",{attrs:{href:"https://azuremarketplace.microsoft.com/marketplace/apps/Microsoft.WindowsServer?tab=Overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Server 2016 DataCenter"),r("OutboundLink")],1),e._v(")")])])]),e._v(" "),r("li",[e._v("spoke2-vnet – second VNET with no gateway\no\twin10vm2-east – VM inside the VNET with no public IP ("),r("a",{attrs:{href:"https://azuremarketplace.microsoft.com/marketplace/apps/microsoftwindowsdesktop.windows-10?tab=Overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows 10 image"),r("OutboundLink")],1),e._v(")\nSubscription 2:")]),e._v(" "),r("li",[e._v("spoke1-vnet – VNET in another subscription (but same Azure Active Directory)\no\twin10vm-east – VM inside the VNET with no public IP ("),r("a",{attrs:{href:"https://azuremarketplace.microsoft.com/marketplace/apps/microsoftwindowsdesktop.windows-10?tab=Overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows 10 image"),r("OutboundLink")],1),e._v(")")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering1.png")}}),e._v(" "),r("p",[r("strong",[e._v("Part 1:")])]),e._v(" "),r("ul",[r("li",[e._v("In the Azure portal, I go to the "),r("strong",[e._v("hub-vnet virtual network")]),e._v(", select "),r("strong",[e._v("Peerings")]),e._v(", and click the "),r("strong",[e._v("Add")]),e._v(" button.")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering2.png")}}),e._v(" "),r("ul",[r("li",[e._v("I give the peering the name "),r("strong",[e._v("hub-spoke2-peer")]),e._v(" and "),r("strong",[e._v("select the subscription")]),e._v(" and "),r("strong",[e._v("virtual network")]),e._v(". Then I check the •\tI give the peering the name hub-spoke2-peer and select the subscription and virtual network. Then I check the Allow gateway transit and click the OK button. and click the "),r("strong",[e._v("OK")]),e._v(" button.")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering3.png")}}),e._v(" "),r("p",[e._v("Note: "),r("strong",[e._v("Allow gateway transit")]),e._v(" is needed to make the Point-to-Site connection. Otherwise I would need to use a jumpbox.")]),e._v(" "),r("p",[e._v("Once this side of the peering is ready, it will show the status as "),r("strong",[e._v("Initiated")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering4.png")}}),e._v(" "),r("ul",[r("li",[e._v("I repeat the above steps and add the peering for the "),r("strong",[e._v("hub-spoke1-peer")]),e._v(".")])]),e._v(" "),r("p",[e._v("That sets up the hub side of the peering. The next step is the spoke side.")]),e._v(" "),r("p",[r("strong",[e._v("Part 2:")])]),e._v(" "),r("ul",[r("li",[e._v("In the Azure portal, I select "),r("strong",[e._v("Virtual Networks")]),e._v(", select the "),r("strong",[e._v("spoke2-vnet")]),e._v(", then select "),r("strong",[e._v("Peerings")]),e._v(".")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering6.png")}}),e._v(" "),r("ul",[r("li",[e._v("Click the "),r("strong",[e._v("Add")]),e._v(" button.")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering7.png")}}),e._v(" "),r("ul",[r("li",[e._v("I give the peering the reverse name "),r("strong",[e._v("spoke2-hub-peer")]),e._v(", select the "),r("strong",[e._v("subscription")]),e._v(" and "),r("strong",[e._v("virtual network")]),e._v(" of hub-vnet, and check the "),r("strong",[e._v("Use remote gateway")]),e._v(". Then I click "),r("strong",[e._v("OK")]),e._v(" to create the peering.")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering8.png")}}),e._v(" "),r("p",[e._v("Note: "),r("strong",[e._v("Use remote gateways")]),e._v(" is the reverse setting of the one that allows the usage of the gateway in hub-vnet.")]),e._v(" "),r("ul",[r("li",[e._v("Now I go back to my virtual networks list and repeat for "),r("strong",[e._v("spoke1-vnet")]),e._v(".")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering9.png")}}),e._v(" "),r("p",[e._v("I now have the VNET peerings shown below:")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering10.png")}}),e._v(" "),r("p",[r("strong",[e._v("Part 3:")])]),e._v(" "),r("p",[e._v("To test that I can connect to each of the VMs, I first need to download the VPN client again.")]),e._v(" "),r("ul",[r("li",[e._v("In the Azure portal, I search for "),r("strong",[e._v("vnet-gw")]),e._v(" and select it from the results, and then select "),r("strong",[e._v("Point-to-site configuration")]),e._v(".")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering11.png")}}),e._v(" "),r("ul",[r("li",[e._v("Then I click "),r("strong",[e._v("Download VPN client")]),e._v(" and reinstall it once it downloads.")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/peering12.png")}}),e._v(" "),r("p",[e._v("Once I have it reinstalled, I "),r("strong",[e._v("connect the VPN")]),e._v(".")]),e._v(" "),r("ul",[r("li",[e._v("I open remote desktop (type "),r("strong",[e._v("mstsc")]),e._v(" at the command prompt or make sure you read "),r("router-link",{attrs:{to:"./tip9/"}},[e._v("Quickly Connect to Windows VMs with RDP")]),e._v(") and, one by one, I verify that I can connect to the private IPs for the VMs:\n"),r("ul",[r("li",[e._v("Win2016svr-east: 10.0.0.36")]),e._v(" "),r("li",[e._v("Win10vm-east: 10.1.0.68")]),e._v(" "),r("li",[e._v("Win10vm2-east: 10.2.0.68")])])],1)]),e._v(" "),r("p",[e._v("That’s all it takes to connect all three VNETs using VNET peering!")]),e._v(" "),r("p",[e._v("Read the full detail of how to "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/architecture/reference-architectures/hybrid-networking/hub-spoke?toc=%2fazure%2fvirtual-network%2ftoc.json?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Implement a hub-spoke network topology in Azure"),r("OutboundLink")],1),e._v(" on the Azure Architecture site or watch "),r("a",{attrs:{href:"https://channel9.msdn.com/Shows/Azure-Friday/Virtual-Network-vNet-Peering?term=vnet%20peering&lang-en=true?WT.mc_id=ch9-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Virtual Network (vNet) Peering"),r("OutboundLink")],1),e._v(" on Azure Friday.")])])},[],!1,null,null,null);t.default=s.exports}}]);