export interface CommonMenuItem {
  id?: number | string;
  label?: string;
  type?: 'normal' | 'separator' | 'submenu' | 'checkbox' | 'radio';
  accelerator?: string;
  enabled?: boolean;
  visible?: boolean;
  checked?: boolean;
  clickable?: boolean;
}

export interface SerializableMenuItem extends CommonMenuItem {
  submenu?: SerializableMenuItem[];
}

// app
export const appPreferencesMenuId = 'app.preferences';
export const appQuitMenuId = 'app.quit';

// most application specific menu category exists between edit n window

// file
export const filePreferencesMenuId = 'file.preferences';

// edit
export const editUndoMenuId = 'edit.undo';
export const editRedoMenuId = 'edit.redo';
export const editCutMenuId = 'edit.cut';
export const editCopyMenuId = 'edit.copy';
export const editPasteMenuId = 'edit.paste';
export const editSelectAllMenuId = 'edit.selectAll';

// view

// window

export interface MenubarEnableElem { id: string, enable: boolean }
export interface MenubarEnable { [id: string]: MenubarEnableElem[] }