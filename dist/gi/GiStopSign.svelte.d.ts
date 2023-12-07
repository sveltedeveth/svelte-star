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
export type GiStopSignProps = typeof __propDef.props;
export type GiStopSignEvents = typeof __propDef.events;
export type GiStopSignSlots = typeof __propDef.slots;
export default class GiStopSign extends SvelteComponentTyped<GiStopSignProps, GiStopSignEvents, GiStopSignSlots> {
}
export {};
