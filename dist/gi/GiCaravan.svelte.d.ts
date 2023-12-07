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
export type GiCaravanProps = typeof __propDef.props;
export type GiCaravanEvents = typeof __propDef.events;
export type GiCaravanSlots = typeof __propDef.slots;
export default class GiCaravan extends SvelteComponentTyped<GiCaravanProps, GiCaravanEvents, GiCaravanSlots> {
}
export {};
