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
export type GiAntsProps = typeof __propDef.props;
export type GiAntsEvents = typeof __propDef.events;
export type GiAntsSlots = typeof __propDef.slots;
export default class GiAnts extends SvelteComponentTyped<GiAntsProps, GiAntsEvents, GiAntsSlots> {
}
export {};
