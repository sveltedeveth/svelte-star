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
export type GiLipstickProps = typeof __propDef.props;
export type GiLipstickEvents = typeof __propDef.events;
export type GiLipstickSlots = typeof __propDef.slots;
export default class GiLipstick extends SvelteComponentTyped<GiLipstickProps, GiLipstickEvents, GiLipstickSlots> {
}
export {};
