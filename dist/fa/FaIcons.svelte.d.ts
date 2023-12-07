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
export type FaIconsProps = typeof __propDef.props;
export type FaIconsEvents = typeof __propDef.events;
export type FaIconsSlots = typeof __propDef.slots;
export default class FaIcons extends SvelteComponentTyped<FaIconsProps, FaIconsEvents, FaIconsSlots> {
}
export {};
