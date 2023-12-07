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
export type GiLeakProps = typeof __propDef.props;
export type GiLeakEvents = typeof __propDef.events;
export type GiLeakSlots = typeof __propDef.slots;
export default class GiLeak extends SvelteComponentTyped<GiLeakProps, GiLeakEvents, GiLeakSlots> {
}
export {};
