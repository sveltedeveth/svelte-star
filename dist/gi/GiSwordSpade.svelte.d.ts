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
export type GiSwordSpadeProps = typeof __propDef.props;
export type GiSwordSpadeEvents = typeof __propDef.events;
export type GiSwordSpadeSlots = typeof __propDef.slots;
export default class GiSwordSpade extends SvelteComponentTyped<GiSwordSpadeProps, GiSwordSpadeEvents, GiSwordSpadeSlots> {
}
export {};
