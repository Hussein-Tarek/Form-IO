(function () {
  "use strict";

  var customComponents = {
    Age: {
      title: "Age",
      key: "age",
      icon: "check",
      schema: {
        label: "Age",
        applyMaskOn: "change",
        mask: false,
        tableView: true,
        delimiter: false,
        requireDecimal: false,
        inputFormat: "plain",
        truncateMultipleSpaces: false,
        key: "age",
        conditional: {
          show: true,
          conjunction: "all",
          conditions: [
            {
              component: "name",
              operator: "isNotEmpty",
            },
          ],
        },
        type: "number",
        input: true,
      },
    },
    Accept: {
      title: "Accept",
      key: "accept",
      icon: "check",
      schema: {
        label: "Accept Income",
        optionsLabelPosition: "right",
        inline: true,
        tableView: false,
        defaultValue: "accept",
        values: [
          {
            label: "Accept",
            value: "accept",
            shortcut: "",
          },
          {
            label: "Refuse",
            value: "refuse",
            shortcut: "",
          },
        ],
        key: "acceptIncome",
        conditional: {
          show: true,
          conjunction: "all",
          conditions: [
            {
              component: "calculatedIncome",
              operator: "isNotEmpty",
            },
          ],
        },
        type: "radio",
        input: true,
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
            components: customComponents,
          },
        },
      },
    },
    templates: {},
  });
})();
