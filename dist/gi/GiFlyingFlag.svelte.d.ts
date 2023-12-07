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
export type GiFlyingFlagProps = typeof __propDef.props;
export type GiFlyingFlagEvents = typeof __propDef.events;
export type GiFlyingFlagSlots = typeof __propDef.slots;
export default class GiFlyingFlag extends SvelteComponentTyped<GiFlyingFlagProps, GiFlyingFlagEvents, GiFlyingFlagSlots> {
}
export {};
