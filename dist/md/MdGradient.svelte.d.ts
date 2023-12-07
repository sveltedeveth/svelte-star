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
export type MdGradientProps = typeof __propDef.props;
export type MdGradientEvents = typeof __propDef.events;
export type MdGradientSlots = typeof __propDef.slots;
export default class MdGradient extends SvelteComponentTyped<MdGradientProps, MdGradientEvents, MdGradientSlots> {
}
export {};
