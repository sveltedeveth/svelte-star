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
export type GiChestProps = typeof __propDef.props;
export type GiChestEvents = typeof __propDef.events;
export type GiChestSlots = typeof __propDef.slots;
export default class GiChest extends SvelteComponentTyped<GiChestProps, GiChestEvents, GiChestSlots> {
}
export {};
