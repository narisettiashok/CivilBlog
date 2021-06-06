import { useState } from "react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import "ag-grid-enterprise";
import Button from "../Form/Button";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import ScopeOfWorkData from "./ScopeOfWorkData.js";

function EPCScopeOfWorkPage(props) {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const rowData = ScopeOfWorkData;
    const headerHeight = 100;
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    };
    const currencyFormatter = (params) => {
        return !params.value ? null : ("Rs. " + parseFloat(params.value).toFixed(2));
    };
    const weightageFormatter = (params) => {
        return parseFloat(params.value).toFixed(2) + " %";
    };
    const rowStyle = {
        borderBottom: "0.5px grey"
    };
    const staticCellStyle = {
        borderLeft: "0.5px solid white",
        borderRight: "0.5px solid white",
    };

    return (
        <div>
            <div className="flex flex-col justify-start items-start mb-5">
                <div className="flex flex-row justify-start items-center mb-2">
                    <h2 className="w-1/4 lg:text-2xl sm:text-xl">Project Name</h2>
                    <p className="w-3/4 italic">Construction of 2 lane with hard shoulder of Kohima – Jessami road on NH- 29
                    from existing Km 76.32 (Near Mesulumi Village) to existing Km 98.38
                    (Near Chizami Village) (Design Km 74.2 to Km 95.7) Design Length-21.50 Km
                    under Bharatmala Pariyojana on EPC</p> {/* Here data should update from project Details page */}
                </div>
                <div className="w-full flex flex-row justify-start items-center">
                    <h2 className="w-1/4 lg:text-2xl sm:text-xl">Project Cost</h2>
                    <p className="w-3/4 italic"><span>Rs.</span> 2052619800 </p> {/* Here data should update from project Details page */}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div>
                    <h1 className="lg:text-2xl sm:text-xl uppercase font-bold mb-5">Scope of Work</h1>
                </div>
                {/* New Project EPC contract scope of work page */}
                <div className="ag-theme-alpine" style={{ height: "80vh", width: "100%" }}>
                    <AgGridReact
                        headerHeight={headerHeight}
                        defaultColDef={{
                            flex: 1,
                            minWidth: 150,
                            resizable: true
                        }}
                        autoGroupColumnDef={{
                            headerName: 'Item',
                            minWidth: 300,
                            cellRendererParams: {
                                suppressCount: true
                            }
                        }}
                        groupIncludeTotalFooter={true}
                        enableRangeSelection={true}
                        animateRows={true}
                        onGridReady={onGridReady}
                        rowData={rowData}
                        autoHeight={true}
                        wrapText={true}
                        suppressAggFuncInHeader={true}
                        rowStyle={rowStyle}
                    >
                        <AgGridColumn headerName="Item" field="item" rowGroup={true} hide={true} wrapText={true} autoHeight={true} />
                        <AgGridColumn headerName="Description Heading" field="descriptionHeading" rowGroup={true} wrapText={true} autoHeight={true} hide={true} />
                        <AgGridColumn headerName="Item No" field="itemNo" cellStyle={staticCellStyle} />
                        <AgGridColumn headerName="Description of item" field="description" wrapText={true} autoHeight={true} />
                        <AgGridColumn headerName="Unit" field="unit" />
                        <AgGridColumn headerName="Weightage in payment shedule in %" field="weightage" aggFunc="sum" valueFormatter={weightageFormatter} />
                        <AgGridColumn headerName="Value as per contract in Rupees" field="value" aggFunc="sum" valueFormatter={currencyFormatter} />
                        <AgGridColumn headerName="Payment Terms as per Agreement" field="payment" valueFormatter={currencyFormatter} />
                        <AgGridColumn headerName="Total length/Number's" field="quantity" />
                    </AgGridReact>
                </div>
            </div>
            <div className="w-full p-4 mt-16 flex justify-center space-x-10">
                <Button type="button" onClick={props.previousStep} widthClass="w-28" color="muted">
                    Previous
                </Button>
                <Button type="submit" widthClass="w-28" color="muted">
                    Next
                </Button>
            </div>
        </div>
    );
};

export default EPCScopeOfWorkPage;
