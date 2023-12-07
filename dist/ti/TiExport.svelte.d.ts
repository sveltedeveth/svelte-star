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
export type TiExportProps = typeof __propDef.props;
export type TiExportEvents = typeof __propDef.events;
export type TiExportSlots = typeof __propDef.slots;
export default class TiExport extends SvelteComponentTyped<TiExportProps, TiExportEvents, TiExportSlots> {
}
export {};
