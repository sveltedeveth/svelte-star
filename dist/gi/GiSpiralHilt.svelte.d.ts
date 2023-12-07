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
export type GiSpiralHiltProps = typeof __propDef.props;
export type GiSpiralHiltEvents = typeof __propDef.events;
export type GiSpiralHiltSlots = typeof __propDef.slots;
export default class GiSpiralHilt extends SvelteComponentTyped<GiSpiralHiltProps, GiSpiralHiltEvents, GiSpiralHiltSlots> {
}
export {};
