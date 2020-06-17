import {Misquote} from "../interfaces/misquote";
import {connect} from "../../src/database";

export async function updateMisquote(misquote: Misquote) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "UPDATE misquote SET misquoteAttribution = :misquoteAttribution, misquoteContent = :misquoteContent, misquoteSubmitter = :misquoteSubmitter WHERE misquoteId = UUID_TO_BIN(:misquoteId)";
		
		const [rows] = await mySqlConnection.execute(mySqlQuery, misquote)
		return "Misquote Successfully Updated"
	} catch (error) {
		console.log(error)
	}
}