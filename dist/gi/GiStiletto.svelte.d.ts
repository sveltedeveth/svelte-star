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
export type GiStilettoProps = typeof __propDef.props;
export type GiStilettoEvents = typeof __propDef.events;
export type GiStilettoSlots = typeof __propDef.slots;
export default class GiStiletto extends SvelteComponentTyped<GiStilettoProps, GiStilettoEvents, GiStilettoSlots> {
}
export {};
