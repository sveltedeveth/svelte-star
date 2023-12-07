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
export type GiMetalHandProps = typeof __propDef.props;
export type GiMetalHandEvents = typeof __propDef.events;
export type GiMetalHandSlots = typeof __propDef.slots;
export default class GiMetalHand extends SvelteComponentTyped<GiMetalHandProps, GiMetalHandEvents, GiMetalHandSlots> {
}
export {};
