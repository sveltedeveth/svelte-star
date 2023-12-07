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
export type GiLockSpyProps = typeof __propDef.props;
export type GiLockSpyEvents = typeof __propDef.events;
export type GiLockSpySlots = typeof __propDef.slots;
export default class GiLockSpy extends SvelteComponentTyped<GiLockSpyProps, GiLockSpyEvents, GiLockSpySlots> {
}
export {};
