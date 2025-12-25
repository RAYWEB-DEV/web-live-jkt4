export default async function handler(req, res){
 const { channelId } = req.query;
 const key = process.env.YT_API_KEY;
 if(!key) return res.status(500).json({error:"API KEY MISSING"});
 const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${key}`;
 const r=await fetch(url);
 const d=await r.json();
 if(d.items&&d.items.length>0){
  res.status(200).json({live:true,videoId:d.items[0].id.videoId});
 }else{
  res.status(200).json({live:false});
 }
}
