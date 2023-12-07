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
export type GiStompProps = typeof __propDef.props;
export type GiStompEvents = typeof __propDef.events;
export type GiStompSlots = typeof __propDef.slots;
export default class GiStomp extends SvelteComponentTyped<GiStompProps, GiStompEvents, GiStompSlots> {
}
export {};
