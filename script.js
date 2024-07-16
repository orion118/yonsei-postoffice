// JSON 파일을 불러와서 데이터를 사용합니다.
fetch('output.json')
  .then(response => response.json())
  .then(data => {
    const buildingSelect = document.getElementById('building');
    for (const building in data) {
      const option = document.createElement('option');
      option.value = building;
      option.text = building;
      buildingSelect.appendChild(option);
    }

    // 엔터 키가 눌렸을 때 findMajor 함수를 호출하도록 이벤트 리스너 추가
    document.getElementById('roomNumber').addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        findMajor();
      }
    });

    function findMajor() {
      const building = document.getElementById('building').value;
      const roomNumber = document.getElementById('roomNumber').value;
      const result = document.getElementById('result');

      if (building && roomNumber) {
        const major = data[building][roomNumber];
        if (major) {
          result.textContent = major;
        } else {
          result.textContent = '해당 건물에 입력하신 호실이 없습니다.';
        }
      } else {
        result.textContent = '건물을 선택하시고 호실번호를 입력해주세요.';
      }
    }
  });
