

// 0605 sql & 데이터 내려주기

const query = `SELECT name, content, postIdx FROM ${postTable} INNER JOIN ${userTable} ON Post.User_userIdx = User.userIdx`;
    try {
        const result = await pool.queryParam(query);

        /* result =  [
            {
                "name": "보배",
                "content": "북한산의 풍경과 어울리는 인테리어. 숲속 그 자체!",
                "postIdx": 3
            },
            {
                "name": "서영",
                "content": "화려한 코엑스 인테리어",
                "postIdx": 5,
            },
        ] 
            
        */

        // 1. async & await 오류 코드
        const result2 = await result.map(async (element) => {
            const img = await post.getPostImgs(element['postIdx'])
            return {
                ...element,
                img
            }
        })
        return result2 // ->>>>>>>>결과 {promise <Pending>, promise <Pending>}


        /*  await은 Promise 객체 내의 데이터만 빼주기는 하지만 array 내부에 있는 promise는 관리해줄 수가 없음
            이런 문제를 해결해주려고 promise.all이라는 메소드가 있음
            
            await -> async 함수에서 반환한 Promise{} 내의 데이터만 받아와줌
            하지만, array 내부의 Promise{} 는 배열 하나하나 접근해서 promise 데이터를 빼주지 못함

            사용법 : return Promise.all(list.map(item => anAsyncFunction(item)))
         */


        // 2. Promise.all 사용
            return Promise.all(result.map(async (element) => {
                const img = await post.getPostImgs(element['postIdx'])
                return {
                    ...element,
                    img
                }
            }))

        // 3. for문 사용   
            for (let element of result) {
                element['imgUrl'] = await post.mainPostImg(element['postIdx'])
            }


        } catch (err) {
            if (err.errno == 1062) {
                console.log('getPhotoImgs ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getPhotoImgs ERROR : ', err);
            throw err;
        }

