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
export type GiVanillaFlowerProps = typeof __propDef.props;
export type GiVanillaFlowerEvents = typeof __propDef.events;
export type GiVanillaFlowerSlots = typeof __propDef.slots;
export default class GiVanillaFlower extends SvelteComponentTyped<GiVanillaFlowerProps, GiVanillaFlowerEvents, GiVanillaFlowerSlots> {
}
export {};
