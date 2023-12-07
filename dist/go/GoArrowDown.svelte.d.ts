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
export type GoArrowDownProps = typeof __propDef.props;
export type GoArrowDownEvents = typeof __propDef.events;
export type GoArrowDownSlots = typeof __propDef.slots;
export default class GoArrowDown extends SvelteComponentTyped<GoArrowDownProps, GoArrowDownEvents, GoArrowDownSlots> {
}
export {};
