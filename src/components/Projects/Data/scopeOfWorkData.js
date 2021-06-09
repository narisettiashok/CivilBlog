/* User need to enter scope of work data */
const ScopeOfWorkData = [
    {
        item: "Road Works including culverts",
        descriptionHeading: "Widening and strengthening of existing road",
        itemNo: 1,
        description: "Earthwork upto top of the subgrade",
        unit: "Km",
        weightage: 0.720,
        value: 14778862.56,
        payment: 7407951.16,
        quantity: 1.995
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Widening and strengthening of existing road",
        itemNo: 2,
        description: "Sub-Base Course (GSB)",
        unit: "Km",
        weightage: 0.680,
        value: 13957814.65,
        payment: 6996398.32,
        quantity: 1.995
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Widening and strengthening of existing road",
        itemNo: 3,
        description: "Non Bituminous Course (WMM)",
        unit: "Km",
        weightage: 0.800,
        value: 16420958.40,
        payment: 8231056.84,
        quantity: 1.995
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Widening and strengthening of existing road",
        itemNo: 4,
        description: "Bituminous Base Course (DBM)",
        unit: "Km",
        weightage: 0.490,
        value: 10057837.03,
        payment: 5041522.32,
        quantity: 1.995
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Widening and strengthening of existing road",
        itemNo: 5,
        description: "Wearing Coat (BC)",
        unit: "Km",
        weightage: 0.300,
        value: 6157859.41,
        payment: 3086646.32,
        quantity: 1.995
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Widening and strengthening of existing road",
        itemNo: 6,
        description: "Widening and repair of culverts",
        unit: "Km",
        weightage: 0.040,
        value: 821047.92,
        payment: 410523.96,
        quantity: 1.995
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Widening and strengthening of existing road",
        itemNo: 7,
        description: "Earthwork in shoulders",
        unit: "Nos",
        weightage: 0.090,
        value: 1847357.81,
        payment: 410523.96,
        quantity: 2
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Reconstruction/New 2-lane realignment/bypass (flexible pavement)",
        itemNo: 8,
        description: "Earthwork upto top of the subgrade",
        unit: "Km",
        weightage: 12.390,
        value: 254319593.18,
        payment: 13066823.88,
        quantity: 19.463
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Reconstruction/New 2-lane realignment/bypass (flexible pavement)",
        itemNo: 9,
        description: "Sub-Base Course (GSB)",
        unit: "Km",
        weightage: 8.270,
        value: 169751657.50,
        payment: 8721762.19,
        quantity: 19.463
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Reconstruction/New 2-lane realignment/bypass (flexible pavement)",
        itemNo: 10,
        description: "Non Bituminous Course (WMM)",
        unit: "Km",
        weightage: 8.220,
        value: 168725347.63,
        payment: 8669030.86,
        quantity: 19.463
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Reconstruction/New 2-lane realignment/bypass (flexible pavement)",
        itemNo: 11,
        description: "Bituminous Base Course (DBM)",
        unit: "Km",
        weightage: 5.060,
        value: 103862561.84,
        payment: 5336410.72,
        quantity: 19.463
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Reconstruction/New 2-lane realignment/bypass (flexible pavement)",
        itemNo: 12,
        description: "Wearing Coat (BC)",
        unit: "Km",
        weightage: 3.020,
        value: 61989118.02,
        payment: 3184972.41,
        quantity: 19.463
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Reconstruction/New 2-lane realignment/bypass (flexible pavement)",
        itemNo: 13,
        description: "Earthwork in shoulders",
        unit: "Km",
        weightage: 0.860,
        value: 17652530.33,
        payment: 906978.90,
        quantity: 19.463
    },
    {
        item: "Road Works including culverts",
        descriptionHeading: "Reconstruction/New 2-lane realignment/bypass (flexible pavement)",
        itemNo: 14,
        description: "Culverts",
        unit: "Nos",
        weightage: 5.770,
        value: 118436162.67,
        payment: 932568.21,
        quantity: 127
    },
    {
        item: "Minor Bridges",
        descriptionHeading: "Widening and repair of Minor Bridges (quantity>6 m and <60 m)",
        itemNo: 15,
        description: "Minor Bridges",
        unit: "Nos",
        weightage: 0.030,
        value: 615785.94,
        payment: 615785.94,
        quantity: 1
    },
    {
        item: "Minor Bridges",
        descriptionHeading: "New Minor Bridges (Length>6 m and <60 m)",
        itemNo: 16,
        description: "Foundation: On completion of the foundation work including foundations for wing and return walls, abutments, piers.",
        unit: "Nos",
        weightage: 0.100,
        value: 2052414.54,
        payment: 2052414.54,
        quantity: 1
    },
    {
        item: "Minor Bridges",
        descriptionHeading: "New Minor Bridges (Length>6 m and <60 m)",
        itemNo: 17,
        description: "Sub-structure: On completion of abutments, piers up to the abutment/ pier cap including wing/ return/ retaining wall up to top",
        unit: "Nos",
        weightage: 0.040,
        value: 820842.66,
        payment: 820842.66,
        quantity: 1
    },
    {
        item: "Minor Bridges",
        descriptionHeading: "New Minor Bridges (Length>6 m and <60 m)",
        itemNo: 18,
        description: "Super-structure: On completion of the super-structure in all respects including Girder, Deck slab, bearings",
        unit: "Nos",
        weightage: 0.070,
        value: 1436628.60,
        payment: 1436928.60,
        quantity: 1
    },
    {
        item: "Minor Bridges",
        descriptionHeading: "New Minor Bridges (Length>6 m and <60 m)",
        itemNo: 19,
        description: "Approaches: On completion of approaches including Retaining walls, stone pitching, protection works complete in all respect, tests on completion in all respect and fit for use",
        unit: "Nos",
        weightage: 0.030,
        value: 615785.94,
        payment: 615785.94,
        quantity: 1
    },
    {
        item: "Minor Bridges",
        descriptionHeading: "New Minor Bridges (Length>6 m and <60 m)",
        itemNo: 20,
        description: "Guide Bunds and River Training Works: On completion of Guide Bunds and river training works complete in all respects",
        unit: "Nos",
        weightage: 0.020,
        value: 410729.22,
        payment: 410729.22,
        quantity: 1
    },
    {
        item: "Minor Bridges",
        descriptionHeading: "New Minor Bridges (Length>6 m and <60 m)",
        itemNo: 21,
        description: "Other Ancillary Works: On completion of wearing coat, expansion joints, hand rails, crash barriers, road signs & markings, tests on completion in all respect.",
        unit: "Nos",
        weightage: 0.010,
        value: 205672.50,
        payment: 205672.50,
        quantity: 1
    },
    {
        item: "Other Works",
        itemNo: 22,
        description: "RCC Covered Drain",
        unit: "rmt",
        weightage: 6.770,
        value: 138962363.40,
        payment: 69655.32,
        quantity: 1.995
    },
    {
        item: "Other Works",
        itemNo: 23,
        description: "Catch Water Drain",
        unit: "rmt",
        weightage: 0.220,
        value: 4515797.60,
        payment: 231.52,
        quantity: 19505
    },
    {
        item: "Other Works",
        itemNo: 24,
        description: "Road signs, safety Devices, Road Furniture etc.",
        unit: "Km",
        weightage: 0.290,
        value: 5952597.50,
        payment: 276865,
        quantity: 21.50
    },
    {
        item: "Other Works",
        itemNo: 25,
        description: "Road markings and Studs",
        unit: "rmt",
        weightage: 1.320,
        value: 27094584.23,
        payment: 1260213.22,
        quantity: 21.50
    },
    {
        item: "Other Works",
        itemNo: 26,
        description: "Crash Barrier",
        unit: "rmt",
        weightage: 3.370,
        value: 69173199.60,
        payment: 3943.74,
        quantity: 17540
    },
    {
        item: "Other Works",
        itemNo: 27,
        description: "Bus Bays",
        unit: "Nos",
        weightage: 0.050,
        value: 1026309.96,
        payment: 85525.83,
        quantity: 12
    },
    {
        item: "Other Works",
        itemNo: 28,
        description: "Retaining Wall",
        unit: "rmt",
        weightage: 11.960,
        value: 245493438.60,
        payment: 110582.63,
        quantity: 2220
    },
    {
        item: "Other Works",
        itemNo: 29,
        description: "Breast Wall",
        unit: "rmt",
        weightage: 19.440,
        value: 399029326.80,
        payment: 31643.88,
        quantity: 12610
    },
    {
        item: "Other Works",
        itemNo: 30,
        description: "Parapet Wall",
        unit: "rmt",
        weightage: 0.510,
        value: 10468346.70,
        payment: 3083.46,
        quantity: 3395
    },
    {
        item: "Other Works",
        itemNo: 31,
        description: "Chequered Tiles",
        unit: "rmt",
        weightage: 0.340,
        value: 6978909.00,
        payment: 3498.20,
        quantity: 1995
    },
    {
        item: "Other Works",
        itemNo: 32,
        description: "Hydro seeding",
        unit: "sqm",
        weightage: 0.070,
        value: 1437016.14,
        payment: 29.47,
        quantity: 48762
    },
    {
        item: "Other Works",
        itemNo: 33,
        description: "Mulching",
        unit: "sqm",
        weightage: 1.750,
        value: 35920408.00,
        payment: 368.32,
        quantity: 97525
    },
    {
        item: "Other Works",
        itemNo: 34,
        description: "Soil nailing for slope protection and copping",
        unit: "sqm",
        weightage: 6.610,
        value: 135678340.40,
        payment: 3478.04,
        quantity: 39010
    },
    {
        item: "Other Works",
        itemNo: 35,
        description: "Junction under Grade separator",
        unit: "Nos",
        weightage: 0.120,
        value: 2463143.77,
        payment: 144890.81,
        quantity: 17
    },
    {
        item: "Other Works",
        itemNo: 36,
        description: "Site clearance and Dismantling",
        unit: "rmt",
        weightage: 0.170,
        value: 3489450.00,
        payment: 162.30,
        quantity: 21500
    }
];

export default ScopeOfWorkData;