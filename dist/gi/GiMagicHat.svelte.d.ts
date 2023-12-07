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
export type GiMagicHatProps = typeof __propDef.props;
export type GiMagicHatEvents = typeof __propDef.events;
export type GiMagicHatSlots = typeof __propDef.slots;
export default class GiMagicHat extends SvelteComponentTyped<GiMagicHatProps, GiMagicHatEvents, GiMagicHatSlots> {
}
export {};
