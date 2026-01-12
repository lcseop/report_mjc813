class Rpgfuncs {
    #character = [
        {
            name: "테스트1", 
            cls: "war",
            sx: "man",
            hp: 100,
            mp: 50,
            str: 30,
            int: 5,
            dex: 10,
            lux: 5,
            birthDate: new Date()
        },
        {
            name: "테스트1", 
            cls: "war",
            sx: "man",
            hp: 100,
            mp: 50,
            str: 30,
            int: 5,
            dex: 10,
            lux: 5,
            birthDate: new Date()
        },
    ];

    // 리스트의 내역 수정 후 리스트에 정렬
    printList() {
        $("#charaList").empty();
        this.#character.forEach((item) => {
            $("#charaList").append(printRow(item));
        });
    }
    
    // 직업 변환
    printClass(cls) {
        switch(cls) {
            case "war" : return "전사";
            case "wiz" : return "마법사";
            case "arc" : return "궁수";
            case "thi" : return "도적";
        }
    }

    // 성별 변환
    printSx(sx) {
        switch(sx) {
            case "man" : return "남자";
            case "woman" : return "여자";
        }
    }

    // html return
    printRow(item) {
        
        let html = ``;

        return html;
    }

    // 조건 체크
    checkChara(mode) {
    }

    // 목록 선택 시 값 입력
    printChara() {
        
    }

    // 캐릭터 추가
    insertChara() {
        
    }

    // 캐릭터 수정
    updateChara() {
        
    }

    // 캐릭터 삭제
    deleteChara() {
        
    }
    
    // B 캐릭터에게 물리 공격
    attackStr(B) {
    }

    // B 캐릭터에게 마법 공격
    attackInt(B) {

    }

}

$(() => {
    rpg = new Rpgfuncs();
    rpg.printList();

    $("#addC").click(function(e) {

    });

    $("#upC").click(function(e) {
        
    });

    $("#delC").click(function(e) {

    });

    $("#attackS").click(function(e) {

    });

    $("#attackI").click(function(e) {

    });
});