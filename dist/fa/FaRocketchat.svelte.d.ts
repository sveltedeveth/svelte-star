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
export type FaRocketchatProps = typeof __propDef.props;
export type FaRocketchatEvents = typeof __propDef.events;
export type FaRocketchatSlots = typeof __propDef.slots;
export default class FaRocketchat extends SvelteComponentTyped<FaRocketchatProps, FaRocketchatEvents, FaRocketchatSlots> {
}
export {};
