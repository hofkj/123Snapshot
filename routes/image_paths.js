const express = require('express');
const router = express.Router();
// table 정의되면 여기도 불러와야함

// 예시 코드
router.get("/", (req,res) => {
    res.send("OK!");
})

// app.js에서 사용할 수 있도록 내보냄
module.exports = router;    