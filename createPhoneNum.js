function createPhoneNumber(arr) {
    // 각각의 변수값을 생성해서 해당 요소들을 담아둔다
    // head = (010) <- arr의 길이가 8 일때 맨앞에 달아둔다
    let head = '(010)' // 주의할점 head 변수는 바뀔수 있기 때문에 let 을 이용한다
    // arr의 n번째 인덱스를 구하기 위해 arr.length 값을 미리 변수에 담아둔다
    const len = arr.length
    // first = arr 의 -8번째 요소부터 -4번째 요소까지 담는다
    // 문자열이 아닌 붙어있는 문자열로 받기위해 join('') 메소드를 통해 값을 받는다
    const first = arr.slice(len - 8, len - 4).join('')
    // last = arr 의 -4번째 요소부터 번째 요소까지 담는다
    // 마지막 요소는 arr.length 값 -1 이고 slice 메소드를 사용할시에 자신의 바로 앞전 수까지의 값을 가르키기 떄문에
    // len 값은 8 이지만 8-1 이되면서 7번째 인덱스까지를 받아오게 된다
    const last = arr.slice(len - 4, len).join('')

    // 함수내 변수 선언이 8자리를 기준으로 하기때문에 if 문은 11자리가 아닐때 해당 함수내 변수를 전부다 
    // 리턴하는 방식으로 코드를 짠다면 수월할 것이다
    // 11자리 일땐 head 의 값만 바꿔준후 똑같이 리턴한다

    // arr의 길이가 11일때
    // head 값을 변경해준다 => arr의 0번째부터 2번째 요소로
    if (len === 11) {
        // 이전 head 의 변수값이 '(010)' 으로 완성이 되어있기 때문에 바뀐 head 의 값도 같은 방식으로 만들어져있어야 리턴값을 한꺼번에 조종할수 있다
        head = `(${arr.slice(0, 3).join('')})` // slice 메소드는 해당입력값의 앞전까지만 불러온다
        //왜안되는겨
    }
    // 
    // head + first + last
    return `${head}${first}-${last}`
}