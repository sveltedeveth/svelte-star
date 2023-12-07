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
export type GoDashProps = typeof __propDef.props;
export type GoDashEvents = typeof __propDef.events;
export type GoDashSlots = typeof __propDef.slots;
export default class GoDash extends SvelteComponentTyped<GoDashProps, GoDashEvents, GoDashSlots> {
}
export {};
