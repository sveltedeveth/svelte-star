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
export type FaCandyCaneProps = typeof __propDef.props;
export type FaCandyCaneEvents = typeof __propDef.events;
export type FaCandyCaneSlots = typeof __propDef.slots;
export default class FaCandyCane extends SvelteComponentTyped<FaCandyCaneProps, FaCandyCaneEvents, FaCandyCaneSlots> {
}
export {};
