<template>
  <div>
    <basisTable />
    <alignTable />
    <stripeTable />
    <borderTable />
    <emptyTable />
    <statusTable />
    <fixedHeaderTable />
    <fixedColumnTable />
    <fluidHeightTable />
    <multiHeaderTable />
    <radioTable />
    <multipleTable />
    <sortTable />
    <filterTable />
    <expandRowTable />
    <renderTable />
    <treeTable />
    <renderHeaderTable />
    <footerTotalTable />
    <customIndexTable />
    <mergeRowColumnTable />
    <paginationTable />
    <mergeTable />
    <editTable />
    <editDialogTable />
  </div>
</template>

<script>
  import basisTable from './demo/basis-table.vue';
  import alignTable from './demo/align-table.vue';
  import stripeTable from './demo/stripe-table.vue';
  import borderTable from './demo/border-table.vue';
  import emptyTable from './demo/empty-table.vue';
  import statusTable from './demo/status-table.vue';
  import fixedHeaderTable from './demo/fixed-header-table.vue';
  import fixedColumnTable from './demo/fixed-column-table.vue';
  import fluidHeightTable from './demo/fluid-height-table.vue';
  import multiHeaderTable from './demo/multi-header-table.vue';
  import radioTable from './demo/radio-table.vue';
  import multipleTable from './demo/multiple-table.vue';
  import sortTable from './demo/sort-table.vue';
  import filterTable from './demo/filter-table.vue';
  import expandRowTable from './demo/expand-row-table.vue';
  import renderTable from './demo/render-table.vue';
  import treeTable from './demo/tree-table.vue';
  import renderHeaderTable from './demo/render-header-table.vue';
  import footerTotalTable from './demo/footer-total-table.vue';
  import customIndexTable from './demo/custom-index-table.vue';
  import mergeRowColumnTable from './demo/merge-row-column-table.vue';
  import paginationTable from './demo/pagination-table.vue';
  import mergeTable from './demo/merge-table.vue';
  import editTable from './demo/edit-table.vue';
  import editDialogTable from './demo/edit-dialog-table.vue';

  export default {
    name: 'TableDemo',

    components: {
      basisTable,
      alignTable,
      stripeTable,
      borderTable,
      emptyTable,
      statusTable,
      fixedHeaderTable,
      fixedColumnTable,
      fluidHeightTable,
      multiHeaderTable,
      radioTable,
      multipleTable,
      sortTable,
      filterTable,
      expandRowTable,
      renderTable,
      treeTable,
      renderHeaderTable,
      footerTotalTable,
      customIndexTable,
      mergeRowColumnTable,
      paginationTable,
      mergeTable,
      editTable,
      editDialogTable
    }
  }
  </script>
