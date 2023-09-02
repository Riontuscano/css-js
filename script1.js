function display(){
x=parseInt(document.getElementById("imageSelector").value);
// document.write(x)

switch(x){
    case 1:document.write('<img src="https://www.wadhwaniserviceapartments.com/blog/wp-content/uploads/2020/05/mumbai-2-1536x828.jpg "');
        break;
    case 2:document.write('<img src="https://th.bing.com/th/id/OIP.GL8qrHKbjzPgtWdFTH4V5AHaEW?pid=ImgDet&rs=1" width="400px" alt="bike"');
        break;
    case 3:document.write("<img src='private jet.jpg'   alt='");
        break;
}   
}