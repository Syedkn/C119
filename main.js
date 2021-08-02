function setup() {
   canvas = createcanvas(300, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide();
   classifier = ml5.imageClassifier()
}
function ModelLoaded()
{
   console.log('Model Loaded!');
}

function draw()
{
    image(video,0 ,0 ,300 , 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results)
{
   if (error){
      console.error(error);
   } else{
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confindence.toFixed(3);
   }
}