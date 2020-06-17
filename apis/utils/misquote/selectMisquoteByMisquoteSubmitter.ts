import {connect} from "../../src/database";

export async function selectMisquoteByMisquoteSubmitter(misquoteSubmitter: string) {
	try {
		const mysqlConnection = await connect();
		
		const mySqlQuery = "SELECT BIN_TO_UUID(misquoteId) as misquoteId, BIN_TO_UUID(misquoteProfileId) as misquoteProfileId, misquoteAttribution, misquoteContent, misquoteSubmitter FROM misquote WHERE misquoteSubmitter LIKE :misquoteSubmitter%"
		
		const [rows] = await mysqlConnection.execute(mySqlQuery, {misquoteSubmitter})
		
		return rows
	} catch (error) {
		console.log(error)
		return undefined
	}
}