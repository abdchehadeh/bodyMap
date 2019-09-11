$(document).ready(function () {
    var image = $('img');
    var selectedItems = []
     $('#selections').html( selectedItems.length>0 ?"<b>Selected body Parts: </b>"+ selectedItems : "<b>Please select a body part</b>" );

    var defaultDipTooltip = '<b><u>Spine</u></b>';

    image.mapster(
    {
         fillOpacity: 0.4,
         fillColor: "d42e16",
         strokeColor: "3320FF",
         strokeOpacity: 0.8,
         strokeWidth: 4,
         stroke: true,
         isSelectable: true,
         singleSelect: false,
         mapKey: 'name',
         listKey: 'key',
         onClick: function (e) {
             var newToolTip = defaultDipTooltip;
             if($.inArray(e.key,selectedItems) >= 0){
                 selectedItems.splice($.inArray(e.key, selectedItems),1);
             }else{
                 selectedItems.push(e.key);
             }
             // $('#selections').html( selectedItems.length);
             $('#selections').html( selectedItems.length>0 ?"<b>Selected body Parts: </b>"+ selectedItems.toString().replace(new RegExp('_', 'g')," ").replace(new RegExp(',', 'g'),", ") : "<b>Please select a body part</b>" );

         },
         showToolTip: true,
         toolTipClose: ["tooltip-click", "area-click"],
         areas: [
             {
                // name: "12",
                // key: "12",
                // selected:true,
                // strokeColor: "FFFFFF"
             },
             //    key: "head",
             //    // selected:true,
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "neck",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_shoulder",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "left_shoulder",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "chest",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "abdominal",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "pelvis",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "hip",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "left_femur_thigh",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_femur_thigh",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "left_knee",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_knee",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_tib_fib",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "left_fib_tib",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "left_ankle",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_ankle",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_foot",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "left_foot",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_humerus",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_elbow",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_forearm",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_wrist",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "right_hand",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "left_hand",
             //    strokeColor: "ABCDEF"
             // },                {
             //    key: "left_wrist",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "left_forearm",
             //    strokeColor: "FFACDF"
             // },                {
             //    key: "left_elbow",
             //    strokeColor: "FFFAAF"
             // },                {
             //    key: "left_humerus",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "skul_brain",
             //    strokeColor: "FFFFFF"
             // },                {
             //    key: "spine",
             //    strokeColor: "FFFFFF"
             // },
             ]

     });
   });