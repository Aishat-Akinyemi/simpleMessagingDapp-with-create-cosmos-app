import { useState, ChangeEvent } from "react"
import styles from "./ResponseForm.module.css"
import { Box, Heading } from "@chakra-ui/react";

type ResponseFormProps = {
  submit: (reply: string) => void;
  isConnectWallet: boolean;
  isAlreadyReplied: boolean;
}

const ResponseForm = ({ submit, isConnectWallet, isAlreadyReplied }: ResponseFormProps) => {
  const [reply, setReply] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    let val = event.target.value.trim()
    setReply(val)
  }

  if (!isConnectWallet) {
    return (
      <Box boxShadow="0 0 2px #ccc, 0 0 5px -1px #ccc" borderRadius="lg" p={5}>
        <Heading
          as="h3"
          textAlign="center"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="extrabold"
          color="primary.400"
          m={30}
        >
          Please Connect Your Wallet!
        </Heading>
      </Box>
    );
  }

  
    return (      
      <>
      {!isAlreadyReplied &&
        <Box w="full" maxW="md" mx="auto">
        <div className={styles["response-container"]}>
          <label htmlFor="reply-input">Your Response</label>
          <input
            type="text"
            name=""
            id={styles["reply-input"]}
            placeholder="type a response..."
            onChange={handleChange}
          />
          <div className={styles["response-button"]}>
            <button 
            className="button"
            disabled={reply.length <= 0}
            onClick={(e) => {
              e.preventDefault()
              submit(reply)
            }}
          >
            Post
          </button>
        </div>
        </div>
        </Box>
      }
      </>
  );
  
}

export default ResponseForm
