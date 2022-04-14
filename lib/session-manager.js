const fs=require('fs')
const bcrypt=require('bcrypt')
let session=null;
async function createSession(pass){
	expiry=null;
	const correct_hash=fs.readFileSync('../storage/hash.pass');	
	console.log(correct_hash);
	const valid=await bcrypt.compareSync(pass,correct_hash);
	if (!valid){
		return null;
	}
	let session=JSON.stringify({"hash":"123","expiry":expiry});	
	return session;
}

exports.createSession=createSession;

function getSession(){
	if (session!=null){
		session=JSON.parse(session);
		
		if(session.expiry==null || Date.parse(expiry)>Date.now()){
			return session;
		}
	}
	return null;
}

exports.getSession=getSession;

