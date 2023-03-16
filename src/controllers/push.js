"use strict";

const admin = require('firebase-admin');

exports.push = (req, res) => {
    //디바이스의 토큰 값
    let deviceToken =`cXMsMIK7pSkOHYsFMNJaQm:APA91bHzcijJK-VdgTymz1IDkC3UZjNwbx3RBk6a4pSd47JMjQ71vHSTLmAFU-Rc5DM3U1J-YIacgR-fuFrF0X2kbJ9PoL-gx2iYpPVGpI4io8uFMhNpvphpx57s2rhE6W6_cESGqAyv`
        
    let message = {
        notification: {
            title: '테스트 발송! 📢',
            body: '앱 확인해보세요! 🙋‍♂️',
        },
        token: deviceToken,
    }

    admin
        .messaging()
        .send(message)
        .then(function (response) {
            console.log('Successfully sent message: : ', response)
            return res.status(200).json({success : true})
        })
        .catch(function (err) {
            console.log('Error Sending message!!! : ', err)
            return res.status(400).json({success : false})
        });
}