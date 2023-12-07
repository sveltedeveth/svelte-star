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
export type GiPickelhaubeProps = typeof __propDef.props;
export type GiPickelhaubeEvents = typeof __propDef.events;
export type GiPickelhaubeSlots = typeof __propDef.slots;
export default class GiPickelhaube extends SvelteComponentTyped<GiPickelhaubeProps, GiPickelhaubeEvents, GiPickelhaubeSlots> {
}
export {};
