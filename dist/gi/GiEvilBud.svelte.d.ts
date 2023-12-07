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
export type GiEvilBudProps = typeof __propDef.props;
export type GiEvilBudEvents = typeof __propDef.events;
export type GiEvilBudSlots = typeof __propDef.slots;
export default class GiEvilBud extends SvelteComponentTyped<GiEvilBudProps, GiEvilBudEvents, GiEvilBudSlots> {
}
export {};
