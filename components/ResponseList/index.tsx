import { useEffect } from "react"
import { GetRepliesResponse } from "../../codegen/Messaging.types"
import styles from "./ResponseList.module.css"
import { Box, Heading } from "@chakra-ui/react";



type ResponseListProps = {
  replies: GetRepliesResponse | null,
  isLoading: boolean,
  error: Error | null
}

const ResponseList = ( {replies,  isLoading, error }:ResponseListProps) => {


  return (  
    <Box w="full" maxW="md" mx="auto" minW="full">  
      <div className={styles["response-list"]}>
        {isLoading && !replies && <p>Loading responses ...</p>}
        {error && <p>Sorry. {error.message}</p>} 
        {
          replies && 
          (replies?.reply_list 
            ?
            (<table className={styles["styled-table"]}>
                <thead>
                  <tr>
                    <th>Address</th>
                    <th>Response</th>
                  </tr>
                </thead>
                <tbody>
                  {replies?.reply_list.map((reply, index) => (
                    <tr key={index}>
                      <td>{reply.add}</td>
                      <td>{reply.response.text}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) 
            : 
            <p>No responses Yet</p>)
        }
      </div>
    </Box>
  )
}

export default ResponseList