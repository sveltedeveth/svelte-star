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
export type GiMagicGateProps = typeof __propDef.props;
export type GiMagicGateEvents = typeof __propDef.events;
export type GiMagicGateSlots = typeof __propDef.slots;
export default class GiMagicGate extends SvelteComponentTyped<GiMagicGateProps, GiMagicGateEvents, GiMagicGateSlots> {
}
export {};
