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
export type GiRadioactiveProps = typeof __propDef.props;
export type GiRadioactiveEvents = typeof __propDef.events;
export type GiRadioactiveSlots = typeof __propDef.slots;
export default class GiRadioactive extends SvelteComponentTyped<GiRadioactiveProps, GiRadioactiveEvents, GiRadioactiveSlots> {
}
export {};
