class Rpgfuncs {
    #character = [
        {
            id: 1,
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
            id: 2,
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
    #selectedId = -1;

    // 리스트의 내역 수정 후 리스트에 정렬
    printList() {
        $(".charList").empty();
        this.#character.forEach((item) => {
            $(".charList").append(printRow(item));
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
            case "man" : return "남성";
            case "woman" : return "여성";
        }
    }

    // html return
    printRow(item) {
        
        let html = ``;

        return html;
    }

    // 조건 체크
    checkChara(mode) {
        if (mode !== "del" && ($("#name").val().length < 1 || $("#hp").val().length < 1 || $("#mp").val().length < 1 || $("#str").val().length < 1 || $("#dex").val().length < 1) || $("#int").val().length < 1 || $("#lux").val().length < 1) {
            alert("모든 입력란에 값을 입력해주세요.");
        }

        if ($("#name").val().length < 2 || $("#name").val().length > 10) {
            alert("이름은 2자~10자로 입력해주세요.");
        }

        if ($("#name").val().length < 2 || $("#name").val().length > 10) {
            alert("이름은 2자~10자로 입력해주세요.");
        }
    }

    // 목록 선택 시 값 입력
    setInputChara(index) {
        $("#name").val(this.#character[index].name);
        $("#cls").val(this.#character[index].cls);
        $("#sx").val(this.#character[index].sx);
        $("#hp").val(this.#character[index].hp);
        $("#mp").val(this.#character[index].mp);
        $("#str").val(this.#character[index].str);
        $("#int").val(this.#character[index].int);
        $("#dex").val(this.#character[index].dex);
        $("#lux").val(this.#character[index].lux);
        $("#birthDate").datepicker("setDate", this.#character[index].birthDate);
        this.#selectedId = this.#character[index].id;
    }

    // Input 값 초기화
    clearInput() {
        $("#name").val("");
        $("#cls").val("war");
        $("#sx").val("woman");
        $("#hp").val("0");
        $("#mp").val("0");
        $("#str").val("0");
        $("#int").val("0");
        $("#dex").val("0");
        $("#lux").val("0");
        $("#birthDate").datepicker("setDate", new Date());
        this.#selectedId = -1;
    }

    // 캐릭터 추가
    insertChara() {
        if (this.checkChara("add")) {
            let newChara = {
                id: this.#character.reduce((acc, item) => (item > acc) ? item : acc, 0) + 1,
                name: $("#name").val(), 
                cls: $("#cls").val(),
                sx: $("#sx").val(),
                hp: parseInt($("#hp").val()),
                mp: parseInt($("#mp").val()),
                str: parseInt($("#str").val()),
                int: parseInt($("#int").val()),
                dex: parseInt($("#dex").val()),
                lux: parseInt($("#lux").val()),
                birthDate: $("#birthDate").datePicker("getDate")
            };

            this.clearInput();
        }
    }

    // 캐릭터 수정
    updateChara() {
        if (this.checkChara("up")) {
            this.clearInput();
        }
    }

    // 캐릭터 삭제
    deleteChara() {
        if (this.checkChara("del")) {
            this.clearInput();
        }
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

    $(document).on("click", ".charList", function(e) {
        rpg.setInputChara($(this).index());
    })
});