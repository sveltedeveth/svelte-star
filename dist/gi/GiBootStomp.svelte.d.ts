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
export type GiBootStompProps = typeof __propDef.props;
export type GiBootStompEvents = typeof __propDef.events;
export type GiBootStompSlots = typeof __propDef.slots;
export default class GiBootStomp extends SvelteComponentTyped<GiBootStompProps, GiBootStompEvents, GiBootStompSlots> {
}
export {};
