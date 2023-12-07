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
export type GiFlailProps = typeof __propDef.props;
export type GiFlailEvents = typeof __propDef.events;
export type GiFlailSlots = typeof __propDef.slots;
export default class GiFlail extends SvelteComponentTyped<GiFlailProps, GiFlailEvents, GiFlailSlots> {
}
export {};
