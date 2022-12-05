import { StyledBTN } from "./style"
import { useState, useEffect } from "react"
import { GiGearHammer, GiExitDoor } from "react-icons/gi"
import { useRouter } from "next/router"


const DevBtn = () => {
    const router = useRouter()
    return (
        <StyledBTN onClick={() => (router.pathname.includes('devoptions') ? router.back() : router.push('devoptions'))}>
            {router.pathname.includes('devoptions') ?
                <GiExitDoor />
                :
                <GiGearHammer />
            }
        </StyledBTN>
    )
}

export default DevBtn