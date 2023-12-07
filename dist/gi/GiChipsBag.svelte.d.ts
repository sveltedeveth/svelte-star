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
export type GiChipsBagProps = typeof __propDef.props;
export type GiChipsBagEvents = typeof __propDef.events;
export type GiChipsBagSlots = typeof __propDef.slots;
export default class GiChipsBag extends SvelteComponentTyped<GiChipsBagProps, GiChipsBagEvents, GiChipsBagSlots> {
}
export {};
