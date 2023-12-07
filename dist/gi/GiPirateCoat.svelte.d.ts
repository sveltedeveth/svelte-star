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
export type GiPirateCoatProps = typeof __propDef.props;
export type GiPirateCoatEvents = typeof __propDef.events;
export type GiPirateCoatSlots = typeof __propDef.slots;
export default class GiPirateCoat extends SvelteComponentTyped<GiPirateCoatProps, GiPirateCoatEvents, GiPirateCoatSlots> {
}
export {};
