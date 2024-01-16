(function () {
  "use strict";

  var customComponents = {
    customTextfield: {
      title: "Custom Textfield",
      icon: "text",
      schema: {
        type: "textfield",
        key: "customTextfield",
        label: "Custom Textfield",
        placeholder: "Enter your text",
      },
    },
    customCheckbox: {
      title: "Custom Checkbox",
      icon: "check-square",
      schema: {
        type: "checkbox",
        key: "customCheckbox",
        label: "Custom Checkbox",
      },
    },
  };

  window.Formio.use({
    framework: "yourFramework",
    components: customComponents,
    options: {
      builder: {
        builder: {
          yourCustomGroup: {
            title: "Your Custom Group",
            weight: 0,
            default: true,
            components: ["customTextfield", "customCheckbox"],
          },
        },
      },
    },
    templates: {},
  });
})();
