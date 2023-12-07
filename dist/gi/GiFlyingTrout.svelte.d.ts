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
export type GiFlyingTroutProps = typeof __propDef.props;
export type GiFlyingTroutEvents = typeof __propDef.events;
export type GiFlyingTroutSlots = typeof __propDef.slots;
export default class GiFlyingTrout extends SvelteComponentTyped<GiFlyingTroutProps, GiFlyingTroutEvents, GiFlyingTroutSlots> {
}
export {};
