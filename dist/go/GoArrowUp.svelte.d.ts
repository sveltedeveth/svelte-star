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
export type GoArrowUpProps = typeof __propDef.props;
export type GoArrowUpEvents = typeof __propDef.events;
export type GoArrowUpSlots = typeof __propDef.slots;
export default class GoArrowUp extends SvelteComponentTyped<GoArrowUpProps, GoArrowUpEvents, GoArrowUpSlots> {
}
export {};
