import {connect} from "../../src/database";

export async function selectMisquoteByMisquoteId(misquoteId: string) {
	try {
		console.log("misquoteId in MYSQL FUNCTION",{misquoteId})
		const mysqlConnection = await connect();
		
		const mySqlQuery = 'SELECT BIN_TO_UUID(misquoteId) as misquoteId, BIN_TO_UUID(misquoteProfileId) as misquoteProfileId, misquoteAttribution, misquoteContent, misquoteSubmitter FROM misquote WHERE misquoteId = UUID_TO_BIN(:misquoteId)'
		
		const [rows] = await mysqlConnection.execute(mySqlQuery, {misquoteId})
		
		return rows
	} catch (error) {
		console.log(error)
		return undefined
	}
}
