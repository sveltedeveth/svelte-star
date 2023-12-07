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
export type GoArrowSmallUpProps = typeof __propDef.props;
export type GoArrowSmallUpEvents = typeof __propDef.events;
export type GoArrowSmallUpSlots = typeof __propDef.slots;
export default class GoArrowSmallUp extends SvelteComponentTyped<GoArrowSmallUpProps, GoArrowSmallUpEvents, GoArrowSmallUpSlots> {
}
export {};
