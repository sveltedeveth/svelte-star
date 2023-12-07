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
export type TiFlashOutlineProps = typeof __propDef.props;
export type TiFlashOutlineEvents = typeof __propDef.events;
export type TiFlashOutlineSlots = typeof __propDef.slots;
export default class TiFlashOutline extends SvelteComponentTyped<TiFlashOutlineProps, TiFlashOutlineEvents, TiFlashOutlineSlots> {
}
export {};
