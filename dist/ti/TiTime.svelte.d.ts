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
export type TiTimeProps = typeof __propDef.props;
export type TiTimeEvents = typeof __propDef.events;
export type TiTimeSlots = typeof __propDef.slots;
export default class TiTime extends SvelteComponentTyped<TiTimeProps, TiTimeEvents, TiTimeSlots> {
}
export {};
