var aa=[1,8,9,"harika","rahul"];
/*console.log(aa[4]);
for(let i=0;i<aa.length;i++)
{
    console.log(aa[i]);
}*/
for(let i in aa)
{
    if(aa[i]=="harika")
      console.log(i);
}