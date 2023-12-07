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
export type GiHaltProps = typeof __propDef.props;
export type GiHaltEvents = typeof __propDef.events;
export type GiHaltSlots = typeof __propDef.slots;
export default class GiHalt extends SvelteComponentTyped<GiHaltProps, GiHaltEvents, GiHaltSlots> {
}
export {};
