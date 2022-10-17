const tabItem = document.querySelectorAll('.contact_step');
const tabContent = document.querySelectorAll('.form_dl');

function back1(){
    tabItem[1].classList.remove('active');
    tabContent[1].classList.remove('active');

  // クリックしたtabItemに.activeを追加
  tabItem[0].classList.add('active');
  tabContent[0].classList.add('active');
}

function back2(){
    tabItem[2].classList.remove('active');
    tabContent[2].classList.remove('active');

  // クリックしたtabItemに.activeを追加
  tabItem[1].classList.add('active');
  tabContent[1].classList.add('active');
}

const btn01 = document.getElementById('contact_btn01');
    
// 「送信」ボタンの要素にクリックイベントを設定する
btn01.addEventListener('click', (e) => {
    // デフォルトアクションをキャンセル
    e.preventDefault();

    // 「お名前」入力欄の空欄チェック
    // フォームの要素を取得
    const name = document.querySelector('#slider_name');
    // エラーメッセージを表示させる要素を取得
    const errMsgName = document.querySelector('.err-msg-name');
    if(!name.value){
        // クラスを追加(エラーメッセージを表示する)
        errMsgName.classList.add('form-invalid');
        // エラーメッセージのテキスト
        errMsgName.textContent = 'お名前が入力されていません';
        // クラスを追加(フォームの枠線を赤くする)
        name.classList.add('input-invalid');
        // 後続の処理を止める
        return;
    }else{
        // エラーメッセージのテキストに空文字を代入
        errMsgName.textContent ='';
        // クラスを削除
        name.classList.remove('input-invalid');

        tabItem[0].classList.remove('active');
        tabContent[0].classList.remove('active');
    
      // クリックしたtabItemに.activeを追加
      tabItem[1].classList.add('active');
      tabContent[1].classList.add('active');
    };
  });

  const btn02 = document.getElementById('contact_btn02');
  const selectBox = document.querySelectorAll(".selectBox");

  btn02.addEventListener('click', () => {
    const selectBox = document.querySelectorAll(".selectBox"); 
    const alertAreaSelect = document.querySelectorAll('.alertAreaSelect');
    for(let i =0;i<selectBox.length;i++){
      if(selectBox[i].options[0].selected === true) {
        alertAreaSelect[i].classList.add('open')
        alertAreaSelect[i].innerHTML = "選択は必須です";
        }

      selectBox[i].addEventListener('change', () => {
        if(selectBox[i].options[0].selected === false) {
          alertAreaSelect[i].innerHTML = "";
            }
      });
    }


    if(!selectBox[0].options[0].selected === true && !selectBox[1].options[0].selected === true){
      tabItem[1].classList.remove('active');
      tabContent[1].classList.remove('active');

      // クリックしたtabItemに.activeを追加
      tabItem[2].classList.add('active');
      tabContent[2].classList.add('active');
    }
  });
  