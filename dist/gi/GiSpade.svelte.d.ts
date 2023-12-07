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
export type GiSpadeProps = typeof __propDef.props;
export type GiSpadeEvents = typeof __propDef.events;
export type GiSpadeSlots = typeof __propDef.slots;
export default class GiSpade extends SvelteComponentTyped<GiSpadeProps, GiSpadeEvents, GiSpadeSlots> {
}
export {};
