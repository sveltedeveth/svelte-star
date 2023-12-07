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
export type GiDrippingSwordProps = typeof __propDef.props;
export type GiDrippingSwordEvents = typeof __propDef.events;
export type GiDrippingSwordSlots = typeof __propDef.slots;
export default class GiDrippingSword extends SvelteComponentTyped<GiDrippingSwordProps, GiDrippingSwordEvents, GiDrippingSwordSlots> {
}
export {};
