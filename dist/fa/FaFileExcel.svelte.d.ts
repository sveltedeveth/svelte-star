import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaFileExcelProps = typeof __propDef.props;
export type FaFileExcelEvents = typeof __propDef.events;
export type FaFileExcelSlots = typeof __propDef.slots;
export default class FaFileExcel extends SvelteComponentTyped<FaFileExcelProps, FaFileExcelEvents, FaFileExcelSlots> {
}
export {};
