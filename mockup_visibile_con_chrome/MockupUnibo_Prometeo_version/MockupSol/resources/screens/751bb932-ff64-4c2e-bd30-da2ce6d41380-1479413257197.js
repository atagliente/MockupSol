jQuery("#simulation")
  .on("click", ".s-751bb932-ff64-4c2e-bd30-da2ce6d41380 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cf792e3b-e910-47a4-98e8-03930b927efd",
                    "transition": "flow"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Notifica_Tasse",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cf792e3b-e910-47a4-98e8-03930b927efd",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Notifica_Tasse",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cf792e3b-e910-47a4-98e8-03930b927efd",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Notifica_Tasse",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cf792e3b-e910-47a4-98e8-03930b927efd",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a2d00218-19b7-4a16-a049-96707270616f",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a2d00218-19b7-4a16-a049-96707270616f",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a2d00218-19b7-4a16-a049-96707270616f",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fad3aa3e-338f-4d70-ab2f-091cbda4e48c",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fad3aa3e-338f-4d70-ab2f-091cbda4e48c",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fad3aa3e-338f-4d70-ab2f-091cbda4e48c",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Notifica_Esami",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/832dc28c-9b5f-4c6e-bd58-19ff42fe3df5",
                    "transition": "flow"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Notifica_Esami",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/832dc28c-9b5f-4c6e-bd58-19ff42fe3df5",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Notifica_Esami",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/832dc28c-9b5f-4c6e-bd58-19ff42fe3df5",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-nov")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-agenda",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-tornaAlCalendario",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-ott")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-agenda",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-tornaAlCalendario",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-set")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-agenda",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-tornaAlCalendario",
                    "effect": {
                      "type": "puff",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8a4897e9-b064-4cfa-b08e-6f61f2d8ba02",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8a4897e9-b064-4cfa-b08e-6f61f2d8ba02",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_1",
                  "property": "jimGetAbsolutePositionY"
                },"-5" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "top": {
                      "type": "movetoposition",
                      "value": "20"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-5"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_1",
                    "top": {
                      "type": "movetoposition",
                      "value": "-147"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-5"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-tornaAlCalendario")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-agenda",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-tornaAlCalendario",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8cfdf22-0719-4ad1-a109-39f209991052",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8cfdf22-0719-4ad1-a109-39f209991052",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f8cfdf22-0719-4ad1-a109-39f209991052",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/15374d4a-724c-4dee-ac32-1b78cb9acfeb",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/15374d4a-724c-4dee-ac32-1b78cb9acfeb",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/15374d4a-724c-4dee-ac32-1b78cb9acfeb",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/15374d4a-724c-4dee-ac32-1b78cb9acfeb",
                    "transition": "pop"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-751bb932-ff64-4c2e-bd30-da2ce6d41380 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-751bb932-ff64-4c2e-bd30-da2ce6d41380")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-settembre"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-novembre"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-agenda"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-tornaAlCalendario"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("swipeleft", ".s-751bb932-ff64-4c2e-bd30-da2ce6d41380 .swipeleft", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-ott")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-ottobre",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-novembre",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-nov",
                    "top": {
                      "type": "movetoposition",
                      "value": "101"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "12"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-ott",
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 250,
                      "direction": "left"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-set")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-set",
                    "top": {
                      "type": "movetoposition",
                      "value": "82"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-341"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-ott",
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 250,
                      "direction": "right"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-settembre",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-ottobre",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_144")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-set",
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("swiperight", ".s-751bb932-ff64-4c2e-bd30-da2ce6d41380 .swiperight", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-nov")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-nov",
                    "top": {
                      "type": "movetoposition",
                      "value": "101"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "364"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-ott",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-ottobre",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-novembre",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-ott")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-ott",
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 250,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-set",
                    "top": {
                      "type": "movetoposition",
                      "value": "82"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "12"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-ottobre",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-settembre",
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });