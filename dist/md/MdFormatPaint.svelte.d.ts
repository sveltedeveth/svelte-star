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
export type MdFormatPaintProps = typeof __propDef.props;
export type MdFormatPaintEvents = typeof __propDef.events;
export type MdFormatPaintSlots = typeof __propDef.slots;
export default class MdFormatPaint extends SvelteComponentTyped<MdFormatPaintProps, MdFormatPaintEvents, MdFormatPaintSlots> {
}
export {};
