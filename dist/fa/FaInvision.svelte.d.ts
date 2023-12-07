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
export type FaInvisionProps = typeof __propDef.props;
export type FaInvisionEvents = typeof __propDef.events;
export type FaInvisionSlots = typeof __propDef.slots;
export default class FaInvision extends SvelteComponentTyped<FaInvisionProps, FaInvisionEvents, FaInvisionSlots> {
}
export {};
