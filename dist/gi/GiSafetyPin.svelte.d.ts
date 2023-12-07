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
export type GiSafetyPinProps = typeof __propDef.props;
export type GiSafetyPinEvents = typeof __propDef.events;
export type GiSafetyPinSlots = typeof __propDef.slots;
export default class GiSafetyPin extends SvelteComponentTyped<GiSafetyPinProps, GiSafetyPinEvents, GiSafetyPinSlots> {
}
export {};
