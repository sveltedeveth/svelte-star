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
export type GiClawHammerProps = typeof __propDef.props;
export type GiClawHammerEvents = typeof __propDef.events;
export type GiClawHammerSlots = typeof __propDef.slots;
export default class GiClawHammer extends SvelteComponentTyped<GiClawHammerProps, GiClawHammerEvents, GiClawHammerSlots> {
}
export {};
