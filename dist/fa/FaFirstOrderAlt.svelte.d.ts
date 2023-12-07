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
export type FaFirstOrderAltProps = typeof __propDef.props;
export type FaFirstOrderAltEvents = typeof __propDef.events;
export type FaFirstOrderAltSlots = typeof __propDef.slots;
export default class FaFirstOrderAlt extends SvelteComponentTyped<FaFirstOrderAltProps, FaFirstOrderAltEvents, FaFirstOrderAltSlots> {
}
export {};
