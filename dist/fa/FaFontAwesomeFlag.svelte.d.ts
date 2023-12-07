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
export type FaFontAwesomeFlagProps = typeof __propDef.props;
export type FaFontAwesomeFlagEvents = typeof __propDef.events;
export type FaFontAwesomeFlagSlots = typeof __propDef.slots;
export default class FaFontAwesomeFlag extends SvelteComponentTyped<FaFontAwesomeFlagProps, FaFontAwesomeFlagEvents, FaFontAwesomeFlagSlots> {
}
export {};
