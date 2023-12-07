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
export type GiScarabBeetleProps = typeof __propDef.props;
export type GiScarabBeetleEvents = typeof __propDef.events;
export type GiScarabBeetleSlots = typeof __propDef.slots;
export default class GiScarabBeetle extends SvelteComponentTyped<GiScarabBeetleProps, GiScarabBeetleEvents, GiScarabBeetleSlots> {
}
export {};
