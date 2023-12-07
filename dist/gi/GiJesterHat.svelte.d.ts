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
export type GiJesterHatProps = typeof __propDef.props;
export type GiJesterHatEvents = typeof __propDef.events;
export type GiJesterHatSlots = typeof __propDef.slots;
export default class GiJesterHat extends SvelteComponentTyped<GiJesterHatProps, GiJesterHatEvents, GiJesterHatSlots> {
}
export {};
