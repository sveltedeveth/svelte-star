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
export type GiBoxTrapProps = typeof __propDef.props;
export type GiBoxTrapEvents = typeof __propDef.events;
export type GiBoxTrapSlots = typeof __propDef.slots;
export default class GiBoxTrap extends SvelteComponentTyped<GiBoxTrapProps, GiBoxTrapEvents, GiBoxTrapSlots> {
}
export {};
