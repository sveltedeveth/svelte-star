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
export type GiFlaxProps = typeof __propDef.props;
export type GiFlaxEvents = typeof __propDef.events;
export type GiFlaxSlots = typeof __propDef.slots;
export default class GiFlax extends SvelteComponentTyped<GiFlaxProps, GiFlaxEvents, GiFlaxSlots> {
}
export {};
