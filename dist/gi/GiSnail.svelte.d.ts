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
export type GiSnailProps = typeof __propDef.props;
export type GiSnailEvents = typeof __propDef.events;
export type GiSnailSlots = typeof __propDef.slots;
export default class GiSnail extends SvelteComponentTyped<GiSnailProps, GiSnailEvents, GiSnailSlots> {
}
export {};
