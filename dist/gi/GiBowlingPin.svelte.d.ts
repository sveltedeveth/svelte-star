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
export type GiBowlingPinProps = typeof __propDef.props;
export type GiBowlingPinEvents = typeof __propDef.events;
export type GiBowlingPinSlots = typeof __propDef.slots;
export default class GiBowlingPin extends SvelteComponentTyped<GiBowlingPinProps, GiBowlingPinEvents, GiBowlingPinSlots> {
}
export {};
