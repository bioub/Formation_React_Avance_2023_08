import { useRef } from "react";
import { utils, writeFile } from 'xlsx';

function Table2XLSX() {

  const tableRef = useRef();
  /* Callback invoked when the button is clicked */
  const xport = async () => {
    /* Create worksheet from HTML DOM TABLE */
    const wb = utils.table_to_book(tableRef.current);

    /* Export to file (start a download) */
    writeFile(wb, "SheetJSTable.xlsx");

    // import('xlsx').then(({ utils, writeFile }) => {
    //   /* Create worksheet from HTML DOM TABLE */
    //   const wb = utils.table_to_book(tableRef.current);

    //   /* Export to file (start a download) */
    //   writeFile(wb, "SheetJSTable.xlsx");
    //       })
  };

  return ( <>
    <table ref={tableRef}><tbody>
      <tr><td colSpan="3">SheetJS Table Export</td></tr>
      <tr><td>Author</td><td>ID</td><td>你好!</td></tr>
      <tr><td>SheetJS</td><td>7262</td><td>வணக்கம்!</td></tr>
      <tr><td colSpan="3">
        <a href="//sheetjs.com">Powered by SheetJS</a>
      </td></tr>
    </tbody></table>
    <button onClick={xport}><b>Export XLSX!</b></button>
  </> );
}

export default Table2XLSX;
