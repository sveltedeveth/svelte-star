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
export type GiSandwichProps = typeof __propDef.props;
export type GiSandwichEvents = typeof __propDef.events;
export type GiSandwichSlots = typeof __propDef.slots;
export default class GiSandwich extends SvelteComponentTyped<GiSandwichProps, GiSandwichEvents, GiSandwichSlots> {
}
export {};
