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
export type GiMusketProps = typeof __propDef.props;
export type GiMusketEvents = typeof __propDef.events;
export type GiMusketSlots = typeof __propDef.slots;
export default class GiMusket extends SvelteComponentTyped<GiMusketProps, GiMusketEvents, GiMusketSlots> {
}
export {};
