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
export type GiScissorsProps = typeof __propDef.props;
export type GiScissorsEvents = typeof __propDef.events;
export type GiScissorsSlots = typeof __propDef.slots;
export default class GiScissors extends SvelteComponentTyped<GiScissorsProps, GiScissorsEvents, GiScissorsSlots> {
}
export {};
