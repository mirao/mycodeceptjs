/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type commonPage = typeof import('./pages/common.js');
type commonStep = typeof import('./steps/Common.js');
type Rohlik = import('./rohlik_helper.js');
type My = import('./my_helper.js');
type DbHelper = import('./node_modules/codeceptjs-dbhelper');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I, commonPage: commonPage, commonStep: commonStep }
  interface CallbackOrder { [0]: CodeceptJS.I; [1]: commonPage; [2]: commonStep }
  interface Methods extends CodeceptJS.WebDriver, CodeceptJS.REST, Rohlik, CodeceptJS.Mochawesome, My, DbHelper {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
