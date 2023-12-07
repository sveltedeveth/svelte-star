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
export type GiSwordAltarProps = typeof __propDef.props;
export type GiSwordAltarEvents = typeof __propDef.events;
export type GiSwordAltarSlots = typeof __propDef.slots;
export default class GiSwordAltar extends SvelteComponentTyped<GiSwordAltarProps, GiSwordAltarEvents, GiSwordAltarSlots> {
}
export {};
