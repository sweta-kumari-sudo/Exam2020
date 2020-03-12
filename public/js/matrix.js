function mapdata() {

  let nodes = [];
  let edges = [];
  // Write your logic here...
  let i,j;
  let n=7;
  for(i=0;i<n;i++) {
    for(j=0;j<n;j++) {
      obj = {data:{id: 'N'+i+'-'+j}}
      nodes.push(obj);
    }
  }
  for(i=0;i<n;i++){
    for(j=0;j<n;j++){

      if((n-1-j)>0){
        obj = {data:{id: i+'-'+j+'E', source: 'N'+i+'-'+j, target: 'N'+i+'-'+(j+1)}}
      }
      edges.push(obj);
      if(j>0){
        obj= {data:{id: i+'-'+j+'W', source: 'N'+i+'-'+j, target: 'N'+i+'-'+(j-1)}}
      }
      edges.push(obj);
      if(i>0 && i<(n-1)){
        obj= {data:{id: i+'-'+j+'S', source: 'N'+i+'-'+j, target: 'N'+(i+1)+'-'+j}}
      }
      edges.push(obj);
      if(i>0){
        obj= {data:{id: i+'-'+j+'N', source: 'N'+i+'-'+j, target: 'N'+(i-1)+'-'+j}}
      }
      edges.push(obj);
    }
  }
  for(i=0;i<n;i++){
    for(j=0;j<n;j++){
      if(i==0 && j==0){
        obj= {data:{id: i+'-'+j+'D', source: 'N'+i+'-'+j, target: 'N'+(i+1)+'-'+(j+1)}}
        edges.push(obj);
      }else if(i==0 && j==(n-1)){
        obj= {data:{id: i+'-'+j+'D', source: 'N'+i+'-'+j, target: 'N'+(i+1)+'-'+(j-1)}}
        edges.push(obj);
      }else if(i==(n-1) && j==(n-1)){
        obj= {data:{id: i+'-'+j+'D', source: 'N'+i+'-'+j, target: 'N'+(i-1)+'-'+(j-1)}}
        edges.push(obj);
      }else if(i==(n-1) && j==0){
        obj= {data:{id: i+'-'+j+'D', source: 'N'+i+'-'+j, target: 'N'+(i-1)+'-'+(j+1)}}
        edges.push(obj);
      }else if(i==0 && j<(n-1)){
        obj= {data:{id: i+'-'+j+'D', source: 'N'+i+'-'+j, target: 'N'+(i+1)+'-'+(j-1)}}
        obj1= {data:{id: i+'-'+j+'RD', source: 'N'+i+'-'+j, target: 'N'+(i+1)+'-'+(j+1)}}
        edges.push(obj,obj1);
      }else if(i!=0 && i<(n-1) && j==0){
        obj= {data:{id: i+'-'+j+'D', source: 'N'+i+'-'+j, target: 'N'+(i-1)+'-'+(j+1)}}
        obj1= {data:{id: i+'-'+j+'RD', source: 'N'+i+'-'+j, target: 'N'+(i+1)+'-'+(j+1)}}
        edges.push(obj,obj1);
      }else if(i==(n-1) && j!=0 && j<(n-1)){
        obj= {data:{id: i+'-'+j+'D', source: 'N'+i+'-'+j, target: 'N'+(i-1)+'-'+(j+1)}}
        obj1= {data:{id: i+'-'+j+'RD', source: 'N'+i+'-'+j, target: 'N'+(i-1)+'-'+(j-1)}}
        edges.push(obj,obj1);
      }else if(i!=0 && i<(n-1) && j==(n-1)){
        obj= {data:{id: i+'-'+j+'D', source: 'N'+i+'-'+j, target: 'N'+(i-1)+'-'+(j-1)}},
        obj1= {data:{id: i+'-'+j+'RD', source: 'N'+i+'-'+j, target: 'N'+(i+1)+'-'+(j-1)}}
        edges.push(obj,obj1);
      }else{
        obj= {data:{id: i+'-'+j+'ID1', source: 'N'+i+'-'+j, target: 'N'+(i-1)+'-'+(j-1)}}
        obj1= {data:{id: i+'-'+j+'ID2', source: 'N'+i+'-'+j, target: 'N'+(i-1)+'-'+(j+1)}}
        obj2= {data:{id: i+'-'+j+'ID3', source: 'N'+i+'-'+j, target: 'N'+(i+1)+'-'+(j-1)}}
        obj3= {data:{id: i+'-'+j+'ID4', source: 'N'+i+'-'+j, target: 'N'+(i+1)+'-'+(j+1)}}
        edges.push(obj,obj1,obj2,obj3);
      }
      
      
    }
  }

  elements = {
    nodes,
    edges
  };
  
  console.log(edges.length);
  return elements;

}
module.exports.mapdata = mapdata;


