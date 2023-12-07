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
export type FaFontProps = typeof __propDef.props;
export type FaFontEvents = typeof __propDef.events;
export type FaFontSlots = typeof __propDef.slots;
export default class FaFont extends SvelteComponentTyped<FaFontProps, FaFontEvents, FaFontSlots> {
}
export {};
