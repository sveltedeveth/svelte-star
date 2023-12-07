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
export type GiArmorVestProps = typeof __propDef.props;
export type GiArmorVestEvents = typeof __propDef.events;
export type GiArmorVestSlots = typeof __propDef.slots;
export default class GiArmorVest extends SvelteComponentTyped<GiArmorVestProps, GiArmorVestEvents, GiArmorVestSlots> {
}
export {};
