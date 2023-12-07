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
export type GiTimeBombProps = typeof __propDef.props;
export type GiTimeBombEvents = typeof __propDef.events;
export type GiTimeBombSlots = typeof __propDef.slots;
export default class GiTimeBomb extends SvelteComponentTyped<GiTimeBombProps, GiTimeBombEvents, GiTimeBombSlots> {
}
export {};
