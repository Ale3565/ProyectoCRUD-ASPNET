var app={toggleAnalytics:function(){$.ajax({url:"/analytics-cookies-ajax",type:"post",data:{enable:$("#analyticsToggle").prop("checked")?1:0}}).done(function(a){$("#analyticsToggle").prop("checked")?$("#analyticsLabel").html("Activadas"):$("#analyticsLabel").html("Desactivadas")})}};