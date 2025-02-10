export const koreanLayout = {
  default: [
    "{1} {2} {3} {4} {5} {6} {7} {8} {9} {0} {bksp}",
    "ㅂ ㅈ ㄷ ㄱ ㅅ ㅛ ㅕ ㅑ ㅐ ㅔ",
    "ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ",
    "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ {shift}",
    "{한/영} {space} {empty}",
  ],
  shift: [
    "{1} {2} {3} {4} {5} {6} {7} {8} {9} {0} {bksp}",
    "ㅃ ㅉ ㄸ ㄲ ㅆ ㅛ ㅕ ㅑ ㅒ ㅖ",
    "ㅁ ㄴ ㅇ ㄹ ㅎ ㅗ ㅓ ㅏ ㅣ",
    "{shift} ㅋ ㅌ ㅊ ㅍ ㅠ ㅜ ㅡ {shift}",
    "{한/영} {space} {empty}",
  ],
};

export const englishLayout = {
  default: [
    "{1} {2} {3} {4} {5} {6} {7} {8} {9} {0} {bksp}",
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "{shift} z x c v b n m {shift}",
    "{한/영} {space} {empty}",
  ],
  shift: [
    "{1} {2} {3} {4} {5} {6} {7} {8} {9} {0} {bksp}",
    "Q W E R T Y U I O P",
    "A S D F G H J K L",
    "{shift} Z X C V B N M {shift}",
    "{한/영} {space} {empty}",
  ],
};

export const numericLayout = {
  default: ["1 2 3", "4 5 6", "7 8 9", "{empty} 0 {bksp}"],
};

export const keyboardDisplay = {
  "{space}": "space",
  "{shift}": "⇧",
  "{bksp}": `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
</svg>
`,
  "{empty}": "empty",
  "{한/영}": "한/영",
  "{1}": "1",
  "{2}": "2",
  "{3}": "3",
  "{4}": "4",
  "{5}": "5",
  "{6}": "6",
  "{7}": "7",
  "{8}": "8",
  "{9}": "9",
  "{0}": "0",
};
