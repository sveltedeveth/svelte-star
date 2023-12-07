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
export type GiSmittenProps = typeof __propDef.props;
export type GiSmittenEvents = typeof __propDef.events;
export type GiSmittenSlots = typeof __propDef.slots;
export default class GiSmitten extends SvelteComponentTyped<GiSmittenProps, GiSmittenEvents, GiSmittenSlots> {
}
export {};
