import {Misquote} from "../interfaces/misquote";
import {connect} from "../../src/database";

export async function deleteMisquote(misquoteId: string) {
	try {
		const mySqlConnection = await connect()
		const mySqlQuery = "DELETE FROM misquote WHERE misquoteId = UUID_TO_BIN(:misquoteId)"
		
		const [rows] = await mySqlConnection.execute(mySqlQuery,{misquoteId})
		return "Misquote Successfully Deleted"
	} catch (error) {
		console.log(error)
	}
}