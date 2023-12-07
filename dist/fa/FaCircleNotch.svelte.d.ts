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
export type FaCircleNotchProps = typeof __propDef.props;
export type FaCircleNotchEvents = typeof __propDef.events;
export type FaCircleNotchSlots = typeof __propDef.slots;
export default class FaCircleNotch extends SvelteComponentTyped<FaCircleNotchProps, FaCircleNotchEvents, FaCircleNotchSlots> {
}
export {};
