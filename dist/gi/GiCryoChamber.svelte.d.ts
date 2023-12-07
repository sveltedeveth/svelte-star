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
export type GiCryoChamberProps = typeof __propDef.props;
export type GiCryoChamberEvents = typeof __propDef.events;
export type GiCryoChamberSlots = typeof __propDef.slots;
export default class GiCryoChamber extends SvelteComponentTyped<GiCryoChamberProps, GiCryoChamberEvents, GiCryoChamberSlots> {
}
export {};
