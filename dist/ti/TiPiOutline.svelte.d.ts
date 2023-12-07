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
export type TiPiOutlineProps = typeof __propDef.props;
export type TiPiOutlineEvents = typeof __propDef.events;
export type TiPiOutlineSlots = typeof __propDef.slots;
export default class TiPiOutline extends SvelteComponentTyped<TiPiOutlineProps, TiPiOutlineEvents, TiPiOutlineSlots> {
}
export {};
