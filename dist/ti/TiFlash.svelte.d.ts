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
export type TiFlashProps = typeof __propDef.props;
export type TiFlashEvents = typeof __propDef.events;
export type TiFlashSlots = typeof __propDef.slots;
export default class TiFlash extends SvelteComponentTyped<TiFlashProps, TiFlashEvents, TiFlashSlots> {
}
export {};
