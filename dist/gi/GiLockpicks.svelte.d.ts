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
export type GiLockpicksProps = typeof __propDef.props;
export type GiLockpicksEvents = typeof __propDef.events;
export type GiLockpicksSlots = typeof __propDef.slots;
export default class GiLockpicks extends SvelteComponentTyped<GiLockpicksProps, GiLockpicksEvents, GiLockpicksSlots> {
}
export {};
