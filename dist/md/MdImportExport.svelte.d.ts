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
export type MdImportExportProps = typeof __propDef.props;
export type MdImportExportEvents = typeof __propDef.events;
export type MdImportExportSlots = typeof __propDef.slots;
export default class MdImportExport extends SvelteComponentTyped<MdImportExportProps, MdImportExportEvents, MdImportExportSlots> {
}
export {};
