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
export type GiSteakProps = typeof __propDef.props;
export type GiSteakEvents = typeof __propDef.events;
export type GiSteakSlots = typeof __propDef.slots;
export default class GiSteak extends SvelteComponentTyped<GiSteakProps, GiSteakEvents, GiSteakSlots> {
}
export {};
