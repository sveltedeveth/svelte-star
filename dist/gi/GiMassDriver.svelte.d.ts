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
export type GiMassDriverProps = typeof __propDef.props;
export type GiMassDriverEvents = typeof __propDef.events;
export type GiMassDriverSlots = typeof __propDef.slots;
export default class GiMassDriver extends SvelteComponentTyped<GiMassDriverProps, GiMassDriverEvents, GiMassDriverSlots> {
}
export {};
