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
export type GoChevronLeftProps = typeof __propDef.props;
export type GoChevronLeftEvents = typeof __propDef.events;
export type GoChevronLeftSlots = typeof __propDef.slots;
export default class GoChevronLeft extends SvelteComponentTyped<GoChevronLeftProps, GoChevronLeftEvents, GoChevronLeftSlots> {
}
export {};
