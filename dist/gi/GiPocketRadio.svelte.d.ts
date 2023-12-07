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
export type GiPocketRadioProps = typeof __propDef.props;
export type GiPocketRadioEvents = typeof __propDef.events;
export type GiPocketRadioSlots = typeof __propDef.slots;
export default class GiPocketRadio extends SvelteComponentTyped<GiPocketRadioProps, GiPocketRadioEvents, GiPocketRadioSlots> {
}
export {};
