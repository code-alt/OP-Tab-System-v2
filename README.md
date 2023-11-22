# Code-Alt's OP Tab System v2 (v3 will be arriving shortly)
Decent-ish tab system

You can link a script tag to https://cdn.jsdelivr.net/gh/code-alt/op-tab-system-v2@main/index.js in order to use this.

# Examples:
[OP Tab System Example](https://op-tab-system.glitch.me/)
---

# DOCS:

### here are some prerequisites:

#### You must have a container for the tab frames, a container for the tabbed buttons, a tab frame template, a tab button template, and a search bar. You will also need an "op-active-tab" class that has color for an active tab along with other css for your tabs.
#### This might be hard to set up! Make sure to set up your own classes and CSS until you find it satisfactory.
---
### new TabSystem({tabContainer, tabTemplate, btnTemplate, tabBtnContainer, URLBar, tabActiveColor, tabInactiveColor, defaultPlaceholder})<br/>
#### Initializes the TabSystem class, used for holding all the information about the tab system, and it's functions. Values tabContainer, tabTemplate, btnTemplate, tabBtnContainer, and URLBar are required to be in an object.
---
### TabSystem.addTab(tab)<br/>
#### Adds a tab to the tab system. Returns the tab.
---
### TabSystem.getTabTemplate()<br/>
#### Returns the tab template.
---
### TabSystem.getBtnTemplate()<br/>
#### Returns the tab button template.
---
### TabSystem.createTabBtn(id)<br/>
#### Creates a tab button with the specified id. Returns the tab button.
---
### TabSystem.createTabFrame(id)<br/>
#### Creates a tab frame with the specified id. Returns the tab frame.
---
### TabSystem.setActiveTab(tab)<br/>
#### Sets the active tab to the specified tab.
---
### TabSystem.getActiveTab()<br/>
#### Returns the active tab.
---
### TabSystem.getTabs()<br/>
#### Returns all tabs.
---
### TabSystem.getTabCount()<br/>
#### Returns the amount of tabs.
---
### TabSystem.genRanId()<br/>
#### Generates a random id. Returns the id.
---
### TabSystem.deleteTab(tab, force)<br/>
#### Deletes the specified tab. If force is true, it will delete the tab even if it's the last tab.
---
### TabSystem.deleteTabs(tabs, force)<br/>
#### Deletes the specified tabs. If force is true, it will delete the tabs even if it's the last tab.
---
### TabSystem.deleteAllTabs()<br/>
#### Deletes all tabs.
---
### TabSystem.deleteAllTabsExcept(tab)<br/>
#### Deletes all tabs except the specified tab.
---
### TabSystem.deleteAllTabsExceptThese(tabs)<br/>
#### Deletes all tabs except the specified tabs.
---
### TabSystem.on(event, callback)
#### Event has three possible values (tabChange, tabAdd, tabDelete) where all of the specified callbacks get run when the conditions of each event is met.
---
### new Tab(connectedElement, tabFrame, searchBarContent, placeholder)<br/>
#### Initializes the Tab class, used for holding all the information about the tab frame and the button used to activate it. Values connectedElement and tabFrame are required.
---
### Tab.getConnectedElement()<br/>
#### Returns the connected element.
---
### Tab.getTabElement()<br/>
#### Returns the tab element.
---
### Tab.setTabElement(tabElement)<br/>
#### Sets the tab element.
---
### Tab.setConnectedElement(connectedElement)<br/>
#### Sets the connected element.
---

##### Made by your boy code-alt, you already know
###### Feel free to slide in my DMs if you need help with this, or if you just wanna talk :)
