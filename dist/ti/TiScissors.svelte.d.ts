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
export type TiScissorsProps = typeof __propDef.props;
export type TiScissorsEvents = typeof __propDef.events;
export type TiScissorsSlots = typeof __propDef.slots;
export default class TiScissors extends SvelteComponentTyped<TiScissorsProps, TiScissorsEvents, TiScissorsSlots> {
}
export {};
