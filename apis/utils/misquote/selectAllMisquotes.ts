import {connect} from "../../src/database";


/**
 * Helper function that grabs all misquotes
 **/
export async function selectAllMisquotes() {
  try {
    
    const mysqlConnection = await connect()
    const mySqlQuery = "SELECT BIN_TO_UUID(misquoteId) AS misquoteId, BIN_TO_UUID(misquoteProfileId) as misquoteProfileId, misquoteAttribution, misquoteContent, misquoteSubmitter FROM misquote";
    const [rows] = await mysqlConnection.execute(mySqlQuery)
    return rows
  } catch (error) {
    console.log(error)
    return undefined
  }
}
