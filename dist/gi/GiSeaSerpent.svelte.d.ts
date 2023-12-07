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
export type GiSeaSerpentProps = typeof __propDef.props;
export type GiSeaSerpentEvents = typeof __propDef.events;
export type GiSeaSerpentSlots = typeof __propDef.slots;
export default class GiSeaSerpent extends SvelteComponentTyped<GiSeaSerpentProps, GiSeaSerpentEvents, GiSeaSerpentSlots> {
}
export {};
