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
export type TiEjectProps = typeof __propDef.props;
export type TiEjectEvents = typeof __propDef.events;
export type TiEjectSlots = typeof __propDef.slots;
export default class TiEject extends SvelteComponentTyped<TiEjectProps, TiEjectEvents, TiEjectSlots> {
}
export {};
