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
export type GoChevronUpProps = typeof __propDef.props;
export type GoChevronUpEvents = typeof __propDef.events;
export type GoChevronUpSlots = typeof __propDef.slots;
export default class GoChevronUp extends SvelteComponentTyped<GoChevronUpProps, GoChevronUpEvents, GoChevronUpSlots> {
}
export {};
