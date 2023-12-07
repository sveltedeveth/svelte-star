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
export type GiSeveredHandProps = typeof __propDef.props;
export type GiSeveredHandEvents = typeof __propDef.events;
export type GiSeveredHandSlots = typeof __propDef.slots;
export default class GiSeveredHand extends SvelteComponentTyped<GiSeveredHandProps, GiSeveredHandEvents, GiSeveredHandSlots> {
}
export {};
