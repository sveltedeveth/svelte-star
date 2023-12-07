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
export type MdBrightnessAutoProps = typeof __propDef.props;
export type MdBrightnessAutoEvents = typeof __propDef.events;
export type MdBrightnessAutoSlots = typeof __propDef.slots;
export default class MdBrightnessAuto extends SvelteComponentTyped<MdBrightnessAutoProps, MdBrightnessAutoEvents, MdBrightnessAutoSlots> {
}
export {};
