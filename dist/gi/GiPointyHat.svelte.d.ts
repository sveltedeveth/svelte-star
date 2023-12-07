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
export type GiPointyHatProps = typeof __propDef.props;
export type GiPointyHatEvents = typeof __propDef.events;
export type GiPointyHatSlots = typeof __propDef.slots;
export default class GiPointyHat extends SvelteComponentTyped<GiPointyHatProps, GiPointyHatEvents, GiPointyHatSlots> {
}
export {};
