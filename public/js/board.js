 

// 페이지 인덱스 변수
let currentPage = 1;

// 페이지당 사진 개수
const photosPerPage = 3;

// 전체 사진 수
const totalPhotos = 100;

// 페이지 수 계산
const totalPages = Math.ceil(totalPhotos / photosPerPage);


// 페이지 표시 함수
function displayPage(pageNumber) {
    // 페이지 번호에 맞게 사진을 표시하는 기능을 구현해야 하지만 여기서는 임의의 텍스트로 대체합니다.
    const photos = [];
    for (let i = 0; i < photosPerPage; i++) {
        photos.push(`<p>Photo ${pageNumber * photosPerPage - photosPerPage + i + 1}</p>`);
    }
    console.log(`Page ${pageNumber}:`, photos);
    // outputDiv.innerHTML = photos.join(''); // 출력 부분 업데이트
}

// 초기 페이지 표시
displayPage(currentPage);

function handlePage(isNext=true){
    isNext ? currentPage++ : currentPage--;
    displayPage(currentPage)
}

// 이전 페이지로 이동하는 함수
function goToPreviousPage() {
    if (currentPage > 1) {
        handlePage(false)
    }
}

// 다음 페이지로 이동하는 함수
function goToNextPage() {
    if (currentPage < totalPages) {
        handlePage()
    }
}

window.onload = () =>{
    const outputDiv = document.getElementById('output')
    outputDiv.innerHTML = ''; // 출력 부분 초기화

    // 왼쪽 버튼 클릭 시 이전 페이지로 이동
    document.getElementById('btn-prev').addEventListener('click', goToPreviousPage);

    // 오른쪽 버튼 클릭 시 다음 페이지로 이동
    document.getElementById('btn-next').addEventListener('click', goToNextPage);
}

 document.addEventListener('DOMContentLoaded', (event) =>{
    const goHome = ()=>{
        window.location.href = '/'
    }
    document.getElementById('goHomeButton').addEventListener('click',goHome);
    document.getElementById('goHomeText').addEventListener('click',goHome);
 });

 