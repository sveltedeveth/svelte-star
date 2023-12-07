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
export type GiCancerProps = typeof __propDef.props;
export type GiCancerEvents = typeof __propDef.events;
export type GiCancerSlots = typeof __propDef.slots;
export default class GiCancer extends SvelteComponentTyped<GiCancerProps, GiCancerEvents, GiCancerSlots> {
}
export {};
