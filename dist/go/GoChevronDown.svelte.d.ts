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
export type GoChevronDownProps = typeof __propDef.props;
export type GoChevronDownEvents = typeof __propDef.events;
export type GoChevronDownSlots = typeof __propDef.slots;
export default class GoChevronDown extends SvelteComponentTyped<GoChevronDownProps, GoChevronDownEvents, GoChevronDownSlots> {
}
export {};
