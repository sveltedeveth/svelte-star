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
export type GiHeartMinusProps = typeof __propDef.props;
export type GiHeartMinusEvents = typeof __propDef.events;
export type GiHeartMinusSlots = typeof __propDef.slots;
export default class GiHeartMinus extends SvelteComponentTyped<GiHeartMinusProps, GiHeartMinusEvents, GiHeartMinusSlots> {
}
export {};
