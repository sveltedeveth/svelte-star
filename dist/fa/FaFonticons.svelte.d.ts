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
export type FaFonticonsProps = typeof __propDef.props;
export type FaFonticonsEvents = typeof __propDef.events;
export type FaFonticonsSlots = typeof __propDef.slots;
export default class FaFonticons extends SvelteComponentTyped<FaFonticonsProps, FaFonticonsEvents, FaFonticonsSlots> {
}
export {};
