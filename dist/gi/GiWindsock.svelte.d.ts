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
export type GiWindsockProps = typeof __propDef.props;
export type GiWindsockEvents = typeof __propDef.events;
export type GiWindsockSlots = typeof __propDef.slots;
export default class GiWindsock extends SvelteComponentTyped<GiWindsockProps, GiWindsockEvents, GiWindsockSlots> {
}
export {};
