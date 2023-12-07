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
export type GiDeadWoodProps = typeof __propDef.props;
export type GiDeadWoodEvents = typeof __propDef.events;
export type GiDeadWoodSlots = typeof __propDef.slots;
export default class GiDeadWood extends SvelteComponentTyped<GiDeadWoodProps, GiDeadWoodEvents, GiDeadWoodSlots> {
}
export {};
