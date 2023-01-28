// 사이드바
function openSideBar() {
    document.getElementById("SideBar").style.setProperty('display', 'flex', 'important');
    document.getElementById("SideBarMain").style.setProperty('width', 'calc(100% - 280px)');
    document.getElementById("SideBarMain").style.setProperty('margin-Left', '17.5rem');
    document.getElementById("SideBarMain").style.setProperty('opacity', '0.85');
}
function closeSideBar() {
    document.getElementById("SideBar").style.setProperty('display', 'none');
    document.getElementById("SideBarMain").style.setProperty('width', '100%');
    document.getElementById("SideBarMain").style.setProperty('margin-Left', '0');
    document.getElementById("SideBarMain").style.setProperty('opacity', '1');
}
//입퇴장
function welcometogglebox(checkbox) {
    const selectch = document.getElementById("welchselect");
    const msg = document.getElementById("welmsg");
    const div = document.getElementById("weldiv");
    checkbox.checked ? div.style.setProperty('display', 'block') : div.style.setProperty('display', 'none');
    selectch.disabled = checkbox.checked ? false : true;
    msg.disabled = checkbox.checked ? false : true;
    
    if(!selectch.disabled) msg.focus();
}
function byetogglebox(checkbox) {
    const selectch = document.getElementById("byechselect");
    const msg = document.getElementById("byemsg");
    const div = document.getElementById("byediv");
    checkbox.checked ? div.style.setProperty('display', 'block') : div.style.setProperty('display', 'none');
    selectch.disabled = checkbox.checked ? false : true;
    msg.disabled = checkbox.checked ? false : true;

    if(!selectch.disabled) msg.focus();
}
function welcometogglebox(checkbox) {
    const selectch = document.getElementById("welchselect");
    const msg = document.getElementById("welmsg");
    const div = document.getElementById("weldiv");
    checkbox.checked ? div.style.setProperty('display', 'block') : div.style.setProperty('display', 'none');
    selectch.disabled = checkbox.checked ? false : true;
    msg.disabled = checkbox.checked ? false : true;
    
    if(!selectch.disabled) msg.focus();
}
function greetingsload() {
    //welcome
    const welchecked = document.getElementById("welcheckbox").checked;
    const welselectch = document.getElementById("welchselect");
    const welmsg = document.getElementById("welmsg");
    const weldiv = document.getElementById("weldiv");
    welchecked ? weldiv.style.setProperty('display', 'block') : weldiv.style.setProperty('display', 'none');
    welselectch.disabled = welchecked ? false : true;
    welmsg.disabled = welchecked ? false : true;
    //bye
    const byechecked = document.getElementById("byecheckbox").checked;
    const byeselectch = document.getElementById("byechselect");
    const byemsg = document.getElementById("byemsg");
    const byediv = document.getElementById("byediv");
    byechecked ? byediv.style.setProperty('display', 'block') : byediv.style.setProperty('display', 'none');
    byeselectch.disabled = byechecked ? false : true;
    byemsg.disabled = byechecked ? false : true;
}   
//보안초대링크 
function secinvload() {
    const secchecked = document.getElementById("secinvbox").checked;
    const seclink = document.getElementById("seclink");
    const selectlev = document.getElementById("seclevel");
    const div = document.getElementById("secdiv");
    secchecked ? div.style.setProperty('display', 'block') : div.style.setProperty('display', 'none');
    selectlev.disabled = secchecked ? false : true;

    if(!selectlev.disabled) seclink.focus();
}   
function secinvtogglebox(checkbox) {
    const seclink = document.getElementById("seclink");
    const selectlev = document.getElementById("seclevel");
    const div = document.getElementById("secdiv");
    checkbox.checked ? div.style.setProperty('display', 'block') : div.style.setProperty('display', 'none');
    selectlev.disabled = checkbox.checked ? false : true;

    if(!selectlev.disabled) seclink.focus();
}
//레벨알림
function levelnotiload() {
    const usebox = document.getElementById("levelbox").checked;
    const msgbox = document.getElementById("levelsendbox").checked;
    const ch = document.getElementById("levelchselect")
    const message = document.getElementById("message")
    const embed = document.getElementById("embed")
    const msg = document.getElementById("levelmsg")
    const div = document.getElementById("leveldiv");
    const div2 = document.getElementById("levelsenddiv");

    usebox ? div.style.setProperty('display', 'block') : div.style.setProperty('display', 'none');
    msgbox ? div2.style.setProperty('display', 'block') : div2.style.setProperty('display', 'none');

    ch.disabled = msgbox ? false : true;
    message.disabled = msgbox ? false : true;
    embed.disabled = msgbox ? false : true;
    msg.disabled = msgbox ? false : true;
}   
function levelusetogglebox(checkbox) {
    const div = document.getElementById("leveldiv");
    checkbox.checked ? div.style.setProperty('display', 'block') : div.style.setProperty('display', 'none');
    document.getElementById("levelsenddiv").style.setProperty('display', 'none');
    document.getElementById("levelchselect").disabled = true;
    document.getElementById("message").disabled = true;
    document.getElementById("embed").disabled = true;
    document.getElementById("levelmsg").disabled = true;    
    document.getElementById("levelsendbox").checked = false;
}
function levelsendtogglebox(checkbox) {
    const div = document.getElementById("levelsenddiv");
    checkbox.checked ? div.style.setProperty('display', 'block') : div.style.setProperty('display', 'none');
    document.getElementById("levelchselect").disabled = checkbox.checked ? false : true;
    document.getElementById("message").disabled = checkbox.checked ? false : true;
    document.getElementById("embed").disabled = checkbox.checked ? false : true;
    document.getElementById("levelmsg").disabled = checkbox.checked ? false : true;
}
//로그
function loggingusetogglebox(checkbox) {
    const div = document.getElementById("logging");
    checkbox.checked ? div.style.setProperty('display', 'block') : div.style.setProperty('display', 'none');
}
function loggingload() {
    const usebox = document.getElementById("loggingUse").checked;
    const AllChannelusebox = document.getElementById("AllChannel").checked;
    const EachChannelusebox = document.getElementById("EachChannel").checked;
    const div = document.getElementById("logging");
    const AllChannel_div = document.getElementById("AllChannel-div");
    const Channel_div = document.getElementById("Channel-div");
    usebox ? div.style.setProperty('display', 'block') : div.style.setProperty('display', 'none');
    AllChannelusebox ? AllChannel_div.style.setProperty('display', 'block') : AllChannel_div.style.setProperty('display', 'none');
    EachChannelusebox ? Channel_div.style.setProperty('display', 'block') : Channel_div.style.setProperty('display', 'none');
}   
function loggingSelect(check) {
    if(check !== true && check !== false) return;
    const checkboxes = document.getElementsByClassName('logging-select');
    Array.prototype.filter.call(checkboxes, (m) => m.checked = check);
}
function showSpecialCharactersGreetings() {
    var swal_html = `<div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <div class="modal-title h4 font-Nanum font-black">변수 목록</div>
                <button type="button" onclick="Swal.close(); return false;">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="py-4 modal-body">
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th style="min-width: 135px;">문자</th>
                                <th style="min-width: 150px;">설명</th>
                                <th>예시</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{user}</td>
                                <td class="text-xs sm:text-base md:text-lg">유저 멘션</td>
                                <td class="text-xs sm:text-base md:text-lg">@Mora</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{usertag}</td>
                                <td class="text-xs sm:text-base md:text-lg">유저태그</td>
                                <td class="text-xs sm:text-base md:text-lg">Mora#3584</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{userid}</td>
                                <td class="text-xs sm:text-base md:text-lg">유저아이디</td>
                                <td class="text-sm sm:text-lg md:text-base">997732210327179344</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{server}</td>
                                <td class="text-xs sm:text-base md:text-lg">서버이름</td>
                                <td class="text-xs sm:text-base md:text-lg">Mora Team</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{serverid}</td>
                                <td class="text-xs sm:text-base md:text-lg">서버ID</td>
                                <td class="text-xs sm:text-base md:text-lg">977778355908771902</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{membercount}</td>
                                <td class="text-xs sm:text-base md:text-lg">서버 총 인원</td>
                                <td class="text-xs sm:text-base md:text-lg">100</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{timeshort}</td>
                                <td class="text-xs sm:text-base md:text-lg">알림시간(짧게)</td>
                                <td class="text-xs sm:text-base md:text-lg">2022년 5월 29일</br>일요일 오후 2:11:35</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{timelong}</td>
                                <td class="text-xs sm:text-base md:text-lg">알림시간(길게)</td>
                                <td class="text-xs sm:text-base md:text-lg">오후 2:11:35</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn border-black" onclick="Swal.close(); return false;">닫기</button>
            </div>
        </div>
    </div>`
    Swal.fire({background: 'none',showConfirmButton: false,html: swal_html});
}
function showSpecialCharactersLevel() {
    var swal_html = `<div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <div class="modal-title h4 font-Nanum font-black">변수 목록</div>
                <button type="button" onclick="Swal.close(); return false;">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="py-4 modal-body">
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th style="min-width: 135px;">문자</th>
                                <th style="min-width: 150px;">설명</th>
                                <th>예시</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{level}</td>
                                <td class="text-xs sm:text-base md:text-lg">레벨</td>
                                <td class="text-xs sm:text-base md:text-lg">53</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{user}</td>
                                <td class="text-xs sm:text-base md:text-lg">유저 멘션</td>
                                <td class="text-xs sm:text-base md:text-lg">@Mora</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{usertag}</td>
                                <td class="text-xs sm:text-base md:text-lg">유저태그</td>
                                <td class="text-xs sm:text-base md:text-lg">Mora#3584</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{userid}</td>
                                <td class="text-xs sm:text-base md:text-lg">유저아이디</td>
                                <td class="text-sm sm:text-lg md:text-base">997732210327179344</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{server}</td>
                                <td class="text-xs sm:text-base md:text-lg">서버이름</td>
                                <td class="text-xs sm:text-base md:text-lg">Mora Team</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{server}</td>
                                <td class="text-xs sm:text-base md:text-lg">서버이름</td>
                                <td class="text-xs sm:text-base md:text-lg">Mora Team</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{serverid}</td>
                                <td class="text-xs sm:text-base md:text-lg">서버 ID</td>
                                <td class="text-xs sm:text-base md:text-lg">786153760824492062</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{timeshort}</td>
                                <td class="text-xs sm:text-base md:text-lg">알림시간(짧게)</td>
                                <td class="text-xs sm:text-base md:text-lg">2022년 5월 29일</br>일요일 오후 2:11:35</td>
                            </tr>
                            <tr>
                                <td class="text-xs sm:text-base md:text-lg">{timelong}</td>
                                <td class="text-xs sm:text-base md:text-lg">알림시간(길게)</td>
                                <td class="text-xs sm:text-base md:text-lg">오후 2:11:35</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn border-black" onclick="Swal.close(); return false;">닫기</button>
            </div>
        </div>
    </div>`
    Swal.fire({background: 'none',showConfirmButton: false,html: swal_html});
}