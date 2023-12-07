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
export type TiExportOutlineProps = typeof __propDef.props;
export type TiExportOutlineEvents = typeof __propDef.events;
export type TiExportOutlineSlots = typeof __propDef.slots;
export default class TiExportOutline extends SvelteComponentTyped<TiExportOutlineProps, TiExportOutlineEvents, TiExportOutlineSlots> {
}
export {};
