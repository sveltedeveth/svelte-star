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
export type GoArrowRightProps = typeof __propDef.props;
export type GoArrowRightEvents = typeof __propDef.events;
export type GoArrowRightSlots = typeof __propDef.slots;
export default class GoArrowRight extends SvelteComponentTyped<GoArrowRightProps, GoArrowRightEvents, GoArrowRightSlots> {
}
export {};
