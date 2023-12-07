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
export type GiCyclopsProps = typeof __propDef.props;
export type GiCyclopsEvents = typeof __propDef.events;
export type GiCyclopsSlots = typeof __propDef.slots;
export default class GiCyclops extends SvelteComponentTyped<GiCyclopsProps, GiCyclopsEvents, GiCyclopsSlots> {
}
export {};
