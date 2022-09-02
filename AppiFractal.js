var USERNAME="YOUR USERNAME";
var PASSWORD="YOUR PASSWORD";

function Import() {
  
  var url22 ="https://app.fracttal.com/api/work_orders/";
  

  var headers = { "Authorization" : "Basic " + Utilities.base64Encode(USERNAME + ':' + PASSWORD) };
  var params = {"method":"GET","headers":headers};
  var res = UrlFetchApp.fetch(url22, params);
  var content=res.getContentText("UTF-8");
  

  var json= JSON.parse(content);
  var data= json["data"];
  

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("NOMBRE DE LA HOJA SHEET") 
  
  var array = [];
  for (var key in data) {    

      var obj = data[key];
      array.push([obj.id_work_order,
                obj.id_work_orders_tasks,
                obj.id_status_work_order,
                obj.wo_folio,
                obj.creation_date,
                obj.duration,
                obj.initial_date,
                obj.id_priorities,
                obj.final_date,
                obj.completed_percentage,
                
                obj.created_by,
                obj.signature,
                obj.personnel_description,
                obj.personnel_path_image,
                obj.code,
                obj.items_log_description,
                obj.done,
                obj.description,
                obj.id_request,
                obj.stop_assets,
                
                obj.stop_assets_sec,
                obj.tasks_log_task_type_main,
                obj.parent_description,
                obj.trigger_description,
                obj.resources_hours,
                obj.resources_inventory,
                obj.resources_human_resources,
                obj.resources_services,
                obj.cal_date_maintenance,
                obj.real_duration,
                
                obj.date_maintenance,
                obj.user_assigned,
                obj.note,
                obj.details_signature,
                obj.responsible_path_signature,
                obj.validator_path_signature,
                obj.first_date_task,
                obj.costs_center_description,
                obj.tasks_duration,
                obj.total_cost_task,
                
                obj.requested_by,
                obj.groups_description,
                obj.groups_1_description,
                obj.groups_2_description,
                obj.id_parent_wo,
                obj.has_children,
                obj.real_stop_assets_sec,
                obj.wo_final_date,
                obj.is_offline,
                obj.tasks_log_types_description,
                obj.tasks_log_types_2_description,
                
                obj.code_create_by,
                obj.event_date,
                obj.rating,
                obj.enable_budget,
                obj.work_orders_status_custom_description,
                obj.review_date,
                obj.code_responsible,
                obj.id_parent,
                obj.id_failure_type,
                obj.types_description,
                
                obj.id_failure_cause,
                obj.causes_description,
                obj.id_failure_detection_method,
                obj.detection_method_description,
                obj.id_failure_severity,
                obj.severiry_description,
                obj.id_damage_type,
                obj.damages_types_description,
                obj.caused_damage,
                obj.id_group_task,
                
                obj.id_company,
                obj.items_log_description.substring(0,4)
                
               ]);

   }  

  sheet.getRange(2, 1,array.length,array[0].length).setValues(array);  
  
}