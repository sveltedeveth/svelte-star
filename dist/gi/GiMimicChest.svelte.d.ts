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
export type GiMimicChestProps = typeof __propDef.props;
export type GiMimicChestEvents = typeof __propDef.events;
export type GiMimicChestSlots = typeof __propDef.slots;
export default class GiMimicChest extends SvelteComponentTyped<GiMimicChestProps, GiMimicChestEvents, GiMimicChestSlots> {
}
export {};
