class Rpgfuncs {
    #character = [
        {
            id: 1,
            name: "스틸", 
            cls: "thi",
            sx: "man",
            hp: 250,
            mp: 50,
            str: 5,
            int: 5,
            dex: 15,
            lux: 25,
            birthDate: new Date('1998-11-23'),
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/%EC%82%AC%EB%9E%8C.png"
        },
        {
            id: 2,
            name: "비열", 
            cls: "arc",
            sx: "woman",
            hp: 200,
            mp: 100,
            str: 10,
            int: 5,
            dex: 30,
            lux: 5,
            birthDate: new Date('2008-01-01'),
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/%EC%82%AC%EB%9E%8C.png"
        },
        {
            id: 3,
            name: "쉴드", 
            cls: "war",
            sx: "man",
            hp: 500,
            mp: 50,
            str: 40,
            int: 5,
            dex: 5,
            lux: 20,
            birthDate: new Date('2005-02-13'),
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/%EC%82%AC%EB%9E%8C.png"
        },
        {
            id: 4,
            name: "메이지", 
            cls: "wiz",
            sx: "woman",
            hp: 110,
            mp: 450,
            str: 12,
            int: 75,
            dex: 10,
            lux: 15,
            birthDate: new Date('2003-07-16'),
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/75/%EC%82%AC%EB%9E%8C.png"
        },
    ];
    #selectedId = -1;
    #targets = [];

    // 리스트의 내역 수정 후 리스트에 정렬
    printList() {
        $(".listDataBlock").empty();

        this.#character.forEach((item) => {
            $(".listDataBlock").append(this.printRow(item));
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
        let html = `
        <div class="lists">
            <div class="listItem">
              <div class="listItem2">${item.name}</div>
            </div>
            <div class="listItem">
              <div class="listItem2">${this.printClass(item.cls)}</div>
            </div>
            <div class="listItem">
              <div class="listItem2">${this.printSx(item.sx)}</div>
            </div>
            <div class="listItem">
              <div class="listItem2">${item.hp}</div>
            </div>
            <div class="listItem">
              <div class="listItem2">${item.mp}</div>
            </div>
            <div class="listItem">
              <div class="listItem2">${item.str}</div>
            </div>
            <div class="listItem">
              <div class="listItem2">${item.int}</div>
            </div>
            <div class="listItem">
              <div class="listItem2">${item.dex}</div>
            </div>
            <div class="listItem">
              <div class="listItem2">${item.lux}</div>
            </div>
            <div class="listItem">
              <div class="listItem2">${item.birthDate.getFullYear()}-${item.birthDate.getMonth()+1}-${item.birthDate.getDate()}</div>
            </div>
        </div>`;

        return html;
    }

    // 조건 체크
    checkChara(mode, type="") {
        if (mode !== "add" && this.#selectedId === -1) {
                alert("목록에서 캐릭터를 먼저 선택해주세요.");
                return false;
            }
        if (mode === "att") {
            
            let targetChara = (type === "str") ? (this.#character.find(item => $("#atc_target1").val() === item.name)) : (this.#character.find(item => $("#atc_target2").val() === item.name));
            if ($(".attacked_target").val() === "") {
               alert("공격 대상이 없습니다.");
               return false;
            }

            if (type === "str" && ($("#hidden1").val() === "")) {
               alert("공격 대상이 없습니다.");
               return false;
            }

            if (type === "int" && ($("#hidden2").val() === "")) {
               alert("공격 대상이 없습니다.");
               return false;
            }

            if (type === "int" && this.#character.find(item => item.id === this.#selectedId).mp < 50) {
               alert("마나가 부족합니다.");
               return false;
            }

            if (targetChara.hp <= 0) {
               alert("대상이 이미 쓰러졌습니다.");
               return false;
            }
        }
        else {
            if (mode !== "del" && ($("#name").val().length < 1 || $("#hp").val().length < 1 || $("#mp").val().length < 1 || $("#str").val().length < 1 || $("#dex").val().length < 1) || $("#int").val().length < 1 || $("#lux").val().length < 1) {
                alert("모든 입력란에 값을 입력해주세요.");
                return false;
            }

            if ($("#name").val().length < 2 || $("#name").val().length > 10) {
                alert("이름은 2자~10자로 입력해주세요.");
                return false;
            }

            if ($("#name").val().length < 2 || $("#name").val().length > 10) {
                alert("이름은 2자~10자로 입력해주세요.");
                return false;
            }
        }
        return true;
    }

    // 목록 선택 시 값 입력
    setInputChara(index, type) {
        $("#name").val(this.#character[index].name);
        $("#cls").val(this.#character[index].cls);
        $(`input:radio[name="gender"][value="${this.#character[index].sx}"]`).prop('checked', true);
        $("#hp").val(this.#character[index].hp);
        $("#mp").val(this.#character[index].mp);
        $("#str").val(this.#character[index].str);
        $("#int").val(this.#character[index].int);
        $("#dex").val(this.#character[index].dex);
        $("#lux").val(this.#character[index].lux);
        $("#birthDate").val(`${this.#character[index].birthDate.getFullYear()}-${(this.#character[index].birthDate.getMonth()+1).toString().padStart(2,'0')}-${this.#character[index].birthDate.getDate().toString().padStart(2,'0')}`);
        $("#imgURL").val(this.#character[index].imgUrl);
        $("#showImg").attr("src", this.#character[index].imgUrl);
        this.#selectedId = this.#character[index].id;

        if (type == false) {
            $(".attacked_target").empty();
            this.#targets = [];
            let first;
            this.#character.forEach((item) => {
                if (item.id !== this.#selectedId) {
                    if (typeof first == "undefined") first = item.id;
                    this.#targets.push(item);
                    $(".attacked_target").append(`<option>${item.name}</option>`);
                }
            });

            if (typeof first != "undefined") {
                $("#hidden1, #hidden2").val(first);
            } else {
                $("#hidden1, #hidden2").val(-1);
            }
        }
        
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
        $("#birthDate").val("");
        $("#imgURL").val("");
        this.#selectedId = -1;

        $(".attacked_target").empty();
        rpg.imgChange();
    }

    // 캐릭터 추가
    insertChara() {
        if (this.checkChara("add")) {
            let newChara = {
                id: this.#character.reduce((acc, item) => (item.id > acc) ? item.id : acc, 0) + 1,
                name: $("#name").val(), 
                cls: $("#cls").val(),
                sx: $('input:radio[name="gender"]:checked').val(),
                hp: parseInt($("#hp").val()),
                mp: parseInt($("#mp").val()),
                str: parseInt($("#str").val()),
                int: parseInt($("#int").val()),
                dex: parseInt($("#dex").val()),
                lux: parseInt($("#lux").val()),
                birthDate: new Date($("#birthDate").val()),
                imgUrl: $("#imgURL").val()
            };

            this.#character.push(newChara);
            this.printList();
            this.clearInput();
        }
    }

    // 캐릭터 수정
    updateChara() {
        if (this.checkChara("up")) {
            let targetChara = this.#character.find((item) => item.id === this.#selectedId);

            targetChara.name = $("#name").val();
            targetChara.cls = $("#cls").val();
            targetChara.sx = $('input:radio[name="gender"]:checked').val();
            targetChara.hp = $("#hp").val();
            targetChara.mp = $("#mp").val();
            targetChara.str = $("#str").val();
            targetChara.int = $("#int").val();
            targetChara.dex = $("#dex").val();
            targetChara.lux = $("#lux").val();
            targetChara.birthDate = new Date($("#birthDate").val());
            targetChara.imgUrl = $("#imgURL").val();

            this.printList();
            this.clearInput();
        }
    }

    // 캐릭터 삭제
    deleteChara() {
        if (this.checkChara("del")) {
            let targetChara = this.#character.find((item) => item.id === this.#selectedId);

            let index = this.#character.indexOf(targetChara);
            this.#character.splice(index, 1);

            this.printList();
            this.clearInput();
        }
    }
    
    // B 캐릭터에게 물리 공격
    attackStr() {
        if (this.checkChara("att", "str")) {
            let attackChara = this.#character.find(item => this.#selectedId === item.id);
            let targetChara = this.#character.find(item => parseInt($("#hidden1").val()) === item.id);

            targetChara.hp -= 30;
            if (targetChara.hp <= 0) {
                targetChara.hp = 0;
                alert(`${attackChara.name}이(가) ${targetChara.name}에게 30의 피해를 입혔다!
                ${targetChara.name}은(는) 쓰러졌다.`);
            } else {
                alert(`${attackChara.name}이(가) ${targetChara.name}에게 30의 피해를 입혔다!
                ${targetChara.name}의 남은 체력 : ${targetChara.hp}`);
            }
            this.printList();
            this.setInputChara(this.#character.indexOf(attackChara), true);
        }
    }

    // B 캐릭터에게 마법 공격
    attackInt() {
        if (this.checkChara("att", "int")) {
            let attackChara = this.#character.find(item => this.#selectedId === item.id);
            let targetChara = this.#character.find(item => parseInt($("#hidden2").val()) === item.id);
            attackChara.mp -= 30;
            targetChara.hp -= 75;
            if (targetChara.hp <= 0) {
                targetChara.hp = 0;
                alert(`${attackChara.name}이(가) 30의 마나를 소모해 ${targetChara.name}에게 75의 피해를 입혔다!
                ${attackChara.name}의 남은 마나 : ${attackChara.mp}
                ${targetChara.name}은(는) 쓰러졌다.`);
            } else {
                alert(`${attackChara.name}이(가) 30의 마나를 소모해 ${targetChara.name}에게 75의 피해를 입혔다!
                ${attackChara.name}의 남은 마나 : ${attackChara.mp}
                ${targetChara.name}의 남은 체력 : ${targetChara.hp}`);
         }
         this.printList();
         this.setInputChara(this.#character.indexOf(attackChara), true);
        }
    }

    selectTarget(type) {
        if (type === "str") {
            $("#hidden1").val(this.#targets[$('#atc_target1 option:selected').index()].id);
        } else {
            $("#hidden2").val(this.#targets[$('#atc_target2 option:selected').index()].id);
        }
    }

    imgChange() {
        $("#showImg").attr("src", $("#imgURL").val());
    }

    // 디버깅용
    viewTest() {
        console.log(`객체 : ${this.#character}`);
        console.log(`가장 높은 아이디 : ${this.#character.reduce((acc, item) => (item > acc) ? item : acc, 0)}`);
    }

}

$(() => {
    rpg = new Rpgfuncs();
    rpg.printList();
    $(".attacked_target").empty();

    $("#addC").click(function(e) {
        rpg.insertChara();
    });

    $("#upC").click(function(e) {
        rpg.updateChara();
    });

    $("#delC").click(function(e) {
        rpg.deleteChara();
    });

    $("#attackStr").click(function(e) {
        rpg.attackStr();
    });

    $("#attackInt").click(function(e) {
        rpg.attackInt();
    });

    $(document).on("click", ".lists", function(e) {
        rpg.setInputChara($(this).index(), false);
    });

    $(document).on("change", "#atc_target1", function(e) {
        rpg.selectTarget("str");
    });

    $(document).on("change", "#atc_target2", function(e) {
        rpg.selectTarget("int");
    });

    $(document).on("change", "#imgURL", function(e) {
        rpg.imgChange();
    });
});