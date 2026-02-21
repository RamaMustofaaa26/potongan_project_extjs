Ext.define("TDK.Cmainpage", {
  extend: "Ext.app.ViewController",
  alias: "controller.Cmainpage",
  
  init: function (view) {
    this.control({});
    this.tdk_aes = "app-tdk-2024";
    this.task_area();
    this.renderpage();
  },
  
  task_area: function () {
    try {
    } catch (err) {
      COMP.TipToast.msgbox("Error", err.message, { cls: "danger", delay: 2000 });
    }
  },
  
  renderpage: function () { 
  },
  
  // Refresh grid
  // onRefresh: function(btn) {
  //   try {
  //     var grid = this.lookupReference('gridPO');
  //     if (grid && grid.getStore()) {
  //       grid.getStore().load();
  //       COMP.TipToast.msgbox("Info", "Data refreshed", { cls: "info", delay: 1500 });
  //     }
  //   } catch (ex) {
  //     console.error(ex);
  //     COMP.TipToast.msgbox("Error", ex.message, { cls: "danger", delay: 2000 });
  //   }
  // },
  
  // Buka form FROMpo
  onNewInput: function (btn) {
    try {
      var form = Ext.create("TDK.FROMpo", {
        listeners: {
          close: function() {
            // Refresh grid setelah form ditutup
            var grid = this.lookupReference('gridPO');
            if (grid && grid.getStore()) {
              grid.getStore().load();
            }
          },
          scope: this
        }
      });
      form.show();
    } catch (ex) {
      console.error(ex);
      COMP.TipToast.msgbox("Error", ex.message, { cls: "danger", delay: 2000 });
    }
  },
  
  // Double click pada grid untuk edit
  onGridDblClick: function(grid, record, item, index, e, eOpts) {
    try {
      var form = Ext.create("TDK.FROMpo");
      form.down('form').loadRecord(record);  // Load data ke form
      form.show();
    } catch (ex) {
      console.error(ex);
    }
  }, 

  // handler untuk actioncolumn
  onEditClick: function(grid, rowIndex, colIndex, item, e, record) {
  // Logic edit
},
onDeleteClick: function(grid, rowIndex, colIndex, item, e, record) {
  // Logic delete
},

// Handler untuk tombol Save
    onSave: function(button) {
        var win = button.up('window');
        var form = win.down('form');
        
        // Validasi form
        if (!form.isValid()) {
            Ext.Msg.alert('Error', 'Please fill all required fields!');
            return;
        }
        
        // Ambil data dari form
        var formData = form.getValues();
        
        // Simpan ke localStorage atau variabel temporary
        var savedData = localStorage.getItem('tempPOData');
        var dataArray = savedData ? JSON.parse(savedData) : [];
        
        // Tambahkan data baru
        dataArray.push({
            poNumber: formData.poNumber,
            poDate: formData.poDate,
            sup: formData.sup,
            supplierName: formData.supplierName,
            pkp: formData.pkp,
            dp: formData.dp,
            description: formData.description,
            amountTotal: formData.totalAmount,
            grandTotal: formData.grandTotal,
            status: 'Draft' // Status masih draft
        });
        
        // Simpan kembali ke localStorage
        localStorage.setItem('tempPOData', JSON.stringify(dataArray));
        
        Ext.Msg.alert('Success', 'Data saved successfully!');
    },
    
    // Handler untuk tombol Posting
    onPosting: function(button) {
        var win = button.up('window');
        var form = win.down('form');
        
        // Validasi form
        if (!form.isValid()) {
            Ext.Msg.alert('Error', 'Please fill all required fields!');
            return;
        }
        
        // Ambil data dari form
        var formData = form.getValues();
        
        // Ambil grid dari halaman utama
        var mainGrid = Ext.ComponentQuery.query('gridpanel[itemId=mainGRIDpo]')[0];
        // atau var mainGrid = this.getView().down('gridpanel');
        
        if (!mainGrid) {
            Ext.Msg.alert('Error', 'Grid not found!');
            return;
        }
        
        var store = mainGrid.getStore();
        
        // Tambahkan data ke grid
        store.add({
            poNumber: formData.poNumber,
            poDate: formData.poDate,
            sup: formData.sup,
            supplierName: formData.supplierName,
            pkp: formData.pkp,
            dp: formData.dp,
            description: formData.description,
            amountTotal: formData.totalAmount,
            grandTotal: formData.grandTotal,
            lastApproved: '',
            emailVendor: '',
            group: '',
            status: 'Posted' // Status posted
        });
        
        // Hapus dari localStorage (karena sudah di-posting)
        localStorage.removeItem('tempPOData');
        
        Ext.Msg.alert('Success', 'Data posted successfully!', function() {
            win.close(); // Tutup window setelah posting
        });
    }
})