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
export type TiUserOutlineProps = typeof __propDef.props;
export type TiUserOutlineEvents = typeof __propDef.events;
export type TiUserOutlineSlots = typeof __propDef.slots;
export default class TiUserOutline extends SvelteComponentTyped<TiUserOutlineProps, TiUserOutlineEvents, TiUserOutlineSlots> {
}
export {};
