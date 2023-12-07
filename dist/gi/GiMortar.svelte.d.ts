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
export type GiMortarProps = typeof __propDef.props;
export type GiMortarEvents = typeof __propDef.events;
export type GiMortarSlots = typeof __propDef.slots;
export default class GiMortar extends SvelteComponentTyped<GiMortarProps, GiMortarEvents, GiMortarSlots> {
}
export {};
