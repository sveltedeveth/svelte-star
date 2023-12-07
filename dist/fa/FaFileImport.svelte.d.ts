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
export type FaFileImportProps = typeof __propDef.props;
export type FaFileImportEvents = typeof __propDef.events;
export type FaFileImportSlots = typeof __propDef.slots;
export default class FaFileImport extends SvelteComponentTyped<FaFileImportProps, FaFileImportEvents, FaFileImportSlots> {
}
export {};
