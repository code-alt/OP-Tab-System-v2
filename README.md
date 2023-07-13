# Code-Alt's OP Tab System v2
Decent-ish tab system

You can import https://cdn.jsdelivr.net/gh/code-alt/op-tab-system-v2/index.js in order to use this.

# Examples:

## Create a Tab with a button and tab frame template:

```js
const tabSystem = new TabSystem(); // init our tab system

var newTab = new Tab(
    tabSystem.createTabBtn(), // you can create a tab frame/btn from your template or use an existing element. An ID is not required, but it is recommended.
    tabSystem.createTabFrame() // let's also make a frame.
);

tabSystem.addTab(newTab); // let's manage the tab now
tabSystem.setActiveTab(newtab); // and let's set it as the active tab
```
<hr />

## Create a Tab with an existing button and frame:

```js
const tabSystem = new TabSystem(); // init our tab system

var newTab = new Tab(
    document.getElementById("omg-i-already-have-a-button"), // you can use an existing button if available
    document.getElementById("omg-i-already-have-a-frame") // and an existing frame
);

tabSystem.addTab(newTab); // let's manage the tab now
tabSystem.setActiveTab(newtab); // and let's set it as the active tab
```
<hr />

## Create a Tab with a button and tab frame template, using random IDs with the genRanId() function:

```js
const tabSystem = new TabSystem(); // init our tab system

var newTab = new Tab(
    tabSystem.createTabBtn(tabSystem.genRanId()), // you can create a tab frame/btn from your template or use an existing element. This uses tabSystem.genRanId() to generate an ID.
    tabSystem.createTabFrame(tabSystem.genRanId()) // let's also make a frame.
);

tabSystem.addTab(newTab); // let's manage the tab now
tabSystem.setActiveTab(newtab); // and let's set it as the active tab
```
<hr />

<br />

# DOCS:

### here are some prerequisites:

#### You must have a container for the tab frames, a container for the tabbed buttons, a tab frame template, a tab button template, and a search bar.
#### This might be hard to set up! Make sure to set up your own classes and CSS until you find it satisfactory.

### new TabSystem()<br/>
#### Initializes the TabSystem class, used for holding all the information about the tab system, and it's functions.
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
