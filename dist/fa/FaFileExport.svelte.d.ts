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
export type FaFileExportProps = typeof __propDef.props;
export type FaFileExportEvents = typeof __propDef.events;
export type FaFileExportSlots = typeof __propDef.slots;
export default class FaFileExport extends SvelteComponentTyped<FaFileExportProps, FaFileExportEvents, FaFileExportSlots> {
}
export {};
