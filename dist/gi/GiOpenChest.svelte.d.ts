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
export type GiOpenChestProps = typeof __propDef.props;
export type GiOpenChestEvents = typeof __propDef.events;
export type GiOpenChestSlots = typeof __propDef.slots;
export default class GiOpenChest extends SvelteComponentTyped<GiOpenChestProps, GiOpenChestEvents, GiOpenChestSlots> {
}
export {};
