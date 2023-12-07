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
export type GiRoundKnobProps = typeof __propDef.props;
export type GiRoundKnobEvents = typeof __propDef.events;
export type GiRoundKnobSlots = typeof __propDef.slots;
export default class GiRoundKnob extends SvelteComponentTyped<GiRoundKnobProps, GiRoundKnobEvents, GiRoundKnobSlots> {
}
export {};
