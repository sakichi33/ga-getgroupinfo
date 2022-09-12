function exportGoogleGroup() {
  try {
    // スプレッドシートの1つ目のシートを選択してクリア
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheets()[0];
    sheet.clear();

    // datasetにヘッダー追加
    let rows = [];
    rows.push(headers);

    let token = "";

    do {
      // グループ一覧の取得
      let groupsList = AdminDirectory.Groups.list({
        domain: domain,
        pageToken: token,
      });

      // 取得したJSONのグループを処理してrowsに追加
      let parsedata = parseGroupList(groupsList.groups);
      Array.prototype.push.apply(rows, parsedata);

      // 次のページが残っているか
      token = groupsList["nextPageToken"];
    } while (token != null);

    // 取得したデータをスプレッドシートにセットする
    sheet.getRange(1, 1, rows.length, 12).setValues(rows);
  } catch (error) {
    console.log(error);
  }
}

function parseGroupList(groups) {
  let rows = [];
  groups.forEach(function (obj) {
    let row = [];

    // グループの基本情報を取得 (メールアドレス,グループ名,説明,メンバー数)
    let basics = [obj.email, obj.name, obj.description, obj.directMembersCount];
    Array.prototype.push.apply(row, basics);

    // グループのメンバー情報の取得
    let members = AdminDirectory.Members.list(obj.email).members;
    let memberData = [];
    if (members) {
      members.forEach(function (member) {
        memberData.push(member.email);
      });
    }
    row.push(memberData.join("\r\n"));

    // グループのプロパティを取得 (オーナーに連絡,メンバーを表示,会話を表示,投稿を公開,メンバーを管理,グループに参加できるユーザー,組織外のメンバーの許可)
    let group = AdminGroupsSettings.Groups.get(obj.email);
    let prop = [
      ownercontact[group.whoCanContactOwner],
      access[group.whoCanViewMembership],
      access[group.whoCanViewGroup],
      post[group.whoCanPostMessage],
      managemembers[group.whoCanModerateMembers],
      canjoin[group.whoCanJoin],
      allow[group.allowExternalMembers],
    ];
    Array.prototype.push.apply(row, prop);

    rows.push(row);
  });
  return rows;
}
