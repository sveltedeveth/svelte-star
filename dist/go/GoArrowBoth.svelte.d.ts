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
export type GoArrowBothProps = typeof __propDef.props;
export type GoArrowBothEvents = typeof __propDef.events;
export type GoArrowBothSlots = typeof __propDef.slots;
export default class GoArrowBoth extends SvelteComponentTyped<GoArrowBothProps, GoArrowBothEvents, GoArrowBothSlots> {
}
export {};
