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
export type GiFlowerPotProps = typeof __propDef.props;
export type GiFlowerPotEvents = typeof __propDef.events;
export type GiFlowerPotSlots = typeof __propDef.slots;
export default class GiFlowerPot extends SvelteComponentTyped<GiFlowerPotProps, GiFlowerPotEvents, GiFlowerPotSlots> {
}
export {};
