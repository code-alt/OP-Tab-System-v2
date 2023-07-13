// OP TAB SYSTEM V2.0.0

// CREDITS:
// Code-Alt - Main Developer

// LICENSE:
/*

Copyright (c) 2023 Code-Alt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

// DOCS:

// here are some prerequisites:
// you must have a tab container, a btn container, a tab template, and a btn template, and a search bar.
// btw this might be hard to set up, set up your own classes and CSS until you find it satisfactory.

// new TabSystem() - Initializes the TabSystem class, used for holding all the information about the tab system, and it's functions.
// TabSystem.addTab(tab) - Adds a tab to the tab system. Returns the tab.
// TabSystem.getTabTemplate() - Returns the tab template.
// TabSystem.getBtnTemplate() - Returns the tab button template.
// TabSystem.createTabBtn(id) - Creates a tab button with the specified id. Returns the tab button.
// TabSystem.createTabFrame(id) - Creates a tab frame with the specified id. Returns the tab frame.
// TabSystem.setActiveTab(tab) - Sets the active tab to the specified tab.
// TabSystem.getActiveTab() - Returns the active tab.
// TabSystem.getTabs() - Returns all tabs.
// TabSystem.getTabCount() - Returns the amount of tabs.
// TabSystem.genRanId() - Generates a random id. Returns the id.
// TabSystem.deleteTab(tab, force) - Deletes the specified tab. If force is true, it will delete the tab even if it's the last tab.
// TabSystem.deleteTabs(tabs, force) - Deletes the specified tabs. If force is true, it will delete the tabs even if it's the last tab.
// TabSystem.deleteAllTabs() - Deletes all tabs.
// TabSystem.deleteAllTabsExcept(tab) - Deletes all tabs except the specified tab.
// TabSystem.deleteAllTabsExceptThese(tabs) - Deletes all tabs except the specified tabs.
// new Tab() - Initializes the Tab class, used for holding all the information about the tab frame and the button used to activate it.
// Tab.getConnectedElement() - Returns the connected element.
// Tab.getTabElement() - Returns the tab element.
// Tab.setTabElement(tabElement) - Sets the tab element.
// Tab.setConnectedElement(connectedElement) - Sets the connected element.

class TabSystem {
  constructor() {
    this.config = {
      tabContainer: document.getElementById("tab-frames"),
      tabTemplate: document.getElementById("tab-template"),
      btnTemplate: document.getElementById("temp-tab"),
      tabBtnContainer: document.getElementById("TabsBar"),
      URLBar: document.getElementById("adrbar"),
      tabActiveColor: "#484848",
      tabInactiveColor: "#444444d2",
      defaultPlaceholder: "Starting Page",
    };
    this.tabs = [];
    this.tabCount = 0;
    this.activeTab = null;
    this.config.tabTemplate.style.display = "none";
    this.config.btnTemplate.style.display = "none";
  }

  addTab(tab) {
    this.tabs.push(tab);
    this.tabCount++;
    return tab;
  }

  getTabTemplate() {
    return this.config.tabTemplate;
  }

  getBtnTemplate() {
    return this.config.btnTemplate;
  }

  createTabBtn(id) {
    const btn = this.getBtnTemplate().cloneNode(true);
    if (id == null) id = "";
    btn.id = id;
    btn.style.display = "inline-block";
    this.config.tabBtnContainer.appendChild(btn);
    return btn;
  }

  createTabFrame(id) {
    const frame = this.getTabTemplate().cloneNode(true);
    if (id == null) id = "";
    frame.id = id;
    frame.style.display = "none";
    this.config.tabContainer.appendChild(frame);
    return frame;
  }

  setActiveTab(tab) {
    if (!this.tabs.includes(tab) && tab != null) {
      this.addTab(tab);
    }
    if (this.activeTab != null) {
      this.activeTab.setSearchBarContent(
        this.URLBar.value
      );
      this.activeTab.setPlaceholder(
        this.URLBar.placeholder
      );
    }
    this.URLBar.value = "";
    if (tab != null && tab.getSearchBarContent()) {
      this.URLBar.value = tab.getSearchBarContent();
    }
    this.activeTab = tab;
    if (tab != null && this.activeTab.getPlaceholder()) {
      this.URLBar.placeholder =
        this.activeTab.getPlaceholder();
    }
    if (this.activeTab == null) {
      this.URLBar.placeholder = "No tab open. Click the + button to open a new tab.";
    }
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] == tab && tab != null) {
        if (this.tabs[i].tabElement != null) {
          this.tabs[i].tabElement.style.display = "initial";
        }
        if (this.tabs[i].connectedElement != null) {
          this.tabs[i].connectedElement.style.backgroundColor =
            this.config.tabActiveColor;
        }
      } else {
        if (this.tabs[i].tabElement != null && tab != null) {
          this.tabs[i].tabElement.style.display = "none";
        }
        if (this.tabs[i].connectedElement != null && tab != null) {
          this.tabs[i].connectedElement.style.backgroundColor =
            this.config.tabInactiveColor;
        }
      }
    }
  }

  getActiveTab() {
    return this.activeTab;
  }

  getTabs() {
    return this.tabs;
  }

  getTabCount() {
    return this.tabCount;
  }

  genRanId() {
    return Date.now() + Math.floor(Math.random() * 1000000000);
  }

  deleteTab(tab, force) {
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] == tab) {
        if (this.tabs[i] == this.activeTab) {
          if (this.tabs[i - 1] != null) {
            this.setActiveTab(this.tabs[i - 1]);
          } else if (this.tabs[i + 1] != null) {
            this.setActiveTab(this.tabs[i + 1]);
          } else {
            if (force != true) {
              return alert("You can't delete the last tab!");
            } else {
              this.setActiveTab(null);
              this.tabs[i].connectedElement.remove();
              this.tabs[i].tabElement.remove();
              this.tabs.splice(i, 1);
              this.tabCount--;
              return;
            }
          }
        }
        this.tabs[i].connectedElement.remove();
        this.tabs[i].tabElement.remove();
        this.tabs.splice(i, 1);
        this.tabCount--;
        break;
      }
    }
  }

  deleteTabs(tabs, force) {
    for (var i = 0; i < tabs.length; i++) {
      this.deleteTab(tabs[i], force);
    }
  }

  deleteAllTabs() {
    this.deleteTabs(this.tabs, true);
  }

  deleteAllTabsExcept(tab) {
    for (var i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i] != tab) {
        this.deleteTab(this.tabs[i], true);
      }
    }
  }

  deleteAllTabsExceptThese(tabs) {
    for (var i = 0; i < this.tabs.length; i++) {
      if (!tabs.includes(this.tabs[i])) {
        this.deleteTab(this.tabs[i], true);
      }
    }
  }

  getConfig() {
    return this.config;
  }
}

class Tab {
  constructor(connectedElement, tabFrame, searchBarContent, placeholder) {
    this.connectedElement = connectedElement;
    this.tabElement = tabFrame;
    if (searchBarContent == null) searchBarContent = "";
    this.searchBarContent = searchBarContent;
    if (placeholder == null)
      placeholder = new TabSystem().getConfig().defaultPlaceholder;
    this.placeholder = placeholder;
    this.connectedElement.addEventListener("click", () => {
      new TabSystem().setActiveTab(this);
    });
  }

  getConnectedElement() {
    return this.connectedElement;
  }

  getTabElement() {
    return this.tabElement;
  }

  setTabElement(tabElement) {
    this.tabElement = tabElement;
  }

  setConnectedElement(connectedElement) {
    this.connectedElement = connectedElement;
  }

  setSearchBarContent(searchBarContent) {
    this.searchBarContent = searchBarContent;
  }

  getSearchBarContent() {
    return this.searchBarContent;
  }

  findFirstIFrame() {
    return this.tabElement.querySelector("iframe");
  }

  hasIFrame() {
    if (this.findIFrame() != null) {
      return true;
    } else {
      return false;
    }
  }

  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
  }

  getPlaceholder() {
    return this.placeholder;
  }
}
