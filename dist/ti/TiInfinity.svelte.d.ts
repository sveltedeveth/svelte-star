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
export type TiInfinityProps = typeof __propDef.props;
export type TiInfinityEvents = typeof __propDef.events;
export type TiInfinitySlots = typeof __propDef.slots;
export default class TiInfinity extends SvelteComponentTyped<TiInfinityProps, TiInfinityEvents, TiInfinitySlots> {
}
export {};
