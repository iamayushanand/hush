const fs=require('fs')
const bcrypt=require('bcrypt')
async function setPassword(pass){
	const hash=await bcrypt.hash(pass,10)	
	await fs.writeFile("storage/pass.hash",hash,async (err)=>{
		if(err){
			console.log(err);
		}
	})
}
exports.setPassword=setPassword
