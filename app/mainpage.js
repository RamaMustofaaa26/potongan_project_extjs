Ext.define("TDK.mainpage", {
  extend: "Ext.panel.Panel",
  alias: "widget.mainpage",
  pid: "mainpage",
  reference: "mainpage",
  requires: [
    "TDK.Cmainpage",
    "TDK.GRIDpo",
    "TDK.FROMpo",
  ],
  controller: "Cmainpage",
  
  initComponent: function () {
    Ext.apply(this, {
      layout: 'fit',  // Layout fit agar GRIDpo memenuhi area
      items: [
        {
          xtype: 'tabpanel',
      items: [
        {
          title: 'Create PO (PPN FLEXIBLE)',
          layout: 'fit',
      items: [
        {
          xtype: 'GRIDpo'  // ← Panggil GRIDpo di sini
        }
      ],
      dockedItems: [
        {
          xtype: "toolbar",
          height: 30,
          dock: "top",
          items: [
            "-",
            { 
              text: "Refresh", 
              icon: vconfig.getstyle + "/icon/refresh.gif ",
              handler: "onRefresh"
            },
            "-",
            { 
              text: "New Input", 
              handler: "onNewInput",  // ← Handler untuk buka FROMpo
              icon: vconfig.getstyle + "/icon/add.png"
            },"-",
            { 
              text: "Delete", 
              handler: "onNewInput",  // ← Handler untuk buka FROMpo
              icon: vconfig.getstyle + "/icon/cancel.png"
            }
          ]
        }
      ]
      }
      ]
        }
      ],
    });
    
    this.callParent(arguments);
  }
});