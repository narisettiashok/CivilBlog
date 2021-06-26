import { ReactTabulator } from "react-tabulator";
import "tabulator-tables/dist/css/tabulator.min.css";

import Button from "../Form/Button";
import scopeOfWorkData from "./Data/scopeOfWorkData.js";

function EPCScopeOfWorkPage(props) {
    const columns = [
        { formatter: "rowSelection", titleFormatter: "rowSelection", align: "center", width: 75 },
        { title: "Item", field: "item" },
        { title: "Item No", field: "itemNo", width: 100, hozAlign: "center" },
        { title: "Unit", field: "unit", hozAlign: "center", width: 100 },
        { title: "Weightage", field: "weightage", hozAlign: "center", width: 120 },
        { title: "Value", field: "value", hozAlign: "center" },
        { title: "Payment", field: "paymentTerms", hozAlign: "center" },
        { title: "Quantity", field: "quantity", hozAlign: "center" }
    ];
    let options = {
        layout: "fitColumns",
        dataTree: true,
        dataTreeStartExpanded: true,
        dataTreeElementColumn: "item",
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
                <div className="w-full">
                    <ReactTabulator
                        height={"100%"}
                        width={"100%"}
                        responsiveLayout={"collapse"}
                        data={scopeOfWorkData}
                        columns={columns}
                        options={options}
                    />
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
