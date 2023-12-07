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
export type GiSlimeProps = typeof __propDef.props;
export type GiSlimeEvents = typeof __propDef.events;
export type GiSlimeSlots = typeof __propDef.slots;
export default class GiSlime extends SvelteComponentTyped<GiSlimeProps, GiSlimeEvents, GiSlimeSlots> {
}
export {};
