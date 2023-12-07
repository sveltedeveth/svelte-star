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
export type GiLockedChestProps = typeof __propDef.props;
export type GiLockedChestEvents = typeof __propDef.events;
export type GiLockedChestSlots = typeof __propDef.slots;
export default class GiLockedChest extends SvelteComponentTyped<GiLockedChestProps, GiLockedChestEvents, GiLockedChestSlots> {
}
export {};
