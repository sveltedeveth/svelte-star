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
export type GoChevronRightProps = typeof __propDef.props;
export type GoChevronRightEvents = typeof __propDef.events;
export type GoChevronRightSlots = typeof __propDef.slots;
export default class GoChevronRight extends SvelteComponentTyped<GoChevronRightProps, GoChevronRightEvents, GoChevronRightSlots> {
}
export {};
