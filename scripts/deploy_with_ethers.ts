

import { deploy } from './ethers.ts'

(async () => {
    try {
        const result = await deploy('StudentRecords', [])
        console.log(JSON.stringify(result, null, '	'))
        console.log(`address: ${result.address}`)
    } catch (e) {
        console.log(e.message)
    }
  })()
