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
export type MdInvertColorsProps = typeof __propDef.props;
export type MdInvertColorsEvents = typeof __propDef.events;
export type MdInvertColorsSlots = typeof __propDef.slots;
export default class MdInvertColors extends SvelteComponentTyped<MdInvertColorsProps, MdInvertColorsEvents, MdInvertColorsSlots> {
}
export {};
