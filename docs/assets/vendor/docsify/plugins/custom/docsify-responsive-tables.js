// Plugin 
// MIT License 
// Copyright (c) 2018 John Hildenbiddle 
// Adds markdown table renderer for use with responsive table CSS

(function () {
  function responsiveTablesPlugin(hook, vm) {
    hook.doneEach(function () {
      // Process tables after DOM is ready
      const isEnabled = 
        ((window.$docsify || {}).themeable || {}).responsiveTables !== false;

      if (!isEnabled) return;

      // Find all tables that haven't been processed
      const tables = document.querySelectorAll('table:not([data-responsive-processed])');
      
      tables.forEach(function(table) {
        try {
          // Mark as processed
          table.setAttribute('data-responsive-processed', 'true');
          
          // Generate unique ID
          const tableId = '_' + Math.random().toString(36).substr(2, 9);
          table.id = tableId;
          
          // Get headers
          const thElms = Array.from(table.getElementsByTagName('th'));
          const thTitles = thElms.map(function (thElm) {
            return thElm.textContent.trim();
          });

          // Create wrapper if it doesn't exist
          if (!table.parentElement.classList.contains('table-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
          }

          // Generate CSS rules
          if (thTitles.length > 0) {
            const styleElm = document.head.appendChild(
              document.createElement('style')
            );
            const styleSheet = styleElm.sheet;

            thTitles.forEach((title, i) => {
              const cleanTitle = title.replace(/"/g, '\\"');
              const rule = `#${tableId} td:nth-child(${
                i + 1
              })::before{content:"${cleanTitle}";}`;

              try {
                styleSheet.insertRule(rule, styleSheet.cssRules.length);
              } catch (e) {
                console.warn('Failed to insert CSS rule:', rule, e);
              }
            });
          }
        } catch (e) {
          console.log('Failed to process responsive table:', e);
        }
      });
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = window.$docsify.plugins || [];
  window.$docsify.plugins.push(responsiveTablesPlugin);
})();