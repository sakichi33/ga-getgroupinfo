//対象ドメイン（example.co.jpの部分を置き換える）
const domain = 'example.co.jp';

//ヘッダー
const headers = [
  "メールアドレス",
  "グループ名",
  "説明", 
  "メンバー数",
  "メンバー",
  "オーナーに連絡",
  "メンバーを表示",  
  "会話を表示",
  "投稿を公開",
  "メンバーを管理",
  "グループに参加できるユーザー",
  "組織外のメンバーの許可",
];

//オーナーに連絡の設定状況を日本語表示させる
const ownercontact = {
  ALL_MANAGERS_CAN_CONTACT: 'グループの管理者',
  ALL_MEMBERS_CAN_CONTACT: 'グループのメンバー',
  ALL_IN_DOMAIN_CAN_CONTACT: '組織全体',
  ANYONE_CAN_CONTACT: '外部'
};

//メンバーを表示と会話を表示の設定状況を日本語表示させる
const access = {
  ALL_OWNERS_CAN_VIEW: 'グループのオーナー',
  ALL_MANAGERS_CAN_VIEW: 'グループの管理者',
  ALL_MEMBERS_CAN_VIEW: 'グループのメンバー',
  ALL_IN_DOMAIN_CAN_VIEW: '組織全体',
  ANYONE_CAN_VIEW: '外部'
};

//投稿を公開の設定状況を日本語表示させる
const post = {
  NONE_CAN_POST: '投稿不可',
  ALL_OWNERS_CAN_POST: 'グループのオーナー',
  ALL_MANAGERS_CAN_POST: 'グループの管理者',
  ALL_MEMBERS_CAN_POST: 'グループのメンバー',
  ALL_IN_DOMAIN_CAN_POST: '組織全体',
  ANYONE_CAN_POST: '外部'
};

//メンバーを管理の設定状況を日本語表示させる
const managemembers = {
  OWNERS_ONLY: 'グループのオーナー',
  OWNERS_AND_MANAGERS: 'グループの管理者',
  ALL_MEMBERS: 'グループのメンバー'
}; 

//グループに参加できるユーザーの設定を日本語表示させる
const canjoin = {
  ALL_IN_DOMAIN_CAN_JOIN:'組織内のすべてのユーザーが参加できる',
  CAN_REQUEST_TO_JOIN:'組織内のすべてのユーザーがリクエストできる',
  INVITED_CAN_JOIN:'招待されたユーザーのみ'
};

//組織外のメンバーの許可の設定を日本語表示させる
const allow = {
  'false':'不可',
  'true':'可'
};