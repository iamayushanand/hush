let session;
function createSession(passHash){
	expiry=null;
	let session=JSON.stringify({passHash,expiry})	
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

