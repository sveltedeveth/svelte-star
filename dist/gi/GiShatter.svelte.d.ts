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
export type GiShatterProps = typeof __propDef.props;
export type GiShatterEvents = typeof __propDef.events;
export type GiShatterSlots = typeof __propDef.slots;
export default class GiShatter extends SvelteComponentTyped<GiShatterProps, GiShatterEvents, GiShatterSlots> {
}
export {};
