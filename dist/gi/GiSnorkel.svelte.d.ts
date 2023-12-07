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
export type GiSnorkelProps = typeof __propDef.props;
export type GiSnorkelEvents = typeof __propDef.events;
export type GiSnorkelSlots = typeof __propDef.slots;
export default class GiSnorkel extends SvelteComponentTyped<GiSnorkelProps, GiSnorkelEvents, GiSnorkelSlots> {
}
export {};
