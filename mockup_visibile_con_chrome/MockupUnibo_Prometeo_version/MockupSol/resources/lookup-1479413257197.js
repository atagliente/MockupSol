(function(window, undefined) {
  var dictionary = {
    "40b2596e-7c17-4eab-8032-75be4b4a727e": "Sistemi Embedded",
    "07c03916-d4bf-48c1-ad96-8039fae0037b": "Programmazione ad oggetti",
    "fad3aa3e-338f-4d70-ab2f-091cbda4e48c": "Insegnamenti",
    "cf792e3b-e910-47a4-98e8-03930b927efd": "Da pagare",
    "f8cfdf22-0719-4ad1-a109-39f209991052": "MensaSiMangia",
    "669725d9-c99d-4ca6-b8ef-60f96f0fe76a": "Exams-prenotation",
    "7d794576-36a2-428b-8fda-ed5c43c661c4": "prenotatabici",
    "fa57453c-9785-42e1-abf1-f7106547aaab": "Exams-pre",
    "a2d00218-19b7-4a16-a049-96707270616f": "Email",
    "751bb932-ff64-4c2e-bd30-da2ce6d41380": "Home",
    "8a4897e9-b064-4cfa-b08e-6f61f2d8ba02": "Login",
    "69b203d5-0d35-48eb-8d5a-accbf5a80942": "Exams-notification",
    "c0f963c6-629a-44a2-9092-945ec00eaf5b": "Exams-ver",
    "f3f239f7-56af-45f2-876a-03e0c415498f": "Tecnologie Web",
    "fa0e5d7a-1fb5-4a8e-bb32-0c192555e289": "Tasse Pagate",
    "832dc28c-9b5f-4c6e-bd58-19ff42fe3df5": "Exams-res",
    "15374d4a-724c-4dee-ac32-1b78cb9acfeb": "bici cletta",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);