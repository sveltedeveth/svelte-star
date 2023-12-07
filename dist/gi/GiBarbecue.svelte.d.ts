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
export type GiBarbecueProps = typeof __propDef.props;
export type GiBarbecueEvents = typeof __propDef.events;
export type GiBarbecueSlots = typeof __propDef.slots;
export default class GiBarbecue extends SvelteComponentTyped<GiBarbecueProps, GiBarbecueEvents, GiBarbecueSlots> {
}
export {};
