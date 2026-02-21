Ext.define("TDK.FROMpo", {
  extend: "Ext.window.Window",
  alias: "widget.FROMpo",
  title: "Create PO",
  modal: true,
  closable: true,
  maximizable: true,  
  width: 1200,
  height: 700,
  layout: 'fit',
  
  initComponent: function () {
    var me = this;
    
    Ext.apply(me, {
      items: [
        {
          xtype: 'form',
          bodyPadding: 10,
        //   autoScroll: true,
          items: [
            // Row 1: Dokumen PO dan Amount & PPN side by side
            {
              xtype: 'container',
              layout: 'hbox',
              defaults: {
                margin: '0 5 10 0'
              },
              items: [
                // Dokumen PO - Kiri
                {
                  xtype: 'fieldset',
                  title: 'Dokumen PO',
                  defaults: {
                    labelAlign: 'left',
                  },
                  items: [
                    {
                      xtype: 'container',
                      layout: 'hbox',
                      items: [
                        {
                          xtype: 'textfield',
                          fieldLabel: 'Supplier',
                          labelWidth: 70,
                          width: 150,
                          margin: '0 5 5 0'
                        },
                        {
                          xtype: 'textfield',
                          name: 'supplier_name',
                          hideLabel: true,
                          width: 250,
                          margin: '0 5 5 0'
                        },
                        {
                          xtype: 'button',
                          icon: vconfig.getstyle + "icon/search.ico",
                          width: 25
                        }
                      ]
                    },
                    {
                      xtype: 'textareafield',
                      name: 'supplier_address',
                      hideLabel: true,
                      width: 360,
                      margin: '0 0 5 75'
                    },
                    {
                      xtype: 'container',
                      layout: 'hbox',
                      items: [
                        {
                          xtype: 'textfield',
                          fieldLabel: 'Sup. PKP',
                          labelWidth: 70,
                          width: 150,
                          margin: '0 35 5 0'
                        },
                        {
                          xtype: 'textfield',
                          fieldLabel: 'Sup. BC',
                          labelWidth: 60,
                          width: 150
                        }
                      ]
                    },
                    {
                      xtype: 'container',
                      layout: 'hbox',
                      items: [
                        {
                          xtype: 'textfield',
                          fieldLabel: 'PO Number',
                          name: 'po_number',
                          labelWidth: 70,
                          width: 350,
                          margin: '0 5 0 0'
                        },
                        {
                          xtype: 'textfield',
                          fieldLabel: '',
                          width: 80,
                          margin: '0 0 23 0'
                        }
                      ]
                    }
                  ]
                },
                // Amount & PPN - Kanan
                {
                  xtype: 'fieldset',
                  title: 'Amount & PPN',
                  defaults: {
                    labelAlign: 'left',
                    labelWidth: 80
                  },
                  items: [
                    {
                      xtype: 'container',
                      layout: 'hbox',
                      items: [
                        {
                          xtype: 'textfield',
                          fieldLabel: 'Is PPN',
                          width: 150,
                          margin: '0 5 5 0',
                        }
                      ]
                    },
                    {
                      xtype: 'container',
                      layout: 'hbox',
                      margin: '0 0 5 0',
                      items: [
                        {
                          xtype: 'combobox',
                          fieldLabel: 'PPN Type',
                          name: 'ppn_type',
                          width: 250,
                          margin: '0 5 0 0',
                          displayField: "DEFNAME",
                          valueField: "DEFCODE",
                          value: "Kredit",
                          store:
                                {
                                  fields: ["DEFCODE", "DEFNAME"],
                                  data: [
                                    { DEFCODE: "C", DEFNAME: "Cash" },
                                    { DEFCODE: "K", DEFNAME: "Kredit" }
                                  ]
                                }
                        },
                        {
                          xtype: 'textfield',
                          hideLabel: true,
                          width: 50,
                        }
                      ]
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Total Amount',
                        width: 270,
                        labelWidth: 100,
                        margin: '0 5 5 0',
                    },
                    {
                      xtype: 'container',
                      layout: 'hbox',
                      margin: '0 0 5 0',
                      items: [
                        {
                          xtype: 'textfield',
                          fieldLabel: 'Nilai DPP',
                          width: 230,
                          margin: '0 5 0 0',
                        },
                        {
                          xtype: 'textfield',
                          hideLabel: true,
                          width: 50,
                        }
                      ]
                    },
                    {
                      xtype: 'container',
                      layout: 'hbox',
                      margin: '0 0 5 0',
                      items: [
                        {
                          xtype: 'textfield',
                          fieldLabel: 'PPN',
                          width: 230,
                          margin: '0 5 0 0',
                        },
                        {
                          xtype: 'textfield',
                          hideLabel: true,
                          width: 50,
                        }
                      ]
                    },
                    {
                          xtype: 'textfield',
                          fieldLabel: 'Grant Total',
                          labelWidth: 100,
                          width: 270,
                    }
                  ]
                }
              ]
            },
            // Tab Panel
            {
              xtype: 'tabpanel',
              height: 623,
              items: [
                //TABPANEL HEADER
                {
                  title: 'Header',
                  items: [
                    {
                    xtype: 'fieldset',
                    title: 'Payment Info',
                    width: 600,
                    margin: '5 0 0 5',
                    defaults: {
                        labelAlign: 'left',
                    },
                    items: [
                        {
                        xtype: 'container',
                        defaults: {
                            labelWidth: 80,
                            margin: '0 0 5 0'
                        },
                        items: [
                            {
                            xtype: 'textfield',
                            fieldLabel: 'PO Group',
                            name: 'po_group'
                            },
                            {
                            xtype: 'datefield',
                            fieldLabel: 'PO Date',
                            },
                        ]
                        },
                        {
                        xtype: 'container',
                        layout: 'hbox',
                        defaults: {
                            labelWidth: 80,
                            margin: '0 0 5 0'
                        },
                        items: [
                            {
                            xtype: 'datefield',
                            fieldLabel: 'Due Date',
                            margin: '0 15 5 0',
                            },
                            {
                            xtype: 'datefield',
                            fieldLabel: 'Sup. Due Date',
                            },
                        ]
                        },
                        {
                        xtype: 'container',
                        layout: 'hbox',
                        defaults: {
                            labelWidth: 80,
                            margin: '0 0 5 0'
                        },
                        items: [
                            {
                            xtype: 'combobox',
                            fieldLabel: 'Kash/Credit',
                            margin: '0 15 5 0',
                            store: ['K', 'C']
                            },
                            {
                            xtype: 'combobox',
                            fieldLabel: 'T.O Payment',
                            store: ['7 HARI', '15 HARI', '30 HARI', '60 HARI', '120 HARI']
                            },
                        ]
                        }, 
                        {
                        xtype: 'container',
                        layout: 'hbox',
                        defaults: {
                            labelWidth: 80,
                            margin: '0 0 5 0'
                        },
                        items: [
                            {
                            xtype: 'combobox',
                            fieldLabel: 'ADV Payment',
                            margin: '0 15 5 0',
                            store: ['YES', 'NO']
                            },
                            {
                            xtype: 'combobox',
                            fieldLabel: 'PO Type',
                            store: ['IREGULER', 'REGULER']
                            },
                        ]
                        }
                        ]
                    },
                  ]
                },
                //TABPANEL PR ITEM/PART
                {
                  title: 'PR Item/Part',
                  xtype: 'gridpanel',
                  scrollable: true,
                  store: {
                    fields: ['prnumber', 'partcode', 'partname', 'pr', 'qty', 'fob_price', 'po', 'qty', 'quotation', 'status_cancel', 
                              'user', 'date', 'remark', 'responsible', 'type', 'qty', 'squence', 'po', 'pr', 'code', 
                              'carline', 'name', 'costcenter', 'kode', 'name' ],
                    data: [{}]
                  },
                  columns: [
                    {
                      xtype: 'rownumberer',
                      text: '',
                      width: 30
                    },
                    {
                      text: 'PRNUMBER',
                      width: 150,
                      dataIndex: 'prnumber',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 130,
                          margin: '0 5 5 5'
                        }
                      ]
                    },
                    {
                      text: 'PARTCODE',
                      width: 100,
                      dataIndex: 'partcode',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 80,
                          margin: '0 5 5 5'
                        }
                      ]
                    },
                    {
                      text: 'PARTNAME',
                      width: 100,
                      dataIndex: 'partname',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 80,
                          margin: '0 5 5 5'
                        }
                      ]
                    }, {
                      text: 'PR',
                      columns: [
                        {text: 'QTY', dataIndex: 'qty', flex: 1},
                        {text: 'FOB PRICE', dataIndex: 'fob_price', flex: 1},
                      ]
                    }, 
                    {
                      text: 'PO',
                      columns: [
                        {text: 'QTY', dataIndex: 'qty', flex: 1},
                        {text: 'QUOTATION', dataIndex: 'quotation', flex: 1},
                      ]
                    }, 
                    {
                      text: 'STATUS CANCEL',
                      columns: [
                        {text: 'USER', dataIndex: 'user', flex: 1},
                        {text: 'DATE', dataIndex: 'date', flex: 1},
                        {text: 'REMARK', dataIndex: 'remark', flex: 1},
                        {text: 'RESPONSIBLE', dataIndex: 'responsible', flex: 1},
                        {text: 'TYPE', dataIndex: 'type', flex: 1},
                        {text: 'QTY', dataIndex: 'qty', flex: 1},
                      ]
                    }, {
                      text: 'SQUENCE',
                      columns: [
                        {text: 'PR', dataIndex: 'pr', flex: 1},
                        {text: 'PO', dataIndex: 'po', flex: 1},
                      ]
                    },  
                    {
                      text: 'CARLINE',
                      columns: [
                        {text: 'KODE', dataIndex: 'kode', flex: 1},
                        {text: 'NAME', dataIndex: 'name', flex: 1},
                      ]
                    }, 
                    {
                      text: 'COSTCENTER',
                      columns: [
                        {text: 'KODE', dataIndex: 'kode', flex: 1},
                        {text: 'NAME', dataIndex: 'name', flex: 1},
                      ]
                    }, 
                    
                  ],
                  tbar: [
                    {
                        text: 'add PO Item/Material',
                        icon: vconfig.getstyle + '/icon/add.png'
                    },
                    {
                        text: 'Cancel All Part Item',
                        icon: vconfig.getstyle + '/icon/cancel.png'
                    }
                  ],
                  
                },
                //TABPANEL PO ITEM/PART
                {
                  title: 'PO Item/Part',
                  xtype: 'gridpanel',
                  scrollable: true,
                  store: {
                    fields: ['partcode', 'partname', 'unit', 'qty', 'harga', 'total_amount', 'nilai_dpp', 'nilai_ppn', 'grand_total'],
                    data: []
                  },
                  columns: [
                    {
                      xtype: 'rownumberer',
                      text: '',
                      width: 30
                    },
                    {
                      text: 'PARTCODE',
                      width: 100,
                      dataIndex: 'partcode',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 90,
                          margin: '0 5 5 5'
                        }
                      ]
                    }, 
                    {
                      text: 'PARTNAME',
                      width: 100,
                      dataIndex: 'partname',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 90,
                          margin: '0 5 5 5'
                        }
                      ]
                    }, 
                    {
                      text: 'UNIT',
                      width: 100,
                      dataIndex: 'unit',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 90,
                          margin: '0 5 5 5'
                        }
                      ]
                    },
                     {
                      text: 'QTY',
                      width: 100,
                      dataIndex: 'qty',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 90,
                          margin: '0 5 5 5'
                        }
                      ]
                    },
                    {
                      text: 'HARGA',
                      width: 100,
                      dataIndex: 'harga',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 90,
                          margin: '0 5 5 5'
                        }
                      ]
                    },
                    {
                      text: 'TOTAL AMOUNT',
                      width: 100,
                      dataIndex: 'total_amount',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 90,
                          margin: '0 5 5 5'
                        }
                      ]
                    },
                    {
                      text: 'NILAI DPP',
                      width: 100,
                      dataIndex: 'nilai_dpp',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 90,
                          margin: '0 5 5 5'
                        }
                      ]
                    },
                    {
                      text: 'NILAI PPN',
                      width: 100,
                      dataIndex: 'nilai_ppn',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 90,
                          margin: '0 5 5 5'
                        }
                      ]
                    },
                    {
                      text: 'GRAND TOTAL',
                      width: 100,
                      dataIndex: 'grand_total',
                      items: [
                        {
                          xtype: 'textfield',
                          width: 90,
                          margin: '0 5 5 5'
                        }
                      ]
                    },
                  ]
                },
                //TABPANEL LAMPIRAN
                {
                  title: 'Lampiran(Attachment)',
                  bodyPadding: 5,
                  tbar: [
                    {
                      xtype: 'filefield',
                      buttonOnly: true,
                      width: 50,
                    }
                  ],
                  items: [
                    {
                      xtype: 'gridpanel',
                      height: 560,
                      width: 500,
                      columns: [
                    {
                      text: 'DATE',
                      width: 150
                    },
                    {
                      text: 'FILE UPLOAD',
                      width: 250
                    },
                    {
                      text: '',
                      width: 50
                    },
                    {
                      text: '',
                      width: 50
                    },
                  ]
                    }
                  ]
                },
                //TABPANEL EXPLANATION
                {
                  title: 'Explanation',
                  layout: 'vbox',
                  items: [
                    {
                      xtype: 'toolbar',
                      width: 1570,
                      margin: '0 0 10 0',
                    items: [{
                      xtype: 'button',
                      icon: vconfig.getstyle + '/icon/save.ico',
                      text: 'Save Explanation',
                    }]
                  },
                  {
                    xtype: 'toolbar',
                    width: 1570,
                    layout: 'hbox', 
                    items: [{
                      xtype: 'combobox',
                      store: ['Tahoma', 'Arial', 'Verdana', 'Times New Roman', 'Courier New'],
                      value: 'Tahoma',
                      width: 150,
                      editable: false
                    }, {
                      xtype: 'button',
                      tooltip: 'Bold',
                      enableToggle: true,
                      icon: vconfig.getstyle + 'icon/bold.ico'
                    }, {
                      xtype: 'button',
                      tooltip: 'Italic',
                      enableToggle: true,
                      icon: vconfig.getstyle + 'icon/italic.ico'
                    }, {
                      xtype: 'button',
                      tooltip: 'Underline',
                      enableToggle: true,
                      icon: vconfig.getstyle + 'icon/underline.ico'
                    }, {
                      xtype: 'button',
                      icon: vconfig.getstyle + 'icon/growfont.ico',
                      tooltip: 'Font Size'
                    }, {
                      xtype: 'button',
                      icon: vconfig.getstyle + 'icon/growfont.ico',
                      tooltip: 'Superscript'
                    }, {
                      xtype: 'button',
                      icon: vconfig.getstyle + 'icon/fontbackground.ico',
                      tooltip: 'Text Color'
                    }, {
                      xtype: 'button',
                      icon: vconfig.getstyle + 'icon/fontßolor.ico',
                      tooltip: 'Highlight Color'
                    }, '-', {
                      xtype: 'button',
                      icon: vconfig.getstyle + 'icon/alignleft.ico',
                      tooltip: 'Align Left'
                    }, {
                      xtype: 'button',
                      icon: vconfig.getstyle + 'icon/aligncenter.ico',
                      tooltip: 'Align Center'
                    }, {
                      xtype: 'button',
                      icon: vconfig.getstyle + 'icon/alignright.ico',
                      tooltip: 'Align Right'
                    }, '-', {
                      xtype: 'button',
                      icon: vconfig.getstyle + 'icon/globe.ico',
                      tooltip: 'Emoticon'
                    }, {
                      xtype: 'button',
                      icon: vconfig.getstyle + 'icon/numberedlist.ico',
                      tooltip: 'Bullet List'
                    }, {
                      xtype: 'button',
                      icon: vconfig.getstyle + 'icon/listmenu.ico',
                      tooltip: 'Numbered List'
                    }, {
                      xtype: 'button',
                      Icon: 'fa fa-image',
                      tooltip: 'Insert Image'
                    }]
                  },
                  ]
                },
               //Tabpanel APPROVAL
                {
                title: 'Approval',
                bodyPadding: 5,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [ 
                    {
                        xtype: 'gridpanel',
                        flex: 1,
                        margin: '0 10 0 0', 
                        columns: [
                          {
                            text: 'COLUMN',
                            width: 100
                          },
                          {
                            text: 'APPROVED',
                            width: 150
                          },
                          {
                            text: 'DATE',
                            width: 100
                          }
                        ]                      
                      },
                      {
                      xtype: 'container',
                      flex: 1,
                      layout: 'hbox',
                      items: [
                        {
                          title: 'Approve',
                          height: 100,
                          width: 80,
                          titleAlign: 'center',
                          style: 'background-color: #8B7B8B;',
                          bodyStyle: 'background-color: white;',
                          margin: '0 5 5 0'
                        },
                        {
                          title: 'Approve',
                          height: 100,
                          width: 80,
                          titleAlign: 'center',
                          style: 'background-color: #8B7B8B;',
                          bodyStyle: 'background-color: white;',
                          margin: '0 5 5 0'
                        },{
                          title: 'Verify',
                          height: 100,
                          width: 80,
                          titleAlign: 'center',
                          style: 'background-color: #8B7B8B;',
                          bodyStyle: 'background-color: white;',
                          margin: '0 5 5 0'
                        },{
                          title: 'Check',
                          height: 100,
                          width: 80,
                          titleAlign: 'center',
                          style: 'background-color: #8B7B8B;',
                          bodyStyle: 'background-color: white;',
                          margin: '0 5 5 0'
                        },{
                          title: 'Prepare',
                          height: 100,
                          width: 80,
                          titleAlign: 'center',
                          style: 'background-color: #8B7B8B;',
                          bodyStyle: 'background-color: white;',
                          margin: '0 5 5 0'
                        },
                      ]
                    }
                  ]
                },
                //TABPANEL REVISION
                {
                  title: 'Revision',
                  bodyPadding: 5,
                  items: [
                        {
                          xtype: 'gridpanel',
                          height: 585,
                          columns: [
                        {
                          text: 'USER REVISI',
                          width: 150
                        },
                        {
                          text: 'DATE',
                          width: 100
                        },
                        {
                          text: 'REMARK',
                          width: 400
                        }
                      ]
                    }
                  ]
                },
                //TABPANEL HISTORY
                {
                  title: 'History',
                  bodyPadding: 5,
                  items: [
                    {
                      xtype: 'gridpanel',
                      height: 585,
                      width: 550,
                      columns: [
                        {
                          text: 'KATEGORI',
                          width: 100
                        },
                        {
                          text: 'DESCRIPTION',
                          width: 250
                        },
                        {
                          text: 'USER',
                          width: 70
                        },
                        {
                          text: 'DATE',
                          width: 100
                        },
                      ]
                    }
                  ]
                },
                //TABPANEL EMAIL VENDOR
                {
                  title: 'Email Vendor',
                  layput: 'vbox',
                  tbar: [{
                        text: 'Send Email to Vendor/Supplier',
                        icon: vconfig.getstyle + 'icon/iconset/mail/Mail_16x16.png',
                    }],
                  bodyPadding: 5,
                  items: [
                    {
                      xtype: 'gridpanel',
                      height: 560,
                      columns: [
                    {
                      text: 'SEND',
                      width: 50
                    },
                    {
                      text: 'EMAIL VENDOR',
                      width: 150
                    },
                    {
                      text: 'EMAIL TO',
                      width: 350
                    },
                    {
                      text: 'CC TO',
                      width: 350
                    },
                    {
                      text: 'USER',
                      width: 70
                    },
                    {
                      text: 'DATE',
                      width: 100
                    },
                  ]
                    }
                  ]
                // }, {
                //   title: 'Vendor/Supplier',
                //   layout: 'hbox',
                //   items: [ 
                //      {
                //     xtype: 'fieldset',
                //     title: 'Payment Info',
                //     width: 600,
                //     height: 550,
                //     margin: '5 0 0 5',
                //     defaults: {
                //         labelAlign: 'left',
                //     },
                //   }
                //   ]
                // }
                }
              ]
            },
          ]
        }
      ],
      dockedItems: [
        {
          xtype: 'toolbar',
          dock: 'top',
          items: [
            {
              text: 'Save',
              icon: vconfig.getstyle + 'icon/save.ico',
              handler: 'onSave',
              itemId: 'btnSave'
            },
            '-',
            {
              text: 'Posting',
              icon: vconfig.getstyle + 'icon/lock.png',
              handler: 'onPosting',
              itemId: 'btnPosting'
            },
            '-',
            {
              text: 'Cancel',
              icon: vconfig.getstyle + 'icon/delete.png',
              handler: function(btn) {
                btn.up('window').close();
              }
            },
            '->',
            {
              text: 'View Pdf',
              icon: vconfig.getstyle + 'icon/pdf.png'
            }
          ]
        }
      ]
    });
    
    me.callParent(arguments);
  }
});