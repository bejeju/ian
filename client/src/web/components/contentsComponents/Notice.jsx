import React, { useState ,useEffect } from 'react';
// import styled from 'styled-components';
import dummyData from '../../../dummyDate/index';

// import VS require
/*
    import { notices } from '../../../dummyDate/index' 이렇게 하면 안되고
    const { notices } = require('../../../dummyDate/index'); 이렇게해야 구조분해할당으로 사용할 수 있다.
*/

function Notice() {
    const [notices, setNotices] = useState(<></>);


    function forRenderNotices(_notices){
        return <div>
            {_notices.map((el) => {
                return <div style={{ display: 'flex', margin: '20px'}}>
                    <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>{el.title}</div>
                    <div style={{ }}>{el.birth}</div>
                </div>
            })}
        </div>
    }

    useEffect(()=>{
        // ajax요청 할 자리
        setNotices(forRenderNotices(dummyData.notices));
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <h3 className="area_tit" style={{ marginLeft: '13vw', flex: 0.2 }}>이안환경 서비스 <br></br>공지사항</h3>
            <div className="area_cont" style={{ display: 'flex', flexDirection: 'column', width: '100vw', flex: 0.7}}>
                <div className="contents">
                    <hr style={{ border: 'solid 1px black' }}></hr>
                    <div style={{ display: 'flex', margin: '20px'}}>
                        <div style={{ display: 'flex', flex: 1, justifyContent: 'center'}}>내용</div>
                        <div style={{ marginRight: '5px'}}>등록일</div>
                    </div>
                    <hr></hr>
                    <div>
                        {notices}
                    </div>
                </div>
                <div className="pageMove" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15vh', marginLeft: '25vw',width: '10vw'}}>
                    {/* 일단 하드코딩하고, 나중에 서버에서 불러오는 것 대상으로 페이지가 얼마나 되는지
                        계산 후 채울 것
                    */}
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div className="search" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3vh', marginLeft: '25vw',width: '10vw'}}>
                    <input type="text" value="검색"></input>
                </div>
            </div>
        </div>
    )
}

export default Notice

// const seletePage = styled.div`
//     margin: '20px'
// `