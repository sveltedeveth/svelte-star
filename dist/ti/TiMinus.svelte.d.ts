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
export type TiMinusProps = typeof __propDef.props;
export type TiMinusEvents = typeof __propDef.events;
export type TiMinusSlots = typeof __propDef.slots;
export default class TiMinus extends SvelteComponentTyped<TiMinusProps, TiMinusEvents, TiMinusSlots> {
}
export {};
