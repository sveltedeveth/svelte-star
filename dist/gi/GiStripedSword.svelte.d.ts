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
export type GiStripedSwordProps = typeof __propDef.props;
export type GiStripedSwordEvents = typeof __propDef.events;
export type GiStripedSwordSlots = typeof __propDef.slots;
export default class GiStripedSword extends SvelteComponentTyped<GiStripedSwordProps, GiStripedSwordEvents, GiStripedSwordSlots> {
}
export {};
