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
export type GiPointingProps = typeof __propDef.props;
export type GiPointingEvents = typeof __propDef.events;
export type GiPointingSlots = typeof __propDef.slots;
export default class GiPointing extends SvelteComponentTyped<GiPointingProps, GiPointingEvents, GiPointingSlots> {
}
export {};
