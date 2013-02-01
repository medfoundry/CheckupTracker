/* javascript for CheckupTracker. (c) Mark Sullivan 2013 */



function setActiveCheckup(checkupName,destURL) {
    //alert ('setting active checkup');
    activeCheckup = checkupName;
    window.localStorage.setItem("activeCheckupName", activeCheckup);
    //continue to destination URL
    $.mobile.changePage(destURL);
}

function setActiveChild(child,destURL) {

    //want to set activeChild = param
    activeChild = child;
    window.localStorage.setItem("activeChildName", activeChild);
    //continue to destination URL
    $.mobile.changePage(destURL);
}

function listChildren() {
    //build the list of children from localStore; re-initialize the page

    var output = "";
    output += '<ul data-role="listview" data-inset="true" data-split-icon="gear" data-split-theme="d" data-mini="true">';
    for (var i= 0; i<childrenObject.children.length; i++) {
        output += "<li><a href='../checkup_list.html?child=" + childrenObject.children[i].child.child_name + "'><img src='img/CheckUpTracker_32.png' />";
        output += "<h3>" + childrenObject.children[i].child.child_name + "</h3></a>";
        output += '<a href="#add_child?child="' + childrenObject.children[i].child.child_name + '" data-rel="dialog" data-transition="slideup">Edit Child Information</a></li>';
    }
    output += "</ul>";
    $("#children_here").html(output).trigger( "create" );
}


function populateVaccines(vaccines) {
    var htmlOutput = "";
    vaccines = vaccines.vaccines;

    for (var i=0; i<vaccines.length; i++) {
        htmlOutput += "<option>" + vaccines[i].trade_name + "</option>";
    }
    $("#vaccine_list").html(htmlOutput).trigger( "create" );
};


