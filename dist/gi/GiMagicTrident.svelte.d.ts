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
export type GiMagicTridentProps = typeof __propDef.props;
export type GiMagicTridentEvents = typeof __propDef.events;
export type GiMagicTridentSlots = typeof __propDef.slots;
export default class GiMagicTrident extends SvelteComponentTyped<GiMagicTridentProps, GiMagicTridentEvents, GiMagicTridentSlots> {
}
export {};
