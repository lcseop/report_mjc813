class Rpgfuncs {
    #character = [
        {
            id: 1,
            name: "테스트1", 
            cls: "thi",
            sx: "man",
            hp: 250,
            mp: 50,
            str: 5,
            int: 5,
            dex: 15,
            lux: 25,
            birthDate: new Date(),
            imgUrl: "none"
        },
        {
            id: 2,
            name: "테스트2", 
            cls: "arc",
            sx: "woman",
            hp: 200,
            mp: 100,
            str: 10,
            int: 5,
            dex: 30,
            lux: 5,
            birthDate: new Date(),
            imgUrl: "none"
        },
    ];
    #selectedId = -1;

    // 리스트의 내역 수정 후 리스트에 정렬
    printList() {
        $(".listTitleRow").empty();


        $(".listTitleRow").append(` <div class="listItem">
              <div class="listItem2">이름</div>
            </div>
            <div class="listItem">
              <div class="listItem2">직업</div>
            </div>
            <div class="listItem">
              <div class="listItem2">성별</div>
            </div>
            <div class="listItem">
              <div class="listItem2">HP</div>
            </div>
            <div class="listItem">
              <div class="listItem2">MP</div>
            </div>
            <div class="listItem">
              <div class="listItem2">STR</div>
            </div>
            <div class="listItem">
              <div class="listItem2">INT</div>
            </div>
            <div class="listItem">
              <div class="listItem2">DEX</div>
            </div>
            <div class="listItem">
              <div class="listItem2">LUX</div>
            </div>
            <div class="listItem">
              <div class="listItem2">생일</div>
            </div>`)

        this.#character.forEach((item) => {
            $(".listTitleRow").append(this.printRow(item));
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

            if (type === "int" && this.#character[this.#selectedId].mp < 50) {
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
    setInputChara(index) {
        $("#name").val(this.#character[index].name);
        $("#cls").val(this.#character[index].cls);
        $(`input:radio[name="gender"][value="${this.#character[index].sx}"]`).prop('checked', true);
        $("#hp").val(this.#character[index].hp);
        $("#mp").val(this.#character[index].mp);
        $("#str").val(this.#character[index].str);
        $("#int").val(this.#character[index].int);
        $("#dex").val(this.#character[index].dex);
        $("#lux").val(this.#character[index].lux);
        $("#birthDate").val(`${this.#character[index].birthDate.getFullYear()}-${(this.#character[index].birthDate.getMonth()+1).toString().padStart(2,'0')}-${this.#character[index].birthDate.getDate()}`);
        $("#imgUrl").val(this.#character[index].imgUrl);
        $("#showImg").attr("src", this.#character[index].imgUrl);
        this.#selectedId = this.#character[index].id;

        $(".attacked_target").empty();
        this.#character.forEach((item) => {
            if (item.id !== this.#selectedId) {
                $(".attacked_target").append(`<option>${item.name}</option>`);
            }
        })
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
        $("#imgUrl").val("");
        this.#selectedId = -1;
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
                imgUrl: $("#imgUrl").val()
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
            targetChara.sx = $("#sx").val();
            targetChara.hp = $("#hp").val();
            targetChara.mp = $("#mp").val();
            targetChara.str = $("#str").val();
            targetChara.int = $("#int").val();
            targetChara.dex = $("#dex").val();
            targetChara.lux = $("#lux").val();
            // targetChara.birthDate = $("#birthDate").datePicker("getDate");

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
            let targetChara = this.#character.find(item => $("targetSId").val() === item.id);
            targetChara.hp -= 50;
            if (targetChara.hp <= 0) {
                targetChara.hp = 0;
                alert(`${attackChara.name}이(가) ${targetChara.name}에게 50의 피해를 입혔다!
                ${targetChara.name}은(는) 쓰러졌다.`);
            } else {
                alert(`${attackChara.name}이(가) ${targetChara.name}에게 50의 피해를 입혔다!
                ${targetChara.name}의 남은 체력 : ${targetChara.hp}`);
            }
        }
    }

    // B 캐릭터에게 마법 공격
    attackInt() {
        if (this.checkChara("att", "int")) {
            let attackChara = this.#character.find(item => this.#selectedId === item.id);
            let targetChara = this.#character.find(item => $("targetIId").val() === item.id);
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
        }
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
        rpg.setInputChara($(this).index()-10);
    })
});