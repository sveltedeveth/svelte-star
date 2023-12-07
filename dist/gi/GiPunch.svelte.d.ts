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
export type GiPunchProps = typeof __propDef.props;
export type GiPunchEvents = typeof __propDef.events;
export type GiPunchSlots = typeof __propDef.slots;
export default class GiPunch extends SvelteComponentTyped<GiPunchProps, GiPunchEvents, GiPunchSlots> {
}
export {};
