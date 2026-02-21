Ext.define("TDK.GRIDpo", {
  extend: "Ext.grid.Panel",
  alias: "widget.GRIDpo",
  pid: "GRIDpo",
  reference: "gridPO",
  
  initComponent: function () {
    var me = this;
    
    Ext.apply(me, {
      itemId: 'mainGRIDpo',
      store: {
        fields: [
          'po_number', 
          'po_date', 
          'sup', 
          'supname', 
          'pkp', 
          'dp', 
          'description', 
          'amount_total', 
          'grand_total', 
          'last_approved', 
          'email_vendor', 
          'group'
        ],
        data: [ {} ]
      },
      plugins: ["filterfield"],
      viewConfig: {
        enableTextSelection: true,
        columnLines: true,
      },
      columns: { 
        defaults: {   
          filter: { xtype: "textfield" },
          sortable: true,
        },
        items: [  
          { xtype: "rownumberer", width: 50, filter: false },  
          {  
            xtype: "actioncolumn",
            width: 35,
            align: "center",
            menuDisabled: true,
            stopSelection: false,
            sortable: false,
            filter: false,
            items: [
              {
                icon: vconfig.getstyle + "/icon/grid.png", 
                handler: function (xgrid, rowIndex, colIndex, e, a, rec) {
                  try {
                    var GRIDpo = xgrid.up("GRIDpo");
                    GRIDpo.GRIDpo_itemclick(xgrid, rowIndex, colIndex, e, a, rec);
                  } catch (ex) {
                    COMP.TipToast.msgbox("Error", ex.message, { cls: "danger", delay: 2000 });
                  }
                },
              },
            ],
          },
          { header: 'PO Number', dataIndex: 'po_number', width: 120},
          { header: 'PO Date', dataIndex: 'po_date', width: 100 },
          { header: 'SUP', dataIndex: 'sup', width: 80 },
          { header: 'Supplier Name', dataIndex: 'supname', width: 180 },
          { header: 'PKP', dataIndex: 'pkp', width: 60 },
          { header: 'DP', dataIndex: 'dp', width: 80 },
          { header: 'Description', dataIndex: 'description', flex: 1 },
          { header: 'Amount Total', dataIndex: 'amount_total', width: 120 },
          { header: 'Grand Total', dataIndex: 'grand_total', width: 120 },
          { header: 'Last Approved', dataIndex: 'last_approved', width: 120 },
          { header: 'Email Vendor', dataIndex: 'email_vendor', width: 180 },
          { header: 'Group', dataIndex: 'group', width: 80 }
        ]
      },
      listeners: {
        itemdblclick: 'onGridDblClick'
      }
    });
    
    me.callParent(arguments);
  },
  
  // TAMBAH: method handler untuk action column
  GRIDpo_itemclick: function(xgrid, rowIndex, colIndex, e, a, rec) {
    // Logic untuk handle click pada action column
    console.log('Action clicked for record:', rec.data);
  }
});